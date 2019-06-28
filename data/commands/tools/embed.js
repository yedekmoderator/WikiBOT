const Discord = require('discord.js');

exports.run = (client, message, args) => {
    let title = args[0];
    let message1 = args[1];

    if(!title) {
        let notitle = new Discord.RichEmbed()
            .setColor(client.color.red)
            .setAuthor("❌ No title!")
            .setDescription("No title was provided!")
            .addField("Correct Usage:", "**``" + client.prefix + "embed <title> <message>``**")
            .setTimestamp()
            .setFooter(`Command issued by ${message.author.tag}`, message.author.avatarURL);
        return message.channel.send(notitle).then(m => { m.delete(3000); message.delete(3000) })
    } 

    if(!message1) {
        let notitle = new Discord.RichEmbed()
            .setColor(client.color.red)
            .setAuthor("❌ No message!")
            .setDescription("No message was provided!")
            .addField("Correct Usage:", "**``" + client.prefix + "embed <title> <message>``**")
            .setTimestamp()
            .setFooter(`Command issued by ${message.author.tag}`, message.author.avatarURL);
        return message.channel.send(notitle).then(m => { m.delete(3000); message.delete(3000) })
    }

    const embedmsg = new Discord.RichEmbed()
        .setColor(client.color.blue)
        .setAuthor(title)
        .setDescription(message1)
        .setTimestamp()
        .setFooter(`Command issued by ${message.author.tag}`, message.author.avatarURL);
    message.channel.send(embedmsg)
};