export async function before(m, { isAdmin, isBotAdmin }) {
  if (m.isBaileys && m.fromMe) return true
  let chat = global.db.data.chats[m.chat]
  let sender = global.db.data.chats[m.sender]
  let hapus = m.key.participant
  let bang = m.key.id
  if (chat.antiBot) {
    if (m.isBaileys && m.fromMe == false){
        if (isAdmin || !isBotAdmin){		  
        } else {
          m.reply(`*Bot Lain Terdeteksi*\n\n𝚂𝚘𝚛𝚛𝚢² 𝚗𝚒𝚑 𝚐𝚠 𝚔𝚒𝚌𝚔 𝚕𝚞, 𝙰𝚍𝚖𝚒𝚗 𝚗𝚐𝚊𝚔𝚝𝚒𝚏𝚒𝚗 𝚊𝚗𝚝𝚒 𝚋𝚘𝚝 𝚍𝚒 𝚐𝚛𝚞𝚙 𝚒𝚗𝚒`)
    return await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }return true
    }
  }
  return true
}