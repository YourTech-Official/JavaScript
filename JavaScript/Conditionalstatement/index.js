// Conditional Statements
// 1. if Statement

let gulu = 2;

//it's only when the condition is true
if (gulu > 18) { 
    console.log("Gulu can Vote!");
}
 
// 2. if-else lader 
if (gulu > 18) {
    console.log("Gulu can Vote ! \n");
} else {
    console.log("Gulu can't Vote ! \n");
}

// if-else if-else lader

if (gulu < 0) {
    console.log("Age should be a positive number \n");
} else if(gulu > 18){
    console.log("Gulu is Adult \n");
} else if(gulu < 18){
    console.log("Gulu is not Adult \n");
} else if(gulu < 50){
    console.log("Gulu is young \n");
} else {
    console.log("Wrong age \n ");
}

// Switch - in switch  case value and variable value must match their types here number, it may be string
// so its depend on variable data type
let day = 1;
switch (day) {
    case 1:
        console.log("Sunday");
        break;
    case 2:    
        console.log("Monday");
        break;
    case 3:    
        console.log("Tueday");
        break;
    case 4:    
        console.log("Wednesday");
        break;
    case 5:    
        console.log("Thursday");
        break;
    case 6:    
        console.log("Friday");
        break;
    case 7:    
        console.log("Saturday");
        break;
    default:
        console.log("Invalid Day \n")
}