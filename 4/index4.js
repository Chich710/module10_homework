function randomInt(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

alert(randomInt(0, 101))

// Не совсем верно, т.к. код выше будет возвращать рандомные числа в диапазоне от 0 до 99 (100 включено не будет). Выше исправила на верный вариант