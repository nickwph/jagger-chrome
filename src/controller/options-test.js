var dbConnector = new DbConnector();

dbConnector.isVersionFirstRun(function (bool) {
    console.log(bool);

    dbConnector.setVersionFirstRun(true, function () {
        dbConnector.isVersionFirstRun(function (bool) {
            console.log(bool);

            dbConnector.setVersionFirstRun(false, function () {
                dbConnector.isVersionFirstRun(function (bool) {
                    console.log(bool);
                });
            });
        });
    });
});


var defaultSciptInfo = new ScriptInfo();
defaultSciptInfo.url = 'http://nicholasworkshop.com';
defaultSciptInfo.title = 'Nicholas Workshop';
defaultSciptInfo.script = 'alert("JavaScript Injected!")';

dbConnector.addScriptInfo(defaultSciptInfo, function () {

});