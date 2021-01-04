exports.run = async (client, message) => {
  if (message.author.id != "SAHİP İD YAZ") return message.reply('Bunu Yapmak İçin Bir sahip Olmalısın kanka.');
  if(message.author.bot || message.channel.type === "dm") return;
    if (!message.member.voiceChannel) { return message.channel.send("Zaten Kanalda değilim?"); }
  
    message.member.voiceChannel.leave();
    return message.channel.send(`Kanaldan Ayrıldım`);
  };
  
  exports.conf = {
    enabled: true,

    aliases: [],
    permLevel: 0,
  };
  
  exports.help = {
    name: "lv",
    description: "Bulunduğu odadan gider.",
    usage: "çık",

  };