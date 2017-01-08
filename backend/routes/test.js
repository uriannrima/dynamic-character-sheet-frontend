/** Test routes definition. **/
module.exports = function(app) {
    
    // Route URL.
    var url = "/api/test";

    /**
     * Get test method.
     */
    app.get(url, app.controllers.test.select);
};