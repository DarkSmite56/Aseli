let handler = async (m, { conn }) => {
    conn.susunkata = conn.susunkata ? conn.susunkata : {}
    let id = m.chat
    if (!(id in conn.susunkata)) throw false
    let json = conn.susunkata[id][1]
    let ans = json.jawaban.trim()
    let clue = ans.replace(/[AIUEOaiueo]/g, '_')
    conn.reply(m.chat, '```' + clue + '```\n𝚋𝚊𝚕𝚊𝚜 𝚜𝚘𝚊𝚕𝚗𝚢𝚊 𝚍𝚘𝚗𝚐𝚘, 𝚋𝚞𝚔𝚊𝚗 𝚙𝚎𝚜𝚊𝚗 ini😂', conn.susunkata[id][0])
}
handler.command = /^suska$/i
handler.limit = true
export default handler
