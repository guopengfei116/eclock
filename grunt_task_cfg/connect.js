var path = require('path');

/**
 * 开启一个静态文件服务器
 * */
exports.options = {
    port : 9801,
    protocol : 'http',
    hostname : '0.0.0.0',
    livereload : 79513,
    open : true,
    keepalive : true
};

/**
 * 调试模式指向开发目录，部署模式指向上线目录
 * */
exports.server = {
    options : {
        base : [
            path.basename(gruntProject.debug ? gruntProject.prd : gruntProject.dest)
        ],
        middleware : [

        ]
    }
};

console.log('connect config initialized');