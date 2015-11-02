'use strict';

var eclock = {};

/*
 * 依赖库
 * */
require('./lib/jquery');
require('./lib/updata');
require('./lib/ga');
var _ = require('./lib/underscore');

/*
* 工具
* */
require('common');
var report = require('./util/report');
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
eclock.currentNationality = 'US';

/*
* @mthod 依据用户Ip获取对应的国籍语言包
* @param {Function} fn 回调函数，传入语言包
* */
eclock.getIpLanguage = function (fn) {
    $.get('http://admin.iclock.co/getip.php', function (result) {
        if(result && result.code == 1 && result.data) {
            var nationality = eclock.currentNationality = result.data;
            fn(eclock.getLanguage(nationality));
        }else {
            fn(eclock.getLanguage(eclock.defaultNationality));
            eclock.currentNationality = eclock.defaultNationality;
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
     * @method 事件绑定
     * */
    var bind = function () {

        /*
         * @method 自定义更新模板语言
         * @* 切换时上报'language_switch'事件
         * */
        $('body').on('click', '.select_content_list_value', function (e) {
            e.stopPropagation();
            var nationality = $(this).data('value');
            if(nationality == eclock.currentNationality) {
                return;
            }
            upTpl(eclock.getLanguage(nationality));
            eclock.currentNationality = nationality;
            report('language_switch');
        });

        // 下载按钮点击时上报'button_click'事件
        $('body').on('click', '.eclock-view_info_download', function (e) {
            e.stopPropagation();
            report('button_click');
        });
    };

    /*
    * @method 页面初始化
    * @* 上报'visit'事件
    * @* 根据Ip初始化页面
    * @* 删除loding
    * @* 开启自定义语言切换功能
    * */
    var init = function () {
        report('visit');
        eclock.getIpLanguage(function (LangPack) {
            upTpl(LangPack);
            $('#loding').remove();
        });
        bind();
    };

    init();
});

