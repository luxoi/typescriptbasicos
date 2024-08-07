export class Person{
    public name: string;
    public lastname: string;
    private address?: string = 'no tiene';

    constructor(name: string, address: string, lastname: string){
        this.name = name;
        this.lastname = lastname;
        this.address = address;
    }
}


// export class Hero extends Person{
//     constructor(
//         public alterEgo: string,
//         public age: number,
//         public realName: string,
//     ){
//         super(realName, 'New');
//     }
// }


export class Hero{

    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string,
        public person: Person,
    ){
      
    }
}


const tony= new Person('Tony','stark', 'New york');

const ironman = new Hero('ironman', 45, 'Tony', tony);
console.log(ironman)