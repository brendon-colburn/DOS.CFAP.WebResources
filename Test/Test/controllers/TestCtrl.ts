/// <reference path="../_all.ts" />

module DOS.CFAP.WebResources {
    export class testCtrl {
        public static $inject = [
            '$webapi',
            '$scope'
        ];
        constructor(private $webapi: IWebApi, private $scope: testCtrl.ICustomScope) {
            $scope.vm = this;
            $webapi.retrieveMultiple<Account[]>(new Account).then(accounts => {
                $scope.accounts = accounts;
                console.log($scope.accounts);
                this.getAccount();
            });
        }

        getAccount() {
            let a = this.$scope.accounts[0];
            this.$webapi.retrieve<Account>(a).then(data => {
                console.log(data);
            });
        }
    }
}