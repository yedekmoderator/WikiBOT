module.exports = async (client, member) => {

    let channel = client.channels.get("588106634144907264");

    let user = member.user.tag;

    let welcomeMsg = require("discord.js").RichEmbed()
        .setColor(client.color.blue)
        .setAuthor("Welcome **" + user + "**!")
        .setDescription("Welcome " + user + " to iWikiCord. Go to <#588105290298294445> and introduce yourself! Go checkout <#588105031123730506> to get up-to-date on the latest iWikiCord news. That's all.")
        .setTimestamp()
        .setThumbnail(member.user.avatarURL)
        .setFooter("WikiBOT welcomes " + member + " at");


    channel.sendMessage(welcomeMsg).then(m => {

        m.react("🇭");
        m.react("🇮");

    }).catch(e => {
        console.log(e)
    });

};