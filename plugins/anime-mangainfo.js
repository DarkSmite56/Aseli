import fetch from 'node-fetch'
let handler = async(m, { conn, text }) => {
  if (!text) throw `𝚖𝚜𝚞𝚔𝚒𝚗 𝚗𝚊𝚖𝚊 𝚖𝚊𝚗𝚐𝚊`
  try {
  let res = await fetch(`https://api.xyroinee.xyz/api/anime/mal-manga?q=${text}&apikey=${global.xyro}`)
  let json = await res.json()
  let anu = json.data[0].thumbnail
  res = json.data.map((v) => `*Title:* ${v.title}\n*Type:* ${v.type}\n*Volum:* ${v.vol}\n*Score:* ${v.score}\n*Thumbnail:* ${v.thumbnail}\n*Link:* ${v.link}`).join`\n\n°°°°°°°°°°°°°°°°°°°°°°°°°°°°°\n\n`
  conn.sendFile(m.chat, anu, 'anunya.png', res, m)
  } catch (e) {
m.reply(`𝚃𝚎𝚛𝚓𝚊𝚍𝚒 𝚊𝚙𝚊? 𝚢𝚊 kesalahan😁 𝚖𝚜𝚞𝚔𝚒𝚗 𝚗𝚊𝚖𝚊 𝚢𝚐 𝚋𝚎𝚗𝚎𝚛 𝚒𝚗𝚒 𝚐𝚔 𝚊𝚍𝚊 𝚐𝚠 𝚌𝚊𝚛𝚒`)
}
}
handler.help = ['mangainfo']
handler.tags = ['anime']
handler.command = /^(mangainfo)$/i
handler.limit = true
export default handler
