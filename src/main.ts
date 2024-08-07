import './style.css'
//import './topics/01-basic-type.ts'
//import './topics/02-object-interface.ts'
//import './topics/03-functions.ts'
//import './topics/04-homework-types.ts'
//import './topics/05-basic-destructuring.ts'
//import './topics/06-function-destructuring.ts'
//import './topics/07-imports-exports.ts'
// import './topics/08-classes.ts'
// import './topics/09-generics.ts'
// import './topics/10-decorators.ts'
import './topics/11-optionals-chaining.ts'
import { setupCounter } from './counter.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `Jhoñaa `;

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
