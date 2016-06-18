namespace DOS.CFAP.WebResources {
    export interface IWebApi {
        retrieve<T>(e: Entity, params?: any): ng.IPromise<T>;
        create<T>(e: Entity): ng.IPromise<T>;
        retrieveMultiple<T>(e: Entity, params?: any): ng.IPromise<T>;
        update<T>(e: Entity): ng.IPromise<T>;
    }
}