/*
Your code goes here!
 */

/*
You might find you want to use RegEx. As this quiz is about setCustomValidity
and not RegEx, here are some RegEx patterns you might find useful:

match one of the required symbols: /[\!\@\#\$\%\^\&\*]/g
match a number: /[0-9]/g or /\d/g
match a lowercase letter: /[a-z]/g
match an uppercase letter: /[A-Z]/g
match a character that isn't allowed in this password: /[^A-z0-9\!\@\#\$\%\^\&\*]/g
 */

/*
Grabbing a few inputs to help you get started...
 */
var firstPasswordInput = document.querySelector('#first');
var secondPasswordInput = document.querySelector('#second');
var submit = document.querySelector('#submit');

/*
You'll probably find this function useful...
 */
submit.onclick = function () {
    if (!validateLength(firstPasswordInput.value)) {
        firstPasswordInput.setCustomValidity('密码长度不在16-100之间');
        return;
    }
    if (!validateContainSymbols(firstPasswordInput.value)) {
        firstPasswordInput.setCustomValidity('密码不包含至少一个特殊字符');
        return;
    }
    if (!validateOneNumber(firstPasswordInput.value)) {
        firstPasswordInput.setCustomValidity('密码不包含至少一个数字');
        return;
    }
    if (!validateCase(firstPasswordInput.value)) {
        firstPasswordInput.setCustomValidity('密码缺少大写或小写');
        return;    
    }
    firstPasswordInput.setCustomValidity('');
    if (firstPasswordInput.value != secondPasswordInput.value) {
        secondPasswordInput.setCustomValidity('2次密码输入不同');
        return;
    }
    secondPasswordInput.setCustomValidity('');
};

function validateLength(inputValue) {
    return inputValue.length <= 100 && inputValue.length >= 16;
}

function validateContainSymbols(inputValue) {
    let pat = /[\!\@\#\$\%\^\&\*]/;
    return pat.test(inputValue);
}

function validateOneNumber(inputValue) {
    let pat = /\d/;
    return pat.test(inputValue);
}

function validateCase(inputValue) {
    let pat1 = /[a-z]/;
    let pat2 = /[A-Z]/;
    return pat1.test(inputValue) && pat2.test(inputValue);
}
