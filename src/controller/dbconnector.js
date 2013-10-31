function DbConnector() {

    /** @type string */
    var db_name = 'scripts';

    /** @type {PouchDB} */
    var db = new PouchDB(db_name);

    /**
     * Reset the database.
     */
    DbConnector.prototype.reset = function () {
        PouchDB.allDbs(function (err, response) {
            for (var name in response) {
                PouchDB.destroy(name, function (err, info) {
                });
            }
        });
        db = new PouchDB(db_name);
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
//        info._id = info.id;
        db.post(info, function (err, result) {
            if (!err) {
                console.log('Successfully saved a script!');
                console.log(result);
                if (callback) callback(result.id, result.rev);
            }
            else {
                console.log('Unexpected error!');
                console.log(err);
            }
        });
    }

    /**
     * Update a script to database.
     * @param info {ScriptInfo}
     * @param callback {function (ok:boolean, id:string, rev:string)}
     */
    DbConnector.prototype.updateScriptInfo = function (info, callback) {
        if (info._id == undefined) {
            return console.log('Id not provided.');
        }
        self.addScriptInfo(info, callback);
    }

    /**
     * Retrieve a script from database.
     * @param id {string}
     * @param callback {function(object)}
     */
    DbConnector.prototype.getScriptInfo = function (id, callback) {
        db.get(info, function (err, doc) {
            if (!err) {
                console.log(doc);
                if (callback) callback(doc);
            }
        });
    }


    /**
     * Retrieve all scripts.
     * @param info
     * @param callback
     */
    DbConnector.prototype.getAllScriptInfo = function (info, callback) {
        db.allDocs({include_docs: true}, function (err, response) {
            if (!err) {
                console.log(response);
                var scripts = [];
                for (var row in response.rows) {
                    scripts.push(row.doc);
                }
                if (callback) callback(scripts);
            }
        });
    }

    /**
     *
     * @param info
     * @param callback {function (okay:boolean, data:object)}
     */
    DbConnector.prototype.deleteScriptInfo = function (id, callback) {
        db.get(id, function (err, doc) {
            db.remove(doc, function (err, response) {
                if (err) {
                    callback(false, err)
                }
                else {
                    callback(true, response)
                }
            });
        });

    }

    DbConnector.prototype.matchScriptInfo = function (urlToMatch) {


        function map(doc) {
            var result = urlToMatch.url.match(doc.url);
            if (result) {
                emit(doc);
            }
        }

        db.query({map: map}, {reduce: false}, function (err, response) {
        });
    }
}

var defaultSciptInfo = new ScriptInfo();
defaultSciptInfo.url = 'http://nicholasworkshop.com';
defaultSciptInfo.title = 'Nicholas Workshop';
defaultSciptInfo.script = 'alert("JavaScript Injected!")';
