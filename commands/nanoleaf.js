const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    let role = message.guild.roles.cache.some(role => role.name === 'Nanoleaf')
    message.member.roles.add(role)
    
    message.channel.send(`${message.member.displayName} heeft succesvol de NanoLeaf XP actie geclaimed!`)
    }

module.exports.help = {
    name: "nanoleafxsnwy",
    description: "Ban iemand",
    category: "Algemeen"
}