var injector = {
	
	/*
	 * script: string
	 */
	executeScript: function(script, callback) {
		chrome.tabs.executeScript(storage.tab.id, {code:script}, function() {
			debug.log("Script executed: " + script.substr(0,20).replace("\n"," "));
			callback();
			return;
		});
	},
	
	/*
	 * script: file location
	 */
	executeFile: function(file, callback) {
		chrome.tabs.executeScript(storage.tab.id, {file:file}, function() {
			debug.log("File executed: "+file.substr(0,20).replace("\n"," "));
			callback();
			return;
		});
	},
};