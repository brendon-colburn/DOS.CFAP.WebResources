/// <reference path="../_all.ts" />
var DOS;
(function (DOS) {
    var CFAP;
    (function (CFAP) {
        var WebResources;
        (function (WebResources) {
            var testCtrl = (function () {
                function testCtrl($webapi, $scope) {
                    var _this = this;
                    this.$webapi = $webapi;
                    this.$scope = $scope;
                    $scope.vm = this;
                    $webapi.retrieveMultiple(new WebResources.Account).then(function (accounts) {
                        $scope.accounts = accounts;
                        console.log($scope.accounts);
                        _this.getAccount();
                    });
                }
                testCtrl.prototype.getAccount = function () {
                    var a = this.$scope.accounts[0];
                    this.$webapi.retrieve(a).then(function (data) {
                        console.log(data);
                    });
                };
                testCtrl.$inject = [
                    '$webapi',
                    '$scope'
                ];
                return testCtrl;
            }());
            WebResources.testCtrl = testCtrl;
        })(WebResources = CFAP.WebResources || (CFAP.WebResources = {}));
    })(CFAP = DOS.CFAP || (DOS.CFAP = {}));
})(DOS || (DOS = {}));
//# sourceMappingURL=TestCtrl.js.map