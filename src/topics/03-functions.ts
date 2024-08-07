
function addNumbers(a: number, b: number){
    return a+b;
}

const addNumbersArrow = (a: number, b: number):string=>{
    return `${ a + b }`;
};

function multiplyNumber(firstNumber: number, secondNumber?: number, base:number = 2){
    return firstNumber * base;
}



//const result:number = addNumbers(2, 2);
//const result2: string = addNumbersArrow(2, 2);
//const multiply: number = multiplyNumber(5);

//console.log({result, result2, multiply});
interface Character{
    name: string;
    hp: number;
    showHp: () => void;
}



const healCharacter = ( character: Character, amount:number)=>{
    
    character.hp += amount;

}

const strider: Character = {
    name: 'Strider',
    hp: 50,
    showHp() {
        console.log(`Puntos de vida ${this.hp}`);
    }
}

healCharacter(strider, 10);

strider.showHp;

export{};