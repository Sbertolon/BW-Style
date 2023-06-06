var database = require("../database/config");


function buscarMedidasEmTempoReal(idAquario) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `
        SELECT round(AVG(pontuacao.percentualPontuacao) , 2) AS 'Média do quiz' FROM Pontuacao;`;

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = ` SELECT round(AVG(pontuacao.percentualPontuacao) , 2) AS 'Média do quiz' FROM Pontuacao;`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal(idAquario) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `
        SELECT round(AVG(pontuacao.percentualPontuacao) , 2) AS 'Média do quiz' FROM Pontuacao;`;

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = ` SELECT round(AVG(pontuacao.percentualPontuacao) , 2) AS 'Média do quiz' FROM Pontuacao;`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function curtir(fkUsuario, fkPostagem) {

        instrucaoSql = `insert into Post_like values
        (${fkUsuario}, ${fkPostagem}, 1);`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function descurtir(fkUsuario, fkPostagem) {

    instrucaoSql = `delete from Post_like where fkUsuario = ${fkUsuario} and fkPostagem = ${fkPostagem};`;

console.log("Executando a instrução SQL: \n" + instrucaoSql);
return database.executar(instrucaoSql);
}

function exibir_usuario_curtida(idUsuario) {

    instrucaoSql = `SELECT Postagem.idPostagem, Postagem.Descricao, IF(Post_like.Curtidas IS NOT NULL, 1, 0) AS usuario_curtiu FROM Postagem
    LEFT JOIN Post_like ON Post_like.fkPostagem = Postagem.idPostagem AND Post_like.fkUsuario = ${idUsuario} order by Postagem.idPostagem asc;
    `;

console.log("Executando a instrução SQL: \n" + instrucaoSql);
return database.executar(instrucaoSql);
}

module.exports = {
    buscarMedidasEmTempoReal,
    curtir,
    descurtir,
    exibir_usuario_curtida
}
