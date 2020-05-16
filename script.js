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

// Перебор свойств и ключей внутри объекта
const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function () { // создаем свой метод
        console.log("TEst");
    }
};
options.makeTest();

const {border,bg} = options.colors;
//console.log(Object.keys(options));

// console.log (options.name);

// delete options.name;

// console.log(options);
// let counter = 0; // ПОдсчет кол-ва свойств в объекте
// for (let key in options) {
//     if (typeof(options[key])== 'object') {
//         for (let i in options[key]) {
//             console.log(`свойство ${i} имеет значение ${options[key][i]}`);
//             counter++;    
//         }        
//     }else{
//         console.log(`свойство ${key} имеет значение ${options[key]}`);
//         counter++;
//     }   
// }
// console.log(counter);

// Массивы и их методы

const arr = [2,3,6,8,10];
arr.sort(compareNum);
console.log(arr);

function compareNum(a,b){     // функцмя для сортировки чисел
    return a-b;
}

arr.forEach(function(item, i, arr){
    console.log(`$[i]: ${item} внутри массива ${arr}`);
});

for (let value of arr) {
    console.log(value);
}

const str = promt("", "");
const products = str.split(", ");
products.sort();
console.log(products);
console.log(products.join('; ')); // метод join
