let array = ['arroz', 'feijão', 'batata', 'macarrão', 'salada']

console.log('mostrando o array: ' + array)

array.unshift('pequi') //objeto no inicio

console.log('adicionando um ao inicio:' + array)

array.pop() //removendo final

console.log('removendo item ao final: ' + array)

array.push('lasanha', 'almondega') //dois itens no final

console.log('após adicionar dois nomes, temos: ' + array)

array.shift() //removendo primeiro item

console.log('removendo o primeiro item do array: ' + array)


//depois disso

let numbers = [7, 5, 6, 3, 8, 9, 2, 1, 4]
console.log('os numeros ordenados são:' + numbers.sort())


//objetos
let Alice = {nome: 'alice', idade: 22, cor: 'roxo'}

Alice.musica = ''  //adicionando uma propriedade

delete Alice.idade //removemos uma propriedade

console.log(Alice)

//objeto cadastro
//fiquei um tanto confusa nesse aqui. Não sei se fiz do jeito que vocês queriam
let cadastro = [
    { nome: 'Matheus', idade: 12, telefone: 22333, amigos: ['tereza', 'juliana', 'marcela', 'fernando'] },
    { nome: 'Edna', idade: 13, telefone: 2888, amigos: ['matheus', 'jessica', 'gerlandia', 'antonio']},
    { nome: 'Alice', idade: 15, telefone: 2999, amigos: ['thiago', 'angelica', 'larissa', 'leticia'] },
    { nome: 'Arthur', idade: 19, telefone: 1000, amigos:['isabel', 'fernanda', 'iris', 'marilia'] },
    { nome: 'Fernando', idade: 20, telefone: 2000, amigos: ['jonas', 'gabriel', 'marcos', 'antonia'] }
]
const randomNumber =   Math.floor(Math.random() * 4) 


console.log(cadastro[0].amigos[randomNumber] + ' é uma amizade de ' + cadastro[0].nome)
console.log(cadastro[1].amigos[randomNumber] + ' é uma amizade de ' + cadastro[1].nome)
console.log(cadastro[2].amigos[randomNumber] + ' é uma amizade de ' + cadastro[2].nome)
console.log(cadastro[3].amigos[randomNumber] + ' é uma amizade de ' + cadastro[3].nome)
console.log(cadastro[4].amigos[randomNumber] + ' é uma amizade de ' + cadastro[4].nome)