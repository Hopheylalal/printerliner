const axios = require('axios');

module.exports = async function (request, response) {
    // const inn = request.query['inn']; // Получение ИНН из запроса

    // if (!inn) {
    //     response.send('ИНН не предоставлен', 400);
    //     return;
    // }

    try {
        // const url = `https://api-fns.ru/api/egr?req=${inn}&key=89da3ed3f1c4d9af7b89960616e72b89144b7cc3`;
        // const apiResponse = await axios.get(url);
        response.send('HEELO');
    } catch (error) {
        console.error('Ошибка при выполнении запроса: ', error);
        response.send('Ошибка при выполнении запроса', 500);
    }
};
