var database = {};

database.db = null;

database.open = function() {
    database.db = openDatabase("JavaScriptInjector", 
                               "1.0", 
                               "JavaScript Injector Database", 
                               5 * 1024 * 1024); // 5MB
}

database.createTable = function() {
    database.db.transaction(function(tx) {
        tx.executeSql("CREATE TABLE IF NOT EXISTS Scripts (" +
                      "id INTEGER PRIMARY KEY ASC, "+
                      "url TEXT, " + 
					  "description TEXT, " + 
                      "script TEXT, " + 
                      "autorun BOOLEAN, " + 
                      "jquery BOOLEAN," +
					  "regex BOOLEAN)", 
                      []);
    });
}

database.dropTable = function() {
    database.db.transaction(function(tx) {
        tx.executeSql("DROP TABLE Scripts");
    });
}

database.addScript = function(url, description, script, autorun, jquery, regex) {
    database.db.transaction(function(tx){
        tx.executeSql("INSERT INTO Scripts " +
                      "(url, description, script, autorun, jquery, regex) " + 
                      "VALUES (?,?,?,?,?,?)",
                      [url, description, script, autorun, jquery, regex],
                      database.onSuccess,
                      database.onError);
    });
}

database.getLastInsertId = function(callback) {
    database.db.transaction(function(tx) {
        tx.executeSql("SELECT MAX(id) AS id FROM scripts", 
                      [], 
                      function(tx, rs) { 
                          callback(rs.rows.item(0).id); 
                          console.log(rs.rows.item(0).id);
                      },
                      database.onError);
    });
}

database.updateScript = function(id, url, description, script, autorun, jquery, regex) {
    database.db.transaction(function(tx){
        tx.executeSql("UPDATE Scripts SET " + 
                      "url = ?, " +
                      "description = ?, " +
                      "script = ?, " +
                      "autorun = ?, " +
                      "jquery = ?, " +
                      "regex = ? " +
                      "WHERE id = ?",
                      [url, description, script, autorun, jquery, regex, id],
                      database.onSuccess,
                      database.onError);
    });
}

database.getAllScripts = function(callback) {
    database.db.transaction(function(tx) {
        tx.executeSql("SELECT * FROM scripts", 
                      [], 
                      function(tx, rs) { callback(rs.rows) },
                      database.onError);
    });
}

database.deleteScript = function(id) {
    database.db.transaction(function(tx){
        tx.executeSql("DELETE FROM scripts WHERE id=?", 
                      [id],
                      database.onSuccess,
                      database.onError);
    });
}

database.getMatchedScript = function(url, callback) {
    database.getAllScripts(function(rows) {
        for (var i=0; i<rows.length; i++) {
			if ((rows.item(i).regex=="true" && url.match(rows.item(i).url)) || (rows.item(i).regex=="false" && url==rows.item(i).url)) {
			//if (url.match(rows.item(i).url)) {
				callback(rows.item(i));
                break; // Get only the first one
			}
		}
    });
}

database.onSuccess = function(tx, r) {
	//console.log("database.onSuccess");
    //database.getAllTodoItems(loadTodoItems);
}

database.onError = function(tx, e) {
	console.log("database.onError: " + e.message);
    alert("There has been an error: " + e.message);
}