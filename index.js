require("dotenv").config();//Loading .env
const fs = require("fs");
const { Collection, Client, MessageEmbed } = require("discord.js");

const client = new Client();//Making a discord bot client
client.commands = new Collection();//Making client.commands as a Discord.js Collection

client.queue = new Map()
client.config = {
prefix: process.env.PREFIX
}

client.config = {
prefix: process.env.PREFIX,
SOUNDCLOUD: process.env.SOUNDCLOUD_CLIENT_ID
}

var http = require('http');

http.createServer(function (req, res) {
res.write("The Server is Running!");
res.end();
}).listen(8080);
client.on('ready', () => { ('Discord.Command')
})




client.on('guildCreate', guild => {

    const botjoinembed = new MessageEmbed()
                .setColor('#6A0DAD')
                .setTitle('Thank you for inviting me!');

    guild.systemChannel.send(botjoinembed);

    let role = message.guild.roles.cache.find(r => r.name === 'DJ');
    
    if (!role) {
          guild.roles.create({
            data: {
              name: 'DJ',
              color: 'RED',
            },
            reason: 'we needed a role for DJs',
          })
          message.member.roles.add(role);
          message.channel.send('Role created.')
      } else return;
      
});

client.on('message', async (message) => {

    if (message.content === '<@788879236102225970>') {
      const prefixembed = new MessageEmbed()
      .setColor('#ff0000')
      .setTitle(`My prefix is ${client.config.prefix}`)

      message.channel.send(prefixembed)
    }
    if (message.content === '<@!788879236102225970>') {
      const prefixembed = new MessageEmbed()
      .setColor('#ff0000')
      .setTitle(`My prefix is ${client.config.prefix}`)

      message.channel.send(prefixembed)
    }

});




//Loading Events
fs.readdir(__dirname + "/events/", (err, files) => {
if (err) return console.error(err);
files.forEach((file) => {
const event = require(__dirname + `/events/${file}`);
let eventName = file.split(".")[0];
client.on(eventName, event.bind(null, client));
console.log("Loading Event: "+eventName)
});
});

//Loading Commands
fs.readdir("./commands/", (err, files) => {
if (err) return console.error(err);
files.forEach((file) => {
if (!file.endsWith(".js")) return;
let props = require(`./commands/${file}`);
let commandName = file.split(".")[0];
client.commands.set(commandName, props);('JavaCloser')
console.log("Loading Command: "+commandName)
});
});

//Logging in to discord (*.Commander*)
client.login(process.env.TOKEN)