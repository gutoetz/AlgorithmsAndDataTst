# Algorithms And Data Test

Este repositório contém algoritmos criados para um teste de uma empresa para a qual estou me candidatando.

## Algoritmos

### Filtering arrays

O algoritmo de filtragem de arrays consiste em filtrar um array de entrada, removendo elementos que não satisfaçam uma determinada condição. O resultado final é um novo array com apenas os elementos que atendam à condição estabelecida.

### Basic Math

A classe Basic Math é uma implementação de operações matemáticas básicas. É possível utilizar esta classe para realizar somas, subtrações, multiplicação e divisões com números inteiros.

### Generate ID

A função Generate ID cria um identificador alfanumérico no formato "xxxx-xxxx-xxxx", em que cada "x" representa um caractere alfanumérico aleatório. Essa função pode ser utilizada para gerar IDs únicos e aleatórios em uma aplicação.

## Como utilizar

Para utilizar esses algoritmos, basta importar o arquivo correspondente e utilizar as funções ou classes disponíveis em seu código.

```javascript
// Exemplo de uso do Filtering arrays
const filteredArray = filterArray([1, 2, 3, 4, 5], (n) => n % 2 === 0);
console.log(filteredArray); // [2, 4]

// Exemplo de uso da Basic Math
const calculator = new BasicMath();
const result = calculator.add(2, 3);
console.log(result); // 5

// Exemplo de uso da Generate ID
const id = generateId();
console.log(id); // "2c5f-d82a-1e6b"
