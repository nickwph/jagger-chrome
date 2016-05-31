chrome = function() {}

chrome.browsingData = function() {}

/**
 * Reports which types of data are currently selected in the 'Clear browsing data' settings UI.  Note: some of the data types included in this API are not available in the settings UI, and some UI settings control more than one data type listed here.
 * @params {function} callback
 */
chrome.browsingData.settings = function(callback) {}

/**
 * Clears various types of browsing data stored in a user's profile.
 * @params {} options
 * @params {} dataToRemove The set of data types to remove.
 * @params {function} callback Called when deletion has completed.
 */
chrome.browsingData.remove = function(options, dataToRemove, callback) {}

/**
 * Clears websites' appcache data.
 * @params {} options
 * @params {function} callback Called when websites' appcache data has been cleared.
 */
chrome.browsingData.removeAppcache = function(options, callback) {}

/**
 * Clears the browser's cache.
 * @params {} options
 * @params {function} callback Called when the browser's cache has been cleared.
 */
chrome.browsingData.removeCache = function(options, callback) {}

/**
 * Clears the browser's cookies and server-bound certificates modified within a particular timeframe.
 * @params {} options
 * @params {function} callback Called when the browser's cookies and server-bound certificates have been cleared.
 */
chrome.browsingData.removeCookies = function(options, callback) {}

/**
 * Clears the browser's list of downloaded files (<em>not</em> the downloaded files themselves).
 * @params {} options
 * @params {function} callback Called when the browser's list of downloaded files has been cleared.
 */
chrome.browsingData.removeDownloads = function(options, callback) {}

/**
 * Clears websites' file system data.
 * @params {} options
 * @params {function} callback Called when websites' file systems have been cleared.
 */
chrome.browsingData.removeFileSystems = function(options, callback) {}

/**
 * Clears the browser's stored form data (autofill).
 * @params {} options
 * @params {function} callback Called when the browser's form data has been cleared.
 */
chrome.browsingData.removeFormData = function(options, callback) {}

/**
 * Clears the browser's history.
 * @params {} options
 * @params {function} callback Called when the browser's history has cleared.
 */
chrome.browsingData.removeHistory = function(options, callback) {}

/**
 * Clears websites' IndexedDB data.
 * @params {} options
 * @params {function} callback Called when websites' IndexedDB data has been cleared.
 */
chrome.browsingData.removeIndexedDB = function(options, callback) {}

/**
 * Clears websites' local storage data.
 * @params {} options
 * @params {function} callback Called when websites' local storage has been cleared.
 */
chrome.browsingData.removeLocalStorage = function(options, callback) {}

/**
 * Clears plugins' data.
 * @params {} options
 * @params {function} callback Called when plugins' data has been cleared.
 */
chrome.browsingData.removePluginData = function(options, callback) {}

/**
 * Clears the browser's stored passwords.
 * @params {} options
 * @params {function} callback Called when the browser's passwords have been cleared.
 */
chrome.browsingData.removePasswords = function(options, callback) {}

/**
 * Clears websites' WebSQL data.
 * @params {} options
 * @params {function} callback Called when websites' WebSQL databases have been cleared.
 */
chrome.browsingData.removeWebSQL = function(options, callback) {}

chrome.contextMenus = function() {}

/**
 * Creates a new context menu item. Note that if an error occurs during creation, you may not find out until the creation callback fires (the details will be in chrome.runtime.lastError).
 * @params {object} createProperties
 * @params {function} callback Called when the item has been created in the browser. If there were any problems creating the item, details will be available in chrome.runtime.lastError.
 */
chrome.contextMenus.create = function(createProperties, callback) {}

/**
 * Updates a previously created context menu item.
 * @params {} id The ID of the item to update.
 * @params {object} updateProperties The properties to update. Accepts the same values as the create function.
 * @params {function} callback Called when the context menu has been updated.
 */
chrome.contextMenus.update = function(id, updateProperties, callback) {}

/**
 * Removes a context menu item.
 * @params {} menuItemId The ID of the context menu item to remove.
 * @params {function} callback Called when the context menu has been removed.
 */
chrome.contextMenus.remove = function(menuItemId, callback) {}

/**
 * Removes all context menu items added by this extension.
 * @params {function} callback Called when removal is complete.
 */
chrome.contextMenus.removeAll = function(callback) {}

chrome.fileBrowserHandler = function() {}

/**
 * Prompts user to select file path under which file should be saved. When the file is selected, file access permission required to use the file (read, write and create) are granted to the caller. The file will not actually get created during the function call, so function caller must ensure its existence before using it. The function has to be invoked with a user gesture.
 * @params {object} selectionParams Parameters that will be used while selecting the file.
 * @params {function} callback Function called upon completion.
 */
chrome.fileBrowserHandler.selectFile = function(selectionParams, callback) {}

chrome.experimental.systemInfo.cpu = function() {}

/**
 * Get CPU information.
 * @params {function} callback
 */
chrome.experimental.systemInfo.cpu.get = function(callback) {}

chrome.power = function() {}

/**
 * Requests that power management be temporarily disabled. |level| describes the degree to which power management should be disabled.
 * @params {} level
 */
chrome.power.requestKeepAwake = function(level) {}

/**
 * Releases a request previously made via requestKeepAwake().
 */
chrome.power.releaseKeepAwake = function() {}

chrome.devtools.network = function() {}

/**
 * Returns HAR log that contains all known network requests.
 * @params {function} callback A function that receives the HAR log when the request completes.
 */
chrome.devtools.network.getHAR = function(callback) {}

chrome.experimental.systemInfo.storage = function() {}

/**
 * Get the storage information from the system. The argument passed to the callback is an array of StorageUnitInfo objects.
 * @params {function} callback
 */
chrome.experimental.systemInfo.storage.get = function(callback) {}

chrome.commands = function() {}

/**
 * Returns all the registered extension commands for this extension and their shortcut (if active).
 * @params {function} callback Called to return the registered commands.
 */
chrome.commands.getAll = function(callback) {}

chrome.declarativeContent = function() {}

chrome.management = function() {}

/**
 * Returns a list of information about installed extensions and apps.
 * @params {function} callback
 */
chrome.management.getAll = function(callback) {}

/**
 * Returns information about the installed extension, app, or theme that has the given ID.
 * @params {string} id The ID from an item of <a href="management.html#type-ExtensionInfo">ExtensionInfo</a>.
 * @params {function} callback
 */
chrome.management.get = function(id, callback) {}

/**
 * Returns a list of <a href='permission_warnings.html'>permission warnings</a> for the given extension id.
 * @params {string} id The ID of an already installed extension.
 * @params {function} callback
 */
chrome.management.getPermissionWarningsById = function(id, callback) {}

/**
 * Returns a list of <a href='permission_warnings.html'>permission warnings</a> for the given extension manifest string. Note: This function can be used without requesting the 'management' permission in the manifest.
 * @params {string} manifestStr Extension manifest JSON string.
 * @params {function} callback
 */
