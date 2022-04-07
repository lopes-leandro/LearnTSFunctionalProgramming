// Sample 1:
function greetNamed(name: string): string {
  return `Hi! ${name}`;
}

// Sample 2:
let greetUnnamed1: (name: string) => string;

greetUnnamed1 = function(name:string): string {
    return `Hi! ${name}`;
}

// Sample 3:
let greetUnnamed2: (name: string) => string = function (name: string): string {
    return `Hi! ${name}`;
}
console.log('Programação Funcional com Typescript\n');
console.log(greetNamed('Função Nomeada'));
console.log(greetUnnamed1('Função Anônima'));
console.log(greetUnnamed2('Função Anônima'));