import fetch from 'node-fetch'

let handler = async(m, { conn, text }) => {
  if (!text) throw `𝚖𝚊𝚜𝚞𝚔𝚊𝚗 𝚕𝚒𝚗𝚔 nya😋`
  try {
  let res = await fetch(`https://api.xyroinee.xyz/api/anime/nhentai-detail?url=${text}&apikey=${global.xyro}`)
  let json = await res.json()
  conn.sendFile(m.chat, json.data.thumbnail, '', json.data.info, m)
  } catch (e) {
m.reply(`𝚃𝚎𝚛𝚓𝚊𝚍𝚒 𝚔𝚎𝚜𝚊𝚕𝚊𝚑𝚊𝚗 𝚑𝚍𝚎𝚑 tobat😋 𝚐𝚔 𝚋𝚒𝚜𝚊 𝚊𝚖𝚋𝚒𝚕 𝚍𝚊𝚝𝚊 𝚍𝚛𝚒 𝚄𝚁𝙻 𝚢𝚐 𝚕𝚞 𝚔𝚜𝚒𝚑`)
}
}
handler.help = ['nhentaidetail']
handler.tags = ['anime']
handler.command = /^(nhentaidetail)$/i
handler.limit = true

export default handler