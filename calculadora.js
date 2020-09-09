

const args = process.argv.slice(2);
const numero1 = parseFloat(args[0]);
const numero2 = parseFloat(args[1]);

const plantilla= `
La suma es: ${numero1 + numero2} ;
La resta es: ${numero1 - numero2} ;
La multiplicación es: ${numero1*numero2} ;
La división es: ${numero1/numero2} 
`

console.log(plantilla);