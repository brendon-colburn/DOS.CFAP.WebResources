var DOS;
(function (DOS) {
    var CFAP;
    (function (CFAP) {
        var WebResources;
        (function (WebResources) {
            angular.module('helper')
                .service('$webapi', WebResources.WebApi);
        })(WebResources = CFAP.WebResources || (CFAP.WebResources = {}));
    })(CFAP = DOS.CFAP || (DOS.CFAP = {}));
})(DOS || (DOS = {}));
//# sourceMappingURL=app.js.map