
const express = require ('express') ;
const app = express () ;
app.use ( express.json () ) ;

let BolosDecorados = [
{ id: 1 , nome: "Naked Cake 1", preco: 140.09 },
{ id: 2 , nome: "Naked Cake 2", preco: 237.10 },
{ id: 3 , nome: "Naked Cake 3", preco:  356.84 },
{ id: 4 , nome: "Naked Cake 4", preco:  475.12 }
];
let proximoId = 5;



// GET /todos-> retorna todos os alunos
app.get ('/todos', ( req , res ) => {
res.json (BolosDecorados);
}) ;


// GET /especifico/:id -> retorna um produto especifico
app.get ('/esp/:id', ( req , res ) => {
const id = Number ( req.params.id );
const produto = produtos.find ( p => p .id === id ) ;
if (!produto ) {
return res.status (404).json ({ erro : " Produto nao encontrado " }) ;
}
res.json (produto) ;
}) ;

// POST /p -> cria um novo produto
app.post ('/p', ( req , res ) => {
console.log ( req.body.nome ) ;

 const novoProduto = {
     id: proximoId,
     nome: req.body.nome,
     preco: req.body.preco
 };

 produtos.push(novoProduto );
 proximoId++;
 res.status (201).json (novoProduto);
}) ;

// PUT / produtos/: id -> atualiza um produto existente
app.put ('/produtos/:id', ( req , res ) => {
const id = Number ( req.params.id ) ;
const produto = produtos.find ( p => p .id === id ) ;
if (! produto ) {
return res.status (404).json ({ erro : "Produto nao encontrado" }) ;
}
produto.nome = req.body.nome;
produto.preco = req.body.preco;
res.json(produto);
});


// DELETE / alunos /: id -> remove um aluno
app.delete ('/alunos/:id', ( req , res ) => {
const id = Number ( req.params.id);
const aluno = alunos.find ( a => a .id === id );
if (!aluno ) {
return res.status (404).json ({ erro : " Aluno nao encontrado " }) ;
}
alunos = alunos.filter ( a => a .id !== id ) ;
res . json ({ mensagem : " Aluno removido com sucesso " });
}) ;





app.listen(3000, () => {
console.log(" Servidor rodando em http://localhost:3000 ");
}); 