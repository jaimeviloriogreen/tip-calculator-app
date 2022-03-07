import { tipAmountPersonValue, tipAmountTotalValue } from "./dom.js";
import { Render } from "./render.js";

export class Calculate{
    constructor(){
        this.billValue = 0;
        this.tipValue = 0;
        this.customTipValue = 0;
        this.numberPeopleValue = 0;
    }

    static calculator(){

        const {showAdvice, hideAdvice} = new Render();

        if(this.numberPeople <= 0){
            showAdvice("people");
        }
        if(this.numberPeople){
            hideAdvice("people");
        }
        
        let x, y, z = 0;

        if(this.numberPeopleValue > 0 && this.billValue > 0)  {
            x = this.billValue / this.numberPeopleValue;
            y = x * this.tipValue || x * this.customTipValue;
            z = x + y;
        }
        
        tipAmountPersonValue.innerHTML = Calculate.formatValue(y);
        tipAmountTotalValue.innerHTML = Calculate.formatValue(z)

    }

    static formatValue(value = 0){
        const f = new Intl.NumberFormat(["en-US"], {
            style:"currency", 
            currency:"USD",
            currencyDisplay:"symbol",
            maximumFractionDigits:2
        });
        return f.format(value);
    }

    // ***  Bill    
    static get bill(){
        return this.billValue;
    }
    static set bill(value){
        this.billValue = value;
    }
    getBill(){
        Calculate.bill = Number(this.value);
        Calculate.calculator();
    }

    // ***  Tips    
    static get tip(){
        return this.tipValue;
    }
    static set tip(value){
        this.tipValue = value;
    }

    getTip(e){
        const buttons = e.target.tagName;
        if(buttons === "BUTTON"){
            Calculate.tip = Number(e.target.dataset.percent);
            Calculate.calculator();
            Calculate.customTip = 0;
        }
        
    }
     // ***  Custom Tips
    static get customTip(){
        return this.customTipValue;
    }
    static set customTip(value){
        this.customTipValue = value;
    }
    getCustomTip(){
        const value = Number(this.value) / 100;
        Calculate.tip = 0;
        if(value){
            Calculate.customTip = value;
            Calculate.calculator();
        }else{
            Calculate.customTip = 0;
            Calculate.calculator();

        }
    }

     // ***  Number of People
    static get numberPeople(){
        return this.numberPeopleValue;
    }
    static set numberPeople(value){
        this.numberPeopleValue = value;
    }
    getNumberOfPeople(){
        Calculate.numberPeople = Number(this.value);
        Calculate.calculator();
    }
}