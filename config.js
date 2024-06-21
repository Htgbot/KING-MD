const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER.split(",")
global.mongodb = process.env.MONGODB_URI || ""
global.port= process.env.PORT || 5000
global.email = 'textnow1pak@gmail.com'
global.github = 'https://github.com/naveeddogar/KING-MD'
global.location = 'pakistan/multan'
global.gurl = 'https://whatsapp.com/channel/0029Va66s2IJENxvTJjUtM1w' // add your username
global.sudo = process.env.SUDO || '923096566451'
global.devs = '923096566451';
global.website = 'https://king-md-session.onrender.com/' // Hello world
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://raw.githubusercontent.com/Htgbot/OWNER-FOR-BOT/main/PosterMaker_20072022_184127.png'
module.exports = {
	  botname:   process.env.BOT_NAME === undefined ? 'HTG-BOT' : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'HTG BOT:)' : process.env.OWNER_NAME,
  sessionName:  process.env.SESSION_ID === undefined ? 'KING-MD;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0dqWkVZM1A1RGZON3ZYWDdFRXA3K09OSzhUM1U3V055b0RQVlVhQnMwST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT3piMHROYTRSSmt2VjE2bnoxWFY0Z3A0MTZPWlZxVEpYMGdDREFUWWhVQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzRW9IQWtpcXVqVlUxWlFyMWxsbGF1N3M5MHdBZ1gxUlJ1U3cyZWJhcUdRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJuTFpMZmF5bGNodWZmalV2ZnV0RnhvNzhZekxHTVVRS2J1UE1uSFlPTlFBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1FaFI5RmJ0MmZJVHRLdit6WkNndlZwWVVnbkdMOXVzTTR4b01WR0E0bEU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkxaZTlIckxWRnlrZVhFOHhrWmtXN1hJTVlsNHRwbmF4QStWNVFWS0VuaGs9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZUVWeFFYWkh2V0pEaENZbkhzM25lbTJlRmtqeUxFMmgrNTVid1lHN2IzVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUNXYU5tM3psdkNVaHBQclBzMXRvekJwTitwenk0SlloVHpuc1pPN0RWMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndUcXVrUStnTHgvTktINUJnekpLQnNWUFhIRUc2elpvV0lNbTk0VjcyRmd6T2VpRDVBbGEvZ1hNVjh0Ni8vd25RNHJIVGQ2eUdKZ25qZFVXNGFydGl3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjEyLCJhZHZTZWNyZXRLZXkiOiJSb0ZXc1hocExEU1hXZ2lLOGpTekxlU1FHbml4cTdZZlI4VU1haGVIYWVZPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJ2WURLZ2I3UFNGdVFtQ0ZqMk5IOFlBIiwicGhvbmVJZCI6ImEwYThlYTQ0LTE0MjktNDU3ZC1iNWIwLWIxNTZhMGZlOTVlMSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ2WDlwRVdQVjZyZzdQZ3hWUklvbDRIb3phK0E9In0sInJlZ2lzdGVyZWQiOmZhbHNlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkxWd3lrOVM2YnExZU1wQWUwVCt2ZVdJVmcxST0ifSwicmVnaXN0cmF0aW9uIjp7fSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0wzYXlxc0VFUEdhMXJNR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IklDL3hCWWRiUlk3VTRBako2ZzhTQ0Z1dElPdFpuK3Bjd1VlN0lqdHdoV289IiwiYWNjb3VudFNpZ25hdHVyZSI6IitQK0JpQjhZemwwd3doWkFZbUw0bGFWWWZSbi9RaVdVcFJxWWFaUEMvTVV6ekwzUXRqaVl6UUs5azdCMGx5TGVNM0RhUWtUOUw1bXJoN0p6REJnTURBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJObGg5UXVaTXNkUjZlM0lVM0FIT2xUdjM4YUpxQUZDQnYrc2x2dndvaHM5UTNMS3ZFaWtIZ1NoSFRHWmRoODdSeEJ1b1RpT2JXQnRLZGZSZzMvZHFqQT09In0sIm1lIjp7ImlkIjoiOTQ3NzU0NzU2NTk6M0BzLndoYXRzYXBwLm5ldCJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDc3NTQ3NTY1OTozQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlNBdjhRV0hXMFdPMU9BSXllb1BFZ2hiclNEcldaL3FYTUZIdXlJN2NJVnEifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MTg5Nzk5NjUsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBTjVNIn0=' : process.env.SESSION_ID,
  author:  process.env.PACK_AUTHER.split(";")[0] === undefined ? 'HTG-STICK' : process.env.PACK_AUTHER.split(";")[0],
  auto_read_status :  process.env.AUTO_READ_STATUS  || 'true' ,
  packname:  process.env.PACK_NAME.split(";")[1] === undefined ? 'HTG-BOT' : process.env.PACK_NAME.split(";")[1],
  autoreaction:  process.env.AUTO_REACTION ||  'true' ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nigga' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? true : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? true : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'Ｖ-1.3.0' : process.env.VERSION,
  LANG: process.env.THEME|| 'KING-MD',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
