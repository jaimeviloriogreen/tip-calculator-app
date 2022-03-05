import { buttons, btnCustom } from "./modules/dom.js";
import { Rendex } from "./modules/rendex.js";

main();

function main(){
    // Instances
    const {appButtonsActive, clearCustomBtn} = new Rendex();
    
    // Events
    buttons.addEventListener("click", appButtonsActive);
    btnCustom.addEventListener("blur", clearCustomBtn);
}