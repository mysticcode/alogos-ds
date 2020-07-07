/* palindrome, array(stack) implementation */
//functions : push , pop, peek, length

var letters = [];

var word = "racecar";

var reverseword ="";
//put letters of word into stack
for(var i =0;i< word.length; i++){
    letters.push(word[i])
}
//pop off array in reverse order
for(var i=0;i< word.length;i++){
    reverseword += letters.pop()
}

if(reverseword === word){
    console.log(word + " is a palindrome")
}else {
    console.log(word+ " is not a palindrome")
}
 