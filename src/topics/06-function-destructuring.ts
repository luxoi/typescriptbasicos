
export interface Product {
    description: string;
    price: number;

}

const phone: Product = {
    description: 'Nokia A1',
    price: 150.0
};


const tablet: Product = {
    description: 'IPad Air',
    price: 250.0
};

export interface TaxCalculationsOptions{
    tax: number;
    products: Product[];
}


export function taxCalculation(options: TaxCalculationsOptions){
    let total = 0;

    options.products.forEach(product => {
        total += product.price;
    });

    return [total, total * options.tax];
}


const shoppingCart = [phone, tablet];
const tax = 0.15;

const result = taxCalculation({
    products: shoppingCart,
    tax: tax,
})

console.log('Total', result[0]);
console.log('Total', result[1]);

