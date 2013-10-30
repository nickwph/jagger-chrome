function ScriptDom(dom) {

    /** @type jQuery */
    this.dom = dom || this.init();

    /**
     * Create a script dom by cloning the sample dom.
     */
    this.prototype.init = function () {
        /** @type jQuery */
        var element = $("div.row.sample").clone();
        element.removeClass("sample");
        element.find("div.save").click(onSaveClickedListener);
        element.find("div.delete").click(onDeleteClickedListener);
        element.hide().appendTo("#content").slideDown('slow');
        this.dom = element;
    }

    /**
     * Update the script dom with ScriptInfo data.
     * @param info {ScriptInfo}
     */
    this.prototype.setScriptInfo = function (info) {
        /** @type jQuery */
        var element = this.dom;
        element.attr("data-id", info.id);
        element.find("div.url>input")
            .val(info.url)
            .parent().find("label")
            .addClass(info.url != "" ? "hasome" : "")
            .removeClass(info.url == "" ? "hasome" : "");
        element.find("div.description>input")
            .val(info.description)
            .parent().find("label")
            .addClass(info.description != "" ? "hasome" : "")
            .removeClass(info.description == "" ? "hasome" : "");
        element.find("div.script>textarea")
            .val(info.script)
            .parent().find("label")
            .addClass(info.script != "" ? "hasome" : "")
            .removeClass(info.script == "" ? "hasome" : "");
        element.find("div.autorun>input")
            .attr('checked', info.autorun == "true");
        element.find("div.jquery>input")
            .attr('checked', info.jquery == "true");
        element.find("div.regex>input")
            .attr('checked', info.regex == "true");
    }

    /**
     * Parse a script dom info ScriptInfo type.
     * @param dom {HTMLElement}
     * @return {ScriptInfo}
     */
    this.prototype.getScriptInfo = function () {
        /** @type jQuery */
        var element = this.dom;
        /** @type ScriptInfo */
        var info = new ScriptInfo();
        info.id = element.attr("data-id");
        info.url = element.find("div.url>input").val();
        info.description = element.find("div.description>input").val();
        info.script = element.find("div.script>textarea").val();
        info.autorun = element.find("div.autorun>input").attr('checked') ? true : false;
        info.jquery = element.find("div.jquery>input").attr('checked') ? true : false;
        info.regex = element.find("div.regex>input").attr('checked') ? true : false;
        return info;
    }
}