const randomNumber = Math.floor(Math.random() * 9)
const button = document.querySelector('button')
const screen01 = document.querySelector('.screen01')
const screen02 = document.querySelector('.screen02')

let frase = randomPhrase = [
  "Aceite que seu corpo precisa de descanso para recuperar energias! Não se exija em excesso.",
  "O senhor é meu pastor e nada faltara",
  "Não se importe tanto com a opinião dos outros. Se você quer muito algo, siga seu coração e junte forças para consegui-lo!",
  "E se não for para rir dos nossos erros, qual é a graça da vida?",
  "Faça hoje o que vai te dar orgulho amanhã.",
  "Será que você está desmotivado? Ou será que está apenas gastando energias no lugar errado?",
  "Ei, você: estamos distantes fisicamente, mas estou torcendo com todas as minhas forças por você.",
  "Deus está protegendo o seu caminho.",
  "Um dia você ainda vai olhar para trás e pensar: nossa, consegui tudo aquilo que parecia impossível!",
  "A nossa mente também precisa ser tratada com carinho e cuidado. Dê mais atenção ao que seu corpo pede. É com ele que você vai enfrentar suas batalhas."
]

button.addEventListener('click', toggleScreen)
document.querySelector('#suaSorte').innerHTML = frase[randomNumber]

function toggleScreen () {
  screen01.classList.toggle('hide')
  screen02.classList.toggle('hide')
}

function handleClick (event) {
  event.preventDefault()
  
}























// let fraseDaSorte 

// let frase = randomPhrase = [
//    "Aceite que seu corpo precisa de descanso para recuperar energias! Não se exija em excesso.",
//    "O senhor é meu pastor e nada faltara",
//    "Não se importe tanto com a opinião dos outros. Se você quer muito algo, siga seu coração e junte forças para consegui-lo!",
//    "E se não for para rir dos nossos erros, qual é a graça da vida?",
//    "Faça hoje o que vai te dar orgulho amanhã.",
//    "Será que você está desmotivado? Ou será que está apenas gastando energias no lugar errado?",
//    "Ei, você: estamos distantes fisicamente, mas estou torcendo com todas as minhas forças por você.",
//    "Deus está protegendo o seu caminho.",
//    "Um dia você ainda vai olhar para trás e pensar: nossa, consegui tudo aquilo que parecia impossível!"
// ]


// let fraseDaSorte = frase[randomNumber]

// console.log(fraseDaSorte)
