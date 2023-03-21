const TelegramApi = require('node-telegram-bot-api');
const { gameOptions, againOptions, sadStickers } = require('./options');
const token = '5696327375:AAGCeJQCNaxzOSS_WU-FyqwSzQBXq8Dta60';
//const chatid = '-965643192';
//const url = 'https://api.telegram.org/bot5696327375:AAGCeJQCNaxzOSS_WU-FyqwSzQBXq8Dta60/sendMessage?chat_id=-965643192&text=hi_I_am_a_bot';

const bot = new TelegramApi(token, { polling: true });

const chats = {};

const startGame = async (chatId) => {
    const randomNumber = Math.floor(Math.random() * 10);
    chats[chatId] = randomNumber;
    await bot.sendMessage(chatId, 'Я загадал число от 0 до 9, попробуйте отгадать!)', gameOptions);
}

const start = () => {
    bot.setMyCommands([
        { command: '/start', description: 'Начальное приветствие' },
        { command: '/info', description: 'Информация о пользователе' },
        { command: '/game', description: 'Игра угадай число' }
    ]);

    bot.on('message', async msg => {
        const text = msg.text;
        const chatId = msg.chat.id;
        if (text === '/start') {
            await bot.sendSticker(chatId, 'https://cdn.tlgrm.app/stickers/cbe/e09/cbee092b-2911-4290-b015-f8eb4f6c7ec4/192/6.webp');
            return bot.sendMessage(chatId, `Добро пожаловать в тестовый бот!:)`);
        }
        if (text === '/info') {
            return bot.sendMessage(chatId, `Вас зовут ${msg.from.first_name} ${msg.from.last_name}`);
        }
        if (text === '/game') {
            return startGame(chatId);
        }
        return bot.sendMessage(chatId, 'Не понимаю эту команду, попробуйте еще раз!');
    });

    bot.on('callback_query', async msg => {
        const data = msg.data;
        const chatId = msg.message.chat.id;
        if (data === '/again') {
            return startGame(chatId);
        }
        if (data == chats[chatId]) {
            await bot.sendSticker(chatId, 'https://cdn.tlgrm.app/stickers/ccd/a8d/ccda8d5d-d492-4393-8bb7-e33f77c24907/192/1.webp');
            return bot.sendMessage(chatId, `Поздравляю, вы отгадали правильно, ответ: ${data}`, againOptions);
        } else {
            //console.log(msg);
            await bot.sendSticker(chatId, sadStickers[chats[chatId]]);
            return bot.sendMessage(chatId, `К сожалению вы не угадали, бот загадал число: ${chats[chatId]}`, againOptions)
        }
    });
}

start();



