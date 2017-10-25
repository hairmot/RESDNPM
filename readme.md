# RESD Javascript

Javascript for the RESD solution. 

## Status

|Check|Status|
|-----|------|
|Build|[![Build Status](https://travis-ci.org/hairmot/RESDNPM.svg?branch=master)](https://travis-ci.org/hairmot/RESDNPM)|
|Security|[![NSP Status](https://nodesecurity.io/orgs/petecol/projects/fa8b9c49-4b42-4e5f-9b57-ccd49251a06f/badge)](https://nodesecurity.io/orgs/petecol/projects/fa8b9c49-4b42-4e5f-9b57-ccd49251a06f)|
|Code Quality|[![Code Climate](https://codeclimate.com/github/hairmot/RESDNPM.png)](https://codeclimate.com/github/hairmot/RESDNPM)|
|Test Coverage|[![Coverage Status](https://coveralls.io/repos/github/hairmot/RESDNPM/badge.svg?branch=master)](https://coveralls.io/github/hairmot/RESDNPM?branch=master)|
|Dependencies|[![dependencies Status](https://david-dm.org/hairmot/resdnpm/status.svg)](https://david-dm.org/hairmot/resdnpm)|
|Dev Dependencies|![devDependencies Status](https://david-dm.org/hairmot/resdnpm/dev-status.svg)|


## Commands
| Output | Command | Description |
|----|----|----|
|Lint Javascript|npm run lint|Automatically cleans up all javascript according to style rules |
|Build Javascript|npm run build|Builds javascript into single file - outputs to ./build |
|Run Tests|npm run test | Runs all automated tests - outputs to ./mochawesome-report/mochawesome.html|
|Generate Code Coverage| npm run cover |Generates coverage report - outputs to ./coverage/lcov-report/index.html|
|Host code locally| npm run serve |Hosts code at localhost:5000 - useful for quick dev testing|
|Watch code|npm run all|Detects changes to files and re-builds javascript. Automatically runs localhost:5000 server|


## File Sizes

| File | Size | Minified | gzipped |
| -----						| ------ 																					| --- | ----|
| RESD-CREATE-ASSESSMENTS 	| ![](http://img.badgesize.io/hairmot/RESDNPM/master/build/RESD-CREATE-ASSESSMENTS.js) 	|![](http://img.badgesize.io/hairmot/RESDNPM/master/build/RESD-CREATE-ASSESSMENTS.min.js)|![](http://img.badgesize.io/hairmot/RESDNPM/master/build/RESD-CREATE-ASSESSMENTS.min.js?compression=gzip)
| RESD-CREATE-CONFIRMATION 	| ![](http://img.badgesize.io/hairmot/RESDNPM/master/build/RESD-CREATE-CONFIRMATION.js) |![](http://img.badgesize.io/hairmot/RESDNPM/master/build/RESD-CREATE-CONFIRMATION.min.js) |![](http://img.badgesize.io/hairmot/RESDNPM/master/build/RESD-CREATE-CONFIRMATION.min.js?compression=gzip) |
| RESD-CREATE-GUIDANCE 		| ![](http://img.badgesize.io/hairmot/RESDNPM/master/build/RESD-CREATE-GUIDANCE.js) 		| ![](http://img.badgesize.io/hairmot/RESDNPM/master/build/RESD-CREATE-GUIDANCE.min.js)|![](http://img.badgesize.io/hairmot/RESDNPM/master/build/RESD-CREATE-GUIDANCE.min.js?compression=gzip)
| RESD-CREATE-SUMMARY 		| ![](http://img.badgesize.io/hairmot/RESDNPM/master/build/RESD-CREATE-SUMMARY.js)  		| ![](http://img.badgesize.io/hairmot/RESDNPM/master/build/RESD-CREATE-SUMMARY.min.js)|![](http://img.badgesize.io/hairmot/RESDNPM/master/build/RESD-CREATE-SUMMARY.min.js?compression=gzip)
| RESD-PROCESS-PROCESS 		| ![](http://img.badgesize.io/hairmot/RESDNPM/master/build/RESD-PROCESS-PROCESS.js)  		| ![](http://img.badgesize.io/hairmot/RESDNPM/master/build/RESD-PROCESS-PROCESS.min.js)|![](http://img.badgesize.io/hairmot/RESDNPM/master/build/RESD-PROCESS-PROCESS.min.js?compression=gzip)
| RESD-STAGE2-START 		| ![](http://img.badgesize.io/hairmot/RESDNPM/master/build/RESD-STAGE2-START.js)  			| ![](http://img.badgesize.io/hairmot/RESDNPM/master/build/RESD-STAGE2-START.min.js)|![](http://img.badgesize.io/hairmot/RESDNPM/master/build/RESD-STAGE2-START.min.js?compression=gzip)
| RESD-STUVIEW-START 		| ![](http://img.badgesize.io/hairmot/RESDNPM/master/build/RESD-STUVIEW-START.js)  		| ![](http://img.badgesize.io/hairmot/RESDNPM/master/build/RESD-STUVIEW-START.min.js)|![](http://img.badgesize.io/hairmot/RESDNPM/master/build/RESD-STUVIEW-START.min.js?compression=gzip)
| RESD-UN-PROC-PROCESS 		| ![](http://img.badgesize.io/hairmot/RESDNPM/master/build/RESD-UN-PROC-PROCESS.js)  		|![](http://img.badgesize.io/hairmot/RESDNPM/master/build/RESD-UN-PROC-PROCESS.min.js) |![](http://img.badgesize.io/hairmot/RESDNPM/master/build/RESD-UN-PROC-PROCESS.min.js?compression=gzip)
| RESD-UNCAP-ASSESSMENTS 	| ![](http://img.badgesize.io/hairmot/RESDNPM/master/build/RESD-UNCAP-ASSESSMENTS.js)  	| ![](http://img.badgesize.io/hairmot/RESDNPM/master/build/RESD-UNCAP-ASSESSMENTS.min.js)| ![](http://img.badgesize.io/hairmot/RESDNPM/master/build/RESD-UNCAP-ASSESSMENTS.min.js?compression=gzip) |
| RESD-UNCAP-SUMMARY 		| ![](http://img.badgesize.io/hairmot/RESDNPM/master/build/RESD-UNCAP-SUMMARY.js)  		|![](http://img.badgesize.io/hairmot/RESDNPM/master/build/RESD-UNCAP-SUMMARY.min.js) |![](http://img.badgesize.io/hairmot/RESDNPM/master/build/RESD-UNCAP-SUMMARY.min.js?compression=gzip)