chrome.management.getPermissionWarningsByManifest = function(manifestStr, callback) {}

/**
 * Enables or disables an app or extension.
 * @params {string} id This should be the id from an item of <a href="management.html#type-ExtensionInfo">ExtensionInfo</a>.
 * @params {boolean} enabled Whether this item should be enabled or disabled.
 * @params {function} callback
 */
chrome.management.setEnabled = function(id, enabled, callback) {}

/**
 * Uninstalls a currently installed app or extension.
 * @params {string} id This should be the id from an item of <a href="management.html#type-ExtensionInfo">ExtensionInfo</a>.
 * @params {object} options
 * @params {function} callback
 */
chrome.management.uninstall = function(id, options, callback) {}

/**
 * Uninstalls the calling extension. Note: This function can be used without requesting the 'management' permission in the manifest.
 * @params {object} options
 * @params {function} callback
 */
chrome.management.uninstallSelf = function(options, callback) {}

/**
 * Launches an application.
 * @params {string} id The extension id of the application.
 * @params {function} callback
 */
chrome.management.launchApp = function(id, callback) {}

chrome.alarms = function() {}

/**
 * Creates an alarm.  Near the time(s) specified by <var>alarmInfo</var>, the <code>onAlarm</code> event is fired. If there is another alarm with the same name (or no name if none is specified), it will be cancelled and replaced by this alarm.<br/><br/> In order to reduce the load on the user's machine, Chrome limits alarms to at most once every 1 minute but may delay them an arbitrary amount more.  That is, setting <code><a href="alarms.html#property-AlarmCreateInfo-delayInMinutes">delayInMinutes</a></code> or <code><a href="alarms.html#property-AlarmCreateInfo-periodInMinutes">periodInMinutes</a></code> to less than <code>1</code> will not be honored and will cause a warning.  <code><a href="alarms.html#property-AlarmCreateInfo-when">when</a></code> can be set to less than 1 minute after "now" without warning but won't actually cause the alarm to fire for at least 1 minute.<br/><br/> To help you debug your app or extension, when you've loaded it unpacked, there's no limit to how often the alarm can fire.
 * @params {string} name Optional name to identify this alarm. Defaults to the empty string.
 * @params {} alarmInfo Describes when the alarm should fire.  The initial time must be specified by either <var>when</var> or <var>delayInMinutes</var> (but not both).  If <var>periodInMinutes</var> is set, the alarm will repeat every <var>periodInMinutes</var> minutes after the initial event.  If neither <var>when</var> or <var>delayInMinutes</var> is set for a repeating alarm, <var>periodInMinutes</var> is used as the default for <var>delayInMinutes</var>.
 */
chrome.alarms.create = function(name, alarmInfo) {}

/**
 * Retrieves details about the specified alarm.
 * @params {string} name The name of the alarm to get. Defaults to the empty string.
 * @params {function} callback
 */
chrome.alarms.get = function(name, callback) {}

/**
 * Gets an array of all the alarms.
 * @params {function} callback
 */
chrome.alarms.getAll = function(callback) {}

/**
 * Clears the alarm with the given name.
 * @params {string} name The name of the alarm to clear. Defaults to the empty string.
 */
chrome.alarms.clear = function(name) {}

/**
 * Clears all alarms.
 */
chrome.alarms.clearAll = function() {}

chrome.experimental.devtools.console = function() {}

/**
 * Adds a message to the console.
 * @params {} severity The severity of the message.
 * @params {string} text The text of the message.
 */
chrome.experimental.devtools.console.addMessage = function(severity, text) {}

/**
 * Retrieves console messages.
 * @params {function} callback A function that receives console messages when the request completes.
 */
chrome.experimental.devtools.console.getMessages = function(callback) {}

chrome.webstore = function() {}

/**
 * None
 * @params {string} url If you have more than one <code>&lt;link&gt;</code> tag on your page with the <code>chrome-webstore-item</code> relation, you can choose which item you'd like to install by passing in its URL here. If it is omitted, then the first (or only) link will be used. An exception will be thrown if the passed in URL does not exist on the page.
 * @params {function} successCallback This function is invoked when inline installation successfully completes (after the dialog is shown and the user agrees to add the item to Chrome). You may wish to use this to hide the user interface element that prompted the user to install the app or extension.
 * @params {function} failureCallback This function is invoked when inline installation does not successfully complete. Possible reasons for this include the user canceling the dialog, the linked item not being found in the store, or the install being initiated from a non-verified site.
 */
chrome.webstore.install = function(url, successCallback, failureCallback) {}

chrome.experimental.record = function() {}

/**
 *
 * @params {string} captureName Unique name of the capture.
 * @params {} urls URL list to visit during capture.
 * @params {function} callback Called when capture has completed.
 */
chrome.experimental.record.captureURLs = function(captureName, urls, callback) {}

/**
 *
 * @params {string} captureName Unique name of capture.  Use to determine cache.
 * @params {integer} repeatCount
 * @params {} details
 * @params {function} callback Called when playback has completed.
 */
chrome.experimental.record.replayURLs = function(captureName, repeatCount, details, callback) {}

chrome.types = function() {}

chrome.contentSettings = function() {}

chrome.experimental.identity = function() {}

/**
 * Gets an OAuth2 access token as specified by the manifest.
 * @params {} details Token options.
 * @params {function} callback Called with an OAuth2 access token as specified by the manifest, or undefined if there was an error.
 */
chrome.experimental.identity.getAuthToken = function(details, callback) {}

/**
 * Starts an auth flow at the specified URL.
 * @params {} details WebAuth flow options.
 * @params {function} callback Called with the URL redirected back to your application.
 */
chrome.experimental.identity.launchWebAuthFlow = function(details, callback) {}

chrome.declarativeWebRequest = function() {}

chrome.i18n = function() {}

/**
 * Gets the accept-languages of the browser. This is different from the locale used by the browser; to get the locale, use <code>window.navigator.language</code>.
 * @params {function} callback
 */
chrome.i18n.getAcceptLanguages = function(callback) {}

/**
 * Gets the localized string for the specified message. If the message is missing, this method returns an empty string (''). If the format of the <code>getMessage()</code> call is wrong &mdash; for example, <em>messageName</em> is not a string or the <em>substitutions</em> array has more than 9 elements &mdash; this method returns <code>undefined</code>.
 * @params {string} messageName The name of the message, as specified in the <a href='i18n-messages.html'><code>messages.json</code></a> file.
 * @params {any} substitutions Up to 9 substitution strings, if the message requires any.
 */
chrome.i18n.getMessage = function(messageName, substitutions) {}

chrome.idle = function() {}

/**
 * Returns "locked" if the system is locked, "idle" if the user has not generated any input for a specified number of seconds, or "active" otherwise.
 * @params {integer} detectionIntervalInSeconds The system is considered idle if detectionIntervalInSeconds seconds have elapsed since the last user input detected.
 * @params {function} callback
 */
