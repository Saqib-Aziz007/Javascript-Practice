const empInfo = [
    {firstname:'qib',lastname:'aziz',age:22,address:'pikesoftlahore',salary:'60000'},
    {firstname:'qaib',lastname:'aziz',age:22,address:'pikesoftlahore',salary:'49000'},
    {firstname:'sib',lastname:'aziz',age:22,address:'pikesoftlahore',salary:'49000'},
    {firstname:'fsaqib',lastname:'aziz',age:22,address:'pikesoftlahore',salary:'49000'},
    {firstname:'saqib',lastname:'abdul aziz',age:22,address:'pikesoftlahore',salary:'49000'},
    {firstname:'qsaqib',lastname:'aziz',age:22,address:'pikesoftlahore',salary:'49000'},
  ];



    //keys() method example
    function keymethod(arr) {
    console.log(Object.keys(arr));
    }




    // sort() method example for Array of numbers
    function compare(a,b){
          if(a.firstname > b.firstname){
            return 1;
          }
          if(a.firstname < b.firstname){
            return -1
          }
          if(a.firstname == b.firstname){
            if(a.salary > b.salary) return -1;
            if(a.salary < b.salary) return 1;
            if(a.salary = b.salary) return 0;
          }
      }
      //console.log(empInfo.sort(compare));






    //function to Clone any Array
    function array_clone(array1) {return array1.slice(0)} ; 
    // console.log([1, 2, 4, 0]);
    // console.log([1, 2, [4, 0]]);






    //slice() methode example
    function problem3(arr,num){
        if( num == undefined){
            return arr.slice(0,1);
        }
        if(num < 0){
            return [];
        }else {
            return arr.slice(0,num);
        }
        
    }
    
    // console.log(problem3([7, 9, 0, -2]));
    // console.log(problem3([],3));
    // console.log(problem3([7, 9, 0, -2],3));
    // console.log(problem3([7, 9, 0, -2],6));
    // console.log(problem3([7, 9, 0, -2],-3));








    //toString(),push(),join methods exapmle

    function problem6(num){
        //var num = window.prompt('',);
        let numStr = num.toString();
        let result = [numStr[0]];
        for(var x=1;x<= numStr.length;x++){
            if( ( numStr[x-1] ) %2 === 0 && ( numStr[x] ) %2 === 0){
                result.push('-',numStr[x]);
            }else{
                result.push(numStr[x]);
            }
        }
        return result.join('');
    }
    //console.log(problem6(02456));




    //reduce() method example
    function sumOfSquaresOfNumVectorPRO(array1){
        array1.reduce(function(val){
            return Math.pow(val,2);
        });
    }
    //sumOfSquaresOfNumVector( [ -4, 3, 2, 1 ] );
    
    




    //map() method example
    const colors = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
    const o = ["th","st","nd","rd"];
    function problem15Pro(){
        colors.map(function(val,ind,ar) {
            if(ind < 3 ){
                console.log(ind+1+o[ind+1]+' choice is '+val);
            }else {
                console.log(ind+1+o[0]+' choice is '+val);}
        });
    }
    //problem15Pro();









//
//function check number wheather it is multiple of 5 
//without using % operator
//const num = [50,32,30,45,47];

function problem000(num){
    let x = num / 5;
    if(Number.isInteger(x)){
        return true;
       //console.log(typeof x);
   } else {
       return false;
   }
}
//console.log(problem000(5));







//reduce() method example
//factorial of a number using reduce() method
function facto(num){
    let arr = [];
   while(num >= 1){
       arr.push(num);
       num--;
   }
   let result = arr.reduce(myFunc,1);

   function myFunc(prev,val){
           return prev*val;
   }
   return result;
}
//console.log(facto(5));








//map() method example
// give an array it will return two array one containing even array
// the 2nd containing the odd element of array

function returnEvenAndOddArray(numberAr){
    let evenar = [];
    let oddAr = [];
    numberAr.map(myFunction);

    function myFunction(value, index, array) {
        if (value % 2 == 0) {
            evenar.push(value);
        return value ;
        }else {
            oddAr.push(value);
        return value;
        }
    }
    console.log(evenar);
    console.log(oddAr);
}
const numbers1 = [45, 4, 9, 16, 25];
//returnEvenAndOddArray(numbers1);










