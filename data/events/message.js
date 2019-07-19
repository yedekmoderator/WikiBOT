const Discord = require('discord.js');
const talkedRecently = new Set();

module.exports = async (client, message) => {

  if (message.author.bot) return;

  if (message.content.indexOf(client.prefix) !== 0) return;

  const args = message.content.slice(client.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  if (!command) return;

  const cmd = client.commands.get(command);

  if (!cmd) {
    const nocmdfound = new Discord.RichEmbed()
      .setColor(client.color.red)
      .setAuthor('❌ Command not found!')
      .setDescription(`Try **${client.prefix}help** to find the command you're looking for.`)
      .setTimestamp()
      .setFooter(`Command issued by ${message.author.tag}`, message.author.avatarURL);
    message.delete(5000);
    return message.channel.send(nocmdfound).then(m => { m.delete(5000) });
  }

  if (talkedRecently.has(message.author.id)) {
    message.channel.send("Please wait 5 seconds before executing another command!");
  } else {
    cmd.run(client, message, args);

    talkedRecently.add(message.author.id);
    setTimeout(() => {
      talkedRecently.delete(message.author.id);
    }, 5000);
  }
};
