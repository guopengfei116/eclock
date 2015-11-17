var COUNTRY_AND_LANGUAGE = {
    'CN' : [
        'CN', 'TW', 'HK'
    ],
    'TR' : [
        'TR'
    ],
    /*'ES' : [
        'ES', 'MX', 'CO'
    ],*/
    'PT' : [
        'PT', 'BR'
    ],
    'US' : [
        'US', 'AU', 'CA', 'UK', 'GB'
    ]
};


/*
* 获取国籍对应的语言包的key
* */
module.exports = function (nationality) {
    var language = COUNTRY_AND_LANGUAGE[nationality];
    if(language) {
        return nationality;
    }

    for(var key in COUNTRY_AND_LANGUAGE) {
        for(var i = 0; i < COUNTRY_AND_LANGUAGE[key].length; i++) {
            if(nationality === COUNTRY_AND_LANGUAGE[key][i]) {
                return COUNTRY_AND_LANGUAGE[key][i];
            }
        }
    }

    return nationality;
};
