const { database } = require('./knex');

const getTransactions = async function () {
    const result = await database.select().table('transaction')
    // const transactions = result.map(({result.data, value} => {}))
    return result;
}

const addTransaction = async function ({transaction}) {
    const time = new Date(Date.now()).toLocaleDateString();
    await database('transaction').insert({
        name: transaction.data.name,
        price: transaction.data.price,
        data: time
    })
    return transaction;
}

const removeTransaction = async function (id) {
    await database('transaction').del().where('id', id.id)
}

function formatMillisecondsToDate(milliseconds) {
    const date = new Date(milliseconds);
    return date.toLocaleString();
}

const getCards = async function () {
    const result = await database.select(
        "id",
        "card_number as cardNumber",
        "card_name as cardName",
        "card_flag as cardFlag")
        .table('card')
    return result;
}

const addCard = async function ({card}) {
    await database('card').insert({
        card_name: card.data.cardName,
        card_number: card.data.cardNumber,
        card_flag: card.data.cardFlag
    })
}

const removeCard = async function(id) {
    await database('card').del().where('id', id.id)
}


module.exports = {getTransactions, addTransaction, removeTransaction, getCards, addCard, removeCard}