const { ApolloServer } = require("apollo-server");
const resolvers = require("./resolvers");

const createTransaction = async function (item){
    await database('transaction').insert(item)
    return item;
}