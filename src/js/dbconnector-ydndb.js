function DbConnector() {

    /** @type {Database} */
    var db = new ydn.db.Storage('jsinjector');

    /**
     * Reset the database.
     */
    DbConnector.prototype.reset = function () {

    }

    /**
     * Check if it's the first run.
     * dbConnector.isVersionFirstRun(function(found){console.log(found)})
     * @param callback {function (found:boolean)}
     */
    DbConnector.prototype.isVersionFirstRun = function (callback) {
        db.get('initialization', 'first_run').always(function (record) {
            callback(record == undefined);
        });
    }

    /**
     * Set first-run value.
     * dbConnector.setVersionFirstRun()
     * @param bool {boolean, function} // TODO: OTHERS
     */
    DbConnector.prototype.setVersionFirstRun = function (bool, callback) {
        db.put('initialization', {value: true}, 'first_run');
        callback();
    }


    /**
     * Add a script to database.
     * @param info {ScriptInfo}
     * @param callback {function (id:string, rev:string)}
     */
    DbConnector.prototype.addScriptInfo = function (info, callback) {
        console.log(info.toObject());

        db.put('scripts', info.toObject()).done(function(object){
            console.log(object);
        });
        callback();
    }

    /**
     * Update a script to database.
     * @param info {ScriptInfo}
     * @param callback {function (ok:boolean, id:string, rev:string)}
     */
    DbConnector.prototype.updateScriptInfo = function (info, callback) {
        db.put('scripts', {script: info}, info.id);
        callback();
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
        db.from('scripts').list().done(function(objects){
            console.log(objects);
            callback(objects);
        });
    }

    /**
     *
     * @param info
     * @param callback {function (okay:boolean, data:object)}
     */
    DbConnector.prototype.deleteScriptInfo = function (id, callback) {
        db.remove('scripts', id).fail(function (e) {
            throw e;
        });
    }

    /**
     * Get url that matches the input one.
     * @param urlToMatch
     */
    DbConnector.prototype.matchScriptInfo = function (urlToMatch) {
        db.from('scripts').list().done(function(objects){
            console.log(objects);
            callback(objects);
        });
    }
}