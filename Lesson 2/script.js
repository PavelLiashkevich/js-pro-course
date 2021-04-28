/**
 * Сделайте промис, внутри которого будет задержка setTimeout в 3
 * секунды, после которой промис должен зарезолвится (то есть выполнится успешно).
 * */
let promise = new Promise((resolve) => {
	setTimeout(() => resolve('Done!'), 3000);
})

promise.then (
	result => console.log(result)
);


/**
 * Сделайте промис, внутри которого будет задержка setTimeout в 3 секунды,
 * после которой промис должен зареджектится (то есть выполнится с ошибкой).
 */
let promiseTwo = new Promise((resolve, reject) => {
	setTimeout(() => {
		let a = false;
		if(a) {
			resolve('Done!');
		} else {
			reject('Error!');
		}
	}, 3000)
})

promiseTwo.then (
	result => console.log(result),
	error => console.log(error)
);


/**
 * Сделайте функцию, которая будет генерировать случайные числа от 1 до 10. Сделайте так,
 * чтобы сгенерированное число было задержкой функции setTimeout в секундах. Оберните все это в промис.
 * Пусть промис выполнится успешно, если сгенерировано число от 1 до 5, и с ошибкой - если от 6 до 10.
 */
let promiseThree = new Promise((resolve, reject) => {
	let randomNum = randomInteger(10);
	setTimeout(() => {
		if(randomNum >= 1 && randomNum <= 5) {
			resolve('Done!')
		} else if(randomNum >= 6 && randomNum <=10) {
			reject('Error!')
		}
	}, randomNum * 1000);
})

promiseThree.then (
	result => console.log(result),
	error => console.log(error)
)

function randomInteger(num) {
	return Math.floor(Math.random() * num);
}


/**
 * Сделайте 3 промиса, в каждом из которых расположена функция setTimeout со случайной задержкой от 1 до 5 секунд.
 * Пусть каждый промис своим результатом возвращает эту задержку.
 * С помощью Promise.all получите массив результатов, найдите его сумму, выведите на экран.
 */
let array = [
new Promise((resolve, reject) => {
	let randomNumber = randomIntegerTwo(1, 5);
	setTimeout(() => {
		return resolve(randomNumber);
	}, randomNumber * 1000);
}),
new Promise((resolve, reject) => {
	let randomNumber = randomIntegerTwo(1, 5);
	setTimeout(() => {
		return resolve(randomNumber);
	}, randomNumber * 1000);
}),
new Promise((resolve, reject) => {
	let randomNumber = randomIntegerTwo(1, 5);
	setTimeout(() => {
		return resolve(randomNumber);
	}, randomNumber * 1000);
})
]

Promise.all(array).then (
	result => console.log(result[0] + result[1] + result[2])
)

function randomIntegerTwo(min, max) {
	return Math.floor(min + Math.random() * (max + 1 - min));
}


/**
 * Сделать запрос при помощи fetch на адрес https://jsonplaceholder.typicode.com/users,
 * Отфильтровать массив пользователей, чтобы остались только пользователи с четными  id.
 */
fetch('https://jsonplaceholder.typicode.com/users')
.then((value) => {
	return value.json();
})
.then((response) => {
	let array = response;
	let newArray = array.filter((elem) => {
		if(elem.id % 2 == 0) {
			return elem;
		}
	})
	console.log(newArray);
})


/**
 * Написать цикл, который будет итерироватся от 1 до 100.
 * На каждой итерации цикла нужно проверить:
 * если число кратное 3 - то вывести в консоль строку Fizz,
 * если число кратное 5 - то вывести в консоль строку Buzz,
 * если число кратное и 3 и 5 - то вывести FizzBuzz
 */
 for (let num = 1; num < 101; num++ ) {
    if ( num % 5 === 0 && num % 3 === 0 ){
        document.write( num, " = FizzBuzz <br />" );
    } else {
        if ( num % 5 === 0 ){
            document.write( num, " = Buzz <br />" );
        } else {
            if ( num % 3 === 0 ){
                document.write( num, " = Fizz <br/ >" );
            } else {
                document.write( num, "<br/ >" );
            }
        }
    }
}


/**
 * Нарисовать прямоугольный треугольник с длинной катетов i (любое число больше 1).
 * Для рисования использовать символ *(звездочка) или %(знак процента) и консоль.
 * Пример вывода:
 *
 **
 ***
 ****
 *****
 ******
 */
let counter = 10;
let str = ' ';
let star = '*';

for(let i = 0; i < counter; i++) {
	str += star;
	console.log(str);
}


/**
 * Необходимо создать массив из 15 элементов. В массиве обязательно должны быть одинаковые значения.
 * Напишите код, который уберет эти дубликаты из созданного массива.
 */
let array = [6, 99, 45, 8, 27, 45, 6, 77, 52, 8, 34, 7, 55, 87, 10];

function getNewArr(arr) {
	return arr.filter((e, i, a) => a.indexOf(e) == i)
}
console.log(getNewArr(array));


/**
 * Напишите код, который подсчитает количество повторяющихся элементов в массиве.
 * И вывести это количество в консоль.
 */
let arrayTwo = [6, 99, 45, 8, 34, 45, 6, 77, 52, 8, 34, 7, 55, 87, 10];

// Option 1
function numberRepeat(arr) {
	let counter = {};
	arr.forEach(element => {
		counter[element] = (counter[element] || 0) + 1;
	});
	return counter;
}
console.log(numberRepeat(arrayTwo));

// Option 2
let duplicateCount = (arr) => arr.length - new Set(arr).size;
console.log(duplicateCount(arrayTwo));