let myMap = new Map()

myMap.set(42, 'СорДва')
myMap.set(15, 'СД')
myMap.set(true, false)
myMap.set('Hello', 'world')
myMap.set('object', {})

//разбиваю на отдельные массивы наш массив myMap
let keysArray = [...myMap.keys()]
let valuesArray = [...myMap.values()]

/*Создаю массивы ниже, чтобы соединить все данные
в одну строку, как просит задание*/
let finalArrayK = []
let finalArrayV = []

//Добавляю слово "Ключ" и "значение"
keysArray.forEach(kElement =>  finalArrayK.push(`Ключ - ${kElement},`))
valuesArray.forEach(vElement =>  finalArrayV.push(` значение - ${vElement}.`))

function sumOfElements (finalArrayK, finalArrayV) {
	let i =0, result = []
	while (i < finalArrayV.length) {
		result.push(finalArrayK[i] + finalArrayV[i])
		i++
	}
	return result
}

let result = sumOfElements(finalArrayK, finalArrayV)

for (let Result of result) {
console.log(Result)
}
/*А расскажите, как можно это было сделать легче? 
Пришлите, пожалуйста в Slak информацию
contacts: Chich710, denis27200@gmail.com*/


/*****/

// Чтобы вывести ключи и значения массива, вам достаточно пройтись по ключам Map'а, потому что по ключу вы всегда можете получить и значение, и просто вывести ключ и значение с помощью шаблонной строки:

let keys = myMap.keys();

for (let key of keys) {
  console.log(`Ключ - ${key}, значение - ${myMap.get(key)}`);
}