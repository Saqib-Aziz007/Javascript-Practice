
 const empInfo = [
    {firstname:'qib',lastname:'aziz',age:22,address:'pikesoftlahore',salary:'60000'},
    {firstname:'qaib',lastname:'aziz',age:22,address:'pikesoftlahore',salary:'49000'},
    {firstname:'sib',lastname:'aziz',age:22,address:'pikesoftlahore',salary:'49000'},
    {firstname:'fsaqib',lastname:'aziz',age:22,address:'pikesoftlahore',salary:'49000'},
    {firstname:'saqib',lastname:'abdul aziz',age:22,address:'pikesoftlahore',salary:'49000'},
    {firstname:'qsaqib',lastname:'aziz',age:22,address:'pikesoftlahore',salary:'49000'},
  ];
  const firstNameArr = ['muhammad saqib  ','  ali  ','  faizan  '];
const lastNameArr = ['aziz','raza','Ameen'];









//TODO1: CONVERT THE WHOLE OBJECT,IT'S KEYS AND IT'S VALUES INTO AN ARRAY.

// const emp = {firstname:'ali',lastname:'raza',age:23,address:'pikesoftlahore',salary:'55000'};
// console.log('object\'s name are converted into Array');
// let objectToArray = Object.keys(emp);
// console.log(objectToArray);
// console.log('object\'s values are converted into Array');
//  objectToArray = Object.values(emp);
//  console.log(objectToArray);
// console.log('whole object is converted into Array');
//  objectToArray = Object.entries(emp);
// console.log(objectToArray);





/*TODO2: ARRAY METHODS
    1. every() works on condition and returns TRUE or FALSE.
    if the function return false it returns false does not check the remaining elements
*/
function getProperty() {
    console.log('every() check the empinfo array and returns if the array contains the info of the employ of LEVEL "A"');
    return empInfo.level == "A"; 
}

/*
    2. filter() works on CONDITION (true or false) and returns and array which contains elements 
        which pass the test.
            It takes 3 Arguments 
                1. 'VALUE' which gives us the current value
                2. 'INDEX' which gives us the current value index
                3. 'ARRAY' which is under filteration
            It returns an array filled with the elements which pass the test(condition)
*/


/*

    3. find() works on CONDITOIN (true or false) and returns the value if the fucntion returns TRUE
            It takes 3 Arguments 
                1. 'VALUE' which gives us the current value
                2. 'INDEX' which gives us the current value index
                3. 'ARRAY' which is under filteration
*/


/*

    4. findIndex() works on TRUE or -1 and returns the INDEX of value on which value 
        is TRUE otherwise return -1
            It takes 3 Arguments 
                1. 'VALUE' which gives us the current value
                2. 'INDEX' which gives us the current value index
                3. 'ARRAY' which is under filteration
*/


/*
    
    5. forEach() method calls a function once for each element in an array, in order
            It takes 3 Arguments 
                1. 'VALUE' which gives us the current value
                2. 'INDEX' which gives us the current value index
                3. 'ARRAY' which is under filteration
*/


/*    
    6. includes() returns TRUE OR FALSE if the given parameter exists in array RETURNS TRUE otherwise FALSE
            It takes 2 arguments
                1. 'VALUE' Which is used to match the array 
                2. 'START' which tells where to start the searching
*/
function includesfunc(){
    //console.log(firstNameArr.includes('  faizan  '));
}
//console.log('this is includes()  example =  ');
includesfunc()

/*
    7. indexOf() return the position of the specified item if it is present in the array
        otherwise it returns -1
        if the specified item present more than one time in the array than it returns the index 
        of the FIRST OCCURANCE
            It takes 2 arguments
                1. "VALUE" which is used to search
                2. "START" which tells where to start search
*/


/*
    8. isArray() return TRUE or FALSE 
        it takes an OBJECT as an argument if the given argument is Array than it returns TRUE otherwise FALSE.
*/
function checkArray(input){
    console.log(Array.isArray(input));
}

//checkArray('Muhammad Saqib');
//checkArray(['a','b',4]);

/*        
    9. join() returns an array as a string 
        it takes an argument which is by default is "," used as a separator
*/

//console.log('join() method example');
//console.log(firstNameArr.join('and'));

/*
    10. keys() return an iteratable OBJECT which contains the keys of the array
*/
function keymethoes(arr) {
const arr1 = Object.keys(arr);
console.log(arr1);
}
//console.log('keys() method example');
//keymethoes(firstNameArr);

/*
    11. .length is used to set or return the number of elements in an array
*/
//console.log('.length method example');
//console.log(firstNameArr.length);
let arr123 = [];
arr123.length = 40;
//console.log(arr123.length);


