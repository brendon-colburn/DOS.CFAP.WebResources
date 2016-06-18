module DOS.CFAP.WebResources {
    export class WebApi implements IWebApi {
        private BaseUrl = parent.Xrm.Page.context.getClientUrl() + "/api/data/v8.1/";
        public static $inject = [
            '$http'
        ];

        constructor(private $http: ng.IHttpService) { }

        retrieve<T>(e: Entity, params?: any) {
            let url = this.BaseUrl + e.route + "(" + e.id + ")";
            if (params != undefined) url = this.addParams(url, params);
            return this.$http.get<T>(url);
        }

        create<T>(e: Entity) {
            let url = this.BaseUrl + e.route;
            return this.$http.post<T>(url, e);
        }

        retrieveMultiple<T>(e: Entity, params?: any) {
            let url = this.BaseUrl + e.route;
            if (params != undefined) url = this.addParams(url, params);
            return this.$http.get<T>(url);
        }

        update<T>(e: Entity) {
            let url = this.BaseUrl + e.route;
            return this.$http.patch<T>(url, e);
        }

        addParams(url: string, params: any): string {
            url += "?";
            angular.forEach(Object.keys(params), function (v, k) {
                if (k == 0 || k == this.length)
                    url += v + '=' + params[v];
                else
                    url += '&' + v + '=' + params[v];
            });
            return url;
        }
    }
}