const TeleBot = require('telebot');
const bot = new TeleBot('536144761:AAF32-c_LKbUNyK6QAVZhUdG3v1JLxTzSOw');

bot.on('*', async (msg) =>{
    bot.sendMessage(msg.chat.id, `Добро пожаловать в бота ${msg.chat.user_name}`)
})

bot.start()