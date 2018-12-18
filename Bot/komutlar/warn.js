const Discord = require('discord.js');
exports.run = (client, message, args) => {

  if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor(0xFF0000)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField(':warning: OOF :warning:', '`warn` cant working dm')
  return message.author.sendEmbed(ozelmesajuyari); }
  let guild = message.guild
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  let modlog = guild.channels.find('name', 'oof-log');
  if (!modlog) return message.reply('Where is `oof-log` ?');
  if (reason.length < 1) return message.reply('Please write down the reason example : >warn @tag#2018 reason');
  if (message.mentions.users.size < 1) return message.reply('who ? example : >warn @tag#2018 reason').catch(console.error);
  const embed = new Discord.RichEmbed()
  .setColor(0x00AE86)
  .setTimestamp()
  .addField('OOF', 'Warn')
  .addField('User:', `${user.username}#${user.discriminator}`)
  .addField('Staff:', `${message.author.username}#${message.author.discriminator}`)
  .addField('Reason:', reason);
  return guild.channels.get(modlog.id).sendEmbed(embed);

};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'warn',
  description: 'warning user',
  usage: 'warn [user] [reason]'
};
