export async function before(m, { isAdmin, isBotAdmin }) {
  if (m.isBaileys && m.fromMe) return true
  let chat = global.db.data.chats[m.chat]
  let sender = global.db.data.chats[m.sender]
  let isVideo = m.mtype
  let hapus = m.key.participant
  let bang = m.key.id
  if (chat.antiVideo && isVideo) {
    if(isVideo === "videoMessage"){
        if (isAdmin || !isBotAdmin){		  
        } else {
          m.reply(`*Video Terdeteksi*\n\n𝚂𝚘𝚛𝚛𝚢 𝚐𝚠 𝚊𝚙𝚞𝚜, 𝚒𝚗𝚒 𝚊𝚙𝚊 𝚗𝚊𝚖𝚊𝚗𝚢𝚊, 𝙰𝚍𝚖𝚒𝚗/𝙾𝚠𝚗𝚎𝚛 𝚗𝚐𝚊𝚔𝚝𝚒𝚏𝚒𝚗 𝚊𝚗𝚝𝚒 𝚟𝚒𝚍𝚒𝚘`)
    return this.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: hapus }})
        }return true
    }
  }
  return true
} 