const tabs = document.querySelectorAll('.tabcontent');
const items = document.querySelectorAll('.tabheader__item');

function resetTabs() {
    tabs.forEach(tab => tab.style.display = 'none');
    items.forEach(item => item.classList.remove('tabheader__item_active'));
}

resetTabs();
tabs[0].style.display = 'block';
items[0].classList.add('tabheader__item_active');

items[0].onclick = function() {
    resetTabs();
    tabs[0].style.display = 'block';
    items[0].classList.add('tabheader__item_active');
};

items[1].onclick = function() {
    resetTabs();
    tabs[1].style.display = 'block';
    items[1].classList.add('tabheader__item_active');
};

items[2].onclick = function() {
    resetTabs();
    tabs[2].style.display = 'block';
    items[2].classList.add('tabheader__item_active');
};

items[3].onclick = function() {
    resetTabs();
    tabs[3].style.display = 'block';
    items[3].classList.add('tabheader__item_active');
};