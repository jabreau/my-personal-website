const currentlyLearning = document.querySelector(".header");
currentlyLearning.addEventListener("mouseover", addTryingTo);
currentlyLearning.addEventListener("mouseout", removeTryingTo);

function addTryingTo() {
    currentlyLearning.textContent = "Ahem... Trying* to Learn:"
}

function removeTryingTo() {
    currentlyLearning.textContent = "Currently Learning:"
}