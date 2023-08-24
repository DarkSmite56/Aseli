import fetch from 'node-fetch'

let handler = async(m, { conn, text }) => {
  if (!text) throw `𝚗𝚢𝚊𝚛𝚒 𝚊𝚙𝚊?`
  try {
  let res = await fetch(`https://api.xyroinee.xyz/api/anime/mangatoons?q=${text}&apikey=${global.xyro}`)
  let json = await res.json()
  json = json.data.map((v) => `*Judul:* ${v.judul}\n*Genre:* ${v.genre}\n*Link:* ${v.link}\n*Thumbnail:* ${v.thumbnail}`).join`\n\n°°°°°°°°°°°°°°°°°°°°°°°°°°°°°\n\n`
  conn.reply(m.chat, json, m)
  } catch (e) {
m.reply(`𝙺𝚎𝚜𝚊𝚕𝚊𝚑𝚊𝚗 terjadi😋🤗🤡😱 𝚖𝚊𝚜𝚞𝚔𝚊𝚗 𝙼𝚊𝚗𝚐𝚊𝚝𝚘𝚘𝚗𝚜 𝚢𝚐 𝚋𝚎𝚗𝚊𝚛 pelis🥺`)
}
}
handler.help = ['mangatoons']
handler.tags = ['anime']
handler.command = /^(mangatoons)$/i
handler.limit = true

export default handler