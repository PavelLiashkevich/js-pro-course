/**
 * Задание 1
 * Создать объект счетчика, который будет иметь поле count - значение счетчика. Объект будет иметь следующие методы:
 * метод для инкремента(+1) счетчика, метод для декремента(-1) счетчика, метод который будет возвращать (return) значение счетчика.
 * (использовать this)
 */
let counter = {
	count: 0,
 
	inc() {
		this.count++;
	},

	decr() {
	  this.count--;
	},
  
	ret() {
	  return this.count;
	},
  };


/**
 * Задание 2
 * Создать объект работника в него должны быть следующие свойства: имя, фамилия, стаж, email.
 * Плюс у него должны быть методы: sayHello - функция, которая принимает имя и
 * будет выводить в alert сообщение 'Привет, ИМЯ! Меня зовут ИМЯ_РАБОТНИКА' (использовать this)
 */
/**
 * Задание 3
 * Добавить в объект работника поле количество выполненных деталей. Добавить метод,
 * который будет увеличивать количество деталей на 1. Добавить метод, который будет делать ресет этого количества в 0. (использовать this)
 */

let worker = {
	firstName: 'John',
	lastName: 'Roj',
	careerPattern: 7,
	email: 'john7roj@gmail.com',

	sayHello() {
		alert(`Hello, Paul! My name is ${this.firstName} ${this.lastName}!`);
	},

	numberDetails: 200,

	increaseDetails() {
		this.numberDetails++;
	},

	resetDetails() {
		this.numberDetails = 0;
	}
}
worker.sayHello();


/**
 * Задание 4
 * Реализуйте функцию конструктор Worker (Работник), который будет создавать объект и иметь следующие свойства: name (имя),
 * secondName (фамилия),
 * rate (ставка за день работы), days (количество отработанных дней). Также класс должен иметь метод getSalary(),
 * который будет выводить зарплату работника.
 * Зарплата - это произведение (умножение) ставки rate на количество отработанных дней days.
 */
/**
 * Задание 5
 * Модифицируйте функцию конструктор Worker из предыдущей задачи следующим образом:
 * У каждого объекта класса Worker должны быть доступны методы getName, getSecondName, getRate, getDays,
 * каждый из которых будет возвращать соответствующее поле в объекте.
 * И также методы setRate, setDays, которые будут устанавливать новые значения для соответственно свойств rate и days.
 */

function Worker (firstName, secondName, rate, days) {
	this.firstName = firstName;
	this.secondName = secondName;
	this.rate = rate;
	this.days = days;

	this.getSalary = function() {
		return this.rate * this.days;
	}

	this.getName = function() {
		return this.firstName;
	}

	this.getSecondName = function() {
		return this.secondName;
	}

	this.getRate = function() {
		return this.getRate;
	}

	this.getDays = function() {
		return this.getDays;
	}

	this.setRate = function(newRate) {
		this.rate = newRate;
	}

	this.setDays = function(newDays) {
		this.days = newDays;
	}
}


/**
 * Задание 6
 * Сделать задание 4-5 с использованием классов.
 */
class WorkerTwo {
	constructor(firstName, secondName, rate, days) {
		this.firstName = firstName;
		this.secondName = secondName;
		this.rate = rate;
		this.days = days;
	}
	getSalary() {
		return this.rate * this.days;
	}
	getName() {
		return this.firstName;
	}
	getSecondName() {
		return this.secondName;
	}
	getRate() {
		return this.rate;
	}
	getDays() {
		return this.days;
	}
	setRate(newRate) {
		this.rate = newRate;
	}
	setDays(newDays) {
		this.days = newDays;
	}
}


/**
 * Задание 7
 * Реализуйте функцию конструктор MyString, объект которого будет иметь следующие методы: метод reverse(),
 * который параметром принимает строку, а возвращает ее в перевернутом виде,
 * метод ucFirst(),
 * который параметром принимает строку, а возвращает эту же строку, сделав ее первую букву заглавной
 * и метод ucWords,
 * который принимает строку и делает заглавной первую букву каждого слова этой строки.
 */

function MyString() {
	this.reverse = function(str) {
		return str.split('').reverse().join('');
	}

	this.ucFirst = function(str) {
		return str.charAt(0).toUpperCase() + str.slice(1);
	}

	this.ucWords = function(str) {
		let splitStr = str.toLowerCase().split(' ');
		for(let i = 0; i < splitStr.length; i++) {
			splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
		}
		return splitStr.join(' ');
	}
}


/**
 * Задание 8
 * Сделать задание 7 с использованием классов.
 */

class MyStringTwo {
	reverse = function(str) {
		return str.split('').reverse().join('');
	}

	ucFirst = function(str) {
		return str.charAt(0).toUpperCase() + str.slice(1);
	}

	ucWords = function(str) {
		let splitStr = str.toLowerCase().split(' ');
		for(let i = 0; i < splitStr.length; i++) {
			splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
		}
		return splitStr.join(' ');
	}
}


/**
 * Задание 9
 * Реализуйте класс User, который будет иметь следующие свойства: имя, фамилия, email; следующие методы:
 * getFullName, getEmail.
 */

class User {
	constructor(firstName, lastName, email) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
	}
		getFullName() {
			return this.firstName + ' ' + this.lastName;
		}

		getEmail() {
			return this.email;
		}
}
let user = new User('Pavel', 'Liashkevich', 'paul8paul8@mail.ru')
console.log(user);


/**
 * Задание 10
 * Реализуйте класс Student, который будет наследовать класс User.
 * Этот класс должен иметь следующие свойства: name (имя, наследуется от User), surname (фамилия, наследуется от User),
 * year (год поступления в вуз). Класс должен иметь метод getFullName() (наследуется от User),
 * с помощью которого можно вывести одновременно имя и фамилию студента. Также класс должен иметь метод getCourse(),
 * который будет выводить текущий курс студента (от 1 до 5). Курс вычисляется так: нужно от текущего года отнять год
 * поступления в вуз. Текущий год получить программно, используя объект Date (https://learn.javascript.ru/datetime).
 */

class Student extends User {
	constructor(firstName, lastName, email, year) {
		super(firstName, lastName, email);
		this.year = year;
	}

	getFullName() {
		return this.firstName + '' + this.lastName;
	}

	getCourse() {
		const yearNow = new Date().getFullYear();
		return yearNow - this.year;
	}
}
