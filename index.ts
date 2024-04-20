#! /usr/bin/env node

// Import the 'inquirer' module, which is acommand line interface for Note.js 
import inquirer from "inquirer"
import chalk from "chalk"

// Declare a constant 'answers' and assign it to the result of inquirer.prompt function.
const answers : {
    
    Sentence: string
} = await inquirer.prompt([
    {
        name: 'Sentence',
        type: 'input',
        message: chalk.yellowBright.italic("Enter your sentence to count the words:")
    }
])

const words = answers.Sentence.trim().split(" ");

// Print the array of 'words' to the console
console.log(words);

// Print the word count of the sentence to the console.
console.log(chalk.cyanBright.bold(`Your sentence has ${words.length} words!`));
