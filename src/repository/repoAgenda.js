import conexao from "./connection.js";

export async function listar(){
    let sql = 'select * from tb_agenda';

    let resp = await conexao.query(sql);
    let dados = resp[0]

    return dados
}

export async function adicionarAgenda(agenda){
    let sql = 'insert into tb_agenda(nm_contato,ds_telefone,ds_email,bt_favorito,dt_cadastro) values(?,?,?,?,?)';

    let resp = await conexao.query(sql, [agenda.contato,agenda.telefone,agenda.email,agenda.favorito,agenda.cadastro])
    let dados = resp[0];
    
    agenda.id = dados.insertId
    return dados
}

export async function agendaFavorita(){
    let sql = 'select * from tb_agenda where bt_favorito = 1';
    let resp = await conexao.query(sql)

    let dados = resp[0];
    return dados
}

export async function buscarNome(nm){
    let sql = 'select * from tb_agenda where nm_contato = ?';
    let resp = await conexao.query(sql, [nm]);

    let dados = resp[0];
    return dados
}

export async function apagar(id){
    let sql = 'delete from tb_agenda where id_agenda = ?';
    let resp = await conexao.query(sql , [id]);

    let dados = resp[0];
    return dados
}

export async function buscarData(data1,data2){
    let sql = 'select * from tb_agenda where dt_cadastro between ? and ?';
    let resp = await conexao.query(sql, [data1, data2])

    let dados = resp[0]
    return dados
}
export async function alterarContato(nm,id){
    let sql = 'UPDATE tb_agenda SET nm_contato = ? WHERE id_agenda = ?';
    let resp = await conexao.query(sql, [nm, id]);

    let dados = resp[0];
    return dados;
}