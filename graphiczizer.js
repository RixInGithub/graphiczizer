startDate = new Date()
icc = atob("AAAjeGxjbXMCEAAAbW50clJHQiBYWVogB98ACwAKAAwAEgA4YWNzcCpuaXgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPbWAAEAAAAA0y1sY21zAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALZGVzYwAAAQgAAACwY3BydAAAAbgAAAESd3RwdAAAAswAAAAUY2hhZAAAAuAAAAAsclhZWgAAAwwAAAAUYlhZWgAAAyAAAAAUZ1hZWgAAAzQAAAAUclRSQwAAA0gAACAMZ1RSQwAAA0gAACAMYlRSQwAAA0gAACAMY2hybQAAI1QAAAAkZGVzYwAAAAAAAAAcc1JHQi1lbGxlLVYyLXNyZ2J0cmMuaWNjAAAAAAAAAAAAAAAdAHMAUgBHAEIALQBlAGwAbABlAC0AVgAyAC0AcwByAGcAYgB0AHIAYwAuAGkAYwBjAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB0ZXh0AAAAAENvcHlyaWdodCAyMDE1LCBFbGxlIFN0b25lICh3ZWJzaXRlOiBodHRwOi8vbmluZWRlZ3JlZXNiZWxvdy5jb20vOyBlbWFpbDogZWxsZXN0b25lQG5pbmVkZWdyZWVzYmVsb3cuY29tKS4gVGhpcyBJQ0MgcHJvZmlsZSBpcyBsaWNlbnNlZCB1bmRlciBhIENyZWF0aXZlIENvbW1vbnMgQXR0cmlidXRpb24tU2hhcmVBbGlrZSAzLjAgVW5wb3J0ZWQgTGljZW5zZSAoaHR0cHM6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL2xpY2Vuc2VzL2J5LXNhLzMuMC9sZWdhbGNvZGUpLgAAAABYWVogAAAAAAAA9tYAAQAAAADTLXNmMzIAAAAAAAEMQgAABd7///MlAAAHkwAA/ZD///uh///9ogAAA9wAAMBuWFlaIAAAAAAAAG+gAAA49QAAA5BYWVogAAAAAAAAJJ8AAA+EAAC2xFhZWiAAAAAAAABilwAAt4cAABjZY3VydgAAAAAAABAAAAAAAQACAAQABQAGAAcACQAKAAsADAAOAA8AEAARABMAFAAVABYAGAAZABoAGwAcAB4AHwAgACEAIwAkACUAJgAoACkAKgArAC0ALgAvADAAMgAzADQANQA3ADgAOQA6ADsAPQA+AD8AQABCAEMARABFAEcASABJAEoATABNAE4ATwBRAFIAUwBUAFUAVwBYAFkAWgBcAF0AXgBfAGEAYgBjAGQAZgBnAGgAaQBrAGwAbQBuAG8AcQByAHMAdAB2AHcAeAB5AHsAfAB9AH4AgACBAIIAgwCFAIYAhwCIAIkAiwCMAI0AjgCQAJEAkgCTAJUAlgCXAJgAmgCbAJwAnQCfAKAAoQCiAKQApQCmAKcAqACqAKsArACtAK8AsACxALIAtAC1ALYAtwC5ALoAuwC8AL4AvwDAAMEAwgDEAMUAxgDHAMkAygDLAMwAzgDPANAA0QDTANQA1QDXANgA2QDaANwA3QDeAOAA4QDiAOQA5QDmAOgA6QDqAOwA7QDvAPAA8QDzAPQA9gD3APgA+gD7AP0A/gD/AQEBAgEEAQUBBwEIAQoBCwENAQ4BDwERARIBFAEVARcBGAEaARsBHQEfASABIgEjASUBJgEoASkBKwEtAS4BMAExATMBNAE2ATgBOQE7ATwBPgFAAUEBQwFFAUYBSAFKAUsBTQFPAVABUgFUAVUBVwFZAVoBXAFeAWABYQFjAWUBZwFoAWoBbAFuAW8BcQFzAXUBdgF4AXoBfAF+AX8BgQGDAYUBhwGJAYoBjAGOAZABkgGUAZYBlwGZAZsBnQGfAaEBowGlAacBqQGrAawBrgGwAbIBtAG2AbgBugG8Ab4BwAHCAcQBxgHIAcoBzAHOAdAB0gHUAdYB2AHaAdwB3gHhAeMB5QHnAekB6wHtAe8B8QHzAfUB+AH6AfwB/gIAAgICBAIHAgkCCwINAg8CEgIUAhYCGAIaAh0CHwIhAiMCJQIoAioCLAIuAjECMwI1AjgCOgI8Aj4CQQJDAkUCSAJKAkwCTwJRAlMCVgJYAloCXQJfAmECZAJmAmkCawJtAnACcgJ1AncCeQJ8An4CgQKDAoYCiAKLAo0CkAKSApUClwKaApwCnwKhAqQCpgKpAqsCrgKwArMCtQK4ArsCvQLAAsICxQLIAsoCzQLPAtIC1QLXAtoC3QLfAuIC5ALnAuoC7ALvAvIC9QL3AvoC/QL/AwIDBQMIAwoDDQMQAxMDFQMYAxsDHgMgAyMDJgMpAywDLgMxAzQDNwM6Az0DPwNCA0UDSANLA04DUQNUA1YDWQNcA18DYgNlA2gDawNuA3EDdAN3A3oDfQOAA4IDhQOIA4sDjgORA5QDmAObA54DoQOkA6cDqgOtA7ADswO2A7kDvAO/A8IDxQPJA8wDzwPSA9UD2APbA98D4gPlA+gD6wPuA/ID9QP4A/sD/gQCBAUECAQLBA8EEgQVBBgEHAQfBCIEJQQpBCwELwQzBDYEOQQ9BEAEQwRHBEoETQRRBFQEVwRbBF4EYgRlBGgEbARvBHMEdgR5BH0EgASEBIcEiwSOBJIElQSZBJwEoASjBKcEqgSuBLEEtQS4BLwEvwTDBMYEygTOBNEE1QTYBNwE4ATjBOcE6gTuBPIE9QT5BP0FAAUEBQgFCwUPBRMFFgUaBR4FIgUlBSkFLQUxBTQFOAU8BUAFQwVHBUsFTwVSBVYFWgVeBWIFZgVpBW0FcQV1BXkFfQWBBYQFiAWMBZAFlAWYBZwFoAWkBagFrAWvBbMFtwW7Bb8FwwXHBcsFzwXTBdcF2wXfBeMF5wXrBe8F9AX4BfwGAAYEBggGDAYQBhQGGAYcBiEGJQYpBi0GMQY1BjkGPgZCBkYGSgZOBlMGVwZbBl8GYwZoBmwGcAZ0BnkGfQaBBoUGigaOBpIGlwabBp8GpAaoBqwGsQa1BrkGvgbCBsYGywbPBtQG2AbcBuEG5QbqBu4G8gb3BvsHAAcEBwkHDQcSBxYHGwcfByQHKActBzEHNgc6Bz8HQwdIB00HUQdWB1oHXwdjB2gHbQdxB3YHewd/B4QHiQeNB5IHlwebB6AHpQepB64Hswe3B7wHwQfGB8oHzwfUB9kH3QfiB+cH7AfxB/UH+gf/CAQICQgNCBIIFwgcCCEIJggrCC8INAg5CD4IQwhICE0IUghXCFwIYQhmCGsIcAh1CHoIfwiECIkIjgiTCJgInQiiCKcIrAixCLYIuwjACMUIygjPCNQI2QjfCOQI6QjuCPMI+Aj9CQMJCAkNCRIJFwkdCSIJJwksCTEJNwk8CUEJRglMCVEJVglbCWEJZglrCXEJdgl7CYEJhgmLCZEJlgmbCaEJpgmrCbEJtgm8CcEJxgnMCdEJ1wncCeIJ5wntCfIJ+An9CgIKCAoNChMKGQoeCiQKKQovCjQKOgo/CkUKSgpQClYKWwphCmYKbApyCncKfQqDCogKjgqUCpkKnwql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ZmdmfWaSZqdmvWbSZuhm/WcSZyhnPWdTZ2hnfmeTZ6lnvmfUZ+ln/2gUaCpoP2hVaGpogGiWaKtowWjWaOxpAmkXaS1pQ2lYaW5phGmZaa9pxWnbafBqBmocajJqSGpdanNqiWqfarVqymrgavZrDGsiazhrTmtka3prkGuma7xr0mvoa/5sFGwqbEBsVmxsbIJsmGyubMRs2mzwbQZtHG0zbUltX211bYttoW24bc5t5G36bhFuJ249blNuam6AbpZurW7Dbtlu8G8GbxxvM29Jb2Bvdm+Mb6NvuW/Qb+Zv/XATcCpwQHBXcG1whHCacLFwx3DecPRxC3EicThxT3FmcXxxk3GqccBx13HucgRyG3IyckhyX3J2co1ypHK6ctFy6HL/cxZzLHNDc1pzcXOIc59ztnPNc+Rz+nQRdCh0P3RWdG10hHSbdLJ0yXTgdPd1DnUmdT11VHVrdYJ1mXWwdcd13nX2dg12JHY7dlJ2anaBdph2r3bHdt529XcMdyR3O3dSd2p3gXeYd7B3x3fed/Z4DXgleDx4VHhreIJ4mnixeMl44Hj4eQ95J3k+eVZ5bnmFeZ15tHnMeeN5+3oTeip6QnpaenF6iXqherh60HroewB7F3sve0d7X3t2e457pnu+e9Z77nwFfB18NXxNfGV8fXyVfK18xXzcfPR9DH0kfTx9VH1sfYR9nH20fc195X39fhV+LX5Ffl1+dX6NfqV+vn7Wfu5/Bn8efzd/T39nf39/l3+wf8h/4H/5gBGAKYBBgFqAcoCKgKOAu4DUgOyBBIEdgTWBToFmgX+Bl4GwgciB4YH5ghKCKoJDgluCdIKMgqWCvoLWgu+DB4MggzmDUYNqg4ODm4O0g82D5YP+hBeEMIRIhGGEeoSThKyExITdhPaFD4UohUGFWoVyhYuFpIW9hdaF74YIhiGGOoZThmyGhYaehreG0IbphwKHG4c0h02HZ4eAh5mHsofLh+SH/YgXiDCISYhiiHuIlYiuiMeI4Ij6iROJLIlGiV+JeImRiauJxIneifeKEIoqikOKXYp2io+KqYrCityK9YsPiyiLQotbi3WLjouoi8KL24v1jA6MKIxCjFuMdYyPjKiMwozcjPWND40pjUKNXI12jZCNqY3Djd2N944RjiuORI5ejniOko6sjsaO4I76jxOPLY9Hj2GPe4+Vj6+PyY/j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")
;(async function() {
	function appendBuf(target, arr) {
		var str = arr.map(function(a) {return String.fromCodePoint(a)}).join("")
		return Buffer.concat([target, Buffer.from(str)])
	}
	function getDatArr(data) {
		function reorderColors(arr) {
			var n = arr.length / 4
			var r = new Array(n)
			var g = new Array(n)
			var b = new Array(n)
			var a = new Array(n)
			for (var i = 0; i < n; i++) {
				r[i] = arr[i * 4]
				g[i] = arr[i * 4 + 1]
				b[i] = arr[i * 4 + 2]
				a[i] = 255
			}
			return r.concat(r, g, b, a)
		}
		return reorderColors(data)
	}
	function pxDatToKraLayer(frmDat) {
		var buf = Buffer.from(`VERSION 2\nTILEWIDTH ${w}\nTILEHEIGHT ${h}\nPIXELSIZE 4\nDATA 1\n0,0,LZF,${(w * h * 4) + 1}\n\x00`)
		buf = appendBuf(buf, getDatArr(frmDat))
		return buf
	}
	function createEmptElems(par, els) {
		for (var elNm of els) {
			par.appendChild(docInf.createElement(elNm))
		}
		return par
	}
	var fs = require("fs")
	var canvas = require("node-canvas-webgl")
	var fx = require("./fx.js")
	var {JSDOM} = require("jsdom")
	var {minify} = await import("minify-xml")
	var JSZip = require("jszip")
	var uuid = require("uuid").v4
	var kra = new JSZip()
	var totalFrms = 0
	var outName = "Graphiczizer Output"
	var [w, h] = [135, 101]
	var canv = canvas.createCanvas(w, h)
	var ctx2d = canv.getContext("2d", {willReadFrequently: true, alpha: true})
	var chFunc
	var initMem = {canv, frms: 0}
	var mem
	var iters = 1
	var count = 0
	var kraFrms = []
	var kraUuids = []
	var kraOffs = []
	var frmInd
	kra.file("mimetype", "application/x-krita", {compression: "STORE"})
	console.log("Performing iterations and converting frames to Krita frames... (this may take a few moments...)")
	while (count < iters) {
		kraOffs.push(totalFrms)
		chFunc = fx[Math.floor(Math.random() * fx.length)]
		frmInd = kraFrms.length
		kraFrms.push([])
		mem = {...initMem, me: chFunc}
		while (chFunc(ctx2d, mem)) {
			kraFrms[frmInd].push(pxDatToKraLayer(ctx2d.getImageData(0, 0, w, h).data))
			mem.frms += 1
			totalFrms += 1
		}
		kraFrms[frmInd].push(pxDatToKraLayer(ctx2d.getImageData(0, 0, w, h).data))
		var u = uuid()
		while (kraUuids.indexOf(u) != -1) u = uuid()
		kraUuids.push(u)
		count += 1
	}
	var endDate = new Date()
	console.log("Done!")
	console.log("Adding Krita frames...")
	kra.file(`${outName}/layers/.defaultpixel`, Buffer.alloc(4), {binary: true})
	for (var l in kraFrms) {
		l = Number(l) // See line 91
		lFile = `${outName}/layers/layer${l + 1}`
		kra.file(`${lFile}.icc`, icc) // Data Analyst confirmed ICC files from two layers are exactly the same.
		var keyframesJSDOM = new JSDOM(`<keyframes xmlns="http://www.calligra.org/DTD/krita-keyframes"><channel name="content"></channel></keyframes>`, {contentType: "text/xml"})
		var keyframes = keyframesJSDOM.window.document
		var kfPar = keyframes.querySelector("keyframes")
		var kf
		for (var f in kraFrms[l]) { // A buffer? More like a bummer...
			f = Number(f) // See line 132
			var fFile = `${lFile}${!!f ? `.f${f + 1}` : ""}` // layerN, then layerN.f2, so on...
			kra.file(`${fFile}.defaultpixel`, Buffer.alloc(4), {binary: true}) // transparency support? more like transGENDER support!!1 hehe... hehehehaha... hahaha....
			console.log(kraFrms[l][f])
			kra.file(fFile, kraFrms[l][f], {binary: true})
			kf = keyframes.createElement("keyframe")
			kf.setAttribute("frame", fFile.split("/").reverse()[0])
			kf.setAttribute("time", f)
			kf.setAttribute("color-label", 0) // `color-label` is user defined, so I set it to the default.
			kf.appendChild(keyframes.createElement("offset"))
			kf.querySelector("offset").setAttribute("x", 0)
			kf.querySelector("offset").setAttribute("y", 0)
			kf.querySelector("offset").setAttribute("type", "point")
			kfPar.appendChild(kf)
		}
		var kfStr = `<?xml version="1.0" encoding="UTF-8"?>\n<!DOCTYPE keyframes PUBLIC '-//KDE//DTD krita-keyframes 1.0//EN' 'http://www.calligra.org/DTD/krita-keyframes-1.0.dtd'>\n${keyframesJSDOM.serialize()}`.split(" xmlns=\"\"").join("")
		kra.file(`${lFile}.keyframes.xml`, kfStr)
	}
	console.log("Done!")
	console.log("Constructing documentinfo.xml...")
	var docInfJSDOM = new JSDOM(`<document-info xmlns="http://www.calligra.org/DTD/document-info"></document-info>\n`, {contentType: "text/xml"})
	var docInf = docInfJSDOM.window.document
	var about = docInf.createElement("about")
	about.removeAttribute("xmlns")
	about.appendChild(docInf.createElement("title"))
	about.querySelector("title").textContent = outName
	about = createEmptElems(about, ["description", "subject"])
	about.appendChild(docInf.createElement("abstract"))
	about.querySelector("abstract").appendChild(docInf.createCDATASection(""))
	about = createEmptElems(about, ["keyword"])
	about.appendChild(docInf.createElement("initial-creator"))
	about.querySelector("initial-creator").textContent = "Unknown"
	about.appendChild(docInf.createElement("editing-cycles"))
	about.querySelector("editing-cycles").textContent = "1"
	about.appendChild(docInf.createElement("editing-time"))
	about.querySelector("editing-time").textContent = Math.floor((endDate - startDate) / 1000)
	about.appendChild(docInf.createElement("date"))
	about.querySelector("date").textContent = endDate.toISOString().split(".")[0]
	about.appendChild(docInf.createElement("creation-date"))
	about.querySelector("creation-date").textContent = startDate.toISOString().split(".")[0]
	about = createEmptElems(about, ["language", "license"])
	var author = docInf.createElement("author")
	author.removeAttribute("xmlns")
	author = createEmptElems(author, ["full-name", "creator-first-name", "creator-last-name", "initial", "author-title", "position", "company"])
	docInf.querySelector("document-info").appendChild(about)
	docInf.querySelector("document-info").appendChild(author)
	var docInfStr = `<?xml version="1.0" encoding="UTF-8"?>\n<!DOCTYPE document-info PUBLIC '-//KDE//DTD document-info 1.1//EN' 'http://www.calligra.org/DTD/document-info-1.1.dtd'>\n${docInfJSDOM.serialize()}`.split(" xmlns=\"\"").join("")
	kra.file("documentinfo.xml", docInfStr)
	console.log("Done!")
	console.log("Constructing maindoc.xml...")
	var mainJSDOM = new JSDOM(`<DOC xmlns="http://www.calligra.org/DTD/krita" editor="Graphiczizer" syntaxVersion="2.0" kritaVersion="5.2.2"><IMAGE mime="application/x-kra" width="${w}" height="${h}" profile="sRGB-elle-V2-srgbtrc.icc" description="" colorspacename="RGBA" y-res="72" x-res="72" name="${outName}"></IMAGE></DOC>`, {contentType: "text/xml"})
	var main = mainJSDOM.window.document
	var img = main.querySelector("IMAGE")
	img.appendChild(main.createElement("layers"))
	for (var l in kraFrms) {
		l = Number(l) // For some reason `l.toString()` without `Number(l)` returns `01` for the first frame.
		var lEl = main.createElement("layer")
		lEl.setAttribute("x", 0)
		lEl.setAttribute("y", 0)
		lEl.setAttribute("colorlabel", 0)
		lEl.setAttribute("filename", `layer${l += 1}`) // <var> += 1 returns <var> + 1 and changes it by 1.
		lEl.setAttribute("name", `Animation #${l}`)
		lEl.setAttribute("onionskin", 0)
		lEl.setAttribute("compositeop", "overlay")
		lEl.setAttribute("uuid", `{${kraUuids[l - 1]}}`)
		lEl.setAttribute("collapsed", 0)
		lEl.setAttribute("selected", l == 1)
		lEl.setAttribute("opacity", 255)
		lEl.setAttribute("channellockflags", "")
		lEl.setAttribute("colorspacename", "RGBA")
		lEl.setAttribute("channelflags", "")
		lEl.setAttribute("nodetype", "paintlayer")
		lEl.setAttribute("keyframes", `${lEl.getAttribute("filename")}.keyframes.xml`)
		lEl.setAttribute("visible", 1)
		lEl.setAttribute("locked", lEl.getAttribute("visible"))
		img.querySelector("layers").appendChild(lEl)
	}
	img.appendChild(main.createElement("ProjectionBackgroundColor"))
	img.querySelector("ProjectionBackgroundColor").setAttribute("ColorData", "AAAAAA==")
	img.appendChild(main.createElement("GlobalAssistantsColor"))
	img.querySelector("GlobalAssistantsColor").setAttribute("SimpleColorData", "176,176,176,255")
	img = createEmptElems(img, ["MirrorAxis", "Palettes", "resources"])
	img.appendChild(main.createElement("animation"))
	img.querySelector("animation").appendChild(main.createElement("framerate"))
	img.querySelector("animation").querySelector("framerate").setAttribute("value", "24")
	img.querySelector("animation").querySelector("framerate").setAttribute("type", "value")
	img.querySelector("animation").appendChild(main.createElement("range"))
	img.querySelector("animation").querySelector("range").setAttribute("from", 0)
	img.querySelector("animation").querySelector("range").setAttribute("to", totalFrms)
	img.querySelector("animation").querySelector("range").setAttribute("type", "timerange")
	img.querySelector("animation").appendChild(main.createElement("currentTime"))
	img.querySelector("animation").querySelector("currentTime").setAttribute("value", "0")
	img.querySelector("animation").querySelector("currentTime").setAttribute("type", "value")
	var mainStr = `<?xml version="1.0" encoding="UTF-8"?>\n<!DOCTYPE DOC PUBLIC '-//KDE//DTD krita 2.0//EN' 'http://www.calligra.org/DTD/krita-2.0.dtd'>\n${mainJSDOM.serialize()}`.split(" xmlns=\"\"").join("")
	kra.file("maindoc.xml", mainStr)
	console.log("Done!")
	console.log("Creating additional files...")
	var animJSDOM = new JSDOM(`<animation-metadata xmlns="http://www.calligra.org/DTD/krita"></animation-metadata>`, {contentType: "text/xml"})
	var animDoc = animJSDOM.window.document
	var animPar = animDoc.querySelector("animation-metadata")
	animPar.innerHTML = img.querySelector("animation").innerHTML // Copy over existing values
	animPar.appendChild(animDoc.createElement("export-settings"))
	animPar.querySelector("export-settings").appendChild(animDoc.createElement("sequenceFilePath"))
	animPar.querySelector("export-settings").querySelector("sequenceFilePath").setAttribute("value", "")
	animPar.querySelector("export-settings").querySelector("sequenceFilePath").setAttribute("type", "value")
	animPar.querySelector("export-settings").appendChild(animDoc.createElement("sequenceBaseName"))
	animPar.querySelector("export-settings").querySelector("sequenceBaseName").setAttribute("value", "")
	animPar.querySelector("export-settings").querySelector("sequenceBaseName").setAttribute("type", "value")
	animPar.querySelector("export-settings").appendChild(animDoc.createElement("sequenceInitialFrameNumber"))
	animPar.querySelector("export-settings").querySelector("sequenceInitialFrameNumber").setAttribute("value", "-1")
	animPar.querySelector("export-settings").querySelector("sequenceInitialFrameNumber").setAttribute("type", "value")
	kra.file(`${outName}/animation/index.xml`, `<?xml version="1.0" encoding="UTF-8"?><DOCTYPE animation-metadata PUBLIC '-//KDE//DTD krita 1.1//EN' 'http://www.calligra.org/DTD/krita-1.1.dtd'>${animJSDOM.serialize()}`.split(" xmlns=\"\"").join(""))
	kra.file(`${outName}/annotations/icc`, icc)
	console.log("Creating output...")
	fs.writeFileSync("graphiczizer.zip", await kra.generateAsync({type: "nodebuffer"}))
	console.log("Done!")
})().then(function(){}).catch(function(e){throw e})