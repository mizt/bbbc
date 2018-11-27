# bbbc

![](./img/fig01.png "")

Tokisato Miztsuru 2018

[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)

### Requirements

MacBook Pro 2016+   
macOS Mojave+

### Note

Go to `System Preferences` > `Security & Privacy`. Then select the `App Store and identified developers` radio button beneath Allow applications downloaded from.

### Encode

Open `bbbc-enc.app` and drop .mp4 in the window.    
(Automatically fits to 1920x1080 resolution)   

![](./img/fig02.png "")

Wait until the progress bar reaches 100%.  

![](./img/fig03.png "")

The Data is exported to `~/Movies/bbbc/`. 


### Settings

Write random values to `~/Movies/bbbc/settings.json`.

	$node bbbc-settings.js

Or manually.
	
	{
		"headers": [
			"/headers/0.bin",
			"/headers/1.bin",
			"/headers/2.bin"
		],
		"keys": {
			"q": "/packets/q.bin",
			"w": "/packets/w.bin",
			"e": "/packets/e.bin",
			"r": "/packets/r.bin",
			"t": "/packets/t.bin",
			"y": "/packets/y.bin"
		}
	}

### Play

Open `bbbc.app`.    
Try typing.

`space bar` key to hide the fps.

### Dependencies

[theora](https://www.theora.org/faq/#14)
