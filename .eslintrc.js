module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true,
		"jquery": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "sourceType": "module"
    },
    "rules": {
        "indent": [
            "error",
            "tab"
        ],
        "linebreak-style": "off",
		"no-unused-vars":"off",
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ]
    },
	 "settings": {
      "import/ignore": [".css$","node_modules/*"]
   },
   "globals": {
	   "enhanced" : true,
	   "noevidlength": true,
	   "uploader" : true,
	   "resdErrors" : true,
	   "resdDialogs" : true,
	   "sits_attach_event" : true,
	   "sits_collapsible_panel" : true,
	   "sits_dialog" : true,
	   "sits_dialog_close" : true,
	   "steps" : true,
	   "summaryLength" : true,
   }
};
