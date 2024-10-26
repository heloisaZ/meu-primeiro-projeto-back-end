const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

function mostraMulher(request, response) {
response.json({
    nome: "Heloisa Zilio",
    imagem: "https://www.facebook.com/photo/?fbid=10218108644612100&set=a.1470363363540",
    minibio: "professora de alemao"
})  
}

function mostraPorta() {
    console.log("Servidor criado e rodando na porta ", porta)
}

app.use(router.get("/mulher", mostraMulher))
app.listen(porta, mostraPorta)