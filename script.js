const imagens = ["foto1.jpeg", "foto2.jpeg", "foto3.jpeg"];

let index = 0;
const slide = document.getElementById("slide");

setInterval(() => {
  index = (index + 1) % imagens.length;
  slide.src = imagens[index];
}, 3000);

const dataInicio = new Date("2022-06-12T15:30:00").getTime();

setInterval(() => {
  const agora = new Date().getTime();
  const diferenca = agora - dataInicio;

  const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferenca / (1000 * 60 * 60)) % 24);
  const minutos = Math.floor((diferenca / (1000 * 60)) % 60);
  const segundos = Math.floor((diferenca / 1000) % 60);

  document.getElementById(
    "contador"
  ).innerHTML = `${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos ❤️`;
}, 1000);
