var background = chrome.extension.getBackgroundPage();

function create(tag) {
    return $(document.createElement(tag))
}

background.database.getAllScripts(function (rows) {
    for (var i = 0; i < rows.length; i++) {
        var data = rows.item(i);
        var element = $("div.row.sample").clone().removeClass("sample").attr("data-id", data.id);
        element.find("div.save").click(updateRecord);
        element.find("div.delete").click(deleteRecord);

        element.find("div.url>input")
            .val(data.url)
            .parent().find("label")
            .addClass(data.url != "" ? "hasome" : "")
            .removeClass(data.url == "" ? "hasome" : "");
        element.find("div.description>input")
            .val(data.description)
            .parent().find("label")
            .addClass(data.description != "" ? "hasome" : "")
            .removeClass(data.description == "" ? "hasome" : "");
        element.find("div.script>textarea")
            .val(data.script)
            .parent().find("label")
            .addClass(data.script != "" ? "hasome" : "")
            .removeClass(data.script == "" ? "hasome" : "");
        element.find("div.autorun>input")
            .attr('checked', data.autorun == "true" ? true : false);
        element.find("div.jquery>input")
            .attr('checked', data.jquery == "true" ? true : false);
        element.find("div.regex>input")
            .attr('checked', data.regex == "true" ? true : false);

        $("#content").append(element);
    }
    $("#content").trigger('change');
});

$("#content").change(function (e) {
    if ($(".row").length <= 1) {
        $("#content").addClass("empty");
    }
    else {
        $("#content").removeClass("empty");
    }
});

$("div.add").click(function () {
    var element = $("div.row.sample").clone().removeClass("sample");
    background.database.addScript("http://nicholasworkshop.com/", "Nicholas Workshop", "alert('JavaScript Injected!');", true, true, false);
    background.database.getLastInsertId(function (id) {
        element.attr("data-id", id)
    });
    element.find("div.save").click(updateRecord);
    element.find("div.delete").click(deleteRecord);
    element.hide().appendTo("#content").slideDown('slow');
    $("#content").trigger('change');
});

$("div.delete-all").click(function () {
    background.database.dropTable();
    background.database.createTable();
    $("div.row:not(.sample)").slideUp('slow', function () {
        $(this).remove();
        $("#content").trigger('change');
    });
});

function updateRecord() {
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

function deleteRecord() {
    var element = $(this).parent().parent();
    background.database.deleteScript(element.attr("data-id"));
    element.slideUp('slow', function () {
        $(this).remove();
        $("#content").trigger('change');
    });
}