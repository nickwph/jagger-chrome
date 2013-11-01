require.config({

    baseUrl: '../library',
    paths: {
        'jquery': 'jquery/jquery-2.0.3.min',
        'jquery-private': 'jquery/jquery-private',
        'ace': 'ace/src/ace'
    },

    // Add this map config in addition to any baseUrl or
    // paths config you may already have in the project.
    map: {

        // '*' means all modules will get 'jquery-private'
        // for their 'jquery' dependency.
        '*': { 'jquery': 'jquery-private' },

        // 'jquery-private' wants the real jQuery module
        // though. If this line was not here, there would
        // be an unresolvable cyclic dependency.
        'jquery-private': { 'jquery': 'jquery' }
    }
});