import fetch from 'node-fetch'

let handler = async(m, { conn, text }) => {
  if (!text) throw `𝚗𝚢𝚊𝚛𝚒 𝚊𝚙?`
  let res = await fetch(`https://api.xyroinee.xyz/api/anime/doujin-search?q=${text}&apikey=${global.xyro}`)
  m.reply(wait)
  try {
  let json = await res.json()
  let foto = json.data[0].thumbnail
  json = json.data.map((v) => `*Title:* ${v.title}\n*Type:* ${v.type}\n*Score:* ${v.score}\n*Status:* ${v.status}\n*Link:* ${v.url}`).join`\n\n°°°°°°°°°°°°°°°°°°°°°°°°°°°°°\n\n`
  conn.sendFile(m.chat, foto, '', json, m)
  } catch (e) {
m.reply(`𝚃𝚎𝚛𝚓𝚊𝚍𝚒 kesalahan😱😱 𝚍𝚘𝚞𝚓𝚒𝚗 𝚕𝚞 𝚐𝚔 𝚊𝚍𝚊 𝚔𝚎𝚔 𝚗𝚢𝚊`)
}
}
handler.help = ['doujinsearch']
handler.tags = ['anime']
handler.command = /^(doujinsearch)$/i
handler.limit = true

export default handler