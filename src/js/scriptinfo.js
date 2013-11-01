function ScriptInfo() {

    /** @type string */
    this._id = undefined;

    /** @type string */
    this._rev = undefined;

    /** @type int */
    this.id = undefined;

    /** @type string */
    this.url = '';

    /** @type string */
    this.description = '';

    /** @type string */
    this.title = '';

    /** @type string */
    this.script = '';

    /** @type boolean */
    this.autorun = false;

    /** @type boolean */
    this.jquery = false;

    /** @type boolean */
    this.regex = false;

    /**
     * Parse an object to a ScriptInfo object.
     * @param data {{
     *      id: (*|id|string|id|id|id),
     *      title: (*|string),
     *      description: (*|string|description),
     *      url: (*|string|Function|url|url|url),
     *      script: (*|script|script|script|script|script),
     *      autorun: (*|boolean|autorun),
     *      jquery: (*|jquery|jquery|jquery|jquery|jquery),
     *      regex: (*|regex|regex|regex|regex|regex)
     *  }}
     * @return {ScriptInfo}
     */
    ScriptInfo.prototype.parse = function (data) {
        if (data == undefined) return;
        self._id = data._id || self._id;
        self._rev = data._id || self._rev;
        self.id = data.id || self.id;
        self.url = data.url || self.url;
        self.description = data.description || self.description;
        self.title = data.title || self.title;
        self.script = data.script || self.script;
        self.autorun = data.autorun || self.autorun;
        self.jquery = data.jquery || self.jquery;
        self.regex = data.regex || self.regex;
        return this;
    }

    /**
     * Export object of values.
     * @returns {{
     *      id: (*|id|string|id|id|id),
     *      title: (*|string),
     *      description: (*|string|description),
     *      url: (*|string|Function|url|url|url),
     *      script: (*|script|script|script|script|script),
     *      autorun: (*|boolean|autorun),
     *      jquery: (*|jquery|jquery|jquery|jquery|jquery),
     *      regex: (*|regex|regex|regex|regex|regex)
     *  }}
     */
    ScriptInfo.prototype.toObject = function () {
        return {
            id: self.id,
            title: self.title,
            description: self.description,
            url: self.url,
            script: self.script,
            autorun: self.autorun,
            jquery: self.jquery,
            regex: self.regex
        };
    }
}