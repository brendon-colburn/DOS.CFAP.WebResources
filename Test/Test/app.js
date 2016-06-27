var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var DOS;
(function (DOS) {
    var CFAP;
    (function (CFAP) {
        var WebResources;
        (function (WebResources) {
            var Entity = (function () {
                function Entity(route, id) {
                    this.route = route;
                    this.id = id;
                }
                return Entity;
            }());
            WebResources.Entity = Entity;
        })(WebResources = CFAP.WebResources || (CFAP.WebResources = {}));
    })(CFAP = DOS.CFAP || (DOS.CFAP = {}));
})(DOS || (DOS = {}));
var DOS;
(function (DOS) {
    var CFAP;
    (function (CFAP) {
        var WebResources;
        (function (WebResources) {
            var Account = (function (_super) {
                __extends(Account, _super);
                function Account(initData) {
                    _super.call(this, 'accounts');
                    if (initData == undefined)
                        return;
                    this.name = initData.name;
                    this._primarycontactid_value = initData._primarycontactid_value;
                    this.id = this.accountid = initData.accountid;
                }
                return Account;
            }(WebResources.Entity));
            WebResources.Account = Account;
        })(WebResources = CFAP.WebResources || (CFAP.WebResources = {}));
    })(CFAP = DOS.CFAP || (DOS.CFAP = {}));
})(DOS || (DOS = {}));
var DOS;
(function (DOS) {
    var CFAP;
    (function (CFAP) {
        var WebResources;
        (function (WebResources) {
            var WebApi = (function () {
                function WebApi($http) {
                    this.$http = $http;
                    this.BaseUrl = parent.Xrm.Page.context.getClientUrl() + "/api/data/v8.1/";
                }
                WebApi.prototype.retrieve = function (e, params) {
                    var url = this.BaseUrl + e.route + "(" + e.id + ")";
                    if (params != undefined)
                        url = this.addParams(url, params);
                    return this.$http.get(url);
                };
                WebApi.prototype.create = function (e) {
                    var url = this.BaseUrl + e.route;
                    return this.$http.post(url, e);
                };
                WebApi.prototype.retrieveMultiple = function (e, params) {
                    var url = this.BaseUrl + e.route;
                    if (params != undefined)
                        url = this.addParams(url, params);
                    return this.$http.get(url);
                };
                WebApi.prototype.update = function (e) {
                    var url = this.BaseUrl + e.route;
                    return this.$http.patch(url, e);
                };
                WebApi.prototype.remove = function (e) {
                    var url = this.BaseUrl + e.route;
                    return this.$http.delete(url);
                };
                WebApi.prototype.addParams = function (url, params) {
                    url += "?";
                    angular.forEach(Object.keys(params), function (v, k) {
                        if (k == 0 || k == this.length)
                            url += v + '=' + params[v];
                        else
                            url += '&' + v + '=' + params[v];
                    });
                    return url;
                };
                WebApi.$inject = [
                    '$http'
                ];
                return WebApi;
            }());
            WebResources.WebApi = WebApi;
        })(WebResources = CFAP.WebResources || (CFAP.WebResources = {}));
    })(CFAP = DOS.CFAP || (DOS.CFAP = {}));
})(DOS || (DOS = {}));
/// <reference path="typings/angularjs/angular.d.ts" />
/// <reference path="typings/jquery/jquery.d.ts" />
/// <reference path="typings/xrm/xrm.d.ts" />
/// <reference path="interfaces/iaccount.ts" />
/// <reference path="interfaces/IRetrieveMultipleData.ts" />
/// <reference path="interfaces/iparams.ts" />
/// <reference path="interfaces/iwebapi.ts" />
/// <reference path="models/entity.ts" />
/// <reference path="models/account.ts" />
/// <reference path="services/webapi.ts" />
/// <reference path="../../dos.cfap.webresources/scripts/_all.ts" />
/// <reference path="controllers/testctrl.ts" />
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
                    $webapi.retrieveMultiple(new WebResources.Account).then(function (resp) {
                        if (resp.status != 200)
                            return;
                        $scope.accounts = resp.data.value;
                        console.log($scope.accounts);
                        _this.getAccount();
                    });
                }
                testCtrl.prototype.getAccount = function () {
                    var a = new WebResources.Account(this.$scope.accounts[0]);
                    this.$webapi.retrieve(a, { $select: 'name' }).then(function (resp) {
                        console.log(resp.data);
                    });
                };
                testCtrl.prototype.createAccount = function () {
                    var a = new WebResources.Account({
                        name: "New Account"
                    });
                    this.$webapi.create(a);
                };
                testCtrl.prototype.updateAccount = function () {
                    var a = new WebResources.Account(this.$scope.accounts[0]);
                    a.name = "Updated Value";
                    this.$webapi.update(a);
                };
                testCtrl.prototype.deleteAccount = function (selectedAccount) {
                    var a = new WebResources.Account(selectedAccount);
                    this.$webapi.remove(a);
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
/// <reference path="_all.ts" />
var DOS;
(function (DOS) {
    var CFAP;
    (function (CFAP) {
        var WebResources;
        (function (WebResources) {
            angular.module('app', [])
                .service('$webapi', WebResources.WebApi)
                .controller('testCtrl', WebResources.testCtrl);
        })(WebResources = CFAP.WebResources || (CFAP.WebResources = {}));
    })(CFAP = DOS.CFAP || (DOS.CFAP = {}));
})(DOS || (DOS = {}));
//# sourceMappingURL=app.js.map