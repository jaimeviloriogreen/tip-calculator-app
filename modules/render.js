import { buttons, btnCustom, billInput, numberPeopleInput } from "./dom.js";

export class Render{

    static removeAllActiveStyle(buttons){
        for(let child of buttons.children){
            child.classList.remove("app__button--active");
        }
    }
    static appButtonsActive(e){
        e.preventDefault();
        const button = e.target.tagName;
        if( button === "BUTTON" || button === "INPUT"){
            
            Render.removeAllActiveStyle(buttons);

            e.target.classList.add("app__button--active");
            btnCustom.value = "";
        }
        
    }

    displayAdvice(value, display){
        const elementHTML = document.querySelector(`.app__legend--advise-${value}`);
        if(display === "show") elementHTML.style.display = "unset";
        if(display === "hide") elementHTML.style.display = "none";
    }
    
    resetApp(e){
        e.preventDefault();

        import("./calculate.js").then(({ Calculate })=>{
            Calculate.bill = 0;
            Calculate.tip = 0;
            Calculate.customTip = 0;
            Calculate.numberPeople = 0;
            
            Render.removeAllActiveStyle(buttons);

            billInput.value = "";    
            btnCustom.value = "";
            numberPeopleInput.value = "";

            Calculate.calculator(false);
        });
    }
}

