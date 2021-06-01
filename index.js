//Define three variables for the LaunchCode shuttle - one for the starting fuel level, another for the number of astronauts aboard, and the third for the altitude the shuttle reaches.
let fuelLevel;
let numOfAstronauts;
let altitude = 2000;

let numFuelLevel = 100;
while(fuelLevel != null);


/*Exercise #4: Construct while loops to do the following:
  a. Query the user for the starting fuel level. Validate that the user enters a positive, integer value greater than 5000 but less than 30000. */
fuelLevel = prompt("Enter fuel level:");
if (fuelLevel > 5000 && fuelLevel < 30000){
console.log("Accepted");
} else {

  console.log("Invalid")

  
}



//b. Use a second loop to query the user for the number of astronauts (up to a maximum of 7). Validate the entry.
numOfAstronauts = prompt("Enter # of astronauts(7 max): ");
  if (numOfAstronauts <= 7){
console.log(numOfAstronauts);
} else {
  console.log("Invalid");

}

  
  
  
//c. Use a final loop to monitor the fuel status and the altitude of the shuttle. Each iteration, decrease the fuel level by 100 units for each astronaut aboard. Also, increase the altitude by 50 kilometers.
if(numOfAstronauts < 5){
  console.log("Seems like there are less than 5. The fuel level will now be " + (fuelLevel - numFuelLevel));
  console.log("Your altitude has increased by 50");
}





/*Exercise #5: Output the result with the phrase, “The shuttle gained an altitude of ___ km.”

If the altitude is 2000 km or higher, add “Orbit achieved!” Otherwise add, “Failed to reach orbit.”*/
console.log(`The shuttle gained an altitude of ${altitude} km.`)

if (altitude >= 2000){
console.log("Orbit achieved")
} else {
  console.log("Failed to reach orbit.")
}