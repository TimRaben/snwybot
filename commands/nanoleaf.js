const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

        const Member = message.member
        if(!Member) return message.channel.send('⛔ **|** Persoon niet gevonden!')
    
        let role2 = message.guild.roles.cache.find(r => r.name.toLowerCase() === '995245864903782460995245864903782460')
        await Member.roles.add(role2)
        message.channel.send(`${Member.displayName} heeft succesvol de NanoLeaf XP actie geclaimed!`)
    }

module.exports.help = {
    name: "nanoleafxsnwy",
    description: "Ban iemand",
    category: "Algemeen"
}