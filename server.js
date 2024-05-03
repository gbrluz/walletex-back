const { ApolloServer} = require("apollo-server")
const service = require("./service");

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
  removeTransaction(id: Int): Boolean
}

input CreateTransactionInput {
  id: Int
  name: String
  price: Float
  data: String
}

input RemoveTransactionInput {
  id: Int
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
        const transaction = args;
        const newTransaction = await service.addTransaction({transaction})
        return newTransaction
      },
      async removeTransaction (_, args) {
        const id = args;
        console.log(id)
        const removeTransaction = await service.removeTransaction(id)
        return removeTransaction;
      }
    }
}

const server = new ApolloServer({typeDefs, resolvers})
server.listen(4000,console.log("server running"));