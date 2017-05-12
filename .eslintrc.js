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
        "linebreak-style": [
            "error",
            "windows"
        ],
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
   }
};
