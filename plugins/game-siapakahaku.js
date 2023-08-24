import { siapakahaku } from '@bochilteam/scraper'

let timeout = 60000
let handler = async (m, { conn, usedPrefix }) => {
    conn.siapakahaku = conn.siapakahaku ? conn.siapakahaku : {}
    let id = m.chat
    if (id in conn.siapakahaku) {
        conn.reply(m.chat, '𝙾𝚢 𝚒𝚗𝚒 𝚖𝚜𝚒𝚑 𝚊𝚍𝚊 𝚢𝚐 𝚋𝚕𝚞𝚖 𝚍𝚒 𝚓𝚊𝚠𝚊𝚋', conn.siapakahaku[id][0])
        throw false
    }
    const json = await siapakahaku()
    let caption = `
Siapakah Aku? ${json.soal}
Waktu *${(timeout / 1000).toFixed(2)} Detik*
Ketik ${usedPrefix}who untuk bantuan
Hadiah:
500 Exp
200 Koin
1 Limit
`.trim()
    conn.siapakahaku[id] = [
        await conn.reply(m.chat, caption, m),
        json, poin,
        setTimeout(() => {
            if (conn.siapakahaku[id]) conn.reply(m.chat, `Waktu Habis!\nJawabannya Adalah *${json.jawaban}*`, conn.siapakahaku[id][0])
            delete conn.siapakahaku[id]
        }, timeout)
    ]
}
handler.help = ['siapakahaku']
handler.tags = ['havefun']
handler.command = /^siapa(kah)?aku/i

export default handler
