const date = new Date();
const day = date.getDate();
const month = date.getMonth() + 1;
const year = date.getFullYear();
const currentDate = document.querySelector('.currentDate');
if (currentDate) {
    currentDate.innerHTML = `Novas atividades estão disponíveis no universo de Hollow Faith. Hoje é <strong>${day}/${month}/${year}</strong>.`;
}