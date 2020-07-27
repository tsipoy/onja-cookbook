// Grab elements
// Create the html
// Create functions
// Event delegation
// Use loop
// Add event listener for the submit button
// Console the submit

// Grab elements
const formElement = document.querySelector('form');
const ingredientsBtn = document.querySelector('.ingredients-button');
const stepsBtn = document.querySelector('.steps-button');
const ingredientListElement = document.querySelector('#ingredientList');
const stepListElement = document.querySelector('#stepList');

const addIngedientInput = e => {
const number = ingredientListElement.children.length + 1;
const myIngredients = `
    <li>
        <input id="igredient${number}" type="text" name="ingedients${number}">
    </li>
    `;
    ingredientListElement.insertAdjacentHTML('beforeend', myIngredients);
};

const addStepsInput = e => { 
    const number = stepListElement.children.length + 1;
    const mySteps = `
        <li>
            <input id="step${number}" type="text" name="steps${number}">
        </li>
    `;
    stepListElement.insertAdjacentHTML('beforeend', mySteps);
};

const handleSubmit = e => {
    e.preventDefault();
    console.log('submit', e);
    const form = e.currentTarget;
    const { title, picture, author, difficulty, timing } = form;
    const ingredients = [];
    for (let i = 0; i < ingredientListElement.children.length; i++){
        ingredients.push(ingredientListElement.children[i].children[0].value)
    };
    console.log(ingredients);

    const steps = [];
    for (let i = 0; i < stepListElement.children.length; i++){
        steps.push(stepListElement.children[i].children[0].value)
    };
    console.log(steps);

    const recipes = [];
    const recipe = {
	    title: title.value,
	    picture: picture.value,
	    author: author.value,
	    difficulty: difficulty.value,
        timing: timing.value,
    };
    console.log(recipe);
    console.log(recipes);
}

ingredientsBtn.addEventListener('click', addIngedientInput);
stepsBtn.addEventListener('click', addStepsInput);
formElement.addEventListener('submit', handleSubmit);

