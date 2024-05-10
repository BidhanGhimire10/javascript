// // 1 ways to print in js
// // console.log("this is bidhan ghimire");
// // // alert("me");
// // // document.write("this is document write");
// //     console.warn("thos is a warning ");
// //     console.error("this is a error");
// //     console.clear();
// // // console.assert(4==50);
// // console.assert(4==4);

// // 2 js console api
// // console.log("this is bidhan ghimire", "hi again", 2 + 2);
// // console.warn("thos is a warning ");
// // console.error("this is a error");

// // variable in js

// var num1 = 44;
// var num2 = 55;

// // console.log(num1+num2);

// // datatypes in js 
// // string
// var str1 = "this is a string "
// var str2 = "this is a string "


// var obj = {

//     bidhan: 1,
//     bidush: 2,
//     binita: 3

// }
// // console.log(num1);
// // console.log(num2);
// // console.log(str1);
// // console.log(obj);

// var a = true
// var b = false
// // console.log(a,b)

// var und
// // console.log(und)



// var arr = [1, 1, 1, 'hi', 1, 1, 1]

// // console.log(arr)

// // console.log(arr[2])
// // console.log(arr[3])

// // break 10 
// // cntd
// // 
// // operators


// var num1 = 44;
// var num2 = 55;
// // console.log("the value of num1 +num2 is",num1+num2);                
// // console.log("the value of num1 -num2 is",num1-num2);
// // console.log("the value of num1 *num2 is",num1*num2);
// // console.log("the value of num1 /num2 is",num1/num2);

// // asignment operators
// var num3 = num1;
// num3 += 6;
// // console.log(num3);

// var x = 5;
// var y = 4;

// comparison operator
// console.log(x==y);
// console.log(x>y);
// console.log(x<y);
// console.log(x<=y);
// console.log(x>=y);


// logical operator
// logical operator(and)

// console.log(true && true);
// console.log(true && false);
// console.log(false && true);
// console.log(false && false);


// logical operator(and)

// console.log(true || true);
// console.log(true || false);
// console.log(false || true);
// // console.log(false || false);

// logical operatorn (not)

// console.log(!true);
// console.log(!false);

// function in javascript
//  DRY = do not repeat yourself
// function avg(a, b) {
//     return (a + b) / 2;

// }
// // or
// function avg(a, b) {
//     c4 = (a + b) / 2;
//     return c4;


// }
// c1 = avg(5, 5);
// c2 = avg(3, 5);
// console.log (c1,c2);

// conditionals in java script
/*
    var age =34;
    var age =5;
    var age =20;


    if (age < 6){

        console.log ("you are  a kid");
                }
    else if (age >18){
        console.log("your are a man");
    }
    else if(age >50)
    {
        console.log("your are a old man");
    }
    else
    {
        console.log("you are dead");
    }

*/


// loops in js
// var arr1 = [1, 1, 1, 2, 3, 4, 5, 67, 8];
// console.log(arr1);
// for (var i = 0; i < arr1.length; i++) {
//     console.log(arr1[i]);

// }



// arr1.forEach(function (element) {
//     console.log(element);

// })

// let j = 0;
// const a1 = 1;
// a1 = a1++

// let j =0;
// while (j<arr1.length)
// {
//     console.log(arr1[j]);
//     j++

// }

// BREAK AND CONTINUE 

// var arr1 = [1, 2, 3, 4, 5, 6,7, 8];
// // console.log(arr1);
// for (var i = 0; i < arr1.length; i++) {
//     if (i==2){
//         break;
//     }
//     console.log(arr1[i]);

// }
// for (var i = 0; i < arr1.length; i++) {
//     if (i==2){
//         // break;
//         continue;
//     }
   
//     console.log(arr1[i]);

// }

// let arr2 = ['bidhan','bidush','22',22 ,null,true];
// // arr2.pop();
// // arr2.push("my binu")
// // arr2.shift();
// // arr2.unshift();
// // arr2.sort();
// // arr.toString();
// console.log(arr2.length);
// console.log(arr2);

//  STRING MEDTHOD IN JAVASCRIP

// let string="bidhan is a badass boy";
// console.log(string.length);
// console.log(string.indexOf("badass"));


// console.log(string.slice(0,6));
// console.log(string.replace("bidhan", "sungurnake"));

// for (let index = 0; index < 10; index++) {
//     console.log(index);;
    
// }


//             dates in javascript
            
//  let mydate = new Date();
//  console.log(mydate);








//         vvvimp document object manipulation(dom )


let elementid = document.getElementById('id');
// console.log(elementid);

let elementclass = document.getElementsByClassName("container");
// console.log(elementclass);

elementclass[1].style.background="yellow";
elementclass[1].style.color="red";
elementclass[0].classList.add("bgprimary");
elementclass[0].classList.add("text");
elementclass[0].classList.remove("text");

// console.log(elementclass[0].innerHTML);
// console.log(elementclass[0].innerText);

// let print = document.getElementsByTagName('button');
// console.log(print);
tn = document.getElementsByTagName('div');
console.log(tn);
createelement=document.createElement('h2')
createelement.innerText="this is a h2 heaading";


tn[0].append(createelement);

createelement2= document.createElement('p');
createelement2.innerText="this is a create element 2 paragraph";
tn[0].replaceChild(createelement2,createelement);
// remove child(element);



selects = document.querySelector('.container')
// console.log(selects);
select = document.querySelectorAll('.container')
// console.log(select);



function myscript()
{
    console.log("thre button was clicked");


}
window.onload= function()
{
    console.log("the document was loaded");

}


 



   






















    
































































