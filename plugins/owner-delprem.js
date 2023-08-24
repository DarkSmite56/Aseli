let handler = async (m, { conn, text }) => {
    if (!text) throw '𝚕𝚞 𝚖𝚊𝚞 𝚍𝚎𝚕𝚎𝚝𝚎 𝚜𝚒𝚊𝚙𝚊 𝚍𝚒 𝚞𝚜𝚎𝚛 𝚙𝚛𝚎𝚖𝚒𝚞𝚖?'
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (!who) throw 'Tag??'
    let users = global.db.data.users
    users[who].premium = false
    users[who].premiumTime = 0
    conn.reply(m.chat, 'Done!', m)
}
handler.help = ['delprem']
handler.tags = ['owner']
handler.command = /^delprem(user)?$/i
handler.rowner = true

export default handler