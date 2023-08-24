import fetch from 'node-fetch'
let handler = async(m, { conn, text }) => {
  if (!text) throw `𝙼𝚊𝚜𝚞𝚔𝚒𝚗 𝚗𝚊𝚖𝚊 𝚓𝚞𝚍𝚞𝚕 𝚊𝚗𝚒𝚖𝚎 𝚗𝚢𝚊`
  try {
  let res = await fetch(`https://api.xyroinee.xyz/api/anime/mal-anime?q=${text}&apikey=${global.xyro}`)
  let json = await res.json()
  res = json.data.map((v) => `*Title:* ${v.title}\n*Type:* ${v.type}\n*Score:* ${v.score}\n*Episode:* ${v.episode}\n*Thumbnail:* ${v.thumbnail}\n*Link:* ${v.url}`).join`\n\n°°°°°°°°°°°°°°°°°°°°°°°°°°°°°\n\n`
  conn.sendFile(m.chat, json.data[0].thumbnail, 'anunya.jpg', res, m)
  } catch (e) {
m.reply(`𝙾𝚢 𝚐𝚠 𝚌𝚊𝚛𝚒² 𝚐𝚔 𝚊𝚍𝚊 𝚓𝚞𝚍𝚞𝚕 𝚊𝚗𝚒𝚖𝚎 𝚢𝚐 𝚕𝚞 𝚌𝚊𝚛𝚒 𝚌𝚘𝚋𝚊 𝚞𝚕𝚐 𝚍𝚑`)
}
}
handler.help = ['animeinfo']
handler.tags = ['anime']
handler.command = /^(animeinfo)$/i
handler.limit = true
export default handler
