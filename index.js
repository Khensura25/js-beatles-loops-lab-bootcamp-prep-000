// add solution here
function theBeatlesPlay(array, intstruments) {
  let newArray = [];
  
  for (let i = 0; i < array.length; i++) {
      
      newArray.push(`${array[i]} plays ${intstruments[i]}`)
  }
   return newArray;
}


function johnLennonFacts(array) {
  let i = 0;
 while( i < array.length) {
   array[i] = array[i] + "!!!";
   i++;
 }
 return array;
}



function iLoveBeatles()