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
//# sourceMappingURL=WebApi.js.map