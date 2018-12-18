const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setTitle("Roblox Links")
  .setDescription('')
  .setColor(0x00ffff)
  .addField("**:large_orange_diamond: Roblox General Links**", `Home : https://www.roblox.com/home \nGames : https://www.roblox.com/games \nCatalog : https://www.roblox.com/catalog/ \nDevelop https://www.roblox.com/develop `)
  .addField("**:spy: Roblox Hidden Links**", `Promocodes : https://www.roblox.com/promocodes \nToyCodes : https://www.roblox.com/toys/redeem \nReedem Roblox Card : https://www.roblox.com/gamecards/redeem `)
  .addField("**:desktop: Roblox Others Links**", "Trade : https://www.roblox.com/my/money.aspx#/#TradeItems_tab \nBuildersClub : https://www.roblox.com/premium/membership \nRobux : https://www.roblox.com/upgrades/robux?ctx=navpopover \nAvatar : https://www.roblox.com/my/avatar \nFriend : https://www.roblox.com/users/friends#!/friends")
  .addField("**:robot: Creator**", " <@517361350704365590> | Roblox Link : https://www.roblox.com/users/451928341/profile ")
  .setFooter('')
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
  aliases: ['roblox', 'roblox links'],
  permLevel: 0
};

exports.help = {
  name: 'roblox',
  description: 'Shows Roblox Links',
  usage: 'roblox'
};
