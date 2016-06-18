var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var DOS;
(function (DOS) {
    var CFAP;
    (function (CFAP) {
        var WebResources;
        (function (WebResources) {
            var Account = (function (_super) {
                __extends(Account, _super);
                function Account(initData) {
                    _super.call(this, 'accounts');
                    if (initData == undefined)
                        return;
                    this.name = initData.name;
                    this._primarycontactid_value = initData._primarycontactid_value;
                    this.id = this.accountid = initData.accountid;
                }
                return Account;
            }(WebResources.Entity));
            WebResources.Account = Account;
        })(WebResources = CFAP.WebResources || (CFAP.WebResources = {}));
    })(CFAP = DOS.CFAP || (DOS.CFAP = {}));
})(DOS || (DOS = {}));
//# sourceMappingURL=Account.js.map