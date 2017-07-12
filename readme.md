# RESD Javascript

Javascript for the RESD solution. 

## Status

[![Build Status](https://travis-ci.org/hairmot/RESDNPM.svg?branch=master)](https://travis-ci.org/hairmot/RESDNPM)[![NSP Status](https://nodesecurity.io/orgs/petecol/projects/fa8b9c49-4b42-4e5f-9b57-ccd49251a06f/badge)](https://nodesecurity.io/orgs/petecol/projects/fa8b9c49-4b42-4e5f-9b57-ccd49251a06f)[![Code Climate](https://codeclimate.com/github/hairmot/RESDNPM.png)](https://codeclimate.com/github/hairmot/RESDNPM)[![Coverage Status](https://coveralls.io/repos/github/hairmot/RESDNPM/badge.svg?branch=master)](https://coveralls.io/github/hairmot/RESDNPM?branch=master)[![dependencies Status](https://david-dm.org/hairmot/resdnpm/status.svg)](https://david-dm.org/hairmot/resdnpm)![devDependencies Status](https://david-dm.org/hairmot/resdnpm/dev-status.svg)


## Commands
| Output | Command | Description |
|----|----|----|
|Build Javascript|gulp-build|Builds javascript into single file - outputs to ./build |
|Minified Javascript| gulp-minify| Builds minified javascript from gulp-build output - outputs to ./min |
|Run Tests|npm run test | Runs all automated tests - outputs to ./mochawesome-report/mochawesome.html|
|Generate Code Coverage| npm run cover |Generates coverage report - outputs to ./coverage/lcov-report/index.html|
|Host code locally| npm run serve |Hosts code at localhost:5000 - useful for quick dev testing|
|Watch code|npm run all|Detects changes to files and re-builds javascript. Automatically runs localhost:5000 server|


## File Sizes

| File | Size | Minified | gzipped |
| -----						| ------ 																					| --- | ----|
| RESD-CREATE-ASSESSMENTS 	| ![](http://img.badgesize.io/hairmot/RESDNPM/master/build/RESD-CREATE-ASSESSMENTS.js) 	|![](http://img.badgesize.io/hairmot/RESDNPM/master/min/RESD-CREATE-ASSESSMENTS.js)|![](http://img.badgesize.io/hairmot/RESDNPM/master/min/RESD-CREATE-ASSESSMENTS.js?compression=gzip)
| RESD-CREATE-CONFIRMATION 	| ![](http://img.badgesize.io/hairmot/RESDNPM/master/build/RESD-CREATE-CONFIRMATION.js) |![](http://img.badgesize.io/hairmot/RESDNPM/master/min/RESD-CREATE-CONFIRMATION.js) |![](http://img.badgesize.io/hairmot/RESDNPM/master/min/RESD-CREATE-CONFIRMATION.js?compression=gzip) |
| RESD-CREATE-GUIDANCE 		| ![](http://img.badgesize.io/hairmot/RESDNPM/master/build/RESD-CREATE-GUIDANCE.js) 		| ![](http://img.badgesize.io/hairmot/RESDNPM/master/min/RESD-CREATE-GUIDANCE.js)|![](http://img.badgesize.io/hairmot/RESDNPM/master/min/RESD-CREATE-GUIDANCE.js?compression=gzip)
| RESD-CREATE-SUMMARY 		| ![](http://img.badgesize.io/hairmot/RESDNPM/master/build/RESD-CREATE-SUMMARY.js)  		| ![](http://img.badgesize.io/hairmot/RESDNPM/master/min/RESD-CREATE-SUMMARY.js)|![](http://img.badgesize.io/hairmot/RESDNPM/master/min/RESD-CREATE-SUMMARY.js?compression=gzip)
| RESD-PROCESS-PROCESS 		| ![](http://img.badgesize.io/hairmot/RESDNPM/master/build/RESD-PROCESS-PROCESS.js)  		| ![](http://img.badgesize.io/hairmot/RESDNPM/master/min/RESD-PROCESS-PROCESS.js)|![](http://img.badgesize.io/hairmot/RESDNPM/master/min/RESD-PROCESS-PROCESS.js?compression=gzip)
| RESD-STAGE2-START 		| ![](http://img.badgesize.io/hairmot/RESDNPM/master/build/RESD-STAGE2-START.js)  			| ![](http://img.badgesize.io/hairmot/RESDNPM/master/min/RESD-STAGE2-START.js)|![](http://img.badgesize.io/hairmot/RESDNPM/master/min/RESD-STAGE2-START.js?compression=gzip)
| RESD-STUVIEW-START 		| ![](http://img.badgesize.io/hairmot/RESDNPM/master/build/RESD-STUVIEW-START.js)  		| ![](http://img.badgesize.io/hairmot/RESDNPM/master/min/RESD-STUVIEW-START.js)|![](http://img.badgesize.io/hairmot/RESDNPM/master/min/RESD-STUVIEW-START.js?compression=gzip)
| RESD-UN-PROC-PROCESS 		| ![](http://img.badgesize.io/hairmot/RESDNPM/master/build/RESD-UN-PROC-PROCESS.js)  		|![](http://img.badgesize.io/hairmot/RESDNPM/master/min/RESD-UN-PROC-PROCESS.js) |![](http://img.badgesize.io/hairmot/RESDNPM/master/min/RESD-UN-PROC-PROCESS.js?compression=gzip)
| RESD-UNCAP-ASSESSMENTS 	| ![](http://img.badgesize.io/hairmot/RESDNPM/master/build/RESD-UNCAP-ASSESSMENTS.js)  	| ![](http://img.badgesize.io/hairmot/RESDNPM/master/min/RESD-UNCAP-ASSESSMENTS.js)| ![](http://img.badgesize.io/hairmot/RESDNPM/master/min/RESD-UNCAP-ASSESSMENTS.js?compression=gzip) |
| RESD-UNCAP-SUMMARY 		| ![](http://img.badgesize.io/hairmot/RESDNPM/master/build/RESD-UNCAP-SUMMARY.js)  		|![](http://img.badgesize.io/hairmot/RESDNPM/master/min/RESD-UNCAP-SUMMARY.js) |![](http://img.badgesize.io/hairmot/RESDNPM/master/min/RESD-UNCAP-SUMMARY.js?compression=gzip)
