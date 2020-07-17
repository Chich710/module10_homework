let val = prompt('Поле для ввода')

val++
val--

if (isNaN(val) == true){
	alert('Это строка')
} else if (val % 2 !== 0) {
	alert('Это число нечётное')
} else alert('Это число чётное')