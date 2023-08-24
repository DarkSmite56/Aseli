let handler = async (m, {
	conn
}) => {
	let __timers = (new Date - global.db.data.users[m.sender].udahopenbo)
	let _timers = (500000 - __timers)
	let timers = clockString(_timers)
	let user = global.db.data.users[m.sender]
	if (new Date - global.db.data.users[m.sender].udahopenbo > 500000) {
		let hsl = `𝚕𝚎𝚖𝚊𝚜 𝚕𝚞😂 𝚕𝚞 𝚜𝚒𝚑 𝚜𝚔𝚒𝚍𝚒𝚙𝚊𝚙𝚊𝚙 24 𝚓𝚊𝚖 𝚕𝚎𝚖𝚊𝚜𝚔𝚊𝚗 𝚝𝚙𝚒 𝚕𝚞 𝚍𝚊𝚙𝚎𝚝:
3000 Koin
1000 Exp
10 Limit
Dan Gratis Boba + Nasi Padang
`
		global.db.data.users[m.sender].koin += 3000
		global.db.data.users[m.sender].exp += 1000
		global.db.data.users[m.sender].limit += 10

		setTimeout(() => {
			conn.reply(m.chat, hsl, m)
		}, 20000)

		setTimeout(() => {
		    conn.reply(m.chat, `𝚔𝚊𝚖𝚞 𝚍𝚒 𝚙𝚊𝚔𝚜𝚊 𝚞𝚗𝚝𝚞𝚔 𝚖𝚎𝚕𝚊𝚢𝚊𝚗𝚒𝚗𝚢𝚊 24𝚓𝚊𝚖😱`, m)
		}, 18000)

		setTimeout(() => {
			conn.reply(m.chat, `𝚕𝚞 𝚖𝚞𝚕𝚊𝚒 𝚜𝚒𝚒𝚍𝚒𝚙𝚊𝚙𝚊𝚙 𝚢𝚎𝚜 𝚢𝚎𝚜 𝚜𝚔𝚒𝚍𝚒𝚙𝚊𝚙𝚊𝚙 𝚍𝚘𝚙 dop😂`, m)
		}, 15000)

		setTimeout(() => {
			conn.reply(m.chat, `𝚕𝚞 𝚍𝚙𝚎𝚝 𝚙𝚎𝚕𝚊𝚗𝚐𝚐𝚊𝚗 𝚌𝚞𝚢 𝚍𝚊𝚗 𝚕𝚞 𝚋𝚠𝚊 𝚔𝚎 𝙾𝚈𝙾`, m)
		}, 14000)

		setTimeout(() => {
			conn.reply(m.chat, `𝚜𝚎𝚍𝚊𝚗𝚐 𝚖𝚎𝚗𝚌𝚊𝚛𝚒 𝚙𝚎𝚕𝚊𝚗𝚐𝚐𝚊𝚗 (𝙺𝚊𝚕𝚘 𝚊𝚍𝚊 𝚢𝚐 𝚖𝚊𝚞😂)`, m)
		}, 0)
		user.udahopenbo = new Date * 1
	} else conn.reply(m.chat, `*𝚕𝚞 𝚞𝚍𝚑 𝚌𝚊𝚙𝚎𝚔*\n*𝚒𝚜𝚝𝚒𝚛𝚊𝚑𝚊𝚝 𝚍𝚕𝚞 𝚕𝚊𝚑 𝚜𝚎𝚕𝚊𝚖𝚊* ${timers}`, m)
}
handler.help = ['openbo']
handler.tags = ['havefun']
handler.command = /^(openbo)$/i
handler.group = true
export default handler

function clockString(ms) {
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return ['\n' + d, ' *Hari*\n ', h, ' *Jam*\n ', m, ' *Menit*\n ', s, ' *Detik* '].map(v => v.toString().padStart(2, 0)).join('')
}