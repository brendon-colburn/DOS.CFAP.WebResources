/// <reference path="_all.ts" />

namespace DOS.CFAP.WebResources {
    angular.module('app')
        .service('$webapi',WebApi)
        .controller('testCtrl', testCtrl);
}