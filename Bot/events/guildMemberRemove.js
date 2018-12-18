module.exports = member => {
  let guild = member.guild;
  member.send('By!');
  guild.defaultChannel.send(`BY! ${member.user.username} `);
};
