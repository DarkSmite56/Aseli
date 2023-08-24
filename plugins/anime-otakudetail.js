import fetch from 'node-fetch'
let handler = async(m, { conn, text }) => {
  if (!text) throw `𝚕𝚒𝚗𝚔𝚗𝚢𝚊?\n𝙰𝚝𝚊𝚞 𝚕𝚒 𝚋𝚒𝚜𝚊 𝚔𝚎𝚝𝚒𝚔 .otakudesu nama judul`
  try {
  let res = await fetch(`https://api.xyroinee.xyz/api/anime/otakudesu-detail?url=${text}&apikey=${global.xyro}`)
  let data = await res.json()
  let otaku = data.data
let otakuinfo = `• *Status:* ${otaku.status}
• *Judul:* ${otaku.judul}
• *Japanesse*: ${otaku.japanese}
• *Rating*: ${otaku.skor}
• *Produser*: ${otaku.produser}
• *Tipe*: ${otaku.tipe}
• *Total Eps*: ${otaku.total_episode}
• *Durasi*: ${otaku.durasi}
• *Rilis*: ${otaku.tanggal_rilis}
• *Studio*: ${otaku.studio}
• *Genre*: ${otaku.genre}
• *Batch*: 
${otaku.url.batch}
• *Sinopsis*: ${otaku.sinopsis}
`
  conn.sendFile(m.chat, otaku.thumbnail, 'otaku.jpeg', otakuinfo, m)
  } catch (e) {
m.reply(`𝚖𝚊𝚜𝚞𝚔𝚒𝚗 𝚄𝚁𝙻 𝚢𝚐 𝚋𝚎𝚗𝚎𝚛 𝚒𝚗𝚒 𝚐𝚠 𝚐𝚔 𝚋𝚒𝚜𝚊 𝚗𝚐𝚊𝚖𝚋𝚒𝚕 𝚍𝚊𝚝𝚊 𝚗𝚢𝚊`)
}
}
handler.help = ['otakudetail']
handler.tags = ['anime']
handler.command = /^(otakudetail)$/i
handler.limit = true
export default handler
