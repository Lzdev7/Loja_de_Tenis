let btn_teste = document.querySelector('.carretel-tenis');
let img = document.querySelector('.img-exibida');
let carretel1 = document.querySelector('.card-img-1');
let carretel2 = document.querySelector('.card-img-2');
let carretel3 = document.querySelector('.card-img-3');
let carretel4 = document.querySelector('.card-img-4');
let imagens = document.querySelector('.img-exibida')
let divOculta = document.querySelector('.tenis-oculto');


btn_teste.addEventListener('click', () => {
    let div = document.querySelector('.tenis-oculto');
    let sec = document.querySelector('section');
    let secao = document.querySelector('section');

    div.style.display = 'flex';
    div.style.marginTop = '-800px';
    div.style.gap = '50px'
    div.focus();
    secao.style.position = 'relative';
    div.style.position = 'absolute';
    sec.style.opacity = '0.2';
});

let secao = document.querySelector('section');
console.log(secao);









/* ADICIONANDO EVENTO NO CARROSEL OCULTO */
const slider = document.querySelectorAll('.slider');
const btnPrev = document.getElementById('prev-button');
const btnNext = document.getElementById('next-button');

let currentSlide = 0;

function hideSlider() {
    slider.forEach(item => item.classList.remove('on'))
}

function showSlider() {
    slider[currentSlide].classList.add('on')
}

function nextSlider() {
    hideSlider()
    if (currentSlide === slider.length - 1) {
        currentSlide = 0
    } else {
        currentSlide++
    }
    showSlider()
}

function prevSlider() {
    hideSlider()
    if (currentSlide === 0) {
        currentSlide = slider.length - 1
    } else {
        currentSlide--
    }
    showSlider()
}

btnNext.addEventListener('click', nextSlider)
btnPrev.addEventListener('click', prevSlider)









carretel1.addEventListener('click', trocarImg1);
carretel2.addEventListener('click', trocarImg2);
carretel3.addEventListener('click', trocarImg3);
carretel4.addEventListener('click', trocarImg4);


function trocarImg2() {
    document.querySelector('.slider').src = "/images/image-product-2.jpg";
}
function trocarImg1() {
    document.querySelector('.slider').src = "/images/image-product-1.jpg";
}
function trocarImg3() {
    document.querySelector('.slider').src = "/images/image-product-3.jpg";
}
function trocarImg4() {
    document.querySelector('.slider').src = "/images/image-product-4.jpg";

}

let fecharDiv = document.querySelector('.fechar-div-btn');
fecharDiv.addEventListener('click', ()=>{

    let divOculta = document.querySelector('.tenis-oculto');
    divOculta.style.display = "none";



});




let adCart = document.querySelector('.add-cart');
let quantidade = 1;
let reCart = document.querySelector('.remover-cart');
let preco = 0;


reCart.addEventListener('click', () => {
    if (quantidade > 1) {
        quantidade--;
        let cartt = document.querySelector('.qtd-cart');
        let teste = document.querySelector('.teste');

        cartt.innerHTML = quantidade;

    } 

});

adCart.addEventListener('click', () => {

    quantidade++;
    let cartt = document.querySelector('.qtd-cart');

    cartt.innerHTML = quantidade;

});

let carrinho = document.querySelector('.add-btn');
carrinho.addEventListener('click', ()=>{
    let qtdCarrinho = document.querySelector('.quantide');
    let qtdpreco = document.querySelector('.valor-Final');
    let cartOcult = document.querySelector('.dentroCart');
    let qtdTenis = document.querySelector('.qtd-tenis');
    let textoCart = document.querySelector('.tx-cart');




    cartOcult.style.display = "flex";
    qtdCarrinho.innerHTML = `x ${quantidade}`;
    preco = 125 * quantidade;
    qtdpreco.innerHTML =  `R$ ${preco}`;
    qtdTenis.style.opacity = "1";
    textoCart.style.opacity = "0";
    qtdTenis.innerHTML = quantidade;
    console.log(preco);
});

//SECAO DO CARRINHO //

let qtdCarrinho = document.querySelector('.quantide');

console.log(qtdCarrinho);