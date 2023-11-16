// //Slice doesnot modify the orginal stirng and extracts a section of the string
// const myStirng = "The quick brown fox";

// console.log(myStirng.slice(5));

// console.log(myStirng);

// console.log(myStirng.substring(0,10));
// console.log(myStirng);

function replaceString(oldS, newS, fullS) {
    return fullS.split(oldS).join(newS);
  }

console.log(replaceString("World", "Web", "Brave New World"))