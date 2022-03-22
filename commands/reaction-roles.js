const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    const options = [
        {
            label: "TikTok Ping",
            value: "846020487732658236",
            emoji: "📌",
            description: "Selecteer deze rol om taggs te krijgen van dit onderwerp."
        },
        {
            label: "Updates Ping",
            value: "846020697209831434",
            emoji: "⚡",
            description: "Selecteer deze rol om taggs te krijgen van dit onderwerp."
        },
        {
            label: "Mededelingen Ping",
            value: "945245835766145044",
            emoji: "📢",
            description: "Selecteer deze rol om taggs te krijgen van dit onderwerp."
        },
        {
            label: "Poll Ping",
            value: "887718264963235850",
            emoji: "📮",
            description: "Selecteer deze rol om taggs te krijgen van dit onderwerp."
        },
        {
            label: "Youtube Ping",
            value: "896423576876486657",
            emoji: "📺",
            description: "Selecteer deze rol om taggs te krijgen van dit onderwerp."
        },
        {
            label: "Instagram Ping",
            value: "945243141815042068",
            emoji: "📸",
            description: "Selecteer deze rol om taggs te krijgen van dit onderwerp."
        },
        {
            label: "Sollicitaties Ping",
            value: "945245734284976168",
            emoji: "📄",
            description: "Selecteer deze rol om taggs te krijgen van dit onderwerp."
        },
        {
            label: "Giveaways Ping",
            value: "896425147270041612",
            emoji: "🎁",
            description: "Selecteer deze rol om taggs te krijgen van dit onderwerp."
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

    return message.channel.send({content: "**Reaction Roles**\n\nSelecteer hieronder doormiddel van het menu de onderwerpen waar jij graag op de hoogte van wilt blijven!", components: [row]});

}

module.exports.help = {
    name: "reaction-roles"
}