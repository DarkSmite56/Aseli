import fetch from 'node-fetch'
let handler = async(m, { conn, text }) => {
  if (!text) throw `𝙼𝚜𝚞𝚔𝚒𝚗 𝚗𝚊𝚖𝚊 𝚌𝚑𝚊𝚛𝚊𝚗𝚢𝚊 cuy😁`
  try {
  let res = await fetch(`https://api.xyroinee.xyz/api/anime/character?q=${text}&apikey=${global.xyro}`)
  let json = await res.json()
  res = json.data.map((v) => `*Name:* ${v.name}\n*Alias:* ${v.alias_name}\n*Anime:* ${v.anime}\n*Manga:* ${v.manga}\n*Thumbnail:* ${v.thumbnail}\n*Link:* ${v.url}`).join`\n\n°°°°°°°°°°°°°°°°°°°°°°°°°°°°°\n\n`
  conn.sendFile(m.chat, json.data[0].thumbnail, 'anunya.jpg', res, m)
  } catch (e) {
m.reply(`𝚒𝚗𝚒 𝚔𝚎𝚔 𝚝𝚎𝚛𝚓𝚊𝚍𝚒 𝚔𝚎𝚜𝚊𝚕𝚊𝚑𝚊𝚗 𝙲𝚑𝚊𝚛 𝚢𝚐 𝚕𝚞 𝚌𝚛𝚒 𝚔𝚎𝚔 𝚐𝚔 𝚊𝚍`)
}
}
handler.help = ['charainfo']
handler.tags = ['anime']
handler.command = /^(charainfo)$/i
handler.limit = true
export default handler
