let array = []
let i = 1

alert('После этого окошка вылезут другие, куда нужно будет ввести целые числа.')

while (i != 6) {
	let element = prompt(i + '-е число из 5')
	if (element.replace(/\s/g, '').length === 0 || isNaN(element)) {
  		alert('Нужно писать число!')
	} else {
  		i++
		array.push(element)
	}
		
}

console.log('Есть массив array [' + array + ']')

let even = array.filter(evenNum => {
	if (evenNum % 2 == 0) {
		return true
	}
})

let odd = array.filter(oddNum => {
	if (oddNum % 2 !== 0) {
		return true
	}
})

let nullNum = array.filter(nullNumArr => {
	if (nullNumArr == 'null') {
		return true
	}
})
console.log(`В массиве из ${i-1}, чисел ${even.length} четных числа и ${odd.length} нечетных числа.`)

// Мне нравится ваш подход, задание засчитала :) но по условию имелся в виду уже заданный массив (необязательно использовать prompt), плюс нужно было посчитать количество нулей (имелось в виду число 0, а не значение null). Ваш способ подсчёта рабочий, поэтому задание считаю выполненным, но можно было сделать проще:

const arr = [0, null, NaN, 0, 1, 2, 4, "str"];

let even = 0, odd = 0, zero = 0;

	for (let i = 0; i < arr.length; i++) {
		if (typeof arr[i] === 'number' && !isNaN(arr[i])) {
			if (arr[i] === 0) {
				zero += 1;
			} else if (arr[i] % 2 === 0) {
				even += 1;
			} else {
				odd += 1;
			}
		}
	}

console.log('Четных элементов: ', even);
console.log('Нечетных элементов: ', odd);
console.log('Нулей: ', zero);
