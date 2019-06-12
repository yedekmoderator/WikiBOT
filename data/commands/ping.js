const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  const pingembed = new Discord.RichEmbed()
    .setColor(client.color.blue)
    .setTimestamp()
    .setAuthor("WikiBOT's Ping:")
    .setDescription(`⌛ **${Math.round(client.ping)}ms**`)
    .setFooter(`Command issued by ${message.author.tag}`, message.author.avatarURL)
  message.channel.send(pingembed).then(msg => { msg.delete(5000) }).catch(e => { console.log(e) });
  message.delete(5000)
}