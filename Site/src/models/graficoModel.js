var database = require("../database/config");

function idade() {
    instrucao =
        `
        SELECT 
        Idade, 
        COUNT(*) AS total_usuarios 
        FROM Usuario GROUP BY Idade 
        ORDER BY Idade ASC;
        `;
    return database.executar(instrucao);
}

function curtidas() {
    instrucao =
        `
        SELECT Postagem.idPostagem,
        Postagem.Descricao, count(Curtidas) as qtdCurtidas
        FROM Postagem
        LEFT JOIN Post_like
        ON Post_like.fkPostagem = Postagem.idPostagem
        group by idPostagem, Descricao
        order by Postagem.idPostagem asc;
    `;
    return database.executar(instrucao);
}

function conhecimento() {

    instrucaoSql = `
    SELECT COUNT(Usuario.fkconhecimento) as voto, 
    conhecimento.tipoConhecimento AS conhecimento 
        FROM Usuario JOIN conhecimento 
        ON  conhecimento.idConhecimento = Usuario.fkconhecimento group by usuario.fkconhecimento;`;


    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    idade,
    curtidas,
    conhecimento
}