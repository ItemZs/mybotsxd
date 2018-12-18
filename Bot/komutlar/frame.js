const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setTitle("Commands")
  .setDescription('')
  .setColor(0x00ffff)
.addField("**:rotating_light: Discord Frame's:**", `>hypesquad : Hypesquad Frame \n>nitro : Nitro Frame \n>balance : Balance Frame \n>brilliance : Brilliance Frame \n>bravery : Bravery Frame \n>partners : Partners Frame `)
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
  aliases: ['frame'],
  permLevel: 0
};

exports.help = {
  name: 'frame',
  description: 'All Discord Frame',
  usage: 'frame'
};
