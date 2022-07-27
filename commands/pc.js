const discord = require("discord.js");

module.exports.run = async (client, message, args) => {


        var args = args[0];

        if (args === "500") {

                var antwoordGoed = new discord.MessageEmbed()
                    .setTitle("test")
                    .setColor("GREEN")
                    .setField("test", "test");

                message.channel.send(antwoordGoed);
                message.channel.bulkDelete(1);


            

        }




} 






module.exports.help = {
    name: "linkjespc"
}

