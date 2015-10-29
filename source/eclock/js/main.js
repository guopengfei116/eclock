'use strict';

var eclock = {};

/*
 * 依赖库
 * */
require('./lib/jquery.js');
var _ = require('./lib/underscore');

/*
* 工具
* */
require('common');
eclock.getLanguage = require('./contant/language');

/*
 * 常量
 * */
eclock.tpl = require('./tpl/main_tpl');

/*
* 初始化自定义组件
* */
eclock.ui = new (require('Ui'));
eclock.ui.init();

/*
* 默认国籍
* */
eclock.defaultNationality = 'US';

/*
* @mthod 依据用户Ip获取对应的国籍语言包
* @param {Function} fn 回调函数，传入语言包
* */
eclock.getIpLanguage = function (fn) {
    $.get('http://admin.iclock.co/getip.php', function (result) {
        if(result && result.code == 1 && result.data) {
            var nationality = result.data;
            fn(eclock.getLanguage(nationality));
        }else {
            fn(eclock.getLanguage(eclock.defaultNationality));
        }
    });
};

$(function () {

    // 模板对象
    var tplObj = _.template(eclock.tpl);

    /*
    * 更新模板语言
    * */
    var upTpl = function (LangPack) {
        var tplHtml = tplObj(LangPack);
        $('body').empty().append(tplHtml);
    };

    /*
     * 自定义更新模板语言
     * */
    var bind = function () {
        $('body').on('click', '.select_content_list_value', function (e) {
            e.stopPropagation();
            var nationality = $(this).data('value');
            upTpl(eclock.getLanguage(nationality));
        });
    };

    /*
    * @method 初始化
    * @* 根据Ip初始化页面
    * @* 开启自定义语言切换功能
    * */
    var init = function () {
        eclock.getIpLanguage(upTpl);
        bind();
    };

    init();
});


