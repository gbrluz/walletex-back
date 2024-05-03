const { database } = require('./knex');

const getTransactions = async function () {
    const result = await database.select().table('transaction')
    // const transactions = result.map(({result.data, value} => {}))
    return result;
}

const addTransaction = async function ({transaction}) {
    // console.log(transaction)
    const time = new Date(Date.now()).toLocaleDateString();
    // console.log(time)
    await database('transaction').insert({
        name: transaction.data.name,
        price: transaction.data.price,
        data: time
    })

}

const removeTransaction = async function (id) {
    await database('transaction').del().where('id', id.id)
}

function formatMillisecondsToDate(milliseconds) {
    const date = new Date(milliseconds);
    return date.toLocaleString();
}


module.exports = {getTransactions, addTransaction, removeTransaction}