var APPID = 1313260295;

/*
* @method get uuid
* localStorage 没有则生成一个uuid
* */
var getUuid = function () {

    var uuid = localStorage && localStorage.getItem('eclock_uuid');

    if(uuid) {
        return uuid;
    }

    return 'eclock' + new Date().getTime() + Math.round(Math.random() * Math.pow(10, 10));
};

/*
* @method 上报mdata 和 GA
* @param {String} eventName 事件名称
* */
module.exports = function (eventName) {
    mData.push(['send', eventName, {
        appid: APPID,
        uuid : getUuid()
    }]);
    ga('send', 'event', eventName, getUuid());
};
