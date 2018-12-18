module.exports = member => {
    let username = member.user.username;
    member.send('Hi! **' + username + '**!');
    member.guild.defaultChannel.send('Hi! '+username+'');
};