chrome.idle.queryState = function(detectionIntervalInSeconds, callback) {}

/**
 * Sets the interval, in seconds, used to determine when the system is in an idle state for onStateChanged events. The default interval is 60 seconds.
 * @params {integer} intervalInSeconds Threshold, in seconds, used to determine when the system is in an idle state.
 */
chrome.idle.setDetectionInterval = function(intervalInSeconds) {}

chrome.privacy = function() {}

chrome.extension = function() {}

/**
 * Converts a relative path within an extension install directory to a fully-qualified URL.
 * @params {string} path A path to a resource within an extension expressed relative to its install directory.
 */
chrome.extension.getURL = function(path) {}

/**
 * Returns an array of the JavaScript 'window' objects for each of the pages running inside the current extension.
 * @params {object} fetchProperties
 */
chrome.extension.getViews = function(fetchProperties) {}

/**
 * Returns the JavaScript 'window' object for the background page running inside the current extension. Returns null if the extension has no background page.
 */
chrome.extension.getBackgroundPage = function() {}

/**
 * Retrieves the state of the extension's access to Incognito-mode (as determined by the user-controlled 'Allowed in Incognito' checkbox.
 * @params {function} callback
 */
chrome.extension.isAllowedIncognitoAccess = function(callback) {}

/**
 * Retrieves the state of the extension's access to the 'file://' scheme (as determined by the user-controlled 'Allow access to File URLs' checkbox.
 * @params {function} callback
 */
chrome.extension.isAllowedFileSchemeAccess = function(callback) {}

/**
 * Sets the value of the ap CGI parameter used in the extension's update URL.  This value is ignored for extensions that are hosted in the Chrome Extension Gallery.
 * @params {string} data
 */
chrome.extension.setUpdateUrlData = function(data) {}

chrome.experimental.speechInput = function() {}

/**
 * Request to start recording as a new speech recognition session.
 * @params {} options Options used for this speech recognition session.
 * @params {function} callback Called when the speech recognition session has successfully started recording.
 */
chrome.experimental.speechInput.start = function(options, callback) {}

/**
 * Request to stop an ongoing speech recognition session.
 * @params {function} callback Called when the audio recording has stopped and any pending recognition results have been completed.
 */
chrome.experimental.speechInput.stop = function(callback) {}

/**
 * Determine if audio recording is currently in process in Chrome, not limited to this API.
 * @params {function} callback
 */
chrome.experimental.speechInput.isRecording = function(callback) {}

chrome.runtime = function() {}

/**
 * Retrieves the JavaScript 'window' object for the background page running inside the current extension/app. If the background page is an event page, the system will ensure it is loaded before calling the callback. If there is no background page, an error is set.
 * @params {function} callback
 */
chrome.runtime.getBackgroundPage = function(callback) {}

/**
 * Returns details about the app or extension from the manifest. The object returned is a serialization of the full <a href="manifest.html">manifest file</a>.
 */
chrome.runtime.getManifest = function() {}

/**
 * Converts a relative path within an app/extension install directory to a fully-qualified URL.
 * @params {string} path A path to a resource within an app/extension expressed relative to its install directory.
 */
chrome.runtime.getURL = function(path) {}

/**
 * Reloads the app or extension.
 */
chrome.runtime.reload = function() {}

/**
 * Requests an update check for this app/extension.
 * @params {function} callback
 */
chrome.runtime.requestUpdateCheck = function(callback) {}

/**
 * Attempts to connect to other listeners within the extension/app (such as the background page), or other extensions/apps. This is useful for content scripts connecting to their extension processes. Note that this does not connect to any listeners in a content script. Extensions may connect to content scripts embedded in tabs via <a href="tabs.html#method-connect">tabs.connect</a>.
 * @params {string} extensionId The ID of the extension/app you want to connect to. If omitted, default is your own extension.
 * @params {object} connectInfo
 */
chrome.runtime.connect = function(extensionId, connectInfo) {}

/**
 * Sends a single message to onMessage event listeners within the extension (or another extension/app). Similar to chrome.runtime.connect, but only sends a single message with an optional response. The <a href="runtime.html#event-onMessage">onMessage</a> event is fired in each extension page of the extension. Note that extensions cannot send messages to content scripts using this method. To send messages to content scripts, use <a href="tabs.html#method-sendMessage">tabs.sendMessage</a>.
 * @params {string} extensionId The extension ID of the extension you want to connect to. If omitted, default is your own extension.
 * @params {any} message
 * @params {function} responseCallback
 */
chrome.runtime.sendMessage = function(extensionId, message, responseCallback) {}

chrome.experimental.processes = function() {}

/**
 * Terminates the specified renderer process. Equivalent to visiting about:crash, but without changing the tab's URL.
 * @params {integer} processId The ID of the process to be terminated.
 * @params {function} callback
 */
chrome.experimental.processes.terminate = function(processId, callback) {}

/**
 * Returns the ID of the renderer process for the specified tab.
 * @params {integer} tabId The ID of the tab for which the renderer process ID is to be returned.
 * @params {function} callback
 */
chrome.experimental.processes.getProcessIdForTab = function(tabId, callback) {}

/**
 * Retrieves the process information for each process ID specified.
 * @params {} processIds The list of process IDs or single process ID for which to return the process information. An empty list indicates all processes are requested.
 * @params {boolean} includeMemory True if detailed memory usage is required. Note, collecting memory usage information incurs extra CPU usage and should only be queried for when needed.
 * @params {function} callback Called when the processes information is collected.
 */
chrome.experimental.processes.getProcessInfo = function(processIds, includeMemory, callback) {}

chrome.tabs = function() {}

/**
 * Retrieves details about the specified tab.
 * @params {integer} tabId
 * @params {function} callback
 */
chrome.tabs.get = function(tabId, callback) {}

/**
 * Gets the tab that this script call is being made from. May be undefined if called from a non-tab context (for example: a background page or popup view).
 * @params {function} callback
 */
chrome.tabs.getCurrent = function(callback) {}

/**
 * Connects to the content script(s) in the specified tab. The <a href="runtime.html#event-onConnect">runtime.onConnect</a> event is fired in each content script running in the specified tab for the current extension. For more details, see <a href='content_scripts.html#messaging'>Content Script Messaging</a>.
 * @params {integer} tabId
 * @params {object} connectInfo
 */
chrome.tabs.connect = function(tabId, connectInfo) {}

/**
 * Sends a single message to the content script(s) in the specified tab, with an optional callback to run when a response is sent back.  The <a href="runtime.html#event-onMessage">runtime.onMessage</a> event is fired in each content script running in the specified tab for the current extension.
 * @params {integer} tabId
 * @params {any} message
 * @params {function} responseCallback
 */
