let fetch = require('node-fetch')

let handler = async (m, { conn, args, usedPrefix, command, isPrems }) => {
    let er = `
┌〔 Gacha Nsfw 〕
├ yaoi [yang make gay]
├ ecchi
├ hentai
├ ahegao
├ hololewd
├ sideoppai
├ animefeets
├ animebooty
├ chiisaihentai
├ animethighss
├ hentaiparadise
├ hentaifemdom
├ lewdanimegirls
├ biganimetiddies
├ animebellybutton
├ hentai4everyone
├ animearmpits [fav]
└────

┌〔 Gacha Nsfw v2 〕
├ ero
├ yuri
├ trap
├ lewd
├ eron
├ solo
├ keta
├ tits
├ erok
├ solog
├ feetg
├ lewdk
├ pussy_jpg
├ femdom
├ eroyuri
├ cum_jpg
├ blowjob
├ erofeet
├ holoero
├ classic
├ erokemo
├ futanari
└────

example:
${usedPrefix + command} hololewd
${usedPrefix + command} pussy_jpg
    `.trim()
	if (!args[0]) throw er

    switch (args[0].toLowerCase()) {
				case 'chiisaihentai':
                case 'yaoi':
                case 'ecchi':
                case 'hentai':
                case 'ahegao':
                case 'hololewd':
                case 'sideoppai':
                case 'animefeets':
                case 'animebooty':
                case 'animethighss':
                case 'hentaiparadise':
                case 'animearmpits':
                case 'hentaifemdom':
                case 'lewdanimegirls':
                case 'biganimetiddies':
                case 'animebellybutton':
                case 'hentai4everyone':
		let res = await fetch(global.API('lolhum', '/api/random/nsfw/' + args[0].toLowerCase(), {}, 'apikey'))
		m.reply(global.wait)
			if (!res.ok) throw await res.text()
			let img = await res.buffer()
			if (!img) throw img
				conn.sendButtonImg(m.chat, await(img), 'Hayoo ngapain gosok layar hp ke tytyd', watermark, 'Gacha Again', `${usedPrefix}nsfwgacha ` + args[0].toLowerCase(), m)
            	break
				case 'ero':
				case 'yuri':
				case 'trap':
				case 'lewd':
				case 'eron':
				case 'solo':
				case 'keta':
				case 'tits':
				case 'erok':
				case 'solog':
				case 'feetg':
				case 'lewdk':
				case 'pussy_jpg':
				case 'femdom':
				case 'eroyuri':
				case 'cum_jpg':
				case 'blowjob':
				case 'erofeet':
				case 'holoero':
				case 'classic':
				case 'erokemo':
				case 'futanari':
				let res = await fetch(global.API('lolhum', '/api/random2/' + args[0].toLowerCase(), {}, 'apikey'))
		m.reply(global.wait)
			if (!res.ok) throw await res.text()
			let img = await res.buffer()
			if (!img) throw img
				conn.sendButtonImg(m.chat, await(img), 'Hayoo ngapain gosok layar hp ke tytyd', watermark, 'Gacha Again', `${usedPrefix}nsfwgacha ` + args[0].toLowerCase(), m)
				break
        default:
            throw er
    }
}
handler.help = ['nsfwgacha'].map(v => v + ' <type>')
handler.tags = ['hentai']
handler.command = /^nsfwgacha$/i

handler.premium = true
handler.limit = true

module.exports = handler
//Credit: By KhaelSan