/* Test service. */
'use strict';

/**
 * Service declaration.
 */
function TestService($resource) {

    // Service URL.
    var serviceURL = "/api/test";

    // Service methods.
    var serviceMethods = {
        get: {
            method: 'GET',
            cache: false,
            isArray: false
        },
        save: {
            method: 'POST',
            cache: false,
            isArray: false
        }
    };

    // Create resource.
    return $resource(serviceURL, {}, serviceMethods);
}

// Register Test Service.
dcsServices.factory('TestService', ['$resource', TestService]);