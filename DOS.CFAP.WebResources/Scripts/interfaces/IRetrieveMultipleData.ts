module DOS.CFAP.WebResources {
    export interface IRetrieveMultipleData<T> {
        '@odata.context': string,
        value: T[]
    }
}