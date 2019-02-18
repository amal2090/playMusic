const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});





client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});







client.login('NTQ3MDk1NjMzNTA5NzQ0NjQw.D0xy2A.1rMiJs7gdI0PXliCNzuXR6L3slc');
