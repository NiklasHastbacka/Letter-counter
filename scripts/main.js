let inputField = document.getElementById('text-field')
let wordLengthElement = document.getElementById('wordleng')

inputField.addEventListener('keyup', function(){
    let letters = inputField.value
    wordLengthElement.textContent = letters.length
})