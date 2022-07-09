const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    let role = message.guild.roles.cache.some(roles => role.name === 'Nanoleaf')
    message.member.role.add(role)
    
    message.channel.send(`${Member.displayName} heeft succesvol de NanoLeaf XP actie geclaimed!`)
    }

module.exports.help = {
    name: "nanoleafxsnwy",
    description: "Ban iemand",
    category: "Algemeen"
}