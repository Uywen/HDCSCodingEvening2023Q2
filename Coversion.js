


const RGBtoHex = (red,green,blue) => 

// used the map method to iterate throught the numbers
  [red,green,blue].map( x =>
        x.toString(16).padStart(2,'0')).join('').toUpperCase()
        
        // Hexadecimal uses 16 unique symbols, representing values as “0 – 9” for value between 0 – 9 and “A – F” or “a – f” for value between “10 – 15”.
        // thats why i set the toString to 16 so that it reads up  to 16 digits in the array of numbers to be entered

        // pad string just pads a string to the given length

console.log(RGBtoHex(255,255,255));
console.log(RGBtoHex(255,255,300));
console.log(RGBtoHex(0,0,0));
console.log(RGBtoHex(148,0,211));
