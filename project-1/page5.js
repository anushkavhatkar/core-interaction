


const textDisplay = document.getElementById('typed')
const phrases = [  
    
    "He opened the gate and spoke slowly in my language.",

    "\"I see that the worthy Hsi P\'eng has troubled himself to see to relieving my solitude. No doubt you want to see the garden?\"",

    "Recognizing the name of one of our consuls, I replied, somewhat taken aback.",

    "\"The garden?\"", 

    "\"The garden of forking paths.\"",

    "Something stirred in my memory and I said, with incomprehensible assurance:",

    "\"The garden of my ancestor, Ts\'ui Pen.\"",

    "\"Your ancestor? Your illustrious ancestor? Come in.\"",

    "The damp path zigzagged like those of my childhood. When we reached the house, we went into a library filled with books from both East and West. I recognized some large volumes bound in yellow silk-manuscripts of the Lost Encyclopedia which was edited by the Third Emperor of the Luminous Dynasty. They had never been printed. A phonograph record was spinning near a bronze phoenix. I remember also a rose-glazed jar and yet another, older by many centuries, of that blue color which our potters copied from the Persians...",

    "Stephen Albert was watching me with a smile on his face. He was, as I have said, remarkably tall. His face was deeply lined and he had gray eyes and a gray beard. There was about him something of the priest, and something of the sailor. Later, he told me he had been a missionary in Tientsin before he \"had aspired to become a Sinologist.\""

];

let i = 0
let j = 0 
let currentPhrase = []
let isDeleting = false
let isEnd = false

function loop () {



  isEnd = false
  textDisplay.innerHTML = currentPhrase.join('')

  if (i < phrases.length) {

    if (!isDeleting && j <= phrases[i].length) {
      currentPhrase.push(phrases[i][j])
      j++
      textDisplay.innerHTML = currentPhrase.join('')
    }

    if(isDeleting && j <= phrases[i].length) {
      currentPhrase.pop(phrases[i][j])
      j--
      textDisplay.innerHTML = currentPhrase.join('')
    }

    if (j == phrases[i].length) {
      isEnd = true
      isDeleting = true
    }

    if (isDeleting && j === 0) {
      currentPhrase = []
      isDeleting = false
      i++
      if (i === phrases.length) {
        i = 0
      }
    }
  }
  const spedUp = Math.random() * (80 -50) + 50
  const normalSpeed = Math.random() * (300 -200) + 200
  const time = isEnd ? 2000 : isDeleting ? spedUp : normalSpeed
  setTimeout(loop, 100)
}

loop() 
/////

