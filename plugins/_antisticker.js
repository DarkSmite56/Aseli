export async function before(m, { isAdmin, isBotAdmin }) {
  if (m.isBaileys && m.fromMe) return true
  let chat = global.db.data.chats[m.chat]
  let sender = global.db.data.chats[m.sender]
  let isSticker = m.mtype
  let hapus = m.key.participant
  let bang = m.key.id
  if (chat.antiSticker && isSticker) {
    if(isSticker === "stickerMessage"){
        if (isAdmin || !isBotAdmin){		  
        } else {
          m.reply(`*Sticker Terdeteksi*\n\n𝚂𝚘𝚛𝚛𝚢 𝚗𝚒𝚑 𝚐𝚠 𝚊𝚙𝚞𝚜, 𝚕𝚊𝚐𝚒𝚊𝚗 𝚗𝚐𝚊𝚙𝚊𝚒𝚗 𝙰𝚍𝚖𝚒𝚗/𝙾𝚠𝚗𝚎𝚛 𝚒𝚗𝚒 𝚊𝚔𝚝𝚒𝚏𝚒𝚗 𝚊𝚗𝚝𝚒 𝚜𝚝𝚒𝚌𝚔𝚎𝚛 𝚔𝚊𝚗 𝚐𝚔 𝚊𝚜𝚒𝚔 😒`)
    return this.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: hapus }})
        }return true
    }
  }
  return true
}  