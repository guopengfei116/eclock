require('./lib/jquery');

$(function () {
    'use strict';

    // 依赖库
    require('./lib/mdata');
    require('./lib/ga');
    require('common');
    var _ = require('./lib/underscore');
    var report = require('./util/report');

    var eclock = {};

    // 常量
    eclock.getLanguage = require('./contant/language');
    eclock.tpl = require('./tpl/main_tpl');

    // 初始化自定义组件
    eclock.ui = new (require('Ui'));
    eclock.ui.init();

    // 监听上报事件
    $(window).on('report', function (e, eventName) {
        report(eventName);
    });

    // 默认国籍和当前国籍
    eclock.defaultNationality = 'US';
    eclock.currentNationality = 'US';

    /*
    * @mthod 依据用户Ip获取对应的国籍语言包
    * @param {Function} fn 回调函数，传入语言包
    * */
    eclock.getIpLanguage = function (fn) {
        function successProcess (result) {
            if(result && result.code == 1 && result.data) {
                var nationality = eclock.currentNationality = result.data;
                fn(eclock.getLanguage(nationality));
            }else {
                ailureProcess();
            }
        }
        function ailureProcess () {
            fn(eclock.getLanguage(eclock.defaultNationality));
            eclock.currentNationality = eclock.defaultNationality;
        }
        try {
            $.getJSON("http://admin.iclock.co/getip.php?callback=?", function(result){
                successProcess(result);
            });
        }catch (e) {
            ailureProcess();
        }
    };

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
     * @event1 自定义更新模板语言
     * @* 切换时上报'language_switch'事件
     * @event2 跳转chrome插件安装页
     * @* 下载按钮点击时上报'button_click'事件
     * */
    var bind = function () {
        $('body').on('click', '.select_content_list_value', function (e) {
            e.stopPropagation();
            var nationality = $(this).data('value');
            if(nationality == eclock.currentNationality) {
                return;
            }
            upTpl(eclock.getLanguage(nationality));
            eclock.currentNationality = nationality;
            $(window).trigger('report', 'language_switch');
        });
        $('body').on('click', '.eclock-view_info_download', function (e) {
            e.stopPropagation();
            if(!chrome.app.isInstalled) {
                e.preventDefault();
                chrome.webstore.install(
                    'https://chrome.google.com/webstore/detail/hnplpedplphoahacdlbcepdokaakokno',
                    function () {},
                    function (e) {
                        window.location.href = "https://chrome.google.com/webstore/detail/hnplpedplphoahacdlbcepdokaakokno";
                    }
                );
            }
            $(window).trigger('report', 'button_click');
        });
    };

    /*
    * @method 页面初始化
    * @* 根据Ip初始化页面
    * @* 删除loding
    * @* 开启自定义语言切换功能
    * @* 上报'visit'事件
    * */
    !function () {
        eclock.getIpLanguage(function (LangPack) {
            upTpl(LangPack);
            $('#loding').remove();
        });
        bind();
        $(window).trigger('report', 'visit');
    }();
});

