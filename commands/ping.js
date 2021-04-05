const { MessageEmbed } = require("discord.js");
const sendError = require("../util/error");
module.exports = {
  info: {
    name: "ping",
    description: "ping",
    usage: "[command]",
    aliases: ["ping", "ms"]
  },

  run: async function(client, message, args) {
    const FetchPing = new MessageEmbed()
                .setColor('#ff0000')
                .setTitle(`Fetching Ping...!`)
            var mess = await message.channel.send(FetchPing)
            
            const DeletedEmbed = new MessageEmbed()
                .setColor('#ff0000')
                
                .setDescription(`${mess.createdTimestamp - message.createdTimestamp}ms.`)

            mess.edit(DeletedEmbed);
    
  },
}