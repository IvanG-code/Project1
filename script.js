'use strict';

let money = +prompt("Ваш бюджет на месяц?" , ''),
    time = prompt('Введите дату в формате YYYY-MM-DD' , '');

let appData = {
    budget: money,  
    timeData : time,
    expenses :{},
    optionalExpenses : {},
    income : [],
    savings : false 

};

// let 
//     a1 = prompt("Введлите обязательную статью в этом месяце", ''),
//     a2 = prompt("Во сколько обойдется?" , ''),
//     a3 = prompt("Введлите обязательную статью в этом месяце", ''),
//     a4 = prompt("Во сколько обойдется?" , '');

appData.expenses[a1] = a2;    
appData.expenses[a3] = a4;

for (let i = 0; i < 2; i++) {
    let a = prompt("Введлите обязательную статью в этом месяце", ''),
        b = prompt("Во сколько обойдется?" , '');
    if ((typeof(a))==='string' && (typeof(a)) != null && (typeof(b)) != null
    && a!='' && b!='' && a.length < 50) {
       
        appData.expenses[a] = b;    
    } else{
        console.log("bad result");
    }
    appData.expenses[a] = b;
};

//While
// let i = 0;
// while (i<2) {
//     let a = prompt("Введлите обязательную статью в этом месяце", ''),
//     b = prompt("Во сколько обойдется?" , ''); 

//     if ((typeof(a))==='string' && (typeof(a)) != null && (typeof(b)) != null
//     && a!='' && b!='' && a.length < 50) {
       
//         appData.expenses[a] = b;    
//     } else{
//         console.log("bad result");
//         i--;
//     }
    
//     i++;
    
// }

// do...while

// let i = 0;
// do {
//     let a = prompt("Введлите обязательную статью в этом месяце", ''),
//      b = prompt("Во сколько обойдется?" , ''); 

//      if ((typeof(a))==='string' && (typeof(a)) != null && (typeof(b)) != null
//      && a!='' && b!='' && a.length < 50) {
       
//          appData.expenses[a] = b;    
//     } else{
//          console.log("bad result");
//          i--;
//      }
    
//      i++;
// }
// while (i<2);




appData.moneyPerDay = app.appData.budget / 30;
alert("Ежедневный бюджет: " + appData.moneyPerDay);

if(appData.moneyPerDay < 100){
    console.log("Минимальный уровень достатка");
} else if (appData.moneyPerDay>100 && appData <2000){
    console.log("Средний уровень достатка");
}else if (appData.moneyPerDay > 2000){
    console.log("Средний уровень достатка");
} else {
    console.log("Произошла ошибка");
}