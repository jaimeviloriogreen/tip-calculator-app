import { buttons, btnCustom, billInput, numberPeopleInput } from "./modules/dom.js";
import { Render } from "./modules/render.js";
import { Calculate } from "./modules/calculate.js";

main();

function main(){
    // Instances
    const {appButtonsActive, clearCustomBtn} = new Render();
    const {getBill, getTip, getCustomTip, getNumberOfPeople} = new Calculate();
    
    // Events
    buttons.addEventListener("click", appButtonsActive);
    billInput.addEventListener("keyup", getBill);
    
    buttons.addEventListener("click", getTip);
    btnCustom.addEventListener("keyup", getCustomTip);
    numberPeopleInput.addEventListener("keyup", getNumberOfPeople);
    
}