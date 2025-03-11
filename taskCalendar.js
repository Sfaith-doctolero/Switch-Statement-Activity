//Name: Javinar, Stephanie Faith D. 


//program that prompts the user to enter a day of the week
//.lowerCase() - to avoid errorsz regarding case sensitivity
let day = prompt("Enter a day of the week:").toLowerCase();

//switch statement that maps  each day to a specific task
//includes a default case for any unexpected outputs.
switch (day) {
    case "monday":
        console.log("Your task for Monday is: Finish your assignments.");
        break;
    case "tuesday":
        console.log("Your task for Tuesday is: Attend Online Class.");
        break;
    case "wednesday":
        console.log("Your task for Wednesday is: Work on your MCO.");
        break;
    case "thursday":
        console.log("Your task for Thursday is: Review your notes for exams.");
        break;
    case "friday":
        console.log("Your task for Friday is: Finish your research.");
        break;
    case "saturday":
        console.log("Your task for Saturday is: Do some Recreational Activities.");
        break;
    case "sunday":
        console.log("Your task for Sunday is: Rest and relax.");
        break;
    default:
        console.log("Invalid. Please enter a day of the week");
}
