const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    message.member.roles.add(995245864903782460)
    
    message.channel.send(`${message.member.displayName} heeft succesvol de NanoLeaf XP actie geclaimed!`)
    }

module.exports.help = {
    name: "nanoleafxsnwy",
    description: "Ban iemand",
    category: "Algemeen"
}