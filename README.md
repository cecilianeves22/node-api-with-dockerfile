# Como clonar o projeto:

Abra o git bash ou o programa que preferir e cole o link do projeto utilizando o seguinte comando: ``git clone https://github.com/cecilianeves22/node-api-with-dockerfile.git``.

# Como executar o projeto: 

Utilizar o comando:
```sh
docker-compose up -d --build
```
É possível que nas primeiras vezes que a aplicação tentar subir, o banco rejeite a conexão, mas só pelos 10 primeiros segundos. Depois disso a aplicação abre normalmente. Isso acontece porque, ao subir a aplicação, está configurado um arquivo knex, que gera uma migration do banco de dados. Quando este não está ativo, a aplicação tenta reconectar até conseguir realizar a migration.

Espero que dê tudo certo =).
