# API Transactions

Api Transactions,voltada para transações financeiras no geral, tem as funções criação, atualização e recuperação de dados de transações.

## Índice

- [Instalação](#instalação)
- [Uso](#uso)
- [Endpoints](#endpoints)
- [Exemplos](#exemplos)
- [Tecnologias](#tecnologias)
- [Licença](#licença)

## Instalação

 Como instalar e configurar a API localmente. I

```bash
# Fork
Fork o repositório clicando no botão "Fork" no canto superior direito desta página

# Clone
Clone seu repositório bifurcado em sua máquina local:
   ```bash
   git clone https://github.com/your-username/project-name.git

#Instala dependências
instalação npm install
```

## Uso

Como executar a API.

```bash
#Execute a API
npm run dev
```

## Endpoints

- `GET /transactions`: Recupera todas as transações.
- `POST /transactions`: Cria uma nova transação.
- `DELETE /transactions/:id`: Exclui uma transação por ID.
- `PUT /transactions/:id`: Atualiza uma transação por ID.
- `PATCH /transactions/:id`: Atualiza propriedades específicas de uma transação por ID.
- `GET /transactions/:id`: Recupera uma transação por ID.

## Exemplos

#### 1. `GET`  http://localhost:3333/transactions
Esse endpoint irá listar todas as transações cadastradas, e o retorno inicial será:

```json=
[
    {
        "date": "2021-09-15T03:00:00.000Z",
        "week_day": "quarta",
        "description": "Venda de carro.",
        "value": 15000,
        "category": "Vendas",
        "type": "credit",
        "id": 1
    }
]
```

#### 2. `GET` http://localhost:3333/transactions/1
Esse endpoint listará apenas uma transação (quando ela existir), o retorno inicial será:

```json=
{
    "date": "2021-09-15T03:00:00.000Z",
    "week_day": "quarta",
    "description": "Venda de carro.",
    "value": 15000,
    "category": "Vendas",
    "type": "credit",
    "id": 1
}
```

#### 3. `POST`  http://localhost:3333/transactions
Nesse endpoint você pode cadastrar outras transações, o `body` para o cadastro precisa seguir o seguinte formato:

Para valores de entrada de dinheiro:
```json=
{
    "date": "2021-09-15T03:00:00.000Z",
    "week_day": "quarta",
    "description": "Venda de carro",
    "value": 15000,
    "category": "Vendas",
    "type": "credit" // ENTRADA DE DINHEIRO
}
```

Para valores de saída de dinheiro:
```json=
{
    "date": "2021-09-15T03:00:00.000Z",
    "week_day": "quarta",
    "description": "Compra de guaraná",
    "value": 5,
    "category": "Compras",
    "type": "debit" //SAÍDA DE DINHEIRO
}
```

Basicamente a única diferença entre entrada e saída é o `type` da transação, sendo:
- **credit** = Entradas de valores
- **debit** = Saída de valores

#### 4. `DELETE` http://localhost:3333/transactions/1

Esse endpoint permite fazer a deleção de uma transação, como bem sabemos, ele não possui `body`, só é necessário passarmos o `id` da transação na rota.


#### 5. `PUT` http://localhost:3333/transactions/1
Esse endpoint permite que você faça a atualização de uma transação, para atualizar basta você passar o `id` da transação na rota e enviar o `body` completo, como no exemplo abaixo:

```json=
{
    "date": "2021-09-15T03:00:00.000Z",
    "week_day": "quarta",
    "description": "Venda de carro.",
    "value": 15000,
    "category": "Vendas",
    "type": "credit"
}
```

#### 5. `PATCH` http://localhost:3333/transactions/1
A `API` conta também com o verbo `patch`, para você poder atualizar apenas um campo de uma transação, para isso você deve passar o `id` da transação na rota e no `body` passar a propriedade que você deseja atualizar, como no exemplo abaixo:

```json=
{    
    "description": "Venda de carro."    
}
```


### Obtenha todas as transações

```bash
curl http://localhost:3333/transações
```

### Crie uma nova transação

```bash
curl -X POST -H "Tipo de conteúdo: aplicativo/json" -d '{"quantidade": 100, "descrição": "Transação de exemplo"}' http://localhost:3333/transactions
```

### Excluir uma transação

```bash
curl -X DELETE http://localhost:3333/transactions/1
```

### Atualizar uma transação

```bash
curl -X PUT -H "Tipo de conteúdo: aplicativo/json" -d '{"quantidade": 200, "descrição": "Transação atualizada"}' http://localhost:3333/transactions/1
```

## Tecnologias

- TypeScript
- Express
- Axios
- Node

## Licença
[MIT](https://github.com/Debora1Allen)©[2024 debora1allen](https://github.com/Debora1Allen)

> Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
> The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

---

