function reverseString(message) {
	return message.split('').reverse().join('')
}

let message = prompt('Enter the word, I\'ll reverse it')
alert(reverseString(message))