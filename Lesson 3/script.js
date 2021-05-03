// =================================================== Array ====================================================
/**
 * Создать массив из 10 чисел. Необходимо создать новый массив, в котором числа будут возведены в квадрат.
 * Например: [1,2,3] -> [1,4,9].
 */
let array = [34, 5, 87, 13, 6, 92, 11, 49, 1, 76];

function getExponentiation(arr) {
	let getNumber = arr.map((item) => {
		return Math.pow(item, 2);
	}, 0)
	console.log(getNumber);
}
getExponentiation(array);


/**
 * Создать массив из 20 чисел. Необходимо высчитать сумму всех элементов.(Используем reduce)
 */
let arrayTwo = [34, 5, 87, 13, 6, 92, 11, 49, 1, 76, 2, 65, 42, 28, 77, 12, 34, 31, 4, 66];

function sumElem(arr) {
	let sumElements = arr.reduce((acc, item) => {
		return acc += item;
	}, 0)
	console.log(sumElements);
}
sumElem(arrayTwo);


/**
 * Напишите код, который добавит символ двоеточие(':') между нечетными числами.
 * Например, число 556 результат должен быть '5:56', 566 -> 566, 655 -> 65:5
 */
const num = prompt('Введите число:', 2532435437);

function addColon(num) {
	let newNumber = '';

	for(let i = 0; i < num.length; i++) {
		if((num[i] % 2 !== 0) && (num[i + 1] % 2 !== 0) && (num[i + 1])) {
			newNumber += num[i] + ':';
		} else {
			newNumber += num[i];
		}
	}
	return newNumber;
}
console.log(addColon(num));


/**
 * Создайте 2 массива с разной длинной.
 * Необходимо написать код,который создаёт массив элементов представляющих собой сумму
 * соответствующих элементов заданных массивов.
 */
 let arrayThree = [3, 5, 7, 9, 10, 15];
 let arrayFour = [7, 23, 5, 12];
 let arrayFive = [];
 let count;
	 
 if(arrayThree.length > arrayFour.length) {
	 count = arrayThree.length;
 } else {
	 count = arrayFour.length;
 }
 
 for (let i = 0; i < count; i++) {
	 if(arrayFour[i] === undefined) {
		 arrayFour.push(0);
	 } else if (arrayThree[i] === undefined){
		 arrayFour.push(0);
	 }
	 arrayFive.push(arrayThree[i] + arrayFour[i]);
 }
	 
 console.log(arrayFive);


 /**
 * Создайте 2 массива с разной длинной.
 * Необходимо написать код,который создаёт массив элементов представляющих собой разность
 * соответствующих элементов заданных массивов.
 */
let arraySix = [3, 5, 7, 9, 10, 15];
let arraySeven = [7, 23, 5, 12];
let arrayEight = [];
let countTwo;
	
if(arraySix.length > arraySeven.length) {
	countTwo = arraySix.length;
} else {
	countTwo = arraySeven.length;
}

for (let i = 0; i < count; i++) {
	if(arraySeven[i] === undefined) {
		arraySeven.push(0);
	} else if (arraySix[i] === undefined){
		arraySeven.push(0);
	}
	arrayEight.push(arraySix[i] - arraySeven[i]);
}
console.log(arrayEight);


/**
 * Напишите код, который разворачивает исходный массив и сохраняет это в новую переменную.
 * Например: исходный массив - [1, 2, 3], результирующий массив - [3, 2, 1]
 */
let arrayNine = [34, 5, 87, 13, 6, 92, 11, 49, 1, 76];

function inReverseOrder(arr) {
	let inReverse = arr.reverse();
	console.log(inReverse);
}
inReverseOrder(arrayNine);


// =================================================== Function =================================================
/**
 * Написать функцию, которая принимает любое количество чисел(не массив)и возвращает их сумму.
 */
function getSum() {
	let result = 0;
	if(arguments.length == 0) return 0;
	for(let i = 0; i < arguments.length; i++) {
		result += arguments[i];
	}
	return result;
}
console.log(getSum(12, 4, 7, 19));


/**
 * Написать функцию, которая принимает первым аргументом массив,
 * а вторым любое значение, функция должна вернуть индекс если такое значение есть в массиве и -1 если его нет.
 * (indexOf, findIndex не использовать)
 */
let newArray = [];
let value;
function getIndex(arr, value) {
	for(let i = 0; i < arr.length; i++) {
		if (arr[i] === value) {
			return i;
		}
	}
	return -1;
}
console.log(getIndex([1, 2, 3, 4, 5], 5));


/**
 * Написать функцию, которая будет возвращать количество вызовов этой функции в квадрате.
 * (Использовать замыкание)
 */
function returnNumberCall() {
	let counter = 0;
	return function() {
		counter++;
		return Math.pow(counter, 2);
	}
}
let callNumber = returnNumberCall();

console.log(callNumber());
console.log(callNumber());
console.log(callNumber());
console.log(callNumber());


/**
 * Напишите функцию, которая разделит массив на части заданного размера и
 * вернет массив элементами которого являются эти части.
 * Пример функции: splitArray([1, 2, 3, 4, 5], 2) => [[1, 2], [3, 4], [5]]
 */
function splitIntoParts(array, size) {
	let chunkedArr = [];
	let index = 0;
	while(index < array.length) {
		chunkedArr.push(array.slice(index, size + index));
		index += size;
	}
	return chunkedArr;
}
console.log(splitIntoParts([1, 3, 87, 13, 6, 92, 11, 49, 4, 5], 2));


/**
 * Создайте замыкание: функция makePassword получает пароль в аргументе и возвращает
 * внутреннюю функцию, которая принимает введенную строку и возвращает булево значение true,
 * если введенная строка совпадает с паролем и false – если не совпадает.
 * Пример выполнения функции:
 * let checkPassword = makePassword('somePassword'); //задаем пороль
 *
 * checkPassword('password') // возвращает false
 * checkPassword('somePassword')
 */
let makePassword = (password) => {
	let valuePassword = password;
	return function(pass) {
		if (pass === valuePassword) {
			return true;
		} else {
			return false;
		}
	}
}

let checkPassword = makePassword('Пароль');
console.log(checkPassword('ПарольПароль'));


/**
 * Написать функцию, которая приобразуем любую строку в строку написанную кебаб кейсом 
 * (все буквы с маленькой буквы и на месте пробелов - тире)
 * Например:
 * 'Hello World' -> 'hello-world';
 * 'Hello dear hell' -> 'hello-dear-hell'
 */
function kebabCase(str) {
	return str.toLowerCase().replace(/ /g, '-');
}
console.log(kebabCase('Hello My Friend'));