import fetch from 'node-fetch'

let handler = async(m, { conn, text }) => {
  if (!text) throw `😨 𝚔𝚊𝚖𝚞 𝚗𝚐𝚊𝚙𝚊𝚒𝚗, 𝚢𝚊𝚞𝚍𝚎𝚑 𝚖𝚊𝚜𝚞𝚔𝚒𝚗 𝚗𝚊𝚖𝚊`
  try {
  let res = await fetch(`https://api.xyroinee.xyz/api/anime/nhentai-search?q=${text}&apikey=${global.xyro}`)
  let json = await res.json()
  json = json.data.map((v) => `*Author:* ${v.author}\n*Index:* ${v.index}\n*Title:* ${v.title}\n*Link:* ${v.link}`).join`\n\n°°°°°°°°°°°°°°°°°°°°°°°°°°°°°\n\n`
  conn.reply(m.chat, json, m)
  } catch (e) {
m.reply(`𝚃𝚎𝚛𝚓𝚊𝚍𝚒 𝚔𝚎𝚜𝚊.. 𝚘𝚢 𝚗𝚐𝚊𝚙𝚊𝚒𝚗 𝚕𝚞 𝚌𝚊𝚛𝚒 𝚐𝚒𝚗𝚒𝚊𝚗 hdeh😅 𝚒𝚗𝚒 𝚕𝚞 𝚖𝚊𝚜𝚞𝚔𝚒𝚗 𝚢𝚐 𝚋𝚗𝚎𝚛 𝚗𝚊𝚖𝚊𝚗𝚢𝚊 𝚍𝚘𝚗𝚐`)
}
}
handler.help = ['nhentaisearch']
handler.tags = ['anime']
handler.command = /^(nhentaisearch)$/i
handler.limit = true

export default handler