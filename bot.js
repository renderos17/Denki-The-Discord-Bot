var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';
// Initialize Discord Bot
var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});
bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});
bot.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `#`
    if (message.includes('keyzer') || message.includes('Keyzer')){
            bot.sendMessage({
                to: channelID,
                message: '...'
            });
    }
    if (message.includes('alexis') || message.includes('Alexis')){
            bot.sendMessage({
                to: channelID,
                message: 'Daddy?'
            });
    }
        if (message.includes('danyar') || message.includes('Danyar')){
            bot.sendMessage({
                to: channelID,
                message: 'Wheres the pirate team?'
            });
    }
    if (message.substring(0, 1) == '$') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
       
        args = args.splice(1);
        switch(cmd) {
            // !ping
            case 'ping':
                bot.sendMessage({
                    to: channelID,
                    message: 'Pong!'
                });
            break;
            case 'meat':
                bot.sendMessage({
                    to: channelID,
                    message: 'You should watch mateus stream!'
                });
                bot.sendMessage({
                    to: channelID,
                    message: 'https://www.twitch.tv/meateus'
                });
            break;
	    case 'rythm':
                bot.sendMessage({
                    to: channelID,
                    message: 'Oh, Rythm? Yeah, he's okay I guess. Not as cool as my creator. And definitely not as cool as danyar.'
                });
            break;
            case 'alooksis':
                bot.sendMessage({
                    to: channelID,
                    message: 'Come watch Alexis stream!'
                });
                bot.sendMessage({
                    to: channelID,
                    message: 'https://www.twitch.tv/renderos_17'
                });
            break;
            case 'help':
                bot.sendMessage({
                    to: channelID,
                    message: 'Pfft, help? What kind of bot do you think I am?'
                }); 
                bot.sendMessage({
                    to: channelID,
                    message: 'If you were looking for Rythm, try using "!" instead of "$".'
                });
                bot.sendMessage({
                    to: channelID,
                    message: 'List of commands: "ping", "meat", "alooksis", "help", "clever", "recyclerush", "civilwar", "vexvideo", "powerup", "alexis", "hockeyjerseys", "katana", "imsorrydenki", "screech".'
                });
            break;
            case 'clever':
                bot.sendMessage({
                    to: channelID,
                    message: 'Initializing higher thinking...'
                });
                 bot.sendMessage({
                    to: channelID,
                    message: 'Putting on my glasses...'
                });
                bot.sendMessage({
                    to: channelID,
                    message: 'Sweeping up the bugs...'
                });
                bot.sendMessage({
                    to: channelID,
                    message: 'Greetings, I am Denki.'
                });
            break;
            case 'recyclerush':
                bot.sendMessage({
                    to: channelID,
                    message: 'https://i.imgur.com/bYDhFbQ.jpg'
                });
            break;
            case 'civilwar':
                bot.sendMessage({
                    to: channelID,
                    message: 'https://i.imgur.com/sd5OO1Q.jpg'
                });
            break;
            case 'vexvideo':
                bot.sendMessage({
                    to: channelID,
                    message: 'Check out the latest VEX Video by Alexis! https://youtu.be/LgbIsyNYmNQ'
                });
            break;
            case 'powerup':
                bot.sendMessage({
                    to: channelID,
                    message: 'https://i.imgur.com/h9TUEUX.jpg'
                });
            break;
            case 'alexis':
            	bot.sendMessage({
            		to: channelID,
            		message: 'I know that guy! :flowerboy: He made me!'
            	});
            break;
            case 'hockeyjerseys':
                bot.sendMessage({
                    to: channelID,
                    message: 'You should check out the new hockey jersey designs Alexis made!'
                });
            break;
            case 'katana':
                bot.sendMessage({
                    to: channelID,
                    message: 'It looks like Keyzer is going to make another Katana. ohboy.'
                });
            break;
            case 'imsorrydenki':
                bot.sendMessage({
                    to: channelID,
                    message: 'Its okay. No worries :)'
                });
            break;
            case 'screech':
                bot.sendMessage({
                    to: channelID,
                    message: '*keyeztisic screeching*'
                });
                bot.sendMessage({
                    to: channelID,
                    message: 'https://cdn.discordapp.com/attachments/380230187431886870/424262304436322305/PicsArt_03-16-12.46.44.jpg'
                });
            break;
            case 'sleepytime':
                bot.sendMessage({
                    to: channelID,
                    message: 'Sleep tight!'
                });
            break;
            case 'despair':
                bot.sendMessage({
                    to: channelID,
                    message: 'https://i.imgur.com/b0cLR3J.gifv'
                });
            break;

         }
     }
});