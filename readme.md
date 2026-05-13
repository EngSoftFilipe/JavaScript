# JavaScript - Consumo de API com Async/Await

Projeto de estudo sobre **consumo de API** em JavaScript utilizando `async/await` e `fetch`.

## O que o projeto faz

Faz uma requisição para a [Fake Store API](https://fakestoreapi.com) e exibe no console as informações de um produto, como nome, ID e preço.

## Arquivo

### `AsyncAwait.js`
Função assíncrona que:
- Faz uma requisição HTTP com `fetch`
- Converte a resposta para JSON
- Exibe os dados do produto no console
- Trata erros com `try/catch`

## Exemplo de saída

```
Nome do produto: 1
ID: 1
Preço: R$ 109.95
```

## Conceitos utilizados

- `async/await` — permite trabalhar com código assíncrono de forma mais legível
- `fetch` — realiza requisições HTTP
- `.json()` — converte a resposta da API em objeto JavaScript
- `try/catch` — captura e trata erros na requisição

## API utilizada

- [Fake Store API](https://fakestoreapi.com) — API gratuita para fins de estudo e testes

## Tecnologias

- JavaScript