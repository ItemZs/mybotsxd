const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message, args) => {
  if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor(0xFF0000)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField(':warning: OOF :warning:', '`ban` cant working dm')
  return message.author.sendEmbed(ozelmesajuyari); }
  let guild = message.guild
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  let modlog = guild.channels.find('name', 'oof-log');
  if (!modlog) return message.reply('Where is `oof-log` ?');
  if (reason.length < 1) return message.reply('Please write down the reason example : >ban @tag#2018 reason');
  if (message.mentions.users.size < 1) return message.reply('who ? example : >ban @tag#2018 reason').catch(console.error);

  if (!message.guild.member(user).bannable) return message.reply('I Cant Ban Staff');
  message.guild.ban(user, 2);

  const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .addField('Ban')
    .addField('User:', `${user.username}#${user.discriminator} (${user.id})`)
    .addField('Staff:', `${message.author.username}#${message.author.discriminator}`)
    .addField('Reason', reason);
  return guild.channels.get(modlog.id).sendEmbed(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'ban',
  description: 'oof-ban_machine',
  usage: 'ban [user] [reason]'
};
