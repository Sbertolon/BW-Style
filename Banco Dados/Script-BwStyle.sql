create database BWStyle;
use BWStyle;
drop database BWStyle;

create table Usuario(
idUsuario int primary key auto_increment,
Nome varchar(50),
Idade int,
Email varchar(100),
Senha varchar(20),
 fkconhecimento INT ,
   FOREIGN KEY (fkconhecimento) REFERENCES conhecimento (idconhecimento)
);

	CREATE TABLE conhecimento(
    idConhecimento int primary key auto_increment,
	 tipoConhecimento VARCHAR (14)
    );
    


create table Postagem(
idPostagem int primary key auto_increment,
Descricao varchar(80),
Data_postagem datetime default (CURRENT_TIMESTAMP),
Curtidas int
);

create table Post_like(
fkUsuario int,
fkPostagem int,
Data_curtida datetime,
constraint fkUsuarioLike foreign key (fkUsuario)
references Usuario(idUsuario),
constraint fkPostagemLike foreign key (fkPostagem)
references Postagem(idPostagem),
primary key (fkUsuario, fkPostagem)
);

insert into Usuario values
(null, 'Sthefanny', 18, 'Sthefanny.Fbertolon@gmail.com', '123abc', 'sim');
insert into Usuario values
(null, 'Will dantas', 18, 'will@gmail.com', '123456789', 'não');


insert into Postagem values
(null, 'Dicas de acessorios', null, 3);

insert into Post_like values
(1, 1, '2023-05-11');

select * from Usuario;
select * from Postagem;
select * from Post_like;


-- SELECT (DASHBOARD) PEGAR PERSONAGEM FAVORITOS DE CADA USUARIO
-- SELECT (DASHBOARD) PEGAR PERSONAGEM FAVORITOS DE CADA USUARIO
SELECT COUNT(Usuario.fkconhecimento) as voto, conhecimento.tipoConhecimento AS conhecimento 
FROM Usuario JOIN conhecimento ON  conhecimento.idConhecimento = Usuario.fkconhecimento group by usuario.fkconhecimento;


