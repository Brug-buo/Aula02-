const express = require ('express');
const app = express ();
app.use ( express.json () );

let prodcor = [
  {id: 1, nome: "verde", preco: 1.00}, 
  {id: 2, nome: "amarelo", preco: 2.00},
  {id: 3, nome: "vermelho", preco: 1.50}
]
let proxid = 4;




// GET /-> retorna todos os produtos
app.get ('/', (req, res) => {
res.json(prodcor);
});




// GET /1:id -> retorna um produto especifico
app.get('/produto/:id', (req, res) => {
const id = Number ( req.params.id );
const produto = prodcor.find ( p => p .id === id ) ;
if (!produto) {
return res.status (404).json ({ erro : " Produto nao encontrado " }) ;
}
res.json (produto) ;
});




// POST /criar -> cria um novo produto
app.post ('/criar', ( req , res ) => {
console.log ( req.body.nome );
const novoProduto = {
     id: proxid,
     nome: req.body.nome,
     preco: req.body.preco
 };
 
 prodcor.push(novoProduto );
 proxid++;
 res.status (201).json (novoProduto);
}) ;





// PUT /atualiza/:id -> atualiza um produto existente
app.put ('/atualiza/:id', (req, res) => {
  console.log("ola");
  const id = Number (req.params.id);
  const produto = prodcor.find (a => a.id === id);
  if (!produto){
    return res.status(404).json ({ erro: "produto nao encontrado "});  
  }
  produto.nome = req.body.nome;
  produto.preco = req.body.preco;
  res.json(produto);
});





//DELETE /retira/:id -> remove produto
app.delete ('/retira/:id', (req, res) => {
const id = Number (req.params.id);
const cor = prodcor.find( a => a.id === id);
if(!cor){
return res.status(404).json ({erro: "cor nao encontrada"})
}
prodcor = prodcor.filter(a => a.id !== id);
res.json({mensagem: "Cor removida com sucesso"});  
});





app.listen(3000, () => {
console.log(" Servidor rodando em http://localhost:3000 ");
}); 