//Give the function a year and it will tell you it's a leap year or not.
function findLeapYear(year){
    if(year % 4 == 0){
      if(year % 100 == 0){
        if(year % 400 == 0){
          console.log('The given year is LEAP year.');
      }
      else {
        console.log('Its not a leap year.');
      }
    }
    else{console.log('The gicen year is LEAP year.');}
  } else {
    console.log(
      'Its not a leap year'
    );
  }
}
//findLeapYear(2021);








// MATH.random() method example
//Guess Game 
function guessGame(){
    let guess = window.prompt('Enter a Number!');
    let num = Math.floor(Math.random() * 10);
    console.log(num);
    if(num == guess) {
      alert('Good Work');
    } else {
      alert('Try Again!');
    }
}
//guessGame();









// GIVEN PROBLEM
/*
An array of objects with the following keys: age, first name, last name, address, salary.
Remove duplicates from the array.
Sort array on the base of the full name.
Slugify the full name.
If 2 objects have the same full name, sort on the basis of a higher salary.
Add a new property level and give it A if the salary is above 60k, B if the salary ranges b/w 50k-60k, 
C if the salary ranges b/w 40k-50k, D if the salary ranges b/w 30k-40k, and E if the salary is less than 30k

*/


//SOLUTION OF ABOVE PROBLEM
function compare(a,b){
      if(a.firstname > b.firstname){
        return 1;
      }
      if(a.firstname < b.firstname){
        return -1
      }
      if(a.firstname == b.firstname){
        if(a.salary > b.salary) return -1;
        if(a.salary < b.salary) return 1;
        if(a.salary = b.salary) return 0;
      }
  }
  

  
  
  function removeDuplicates(data){
    const filteredArray = data.filter((value,index) => {
      const _obj = JSON.stringify(value);
      return index === data.findIndex((t) => {
        return JSON.stringify(t) === _obj;
      })
    });
    return filteredArray;
  }


  
  function createProp(data){
    let obj1 = data;
    //for(var x in data){
      //let obj1 = data[x];
      //console.log(obj1);
      if(obj1.salary == 60000){
        obj1.level = 'A';
      } else if(obj1.salary < 60000 && obj1.salary >= 50000){
        obj1.level = 'B';
      } else if(obj1.salary < 50000 && obj1.salary >= 40000){
        obj1.level = 'C';
      } else if(obj1.salary < 40000 && obj1.salary >= 30000){
        obj1.level = 'D';
      } else if(obj1.salary < 30000 ){
        obj1.level = 'E';
      }
  }

  
  
  
  function addObject(obj){

    let fstn = obj.firstname.toString().toUpperCase();
     
    lstn = obj.lastname.toString().toUpperCase();
     
    obj.firstname = fstn;
     
    obj.lastname = lstn;
    
    const addedobject = empInfo.push(obj);
    //alert('Object added Successfully! at index '+addedobject);
    
    createProp(obj);
    
    empInfo.sort(compare);
}
  
  
  
  
  
const emp1 = {firstname:'muhammad Faizan',lastname:'Ameen',age:27,address:'Abdul Hakim',salary:'50000'};
const emp2 = {firstname:'saqib',lastname:'aziz',age:22,address:'pikesoftlahore',salary:'49000'};
const emp3 = {firstname:'ali',lastname:'raza',age:23,address:'pikesoftlahore',salary:'55000'};
const emp4 = {firstname:'saqib',lastname:'abdul aziz',age:22,address:'pikesoftlahore',salary:'49000'};
const emp7 = {firstname:'saqib',lastname:'abdul aziz',age:22,address:'pikesoftlahore',salary:'49000'};
const emp8 = {firstname:'saqib',lastname:'abdul aziz',age:22,address:'pikesoftlahore',salary:'49000'};
const emp9 = {firstname:'saqib',lastname:'abdul aziz',age:22,address:'pikesoftlahore',salary:'49000'};
const emp5 = {firstname:'saqib',lastname:'aziz',age:24,address:'Multan',salary:'59000'};
const emp6 = {firstname:'bbaqib',lastname:'aziz',age:24,address:'Multan',salary:'59000'};
  
  
  

  
  
  
  
addObject(emp1);
addObject(emp2);
addObject(emp3);
addObject(emp4);
addObject(emp5);
addObject(emp6);
addObject(emp7);
addObject(emp8);
addObject(emp9);
console.log(removeDuplicates(empInfo));
  