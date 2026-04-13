const date = new Date();
const day = date.getDate()
const month = date.getMonth() + 1
const year = date.getFullYear()
const currentDate = document.querySelector('.currentDate')
currentDate.innerHTML = `Bem-vindo(a) ao mundo de Hollow Faith! Hoje é <strong>${day}/${month}/${year}</strong> e uma nova aventura começa agora.`