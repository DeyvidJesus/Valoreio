const botao = document.getElementById('botao-mobile')
const menu = document.getElementById('header-nav')

botao.addEventListener('click', function(){
    menu.classList.toggle('active')
    botao.classList.toggle('active')
})