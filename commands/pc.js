const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    var categoryID = "996332158627106866";

    var unbanUser = message.guild.member(message.mentions.users.first());

    if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply(":x: **||** Jij bent niet gemachtigd om een beoordeling te geven.") && message.delete();

    if (!unbanUser) return message.reply(":x: **||** Geef een geldig persoon op.") && message.delete();

        var args = args[0];

        if (args === "500") {

                var antwoordGoed = new discord.MessageEmbed()
                    .setTitle("test")
                    .setColor("test")
                    .setDis("test", "test");

                message.channel.send(antwoordGoed);
                message.channel.bulkDelete(1);


            

        } else if (emoji === "❌") {

            message.channel.send(redenEmbed).then(msg => msg.delete({ timeout: 10000 }));

            message.channel.awaitMessages(filter, {max:1, time: 10000}).then(collected => { 

                var redenslecht = collected.first();

                var antwoordAf = new discord.MessageEmbed()
                    .setTitle("Afgewezen")
                    .setColor("GREEN")
                    .addField("Wie:", `${unbanUser}`, false)
                    .addField("Reden:", `${redenslecht}`, false);

                message.channek.send(`${unbanUser}`)
                message.channel.send(antwoordAf);
                message.channel.bulkDelete(1);
                message.channel.setTopic(`**Persoon**: ${unbanUser} **Status**: Afgewezen `);


            })

        }




} 




async function promptMessage(message, author, time, reactions) {
    time *=1000;

    for (const reaction of reactions) {
        await message.react(reaction);
    }

    const filter = (reaction, user) => reactions.includes(reaction.emoji.name) && user.id === author.id;

    return message.awaitReactions(filter, { max: 1, time: time }).then(collected => collected.first() && collected.first().emoji.name);

}



module.exports.help = {
    name: "uitslag"
}

