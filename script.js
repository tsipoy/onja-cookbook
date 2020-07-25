// Grab elements
const divWrapper = document.querySelector('.cook-book');
const form = document.querySelector('form');
const name = document.querySelector('.recipe-name');
const nameInput = document.querySelector('#name');
const photoUrl = document.querySelector('.food-picture');
const url = document.querySelector('.foo-picture');
const UrlInput = document.querySelector('#url');
const chef = document.querySelector('.recipe-chef');
const chefInput = document.querySelector('#chef');
const steps = document.querySelector('.new-steps');
const ingredients = document.querySelector('.new-ingredient');
const ingredientsInput = document.querySelector('#ingredients-input');
const stepsInput = document.querySelector('#steps-input');
const ingredientsBtn = document.querySelector('.ingredients-button');
const stepsBtn = document.querySelector('.steps-button');


const ingredientsList = () => {
    const myIngredients = `
    <div class="new-ingredients">
        <div class="inner-ingredients">
            <span class="set-ingredients">${ingredientsInput.value}</span>
        </div>
    </div>
    `;
    ingredients.insertAdjacentHTML('afterbegin', myIngredients);
};

const stepsList = () => { 
    const mySteps = `
    <div class="new-steps">
        <div class="inner-steps">
            <span class="set-steps">${stepsInput.value}</span>
        </div>
    </div>
    `;
    steps.insertAdjacentHTML('afterbegin', mySteps);
};

ingredientsBtn.addEventListener('click', ingredientsList);
stepsBtn.addEventListener('click', stepsList);
