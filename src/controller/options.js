/**
 * Database connection.
 * @type {DbConnector}
 */
var database = chrome.extension.getBackgroundPage().dbConnector;

/**
 * Listeners for buttons.
 */
$("#content").change(onContentChange);
$("div.add").click(onAddButtonClickedListener);
$("div.delete-all").click(onDeleteAllClickedListener);

/**
 * Load all the scripts from database to the table.
 */
database.getAllScriptInfo(function (rows) {
    var content = $("#content");
    console.log(rows);
    for (var i = 0; i < rows.length; i++) {
        var data = rows.item(i);
        var dom = new ScriptDom().init();
        dom.setScriptInfo(data);
    }
    onContentChange();
});

/**
 * Default script info.
 * @type {ScriptInfo}
 */
var defaultSciptInfo = new ScriptInfo();
defaultSciptInfo.url = 'http://nicholasworkshop.com';
defaultSciptInfo.title = 'Nicholas Workshop';
defaultSciptInfo.script = 'alert("JavaScript Injected!")';

// ==============================================================

/**
 * Show empty message when there is no scripts displayed.
 */
function onContentChange() {
    if ($(".row").length <= 1) $("#content").addClass("empty");
    else $("#content").removeClass("empty");
}

/**
 * Handler when add-button is clicked.
 */
function onAddButtonClickedListener() {
    var dom = new ScriptDom().init();
    dom.setScriptInfo(defaultSciptInfo);
}

/**
 * Handler when save-button is clicked.
 */
function onSaveClickedListener() {
    var element = $(this).parent().parent();
    background.database.updateScript(element.attr("data-id"),
        element.find("div.url>input").val(),
        element.find("div.description>input").val(),
        element.find("div.script>textarea").val(),
        element.find("div.autorun>input").attr('checked') ? true : false,
        element.find("div.jquery>input").attr('checked') ? true : false,
        element.find("div.regex>input").attr('checked') ? true : false
    );
}

/**
 * Handler when delete-button is clicked.
 */
function onDeleteClickedListener() {
    var element = $(this).parent().parent();
    background.database.deleteScript(element.attr("data-id"));
    element.slideUp('slow', function () {
        $(this).remove();
        onContentChange();
    });
}

/**
 * Handler when delete-all-button is clicked.
 */
function onDeleteAllClickedListener() {
    background.database.dropTable();
    background.database.createTable();
    $("div.row:not(.sample)").slideUp('slow', function () {
        $(this).remove();
        onContentChange();
    });
}