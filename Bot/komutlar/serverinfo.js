const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {

	if (!message.guild) {
    const ozelmesajuyari = new Discord.RichEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField(':warning: OOF :warning:', '`serverinfo` Cant working dm')
    return message.author.sendEmbed(ozelmesajuyari); }
    if (message.channel.type !== 'dm') {
      const sunucubilgi = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setAuthor(message.guild.name, message.guild.iconURL)
    .addField('Server Name:', message.guild.name)
    .addField('ID', message.guild.id)
    .addField('Default Channel:', message.guild.defaultChannel)
    .addField('Region:', message.guild.region)
    .addField('Member Number:', message.guild.memberCount)
    .addField('Owner:', message.guild.owner + ' (' + message.guild.ownerID + ')')
    .addField('Channel Number:', message.guild.channels.size)
    .addField('Created At:', message.guild.createdAt)
    return message.channel.sendEmbed(sunucubilgi);
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['serverinfo'],
  permLevel: 0
};

exports.help = {
  name: 'serverinfo',
  description: 'serverinfo.',
  usage: 'serverinfo'
};
