module DOS.CFAP.WebResources.testCtrl {
    export interface ICustomScope extends ng.IScope {
        vm: testCtrl;
        accounts: Account[];
    }
}