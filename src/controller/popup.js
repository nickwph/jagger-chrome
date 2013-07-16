$(document).ready(function () {

    // init editor
    var editor = ace.edit("editor");
    editor.renderer.setShowGutter(false);
    editor.getSession().setMode("ace/mode/javascript");
    editor.getSession().setTabSize(4);
    editor.getSession().setUseSoftTabs(true);
    editor.getSession().setValue("function foo() {\n    var x = 'try me';\n    alert('successful');\n}\n\nfoo();");

    $('div.url>input[type="text"]').keyup(function () {
        var url = $(this).val();
        chrome.windows.getCurrent(function (window) {
            chrome.tabs.query({active: true, windowId: window.id}, function (tab) {
                var activeTab = tab[0];
                console.log(activeTab.url);
                console.log(url);
                console.log(activeTab.url.match(url));
                var result = activeTab.url.match(url);

            });
        });
    });

    chrome.windows.getCurrent(function (window) {
        chrome.tabs.query({active: true, windowId: window.id}, function (tab) {
            var activeTab = tab[0];
            console.log(activeTab.url);
        });
    });
});


//$("input,textarea").keyup(function () {
//    if ($(this).val() == "") $(this).parent().find("label").removeClass("hasome");
//    else $(this).parent().find("label").addClass("hasome");
//});
//
//var background = chrome.extension.getBackgroundPage();
//var saved = false;
//var savedId;
//
//chrome.windows.getCurrent(function (window) {
//    chrome.tabs.getSelected(window.id, function (tab) {
//        $("div.url>input").val(tab.url).parent().find("label").addClass("hasome");
//        ;
//        background.database.getMatchedScript(tab.url, function (data) {
//            console.log(data);
//            saved = true;
//            savedId = data.id;
//            $("div.url>input").val(data.url).parent().find("label").addClass(data.url != "" ? "hasome" : "");
//            $("div.description>input").val(data.description).parent().find("label").addClass(data.description != "" ? "hasome" : "");
//            $("div.script>textarea").val(data.script).parent().find("label").addClass(data.script != "" ? "hasome" : "");
//            $("div.autorun>input").attr('checked', data.autorun == "true" ? true : false);
//            $("div.jquery>input").attr('checked', data.jquery == "true" ? true : false);
//            $("div.regex>input").attr('checked', data.regex == "true" ? true : false);
//        });
//    });
//});
//
//$("div.inject").click(function () {
//    chrome.windows.getCurrent(function (window) {
//        chrome.tabs.getSelected(window.id, function (tab) {
//            if ($("div.jquery>input").checked == "true") background.injector.injectJQuery(tab.id);
//            background.injector.injectScript(tab.id, $("div.script>textarea").val());
//        });
//    });
//    if (saved) {
//        background.database.updateScript(savedId,
//            $("div.url>input").val(),
//            $("div.description>input").val(),
//            $("div.script>textarea").val(),
//            $("div.autorun>input").attr('checked') ? true : false,
//            $("div.jquery>input").attr('checked') ? true : false,
//            $("div.regex>input").attr('checked') ? true : false
//        );
//    }
//    else {
//        background.database.addScript($("div.url>input").val(),
//            $("div.description>input").val(),
//            $("div.script>textarea").val(),
//            $("div.autorun>input").attr('checked') ? true : false,
//            $("div.jquery>input").attr('checked') ? true : false,
//            $("div.regex>input").attr('checked') ? true : false
//        );
//        database.getLastInsertId(function (id) {
//            savedId = id
//        });
//        saved = true;
//    }
//});