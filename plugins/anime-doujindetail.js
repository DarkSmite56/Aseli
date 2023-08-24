import fetch from 'node-fetch'

let handler = async(m, { conn, text }) => {
  if (!text) throw `𝙼𝚊𝚗𝚊 𝚕𝚒𝚗𝚔 𝚗𝚢𝚊 😋\nExample: .doujindetail https://212.32.226.234/manga/arofour-dokushin-baricare-obasan-ga-yuujin-no-musuko-demo-aru-toshishita-danshi-to-no-kankei-ni-hamaru-hanashi/`
  m.reply(wait)
  try {
  let res = await fetch(`https://api.xyroinee.xyz/api/anime/doujin-detail?url=${text}&apikey=${global.xyro}`)
  let zel = await res.json()
let milf = `
Title: ${zel.data.title}
Tags: ${zel.data.tags}
Status: ${zel.data.metadata.status}
Type: ${zel.data.metadata.type}
Series: ${zel.data.metadata.series}
Author: ${zel.data.metadata.author}
Rating: ${zel.data.metadata.rating}
Link: 
${zel.data.links[0].title}
${zel.data.links[0].url}`
  conn.reply(m.chat, milf, m)
  } catch (e) {
m.reply(`𝚃𝚎𝚛𝚓𝚊𝚍𝚒 𝚔𝚎𝚜𝚊𝚕𝚊𝚑 coy😱 𝚐𝚔 𝚋𝚒𝚜𝚊 𝚗𝚐𝚊𝚖𝚋𝚒𝚕 𝚍𝚊𝚝𝚊 𝚍𝚛𝚒 𝚄𝚁𝙻 𝚢𝚐 𝚕𝚞 𝚔𝚊𝚜𝚒𝚑`)
}
}
handler.help = ['doujindetail']
handler.tags = ['anime']
handler.command = /^(doujindetail)$/i
handler.limit = true

export default handler