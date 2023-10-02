import inquirer from "inquirer";
let answer = await inquirer.prompt([
    {
        type: "number",
        name: "numberOne",
        message: "Enter First NUMBER:"
    },
    {
        type: "number",
        name: "numberTwo",
        message: "Enter SECOND NUMBER:"
    },
    {
        type: "list",
        name: "operator",
        choices: ["*", "+", "-", "%"],
        message: "SELECT OPERATORS:"
    },
]);
const { numberOne, numberTwo, operator } = answer;
if (numberOne && numberTwo && operator) {
    let result = 0;
    if (operator === "+") {
        result = numberOne + numberTwo;
    }
    else if (operator === "-") {
        result = numberOne - numberTwo;
    }
    if (operator === "*") {
        result = numberOne * numberTwo;
    }
    if (operator === "%") {
        result = numberOne % numberTwo;
    }
    console.log("your Result is: ", result);
}
else {
    console.log("Kindly enter valid input");
}
