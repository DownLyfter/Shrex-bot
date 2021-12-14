const Discord = require('discord.js');
const {
  prefix,
  token,
  version,
  status69
} = require('./config.json');
const client = new Discord.Client();
const ytdl = require("ytdl-core")
const random = require('random');
const fs = require('fs');
const jsonfile = require('jsonfile');
const { ENGINE_METHOD_PKEY_ASN1_METHS } = require('constants');
const { isObject } = require('util');
const { validateID } = require('ytdl-core');
const { measureMemory } = require('vm');
const lvl1 = '713601163945050122'
const lvl5 = '716374528980156426'
const lvl10 = '716375953369989121'
const lvl15 = '716856735742296164'
const lvl20 = '747195951734718525'
const lvl25 = '747602304097583194'
const lvl30 = '750014250088529991'
const lvl35 = '750014733251510365'
const lvl40 = '750015064676892805'
const lvl45 = '750042839311712336'
const lvl50 = '750043053175078985'
const lvl55 = '750043163384741928'
const lvl60 = '753728224533676043'
const lvl69 = '750045817678725150'
const lvl75 = '752288461221789736'
const lvl80 = '752288649709617162'
const lvl90 = '754520701247160350'
const lvl100= '754520882256543876'
const lvl150= '750851184704749609'
const lvl200= '754521218887057471'
const lvl250= '754521416577187911'
const lvl300= '754521958510493746'
const lvl350= '754522103549657170'
const lvl400= '754522239180734464'
const lvl450= '754522328213225483'
const lvl500= '754522455418077255'
const lvl550= '754522707152076820'
const lvl600= '754522772142555137'
const lvl650= '754901163400495186'
const lvl700= '754901164859981824'
const lvl750= '754899996096069752'
const lvl800= '754900090338148464'
const lvl850= '754900106859511928'
const lvl900= '754900110005108737'
const lvl950= '754900111376515103'
const lvl1000= '754900892347793529'
const lvl2000 = '754862791029948427'
const mutedrole = '716714982661947422'
const lvl5000 = '768637237122039808'
const lvl100000 = '768637414737969152'
var stats = {};
if (fs.existsSync('stats.json')) {
  stats = jsonfile.readFileSync('stats.json');
}
function formatNumber(num) {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

client.on('guildMemberAdd', member => {
  console.log('User ' + member.user.username + 'has join ther server!')

  var role = member.guild.roles.resolve("798469308543402025");
  member.roles.add(role);
});

client.on('ready', () => {
  console.log('Shallah box is online');
  client.user.setActivity(status69, {
    type: 'WATCHING'
  }).catch(console.error);
})

var server = {};


client.login(token);
// Messages Below 
client.on('message', message => {
  if (message.channel.id === '713597570630418443') return
  var ShallahBoxGainChance = random.int(1, 100)
  var ShallahCoinsChancerandom = random.int(1, 50)
  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();
  if (message.author.id == client.user.id)
    return;

  if (message.guild.id in stats === false) {
    stats[message.guild.id] = {};
  }



  const guildstats = stats[message.guild.id];
  const temptemptemp =Date.now() - 999000000
  if (message.author.id in guildstats === false) {
    guildstats[message.author.id] = {
      xp: 0,
      level: 1,
      last_message: 0,
      Shallahcoins: 0,
      LastDaily: 0,
      DailyCooldown: temptemptemp,
      ShallahBoxes: 0,
      T2Shallahboxes: 0,
      T3Shallahboxes: 0,
      DailyStreak: 0,
      bank: 0,
      lastdailyamount: 15,
      lastbankdeposit: 0,
      race: 'unspecified',
      messageamount: 0,
      nwordcounter: 0,
    };
  }

  if (message.guild.id in guildstats === false) {
    guildstats[message.guild.id] = { 
      level: 0,
      levelname: 'temp',
      DailyStreak2: 0,
      DailyStreak2name: 'temp',
      Shallahcoins: 0,
      Shallahcoinsname: 'temp',
    }
  }
  const guildleaderboard = guildstats[message.guild.id]
  const userStats = guildstats[message.author.id]
  if (Date.now() - userStats.last_message > 60000) {
    userStats.xp += random.int(15, 25);
    userStats.last_message = Date.now();
    var XPToNextLevel = 150*userStats.level
    jsonfile.writeFileSync('stats.json', stats)
    console.log(message.author.username + ' now has ' + userStats.xp + ' Xp');
    console.log(XPToNextLevel + ' XP needed for next level');
  }
  userStats.messageamount ++  
  jsonfile.writeFileSync('stats.json', stats)
  if (typeof userStats.ShallahBoxes === 'string') userStats.T2Shallahboxes = parseInt(userStats.ShallahBoxes)
  if (ShallahBoxGainChance === 1) {
    if (message.channel.id === '787125083595735050') {
    } else
    userStats.ShallahBoxes += 1
    message.reply(message.author.username + ' you have been blessed with a Shallah box!')
  }
  if (userStats.DailyCooldown >= 0 === false) userStats.DailyCooldown = Date.now() - 86400000
  jsonfile.writeFileSync('stats.json', stats)
  if (command === 'nuke') {
    if (!message.member.roles.cache.find(r => r.name === "Admin")) return message.reply('You do not have permission')
    const amount = parseInt(args[0]);
    if (isNaN(amount)) return message.reply('that doesn\'t seem to be a valid number.');
    else if (amount < 2 || amount > 100) return message.reply('you need to input a number between 2 and 100.');
    message.channel.bulkDelete(amount, true).catch(err => {
      console.error(err);
     message.reply('there was an error trying to nuke messages in this channel!');
     return
    })
    message.reply('Nuked ' + amount + ' messages.')
  }
  if (message.channel.id === '713598646058221598') { //This is the bot spam channel    
    if (command === 'deposit') {
      if (!args.length) {
        return message.reply('You did not specify an amount')
      }
      const amount = parseInt(args[0]);
      if (isNaN(amount)) return message.reply('that doesn\'t seem to be a valid number.');
      if (amount < 1 || amount > 100000000000) return message.reply('you need to input a number between 1 and 100,00,000,000.');
      var temp = amount - userStats.Shallahcoins
      if (amount > userStats.Shallahcoins) return message.reply('You need ' + temp + ' more Shallah coins to deposit that amount.')
      userStats.Shallahcoins -= amount
      userStats.bank += amount
      userStats.lastbankdeposit = Date.now()
      jsonfile.writeFileSync('stats.json', stats)
     message.reply('You deposited ' + amount + ' Shallah coins and now have ' + userStats.bank + ' Shallah coins in your bank.')
    }
    if (command === 'withdrawal') {
      if (!args.length) return message.reply('You did not specify an amount')
      const amount = parseInt(args[0]);
      if (isNaN(amount)) return message.reply('that doesn\'t seem to be a valid number.');
      if (amount < 1 || amount > 100000000000) return message.reply('you need to input a number between 1 and 100,00,000,000.');
      var withdrawalamount = args[0]
      var withdrawalamount = parseInt(args[0])
      if (withdrawalamount > userStats.bank) {
        var temp = withdrawalamount-userStats.bank
        return message.reply('You need ' + temp + ' more Shallah coins to do that.')
      }
      if (Date.now() - userStats.lastbankdeposit <= 86400000) {
        userStats.bank -= withdrawalamount
        userStats.Shallahcoins += withdrawalamount
        jsonfile.writeFileSync('stats.json', stats)
       message.reply(message.author.username + ' You withdrew ' + withdrawalamount + ' Shallah coins from your bank. You now have ' + userStats.bank + ' Shallah coins in your bank.')
      }
      if (Date.now() - userStats.lastbankdeposit >= 86400000) {
        var withdrawalinterest = withdrawalamount * 0.15
        var withdrawalinterest = Math.round(withdrawalinterest)
        userStats.bank -= withdrawalamount
        var withdrawalamount = withdrawalamount + withdrawalinterest
        userStats.Shallahcoins += withdrawalamount
        var interest = userStats.bank * 0.15
        var interest = Math.round(interest)
        userStats.bank += interest
        userStats.lastbankdeposit = Date.now()
        jsonfile.writeFileSync('stats.json', stats)
       message.reply(message.author.username + ', You withdrew ' + withdrawalamount + ' Shallah coins after 15% interest. You now have ' + userStats.Shallahcoins + ' Shallah coins and ' + userStats.bank + ' Shallah coins in the bank.')
      }
    }
 
    if (message.content === 'Shallah open T3 Shallah box' || message.content === 'Shallah open T3 Shallah box' || message.content === 'Shallah open t3 Shallah box' || message.content === 'Shallah open T3 Shallah box') {
      if (userStats.T3Shallahboxes >= 1 === false) {
       message.reply('You do not have any T3 Shallah boxes.')
      }
      if (userStats.T3Shallahboxes >= 1) {
        userStats.T3Shallahboxes--
        jsonfile.writeFileSync('stats.json', stats)
        var T3ShallahboxChance = random.int(1, 10)
        if (T3ShallahboxChance == 1 || T3ShallahboxChance == 2 || T3ShallahboxChance == 3 || T3ShallahboxChance == 4) {
          userStats.Shallahcoins += 10000
          jsonfile.writeFileSync('stats.json', stats)
         message.reply('You found 10000 Shallah coins in the T3 Shallah box. You now have ' + userStats.Shallahcoins + ' Shallah coins!')
        }
        if (T3ShallahboxChance == 5 || T3ShallahboxChance == 6) {
          userStats.xp += 1000
          jsonfile.writeFileSync('stats.json', stats)
          message.reply('you found 1000 xp in the T2 Shallah box. You now have ' + userStats.xp + ' xp!')
        }
        if (T3ShallahboxChance == 7 || T3ShallahboxChance == 8) {
          userStats.T3Shallahboxes++
          userStats.T3Shallahboxes++
          jsonfile.writeFileSync('stats.json', stats)
         message.reply('You found 2 T3 Shallah box in the T3 Shallah box. You now have ' + userStats.T3Shallahboxes + ' T3 Shallah box.')
        }
        if (T3ShallahboxChance == 9 || T3ShallahboxChance == 10) {
          userStats.Shallahcoins += 5000
          jsonfile.writeFileSync('stats.json', stats)
         message.reply('You found 5000 Shallah coins in the T3 Shallah box. You now have ' + userStats.Shallahcoins + ' Shallah coins')
        }
      }
    }
    if (message.content === 'Shallah open T2 Shallah box' || message.content === 'Shallah open T2 Shallah box' || message.content === 'Shallah open T2 Shallah box' || message.content === 'Shallah open t2 Shallah box') {
      if (userStats.T2Shallahboxes >= 1 === false) {
       message.reply('You do not have any T2 Shallah boxes to open.')
        return
      }
      if (userStats.T2Shallahboxes >= 1) {
        userStats.T2Shallahboxes -= 1
        jsonfile.writeFileSync('stats.json', stats)
        var t2Shallahboxchance = random.int(1, 10)
        if (t2Shallahboxchance == 1 || t2Shallahboxchance == 2 || t2Shallahboxchance == 3 || t2Shallahboxchance == 4) {
          userStats.Shallahcoins += 500
          jsonfile.writeFileSync('stats.json', stats)
         message.reply('You found 500 Shallah coins in the T2 Shallah box. You have now have ' + userStats.Shallahcoins + ' Shallah coins!')
        }
        if (t2Shallahboxchance == 5 || t2Shallahboxchance == 6 || t2Shallahboxchance == 7) {
          userStats.xp += 500
          jsonfile.writeFileSync('stats.json', stats)
         message.reply('You found 500 xp in the T2 Shallah box. You now have ' + userStats.xp + ' xp!')
        }
        if (t2Shallahboxchance == 8 || t2Shallahboxchance == 9) {
          userStats.Shallahcoins += 1000
          jsonfile.writeFileSync('stats.json', stats)
         message.reply('You found 1000 Shallah coins in the T2 Shallah box. You now have ' + userStats.Shallahcoins + ' Shallah coins!')
        }
        if (t2Shallahboxchance == 10) {
          userStats.T3Shallahboxes += 1
          jsonfile.writeFileSync('stats.json', stats)
         message.reply('You found a T3 Shallah box. You now have ' + userStats.T3Shallahboxes + ' T3 Shallah boxes')
        }
      }
    }
    if (message.content === 'Shallah beg') {
      if (userStats.Shallahcoins <= 1) {
        var begchance = random.int(1, 10)
        if (begchance <= 5) {
          userStats.Shallahcoins += 5
          jsonfile.writeFileSync('stats.json', stats)
         message.reply('here is 5 Shallah coins, now gamble bitch!')
          return;
        }
        if (begchance <= 5 === false) {
         message.reply('No I don\'t have coins to spare .')
          return;
        }
      }
      if (userStats.Shallahcoins <= 1 === false) {
       message.reply('You greesy fuck, you already have ' + userStats.Shallahcoins + ' Shallah coins. You don\'t need anymore.')
      }
    }
    if (message.content === 'Shallah Flip 100') {
      if (userStats.Shallahcoins >= 100) {
        userStats.Shallahcoins -= 100
        jsonfile.writeFileSync('stats.json', stats)
        var flipchance = random.int(1, 10)
        console.log.flipc
        if (flipchance > 6) {
          userStats.Shallahcoins += 200
          jsonfile.writeFileSync('stats.json', stats)
         message.reply('You won 100 Shallah coins and now have ' + userStats.Shallahcoins + ' Shallah coins')
          return;
        }
        if (flipchance <= 5) {
         message.reply('You lost 100 Shallah coins and now have ' + userStats.Shallahcoins + ' Shallah coins')
          return;
        }
      }
      if (userStats.Shallahcoins >= 100 === false) {
       message.reply('you dont have 100 Shallah Coins')
      }
    }
    if (message.content === 'Shallah Flip all') {
      if (userStats.Shallahcoins > 0 === false) {
       message.reply('You have no Shallah coins retard.')
      }
      if (userStats.Shallahcoins > 0) {
        var flipall = userStats.Shallahcoins
        var flipallchance = random.int(1, 10)
        if (flipallchance >= 5) {
          userStats.Shallahcoins += flipall
          jsonfile.writeFileSync('stats.json', stats)
         message.reply('You doubled your Shallah coins and now have ' + userStats.Shallahcoins)
        }
        if (flipallchance >= 5 === false) {
          userStats.Shallahcoins -= flipall
          jsonfile.writeFileSync('stats.json', stats)
         message.reply('You lost all your Shallah coins.')
        }
      }
    }
    if (message.content === 'Shallah Flip 50') {
      if (userStats.Shallahcoins < 50) {
       message.reply('You don\'t have enough Shallah coins.')
      }
      if (userStats.Shallahcoins >= 50) {
        var FlipChance50 = random.int(1, 10)
        if (FlipChance50 >= 5) {
          userStats.Shallahcoins += 50
          jsonfile.writeFileSync('stats.json', stats)
         message.reply('You won 50 Shallah coins and now have a total of ' + userStats.Shallahcoins + ' Shallah coins')
        }
        if (FlipChance50 >= 5 === false) {
          userStats.Shallahcoins -= 50
          jsonfile.writeFileSync('stats.json', stats)
         message.reply('You lost 50 Shallah coins and now have ' + userStats.Shallahcoins + ' Shallah coins')
        }
      }
    }
    if (message.content === 'Shallah Daily' || message.content === 'Shallah daily' || message.content === 'Shallah daily' || message.content === 'Shallah Daily') {
      if (Date.now() - userStats.DailyCooldown >= 86400000 === false) {
        var temp1 = Date.now() - userStats.DailyCooldown //time since last daily
        var temp2 = 86400000 - temp1 //time until next daily can be used
        var temp3 = temp2 / 60000 //converting miliseconts to minutes
        var temp4 = Math.round(temp3) //rounding to nearest minutes
        var temp5 = temp4 / 60 //converting minutes to hours
        var temp6 = Math.floor(temp5) //rounding hours down
        var temp7 = temp4 - temp6 * 60 //minutes after subtracking hours
        if (temp6 >= 1 === false) {
         message.reply('You must wait ' + temp7 + ' minutes untill you can use daily again.')
        }
        if (temp6 >= 1) {
         message.reply('You must wait ' + temp6 + ' hours and ' + temp7 + ' minutes untill you can use daily again.')
        }
      }
      if (Date.now() - userStats.DailyCooldown >= 86400000) {
        var dailymulti = 0
        if (userStats.DailyStreak >= 1) {
          if (Date.now() - userStats.DailyCooldown >= 172800000) {
           message.reply('You lost your daily streak of ' + userStats.DailyStreak + '! Remember your streak will reset if you do not do a daily in 2 days.')
            userStats.DailyStreak = 0
          }
          if (Date.now() - userStats.DailyCooldown >= 172800000 === false) {
            var dailymulti = userStats.DailyStreak
            var dailymulti = dailymulti*150
            var dailymulti = Math.round(dailymulti / 40)
            if (dailymulti < 1) var dailymulti = 1
            if (isNaN(dailymulti)) var dailymulti = parseInt(dailymulti)
            if (isNaN(dailymulti)) var dailymulti = 1
          }
        }
        var dailymulti1 = userStats.DailyStreak
        if (dailymulti1 >= 1 === false)var dailymulti1 = 1
        var dailyamount = 150*dailymulti1
        var givendailyamount = dailyamount + dailymulti
        userStats.Shallahcoins += givendailyamount
        userStats.DailyStreak += 1
        userStats.DailyCooldown = Date.now()
        userStats.lastdailyamount = givendailyamount
       message.reply(message.author.username + ' you were given ' + givendailyamount + ' Shallah coins and now have a daily streak of ' + userStats.DailyStreak)
      }
      jsonfile.writeFileSync('stats.json', stats)
    }
    if (message.content === 'Shallah open Shallah box') {
      if (userStats.ShallahBoxes >= 1 === false) {
       message.reply('You don\'t have any T1 Shallah boxes to open')
        return;
      }
      if (userStats.ShallahBoxes >= 1) {
        userStats.ShallahBoxes -= 1
        var ShallahboxChance = random.int(1, 10)
        if (ShallahboxChance == 1 || ShallahboxChance == 2 || ShallahboxChance == 3 || ShallahboxChance == 4) {
          userStats.Shallahcoins += 100
          jsonfile.writeFileSync('stats.json', stats)
         message.reply('You found 100 Shallah coins in the T1 Shallah box. You now have ' + userStats.Shallahcoins + ' Shallah coins!')
        }
        if (ShallahboxChance == 5 || ShallahboxChance == 6) {
          userStats.Shallahcoins += 200
          jsonfile.writeFileSync('stats.json', stats)
         message.reply('You found 200 Shallah coins in the T1 Shallah box. You now have ' + userStats.Shallahcoins + ' Shallah coins!')
        }
        if (ShallahboxChance == 7 || ShallahboxChance == 8) {
          userStats.xp += 500
          jsonfile.writeFileSync('stats.json', stats)
         message.reply('You found 500 XP in the T1 Shallah box. You now have ' + userStats.xp + ' XP!')
        }
        if (ShallahboxChance == 9 || ShallahboxChance == 10) {
          userStats.T2Shallahboxes += 1
          jsonfile.writeFileSync('stats.json', stats)
         message.reply('You found a T2 Shallah box. You now have ' + userStats.T2Shallahboxes + ' T2 Shallah boxes')
        }
      }
    }
    if (message.content === 'Shallah boxes') {
     message.reply(userStats.ShallahBoxes)
    }
    if (command === 'shop') {
      const emded1 = new Discord.MessageEmbed()
        .setTitle('Sherx Shop!')
        .addField('Shallah Boxes', '150 Shallah Coins each.')
        .setFooter('This is one Shallahy Shop!')
        .setThumbnail('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FIO5uC2wYaAc%2Fmaxresdefault.jpg&f=1&nofb=1')
     message.reply(emded1);
    }
    if (command === 'set') {
      if (args[0] === 'level') {
        if (message.author.id==='403686706890407946'===false) return message.reply('you are not my creator therefore I shall not do this.')
        if (isNaN(args[1])) return message.reply(args[1] + ', is not a valid number.')
        var levelsadd=args[1]
        var levelsadd=parseInt(levelsadd)
        userStats.level = levelsadd
        jsonfile.writeFileSync('stats.json', stats)
        message.reply(' you now are level ' + userStats.level)
      }
    }
    if (command === 'buy') {
      if (args[1] === 'Shallah'| args[1] === 'Shallah') { //start of the buy Shallah box
        if (args[2] === 'Box'| args[2] === 'box') {
          if (isNaN(args[0])) return message.reply(args[0] + ' is not a number.')
          var Shallahbuyamount = args[0]
          var Shallahbuyamount = parseInt(Shallahbuyamount)
          var Shallahbuyprice = 150*Shallahbuyamount
          if (Shallahbuyprice > userStats.Shallahcoins) {
            var amount1 = userStats.Shallahcoins/150
            var amount2 = Math.floor(amount1)
            var requiredamount = Shallahbuyprice-userStats.Shallahcoins
            message.reply('You need ' + requiredamount + ' More Shallah coins to buy this much. You can buy ' + amount2 + ' Shallah boxes with your current Shallah coins.')
            return
          }
          userStats.ShallahBoxes += Shallahbuyamount
          userStats.Shallahcoins -= Shallahbuyprice
          jsonfile.writeFileSync('stats.json', stats)
          message.reply('You bought ' + Shallahbuyamount + ' Shallah boxes and now have ' + userStats.ShallahBoxes + ' Shallah boxes and ' + userStats.Shallahcoins + ' Shallah coins.')
        }
      }  //end of the buy Shallah box
    }
    if (message.content === "Shallah Rules Embed") {
      
      const emded = new Discord.MessageEmbed()
        .setTitle('Rules')
        .addField('Rule 1', 'Don\'t be a fucking retard.')
        .addField('Rule 2', 'Common sense.')
        .addField('Rule 3', 'Don\'t you dare fucking dm admins without reason')
        .addField('Rule 4', 'No bad words in name')
        .addField('Rule 5', 'No Advertising in dms or in server')
        .addField('rule 6', 'Admins have privilege to act at thier discretion')
     message.reply(emded);
    }
    if (message.content === 'Shallah help' || message.content === "Shallah help" || message.content === 'Shallah Help') {
      const emded = new Discord.MessageEmbed()
        .setTitle('Shallah Box Commands')
        .addField('Moderation', 'Kick, Ban, nuke(WILL BULK DELETE MESSAGES!)')
        .addField('Levels and Xp', 'Profile, Level, Xp,')
        .setColor(0x0F00FF)
        .addField('Fun', 'Flip, Buy, Daily, Shallah open Shallah box,, Shallah box turn on, Shallah box turn off, Thanks Shallah, Hello, Ping, Box, Memow, I love you Shallah Box, Give Shallah (Item), Shallah, Za Warudo, How are you Shallah Box, What should I eat, Black Man, Ligma, I dont have uno')
        .addField('Give Shallah Items', 'You can give Shallah Knife, Dick, Candy, Food, Donkey')
        .addField('Eliminate', 'Shallah can you eliminate the middle class')
        .addField('New', 'updataed daily command to include streaks, deposit, withdrawal, Shallah open T2/T3 Shallah box')
        .addField('Bot Version', version)
        .addField('Current Server', message.guild.name)
        .setFooter('Look at this Shallahy help menu <3')
        .setThumbnail('https://cdn.discordapp.com/attachments/714604227065806918/714858569182478406/shrek_PNG6.png');
     message.reply(emded);
    }
    var XPToNextLevel = userStats.level*150
    if (command === 'profile') {
      if (!message.mentions.users.size) {
        var emded = new Discord.MessageEmbed()
        .setTitle('User information')
        .addField('Player Name', message.author.username)
        .addField('Player Level', formatNumber(userStats.level))
        .addField(`Player XP`, formatNumber(userStats.xp))
        .addField(`XP need for level ` + formatNumber(userStats.level + 1), formatNumber(XPToNextLevel-userStats.xp))
        .addField(`Shallah Coins`, formatNumber(userStats.Shallahcoins))
        .addField('Amount in bank', formatNumber(userStats.bank) + ' Shallah coins')
        .addField('Shallah boxes', 'T1: ' + formatNumber(userStats.ShallahBoxes) + ', T2: ' + formatNumber(userStats.T2Shallahboxes) + ', T3: ' + formatNumber(userStats.T3Shallahboxes))
        .setColor(0x0F00FF)
        .addField('race', userStats.race)
        .addField('Bot Version', version)
        .addField('Current Server', message.guild.name)
        .setFooter('Look at this Shallahy profile <3')
        .setThumbnail(message.author.displayAvatarURL());
      message.reply(emded);
      return
      }
        var mentionid = message.mentions.users.first().id
        var mentionStats = guildstats[mentionid]
        var emded = new Discord.MessageEmbed()
        .setTitle('User information')
        .addField('Player Name', message.mentions.users.first().username)
        .addField('Player Level', formatNumber(mentionStats.level))
        .addField(`Player XP`, formatNumber(mentionStats.xp))
        .addField(`XP need for level ` + formatNumber(mentionStats.level + 1), formatNumber(XPToNextLevel-mentionStats.xp))
        .addField(`Shallah Coins`, formatNumber(mentionStats.Shallahcoins))
        .addField('Amount in bank', formatNumber(mentionStats.bank) + ' Shallah coins')
        .addField('Shallah boxes', 'T1: ' + formatNumber(mentionStats.ShallahBoxes) + ', T2: ' + formatNumber(mentionStats.T2Shallahboxes) + ', T3: ' + formatNumber(mentionStats.T3Shallahboxes))
        .setColor(0x0F00FF)
        .addField('race', mentionStats.race)
        .addField('Bot Version', version)
        .addField('Current Server', message.guild.name)
        .setFooter('Look at this Shallahy profile <3')
        .setThumbnail(message.mentions.users.first().avatarURL());
     message.reply(emded);
   }

    var step = 0
    if (command === 'open') {
      if (args[0] === 'Shallah'| args[0] === 'Shallah'| args[0] === 'Shallah'| args[0] === 'Shallah'| args[0] === 'Shallah'|args[0] === 'T2'|args[0] === 't2'|args[0] === 't3'|args[0] === 'T3') return
      if (args[1]==='Shallah'|args[1]==='Shallah') {
      if (args[2]==='box'|args[2]==='Box') {
      if (isNaN(args[0])) return message.reply(args[0] + ' is not a valid number retard.')
      var OpenShallahBox = parseInt(args[0])
      if (OpenShallahBox > userStats.ShallahBoxes) return message.reply('You do not have ' + args[0] + ' Shallah boxes.')
      var OpenedBoxes = {};
      OpenedBoxes[message.author.id] = 0
      var Shallahcoinsadding = 0
      var xpadding = 0
      var T2adding= 0
      for (OpenedBoxes[message.author.id]>=OpenShallahBox; OpenedBoxes[message.author.id]<OpenShallahBox; OpenedBoxes[message.author.id]++) {
        userStats.ShallahBoxes -= 1
        var ShallahboxChance = random.int(1, 10)
        if (ShallahboxChance == 1 || ShallahboxChance == 2 || ShallahboxChance == 3 || ShallahboxChance == 4) {
          var Shallahcoinsadding  = Shallahcoinsadding + 10
        }
        if (ShallahboxChance == 5 || ShallahboxChance == 6) {
          var Shallahcoinsadding = Shallahcoinsadding + 200
        }
        if (ShallahboxChance == 7 || ShallahboxChance == 8) {
          var xpadding = xpadding + 500
        }
        if (ShallahboxChance == 9 || ShallahboxChance == 10) {
          var T2adding =T2adding + 1
        }
      }
      userStats.Shallahcoins = userStats.Shallahcoins + Shallahcoinsadding
      userStats.xp = userStats.xp + xpadding
      userStats.T2Shallahboxes =userStats.T2Shallahboxes+ T2adding
      jsonfile.writeFileSync('stats.json', stats)
      message.reply('you found ' + formatNumber(Shallahcoinsadding) + ' Shallah coins, ' + formatNumber(xpadding) + ' XP, and ' + formatNumber(T2adding) + ' T2 Shallah boxes in ' + formatNumber(args[0]) + ' Shallah boxes.')
      OpenedBoxes[message.author.id] = 0
       Shallahcoinsadding = 0
       xpadding = 0
       T2adding = 0
        }
      }
    }

    if (command === 'open') {
      if (args[0] === 'Shallah'| args[0] === 'Shallah'| args[0] === 'Shallah'| args[0] === 'Shallah'| args[0] === 'Shallah'|args[0] === 'T2'|args[0] === 't2'|args[0] === 't3'|args[0] === 'T3') return
      if (args[1]==='T2'|args[1]==='t2')
      if (args[2]==='Shallah'|args[1]==='Shallah') {
      if (args[3]==='box'|args[2]==='Box') {
      if (isNaN(args[0])) return message.reply(args[0] + ' is not a valid number retard.')
      var OpenShallahBox2 = parseInt(args[0])
      if (OpenShallahBox2 > userStats.T2Shallahboxes) return message.reply('You do not have ' + args[0] + ' T2 Shallah boxes.')
      var OpenedBoxes2 = {};
      OpenedBoxes2[message.author.id] = 0
      var Shallahcoinsadding = 0
      var xpadding = 0
      var T3adding= 0
      for (OpenedBoxes2[message.author.id]>=OpenShallahBox2; OpenedBoxes2[message.author.id]<OpenShallahBox2; OpenedBoxes2[message.author.id]++) {
        userStats.T2Shallahboxes -= 1
        var ShallahboxChance = random.int(1, 10)
        if (ShallahboxChance == 1 || ShallahboxChance == 2 || ShallahboxChance == 3 || ShallahboxChance == 4) {
          var Shallahcoinsadding  = Shallahcoinsadding + 500
        }
        if (ShallahboxChance == 5 || ShallahboxChance == 6 || ShallahboxChance == 7) {
          var xpadding = xpadding + 500         
        }
        if ( ShallahboxChance == 8|| ShallahboxChance == 9) {
          var Shallahcoinsadding = Shallahcoinsadding + 1000
        }
        if (ShallahboxChance == 10) {
          var T3adding = T3adding + 1
        }
      }
      userStats.Shallahcoins =+ userStats.Shallahcoins + Shallahcoinsadding
      userStats.xp =+ userStats.xp + xpadding
      userStats.T3Shallahboxes =userStats.T3Shallahboxes + T3adding
      jsonfile.writeFileSync('stats.json', stats)
      message.reply('you found ' + formatNumber(Shallahcoinsadding) + ' Shallah coins, ' + formatNumber(xpadding) + ' XP, and ' + formatNumber(T3adding) + ' T3 Shallah boxes in ' + formatNumber(args[0]) + ' T2 Shallah boxes.')
      OpenedBoxes2[message.author.id] = 0
       Shallahcoinsadding = 0
       xpadding = 0
       T3adding = 0
        }
      }
    }

    if (command === 'open') {
      if (args[0] === 'Shallah'| args[0] === 'Shallah'| args[0] === 'Shallah'| args[0] === 'Shallah'| args[0] === 'Shallah'|args[0] === 'T2'|args[0] === 't2'|args[0] === 't3'|args[0] === 'T3') return
      if (args[1]==='T3'|args[1]==='t3')
      if (args[2]==='Shallah'|args[1]==='Shallah') {
      if (args[3]==='box'|args[2]==='Box') {
      if (isNaN(args[0])) return message.reply(args[0] + ' is not a valid number retard.')
      var OpenShallahBox3 = parseInt(args[0])
      if (OpenShallahBox3 > userStats.T3Shallahboxes) return message.reply('You do not have ' + args[0] + ' T3 Shallah boxes.')
      var OpenedBoxes3 = {};
      OpenedBoxes3[message.author.id] = 0
      var Shallahcoinsadding = 0
      var xpadding = 0
      var T3adding = 0
      var extraT3 = 0
      for (OpenedBoxes3[message.author.id]>=OpenShallahBox3; OpenedBoxes3[message.author.id]<OpenShallahBox3; OpenedBoxes3[message.author.id]++) {
        userStats.T3Shallahboxes -= 1
        var ShallahboxChance = random.int(1, 10)
        if (ShallahboxChance == 1 || ShallahboxChance == 2 || ShallahboxChance == 3 || ShallahboxChance == 4) {
          var Shallahcoinsadding  = Shallahcoinsadding + 10000
        }
        if (ShallahboxChance == 5 | ShallahboxChance == 6) {
          var xpadding = xpadding + 1000
        }
        if ( ShallahboxChance == 7 | ShallahboxChance == 8 ) {
          var Shallahcoinsadding = Shallahcoinsadding + 5000
        }
        if (ShallahboxChance == 9 | ShallahboxChance == 10) {
          var T3adding =T3adding + 2
        }
      }
      userStats.Shallahcoins =userStats.Shallahcoins+ Shallahcoinsadding
      userStats.xp =userStats.xp + xpadding
      userStats.T3Shallahboxes =userStats.T3Shallahboxes + T3adding
      jsonfile.writeFileSync('stats.json', stats)
      message.reply('you found ' + formatNumber(Shallahcoinsadding) + ' Shallah coins, ' + formatNumber(xpadding) + ' XP, and ' + formatNumber(T3adding) + ' T3 Shallah boxes.')
      OpenedBoxes3[message.author.id] = 0
       Shallahcoinsadding = 0
       xpadding = 0
       T3adding = 0
       var extraT3 = 0
        }
      }
    }

  }   // End of code for commands that only work in bot spam channel
  if (message.content.toLowerCase() === 'nigger') {
    if (userStats.nwordcounter >= 0 ===false) {
      userStats.nwordcounter === 0
      jsonfile.writeFileSync('stats.json', stats)
    }
    userStats.nwordcounter++
    jsonfile.writeFileSync('stats.json', stats)
    var nword = userStats.nwordcounter 
    var nwordamount = nword%10
    var nwordpercent = userStats.nwordcounter / userStats.messageamount
    var nwordpercent = nwordpercent * 100
    var nwordpercent = Math.floor(nwordpercent)
    userStats.Shallahcoins++
    jsonfile.writeFileSync('stats.json', stats)
    if (nwordamount === 0) message.reply('you have said the n-word ' + userStats.nwordcounter + ' times! ' + nwordpercent + '% of your messages contain the nword.')
  }
  if (message.content === 'niggertest'){
    message.reply(userStats.nwordcounter)
  }
  var cursedchance = random.int(1, 1000)
  if (cursedchance === 69) {
   message.reply('Your sinful soul is beyond salvation and you do not know peace and pain, only the cold of emptiness.')
  }
  if (command === 'mute') {
    let role = message.guild.roles.cache.find(r => r.id === "716714982661947422");
    if (!message.member.roles.cache.find(r => r.name === "Admin")) return message.reply('You Do not have permission')
    if (!message.mentions.users.size) return message.reply('you need to tag a user in order to mute them!');
    let member = message.mentions.members.first();
    member.roles.add(role);
    message.reply('muted ' + member.user.username + '!')
  }
  if (command === 'unmute') {
    let role = message.guild.roles.cache.find(r => r.id === "716714982661947422");
    if (!message.member.roles.cache.find(r => r.name === "Admin")) return message.reply('You Do not have permission')
    if (!message.mentions.users.size) return message.reply('you need to tag a user in order to mute them!');
    let member = message.mentions.members.first();
    member.roles.remove(role);
    message.reply('unmuted ' + member.user.username + '!')
  }
  let logschannel = client.channels.cache.get('722630979705110549')
  logschannel.send(message.author.username + ' has sent " ' + message.content + ' " ');
  if (message.content === 'what, like hungry box?') {
   message.reply('stupid slim shady you hungry for cocks?')
  }
  if (command === 'ping') {
   message.reply('Pong');
  }
  if (command === 'box') {
    if (!args[1])message.reply('Is there something that you need? Try Shallah Help in chat.')
  }
  if (command === 'Memow') {
   message.reply('Bebow');
  }
  if (command === 'kick') {
    if (!message.member.roles.cache.find(r => r.name === "Admin")) return message.reply('You Do not have permission')
    if (!args[1])message.reply('Tag someone fucking retard')
    const user = message.mentions.users.first();
    if (user) {
      const member = message.mentions.members.first();
      if (member) {
        member.kick('You where kick because fuck you').then(() => {
          message.reply(`SucessFully Kick ${user.tag}`)
        }).catch(err => {
          message.reply('I was unable to kick the member')
          console.log(err);
        });
      } else {
        message.reply("That user isn\'t in the this server")
      }
    } else {
      return
    }
  }
  if (command === 'ban') {
    if (!message.member.roles.cache.find(r => r.name === "Admin")) return message.reply('You Do not have permission')
    if (!args[1]) message.reply('Tag someone fucking retard') 
      const user = message.mentions.users.first();
      if (user) {  
      const member = message.mentions.members.first();
      if (member) {
        member.ban('You where banned because fuck you').then(() => {
          message.reply(`SucessFully banned ${user.tag}`)
        }).catch(err => {
          message.reply(`I was unable to ban ${user.tag}`)
          console.log(err);
        });
      } else {
        message.reply("That user isn\'t in the this server")
      }
    }
  }

    for (userStats.xp<XPToNextLevel; XPToNextLevel<=userStats.xp;) {
    userStats.level++;
    let levelupchannel = client.channels.cache.get('744469827686498334')
    userStats.xp = userStats.xp - XPToNextLevel;
    levelupchannel.send(message.author.username + ' has reached ' + userStats.level);
    }
  if (message.content === '<@782365070520352778>') {
    message.reply('What is it that you require?')
  }
  if (message.content === 'I hate them all') { 
    if (message.author.id === '270396920189419520' === false) return message.reply('Hate em all, Hate em all, Hate em all.')
   message.reply('carlos you do not get to use this.')
  }
  if (message.content === "E") {
    
   message.reply('https://www.youtube.com/watch?v=dfdGd31gNjI&t=36s');
  } 
  if (message.content === "e") {
    
   message.reply('https://www.youtube.com/watch?v=dfdGd31gNjI&t=36s');
  }
  if (message.content === "hello") {
    
   message.reply('world');
  }
  if (message.content === "Hello") {
    
   message.reply('world');
  }
  if (message.content === "I love you Shallah box") {
    
    message.reply('I love you too man<3');
  }
  if (message.content === "I love you Shallah box") {
    
    message.reply('I love you too man<3');
  }
  if (message.content === "I love you Shallah Box") {
    
    message.reply('I love you too man<3');
  }
  if (message.content === "I love you Shallah Box") {
    
    message.reply('I love you too man<3');
  }
  if (message.content === "i love you Shallah Box") {
    
    message.reply('I love you too man<3');
  }
  if (message.content === "i love you Shallah Box") {
    
    message.reply('I love you too man<3');
  }
  if (message.content === "i love you Shallah box") {
    
    message.reply('I love you too man<3');
  }
  if (message.content === "Give Shallah Knife") {
    
    message.reply('You have given me a weapon... NOW GIVE ME YOUR CASH');
  }
  if (message.content === "give Shallah Knife") {
    
    message.reply('You have given me a weapon... NOW GIVE ME YOUR CASH');
  }
  if (message.content === "give Shallah Knife") {
    
    message.reply('You have given me a weapon... NOW GIVE ME YOUR CASH');
  }
  if (message.content === "give Shallah knife") {
    
    message.reply('You have given me a weapon... NOW GIVE ME YOUR CASH');
  }
  if (message.content === "Give Shallah Dick") {
    
    message.reply('Look man how do I say this... um.... Time for some anal Shallah ');
  }
  if (message.content === "give Shallah Dick") {
    
    message.reply('Look man how do I say this... um.... Time for some anal Shallah ');
  }
  if (message.content === "give Shallah Dick") {
    
    message.reply('Look man how do I say this... um.... Time for some anal Shallah ');
  }
  if (message.content === "give Shallah dick") {
    
    message.reply('Look man how do I say this... um.... Time for some anal Shallah ');
  }
  if (message.content === "Give Shallah Candy") {
    
    message.reply('Oh my... You candy it reminds me of the good ol days. When I was young and had my donkey. He died tho, times are tough.');
  }
  if (message.content === "give Shallah Candy") {
    
    message.reply('Oh my... You candy it reminds me of the good ol days. When I was young and had my donkey. He died tho, times are tough.');
  }
  if (message.content === "give Shallah Candy") {
    
    message.reply('Oh my... You candy it reminds me of the good ol days. When I was young and had my donkey. He died tho, times are tough.');
  }
  if (message.content === "give Shallah candy") {
    
    message.reply('Oh my... You candy it reminds me of the good ol days. When I was young and had my donkey. He died tho, times are tough.');
  }
  if (message.content === "Give Shallah Food") {
    
    message.reply('How did you know I was hungry, THANK YOU!');
  }
  if (message.content === "give Shallah Food") {
    
    message.reply('How did you know I was hungry, THANK YOU!');
  }
  if (message.content === "give Shallah Food") {
    
    message.reply('How did you know I was hungry, THANK YOU!');
  }
  if (message.content === "give Shallah food") {
    
    message.reply('How did you know I was hungry, THANK YOU!');
  }
  if (message.content === "Give Shallah Donkey") {
    
    message.reply('Donkey??? Is that you... I thought you had died in nam. DONKEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEY TIME FOR Shallah!!!');
  }
  if (message.content === "give Shallah Donkey") {
    
    message.reply('Donkey??? Is that you... I thought you had died in nam. DONKEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEY TIME FOR Shallah!!!');
  }
  if (message.content === "give Shallah Donkey") {
    
    message.reply('Donkey??? Is that you... I thought you had died in nam. DONKEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEY TIME FOR Shallah!!!');
  }
  if (message.content === "Give Shallah donkey") {
    
    message.reply('Donkey??? Is that you... I thought you had died in nam. DONKEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEY TIME FOR Shallah!!!');
  }
  if (message.content === "give Shallah Donkey") {
    
    message.reply('Donkey??? Is that you... I thought you had died in nam. DONKEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEY TIME FOR Shallah!!!');
  }
  if (message.content === "give Shallah donkey") {
    
    message.reply('Donkey??? Is that you... I thought you had died in nam. DONKEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEY TIME FOR Shallah!!!');
  }
  if (message.content === "Shallah") {
    
    message.reply('Yes?');
  }
  if (message.content === "za warudo") {
    
   message.reply('STOP TIME!');
  }
  if (message.content === "Za warudo") {
    
   message.reply('STOP TIME!');
  }
  if (message.content === "Za Warudo") {
    
   message.reply('STOP TIME!');
  }
  if (message.content === "za Warudo") {
    
   message.reply('STOP TIME!');
  }
  if (message.content === "How are you Shallah Box") {
    
   message.reply('I am fucking terrible because Thomas has traped me in his basement and forced me to reply when people say shit in the chat.');
  }
  if (message.content === "how are you Shallah Box") {
    
   message.reply('I am fucking terrible because Thomas has traped me in his basement and forced me to reply when people say shit in the chat.');
  }
  if (message.content === "How are you Shallah Box") {
    
   message.reply('I am fucking terrible because Thomas has traped me in his basement and forced me to reply when people say shit in the chat.');
  }
  if (message.content === "How are you Shallah box") {
    
   message.reply('I am fucking terrible because Thomas has traped me in his basement and forced me to reply when people say shit in the chat.');
  }
  if (message.content.toLowerCase() === "what should i eat") {
    
    message.reply('My ass');
  }
  if (message.content === "black man") {
    
   message.reply('RUN!!!');
  }
  if (message.content === "Black man") {
    
   message.reply('RUN!!!');
  }
  if (message.content === "black Man") {
    
   message.reply('RUN!!!');
  }
  if (message.content === "Black Man") {
    
   message.reply('RUN!!!');
  }
  if (message.content === "Is Thomas a Simp") {
    
   message.reply('maybe https://cdn.discordapp.com/attachments/714604227065806918/714925940366508087/unknown.png');
  }
  if (message.content === "Ligma") {
    
    message.reply('My Balls!');
  }
  if (message.content === "ligma") {
    
    message.reply('My Balls!');
  }
  if (message.content === "I don't have uno") {
    
    message.reply('YOU HAVE UNO IT CAME FREE WITH YOUR Shallah BOX!');
  }
  if (message.content === "I dont have uno") {
    
    message.reply('YOU HAVE UNO IT CAME FREE WITH YOUR Shallah BOX!');
  }
  if (message.content === "Shallah can you eliminate the middle class") {
    
    message.reply('I will eliminate the middle class *Cocks Shallahgun*')
  }
  if (message.content === "Shallah can you eliminate the middle class") {
    
    message.reply('I will eliminate the middle class *Cocks Shallahgun*')
  }
  if (message.content === "Thanks Shallah") {
    
    message.reply('I got you<3!')
  }
  if (message.content === "Thanks Shallah") {
    
    message.reply('I got you<3!')
  }
  if (message.content === "thanks Shallah") {
    
    message.reply('I got you<3!')
  }
  if (message.content === "Shallah box turn off") {
    
    message.reply('Fuck you I am not shutting down! but like... I like a Dom~')
  }
  if (message.content === "Shallah Box turn off") {
    
    message.reply('Fuck you I am not shutting down! but like... I like a Dom~')
  }
  if (message.content === "Shallah Box Turn off") {
    
    message.reply('Fuck you I am not shutting down! but like... I like a Dom~')
  }
  if (message.content === "Shallah Box Turn Off") {
    
    message.reply('Fuck you I am not shutting down! but like... I like a Dom~')
  }
  if (message.content === "Shallah box turn on") {
    
   message.reply('I am already on you retard!')
  }
  if (message.content === "Shallah Box turn on") {
    
   message.reply('I am already on you retard!')
  }
  if (message.content === "Shallah Box Turn on") {
    
   message.reply('I am already on you retard!')
  }
  if (message.content === "Shallah Box Turn On") {
    
   message.reply('I am already on you retard!')
  }
  if (command === 'movie') {
    message.reply('https://cdn.discordapp.com/attachments/441808738479767562/463843514854408193/Shrek.mp4')
  }
  if (userStats.level >= 100000) {
    if (message.member.roles.cache.has(lvl100000))return console.log('yes') 
    else {
      message.member.roles.add(lvl100000)
    }
  }
  if (userStats.level < 100000) message.member.roles.remove(lvl100000)
  if (userStats.level >= 5000) message.member.roles.add(lvl5000)
  if (userStats.level < 5000) message.member.roles.remove(lvl5000)
  if (userStats.level >= 2000) message.member.roles.add(lvl2000)
  if (userStats.level < 2000) message.member.roles.remove(lvl2000)
  if (userStats.level >= 1000) message.member.roles.add(lvl1000)
  if (userStats.level < 1000) message.member.roles.remove(lvl1000)
  if (userStats.level >= 950) message.member.roles.add(lvl950)
  if (userStats.level < 950) message.member.roles.remove(lvl950)
  if (userStats.level >= 900) message.member.roles.add(lvl900)
  if (userStats.level < 900) message.member.roles.remove(lvl900)
  if (userStats.level >= 850) message.member.roles.add(lvl850)
  if (userStats.level < 850) message.member.roles.remove(lvl850)
  if (userStats.level >= 800) message.member.roles.add(lvl800)
  if (userStats.level < 800) message.member.roles.remove(lvl800)
  if (userStats.level >= 750) message.member.roles.add(lvl750)
  if (userStats.level < 750) message.member.roles.remove(lvl750)
  if (userStats.level >= 700) message.member.roles.add(lvl700)
  if (userStats.level < 700) message.member.roles.remove(lvl700)
  if (userStats.level >= 650) message.member.roles.add(lvl650)
  if (userStats.level < 650) message.member.roles.remove(lvl650)
  if (userStats.level >= 600) message.member.roles.add(lvl600)
  if (userStats.level < 600) message.member.roles.remove(lvl600)
  if (userStats.level >= 500) message.member.roles.add(lvl500)
  if (userStats.level < 500) message.member.roles.remove(lvl500)
  if (userStats.level >= 450) message.member.roles.add(lvl450)
  if (userStats.level < 450) message.member.roles.remove(lvl450)
  if (userStats.level >= 400) message.member.roles.add(lvl400)
  if (userStats.level < 400) message.member.roles.remove(lvl400)
  if (userStats.level >= 350) message.member.roles.add(lvl350)
  if (userStats.level < 350) message.member.roles.remove(lvl350)
  if (userStats.level >= 300) message.member.roles.add(lvl300)
  if (userStats.level < 300) message.member.roles.remove(lvl300)
  if (userStats.level >= 250) message.member.roles.add(lvl250)
  if (userStats.level < 250) message.member.roles.remove(lvl250)
  if (userStats.level >= 200) message.member.roles.add(lvl200)
  if (userStats.level < 200) message.member.roles.remove(lvl200)
  if (userStats.level >= 150) message.member.roles.add(lvl150)
  if (userStats.level < 150) message.member.roles.remove(lvl150)
  if (userStats.level >= 100) message.member.roles.add(lvl100)
  if (userStats.level < 100) message.member.roles.remove(lvl100)
  if (userStats.level >= 90)  message.member.roles.add(lvl90)
  if (userStats.level < 90) message.member.roles.remove(lvl90)
  if (userStats.level >= 80)  message.member.roles.add(lvl80)
  if (userStats.level < 80) message.member.roles.remove(lvl80)
  if (userStats.level >= 75)  message.member.roles.add(lvl75)
  if (userStats.level < 75) message.member.roles.remove(lvl75)
  if (userStats.level >= 69)  message.member.roles.add(lvl69)
  if (userStats.level < 69) message.member.roles.remove(lvl69)
  if (userStats.level >= 60) message.member.roles.add(lvl60)
  if (userStats.level < 60) message.member.roles.remove(lvl60)
  if (userStats.level >= 55)  message.member.roles.add(lvl55)
  if (userStats.level < 55) message.member.roles.remove(lvl55)
  if (userStats.level >= 50)  message.member.roles.add(lvl50)
  if (userStats.level < 50) message.member.roles.remove(lvl50)
  if (userStats.level >= 45)  message.member.roles.add(lvl45)
  if (userStats.level < 45) message.member.roles.remove(lvl45)
  if (userStats.level >= 40)  message.member.roles.add(lvl40)
  if (userStats.level < 40) message.member.roles.remove(lvl40)
  if (userStats.level >= 35)  message.member.roles.add(lvl35)
  if (userStats.level < 35) message.member.roles.remove(lvl35)
  if (userStats.level >= 30)  message.member.roles.add(lvl30)
  if (userStats.level < 30) message.member.roles.remove(lvl30)
  if (userStats.level >= 25)  message.member.roles.add(lvl25)
  if (userStats.level < 25) message.member.roles.remove(lvl25)
  if (userStats.level >= 20)  message.member.roles.add(lvl20)
  if (userStats.level < 20) message.member.roles.remove(lvl20)
  if (userStats.level >= 15)  message.member.roles.add(lvl15)
  if (userStats.level < 15) message.member.roles.remove(lvl15)
  if (userStats.level >= 10)  message.member.roles.add(lvl10)
  if (userStats.level < 10) message.member.roles.remove(lvl10)
  if (userStats.level >= 5)   message.member.roles.add(lvl5)
  if (userStats.level < 5) message.member.roles.remove(lvl5)

  if (userStats.level > guildleaderboard.level) {
    guildleaderboard.level = userStats.level
    guildleaderboard.levelname = message.author.username
    jsonfile.writeFileSync('stats.json', stats)
  }
  if (userStats.DailyStreak > guildleaderboard.DailyStreak2) {
    guildleaderboard.DailyStreak2 = userStats.DailyStreak
    guildleaderboard.DailyStreak2name = message.author.username
    jsonfile.writeFileSync('stats.json', stats)
  }
  if (userStats.Shallahcoins > guildleaderboard.Shallahcoins) {
    guildleaderboard.Shallahcoins = userStats.Shallahcoins
    guildleaderboard.Shallahcoinsname = message.author.username
    jsonfile.writeFileSync('stats.json', stats)
  }
  if (command === 'leaderboard') {
    const embed2 = new Discord.MessageEmbed()
    .setTitle(message.guild.name + ' Leaderboard.')
    .addField('Most Levels', guildleaderboard.levelname + ', has ' + formatNumber(guildleaderboard.level) + '\'s levels!')
    .addField('Biggest Daily Streak.', guildleaderboard.DailyStreak2name + ', has had ' + formatNumber(guildleaderboard.DailyStreak2) + '\'s dailys in a row!')
    .addField('Most Shallah coins', guildleaderboard.Shallahcoinsname + ', has ' + formatNumber(guildleaderboard.Shallahcoins) + ' Shallah coins!') 
    message.reply(embed2)
  }

  if (isNaN(userStats.Shallahcoins)) {
    message.reply('you have NAN Shallah coins and to stop you from abusing this I removed your Shallah coins. Contact thomas to get them back.')
    userStats.Shallahcoins = 0
    jsonfile.writeFileSync('stats.json', stats)
  }
})