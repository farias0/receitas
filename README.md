# Receitas

Uma API escrita em Node.js que permite buscar receitas através de uma lista de ingredientes. 

## Serviços externos utilizados

* Recipe Puppy
* Giphy

## Configuração do ambiente

### Requisitos

* Node v. 12
* npm v. 6

### Executando

Primeiramente crie um arquivo chamado .env na raíz do projeto. Ele deve conter os seguintes parâmetros:

* PORT = 8080
* RECIPEPUPPY_API_URL = http://www.recipepuppy.com/api/
* GIPHY_KEY = {chave privada da API do Giphy}

Depois execute os comandos:

<code>
  npm install
  
  npm run start
</code>

## Como usar

<code>/GET {url}/recipes={ingrediente_1},{ingrediente_2}</code>