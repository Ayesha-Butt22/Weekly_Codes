                                             //FOR LOOP
/*
let marks = [30 , 50 , 76 , 97];
console.log(marks);
console.log(marks[2]);
console.log(marks.length);
console.log(typeof(marks));
// strings--->immutable
//arrays--->mutable
*/
/*
let marks = [30 , 50 , 76 , 97];
for(let  i=0 ; i<marks.length ; i++)
{
    console.log(marks[i]);
}
    */

//array ko print karwany ki liye hum "for of loop " and "for in loop" be use karsaktyha 
//generally array ko acces karny k liye "for of loop " zaida acha hoga 

                                                     //FOR OF LOOP
/*
let heros = ["spiderman" , "batman" , "ironman"];
for(let el of heros)
{
    console.log(el);
}

*/
/*
let cities = ["Islamabad" , "Peshawar" , "Karachi" , "Sialkot"]
for(let city of cities)
{
       
       console.log(city.toUpperCase());
}
*/
                           //ARRAY METHODS
    //push---->add to the end// array k last ma add karna 
    //pop---->delete from the end & return
  
    let fruits = ["apple", "banana", "mango", "orange"];
     console.log("Orignal Array=",fruits);
     console.log(fruits.push("Kiwi"));
     console.log("Add kiwi in Orignal array:",fruits);
     let deleteditems=fruits.pop();
     console.log("Array=",fruits);
     console.log("deleted",deleteditems);

     
//orignal array ma change hota ha
//concate:join multiple arrays& returns result
//unshift: add in start
//shift"delete fromn the start & return
//slice: returns a piece of the array
//splice: changeorignal array(add,remove,replace)

