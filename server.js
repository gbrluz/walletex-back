const { ApolloServer} = require("apollo-server")
const service = require("./service");

const transactions = [
    {
      id: 1,
      name: "Lanche",
      price: "12.33",
      data: "12/03/2024",
    },
    {
      id: 2,
      name: "Academia",
      price: "109.90",
      data: "10/03/2024",
    },
    {
      id: 3,
      name: "Posto",
      price: "220.00",
      data: "07/03/2024",
    },
    {
      id: 4,
      name: "Mercado",
      price: "158.78",
      data: "03/03/2024",
    },
    {
      id: 5,
      name: "Ro",
      price: "198.90",
      data: "01/03/2024",
    },
    {
      id: 6,
      name: "Roupa",
      price: "198.90",
      data: "01/03/2024",
    },
  ];

const typeDefs = `
type Item {
  id: Int
  name: String
  price: Float
  data: String
}

type Query {
  transactions: [Item]
}

type Mutation {
  addTransaction(data: CreateTransactionInput): Item
}

input CreateTransactionInput {
  id: Int
  name: String
  price: Float
  data: String
}`

const resolvers = {
    Query: {
      async transactions(_, args) {
        const transactions = await service.getTransactions();
        return transactions;

      }
    },
    Mutation: {
      async addTransaction(_, args) {
        const transaction = args.transaction;
        const newTransaction = await server.addTransaction(transaction)
        return newTransaction
      }
    }
}

const server = new ApolloServer({typeDefs, resolvers})
server.listen(4000,console.log("server running"));