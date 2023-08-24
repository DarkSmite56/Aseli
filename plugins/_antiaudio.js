export async function before(m, { isAdmin, isBotAdmin }) {
  if (m.isBaileys && m.fromMe) return true
  let chat = global.db.data.chats[m.chat]
  let sender = global.db.data.chats[m.sender]
  let isAudio = m.mtype
  let hapus = m.key.participant
  let bang = m.key.id
  if (chat.antiAudio && isAudio) {
    if(isAudio === "audioMessage"){
        if (isAdmin || !isBotAdmin){		  
        } else {
          m.reply(`*Audio Terdeteksi*\n\n𝚂𝚘𝚛𝚛𝚢 𝚐𝚠 𝚑𝚊𝚙𝚞𝚜 𝚔𝚊𝚛𝚎𝚗𝚊 𝙰𝚍𝚖𝚒𝚗/𝙾𝚠𝚗𝚎𝚛 𝚐𝚠 𝚊𝚔𝚝𝚒𝚏𝚒𝚗 𝚊𝚗𝚝𝚒 𝙰𝚞𝚍𝚒𝚘 𝚍𝚒 𝚌𝚑𝚊𝚝 𝚒𝚗𝚒`)
    return this.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: hapus }})
        }return true
    }
  }
  return true
}