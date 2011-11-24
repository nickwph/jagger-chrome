var injector = {};

injector.injectScript = function(tabId, code) {
    chrome.tabs.executeScript(tabId, {code:code}, function() {
        console.log("Script injected: "+code.substr(0,20).replace("\n"," "));
    });
}

injector.injectJQuery = function(tabId) {
    chrome.tabs.executeScript(tabId, {file:"jquery/jquery-1.6.1.min.js"}, function() {
        console.log("jQuery injected.");
    });
}
