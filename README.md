POC - Comunicação entre os bancos (Mongo DB x Postgress)

## Para rodar o Projeto siga as instruções :

1 - abra o terminal da pasta raiz do projeto e digite : docker-compose up 

2 - Existem duas pastas "app-mongo" e "app-postgres" , são projetos diferentes
abra cada uma em terminais diferentes dê o comando yarn para instalar as dependencias. 
     app-mongo está rodando na porta 3001 , usaremos a rota http://localhost:3001/user para 
     consultar e inserir dados na aplicação mongo ! 
     formtado do User :{
                       	"name": "teste",
                       	"email": "teste@teste.com"
                        }
     
3 - Apos rodar subir os container/imagens e instalar as dependencias nas duas aplicações, 
a app estara pronta para ser usada ! no arquivo """app-postgres/src/database/config.ts""" pegue as credencias 
e conecte ao banco postgres!