/*
    12. lastIndexOf() is works same as indexOf() but the difference is that it starts searching
         from the end of the array and returns the index of specified item  
        It takes two arguments
            1. "value" which tells the item to search in the array
            2. "start" which tells where to start search
            but in the lastIndexOf() the search starts from end of the array and ends at start of the array
*/


/*
    13. map() returns an array of results of provided funtion for each element of array
        It takes 3 Arguments 
            1. 'VALUE' which gives us the current value
            2. 'INDEX' which gives us the current value index
            3. 'ARRAY' which is under filteration
*/
//console.log('map() method example');
empInfo.map((obj) => {
    //console.log(obj.salary+'=='+obj.firstname);
});

/*
    14. reduce() returns a value which is the function's last accomulated result
        It takes one function and an initial value
            the function contains the 4 arguments 
                1. "total" which is the initial value or previously returned value of the function
                2. "currentValue" which the current value of the function
                3. "current index" index of the current value 
                4. "array" array itself
*/


/*
    15. reverse() returns an array in reversed order
*/
//console.log(firstNameArr.reverse());

/*
    16. shift() returns removed array item
        it start removing array from left
*/
//console.log('shift() methode example and it removes');
//console.log(firstNameArr.reverse());
//console.log('removed item = '+firstNameArr.shift());


/*
    17. slice() return a new array containing the selected element
         it takes two arguments 
            1. "start" which tells where to start slicing(selecting) and 
            2. "end " which tells where to stop slicing(selecting) but end doesn't included
*/
//console.log('slice() method example ');
//console.log(empInfo.slice(0,5));



/*
    18. some() works on TRUE AND FALSE 
        IT returns TRUE if the any element of the array pass a test or the condition returns true 
        it returns false if the function returns false
        it takes 2 arguments 
        a."function" which contains 3 arguments
            1. "value" which contains current value
            2. "index" which contains current value's index
            3. "array" Array itself
        b."thisValue"
*/


