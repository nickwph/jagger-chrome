var nicholasworkshop;
if (nicholasworkshop === undefined) nicholasworkshop = {}

nicholasworkshop.injector = function () {

    nicholasworkshop.injector.injectScript = function (tabId, code) {
        chrome.tabs.executeScript(tabId, {code: code}, function () {
            //console.log("Script injected: "+code.substr(0,20).replace("\n"," "));
            console.log("Script injected: \n" + code);
        });
    }

    nicholasworkshop.injector.injectJQuery = function (tabId, callback) {
        chrome.tabs.executeScript(tabId, {file: "jquery/jquery-1.6.1.min.js"}, function () {
            console.log("jQuery injected.");
            callback();
        });
    }

}