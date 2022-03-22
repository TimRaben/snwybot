const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    const options = [
        {
            label: "TikTok Ping",
            value: "846020487732658236"
        },
        {
            label: "Updates Ping",
            value: "846020697209831434"
        },
        {
            label: "Mededelingen Ping",
            value: "945245835766145044"
        },
        {
            label: "Poll Ping",
            value: "887718264963235850"
        },
        {
            label: "Youtube Ping",
            value: "896423576876486657"
        },
        {
            label: "Instagram Ping",
            value: "945243141815042068"
        },
        {
            label: "Sollicitaties Ping",
            value: "945245734284976168"
        },
        {
            label: "Giveaways Ping",
            value: "896425147270041612"
        }
    ];

    const row = new discord.MessageActionRow()
    .addComponents(
        new discord.MessageSelectMenu()
            .setCustomId("roles")
            .setMinValues(0)
            .setMaxValues(7)
            .setPlaceholder("Selecteer een Rol...")
            .addOptions(options)
    );

    return message.channel.send({content: "Selecteer hier je ping rol.", components: [row]});

}

module.exports.help = {
    name: "reaction-roles"
}