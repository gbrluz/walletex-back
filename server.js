const { ApolloServer} = require("apollo-server");

const typeDefs=`
    type Item {
        id: Int
        name: String
        price: Float
        data: String
    }

    type Query {
        transactions: [Item]
    }


`

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
      name: "Roupa",
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

const resolvers = {
    Query: {
        transactions() {
            return transactions;
        }
    }
}

const server = new ApolloServer({typeDefs, resolvers})
server.listen();