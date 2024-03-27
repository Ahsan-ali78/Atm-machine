#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.blue.bold("welcome to our Atm machine"));
let myBalance = 10000 // dollar
let myPin = 7860

const pinanswer = await inquirer.prompt([
    { 
       name : "q1",
       type : "number",
       message: "enter your pin:",
    }
]);

if(pinanswer.q1 === myPin){
 console.log(chalk.grey.italic("correct pin code"))
 let opr = await inquirer.prompt(
    [{
      name:"operations",
      message:"select one option",
      type:"list",
      choices:["withdraw","checkbalance","fastcash"],
    }]);

    if (opr.operations === "withdraw"){
    let amountAns = await inquirer.prompt ([{
        name:"amount",
        message:"enter the amount you want to withdraw",
        type:"number",
    }]);
if (amountAns.amount < myBalance){
    myBalance -= amountAns.amount;
    console.log(chalk.bgBlueBright.red.bold`"now your balance is :" ${myBalance}`)
}
else{
    console.log(chalk.bgMagenta.cyanBright.bold("insufficient balance"))
}}

else if (opr.operations === "checkbalance"){
    console.log(chalk.bgMagenta.cyanBright.bold`"your current balance is :"  ${myBalance}`)
}

else if (opr.operations === "fastcash"){
    let fast = await inquirer.prompt(
        [{
     name: "fast_opt",
     message:"how much money you want to withdraw",
     type:"list",
     choices:["1000","2000","5000"],
    }]);

    if(fast.fast_opt === "1000"){
     myBalance -= fast.fast_opt;
    console.log(chalk.bgBlueBright.red.bold`your remaining balance is ${myBalance}`);
    }
    if(fast.fast_opt === "2000"){
      myBalance -= fast.fast_opt;
     console.log(chalk.bgBlueBright.red.bold`your remaining balance is ${myBalance}`);
    }
     
    if(fast.fast_opt === "5000"){
        myBalance -= fast.fast_opt;
        console.log(chalk.bgBlueBright.red.bold`your remaining balance is ${myBalance}`);
    }
}
}
else{
    console.log(chalk.bold.bgBlue.redBright("invalid pin code"))
}
