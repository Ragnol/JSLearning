const cupsOfSugarNeeded = 5;

let cupsAdded = 0;

do {
  cupsAdded++;
} while (cupsAdded < cupsOfSugarNeeded)

console.log(cupsAdded)

/*
Cups needed is zero

Cups added is zero

The do loop is set up to add 1 cup of sugar per cycle

The first cycle adds 1 cup, which then meets the expression and ends the loop

IF the cups needed is five

Cups added is zero

Then the first cycle will be 1, it will recycle and add 1 until eventually a loop will add one more to make it 5, and upon reaching the expression it will be false, as the cups added will be equal to the cups needed, and not less, resulting in the loop ending.
*/