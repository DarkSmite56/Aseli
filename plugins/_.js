import fs from 'fs'

let handler = async (m, { conn }) => {
	let pfft = `𝚑𝚊𝚒 𝚜𝚋𝚕𝚞𝚖 𝚕𝚞 𝚙𝚔𝚎 𝚗𝚒 𝚋𝚘𝚝 𝚋𝚊𝚌𝚊 𝚛𝚞𝚕𝚎𝚜 𝚍𝚕𝚞
	
1. 𝚓𝚐𝚗 𝚜𝚙𝚊𝚖 bot😡
2. 𝚓𝚐𝚗 𝚗𝚎𝚕𝚙𝚘𝚗² bot🤬
3. 𝚓𝚐𝚗 𝚗𝚎𝚕𝚙𝚘𝚗 𝚗𝚘 𝙾𝚠𝚗𝚎𝚛 𝚐𝚠 😠
4. 𝚓𝚐𝚗 𝚜𝚙𝚊𝚖 𝚔𝚎 𝙾𝚠𝚗𝚎𝚛 𝚐𝚠 😤

*𝚔𝚎𝚝𝚒𝚔 .allmenu 𝚞𝚗𝚝𝚞𝚔 𝚖𝚎𝚕𝚒𝚑𝚊𝚝 𝚜𝚎𝚖𝚞𝚊 𝚖𝚎𝚗𝚞*

_Note: 𝚔𝚕𝚘 𝚕𝚞 𝚐𝚔 𝚝𝚊𝚞 𝚌𝚛𝚊 𝚐𝚞𝚗𝚊𝚒𝚗 𝚋𝚘𝚝 𝚔𝚝𝚒𝚔 𝚝𝚞𝚝𝚘𝚛𝚒𝚊𝚕_


`;
conn.sendMessage(m.chat, {
      text: pfft,
      contextInfo: {
      externalAdReply: {
      title: `Clara - Official Group`,
      body: global.author,
      thumbnailUrl: global.fotonya,
      sourceUrl: sgc,
      mediaType: 1,
      renderLargerThumbnail: true
      }}})
}
handler.command = /^(menu)$/i;

export default handler;
