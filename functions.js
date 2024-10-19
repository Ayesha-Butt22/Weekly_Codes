/*
function myFunction()
{
    console.log("Ayesha Butt");
    console.log("Laptop");
}
myFunction();
myFunction();
*/
/*
function sum( x , y)
{
    let c = x + y
   console.log(c);
}

sum(2,3)
*/

/*Arrow functions
const functionName=(para1 , para2)=>
{
    do some work
}
*/
/*
const Sum =(x,y)=>
{
    c=x+y;
    console.log("sum:",c);
}

Sum(2,3);
*/
/*
const prod = (x,y,z)=>
{
    a=x*y*z;
    console.log(a);
}

prod(2,2,2);
*/
/*
const print=()=>
{
    console.log("HELLO");
}
print();
*/
/*
                                                                 //forEach loop in Array
                                                                 //only used for array

//Array.foreach(callBackFunction)
let array=[1,2,3,4,5,6];
array.forEach(function print_value(value)
{
    console.log(value);
});
*/
/*
//Arrow function
let array=[1,2,3,4,5,6];
array.forEach((value,index,arr)=>
{
    console.log(value,index,arr);
});
*/

//some more array methods
//map => similar to "foreach"=>  yeh be array k har value ko print karwasakta ha =>but jo cahnges aty ha us ko new array ma store kart ha
/*let newArr=arr.map((val)=>
{
   return val*2;
});
                                                   //       
let arr=[1,2,3,4,5,6,7];
arr.map((val)=>
{
    console.log(val)
});

                                                   //
 let array=[1,2,3,4,5,6];

 let newArr=array.map((value)=>
 {
    console.log(value*value);

 }
);
console.log(newArr);
*/

//FILTER METHOD
/*let newarray =arr.filter((value)
{
    return val %2 ==0;
});

let array=[1,2,4,5,6,7,8,9,10];
let newArray = array.filter((value) =>
{
    return value % 2 !== 0;
}); 
console.log(newArray);
*/
/*
//REDUCE METHOD
let arr=[1,2,3,4];
const output = arr.reduce((result , current)=>
{
    return result + current;
})
console.log(output);
*/


//findout the largest number
let arr=[5,6,2,1,3];
const output = arr.reduce((prev,curr)=>
{
    return prev > curr ? prev : curr;
});
console.log(output);