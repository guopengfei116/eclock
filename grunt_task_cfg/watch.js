var path = require('path');

exports.options = {
    livereload : '<% connect.options.livereload %>'
};

console.log(exports.options);

exports.livereload = {
    files : [
        '*/sass/**/*'
    ],
    tasks : [
        'sass'
    ]
};