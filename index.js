const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    if (message.content === 'ping') {

       message.reply('pong');

       }

});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.NDE4MTM4MTMyNzQ0MTEwMDkx.DfBVZg.fQ_KD6BhFIGIccBp2rEoJ0RuVks);//where BOT_TOKEN is the token of our bot
