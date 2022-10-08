const axios = require('axios');


function getStr(str, start, end) {
	string = str.split(start)[1]
	string2 = string.split(end)
	return string2[0];
};


var eipiai = function(id_p,callback){

const opt = {
	method:'GET',
	url:'https://brawlify.com/stats/profile/'+id_p
};
axios(opt)
.then(res => {
	// General Stats
	let name = getStr(res.data, '<meta name=twitter:title content="',' Profile Stats');
	let trophies = getStr(res.data, '<span class=shadow-normal>Trophies</span><td class="text-left shadow-normal text-warning">','<tr>');
	let maxTrophies = getStr(res.data, 'Highest</span></a><td class="text-left text-hp2 shadow-normal">','<tr>');
	let level = getStr(res.data, 'Level</span></a><td class="text-left text-info shadow-normal">','<tr>');
	let brawlersUnblock = getStr(res.data, 'Brawlers</span><td class="text-left text-hp shadow-normal">','<span ');
	let brawlersBlocked = getStr(res.data, '<span class=text-muted> / ','</span><tr><tr><th class="text-hp font-weight-normal" itemprop=name>');
	let victoriesthree = getStr(res.data, '3 vs 3 Victories</span></a><td class="text-left font-m2 shadow-normal">','<tr>');
	let vitoriasSolo = getStr(res.data, 'Solo Victories</span></a><td class="text-left font-m3 shadow-normal">','<tr>');
	let vitoriasDuo = getStr(res.data, 'Duo Victories</span></a><td class="text-left font-m4 shadow-normal">','<tr>')
	var dados = {
		nome: name,
		trofeus: trophies,
		maxTrofeus: maxTrophies,
		level: level,
		brawlersDesbloqueados: brawlersUnblock,
		brawlersTotais: brawlersBlocked,
		vitoriasTres: victoriesthree,
		vitoriasSolo:vitoriasSolo,
		vitoriasDuo:vitoriasDuo,
	}
	callback(dados)
}).catch(err => {
	callback({
		erro:'true',
		msg:'incorrect id',
	})
})
}

module.exports = eipiai;