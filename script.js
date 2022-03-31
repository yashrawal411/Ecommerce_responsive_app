
let bar = document.getElementById('bar');
let nav = document.getElementById('nav');
let mobile = document.getElementById('mobile');
let close1 = document.getElementById('close')

if (bar) {
    bar.addEventListener('click', () => {

        nav.style.right = '0px';
    })
}

if (close1)
{ close1.addEventListener('click', () => {

    nav.style.right = '-300px';
        console.log(mobile)
})}