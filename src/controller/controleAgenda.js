import { Router } from "express";
import { listar, adicionarAgenda, agendaFavorita, buscarNome, apagar, buscarData, alterarContato} from "../repository/agendaRepository.js";

let endpoints = Router();

endpoints.post('/contato', async (req,resp) => {
    let agenda = req.body;
    let dados = await adicionarAgenda(agenda);
    resp.send(dados);
});

endpoints.get('/contato', async (req,resp) =>{
    let dados = await listar();
    resp.send(dados);
});

endpoints.get('/contato/favoritos', async (req,resp) =>{
    let dados = await agendaFavorita();
    resp.send(dados);
});

endpoints.get('/contato/buscar', async (req, resp) =>{
    let nm = req.query.nome;
    let dados = await buscarNome(nm);
    resp.send(dados);
});

endpoints.delete('/contato', async (req,resp) =>{
    let id = req.query.id;
    let dados = await apagar(id);
    resp.send('Agenda Apagada com sucesso!!')
});

endpoints.get('/contato/cadastro', async (req,resp) =>{
    let data1 = req.query.inicio;
    let data2 = req.query.fim;

    let dados = await buscarData(data1,data2);
    resp.send(dados)
})

endpoints.put('/contato', async (req,resp) =>{
    let id = req.query.id;
    let nm = req.query.nome;
    
    let dados = await alterarContato(nm, id);
    resp.send('Contato Alterado!!');
})



export default endpoints