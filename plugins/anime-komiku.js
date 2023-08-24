import fetch from 'node-fetch'

let handler = async(m, { conn, text }) => {
  if (!text) throw `𝙹𝚞𝚍𝚞𝚕 𝚊𝚙𝚊 𝚋𝚊𝚗𝚐?`
  try {
  let res = await fetch(`https://api.xyroinee.xyz/api/anime/komiku-search?q=${text}&apikey=${global.xyro}`)
  let json = await res.json()
  let foto = json.data[0].thumbnail
  json = json.data.map((v) => `*Title:* ${v.title}\n*Title_ID:* ${v.title_id}\n*Awal:* ${v.awal}\n*Terbaru:* ${v.terbaru}\n*Link:* ${v.url}\n*Deskripsi:* ${v.description}`).join`\n\n°°°°°°°°°°°°°°°°°°°°°°°°°°°°°\n\n`
  conn.sendFile(m.chat, foto, 'foto.jpg', json, m)
  } catch (e) {
m.reply(`𝙺𝚎𝚜𝚊𝚕𝚊𝚑𝚊𝚗 𝚕𝚐𝚒 𝚌𝚘𝚋𝚊 𝚕𝚞 𝚖𝚊𝚜𝚞𝚔𝚒𝚗 𝚓𝚞𝚍𝚞𝚕 𝚢𝚐 𝚋𝚎𝚗𝚎𝚛 𝚌𝚙𝚎𝚔 𝚐𝚠`)
}
}
handler.help = ['komikusearch']
handler.tags = ['anime']
handler.command = /^(komikusearch)$/i
handler.limit = true

export default handler
