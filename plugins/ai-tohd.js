import fetch from 'node-fetch'
import uploadImage from '../lib/uploadImage.js'
import uploadFile from '../lib/uploadFile.js' 

let handler = async (m, { conn, usedPrefix, command, text }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = await conn.getName(who)
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!mime) throw '𝚂𝚎𝚗𝚍 𝚔𝚒𝚛𝚒𝚖 𝚙𝚒𝚌𝚝𝚞𝚛𝚎 𝚏𝚘𝚝𝚘 𝚍𝚎𝚗𝚐𝚊𝚗 with😂 caption .tohd'
m.reply(wait)
let media = await q.download()
let url = await uploadFile(media)
let hasil = await (await fetch(`https://api.xyroinee.xyz/api/ai/remini?url=${url}&apikey=${global.xyro}`)).buffer()
await conn.sendFile(m.chat, hasil, '', '_𝙸𝚗𝚒 hasilnya😁_', m)
	
}
handler.help = ['tohd']
handler.tags = ['ai']
handler.command = /^(tohd)$/i

handler.register = false
handler.limit = true

export default handler