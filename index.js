const readLine = require("readline");
const child_process = require('child_process');
const path = require('path');

class zipper {
	constructor({
		targetFilePath=null, 
		toDir=null
	}={}) {
		/*
		** sfk unzip simple.mailserver-master.zip -todir tmp -yes
		** unzip -o -q simple.mailserver-master.zip -d mailserver
		*/
		// this.unzipperExePath = process.platform === 'win32' ? path.join(__dirname, 'windows', 'unzip.exe') : path.join(__dirname, 'mac', 'unzip.sh');
		this.unzipperExePath = process.platform === 'win32' ? path.join(__dirname, 'windows', 'sfk.exe') : path.join(__dirname, 'mac', 'unzip.sh');
		// this.unzipperArgsStr = `unzip ${targetFilePath} -todir ${toDir} -yes`;
		// this.unzipperArgsArr = [
		// 	"-o", "-q", targetFilePath, '-d', toDir
		// ];
		this.unzipperArgsArr = [
			'unzip', targetFilePath, '-todir', toDir, '-yes'
		];
		// this.unzipperArgsStr = `-o -q ${targetFilePath} -d ${toDir}`//`${targetFilePath}`;
	}
	unzip() {
		const self = this;
		const spawnObj = child_process.spawn(self.unzipperExePath, self.unzipperArgsArr, { encoding: 'utf-8' });
		const readObj = readLine.createInterface({
			input: spawnObj.stdout
		});
		readObj.on('line', function (line) {
			console.log(line);
		});
		readObj.on('close', function () {
			console.log('readLine close....');
		});
		// spawnObj.stdout.on('data', function (chunk) {
		//     console.log(chunk.toString());
		// });
		spawnObj.stderr.on('data', (data) => {
			console.log(data.toString());
		});
		spawnObj.on('close', function (code) {
			console.log('close code : ' + code);
		});
		spawnObj.on('exit', (code) => {
			console.log('exit code : ' + code);
		});
	}
}

module.exports = zipper;