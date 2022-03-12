import { buttons, btnCustom, billInput, numberPeopleInput, btnReset } from "./modules/dom.js";
import { Render } from "./modules/render.js";
import { Calculate } from "./modules/calculate.js";

main();

function main(){
    // Instances
    const { appButtonsActive, resetApp } = new Render();
    const { getBill, getTip, getCustomTip, getNumberOfPeople } = new Calculate();
    
    // Events
    buttons.addEventListener("click", appButtonsActive);
    buttons.addEventListener("click", getTip);

    btnCustom.addEventListener("keyup", getCustomTip);
    billInput.addEventListener("keyup", getBill);
    numberPeopleInput.addEventListener("keyup", getNumberOfPeople);

    btnReset.addEventListener("click", resetApp);
    
}