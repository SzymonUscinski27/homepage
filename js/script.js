console.log("Cześć, miło mi powitać Cię na moejej stronie. Życzę powodzenia w kursie! :)");

let changeBackgroundButton = document.querySelector(".js-changeBackgroundButton");
let removeEverythingButton = document.querySelector(".js-removeEverythingButton");
let body = document.querySelector("body");

let showDescriptionButton = document.querySelector(".js-showDescriptionButton");
let hiddenParagraph = document.querySelector(".js-hiddenParagraph");


changeBackgroundButton.addEventListener("click", () => {
    body.classList.toggle("body__secondBackground");

    changeBackgroundButton.innerText = body.classList.contains("body__secondBackground") ? "Zmień tło na ciemniejsze" : "Zmień tło na jaśniejsze";
});

showDescriptionButton.addEventListener("click", () => {
    hiddenParagraph.classList.toggle("paragraph__hidden");

    showDescriptionButton.innerText = hiddenParagraph.classList.contains("paragraph__hidden") ? "Pokaż opis" : "Ukryj opis";
});

removeEverythingButton.addEventListener("click", () => {
    body.remove();
});
