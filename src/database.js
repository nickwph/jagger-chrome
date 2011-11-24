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
                      "script TEXT, " + 
                      "autorun BOOLEAN)", 
                      []);
    });
}

database.dropTable = function() {
    database.db.transaction(function(tx) {
        tx.executeSql("DROP TABLE Scripts");
    });
}

database.addScript = function(url, script, autorun) {
    database.db.transaction(function(tx){
        tx.executeSql("INSERT INTO Scripts (url, script, autorun) VALUES (?,?,?)",
                      [url, script, autorun],
                      database.onSuccess,
                      database.onError);
    });
}

database.getAllScripts = function(callback) {
    database.db.transaction(function(tx) {
        tx.executeSql("SELECT * FROM scripts", 
                      [], 
                      callback,
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
    var allScripts = database.getAllScripts(function(tx, rs) {
        for (var i=0; i < rs.rows.length; i++) {
			if (url.match(rs.rows.item(i).url)) {
				callback(rs.rows.item(i));
                break; // Get only the first one
			}
		}
    });
}

database.onSuccess = function(tx, r) {
    //database.getAllTodoItems(loadTodoItems);
}

database.onError = function(tx, e) {
    alert("There has been an error: " + e.message);
}


/* ---- */

database.getAllTodoItems = function(renderFunc) {
    database.db.transaction(function(tx) {
        tx.executeSql("SELECT * FROM Scripts", 
                      [], 
                      renderFunc,
                      database.onError);
    });
}

database.deleteTodo = function(id) {
    database.db.transaction(function(tx){
        tx.executeSql("DELETE FROM Scripts WHERE ID=?", 
                      [id],
                      database.onSuccess,
                      database.onError);
    });
}

function loadTodoItems(tx, rs) {
    var rowOutput = "";
    var todoItems = document.getElementById("todoItems");
    for (var i=0; i < rs.rows.length; i++) {
        rowOutput += renderTodo(rs.rows.item(i));
    }
    
    todoItems.innerHTML = rowOutput;
}

function renderTodo(row) {
    return "<li>" + row.todo  + " [<a href='javascript:void(0);'  onclick='database.deleteTodo(" + row.ID +");'>Delete</a>]</li>";
}

function init() {
    database.open();
    database.createTable();
    database.getAllTodoItems(loadTodoItems);
}

function addTodo() {
    var todo = document.getElementById("todo");
    database.addTodo(todo.value);
    todo.value = "";
}