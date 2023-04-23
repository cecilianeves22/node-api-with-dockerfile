# Como clonar o projeto:

Abra o git bash ou o programa que preferir e cole o link do projeto utilizando o seguinte comando: ``git clone https://github.com/cecilianeves22/node-api-with-dockerfile.git``.

# Como executar o projeto: 

Utilizar o comando:
```sh
docker-compose up -d --build
```
###Exemplo para utilizar desde da aplicação até o Docker: 
```sh
docker-compose up -d --build

mysql -u fiap-user -p

use apinode;

select *from categories;

insert into categories(name,image) values('Filme e Entretenimento', 'filme.png');

select * from categories;

update categories set name = 'Esporte' where id=4;

delete from categories where id=4;
```

É possível que nas primeiras vezes que a aplicação tentar subir, o banco rejeite a conexão, mas só pelos 10 primeiros segundos. Depois disso a aplicação abre normalmente. Isso acontece porque, ao subir a aplicação, está configurado um arquivo knex, que gera uma migration do banco de dados. Quando este não está ativo, a aplicação tenta reconectar até conseguir realizar a migration.

Espero que dê tudo certo =).

Por fim, segue a imagem da arquitetura do projeto:

![alt text](https://raw.githubusercontent.com/cecilianeves22/node-api-with-dockerfile/main/image.png)


