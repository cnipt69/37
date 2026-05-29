// const genderButtons = document.querySelectorAll('#gender .calculating__choose-item');
// const activityButtons = document.querySelectorAll('.calculating__choose_big .calculating__choose-item');

// const heightInput = document.getElementById('height');
// const weightInput = document.getElementById('weight');
// const ageInput = document.getElementById('age');
// const result = document.querySelector('.calculating__result span');

// let selectedGender = 'female';
// let selectedActivity = 1.375;


// genderButtons.forEach(button => {
//     button.addEventListener('click', () => {
//         genderButtons.forEach(btn => btn.classList.remove('calculating__choose-item_active'));
//         button.classList.add('calculating__choose-item_active');

//         if (button.textContent === 'Женщина') {
//             selectedGender = 'female';
//         } else {
//             selectedGender = 'male';
//         }

//         calculateCalories();
//     });
// });


// activityButtons.forEach(button => {
//     button.addEventListener('click', () => {

//         activityButtons.forEach(btn => btn.classList.remove('calculating__choose-item_active'));
//         button.classList.add('calculating__choose-item_active');

//         selectedActivity = Number(button.dataset.activity);

//         calculateCalories();
//     });
// });


// function calculateCalories() {
//     const height = Number(heightInput.value);
//     const weight = Number(weightInput.value);
//     const age = Number(ageInput.value);

//     if (!height || !weight || !age) {
//         result.textContent = '0';
//         return;
//     }

//     let calories;

//     if (selectedGender === 'female') {
//         calories = 655.1 + (9.563 * weight) + (1.85 * height) - (4.676 * age);
//     } else {
//         calories = 66.5 + (13.75 * weight) + (5.003 * height) - (6.775 * age);
//     }

//     calories = calories * selectedActivity;

//     result.textContent = Math.round(calories);
// }

// calculateCalories();

// heightInput.addEventListener('input', calculateCalories);
// weightInput.addEventListener('input', calculateCalories);
// ageInput.addEventListener('input', calculateCalories);


const modal = document.querySelector('.modal');
const openButtons = document.querySelectorAll('[data-modal]')
const closeButton = document.querySelector('[data-close]');

openButtons.forEach(button => {
    button.onclick = () => {
        modal.classList.add('show');
        modal.classList.remove('hide');
    };
});

closeButton.onclick = () => {
    modal.classList.add('hide');
    modal.classList.remove('show');
};

const orderForm = document.querySelector('.order__form');
const modalForm = document.querySelector('.modal form');

let freeDayData = {};
let callbackData = {};


orderForm.onsubmit = (event) => {
    event.preventDefault();

    let data = new FormData(orderForm);

    for (const [key, value] of data) {
        freeDayData[key] = value;
    }

    console.log(freeDayData);
};


modalForm.onsubmit = (event) => {
    event.preventDefault();

    let data = new FormData(modalForm);

    for (const [key, value] of data) {
        callbackData[key] = value;
    }

    console.log(callbackData);
};