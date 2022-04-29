let maindiv= document.createElement("div");
maindiv.classList.add('calculater-grid')
let div1=document.createElement("div");
div1.classList.add("output")
let div01= document.createElement("div");
div01.setAttribute('data-previous-operand',"")
let div02= document.createElement("div");
div02.setAttribute('data-current-operand',"");
let div2=document.createElement("button");
div2.setAttribute('data-all-clear',"");
div2.classList.add("span-two",'operater-btn')
div2.innerText="AC"
let div3=document.createElement("button");
div3.setAttribute('data-delete',"");
div3.classList.add('operater-btn')
div3.innerText="DEL"
let div4=document.createElement("button");
div4.setAttribute('data-operator',"");
div4.classList.add('operater-btn')
div4.innerText="÷"
let div5=document.createElement("button");
div5.setAttribute('data-number',"");
div5.classList.add('number-btn')
div5.innerText="1"
let div6=document.createElement("button");
div6.setAttribute('data-number',"");
div6.classList.add('number-btn')
div6.innerText="2"
let div7=document.createElement("button");
div7.setAttribute('data-number',"");
div7.classList.add('number-btn')
div7.innerText="3"
let div8=document.createElement("button");
div8.setAttribute('data-operator',"");
div8.classList.add('operater-btn')
div8.innerText="*"
let div9=document.createElement("button");
div9.setAttribute('data-number',"");
div9.classList.add('number-btn')
div9.innerText="4"
let div10=document.createElement("button");
div10.setAttribute('data-number',"");
div10.classList.add('number-btn')
div10.innerText="5"
let div11=document.createElement("button");
div11.setAttribute('data-number',"");
div11.classList.add('number-btn')
div11.innerText="6"
let div12=document.createElement("button");
div12.setAttribute('data-operator',"");
div12.classList.add('operater-btn')
div12.innerText="+"
let div13=document.createElement("button");
div13.setAttribute('data-number',"");
div13.classList.add('number-btn')
div13.innerText="7"
let div14=document.createElement("button");
div14.setAttribute('data-number',"");
div14.classList.add('number-btn')
div14.innerText="8"
let div15=document.createElement("button");
div15.setAttribute('data-number',"");
div15.classList.add('number-btn')
div15.innerText="9"
let div16=document.createElement("button");
div16.setAttribute('data-operator',"");
div16.classList.add('operater-btn')
div16.innerText="-"
let div17=document.createElement("button");
div17.setAttribute('data-number',"");
div17.classList.add('number-btn')
div17.innerText="."
let div18=document.createElement("button");
div18.setAttribute('data-number',"");
div18.classList.add('number-btn')
div18.innerText="0"
let div19=document.createElement("button");
div19.setAttribute('data-equals',"");
div19.classList.add("span-two",'operater-btn')
div19.innerText="="



div1.append(div01,div02);
maindiv.append(div1,div2,div3,div4,div5,div6,div7,div8,div9,div10,div11,div12,div13,div14,div15,div16,div17,div18,div19)
document.body.append(maindiv)




























class Calculator{
    constructor(previousoperandTextelement,currentoperandTextelement){
        this.previousoperandTextelement=previousoperandTextelement;
        this.currentoperandTextelement=currentoperandTextelement;
        this.clear(); 
    }
   clear(){
       this.currentoperand='';
       this.previousoperand='';
       this.operation=undefined;
   } 
   delete(){
       this.currentoperand=this.currentoperand.toString().slice(0,-1)

   }
   appendnumber(number){
       if(number=="." && this.currentoperand.includes(".")) return
       this.currentoperand=this.currentoperand.toString()+number.toString()

   }
   chooseoperation(operation){
       if(this.currentoperand==="")return;
       this.operation=operation;
       this.previousoperand=this.currentoperand;
       this.currentoperand=""

   }
   comput(){
       let computational;
       let prev= parseFloat(this.previousoperand);
       let curr= parseFloat(this.currentoperand);
       if(isNaN(prev)||isNaN(curr))return
       switch(this.operation){
           case "+":
               computational=prev+curr;
               break
           case "-":
               computational=prev-curr;
               break
           case "*":
               computational=prev*curr;
               break
           case "÷":
               computational=prev/curr;
               break;
            default:
                return
       }
       this.currentoperand=computational;
       this.operation=undefined
       this.previousoperand=""
   }
 getdisplaynumber(number){
     const stringnumber= number.toString();
     const integerdigits=parseFloat(stringnumber.split(".")[0])
     const decimaldighit= stringnumber.split(".")[1]
     let integerdisplay
     if(isNaN(integerdigits)){
         integerdisplay=""
     }else{
         integerdisplay= integerdigits.toLocaleString('en',{maximumFractionDight:0})
     }
     if (decimaldighit !=null){
         return `${integerdisplay}.${decimaldighit}`
     }else{
         return  integerdisplay
     }

 }
   updateDisplay(){
       this.currentoperandTextelement.innerText=
       this.getdisplaynumber(this.currentoperand);
       if(this.operation !=null){
        this.previousoperandTextelement.innerText=
       ` ${this.getdisplaynumber(this.previousoperand)} ${this.operation}`

       }else{
        this.previousoperandTextelement.innerText=""
       }
       
   }
}

const numbetbutton=document.querySelectorAll('[data-number]')
const operationbutton=document.querySelectorAll('[data-operator]')
const equalsbutton=document.querySelector('[data-equals]')
const deletebutton=document.querySelector('[data-delete]')
const clearallbutton=document.querySelector('[data-all-clear]')
const previousoperandTextelement=document.querySelector('[data-previous-operand]')
const currentoperandTextelement=document.querySelector('[data-current-operand]')

let calculator=new Calculator(previousoperandTextelement,currentoperandTextelement);
numbetbutton.forEach(button=>{
    button.addEventListener("click",()=>{
        calculator.appendnumber(button.innerText);
        calculator.updateDisplay();
    })
})
operationbutton.forEach(button=>{
    button.addEventListener("click",()=>{
        calculator.chooseoperation(button.innerText);
        calculator.updateDisplay();
    })
})

equalsbutton.addEventListener("click",()=>{
    calculator.comput();
    calculator.updateDisplay();

})

clearallbutton.addEventListener("click",()=>{
    calculator.clear();
    calculator.updateDisplay();

})
deletebutton.addEventListener("click",()=>{
    calculator.delete();
    calculator.updateDisplay();

})











































