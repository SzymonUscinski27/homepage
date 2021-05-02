{
    console.log("Cześć, miło mi powitać Cię na moejej stronie. Życzę powodzenia w kursie! :)");

    const changeBackgroundButton = document.querySelector(".js-changeBackgroundButton");
    const removeEverythingButton = document.querySelector(".js-removeEverythingButton");
    const showDescriptionButton = document.querySelector(".js-showDescriptionButton");
    const hiddenParagraph = document.querySelector(".js-hiddenParagraph");
    const body = document.querySelector("body");

    const onToggleBackgroundClick = () => {
        body.classList.toggle("body__secondBackground");
        changeBackgroundButton.innerText = body.classList.contains("body__secondBackground") ? "Zmień tło na ciemniejsze" : "Zmień tło na jaśniejsze";
    };

    showDescriptionButton.addEventListener("click", () => {
        hiddenParagraph.classList.toggle("paragraph__hidden");
        showDescriptionButton.innerText = hiddenParagraph.classList.contains("paragraph__hidden") ? "Pokaż opis" : "Ukryj opis";
    });

    const onRemoveEverythingClick = () => {
        body.remove();
    };

    const init = () => {
        changeBackgroundButton.addEventListener("click", onToggleBackgroundClick);
        removeEverythingButton.addEventListener("click", onRemoveEverythingClick);
    }

    init();
}