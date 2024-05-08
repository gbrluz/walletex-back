const { ApolloServer} = require("apollo-server")
const service = require("./service");

const typeDefs = `
scalar Date

type Item {
  id: Int
  name: String
  price: Float
  data: Date
}

type Card {
  id: Int
  cardNumber: String
  cardName: String
  cardFlag: String
}

type Query {
  transactions: [Item]
  cards: [Card]
}

type Mutation {
  addTransaction(data: CreateTransactionInput): Item
  removeTransaction(id: Int): Boolean
  addCard(data: CardInput): Card
  removeCard(id: Int): Boolean
}

input CardInput {
  id: Int
  cardNumber: String
  cardName: String
  cardFlag: String
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
        console.log(transactions[3].data)
        return transactions;
      },
      async cards(_, args) {
        const cards = await service.getCards();
        // console.log(cards)
        return cards;
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
      },
      async addCard (_,args) {
        const card = args;
        const newCard = await service.addCard({card})
        return newCard
      },
      async removeCard (_, args) {
        const id = args;
        console.log(id)
        const removeCard = await service.removeCard(id)
        return removeCard;
      },
    }
}

const server = new ApolloServer({typeDefs, resolvers})
server.listen(4000,console.log("server running"));