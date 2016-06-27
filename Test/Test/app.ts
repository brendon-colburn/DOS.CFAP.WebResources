/// <reference path="_all.ts" />

module DOS.CFAP.WebResources {
    angular.module('app', [])
        .service('$webapi',WebApi)
        .controller('testCtrl', testCtrl);
}