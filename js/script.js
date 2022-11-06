let menu = document.querySelector('.menu');
let btnMenu = document.querySelector('.btn-menu');
let btnClose = document.querySelector('.btn-close');
let shadow = document.querySelector('.shadow');


btnMenu.addEventListener('click', () =>  {
    menu.classList.add('active'); 
    shadow.classList.add('active'); 
    btnClose.addEventListener('click', () =>  {
        menu.classList.remove('active'); 
        shadow.classList.remove('active'); 
    })
})

let listTeam = document.querySelectorAll('.list-team');
let list1 = document.querySelector('.list-1');
let list2 = document.querySelector('.list-2');
let btnDown = document.querySelectorAll('.btn-down');


listTeam[0].addEventListener('click', ()=> {
    list1.classList.toggle('active');
    // if (list2.classList.contains('active'))
    // {
    //     list2.classList.remove('active');
    //     btnDown[1].src = 'images/icon-arrow-down.svg';
    // }
    if (list1.classList.contains('active'))
    {
        btnDown[0].src = 'images/icon-arrow-up.svg';
    }
    else
    {
        btnDown[0].src = 'images/icon-arrow-down.svg';
    }
})
listTeam[1].addEventListener('click', ()=> {
    list2.classList.toggle('active');
    // if (list1.classList.contains('active'))
    // {
    //     list1.classList.remove('active');
    //     btnDown[0].src = 'images/icon-arrow-down.svg';
    // }
    if (list2.classList.contains('active'))
    {
        btnDown[1].src = 'images/icon-arrow-up.svg';
    }
    else
    {
        btnDown[1].src = 'images/icon-arrow-down.svg';
    }
})