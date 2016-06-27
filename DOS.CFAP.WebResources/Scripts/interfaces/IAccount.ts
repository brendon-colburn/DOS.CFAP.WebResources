namespace DOS.CFAP.WebResources {
    export interface IAccounts extends IRetrieveMultipleData<IAccount> { }
    export interface IAccount {
        accountid?: string;
        name?: string;
        _primarycontactid_value?: string
    }
}