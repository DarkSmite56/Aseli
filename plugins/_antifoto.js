export async function before(m, { isAdmin, isBotAdmin }) {
  if (m.isBaileys && m.fromMe) return true
  let chat = global.db.data.chats[m.chat]
  let sender = global.db.data.chats[m.sender]
  let isFoto = m.mtype
  let hapus = m.key.participant
  let bang = m.key.id
  if (chat.antiFoto && isFoto) {
    if(isFoto === "imageMessage"){
        if (isAdmin || !isBotAdmin){		  
        } else {
          m.reply(`*Foto Terdeteksi*\n\n𝚂𝚘𝚛𝚛𝚢 𝚍𝚊𝚑 𝚕𝚞 𝚓𝚐𝚗 𝚗𝚐𝚛𝚒𝚖 𝚏𝚘𝚝𝚘 𝚔𝚊𝚛𝚎𝚗𝚊 𝙰𝚍𝚖𝚒𝚗/𝙾𝚠𝚗𝚎𝚛 𝚗𝚐𝚊𝚔𝚝𝚒𝚏𝚒𝚗 𝙰𝚗𝚝𝚒 𝙵𝚘𝚝𝚘 𝚍𝚒 𝚌𝚑𝚊𝚝 𝚒𝚗𝚒`)
    return this.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: hapus }})
        }return true
    }
  }
  return true
}