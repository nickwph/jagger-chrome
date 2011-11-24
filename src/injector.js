var injector = {};

injector.injectScript = function(tabId, code) {
    chrome.tabs.executeScript(tabId, {code:code}, function() {
        console.log("Script executed: "+script.substr(0,20).replace("\n"," "));
    });
}