chrome.tabs.sendMessage = function(tabId, message, responseCallback) {}

/**
 * Creates a new tab. Note: This function can be used without requesting the 'tabs' permission in the manifest.
 * @params {object} createProperties
 * @params {function} callback
 */
chrome.tabs.create = function(createProperties, callback) {}

/**
 * Duplicates a tab. Note: This function can be used without requesting the 'tabs' permission in the manifest.
 * @params {integer} tabId The ID of the tab which is to be duplicated.
 * @params {function} callback
 */
chrome.tabs.duplicate = function(tabId, callback) {}

/**
 * Gets all tabs that have the specified properties, or all tabs if no properties are specified.
 * @params {object} queryInfo
 * @params {function} callback
 */
chrome.tabs.query = function(queryInfo, callback) {}

/**
 * Highlights the given tabs.
 * @params {object} highlightInfo
 * @params {function} callback
 */
chrome.tabs.highlight = function(highlightInfo, callback) {}

/**
 * Modifies the properties of a tab. Properties that are not specified in <var>updateProperties</var> are not modified. Note: This function can be used without requesting the 'tabs' permission in the manifest.
 * @params {integer} tabId Defaults to the selected tab of the <a href='windows.html#current-window'>current window</a>.
 * @params {object} updateProperties
 * @params {function} callback
 */
chrome.tabs.update = function(tabId, updateProperties, callback) {}

/**
 * Moves one or more tabs to a new position within its window, or to a new window. Note that tabs can only be moved to and from normal (window.type === "normal") windows.
 * @params {} tabIds The tab or list of tabs to move.
 * @params {object} moveProperties
 * @params {function} callback
 */
chrome.tabs.move = function(tabIds, moveProperties, callback) {}

/**
 * Reload a tab.
 * @params {integer} tabId The ID of the tab to reload; defaults to the selected tab of the current window.
 * @params {object} reloadProperties
 * @params {function} callback
 */
chrome.tabs.reload = function(tabId, reloadProperties, callback) {}

/**
 * Closes one or more tabs. Note: This function can be used without requesting the 'tabs' permission in the manifest.
 * @params {} tabIds The tab or list of tabs to close.
 * @params {function} callback
 */
chrome.tabs.remove = function(tabIds, callback) {}

/**
 * Detects the primary language of the content in a tab.
 * @params {integer} tabId Defaults to the active tab of the <a href='windows.html#current-window'>current window</a>.
 * @params {function} callback
 */
chrome.tabs.detectLanguage = function(tabId, callback) {}

/**
 * Captures the visible area of the currently active tab in the specified window. You must have <a href='declare_permissions.html'>host permission</a> for the URL displayed by the tab.
 * @params {integer} windowId The target window. Defaults to the <a href='windows.html#current-window'>current window</a>.
 * @params {object} options Set parameters of image capture, such as the format of the resulting image.
 * @params {function} callback
 */
chrome.tabs.captureVisibleTab = function(windowId, options, callback) {}

/**
 * Injects JavaScript code into a page. For details, see the <a href='content_scripts.html#pi'>programmatic injection</a> section of the content scripts doc.
 * @params {integer} tabId The ID of the tab in which to run the script; defaults to the active tab of the current window.
 * @params {} details Details of the script to run.
 * @params {function} callback Called after all the JavaScript has been executed.
 */
chrome.tabs.executeScript = function(tabId, details, callback) {}

/**
 * Injects CSS into a page. For details, see the <a href='content_scripts.html#pi'>programmatic injection</a> section of the content scripts doc.
 * @params {integer} tabId The ID of the tab in which to insert the CSS; defaults to the active tab of the current window.
 * @params {} details Details of the CSS text to insert.
 * @params {function} callback Called when all the CSS has been inserted.
 */
chrome.tabs.insertCSS = function(tabId, details, callback) {}

chrome.bookmarks = function() {}

/**
 * Retrieves the specified BookmarkTreeNode(s).
 * @params {} idOrIdList A single string-valued id, or an array of string-valued ids
 * @params {function} callback
 */
chrome.bookmarks.get = function(idOrIdList, callback) {}

/**
 * Retrieves the children of the specified BookmarkTreeNode id.
 * @params {string} id
 * @params {function} callback
 */
chrome.bookmarks.getChildren = function(id, callback) {}

/**
 * Retrieves the recently added bookmarks.
 * @params {integer} numberOfItems The maximum number of items to return.
 * @params {function} callback
 */
chrome.bookmarks.getRecent = function(numberOfItems, callback) {}

/**
 * Retrieves the entire Bookmarks hierarchy.
 * @params {function} callback
 */
chrome.bookmarks.getTree = function(callback) {}

/**
 * Retrieves part of the Bookmarks hierarchy, starting at the specified node.
 * @params {string} id The ID of the root of the subtree to retrieve.
 * @params {function} callback
 */
chrome.bookmarks.getSubTree = function(id, callback) {}

/**
 * Searches for BookmarkTreeNodes matching the given query.
 * @params {string} query
 * @params {function} callback
 */
chrome.bookmarks.search = function(query, callback) {}

/**
 * Creates a bookmark or folder under the specified parentId.  If url is NULL or missing, it will be a folder.
 * @params {object} bookmark
 * @params {function} callback
 */
chrome.bookmarks.create = function(bookmark, callback) {}

/**
 * Moves the specified BookmarkTreeNode to the provided location.
 * @params {string} id
 * @params {object} destination
 * @params {function} callback
 */
chrome.bookmarks.move = function(id, destination, callback) {}

/**
 * Updates the properties of a bookmark or folder. Specify only the properties that you want to change; unspecified properties will be left unchanged.  <b>Note:</b> Currently, only 'title' and 'url' are supported.
 * @params {string} id
 * @params {object} changes
 * @params {function} callback
 */
chrome.bookmarks.update = function(id, changes, callback) {}

/**
 * Removes a bookmark or an empty bookmark folder.
 * @params {string} id
 * @params {function} callback
 */
chrome.bookmarks.remove = function(id, callback) {}

/**
 * Recursively removes a bookmark folder.
 * @params {string} id
 * @params {function} callback
 */
chrome.bookmarks.removeTree = function(id, callback) {}

chrome.topSites = function() {}

/**
 * Gets a list of top sites.
 * @params {function} callback
 */
chrome.topSites.get = function(callback) {}

chrome.events = function() {}

chrome.experimental.discovery = function() {}

/**
 * Suggests a URL for discovery.
 * @params {} details Detailed information on the URL to suggest.
 */
chrome.experimental.discovery.suggest = function(details) {}

/**
 * Removes a URL that was previously suggested for discovery by this extension.
 * @params {string} linkUrl The URl to remove from discovery. Must be exactly the same as a linkUrl previously used on a call to suggest.
 */
chrome.experimental.discovery.removeSuggestion = function(linkUrl) {}

/**
 * Clear all the URLs that were previously suggested for discovery by this extension.
 */
