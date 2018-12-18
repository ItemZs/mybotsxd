const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setTitle("Commands")
  .setDescription('')
  .setColor(0x00ffff)
.addField("**:joy: Funny Commands:**", `>oof = Funny OOF Command c; \n>frame : Show All Discord Frame. \n>mypp = Send Your PP \n>roblox = Send All Roblox Links. \n>oofking = Do u want to kingoof? \n>serverinfo = Provides Information About the Server. `)
  .addField("**:warning: Staff Commands**", `>ban = Ban User. \n>kick  = Kick User \n>mute = Mute User.  \n>warn = Warn User. `)
  .addField("**:desktop: General Commands**", ">help = Shows All Commands. \n>serverinfo = Provides Information About the Server. \n>invite = Add Bot in Your Server. ")
  .addField("**:robot: Creator**", " <@517361350704365590> ")
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    message.channel.send(embedyardim);
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.author.send('asciidoc', `= ${command.help.name} = \n${command.help.description}\nCorrect usage: ` + prefix + `${command.help.usage}`);
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h', 'halp', 'help', 'y'],
  permLevel: 0
};

exports.help = {
  name: 'help',
  description: 'Shows All Commands.',
  usage: 'help [command]'
};
