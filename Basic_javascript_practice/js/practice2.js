empInfo = [
  
  
    {firstname:'qib',lastname:'aziz',age:22,address:'pikesoftlahore',salary:'60000'},
    {firstname:'qaib',lastname:'aziz',age:22,address:'pikesoftlahore',salary:'49000'},
    {firstname:'sib',lastname:'aziz',age:22,address:'pikesoftlahore',salary:'49000'},
    {firstname:'fsaqib',lastname:'aziz',age:22,address:'pikesoftlahore',salary:'49000'},
    {firstname:'saqib',lastname:'abdul aziz',age:22,address:'pikesoftlahore',salary:'49000'},
    {firstname:'qsaqib',lastname:'aziz',age:22,address:'pikesoftlahore',salary:'49000'},
  
  ];




 const a = [1,6,8,9,4]
 var target = 13 ;
function abc(){
    var result = [];
    
    for(let x in a){
        
        for(let y in a){
            
            for(let z in a){
                var b = a[x]
                b+=a[y]
                b+=a[z];
                //console.log(b);
                if(b === target && x != y && y!=z && z!=x){
                   
                    result.push(a[x]);
                    result.push(a[y]);
                    result.push(a[z]); 
                     return result;
                }
            }
        }
    }
    
}
//console.log(abc());



// var result = empInfo.map(
//     _myFunc
// );
// function _myFunc(value,index){
//     return value.firstname;
// }
// console.log(result);






const numbers1 = [45, 4, 9, 16, 25];
let evenar = [];
let oddAr = [];
numbers1.map(myFunction);

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




    function shuffleArray(arr){
        let currentIndex = arr.length-1 , randomIndex;
        while ( currentIndex != 0){
            randomIndex = Math.random() * currentIndex;
            randomIndex = Math.floor(randomIndex);
            //console.log(randomIndex);
            arr.forEach((element, index) => {
                //.log(element);
                arr[randomIndex] = element;
                const temp = element;
                arr[index] = arr[currentIndex];
                arr[currentIndex] = temp;
            });
currentIndex --;
        }
        console.log(arr);

    }
    shuffleArray(numbers1);

function mix(firstArray,secondArray){
    let result = [];
    let len = firstArray.length + secondArray.length;
    console.log(len);
    for(let x = 0; x<9;x++){
        if( firstArray[x] != null ){
            result.push(firstArray[x]);
        }
        if (secondArray[x] != null){
            result.push(secondArray[x]);
        }
        if(firstArray[x] == null && secondArray[x] == null){
            break;
        }
        
    }


    // if( firstArray.length < secondArray.length){
    //     secondArray.forEach((element,ind) => {
    //         result.push(firstArray[ind]);
    //         result.push(secondArray[ind]);
    //     });
    // } else if( firstArray.length > secondArray.length ){
    //     firstArray.forEach((element,ind) => {
    //         result.push(firstArray[ind]);
    //         result.push(secondArray[ind]);
    //     });
    // } else {
    //     firstArray.forEach((element,ind) => {
    //         result.push(firstArray[ind]);
    //         result.push(secondArray[ind]);
    //     });
    // }

console.log(result);
}
mix(["h", "a", "c"], [7, 4, 17, 10, 48]);






function orderBySum (someArray) {
      var z = someArray.sort(compare);

      function compare(a,b) {
          sum =0;
          sum2 = 0;
          for(let x of a){
            sum+=x;
          }
          for(let y of b){
            sum2+=y;
          }
          return sum - sum2;
      }
      return z;
}
console.log(orderBySum([[1,3], [4,2], [2,1]]));





// function onlyUnique(someArray){
//     var x = someArray.filter(myFunc112);
//     //var result = someArray.match()
//     function myFunc112(val, ind, ar){
//         //  let x = ar.indexOf(val);
//         //  console.log(x);
//         //  if(val ){
//         //      return true;
//         //  }
//             // return ind === ar.findIndex((t,i) => {
//             //     if(ind == i && val == t){
//             //         return true;
//             //     } else {
//             //         //return true;
//             //     }
//             //  return val === t;
//             // })
           
       
//     }
//     return x;
// }
// console.log(onlyUnique([1, 1, 2, 3, 3, 4, 4, 5]));






function alphabetize(someArray){
    var result = someArray.map((v,i,ar)=>{
        v = v.sort();
        return v;
    });
    result = result.sort();
    return result;
}

const jumbledAlphabetically = [
    ["e", "d", "f"],
    ["a", "c", "b"],
    ["m", "o", "n"]
]
console.log(alphabetize(jumbledAlphabetically))










function findCommonWords(firstArray, secondArray){
    var result ;
     result = firstArray.filter((v,i,ar)=>{
          var x = secondArray.find((element)=>{ return element === v} )
          if(x !== undefined){
              
               result = x;
            return result;

          }

     });
    return result;
}

const firstArray = ["dog", "cat", "parrot"]
const secondArray = ["lizard", "rat", "cat"]
console.log(findCommonWords(firstArray, secondArray))




// problem15();
// function check number wheather it is multiple of 5
// const num = [50,32,30,45,47];







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








colors = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
o = ["th","st","nd","rd"];
function problem15Pro(){
    colors.map(function(val,ind,ar) {
        if(ind < 3 ){
            console.log(ind+1+o[ind+1]+' choice is '+val);
        }else {
            console.log(ind+1+o[0]+' choice is '+val);}
    });
}
console.log('Problem15 pr000000000000000000000000000');
problem15Pro();


console.log('<--------->');
const arr1111=[3, 'a', 'a', 2, 3, 'a', 3, 'b', 'b', 4, 9, 3];
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




 




// console.log('<--------->');
// console.log('The array is = '+[ -4, 3, 2, 1 ]);
// function sumOfSquaresOfNumVector(arrr1){
//     let sum = 0;
//     for(let i=0; i<arrr1.length; i++){
//         sum += Math.pow(arrr1[i],2);
//     }
//     console.log(sum);
// }
// sumOfSquaresOfNumVector( [ -4, 3, 2, 1 ] );



console.log('adsfsdfasdfasfsda')
function sumOfSquaresOfNumVectorPRO(array1){
    array1.reduce(function(val){
        return Math.pow(val,2);
    });
}

sumOfSquaresOfNumVector( [ -4, 3, 2, 1 ] );