chrome.experimental.discovery.clearAllSuggestions = function() {}

chrome.pageCapture = function() {}

/**
 * Saves the content of the tab with given id as MHTML.
 * @params {object} details
 * @params {function} callback Called when the MHTML has been generated.
 */
chrome.pageCapture.saveAsMHTML = function(details, callback) {}

chrome.ttsEngine = function() {}

chrome.devtools.inspectedWindow = function() {}

/**
 * Evaluates a JavaScript expression in the context of the main frame of the inspected page. The expression must evaluate to a JSON-compliant object, otherwise an exception is thrown.
 * @params {string} expression An expression to evaluate.
 * @params {function} callback A function called when evaluation completes.
 */
chrome.devtools.inspectedWindow.eval = function(expression, callback) {}

/**
 * Reloads the inspected page.
 * @params {object} reloadOptions
 */
chrome.devtools.inspectedWindow.reload = function(reloadOptions) {}

/**
 * Retrieves the list of resources from the inspected page.
 * @params {function} callback A function that receives the list of resources when the request completes.
 */
chrome.devtools.inspectedWindow.getResources = function(callback) {}

chrome.webRequest = function() {}

/**
 * Needs to be called when the behavior of the webRequest handlers has changed to prevent incorrect handling due to caching. This function call is expensive. Don't call it often.
 * @params {function} callback
 */
chrome.webRequest.handlerBehaviorChanged = function(callback) {}

chrome.tabCapture = function() {}

/**
 * Captures the visible area of the currently active tab. Extensions must have the "tabCapture" permission to use this method.
 * @params {} options Configures the returned media stream.
 * @params {function} callback Callback with either the stream returned or null.
 */
chrome.tabCapture.capture = function(options, callback) {}

/**
 * Returns a list of tabs that have requested capture or are being captured, i.e. status != stopped and status != error. This allows extensions to inform the user that there is an existing tab capture that would prevent a new tab capture from succeeding (or to prevent redundant requests for the same tab).
 * @params {function} callback
 */
chrome.tabCapture.getCapturedTabs = function(callback) {}

chrome.downloads = function() {}

/**
 * Download a URL. If the URL uses the HTTP[S] protocol, then the request will include all cookies currently set for its hostname. If both <code>filename</code> and <code>saveAs</code> are specified, then the Save As dialog will be displayed, pre-populated with the specified <code>filename</code>. If the download started successfully, <code>callback</code> will be called with the new <a href="downloads.html#type-DownloadItem">DownloadItem</a>'s <code>downloadId</code>. If there was an error starting the download, then <code>callback</code> will be called with <code>downloadId=undefined</code> and <a href="runtime.html#property-lastError">runtime.lastError</a> will contain a descriptive string. The error strings are not guaranteed to remain backwards compatible between releases. Extensions must not parse it.
 * @params {} options What to download and how.
 * @params {function} callback Called with the id of the new <a href="downloads.html#type-DownloadItem">DownloadItem</a>.
 */
chrome.downloads.download = function(options, callback) {}

/**
 * Find <a href="downloads.html#type-DownloadItem">DownloadItem</a>. Set <code>query</code> to the empty object to get all <a href="downloads.html#type-DownloadItem">DownloadItem</a>. To get a specific <a href="downloads.html#type-DownloadItem">DownloadItem</a>, set only the <code>id</code> field.
 * @params {} query
 * @params {function} callback
 */
chrome.downloads.search = function(query, callback) {}

/**
 * Pause the download. If the request was successful the download is in a paused state. Otherwise <a href="runtime.html#property-lastError">runtime.lastError</a> contains an error message. The request will fail if the download is not active.
 * @params {integer} downloadId The id of the download to pause.
 * @params {function} callback Called when the pause request is completed.
 */
chrome.downloads.pause = function(downloadId, callback) {}

/**
 * Resume a paused download. If the request was successful the download is in progress and unpaused. Otherwise <a href="runtime.html#property-lastError">runtime.lastError</a> contains an error message. The request will fail if the download is not active.
 * @params {integer} downloadId The id of the download to resume.
 * @params {function} callback Called when the resume request is completed.
 */
chrome.downloads.resume = function(downloadId, callback) {}

/**
 * Cancel a download. When <code>callback</code> is run, the download is cancelled, completed, interrupted or doesn't exist anymore.
 * @params {integer} downloadId The id of the download to cancel.
 * @params {function} callback Called when the cancel request is completed.
 */
chrome.downloads.cancel = function(downloadId, callback) {}

/**
 * Retrieve an icon for the specified download. For new downloads, file icons are available after the <a href="downloads.html#event-onCreated">onCreated</a> event has been received. The image returned by this function while a download is in progress may be different from the image returned after the download is complete. Icon retrieval is done by querying the underlying operating system or toolkit depending on the platform. The icon that is returned will therefore depend on a number of factors including state of the download, platform, registered file types and visual theme. If a file icon cannot be determined, <a href="runtime.html#property-lastError">runtime.lastError</a> will contain an error message.
 * @params {integer} downloadId The identifier for the download.
 * @params {} options
 * @params {function} callback A URL to an image that represents the download.
 */
chrome.downloads.getFileIcon = function(downloadId, options, callback) {}

/**
 * Open the downloaded file now if the <a href="downloads.html#type-DownloadItem">DownloadItem</a> is complete; returns an error through <a href="runtime.html#property-lastError">runtime.lastError</a> otherwise. An <a href="downloads.html#event-onChanged">onChanged</a> event will fire when the item is opened for the first time.
 * @params {integer} downloadId The identifier for the downloaded file.
 */
chrome.downloads.open = function(downloadId) {}

/**
 * Show the downloaded file in its folder in a file manager.
 * @params {integer} downloadId The identifier for the downloaded file.
 */
chrome.downloads.show = function(downloadId) {}

/**
 * Erase matching <a href="downloads.html#type-DownloadItem">DownloadItem</a> from history. An <a href="downloads.html#event-onErased">onErased</a> event will fire for each <a href="downloads.html#type-DownloadItem">DownloadItem</a> that matches <code>query</code>, then <code>callback</code> will be called.
 * @params {} query
 * @params {function} callback
 */
chrome.downloads.erase = function(query, callback) {}

/**
 * Prompt the user to accept a dangerous download. Does not automatically accept dangerous downloads. If the download is accepted, then an <a href="downloads.html#event-onChanged">onChanged</a> event will fire, otherwise nothing will happen.  When all the data is fetched into a temporary file and either the download is not dangerous or the danger has been accepted, then the temporary file is renamed to the target filename, the |state| changes to 'complete', and <a href="downloads.html#event-onChanged">onChanged</a> fires.
 * @params {integer} downloadId The identifier for the <a href="downloads.html#type-DownloadItem">DownloadItem</a>.
 */
chrome.downloads.acceptDanger = function(downloadId) {}

