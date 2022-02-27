import { buttons } from "./modules/dom.js";
import { Rendex } from "./modules/rendex.js";
main();

function main(){
    // Instances
    const {appButtonsActive} = new Rendex();
    

    // Events
    buttons.addEventListener("click", appButtonsActive);
}