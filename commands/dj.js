const { MessageEmbed } = require("discord.js");
const sendError = require("../util/error");
module.exports = {
  info: {
    name: "dj",
    description: "to change the DJ ROLE",
    usage: "[djrole]",
    aliases: ["role", "djr", "djrole"]
  },

  run: async function(client, message, args) {
    let role = message.guild.roles.cache.find(r => r.name === 'DJ');
      if (!role) {
        if(message.member.hasPermission('MANAGE_ROLES')){
          message.guild.roles.create({
            data: {
              name: 'DJ',
              color: 'RED',
            },
            reason: 'we needed a role for DJs',
          })
          message.member.roles.add(role);
          message.channel.send('Role created.')
        } 
      } else {
        message.channel.send('Role already exist.')
      }
    
  },
}