/**
 * Initiate dragging the downloaded file to another application.
 * @params {integer} downloadId
 */
chrome.downloads.drag = function(downloadId) {}

chrome.tts = function() {}

/**
 * Speaks text using a text-to-speech engine.
 * @params {string} utterance The text to speak, either plain text or a complete, well-formed SSML document. Speech engines that do not support SSML will strip away the tags and speak the text. The maximum length of the text is 32,768 characters.
 * @params {object} options The speech options.
 * @params {function} callback Called right away, before speech finishes. Check chrome.runtime.lastError to make sure there were no errors. Use options.onEvent to get more detailed feedback.
 */
chrome.tts.speak = function(utterance, options, callback) {}

/**
 * Stops any current speech.
 */
chrome.tts.stop = function() {}

/**
 * Checks whether the engine is currently speaking. On Mac OS X, the result is true whenever the system speech engine is speaking, even if the speech wasn't initiated by Chrome.
 * @params {function} callback
 */
chrome.tts.isSpeaking = function(callback) {}

/**
 * Gets an array of all available voices.
 * @params {function} callback
 */
chrome.tts.getVoices = function(callback) {}

chrome.windows = function() {}

/**
 * Gets details about a window.
 * @params {integer} windowId
 * @params {object} getInfo
 * @params {function} callback
 */
chrome.windows.get = function(windowId, getInfo, callback) {}

/**
 * Gets the <a href='#current-window'>current window</a>.
 * @params {object} getInfo
 * @params {function} callback
 */
chrome.windows.getCurrent = function(getInfo, callback) {}

/**
 * Gets the window that was most recently focused &mdash; typically the window 'on top'.
 * @params {object} getInfo
 * @params {function} callback
 */
chrome.windows.getLastFocused = function(getInfo, callback) {}

/**
 * Gets all windows.
 * @params {object} getInfo
 * @params {function} callback
 */
chrome.windows.getAll = function(getInfo, callback) {}

/**
 * Creates (opens) a new browser with any optional sizing, position or default URL provided.
 * @params {object} createData
 * @params {function} callback
 */
chrome.windows.create = function(createData, callback) {}

/**
 * Updates the properties of a window. Specify only the properties that you want to change; unspecified properties will be left unchanged.
 * @params {integer} windowId
 * @params {object} updateInfo
 * @params {function} callback
 */
chrome.windows.update = function(windowId, updateInfo, callback) {}

/**
 * Removes (closes) a window, and all the tabs inside it.
 * @params {integer} windowId
 * @params {function} callback
 */
chrome.windows.remove = function(windowId, callback) {}

chrome.omnibox = function() {}

/**
 * Sets the description and styling for the default suggestion. The default suggestion is the text that is displayed in the first suggestion row underneath the URL bar.
 * @params {object} suggestion A partial SuggestResult object, without the 'content' parameter. See SuggestResult for a description of the parameters.
 */
chrome.omnibox.setDefaultSuggestion = function(suggestion) {}

chrome.permissions = function() {}

/**
 * Gets the extension's current set of permissions.
 * @params {function} callback
 */
chrome.permissions.getAll = function(callback) {}

/**
 * Checks if the extension has the specified permissions.
 * @params {} permissions
 * @params {function} callback
 */
chrome.permissions.contains = function(permissions, callback) {}

/**
 * Requests access to the specified permissions. These permissions must be defined in the optional_permissions field of the manifest. If there are any problems requesting the permissions, <a href="runtime.html#property-lastError">runtime.lastError</a> will be set.
 * @params {} permissions
 * @params {function} callback
 */
chrome.permissions.request = function(permissions, callback) {}

/**
 * Removes access to the specified permissions. If there are any problems removing the permissions, <a href="runtime.html#property-lastError">runtime.lastError</a> will be set.
 * @params {} permissions
 * @params {function} callback
 */
chrome.permissions.remove = function(permissions, callback) {}

chrome.sessionRestore = function() {}

/**
 * Gets the list of recently closed tabs and/or windows.
 * @params {object} options
 * @params {function} callback
 */
chrome.sessionRestore.getRecentlyClosed = function(options, callback) {}

/**
 * Reopens a <a href="sessionRestore.html#type-ClosedEntry">ClosedEntry</a>, with an optional callback to run when the entry has been restored.
 * @params {integer} id The id of the <a href="sessionRestore.html#type-ClosedEntry">ClosedEntry</a> to restore.
 * @params {function} callback
 */
chrome.sessionRestore.restore = function(id, callback) {}

chrome.experimental.infobars = function() {}

/**
 * Shows an infobar in the specified tab. The infobar will be closed automatically when the tab navigates. Use window.close() to close the infobar before then.
 * @params {object} details
 * @params {function} callback
 */
chrome.experimental.infobars.show = function(details, callback) {}

chrome.fontSettings = function() {}

/**
 * Clears the font set by this extension, if any.
 * @params {object} details
 * @params {function} callback
 */
chrome.fontSettings.clearFont = function(details, callback) {}

/**
 * Gets the font for a given script and generic font family.
 * @params {object} details
 * @params {function} callback
 */
chrome.fontSettings.getFont = function(details, callback) {}

/**
 * Sets the font for a given script and generic font family.
 * @params {object} details
 * @params {function} callback
 */
chrome.fontSettings.setFont = function(details, callback) {}

/**
 * Gets a list of fonts on the system.
 * @params {function} callback
 */
chrome.fontSettings.getFontList = function(callback) {}

/**
 * Clears the default font size set by this extension, if any.
 * @params {object} details This parameter is currently unused.
 * @params {function} callback
 */
chrome.fontSettings.clearDefaultFontSize = function(details, callback) {}

/**
 * Gets the default font size.
 * @params {object} details This parameter is currently unused.
 * @params {function} callback
 */
chrome.fontSettings.getDefaultFontSize = function(details, callback) {}

/**
 * Sets the default font size.
 * @params {object} details
 * @params {function} callback
 */
chrome.fontSettings.setDefaultFontSize = function(details, callback) {}

/**
 * Clears the default fixed font size set by this extension, if any.
 * @params {object} details This parameter is currently unused.
 * @params {function} callback
 */
chrome.fontSettings.clearDefaultFixedFontSize = function(details, callback) {}

/**
 * Gets the default size for fixed width fonts.
 * @params {object} details This parameter is currently unused.
 * @params {function} callback
 */
chrome.fontSettings.getDefaultFixedFontSize = function(details, callback) {}

/**
 * Sets the default size for fixed width fonts.
 * @params {object} details
 * @params {function} callback
 */
chrome.fontSettings.setDefaultFixedFontSize = function(details, callback) {}

/**
 * Clears the minimum font size set by this extension, if any.
 * @params {object} details This parameter is currently unused.
 * @params {function} callback
 */
chrome.fontSettings.clearMinimumFontSize = function(details, callback) {}

