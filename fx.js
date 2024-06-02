module.exports = (
	[
		function(ctx, mem) {
			if (!("light" in mem)) mem.light = 191
			ctx.fillStyle = `#ff${Array(2).fill(mem.light.toString(16).padStart(2, 0)).join("")}`
			var wh = [mem.canv.clientWidth, mem.canv.clientHeight]
			ctx.fillRect(0, 0, ...wh)
			console.log(ctx.fillStyle)
			mem.light -= 1
			return mem.light >= 64
		}
	].map(function(f) {f.three = false;return f}).concat(
		[
			
		].map(function(f) {f.three = true;return f})
	)
)