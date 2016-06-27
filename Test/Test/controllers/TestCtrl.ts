/// <reference path="../_all.ts" />

module DOS.CFAP.WebResources {
    export class testCtrl {
        public static $inject = [
            '$webapi',
            '$scope'
        ];
        constructor(private $webapi: IWebApi, private $scope: testCtrl.ICustomScope) {
            $scope.vm = this;
            $webapi.retrieveMultiple<IAccounts>(new Account).then(resp => {
                if (resp.status != 200) return;
                $scope.accounts = resp.data.value;
                console.log($scope.accounts);
                this.getAccount();
            });
        }

        getAccount() {
            let a = new Account(this.$scope.accounts[0]);
            this.$webapi.retrieve<IAccount>(a, {$select: 'name'}).then(resp => {
                console.log(resp.data);
            });
        }

        createAccount() {
            let a = new Account({
                name: "New Account"
            });
            this.$webapi.create(a);
        }

        updateAccount() {
            let a = new Account(this.$scope.accounts[0]);
            a.name = "Updated Value";
            this.$webapi.update(a);
        }

        deleteAccount(selectedAccount: IAccount) {
            let a = new Account(selectedAccount);
            this.$webapi.remove(a);
        }
    }
}