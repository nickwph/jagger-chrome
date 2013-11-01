var dbConnector = new DbConnector();




//database.open();
//database.createTable();
//
//// First run
//if (localStorage['firstRun'] != 'true') {
//    database.addScript("http://nicholasworkshop.com/",
//        "Nicholas Workshop",
//        "alert('JavaScript Injected!');",
//        true, true, false);
//    database.addScript("/www.facebook.com/",
//        "Trick on Facebook",
//        "$('#navHome>a').html('Nicholas Workshop').attr('href','http://nicholasworkshop.com/');", true, true, true);
//    localStorage['firstRun'] = 'true';
//}
//
//chrome.tabs.onUpdated.addListener(function (tabId, info, tab) {
//    //run when the page finished loading, otherwise it fires twice
//    if (info.status == "complete") {
//        database.getMatchedScript(tab.url, function (data) {
//            console.log("Match found: " + tab.url);
//            if (data.autorun == "true") {
//                if (data.jquery == "true") injector.injectJQuery(tabId, function () {
//                    injector.injectScript(tabId, data.script)
//                });
//                else injector.injectScript(tabId, data.script);
//            }
//        });
//    }
//});
