module DOS.CFAP.WebResources {
    export interface IWebApi {
        retrieve<T>(e: Entity, params?: IParams): ng.IHttpPromise<T>;
        create<T>(e: Entity): ng.IHttpPromise<T>;
        retrieveMultiple<T>(e: Entity, params?: IParams): ng.IHttpPromise<T>;
        update<T>(e: Entity): ng.IHttpPromise<T>;
        remove<T>(e: Entity): ng.IHttpPromise<T>;
    }
}