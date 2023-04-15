class Calculator
{
    constructor(previousoperandtextelement,currentoperandtextelement){
        this.previousoperandtextelement=previousoperandtextelement
        this.currentoperandtextelement=currentoperandtextelement
        this.clear()
    }


    clear()
    {
        this.currentoperand=''
        this.previousoperand=''
        this.operation=undefined
        
    }

    appendnumber(number)
    {
        if(number==='.' && this.currentoperand.includes('.')) return
        this.currentoperand=this.currentoperand.toString()+ number.toString()

    }

    delete()
    {

        this.currentoperand=this.currentoperand.toString().slice(0,-1)
    }

    chooseOperation(operation)
    {
        if(this.currentoperand === '')return
        if(this.previousoperand !== '')
        {
            this.compute()
        }
        this.operation=operation
        this.previousoperand=this.currentoperand
        this.currentoperand=''

    }

    compute()
    {
        let computation
        const prev=parseFloat(this.previousoperand)
        const current=parseFloat(this.currentoperand)
        if( isNaN(prev) || isNaN(current)) return
        switch(this.operation)
        {
            case '+':
                computation=prev+current
                break
            case '-':
                computation=prev-current
                break
            case '*':
                computation=prev*current
                break
            case '+':
                computation=prevcurrent
                break
            default:
                return
        }
        this.currentoperand=computation
        this.operation=undefined
        this.previousoperand=''

    }

    updateDisplay()
    {
        this.currentoperandtextelement.innerText=this.currentoperand
        this.previousoperandtextelement.innerText=this.previousoperand
        
    }
}




const numberbuttons=document.querySelectorAll('[data-number]')
const operatorbuttons=document.querySelectorAll('[data-operation]')
const equalbutton=document.querySelector('[data-equals]')
const deletebutton=document.querySelector('[data-delete]')
const clearbutton=document.querySelector('[data-all-clear]')
const previousoperandtextelement=document.querySelector('[data-previous-operand]')
const currentoperandtextelement=document.querySelector('[data-current-operand]')


const calculator=new Calculator(previousoperandtextelement,currentoperandtextelement)

numberbuttons.forEach(button => {
    button.addEventListener('click',()=>{
        calculator.appendnumber(button.innerText)
        calculator.updateDisplay()
    })
})

operatorbuttons.forEach(button => {
    button.addEventListener('click',()=>{
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()
    })
})

equalbutton.addEventListener('click',button=>{
    calculator.compute()
    calculator.updateDisplay()
})

clearbutton.addEventListener('click',button=>{
    calculator.clear()
    calculator.updateDisplay()
})

deletebutton.addEventListener('click',button=>{
    calculator.delete()
    calculator.updateDisplay()
})