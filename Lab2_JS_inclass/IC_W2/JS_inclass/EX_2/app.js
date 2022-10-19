const $ = document.querySelector.bind(document);
const btn = $('.btn');
btn.onclick = () => {
    btn.classList.toggle('clicked')
    
    (btn.classList == 'btn clicked') ?  btn.innerText = "Click again" : btn.innerText = "Click me"
}