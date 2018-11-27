var fs = require("fs");
var path = require("path");
var bbbc = process.env["HOME"]+"/Movies/bbbc";

var bin = []; 
(function getFiles(dir) {
	var files;
	try {
		files = fs.readdirSync(dir);
	} catch (err) {
		console.log("directory not found: "+dir);
		process.exit();
	}
	files.forEach(function(file){ 
		var fullPath = path.join(dir,file);
		var stats = fs.statSync(fullPath);
		if(stats.isDirectory()) { 
			getFiles(fullPath);
		}
		else {			
			if(file.indexOf(".bin")>=0) {
				if(fullPath.indexOf(bbbc+"/packets/")==0) {					
					bin.push(fullPath.replace(bbbc,"")); 					
				}
			}
		}
	});
})(bbbc+"/packets");

if(bin.length>=1) {
	var len = bin.length;
	while(len--) {
		var idx = (Math.random()*(len+1))>>0;
		var tmp = bin[len];
		bin[len] = bin[idx];
		bin[idx] = tmp;
	} 

	var keys = [
		"`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", 
		"q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "|", 
		"a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", 
		"z", "x", "c", "v", "b", "n", "m", ",", ".", "/"
	];

	var json = {
		"headers":[
			"/headers/0.bin","/headers/1.bin","/headers/2.bin"
		],
		"keys":{}
	};

	len = bin.length;
	if(len>=keys.length) len = keys.length; 
	
	for(var k=0; k<len; k++) {
		json.keys[keys[k]] = bin[k];
	}

	fs.writeFileSync(bbbc+"/settings.json",JSON.stringify(json,null,"\t"));	
}