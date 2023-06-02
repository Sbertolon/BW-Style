var database = require("../database/config");

function buscarUltimasMedidas(limite_linhas) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `SELECT COUNT(Usuario.fkconhecimento) as voto, conhecimento.tipoConhecimento AS conhecimento 
        FROM Usuario JOIN conhecimento ON  conhecimento.idConhecimento = Usuario.fkconhecimento group by usuario.fkconhecimento;`;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `SELECT COUNT(Usuario.fkconhecimento) as voto, conhecimento.tipoConhecimento AS conhecimento 
        FROM Usuario JOIN conhecimento ON  conhecimento.idConhecimento = Usuario.fkconhecimento group by usuario.fkconhecimento;`;

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

function buscarMedidasEmTempoReal1(idAquario) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `
        SELECT Idade, COUNT(*) AS total_usuarios FROM Usuario GROUP BY Idade;`;

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = ` SELECT Idade, COUNT(*) AS total_usuarios FROM Usuario GROUP BY Idade;`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}




module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal,
    buscarMedidasEmTempoReal1
}
