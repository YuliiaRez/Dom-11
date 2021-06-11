'use strict';
/*1) По нажатию на кнопку изменить текст самой кнопки (см. innerTe*/
const btn = document.createElement('button');
const body =  document.body;
body.appendChild(btn);
btn.textContent = 'click me';
function changeText(e){
    btn.innerText = 'stop';
}
btn.addEventListener('click', changeText);
/*2) Отобразить картинку. Сделать так, что бы при появлении страницы отображалсь одна картинка, а при наведении мышью на неё отображалась другая.*/
const img1 = document.createElement('img');
body.appendChild(img1);
img1.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUsQhOX6iEuHyA7Jf8Qw12aytTm_3zeu5AFg&usqp=CAU'
function changeImage(e){
    img1.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDFG6cBHXD41Lchl_tK07B46MecDBdIQjVYw&usqp=CAU';
}
img1.addEventListener('mouseover', changeImage ) ;

/*3) Сгенерировать заданную структуру:
<h1>Header1</h1>
<article>
<h2>Header2</h2>
<div><img src="" alt=""></div>
<p>It is paragraph</p>
</article>
(привязать <div id="root"></div>)*/
const elemHTML = `
<h1>Header1</h1>
<article>
<h2>Header2</h2>
<div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvtGJNN0BZQsGm9HTvuyUpaFrRpFJnjW6bAw&usqp=CAU" alt=""></div>
<p>It is paragraph</p>
</article>`
body.insertAdjacentHTML('beforebegin', elemHTML)
const div = document.querySelector('div');
div.classList.add('root');
console.log(div);


/**Another way */
const article1 = document.createElement('divarticle');
body.appendChild(article1);
const h1 = document.createElement('h1');
h1.textContent = 'Header1';
article1.insertAdjacentElement('beforebegin', h1);
const h2 = document.createElement('h2');
h2.textContent = 'Header2';
article1.insertAdjacentElement('afterBegin', h2);
const div2 = document.createElement('div');
div2.classList.add('root1');
article1.appendChild = div2;
const img3 = document.createElement('img');
img3.src = 'https://https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcbAFWaZw2Gm5aY2g6nXEZiDldGYVt0AGCfw&usqp=CAU-tbn0.gstatic.com/images?q=tbn:ANd9GcSvtGJNN0BZQsGm9HTvuyUpaFrRpFJnjW6bAw&usqp=CAU';
div2.appendChild(img3);
const p = document.createElement('p');
p.textContent = 'It is paragraph';
article1.insertAdjacentElement('beforeEnd', p);
