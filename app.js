//Q1 変数

let nickname = ('ごっしー')
let age = ('28')

console.log('私のニックネームは' + nickname + 'です。年齢は' + age + 'です。');


//Q2 配列

let languages = ['JavaScript', 'PHP', 'Ruby', 'Python', 'Go'];

console.log(`私の好きな言語は${languages[0]}です。次は${languages[3]}を勉強してみたいです。`);


//Q3 オブジェクト

let user = {
  name: 'John',
  age: 26,
  bloodType: 'A',
  favorite: 'card',
};

console.log(user.age);


//Q4 配列 × オブジェクト

let playerList = [
  {
    name: 'John',
    age: 26,
    favorites: ['Card Game', 'Basket Ball', 'Programming'],
  },
  {
    name: 'Bob',
    age: 33,
    favorites: ['Tinder', 'The Legend of Zelda'],
  },
  {
    name: 'Michael',
    age: 22,
    favorites: ['Football', 'Smash Bros.'],
  },
];

console.log(playerList[1].favorites[1]);


//Q5 四則演算

console.log((playerList[0].age + playerList[1].age + playerList[2].age)/ 3);


//Q6 関数

function sayHello(){
    console.log('Hello');
}
sayHello();

sayHello(function(){
    console.log('Hoello')
})


//Q7 メソッド

user.birthday = '2000-09-27';
user.sayHello = function() {
  console.log('Hello！');
};

user.sayHello();
console.log(user);


//Q8 引数

let calc = {};

calc.add = function(x, y){
    console.log(x + y);
};
calc.add(3, 4);

calc.subtract = function(x, y){
    console.log(x - y);
};
calc.subtract(15, 5);

calc.multiply = function(x, y){
    console.log(x * y);
};
calc.multiply(7, 7);

calc.divide = function(x, y){
    console.log(x / y);
};
calc.divide(10, 2)


//Q9 返り値

function remainder(x, y){
    return x % y;
};

const result = remainder(5, 3);

console.log('5を3で割った余りは' + result + 'です。');


//Q10 スコープ


// スコープが有効になっていないため、参照ができない。


//応用編 問題


//Q1 標準組み込みオブジェクト

let random = Math.random();
let ten = random * 10;
let answer= Math.floor(ten);
console.log(answer);


//Q2 コールバック関数

setTimeout(function() {
    console.log('Hello World!');
}, 3000);


//Q3 if

let num = 0;
if(num > 0){
    console.log('num is greater than 0');
}
else if (num < 0){
    console.log('num is less than 0');
}
else if (num == 0){
    console.log('num is 0');
}


//Q4 for

let numbers = [];
for (let i = 0; i <= 99; i++) {
  numbers.push(i);
}
console.log(numbers);


//Q5 for × if

let mixed = [4, '2', 5, '8', '9', 0, 1];

for (let i = 0; i < mixed.length; i++) {
    let item = mixed[i];
    if (typeof item === 'number') {

    if (item % 2 === 0) {
        console.log('even');
    } else {
        console.log('odd');
    }
}     else {
    console.log('not number');
}