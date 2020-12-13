const path = require('path');

module.exports = {
    transpileDependencies: ['single-spa','qiankun','import-html-entry'],
    devServer: {
        port: 8888,
        headers: {
		    'Access-Control-Allow-Origin': '*',
	    },

    }

};


