import fetch from 'node-fetch'

let handler = async(m, { conn, text }) => {
  if (!text) throw `𝚊𝚙𝚊 𝚓𝚞𝚍𝚞𝚕𝚗𝚢𝚊?`
  try {
  let res = await fetch(`https://api.xyroinee.xyz/api/anime/otakudesu-search?q=${text}&apikey=${global.xyro}`)
  let otaku = await res.json()
let otakuinfo = `• *Title:* ${otaku.data[0].title}
• *Genre:* ${otaku.data[0].genres}
• *Status*: ${otaku.data[0].status}
• *Rating*: ${otaku.data[0].rating}
• *Link*: ${otaku.data[0].url}`
  conn.sendFile(m.chat, otaku.data[0].thumbnail, 'otaku.jpeg', otakuinfo, m)
  } catch (e) {
m.reply(`𝚃𝚎𝚛𝚓𝚊𝚍𝚒 𝚔𝚎𝚜𝚊𝚕𝚊𝚑 𝚋𝚊𝚗𝚐, 𝚓𝚞𝚍𝚞𝚕 𝚢𝚐 𝚕𝚞 𝚔𝚊𝚜𝚒𝚑 𝚝𝚞𝚑 𝚐𝚔 𝚊𝚍𝚊 𝚐𝚠 𝚌𝚊𝚛𝚒² 𝚒𝚗𝚒`)
}
}
handler.help = ['otakusearch']
handler.tags = ['anime']
handler.command = /^(otakusearch)$/i
handler.limit = true

export default handler
