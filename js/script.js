{
    const welcome = () => {
        console.log("Cześć, miło mi powitać Cię na moejej stronie. Życzę powodzenia w kursie! :)");
    }

    const changeBackgroundButton = document.querySelector(".js-changeBackgroundButton");
    const removeBodyButton = document.querySelector(".js-removeBodyButton");
    const showDescriptionButton = document.querySelector(".js-showDescriptionButton");
    const body = document.querySelector("body");

    const onChangeBackgroundClick = () => {
        body.classList.toggle("body__secondBackground");
        changeBackgroundButton.innerText = body.classList.contains("body__secondBackground") ? "Zmień tło na ciemniejsze" : "Zmień tło na jaśniejsze";
    };

    const onToggleDescriptionClick = () => {
        const hiddenParagraph = document.querySelector(".js-hiddenParagraph");
        hiddenParagraph.classList.toggle("paragraph__hidden");
        showDescriptionButton.innerText = hiddenParagraph.classList.contains("paragraph__hidden") ? "Pokaż opis" : "Ukryj opis";
    };

    const onRemoveBodyClick = () => {
        body.remove();
    };

    const init = () => {
        changeBackgroundButton.addEventListener("click", onChangeBackgroundClick);
        showDescriptionButton.addEventListener("click", onToggleDescriptionClick);
        removeBodyButton.addEventListener("click", onRemoveBodyClick);

        welcome();
    }

    init();
}