
const express = require('express')
const app = express()
app.use(express.json())

//ex1 
 app.get ('/', (req , res) => {
    const eune = [
         res.json({aluno: "bruna", diciplina: "backandI", ano: 2026})
    ]

 })

//ex2
app.get ('/p', (req , res) => {
    const p = [
{" id ": 1 ,
" nome ": " Achocolatado Nescau - 550g " ,
" preço ": 12.99},

{" id ": 2 ,
" nome ": " Maionese Hellmann's - 800g " ,
" preço ":  19.90},

{" id ": 3 ,
" nome ": " Suco de Uva Aurora Tinto Integral - 1,5 Litro " ,
" nota ": 14.98},

{" id ": 4 ,
" nome ": "bisnaga" ,
" nota ": 4.49}
];
 res.json(p)
 })

//ex3 
app.get('/status', (req, res) => {
  res.status(200).json({
    online: true,
    message: "Deu tudo certo!!"
  })
})

//ex4
app.get('/produtos/carros', (req, res) =>{
const produtos = [
{ id: 1, nome: 'Desengraxante e Removedor de Sujeira Pesada V-Mol Vonixx', preco: 290.20 },
{ id: 1, nome: 'Cera em Pasta Tradicional com Carnaúba Proauto', preco: 37.48 },
{ id: 1, nome: 'Repelente de Chuva Glaco Soft99', preco: 134.10 },
{ id: 1, nome: 'Limpador de Vidros de Alta Performance Glass Cleaner Proauto', preco: 12.35 },
{ id: 1, nome: 'Limpador e Hidratante de Couro Higicouro Vonixx', preco: 22.90 }
];
 const prodcar = produtos.filter(produto => produto.preco > 100)
res.json(prodcar)
})

app.listen(3000, () => {
console.log(" Servidor rodando em http :// localhost :3000 ");
}); 
