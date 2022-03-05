import { buttons, btnCustom } from "./modules/dom.js";
import { Render } from "./modules/render.js";

main();

function main(){
    // Instances
    const {appButtonsActive, clearCustomBtn} = new Render();
    
    // Events
    buttons.addEventListener("click", appButtonsActive);
    btnCustom.addEventListener("blur", clearCustomBtn);
}