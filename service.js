const { database } = require('./knex');

const getTransactions = async function () {
    const result = await database.select().table('transaction')
    return result;
}

const addTransaction = async function (transaction) {
    await database('transaction').insert({
        name: transaction.name,
        price: transaction.price,
        data: transaction.data
    })
    return transaction;
}

module.exports = {getTransactions, addTransaction}