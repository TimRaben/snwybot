const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    const options = [
        {
            label: "TikTok Ping",
            value: "846020487732658236",
            emoji: "📌",
            description: "Selecteer deze Rol om bij elke nieuwe video een ping te ontvangen."
        },
        {
            label: "Updates Ping",
            value: "846020697209831434",
            emoji: "⚡",
            description: "Selecteer deze Rol om op de hoogte te blijven van alle updates."
        },
        {
            label: "Mededelingen Ping",
            value: "945245835766145044",
            emoji: "📢",
            description: "Selecteer deze Rol om op de hoogte te blijven van elke nieuwe mededeling."
        },
        {
            label: "Poll Ping",
            value: "887718264963235850",
            emoji: "📮",
            description: "Selecteer deze Rol om een melding te ontvangen bij elke nieuwe Poll."
        },
        {
            label: "Youtube Ping",
            value: "896423576876486657",
            emoji: "📺",
            description: "Selecteer deze Rol om op de hoogte te blijven van de Youtube Uploads."
        },
        {
            label: "Instagram Ping",
            value: "945243141815042068",
            emoji: "📸",
            description: "Selecteer deze Rol om een tag te krijgen van instagram posts."
        },
        {
            label: "Sollicitaties Ping",
            value: "945245734284976168",
            emoji: "📄",
            description: "Selecteer deze Rol om op te hoogte te blijven van alle vacatures."
        },
        {
            label: "Giveaways Ping",
            value: "896425147270041612",
            emoji: "🎁",
            description: "Selecteer deze Rol om op de hoogte te blijven van alle Giveaways."
        }
    ];

    const row = new discord.MessageActionRow()
    .addComponents(
        new discord.MessageSelectMenu()
            .setCustomId("roles")
            .setMinValues(0)
            .setMaxValues(8)
            .setPlaceholder("Selecteer een Rol...")
            .addOptions(options)
    );

    return message.channel.send({content: "**Reaction Roles**\n\nSelecteer hieronder doormiddel van het menu de onderwerpen waar jij graag op de hoogte van wilt blijven!\n ", components: [row]});

}

module.exports.help = {
    name: "reaction-roles"
}