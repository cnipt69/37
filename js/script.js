document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tabcontent');
    const items = document.querySelectorAll('.tabheader__item');

    if (tabs[3]) {
        const imgInFourthTab = tabs[3].querySelector('img');
        if (imgInFourthTab) {
            imgInFourthTab.src = 'img/tabs/hamburger.jpg';
            imgInFourthTab.alt = 'hamburger';
        }
    }

    function resetTabs() {
        tabs.forEach(tab => {
            tab.style.display = 'none';
            tab.classList.remove('active');
        });
        items.forEach(item => {
            item.classList.remove('tabheader__item_active');
        });
    }

    function activateTab(index) {
        resetTabs();
        tabs[index].style.display = 'block';
        tabs[index].classList.add('active');
        items[index].classList.add('tabheader__item_active');
    }

    activateTab(0);

    items[0].addEventListener('click', () => {
        activateTab(0);
    });

    items[1].addEventListener('click', () => {
        activateTab(1);
    });

    items[2].addEventListener('click', () => {
        activateTab(2);
    });

    items[3].addEventListener('click', () => {
        activateTab(3);
    });
});