/*Create a const object called"Student" to store information shown in the picture
const student=
{
name:"Ayesha",
age:20,
cgpa:8.2,
isPass:true,
};
console.log(student);
console.log(student.age);
console.log(student["name"]);
*/
/*Create a game where you start with any random game number. Ask the user to keep
guessing the game number until the user enters correct value.

let gues_number=25;
const prompt = require('prompt-sync')();
let number = prompt('Please enter number: ');
while(number != gues_number)
{
    console.log("Enter wrong number.try again"); 
     number = prompt('Please enter number:');  
     
}
console.log("congratulations.you win");
*/
/*Start username with @, followed by their full name and ending with the fullname length.
Qs1. Prompt the user to enter their full name. Generate a username for them based on the input.

eg: user name =

“shradhakhapra”

, username should be “@shradhakhapra13”

const prompt = require('prompt-sync')();
let name = prompt('Please enter name: ');
let username = "@" + name+ name.length;
console.log(username);
*/



/*For a  given array with marks of students ->[85 ,97 , 44 , 37 , 76 , 60].Find
                               the average marks of the entire class*/
                               
                                                 // using for loop 
/*let array = [85 , 97 , 44 , 37 , 76 , 60];
let sum = 0;
let avg = 0.0;
for(let i = 0 ; i<array.length ; i++)
{
   sum=sum+array[i];
}
console.log(sum);
avg=sum/array.length;
console.log(avg);
*/
/*
                                                    //Using for of loop
let array = [85 , 97 , 44 , 37 , 76 , 60];
let sum=0;
let average = 0.00;
for(let el of array)
{
    sum=sum+el;
}
console.log("sum",sum);
average=sum/array.length;
console.log(`the average marks of the class is : ${average}`);
*/


/*For a given array with prices of 5 items ->[250, 645, 300, 900, 50]
all items have an offer of 10% off ob them. 
Change the array to store the final price after applying offer
*/

                                       //FOR OF LOOP
/*index=0;
let items =[250, 645, 300, 900, 50];
for(let price of items)
{
    
    
    let offer = price/10;
    items[index] = items[index] - offer;
    console.log(`after the offer in array:${items[index]}`);
    index++;
}
    */

                                                               //for loop
/*
let items =[250, 645, 300, 900, 50];
for(let i =0; i<items.length; i++)
{
    let offer =  items[i] / 10;
    items[i]=items[i]-offer;
    console.log(`after the offer in array ${i}=${items[i]}`);
                            }
    */

/*Create a an array to store companies ->"Bloomberg" , "Microsoft" , "Uber" , "Google" , "IBM" ,"Netflix",
a.Rempve the first comany from the array.
b.Remove uber & add OLa in ots place
c.Add amazon at the end


let companies = ["Bloomberg" , "Microsoft" , "Uber" , "Google" , "IBM" ,"Netflix"];
console.log("Orignal array",companies);
let deletedcompany = companies.shift();
console.log("delete",deletedcompany);
console.log("After delete  ",companies);
console.log(companies.splice(1,1,"OLA"));
console.log(companies);
console.log(companies.push("Amazon"));
console.log(companies);
*/

                             //FUNCTIONS
// Create a function usinsg the "function" keyword that takes  a string as an argument & returns the number of vowels in the string.
/*
function vowels(str)
 { 
    let count =  0;
    for(let char of str) 
    {
        if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u" ||
           char === "A" || char === "E" || char === "I" || char === "O" || char === "U") {
            count++;
        }
    }
    return count;
}

const result = vowels("Apnacollege");
console.log(result); // Output will be 5
*/


/* For  a  given array of numbers,print the square of each value using the forEach loop.
arr=[1,2,3,4]

let array=[1,2,3,4];
array.forEach(function square(value)
{
 console.log("Square of numbers",value*value);
}
);
   //by using arrow function

let array=[1,2,3,4];
array.forEach((value,index,arr)=>
{
    console.log(value*value,index,arr);
});
*/
/*
//We are given array of marks of students. Filter our of the marks iof the students that scored 90+
 let array = [87 , 93 , 64 , 99 , 86];
 let output = array.filter((value)=>
{
    return value > 90;
})
console.log(output);
*/


/*Take a number from the user. Create an array of numbers from 1 to n.Use the reduce method to 
calculate sum of all numbers in the array . Use the reduce method to calculate product
of all numbers in the array*/

const prompt = require('prompt-sync')();
let n = prompt("Enter a number :");
let arr = [];
for(let i =1 ; i<=n ; i++)
{
    arr[i-1] = i;

} 
console.log(arr);
//sum
let output = arr.reduce((previous , current)=>
{
    return previous + current ;
});
 
console.log(output);
//Product
let result = arr.reduce((previous , current)=>
    {
        return previous * current ;
    });
     
    console.log(result);