let empInfo = [
  
  
  // {firstname:'qib',lastname:'aziz',age:22,address:'pikesoftlahore',salary:'60000'},
  // {firstname:'qaib',lastname:'aziz',age:22,address:'pikesoftlahore',salary:'49000'},
  // {firstname:'sib',lastname:'aziz',age:22,address:'pikesoftlahore',salary:'49000'},
  // {firstname:'fsaqib',lastname:'aziz',age:22,address:'pikesoftlahore',salary:'49000'},
  // {firstname:'saqib',lastname:'abdul aziz',age:22,address:'pikesoftlahore',salary:'49000'},
  // {firstname:'qsaqib',lastname:'aziz',age:22,address:'pikesoftlahore',salary:'49000'},

];


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



function removeDuplicates(data){
  const filteredArray = data.filter((value,index) => {
    const _obj = JSON.stringify(value);
    return index === data.findIndex((t) => {
      return JSON.stringify(t) === _obj;




      // t.firstname === this.firstname && 
      // t.lastname === this.lastname && t.age === this.age && t.address === this.address
      // &&  t.salary === this.salary
    
    
    
    })
    
    //console.log(_obj);

    // for(const x in data){
    //   const _obj1 = data[x].toString();
    //   console.log(_obj1);
    //   for(const y in data){
    //     const _obj2 = data[y+1].toString();
    //     if( _obj1 === _obj2){
    //       data.slice(y,1);
    //       //filteredArray = data;
    //     }
    //   }
    // }

  });



  return filteredArray;
}
// function checkDuplicates(data){
//   var len = data.length;
//   data.forEach(element => {
//   let obj1 = element;
//   for(var i =1; i==len; i++)
//   let obj2 = data[i];
//   if(obj1.firstname === obj2.firstname){}
//   else if(obj1.lastname === obj2.lastname){}
//   else if(obj1.age === obj2.age){}
//   else if(obj1.address === obj2.address){}
//   else if(obj1.salary === obj2.salary){
//     return data.slice(i,1);
//   }

//   //console.log(obj1);
//   //console.log(obj2);
// });  
// }

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
    //console.log(obj1);
  //}
}




function doCapital(arrr){
  for(var x in arrr) {
    let objet = arrr[x];
    
    //return objet.firstname;
    addObject(objet);
  }
}



function addObject(obj){
  let fstn = obj.firstname.toString().toUpperCase();
   lstn = obj.lastname.toString().toUpperCase();
   obj.firstname = fstn;
   obj.lastname = lstn;
   //console.log(obj);
  //empInfo.push(obj);
  empInfo.push(obj);
  createProp(obj);
  empInfo.sort(compare);
//console.log(checkDuplicates(empInfo));
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



//console.log(addObject(emp1));
//console.log(empInfo);
//console.log(doCapital(empInfo));
// console.log();
// console.log(addObject(emp2));
// console.log(addObject(emp3));
// console.log(addObject(emp4));
// console.log(addObject(emp5));
// console.log(addObject(emp6));
// console.log(addObject(emp7));
// console.log(addObject(emp8));
// console.log(addObject(emp9));




addObject(emp1);
addObject(emp2);
addObject(emp3);
addObject(emp4);
addObject(emp5);
addObject(emp6);
addObject(emp7);
addObject(emp8);
addObject(emp9);





// console.log(empInfo);
// console.log(' The dublicates are removed');
// console.log(removeDuplicates(empInfo));





































// const weekdays = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
// const months = [
//   'January',
//   'February',
//   'March',
//   'April',
//   'May',
//   'June',
//   'July',
//   'August',
//   'September',
//   'October',
//   'November',
//   'December'
//   ];

// function myfunc (){
//     let date = new Date();
//     console.log('Week Starts From : '+weekdays[0]);
//     console.log('Date :  '+date);
//     console.log('Today is: '+weekdays[date.getDay()  - 1 ]);
//     console.log('Current Time is'+date.getHours());
//     console.log('Current Time is : '+date.getHours()+":"
//     +date.getMinutes()+':'+date.getSeconds());
//   }

// function printContent() {
//   window.print();
// }
// function printDateinFormate(){
//  let date = new Date();
//  console.log(date.getMonth()+'-'+date.getDate()+"-"+date.getFullYear());
//  console.log(date.getMonth()+'/'+date.getDate()+"/"+date.getFullYear());
// }
// function areaoftriangle(){
//   let a= 5;
//   let b= 6;
//   let c= 7;
//   s=(a+b+c)/2;
//   let A = Math.sqrt((s*(s-a)*(s-b)*(s-c))).toFixed(4);
//   console.log(A);
// }
// function rotateString(){
//   let txt1 = "PIKESOFT";
//   console.log('The String is :'+txt1);
//   for(var i=0;i <= 13;i++){
//     txt1 = txt1[txt1.length -1] + txt1.slice(0,txt1.length -1);
//     console.log(txt1);
//   }
// }
// var year;
function findleapYear(year){
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
// function guessGame(year){
// let num = Math.floor(Math.random() * 10);
// console.log(num);
// if(num == year) {
//   console.log('Good Work');
// } else {
//   console.log('Try Again!');
// }
// }
  
  //console.log(myfunc());
  //console.log(printContent());
  //console.log(printDateinFormate());
  //console.log(areaoftriangle());
  //console.log(rotateString());
  //console.log(findleapYear(1700));
  //console.log(guessGame(9));

}