/**
 * Gets the minimum font size.
 * @params {object} details This parameter is currently unused.
 * @params {function} callback
 */
chrome.fontSettings.getMinimumFontSize = function(details, callback) {}

/**
 * Sets the minimum font size.
 * @params {object} details
 * @params {function} callback
 */
chrome.fontSettings.setMinimumFontSize = function(details, callback) {}

chrome.experimental.history = function() {}

/**
 * Retrieves most visited URLs on the time specified.
 * @params {object} details
 * @params {function} callback
 */
chrome.experimental.history.getMostVisited = function(details, callback) {}

chrome.scriptBadge = function() {}

/**
 * Sets the html document to be opened as a popup when the user clicks on the script badge's icon.
 * @params {object} details
 */
chrome.scriptBadge.setPopup = function(details) {}

/**
 * Gets the html document set as the popup for this script badge.
 * @params {object} details
 * @params {function} callback
 */
chrome.scriptBadge.getPopup = function(details, callback) {}

/**
 * Brings the script badge to the attention of the user, imploring her to click.  You should call this when you detect that you can do something to a particular tab.  Do not call this for every tab. That's tacky.  If the user clicks on the badge, the activeTab APIs become available. If the extension has already run on this tab, this call does nothing.
 * @params {object} details
 */
chrome.scriptBadge.getAttention = function(details) {}

chrome.webNavigation = function() {}

/**
 * Retrieves information about the given frame. A frame refers to an &lt;iframe&gt; or a &lt;frame&gt; of a web page and is identified by a tab ID and a frame ID.
 * @params {object} details Information about the frame to retrieve information about.
 * @params {function} callback
 */
chrome.webNavigation.getFrame = function(details, callback) {}

/**
 * Retrieves information about all frames of a given tab.
 * @params {object} details Information about the tab to retrieve all frames from.
 * @params {function} callback
 */
chrome.webNavigation.getAllFrames = function(details, callback) {}

chrome.browserAction = function() {}

/**
 * Sets the title of the browser action. This shows up in the tooltip.
 * @params {object} details
 */
chrome.browserAction.setTitle = function(details) {}

/**
 * Gets the title of the browser action.
 * @params {object} details
 * @params {function} callback
 */
chrome.browserAction.getTitle = function(details, callback) {}

/**
 * Sets the icon for the browser action. The icon can be specified either as the path to an image file or as the pixel data from a canvas element, or as dictionary of either one of those. Either the <b>path</b> or the <b>imageData</b> property must be specified.
 * @params {object} details
 * @params {function} callback
 */
chrome.browserAction.setIcon = function(details, callback) {}

/**
 * Sets the html document to be opened as a popup when the user clicks on the browser action's icon.
 * @params {object} details
 */
chrome.browserAction.setPopup = function(details) {}

/**
 * Gets the html document set as the popup for this browser action.
 * @params {object} details
 * @params {function} callback
 */
chrome.browserAction.getPopup = function(details, callback) {}

/**
 * Sets the badge text for the browser action. The badge is displayed on top of the icon.
 * @params {object} details
 */
chrome.browserAction.setBadgeText = function(details) {}

/**
 * Gets the badge text of the browser action. If no tab is specified, the non-tab-specific badge text is returned.
 * @params {object} details
 * @params {function} callback
 */
chrome.browserAction.getBadgeText = function(details, callback) {}

/**
 * Sets the background color for the badge.
 * @params {object} details
 */
chrome.browserAction.setBadgeBackgroundColor = function(details) {}

/**
 * Gets the background color of the browser action.
 * @params {object} details
 * @params {function} callback
 */
chrome.browserAction.getBadgeBackgroundColor = function(details, callback) {}

/**
 * Enables the browser action for a tab. By default, browser actions are enabled.
 * @params {integer} tabId The id of the tab for which you want to modify the browser action.
 */
chrome.browserAction.enable = function(tabId) {}

/**
 * Disables the browser action for a tab.
 * @params {integer} tabId The id of the tab for which you want to modify the browser action.
 */
chrome.browserAction.disable = function(tabId) {}

chrome.input.ime = function() {}

/**
 * Set the current composition. If this extension does not own the active IME, this fails.
 * @params {object} parameters
 * @params {function} callback Called when the operation completes with a boolean indicating if the text was accepted or not. On failure, chrome.runtime.lastError is set.
 */
chrome.input.ime.setComposition = function(parameters, callback) {}

/**
 * Clear the current composition. If this extension does not own the active IME, this fails.
 * @params {object} parameters
 * @params {function} callback Called when the operation completes with a boolean indicating if the text was accepted or not. On failure, chrome.runtime.lastError is set.
 */
chrome.input.ime.clearComposition = function(parameters, callback) {}

/**
 * Commits the provided text to the current input.
 * @params {object} parameters
 * @params {function} callback Called when the operation completes with a boolean indicating if the text was accepted or not. On failure, chrome.runtime.lastError is set.
 */
chrome.input.ime.commitText = function(parameters, callback) {}

/**
 * Sets the properties of the candidate window. This fails if the extension doesn’t own the active IME
 * @params {object} parameters
 * @params {function} callback Called when the operation completes.
 */
chrome.input.ime.setCandidateWindowProperties = function(parameters, callback) {}

/**
 * Sets the current candidate list. This fails if this extension doesn’t own the active IME
 * @params {object} parameters
 * @params {function} callback Called when the operation completes.
 */
chrome.input.ime.setCandidates = function(parameters, callback) {}

/**
 * Set the position of the cursor in the candidate window. This is a no-op if this extension does not own the active IME.
 * @params {object} parameters
 * @params {function} callback Called when the operation completes
 */
chrome.input.ime.setCursorPosition = function(parameters, callback) {}

/**
 * Adds the provided menu items to the language menu when this IME is active.
 * @params {object} parameters
 * @params {function} callback
 */
chrome.input.ime.setMenuItems = function(parameters, callback) {}

/**
 * Updates the state of the MenuItems specified
 * @params {object} parameters
 * @params {function} callback Called when the operation completes
 */
chrome.input.ime.updateMenuItems = function(parameters, callback) {}

/**
 * Deletes the text around the caret.
 * @params {object} parameters
 * @params {function} callback Called when the operation completes.
 */
chrome.input.ime.deleteSurroundingText = function(parameters, callback) {}

/**
 * Indicates that the key event received by onKeyEvent is handled.  This should only be called if the onKeyEvent listener is asynchronous.
 * @params {string} requestId Request id of the event that was handled.  This should come from keyEvent.requestId
 * @params {boolean} response True if the keystroke was handled, false if not
 */
chrome.input.ime.keyEventHandled = function(requestId, response) {}

chrome.history = function() {}

/**
 * Searches the history for the last visit time of each page matching the query.
 * @params {object} query
 * @params {function} callback
 */
chrome.history.search = function(query, callback) {}

