let inputField = document.getElementById('text-field')
let wordLengthElement = document.getElementById('wordleng')
let wordElements = document.getElementById('words')
inputField.focus()

let letters = 0
let words = 0

wordLengthElement.textContent = letters
wordElements.textContent = words

inputField.addEventListener('keyup', function () {
    words = inputField.value.split(/\w+/)
    characters = inputField.value

    wordLengthElement.textContent = characters.length
    wordElements.textContent = words.length - 1
})