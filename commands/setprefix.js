const prefixModel = require("../models/prefix")
const { MessageEmbed } = require("discord.js");
const sendError = require("../util/error");
module.exports = {
  info: {
    name: "setprefix",
    description: "Set your custom prefix (Still on deveploment not working)",
    usage: "[command]",
    aliases: ["Prefix"]
  },

  run: async function(client, message, args) {

    const prize = message.content.split(' ').slice(1).join(' ');
        const data = await prefixModel.findOne({
            GuildID: message.guild.id
        });

        const Failembed = new Discord.MessageEmbed()
            .setTitle('You need to provide a new prefix.')
            .setFooter(`Prefix ${prefix} || This command is created by DennisonungDev#0001 `);

        if (!args[0]) return message.channel.send(Failembed);

        const under5embed = new Discord.MessageEmbed()
            .setTitle('Prefixes must be under **5** characters.')
            .setFooter(`Prefix ${prefix} || This command is created by DennisonungDev#0001 `);

        if (args[0].length > 5) return message.channel.send(under5embed)


        if (data) {
            await prefixModel.findOneAndRemove({
                GuildID: message.guild.id
            })
            const newembed = new Discord.MessageEmbed()
                .setTitle(`Your new prefix is now \`${prize}\`.`)
                .setFooter(`Prefix ${prize} || This command is created by DennisonungDev#0001`);


            message.channel.send(newembed);

            let newData = new prefixModel({
                Prefix: args[0],
                GuildID: message.guild.id
            })

            newData.save();
        } else if (!data) {
           const newembed = new Discord.MessageEmbed()
                .setTitle(`Your new prefix is now \`${prize}\`.`)
                .setFooter(`Prefix ${prize} || This command is created by DennisonungDev#00011`);


            let newData = new prefixModel({
                Prefix: args[0],
                GuildID: message.guild.id
            })
            newData.save();
            
            message.channel.send(newembed);
        }
  },
}