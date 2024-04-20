#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let condition = true;
while (condition) {
    const answers = await inquirer.prompt([
        {
            name: 'Sentence',
            type: 'input',
            message: chalk.yellowBright.italic("Enter your sentence to count the words:")
        }
    ]);
    const words = answers.Sentence.trim().split(" ");
    console.log(words);
    console.log(chalk.cyanBright.bold(`Your sentence has ${words.length} words!`));
}
