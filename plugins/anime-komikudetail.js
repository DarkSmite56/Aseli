import fetch from 'node-fetch'

let handler = async(m, { conn, text }) => {
  if (!text) throw `𝙻𝚒𝚗𝚔 𝚗𝚢 𝚖𝚊𝚗𝚊 🥰?`
  try {
  let res = await fetch(`https://api.xyroinee.xyz/api/anime/komiku-detail?url=${text}&apikey=${global.xyro}`)
  let json = await res.json()
  let { awal, terbaru, konsep_cerita, komikus, jumlah_pembaca, end } = json.data.metadata
  res = json.data.chapters.map((v) => `*Chapter:* ${v.chapter}\n*Url:* ${v.url}`).join`\n\n°°°°°°°°°°°°°°°°°°°°°°°°°°°°°\n\n`
let komiku = `• *Judul:* ${json.data.title}
• *Awal:* ${awal}
• *Terbaru:* ${terbaru}
• *Genre:* ${konsep_cerita}
• *Komikus:* ${komikus}
• *Deskripsi:* ${json.data.description}
• *Chapters*: ${res}`
  conn.reply(m.chat, komiku, m)
  } catch (e) {
m.reply(`𝚃𝚎𝚛𝚓𝚊𝚍𝚒 kesalahan😱😰😭 𝚖𝚊𝚜𝚞𝚔𝚒𝚗 𝚄𝚁𝙻 𝚢𝚐 𝚋𝚗𝚎𝚛 𝚒𝚗𝚒 𝚍𝚊𝚝𝚊𝚗𝚢𝚊 𝚐𝚔 𝚋𝚒𝚜𝚊 𝚗𝚐𝚊𝚖𝚋𝚒𝚕😡`)
}
}
handler.help = ['komikudetail']
handler.tags = ['anime']
handler.command = /^(komikudetail)$/i
handler.limit = true

export default handler