/**
 * Retrieves information about visits to a URL.
 * @params {object} details
 * @params {function} callback
 */
chrome.history.getVisits = function(details, callback) {}

/**
 * Adds a URL to the history at the current time with a <a href='#transition_types'>transition type</a> of "link".
 * @params {object} details
 * @params {function} callback
 */
chrome.history.addUrl = function(details, callback) {}

/**
 * Removes all occurrences of the given URL from the history.
 * @params {object} details
 * @params {function} callback
 */
chrome.history.deleteUrl = function(details, callback) {}

/**
 * Removes all items within the specified date range from the history.  Pages will not be removed from the history unless all visits fall within the range.
 * @params {object} range
 * @params {function} callback
 */
chrome.history.deleteRange = function(range, callback) {}

/**
 * Deletes all items from the history.
 * @params {function} callback
 */
chrome.history.deleteAll = function(callback) {}

chrome.experimental.devtools.audits = function() {}

/**
 * Adds an audit category.
 * @params {string} displayName A display name for the category.
 * @params {double} resultCount The expected number of audit results in the category.
 */
chrome.experimental.devtools.audits.addCategory = function(displayName, resultCount) {}

chrome.pageAction = function() {}

/**
 * Shows the page action. The page action is shown whenever the tab is selected.
 * @params {integer} tabId The id of the tab for which you want to modify the page action.
 */
chrome.pageAction.show = function(tabId) {}

/**
 * Hides the page action.
 * @params {integer} tabId The id of the tab for which you want to modify the page action.
 */
chrome.pageAction.hide = function(tabId) {}

/**
 * Sets the title of the page action. This is displayed in a tooltip over the page action.
 * @params {object} details
 */
chrome.pageAction.setTitle = function(details) {}

/**
 * Gets the title of the page action.
 * @params {object} details
 * @params {function} callback
 */
chrome.pageAction.getTitle = function(details, callback) {}

/**
 * Sets the icon for the page action. The icon can be specified either as the path to an image file or as the pixel data from a canvas element, or as dictionary of either one of those. Either the <b>path</b> or the <b>imageData</b> property must be specified.
 * @params {object} details
 * @params {function} callback
 */
chrome.pageAction.setIcon = function(details, callback) {}

/**
 * Sets the html document to be opened as a popup when the user clicks on the page action's icon.
 * @params {object} details
 */
chrome.pageAction.setPopup = function(details) {}

/**
 * Gets the html document set as the popup for this page action.
 * @params {object} details
 * @params {function} callback
 */
chrome.pageAction.getPopup = function(details, callback) {}

chrome.devtools.panels = function() {}

/**
 * Creates an extension panel.
 * @params {string} title Title that is displayed next to the extension icon in the Developer Tools toolbar.
 * @params {string} iconPath Path of the panel's icon relative to the extension directory.
 * @params {string} pagePath Path of the panel's HTML page relative to the extension directory.
 * @params {function} callback A function that is called when the panel is created.
 */
chrome.devtools.panels.create = function(title, iconPath, pagePath, callback) {}

/**
 * Specifies the function to be called when the user clicks a resource link in the Developer Tools window. To unset the handler, either call the method with no parameters or pass null as the parameter.
 * @params {function} callback A function that is called when the user clicks on a valid resource link in Developer Tools window. Note that if the user clicks an invalid URL or an XHR, this function is not called.
 */
chrome.devtools.panels.setOpenResourceHandler = function(callback) {}

chrome.cookies = function() {}

/**
 * Retrieves information about a single cookie. If more than one cookie of the same name exists for the given URL, the one with the longest path will be returned. For cookies with the same path length, the cookie with the earliest creation time will be returned.
 * @params {object} details Details to identify the cookie being retrieved.
 * @params {function} callback
 */
chrome.cookies.get = function(details, callback) {}

/**
 * Retrieves all cookies from a single cookie store that match the given information.  The cookies returned will be sorted, with those with the longest path first.  If multiple cookies have the same path length, those with the earliest creation time will be first.
 * @params {object} details Information to filter the cookies being retrieved.
 * @params {function} callback
 */
chrome.cookies.getAll = function(details, callback) {}

/**
 * Sets a cookie with the given cookie data; may overwrite equivalent cookies if they exist.
 * @params {object} details Details about the cookie being set.
 * @params {function} callback
 */
chrome.cookies.set = function(details, callback) {}

/**
 * Deletes a cookie by name.
 * @params {object} details Information to identify the cookie to remove.
 * @params {function} callback
 */
chrome.cookies.remove = function(details, callback) {}

/**
 * Lists all existing cookie stores.
 * @params {function} callback
 */
chrome.cookies.getAllCookieStores = function(callback) {}

chrome.proxy = function() {}

chrome.storage = function() {}

chrome.pushMessaging = function() {}

/**
 * Retrieves the channel ID associated with this app or extension. Typically an app or extension will want to send this value to its application server so the server can use it to trigger push messages back to the app or extension. If the interactive flag is set, we will ask the user to log in when they are not already logged in.
 * @params {boolean} interactive
 * @params {function} callback
 */
chrome.pushMessaging.getChannelId = function(interactive, callback) {}

chrome.debugger = function() {}

/**
 * Attaches debugger to the given target.
 * @params {} target Debugging target to which you want to attach.
 * @params {string} requiredVersion Required debugging protocol version ("0.1"). One can only attach to the debuggee with matching major version and greater or equal minor version. List of the protocol versions can be obtained <a href='http://code.google.com/chrome/devtools/docs/remote-debugging.html'>here</a>.
 * @params {function} callback Called once the attach operation succeeds or fails. Callback receives no arguments. If the attach fails, <a href="runtime.html#property-lastError">runtime.lastError</a> will be set to the error message.
 */
chrome.debugger.attach = function(target, requiredVersion, callback) {}

/**
 * Detaches debugger from the given target.
 * @params {} target Debugging target from which you want to detach.
 * @params {function} callback Called once the detach operation succeeds or fails. Callback receives no arguments. If the detach fails, <a href="runtime.html#property-lastError">runtime.lastError</a> will be set to the error message.
 */
chrome.debugger.detach = function(target, callback) {}

/**
 * Sends given command to the debugging target.
 * @params {} target Debugging target to which you want to send the command.
 * @params {string} method Method name. Should be one of the methods defined by the <a href='http://code.google.com/chrome/devtools/docs/remote-debugging.html'>remote debugging protocol</a>.
 * @params {object} commandParams JSON object with request parameters. This object must conform to the remote debugging params scheme for given method.
 * @params {function} callback Response body. If an error occurs while posting the message, the callback will be called with no arguments and <a href="runtime.html#property-lastError">runtime.lastError</a> will be set to the error message.
 */
chrome.debugger.sendCommand = function(target, method, commandParams, callback) {}

/**
 * Returns the list of available debug targets.
 * @params {function} callback
 */
chrome.debugger.getTargets = function(callback) {}
