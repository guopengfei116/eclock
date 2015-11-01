var path = require('path');

/**
 * 开启一个静态文件服务器
 * */
exports.options = {
    protocol : 'http',
    port : 9800,
    open : true,
    hostname : '0.0.0.0',
    livereload : 79513,
    keepalive : false
};

/**
 * 非调试模式下
 * */
if(!gruntProject.debug) {
    exports.options.port = 9801;
    exports.options.keepalive = true;
}

/**
 * 调试模式指向开发目录，部署模式指向上线目录
 * */
exports.server = {
    options : {
        base : [
            path.basename(gruntProject.debug ? gruntProject.prd : gruntProject.dest)
        ]
    }
    /*middleware : function (connect) {
        return [
            connect().use('/lib', connect.static('./lib'))
        ]
    }*/
};

console.log('connect config initialized');