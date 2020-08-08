const Discord = require('discord.js');
const client = new Discord.Client();
const { prefix, token } = require('./config.json');
// cversion = current version
const cversion = '0.2.1';
// Embed - help
const help = new Discord.MessageEmbed()
	.setColor('#8cc5de')
	.setTitle('Help - Commands')
	.setAuthor('Wyra', 'https://imgur.com/gwXb6rM.png')
	.setDescription('If you need help with a specific you can use `+[command] help`.\nExample: `+info help`')
	.addField(':blue_book:General', '`info`', true)
	.addField(':closed_book:Ranks', '`rank`', true)
	.setTimestamp()
	.setFooter('I hope this was helpfull! :D');
// Embed - rank
const rank = new Discord.MessageEmbed()
	.setColor('#e02626')
	.setTitle('Some title')
	.setURL('https://discord.js.org/')
	.setAuthor('Some name', 'https://i.imgur.com/wSTFkRM.png', 'https://discord.js.org')
	.setDescription('Some description here')
	.setThumbnail('https://i.imgur.com/wSTFkRM.png')
	.addFields(
		{ name: 'Regular field title', value: 'Some value here' },
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Inline field title', value: 'Some value here', inline: true },
		{ name: 'Inline field title', value: 'Some value here', inline: true },
	)
	.addField('Inline field title', 'Some value here', true)
	.setImage('https://i.imgur.com/wSTFkRM.png')
	.setTimestamp()
	.setFooter('You got this! :D');
// Embed - help
const infohelp = new Discord.MessageEmbed()
	.setColor('#8cc5de')
	.setTitle('Help - Info')
	.setAuthor('Wyra', 'https://imgur.com/gwXb6rM.png')
	.addField(':blue_book:General', '`version` `wyra` `devs`', true)
	.setTimestamp()
	.setFooter('I hope this was helpfull! :D');
// Embed - info devs
const infodevs = new Discord.MessageEmbed()
	.setColor('#8cc5de')
	.setTitle('My Creators')
	.setAuthor('Wyra', 'https://imgur.com/gwXb6rM.png')
	.addField(':computer:Head Coding', '`ChromeFuzz`', true)
	.addField(':wrench:Debuggers', '`Dainjer20` `Hollow Harkov` `Leaf` `Thomas316125`', true)
	.setTimestamp()
	.setFooter('They are pretty cool :D');
// Example Embed
const exampleEmbed = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle('Some title')
	.setURL('https://discord.js.org/')
	.setAuthor('Some name', 'https://i.imgur.com/wSTFkRM.png', 'https://discord.js.org')
	.setDescription('Some description here')
	.setThumbnail('https://i.imgur.com/wSTFkRM.png')
	.addFields(
		{ name: 'Regular field title', value: 'Some value here' },
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Inline field title', value: 'Some value here', inline: true },
		{ name: 'Inline field title', value: 'Some value here', inline: true },
	)
	.addField('Inline field title', 'Some value here', true)
	.setImage('https://i.imgur.com/wSTFkRM.png')
	.setTimestamp()
	.setFooter('Some footer text here', 'https://i.imgur.com/wSTFkRM.png');
// Startup
client.once('ready', () => {
	console.log('Hey, I am running!');
});

client.on('message', message => {
	// Command - help
	if(message.content === `${prefix}help`) {
		message.channel.send(help);
	}
	// Command - info
	else if (message.content === `${prefix}info`) {
		message.channel.send('Oh, if you are looking for information you can use `+info help` to see what I have information on!\n:D');
		if(arguments[1] === 'help') {
			message.channel.send(infohelp);
		}
	}
	// Command - info version
	else if (message.content === `${prefix}info version`) {
		message.channel.send('I am version `' + cversion + '`! My team is working on making that number higher :D');
	}
	// Command - info wyra
	else if (message.content === `${prefix}info wyra`) {
		message.channel.send('Hello, I am Wyra! I have been made to keep track of your message count and give you a rank based on how active you are!\n:D');
	}
	// Command - info devs
	else if (message.content === `${prefix}info devs`) {
		message.channel.send(infodevs);
	}
	// Log: User message
	console.log(message.author.username + ': ' + message.content);
});

client.login(token);