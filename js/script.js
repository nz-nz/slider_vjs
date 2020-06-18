'use script';

let data = [
    {
        name: 'Анатолий',
        position: 'Ген. директор всего',
        photo: './img/pers1.jpeg',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam at deleniti, doloribus excepturi explicabo iusto odio pariatur quam repellat saepe sit suscipit totam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam at deleniti, doloribus excepturi. Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, earum!',
    },
    {
        name: 'Анатолий1',
        position: 'Фин. директор всего',
        photo: './img/pers2.jpeg',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam at deleniti, doloribus excepturi explicabo iusto odio pariatur quam repellat saepe sit suscipit totam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, dolorem ea eveniet maxime porro quae quo recusandae vitae. Hic, temporibus.',
    },
    {
        name: 'Анатолий2',
        position: 'Тех. директор всего',
        photo: './img/pers3.png',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam at deleniti, doloribus excepturi explicabo iusto odio pariatur quam repellat saepe sit suscipit totam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad amet aut dolore, et in laboriosam, nostrum odio odit officia placeat quaerat reprehenderit suscipit. Incidunt iusto magni perspiciatis sed sunt!',
    },{
        name: 'Анатолий3',
        position: 'Комм. директор',
        photo: './img/pers4.jpeg',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam at deleniti, doloribus excepturi explicabo iusto odio pariatur quam repellat saepe sit suscipit totam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam assumenda dolores dolorum earum esse fugit iste laudantium magni necessitatibus neque nisi nostrum pariatur, qui rem saepe tenetur vero. Aliquid consequuntur cupiditate ipsam iure, laborum magnam neque quidem quis voluptatibus voluptatum.',
    },
];

let page = 0;

let rootElem     = document.getElementById('root');
let galContainer = document.createElement('div');
let film  = document.createElement('div');
galContainer.classList.add('galContainer');
film.classList.add('film');

data.forEach(function (elem) {

    let cardElem = document.createElement('div');
    let nameElem = document.createElement('div');
    let textElem = document.createElement('div');
    let imgNameElem = document.createElement('div');
    let hNameElem = document.createElement('h2');
    let pNameElem = document.createElement('p');
    let pTextElem1 = document.createElement('p');
    let pTextElem2 = document.createElement('p');

    cardElem.classList.add('card');
    nameElem.classList.add('name');
    textElem.classList.add('text');
    imgNameElem.classList.add('img');
    imgNameElem.style.backgroundImage = `url(${elem.photo})`;
    hNameElem.innerText = elem.name;
    pNameElem.innerText = elem.position;
    pTextElem1.innerText = elem.text;
    pTextElem2.innerText = elem.text;


    cardElem.appendChild(nameElem);
    cardElem.appendChild(textElem);
    nameElem.appendChild(imgNameElem);
    nameElem.appendChild(hNameElem);
    nameElem.appendChild(pNameElem);
    textElem.appendChild(pTextElem1);
    textElem.appendChild(pTextElem2);

    film.appendChild(cardElem);

});

let rightBtn = document.createElement('div');
let leftBtn = document.createElement('div');

rightBtn.addEventListener('click', goRight);
leftBtn.addEventListener('click', goLeft);

rightBtn.classList.add('rightBtn');
leftBtn.classList.add('leftBtn');

rightBtn.innerText = '>';
leftBtn.innerText = '<';

galContainer.appendChild(rightBtn);
galContainer.appendChild(leftBtn);

galContainer.appendChild(film);
rootElem.appendChild(galContainer);


let pointContainer = document.createElement('div');
pointContainer.classList.add('pointContainer');

data.forEach(function () {

    let point = document.createElement('div');
    point.classList.add('point');
    point.addEventListener('mouseover', function () {

        let points = [...document.querySelectorAll('.point')];
        page = points.indexOf(this);
        film.style.marginLeft = `-${page}00%`;

        removeActive(this);

        addActive(this);

        // let activeElem = points.find(value => value===this);
        // activeElem.classList.add('active');

    });
    pointContainer.appendChild(point);
});
galContainer.appendChild(pointContainer);


function resize() {
    // % не получится использовать, работаем с px
    film.style.width = data.length * galContainer.offsetWidth + 'px';
    document.querySelectorAll('.card')
        .forEach(elem=>elem.style.width = galContainer.offsetWidth + 'px');
    document.querySelectorAll('.img').forEach(elem=>{
        elem.style.width = document.querySelector('.name').offsetWidth + 'px';
        elem.style.height = document.querySelector('.name').offsetWidth + 'px';
    })
}
resize();

function goLeft() {
    if (page === 0){
        return
    }
    page--;
    removeActive();
    activatePointByPagePosition();
    film.style.marginLeft = `-${page}00%`
}

function goRight() {
    if (page === data.length-1){
        return
    }
    page++;
    removeActive();
    activatePointByPagePosition();
    film.style.marginLeft = `-${page}00%`
}

function activatePointByPagePosition() {
    let arr = [...document.querySelectorAll('.point')];
    arr[page].classList.add('active');
}

function addActive(elem) {
    elem.classList.add('active');
}

function removeActive() {
    let arr = [...document.querySelectorAll('.point')];
    arr.forEach((elem)=>{elem.classList.remove('active')});

    // let activeElem = arr.find(value => value===elem);
    // activeElem.classList.remove('active');
    // console.log(activeElem);
}

activatePointByPagePosition();
window.addEventListener('resize', resize);

// [12, 23, 33].find(elem=>elem===12);
// [12, 23, 33].filter(elem=>);