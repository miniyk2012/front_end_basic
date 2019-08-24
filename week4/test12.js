var breakfast = {
    name: 'The Lumberjack',
    price: '$9.95',
    ingredients: ['eggs', 'sausage', 'toast', 'hashbrowns', 'pancakes']
};

console.log(breakfast);


var savingsAccount = {
    balance: 1000,
    interestRatePercent: 1,
    deposit: function addMoney(amount) {
        if (amount > 0) {
            savingsAccount.balance += amount;
        }
    },
    withdraw: function removeMoney(amount) {
        var verifyBalance = savingsAccount.balance - amount;
        if (amount > 0 && verifyBalance >= 0) {
            savingsAccount.balance -= amount;
        }
    },
    printAccountSummary: function () {
        let ret = 'Welcome!\n';
        ret += `Your balance is currently $${this.balance} and your interest rate is ${this.interestRatePercent}%.`;
        return ret;
    }
};

console.log(savingsAccount.printAccountSummary());
console.log(savingsAccount['printAccountSummary']);

var facebookProfile = {
    name: "Kevin",
    friends: 30,
    messages: ["heiheihei", "hahaha", "jiujiujiu"],
    postMessage: function (message) {
        facebookProfile.messages.push(message);
    },
    deleteMessage: function (index) {
        facebookProfile.messages.splice(index, 1);
    },
    addFriend: function () {
        facebookProfile.friends++;
    },
    removeFriend: function () {
        facebookProfile.friends--;
    }
};

facebookProfile.postMessage(1111);
console.log(facebookProfile.messages);
facebookProfile.deleteMessage(1);
console.log(facebookProfile.messages);
console.log(facebookProfile.friends);
facebookProfile.addFriend();
console.log(facebookProfile.friends);
facebookProfile.removeFriend();
console.log(facebookProfile.friends);


var donuts = [{
        type: "Jelly",
        cost: 1.22
    },
    {
        type: "Chocolate",
        cost: 2.45
    },
    {
        type: "Cider",
        cost: 1.59
    },
    {
        type: "Boston Cream",
        cost: 5.99
    }
];

donuts.forEach(function(value) {
    console.log(value.type +  ' donuts cost $' + value.cost + ' each');
});