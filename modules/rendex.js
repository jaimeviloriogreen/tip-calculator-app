import { buttons } from "./dom.js";

export class Rendex{
    appButtonsActive(e){
        e.preventDefault();
       
        const button = e.target.tagName;
        
        if( button === "BUTTON" || button === "INPUT"){
    
            for(let child of buttons.children){
                child.classList.remove("app__button--active");
            }
            e.target.classList.add("app__button--active");
        }
    }
}

