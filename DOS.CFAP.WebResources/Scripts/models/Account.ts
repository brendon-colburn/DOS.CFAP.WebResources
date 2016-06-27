module DOS.CFAP.WebResources {
    export class Account extends Entity {
        public name: string;
        public _primarycontactid_value: string;
        public accountid: string;
        public id: string;

        constructor(initData?: IAccount) {
            super('accounts');
            if (initData == undefined) return;
            this.name = initData.name;
            this._primarycontactid_value = initData._primarycontactid_value;
            this.id = this.accountid = initData.accountid;
        }
    }
}