/*
    19. sort() used to sort the array alphabetically it changes the original array
        if the array contains numbers than a compare function can be passed to sort 
        the array which sort the array on the basis of 1,-1 and 0 values return by compare function
*/
function compare(a,b){
    //console.log(obj1);
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


/*
    20. splice() is used to set or remove the elements of the array
         it takes 3 arguments 
            1. "index" index tell where to add or remove item if not provided then the default value is 0
            2. "howmany" tells how many elements you want to remove
            3. "items,.....items" specified items which are to be added.
*/

function splicearr(data,data1){
    console.log(data.splice(2,0,'usman','usama'));
    console.log(data1.splice(2,0,'jamshade','nawaz'));
}
//console.log('splice() methode example');
//console.log(firstNameArr);
//console.log(lastNameArr);
//console.log(lastNameArr.splice(1,0,'jamshade','nawaz'),firstNameArr.splice(1,0,'usman','aaliyan'));
//console.log('splice() methode example');


/*            
    21. toString() is used to convert the item to String
         it used to convert the array into string 
         it returns a string separated by comma","
*/
firstNameArr.unshift('muhammad Saqib'); 
//console.log(firstNameArr.toString('=='));

/*
    22. valueOf() returns the array itself
         default method of array object
*/

//console.log(firstNameArr.valueOf());


/*    
    23. shift() return the removed items
            it used to remove element from the array from the left
*/
//console.log('shift() method example');
//console.log('the array is = '+lastNameArr.valueOf());
var shifteditem = lastNameArr.shift();
//console.log('shited item is = '+shifteditem);

/*    
    24. unshift() returns the new length of the array after adding the elements at the start of the array
            it is used to add the element at the start of the array
*/          
//console.log('unShift() method example');
//console.log(lastNameArr.unshift(shifteditem));
//console.log('the array after unShift() method = '+lastNameArr.valueOf());






// function array_clone(array1) {return array1.slice(0)} ; 
// console.log([1, 2, 4, 0]);
// console.log([1, 2, [4, 0]]);



function problem1(input){
    console.log('Given input = '+input);

    console.log(Array.isArray(input));
}
problem1([1, 2, 4, 0]);
problem1('asdasfasd');



console.log('<--------->');
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

console.log(problem3([7, 9, 0, -2]));
console.log(problem3([],3));
console.log(problem3([7, 9, 0, -2],3));
console.log(problem3([7, 9, 0, -2],6));
console.log(problem3([7, 9, 0, -2],-3));



console.log('<--------->');
console.log('problem 5:');
myColor = ["Red", "Green", "White", "Black"];
console.log(myColor.toString());
console.log(myColor.join());
console.log(myColor.join("+"));


console.log('<--------->');
//"Enter a 2(or more) Digit number and the function will put dashes between two even digits"
function problem6(){
    //var num = window.prompt();
    var num = 02456;
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
console.log(problem6());




console.log('<--------->');
console.log('problem 7');
var arr1111 = [ 3, 8, 7, 6, 5, -4, 3, 2, 1 ];
function compare(a,b){
    return a-b;
}
console.log(arr1111.sort(compare));





console.log('<--------->');
var arr1111=[3, 'a', 'a', 2, 3, 'a', 3, 'b', 'b', 4, 9, 3];
console.log(arr1111);
function checkRepeat(){
    var mf =1;
    var m =0;
    var item;
    for(var x=0;x<=arr1111.length; x++){
        for(var j=x; j<=arr1111.length;j++){
            if(arr1111[x] === arr1111[j]){
                m++;
            }
            if(mf<m){
                mf=m;
                item = arr1111[x];
            }
        }
        //console.log(item+'( '+mf+' times )');
        m=0;
        // mf =1;
        // var item;
    }
    
    console.log('Most Frequent = \''+item+'\' ('+mf+' times)');
}
checkRepeat();






console.log('<--------->');
function caseChanger(){
    var str = window.prompt('Enter a String','The Quick Brown Fox');
    let casechangesstr ='';
    for(let x=0; x <= str.length; x++){
        var h = str.charAt(x).toUpperCase();
        console.log();
        if(str.charAt(x) == h){
            casechangesstr += str.charAt(x).toLowerCase();
        }else{
            casechangesstr += str.charAt(x).toUpperCase();
        } 
    }
    return casechangesstr;
}
console.log(caseChanger());






console.log('<--------->');
var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
function nestedLooops(){
for(let i =0; i < a.length; i++){
    console.log('Row '+ i)
    var h = a[i];
    //console.log(h);
    for(let j = 0; j < h.length; j++){
        console.log(h[j]);
    }
}
}
nestedLooops();







console.log('<--------->');
console.log('The array is = '+[ -4, 3, 2, 1 ]);
function sumOfSquaresOfNumVector(arrr1){
    let sum = 0;
    for(let i=0; i<arrr1.length; i++){
        sum += Math.pow(arrr1[i],2);
    }
    console.log(sum);
}
sumOfSquaresOfNumVector( [ -4, 3, 2, 1 ] );






console.log('<--------->');
console.log('The array is = '+[ -4, 3, 2, 1 ]);
function sumAndSquareOfNumVector(arrr1){
    let sum = 0;
    let prod = 1;
    for(let i=0; i<arrr1.length; i++){
        sum += arrr1[i];
        prod *= arrr1[i];
    }
    console.log('The Sum is = '+sum);
    console.log('The Product is = '+prod);
}
sumAndSquareOfNumVector( [ -4, 3, 2, 1 ] );







console.log('<--------->');
function addItemToArray(){
    let x=0;
    let arr = [];
    do{
        var item = window.prompt('Enter Element to add');
        arr.push(item);
        x++;
        var choice = window.prompt("Do you want More?  press 'y' for YES and 'n' for NO",'n');
        
    }
    while(choice === 'y' || choice === 'Y');
    
    console.log(arr.valueOf());
}
addItemToArray();








console.log('<--------->');
var arr1111=[3, 'a', 'a', 2, 3, 'a', 3, 'b', 'b', 4, 9, 3];
console.log(arr1111.toString());
function problem14(){
    let result = arr1111.filter(match);

    function match(value, index,arr){
        return index === arr.findIndex((t) => {
            return value === t;
            // console.log(value);
            // console.log(t);
        });
    }
    console.log(result);
}
problem14();



console.log('<--------->');
colors = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
o = ["th","st","nd","rd"];
function problem15(){
    for(let i=0;i<colors.length;i++){
         var clr = colors[i];
         //for(let j=0;j<o.length;j++){
             if(i < 3){
                console.log(i+1+o[i+1]+' choice is '+clr);
             }else {
                console.log(i+1+o[0]+' choice is '+clr);
                
             }
        // }

    }
}
problem15();




//function check number wheather it is multiple of 5
//const num = [50,32,30,45,47];

function problem000(num){
     let x = num / 5;
     if(Number.isInteger(x)){
         return true;
        //console.log(typeof x);
    } else {
        return false;
    }
    //console.log('Array of Multiple of 5 = '+multipleOf5);
    //console.log('Array of number that are not the multiple'+other);
}
console.log(problem000(5));






function facto(num){
     //let facnum = num;
     let arr = [];
    while(num >= 1){
        arr.push(num);
        num--;
    }
    //console.log(arr);
    let result = arr.reduce(myFunc,1);

    function myFunc(prev,val){
            return prev*val;
    }
    return result;
}
console.log(facto(5));


const arr111 = [2016,2015,2013,2021]
function problem16(){
    arr111.map((val) => {
        if(val % 4 == 0 && val % 400 == 0){
            return val;
        }
    });
}



