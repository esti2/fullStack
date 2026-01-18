const Bank = function () {
    let money = 500;
    const depositCash = function (cash) {
        return money += cash;
    }
    const checkBalance = function () {
        return money;
    }
    return {
        deposit: depositCash,
        showBalance: checkBalance
    };

}
module.exports = Bank;




