const Discord = require('discord.js');
exports.run = (client, message, args) => {

  if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor(0xFF0000)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField(':warning: **OOF** :warning:', '`mute` cant working dm****')
  return message.author.sendEmbed(ozelmesajuyari); }
  let guild = message.guild
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  let modlog = guild.channels.find('name', 'oof-log');
  let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
  if (!modlog) return message.reply('**Where is** `oof-log`').catch(console.error);
  if (!muteRole) return message.reply('**I Cant Found** `Muted` **Role!**').catch(console.error);
  if (reason.length < 1) return message.reply('Please write down the reason example : >mute @tag#2018 reason').catch(console.error);
  if (message.mentions.users.size < 1) return message.reply('**who ? example : >warn @tag#2018 reason**').catch(console.error);
  const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .addField('OOF', 'Mute!')
    .addField('Muted User:', `${user.username}#${user.discriminator} (${user.id})`)
    .addField('Staff:', `${message.author.username}#${message.author.discriminator}`)
    .addField('Reason:', reason);

  if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('I dont have the necessary permissions.').catch(console.error);

  if (message.guild.member(user).roles.has(muteRole.id)) {
    message.guild.member(user).removeRole(muteRole).then(() => {
      guild.channels.get(modlog.id).sendEmbed(embed).catch(console.error);
    });
  } else {
    message.guild.member(user).addRole(muteRole).then(() => {
      guild.channels.get(modlog.id).sendEmbed(embed).catch(console.error);
    });
  }

};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'mute',
  description: 'mute user.',
  usage: 'mute [user] [reason]'
};
