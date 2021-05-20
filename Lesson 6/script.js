// Реализация одного из алгоритмов сортировки
// Quick Sort (Быстрая сортировка)

const array = [123, 32, 56, 12, 8, 230, 47, 70, 17, 9, 55, 100, 11];

function quickSort(array) {
	if (array.length < 2) {
		return array;
	}

	const index = Math.floor(Math.random() * array.length); // получаем опорный элемент из массива 
	const currentItem = array[index];

	const more = [];		// массив для значений больше опорного элемента
	const less = [];		// массив для значений меньше опорного элемента

	for (let i = 0; i < array.length; i++) {
		if (i === index) {
			continue;
		}
		if (array[i] > currentItem) {
			more.push(array[i]);	// пушим в массив с элементами больше опорного элемента
		} else {
			less.push(array[i])		// пушим в массив с элементами меньше опорного элемента
		}
	}

	return [
		...quickSort(less),
		currentItem,
		...quickSort(more),
	]
}

console.log(quickSort(array));


// функция, которая проверяет не является ли наш массив уже отсортированным массивом
function isSorted(array) {
	for (let i = 1; i < array.length; i++) {
		if (array[i] < array[i - 1]) {
			return false;
		}
	}
	return true;
}

console.log(isSorted(array));
