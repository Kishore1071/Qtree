const definition = "The switch statement is a conditional statement in JavaScript that allows you to perform different actions based on different conditions. It's particularly useful when you have a single expression (or variable) that can have multiple possible values, and you want to execute different code for each value"

let day = "Monday";

switch (day) {
    case "Monday":
        console.log("It's the start of the workweek.");
        break;
    case "Friday":
        console.log("It's almost the weekend!");
        break;
    default:
        console.log("It's a regular day.");
}

