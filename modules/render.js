import { buttons, btnCustom } from "./dom.js";

export class Render{
    appButtonsActive(e){
        e.preventDefault();
        const button = e.target.tagName;
        
        if( button === "BUTTON" || button === "INPUT"){
    
            for(let child of buttons.children){
                child.classList.remove("app__button--active");
            }
            e.target.classList.add("app__button--active");

            btnCustom.classList.remove("app__button--active");
            btnCustom.value = "";           
        }

        if( btnCustom.tagName === "INPUT"){
            btnCustom.classList.toggle("app__button--active");
        }
    }

    showAdvice(value){
        const elementHTML = document.querySelector(`.app__legend--advise-${value}`);
        elementHTML.style.display = "unset";
    }

    hideAdvice(value){
        const elementHTML = document.querySelector(`.app__legend--advise-${value}`);
        elementHTML.style.display = "none";
    }
}

