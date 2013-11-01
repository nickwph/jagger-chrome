function DbConnector() {

    /** @type string */
    var db_name = 'scripts';

    /** @type {Database} */
    var db = init();

    /**
     * Initialize the database
     */
    function init() {
        var new_db = openDatabase(db_name, '1.0', '', 5 * 1024 * 1024); // 5MB
        new_db.transaction(function (tx) {
            tx.executeSql(
                "CREATE TABLE IF NOT EXISTS Scripts (" +
                    "id INTEGER PRIMARY KEY ASC, " +
                    "url TEXT, " +
                    "description TEXT, " +
                    "script TEXT, " +
                    "autorun BOOLEAN, " +
                    "jquery BOOLEAN," +
                    "regex BOOLEAN)");
        });
        return new_db;
    }

    /**
     * Reset the database.
     */
    DbConnector.prototype.reset = function () {
        db.transaction(function (tx) {
            tx.executeSql("DROP TABLE Scripts");
        });
        db = init();
    }

    /**
     * Check if it's the first run.
     * dbConnector.isVersionFirstRun(function(found){console.log(found)})
     * @param callback {function (found:boolean)}
     */
    DbConnector.prototype.isVersionFirstRun = function (callback) {
        // connection database
        var infoDb = new PouchDB('info');
        // get info from database
        infoDb.get('initialized', function (err, doc) {
            if (err) callback(true);
            else callback(false);
        });
    }

    /**
     * Set first-run value.
     * dbConnector.setVersionFirstRun()
     * @param bool {boolean}
     */
    DbConnector.prototype.setVersionFirstRun = function (bool) {
        // boolean in js has undefined state
        if (bool == undefined) {
            return console.log('Value not provided.');
        }
        // connection database
        var infoDb = new PouchDB('info');
        // get doc from database
        infoDb.get('initialized', function (err, doc) {
            // set to true, but not found in database
            if (bool && err) {
                infoDb.put({_id: 'initialized'}, function (err, response) {
                });
            }
            // set to false, and found in database
            else if (!bool && !err) {
                infoDb.remove(doc, function (err, response) {
                });
            }
            // i don't think there is any other case.
            else {
                console.log('Unexpected error!');
            }
        });
    }


    /**
     * Add a script to database.
     * @param info {ScriptInfo}
     * @param callback {function (id:string, rev:string)}
     */
    DbConnector.prototype.addScriptInfo = function (info, callback) {
        db.transaction(function (tx) {
            tx.executeSql(
                "INSERT INTO Scripts " +
                    "(url, description, script, autorun, jquery, regex) " +
                    "VALUES (?,?,?,?,?,?)",
                [info.url, info.description, info.script, info.autorun, info.jquery, info.regex],
                function success() {
                    db.transaction(function (tx) {
                        tx.executeSql("SELECT MAX(id) AS id FROM scripts",
                            [],
                            function (tx, rs) {
                                callback(rs.rows.item(0).id);
                                console.log(rs.rows.item(0).id);
                            },
                            database.onError);
                    });
                },
                function failed() {

                });
        });

    }

    /**
     * Update a script to database.
     * @param info {ScriptInfo}
     * @param callback {function (ok:boolean, id:string, rev:string)}
     */
    DbConnector.prototype.updateScriptInfo = function (info, callback) {
        db.transaction(function (tx) {
            tx.executeSql(
                "UPDATE Scripts SET " +
                    "url = ?, " +
                    "description = ?, " +
                    "script = ?, " +
                    "autorun = ?, " +
                    "jquery = ?, " +
                    "regex = ? " +
                    "WHERE id = ?",
                [info.url, info.description, info.script, info.autorun, info.jquery, info.regex, info.id],
                function success() {

                },
                function failed() {

                });
        });
    }

    /**
     * Retrieve a script from database.
     * @param id {string}
     * @param callback {function(object)}
     */
    DbConnector.prototype.getScriptInfo = function (id, callback) {
        // TODO
    }


    /**
     * Retrieve all scripts.
     * @param callback
     */
    DbConnector.prototype.getAllScriptInfo = function (callback) {
        db.transaction(function (tx) {
            tx.executeSql("SELECT * FROM scripts", null,
                function sucess(tx, rs) {
                    callback(rs.rows)
                },
                function failed() {
                });
        });
    }

    /**
     *
     * @param info
     * @param callback {function (okay:boolean, data:object)}
     */
    DbConnector.prototype.deleteScriptInfo = function (id, callback) {
        db.transaction(function (tx) {
            tx.executeSql("DELETE FROM scripts WHERE id=?", [id],
                function success() {
                },
                function failed() {
                });
        });

    }

    /**
     * Get url that matches the input one.
     * @param urlToMatch
     */
    DbConnector.prototype.matchScriptInfo = function (urlToMatch) {
        self.getAllScripts(function (rows) {
            for (var i = 0; i < rows.length; i++) {
                if ((rows.item(i).regex == "true" && url.match(rows.item(i).url)) || (rows.item(i).regex == "false" && url == rows.item(i).url)) {
                    //if (url.match(rows.item(i).url)) {
                    callback(rows.item(i));
                    break; // Get only the first one
                }
            }
        });
    }
}