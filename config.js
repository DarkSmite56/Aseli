import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

// Owner
global.owner = [
['6285760451683', 'Zeltoria', true],
]
global.mods = []
global.prems = []
// Info
global.nomorwa = '628971507809'
global.packname = '𝙳𝚊𝚛𝚔𝚉 𝚋𝚢'
global.author = '© 𝙳𝚊𝚛𝚔𝚂'
global.namebot = '​𝙳𝚊𝚛𝚔𝙱𝚘𝚝𝚣'
global.wm = '© 𝙳𝚊𝚛𝚔𝚉 𝚋𝚢 𝙳𝚊𝚛𝚔𝚂'
global.stickpack = '𝙳𝚊𝚛𝚔𝚉 𝚋𝚢'
global.stickauth = '© 𝙳𝚊𝚛𝚔𝚂'
global.fotonya = 'https://telegra.ph/file/edc03ab2e6825472d5ea4.jpg'
// Link Sosmed
global.sig = 'https://www.instagram.com/sean_d1456'
global.sgh = 'https://github.com/DarkSmite56'
global.sgc = 'https://chat.whatsapp.com/LAWdMIQri9SKee5kqmISH0'
// Donasi
global.psaweria = '-'
global.ptrakterr '-'
global.povo = '-'
// Info Wait
global.wait = '_𝙻𝚐𝚒 𝚙𝚛𝚘𝚜𝚎𝚜 𝚜𝚋𝚛_....'
global.eror = '𝙴𝚛𝚘𝚛 𝚒𝚗𝚒 𝚖𝚊𝚑 𝚌𝚘𝚋𝚊 𝚕𝚐𝚒 𝚍𝚑'
global.multiplier = 69 
// Apikey
global.rose = 'Rk-54cd2050e2e46b5ebb4fe2e4' //api.itsrose.life
global.xyro = 'ct4gjRWnpL'// api.xyroinee.xyz
// Catatan : Jika Mau Work Fiturnya
// Masukan Apikeymu
// Gapunya Apikey? Ya Daftar
// Daftar Ke Website Tersebut Untuk
// Mendapatkan Apikey Kamu
global.APIs = {
    xyro: "https://api.xyroinee.xyz",
    popcat : 'https://api.popcat.xyz'
}

/*Apikey*/
global.APIKeys = {
    "https://api.xyroinee.xyz": "apikey",
}

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
