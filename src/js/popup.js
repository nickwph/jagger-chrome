require([
    'jquery',
    'ace',
    'injector'
], function ($) {

//    console.log(ace);
//    ace.config.set("basePath", "ace");

    // init editor
    var editor = window.ace.edit("editor");
    editor.renderer.setShowGutter(false);
    editor.getSession().setMode("ace/mode/javascript");
    editor.getSession().setTabSize(4);
    editor.getSession().setUseSoftTabs(true);
    editor.getSession().setValue("function foo() {\n    var x = 'try me';\n    alert('successful');\n}\n\nfoo();");

    // activate placeholders
    $("input, textarea").keyup(function () {
        if ($(this).val() == "") $(this).parent().find("label").removeClass("hasome");
        else $(this).parent().find("label").addClass("hasome");
    });

    // check if url is matches
    $('#url-textfield').keyup(function () {
        var url = $(this).val();
        chrome.windows.getCurrent(function (window) {
            chrome.tabs.query({active: true, windowId: window.id}, function (tab) {
                try {
                    var activeTab = tab[0];
                    var result = activeTab.url.match(url);
                    if (result) {
                        $('#message-entry')
                            .removeClass()
                            .addClass('pass')
                            .html("Pass. Script will apply to this web page.");
                    }
                    else {
                        $('#message-entry')
                            .removeClass()
                            .addClass('error')
                            .html("Url does not match! Script will not apply to this web page!");
                    }
                }
                catch (exception) {
                    $('#message-entry')
                        .removeClass()
                        .addClass('error')
                        .html(exception.message);
                    throw exception;
                }
            });
        });
    });

    // use current url
    chrome.windows.getCurrent(function (window) {
        chrome.tabs.query({active: true, windowId: window.id}, function (tab) {
            var activeTab = tab[0];
            $("#url-textfield").val(activeTab.url).keyup();
        });
    });

    $("#inject-button").click(function () {
        console.log("inject button clicked.")
        chrome.windows.getCurrent(function (window) {
            chrome.tabs.query({active: true, windowId: window.id}, function (tab) {
//                var background = chrome.extension.getBackgroundPage();
//                if ($("div.jquery>input").checked == "true") injector.injectJQuery(tab.id);
                var code = editor.getSession().getValue();
                nicholasworkshop.injector.injectScript(tab.id, code);
            });
        });
//        if (saved) {
//            background.database.updateScript(savedId,
//                $("div.url>input").val(),
//                $("div.description>input").val(),
//                $("div.script>textarea").val(),
//                $("div.autorun>input").attr('checked') ? true : false,
//                $("div.jquery>input").attr('checked') ? true : false,
//                $("div.regex>input").attr('checked') ? true : false
//            );
//        }
//        else {
//            background.database.addScript($("div.url>input").val(),
//                $("div.description>input").val(),
//                $("div.script>textarea").val(),
//                $("div.autorun>input").attr('checked') ? true : false,
//                $("div.jquery>input").attr('checked') ? true : false,
//                $("div.regex>input").attr('checked') ? true : false
//            );
//            database.getLastInsertId(function (id) {
//                savedId = id
//            });
//            saved = true;
//        }
    });


});