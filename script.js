let receitaFavorita = {
    titulo: "Chocolate",
    porcoes: 2,
    ingredientes: [
        'cacau',
        'leite',
        'manteiga'
    ]
};
console.log(receitaFavorita.titulo);
console.log(receitaFavorita.porcoes);
console.log(receitaFavorita.ingredientes[0]);
console.log(receitaFavorita.ingredientes[1]);
console.log(receitaFavorita.ingredientes[2]);

// Crie um array de objetos onde cada objeto irá descrever um livro e suas 
//respectivas propriedades: titulo(string), autor(string), livroLido
//   (booleano) que irá indicar se este livro já foi lido ou não.Insira pelo
//menos 4 livros
//Faça um looping iterando no array de livros.Para cada livro, exiba no
//console.log o título do livro e o autor deste livro.
//Agora use if/else para mudar o output no console dependendo se o livro
//foi lido ou não.Caso o livro tenha sido livro imprima no console: “Você
//já leu este livro – Nome do livro – Autor” caso o livro não tenha sido lido
// imprima no console: “Você não leu este livro – Nome do livro – autor”.

let livros = [
    { titulo: "", autor: "", livroLido: true }
    { titulo: "", autor: "", livroLido: false }
    { titulo: "", autor: "", livroLido: true }
    { titulo: "", autor: "", livroLido: false }

]