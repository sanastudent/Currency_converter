#!/usr/bin/env node
import inquirer from 'inquirer';
const Currency = {
    USD: 1,
    SAR: 3.75,
    EUR: 0.91,
    INR: 74.57,
    PKR: 280,
};
let user_answer = await inquirer.prompt([
    {
        name: 'from',
        message: 'Enter from Currency',
        type: 'list',
        choices: ['USD', 'SAR', 'EUR', 'INR', 'PKR']
    },
    {
        name: 'to',
        message: 'Enter to Currency',
        type: 'list',
        choices: ['USD', 'SAR', 'EUR', 'INR', 'PKR']
    },
    {
        name: 'amount',
        message: 'Enter your amount',
        type: 'number',
    }
]);
console.log(user_answer);
let fromAmount = Currency[user_answer.from];
let toAmount = Currency[user_answer.to];
let amount = user_answer.amount;
let baseAmount = amount / fromAmount;
let convertedAmount = baseAmount * toAmount;
console.log(convertedAmount);
console.log(fromAmount);
console.log(toAmount);
console.log(amount);
