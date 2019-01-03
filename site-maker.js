var readline = require('readline');
var rl = readline.createInterface({
	  input: process.stdin,
	  output: process.stdout,
	  terminal: false
});

console.log("<h3> c912 . posts </h3>")

rl.on('line', function(line){
	console.log(`<a href="posts/${line}">${line}</a>`)
})
