var storage = {
	
	save: function(detail) {
		var id = storage.contain(detail.url);
		if (id == -1) {
			var current = storage.current();
			console.log(JSON.parse(localStorage[property.version]).push(detail));
			localStorage[property.version] = JSON.stringify(JSON.parse(localStorage[property.version]).push(detail));
			
		}
		else {
			localStorage[property.version] = JSON.stringify(storage.current().splice(id,1,detail));
		}
	},
	//__GET_RECORD__//
	get: function(id) {
		return storage.current()[id];
	},
	//__REMOVE_RECORD__//
	remove: function(id) {
		localStorage[property.version] = JSON.stringify(storage.current().splice(id,1));
	},
	//__NUMBER_OF_RECORDS__//
	length: function() {
		return storage.current().length;
	},
	//__CHECK_EXISTANCE__//
	contain: function(url) {
		for (id in storage.current()) {
			if (url.match(storage.get(id).url)) {
				return id;
			}
		}
		return -1;
	},
	//__JSON_FOR_THE_CURRENT_VERSION__//
	current: function() {
			if (localStorage[property.version][0] != "[") return [];
			return JSON.parse(localStorage[property.version]);
		
	},
	reset: function() {
		localStorage.clear();
		localStorage[property.version] = "[]";
	},
	check: function() {
		/*if (JSON.parse(storage.current).constructor.toString().indexOf("Array") == -1) {
			debug.log("Database Crush! Reseting Database");
			localStorage[property.version] = "[]";
		}*/
	},
	tab: null
};