const Discord = require('discord.js');

exports.run = async (client, message) => {
  const m = await message.channel.send("Pinging! Give me a moment...");
  const pingembed = new Discord.RichEmbed()
    .setColor(client.color.blue)
    .setTimestamp()
    .setAuthor("WikiBOT's Ping:")
    .addField("API Latency:", `**${Math.round(client.ping)}ms**`)
    .addField("Message Latency:", `**${m.createdTimestamp - message.createdTimestamp}ms**`)
    .setFooter(`Command issued by ${message.author.tag}`, message.author.avatarURL);
  m.edit(pingembed).then(msg => { msg.delete(5000) }).catch(e => { console.log(e) });
  message.delete(5000)
};