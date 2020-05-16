'use strict';

let money, time; 

function start() {
    money = +prompt("Ваш бюджет на месяц?" , '');
    time = prompt('Введите дату в формате YYYY-MM-DD' , '');

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?" , ''); 
    }

}
start();

let appData = {
    budget: money,  
    timeData : time,
    expenses :{},
    optionalExpenses : {},
    income : [],
    savings : true 

};

// let 
//     a1 = prompt("Введлите обязательную статью в этом месяце", ''),
//     a2 = prompt("Во сколько обойдется?" , ''),
//     a3 = prompt("Введлите обязательную статью в этом месяце", ''),
//     a4 = prompt("Во сколько обойдется?" , '');

appData.expenses[a1] = a2;    
appData.expenses[a3] = a4;

function chooseExpenses() {
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
    }
    
}
chooseExpenses();
appData.moneyPerDay = (appData.budget / 30).toFixed();

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

// if(appData.moneyPerDay < 100){
//     console.log("Минимальный уровень достатка");
// } else if (appData.moneyPerDay>100 && appData <2000){
//     console.log("Средний уровень достатка");               // Подставляли в ф-цию для расчёта уровня достатка 
// }else if (appData.moneyPerDay > 2000){
//     console.log("Средний уровень достатка");
// } else {
//     console.log("Произошла ошибка");
// }



// Расчет дневного бюджета

function detectDayBudget() {                                           
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert ("Бюджет на 1 день составляет " + appData.moneyPerDay + "руб.");
}
detectDayBudget();


// Расчет уровня достатка
function detectLevel() {                                                
    if (appData.moneyPerDay < 100) {
        console.log ("Это минимальный уровень достатка!");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log ("Это средний уровень достатка!");
    } else if (appData.moneyPerDay > 2000) {
        console.log ("Это высокий уровень достатка!");
    } else {
        console.log ("Ошибочка...!");
    }
}
detectLevel();



function checkSavings() {
    if (appData.savings==true){
        let save = +prompt("Какова сумма накоплений"),
            persent = +prompt("Под какой процент");

            appData.monthIncome = save/100/12*persent;
            alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
    }    
    
}
checkSavings();

// Функция для определения необязательных расходов
function chooseOptExpenses() {                             

    for (let i = 1; i <= 3; i++) {
        let questionOptExpenses = prompt("Статья необязательных расходов?");
        appData.optionalExpenses[i] = questionOptExpenses;
        console.log(appData.optionalExpenses);
    }


}
chooseOptExpenses();

// Объекты и методы объектов
 

