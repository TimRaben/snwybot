const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    const options = [
        {
            label: "TikTok Ping",
            value: "846020487732658236"
        },
        {
            label: "Updates Ping",
            value: "846020487732658236"
        },
        {
            label: "Mededelingen Ping",
            value: "846020487732658236"
        },
        {
            label: "Poll Ping",
            value: "846020487732658236"
        },
        {
            label: "Youtube Ping",
            value: "846020487732658236"
        },
        {
            label: "Instagram Ping",
            value: "846020487732658236"
        },
        {
            label: "Sollicitaties Ping",
            value: "846020487732658236"
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