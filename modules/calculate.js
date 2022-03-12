
export class Calculate{
    constructor(){
        this.billValue = 0;
        this.tipValue = 0;
        this.customTipValue = 0;
        this.numberPeopleValue = 0;
    }

    static calculator(){
        import("./render.js").then(({Render})=>{
            const tipAmountPerson = document.querySelector(".app__tip-amount-person");
            const tipAmountTotal= document.querySelector(".app__tip-amount-total");
            
            const { displayAdvice } = new Render();

            Calculate.numberPeople <= 0 ? displayAdvice("people", "show") : displayAdvice("people", "hide"); 
            
            let x, y, z = 0;

            if(Calculate.numberPeople > 0 && Calculate.bill > 0)  {
                x = Calculate.bill / Calculate.numberPeople;
                y = x * Calculate.tip || x * Calculate.customTip;
                z = x + y;
            }
                tipAmountPerson.innerHTML = Calculate.formatValue(y);
                tipAmountTotal.innerHTML = Calculate.formatValue(z);
            });
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
    getBill(e){
        e.preventDefault();
        console.log(this.value);
        Calculate.bill = Number(this.value);
        Calculate.customTip = 0;
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
        import("./render.js").then(({Render})=>{
            Render.appButtonsActive(e);

            const buttons = e.target.tagName;

            if(buttons === "BUTTON"){
                Calculate.tip = Number(e.target.dataset.percent);
                Calculate.customTip = 0;
                Calculate.calculator();
            }
        });
        
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
    getNumberOfPeople(e){
        e.preventDefault();
        
        Calculate.numberPeople = Number(this.value);
        Calculate.calculator();
    }
}