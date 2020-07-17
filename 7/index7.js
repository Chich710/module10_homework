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
