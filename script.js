// ESCREVENDO STRINGS

let pessoa = prompt("Qual é o seu nome?")
let cor = prompt("Qual a sua cor preferida?")

let fraseConcatenacao = "A cor favorita de " + pessoa + " é " + cor
let fraseTemplateString = `A cor favorita de ${pessoa} é ${cor}`

console.log ("Concatenação: ", fraseConcatenacao)
console.log("Template String: ", fraseTemplateString);


// -------------------------------------------------------


// ALTERANDO A EXIBIÇÃO DE STRINGS

let citacao = prompt("Qual a sua citação favorita?")

let fraseConcatenacao1 = "A cor favorita de " + pessoa + " é " + cor + ". '" + citacao + "'"
console.log(fraseConcatenacao1)

let fraseTemplateString1 = `A cor favorita de ${pessoa} é ${cor}. "${citacao}"`
console.log(fraseTemplateString1)

console.log(`Nome: ${pessoa} \nCor favorita: ${cor}`)
console.log(`Nome: ${pessoa} 
Cor favorita: ${cor}`)


// -------------------------------------------------------


// MANIPULANDO A STRING

console.log(pessoa.toUpperCase())

console.log("Quantos caracteres tem seu nome?", pessoa.length)

console.log("Seu nome tem a letra A?", pessoa.includes("a"))


// -------------------------------------------------------


// PARA GUARDAR NA CABEÇA


let nomeDoUsuario = prompt ("Qual é o seu nome?")
let emailDoUsuario = prompt ("Digite seu e-mail")
let frase = `O e-mail ${emailDoUsuario} foi cadastrado com sucesso. Boas vindas, ${nomeDoUsuario}!` 
console.log(frase)


let frase1 = `O e-mail ${emailDoUsuario} foi cadastrado com sucesso. Boas vindas, ${nomeDoUsuario}! Seu nome possui ${nomeDoUsuario.length} caracteres.`
console.log(frase1)


let fraseNova = frase1.replaceAll("r","x").replaceAll("R","X")
console.log(fraseNova)

console.log("O e-mail do usuario tem @?", emailDoUsuario.includes("@"))
