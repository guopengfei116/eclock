var getLanguageKey = require('./country_and_language');

var language = {

    // 中国
    CN : {
        language : '中文',
        quotation : '想要快速找到自己最常用的网站？',
        introduction : 'My Shortcuts就可以帮您轻松解决这些问题，帮您整理各类网址，实现网址类管理，做您贴心的网址管家，选择它没错哦。',
        download : '下载Chrome版',
        google : {
            title : 'google常用网址管理',
            details : '在该类目下，您可以添加google类的各项网址，为您提供八个默认的google常用的网址，您也可以自行添加自己常用的google网址。'
        },
        social : {
            title : '社交产品网址管理',
            details : '在该类目下，您可以添加各类社交产品网址，为您提供四个默认的网址，您也可以自行添加自己个人常用的社交网站。'
        },
        drawer : {
            title : '个人常用网址管理',
            details : '在该类目下，您可以依据您个人的使用习惯，添加各项网址，为您提供四个默认的网址。'
        },
        filing : '版权所有 goextension.com. 保留一切权利. ',
        description : "产品简介"
    },

    // 土耳其
    TR : {
        language : 'Türkçe',
        quotation : 'Sitelerini hızlı bulmak ister misin？',
        introduction : 'My Shortcuts, siteleri kategorilere ayırarak kolayca yönetilmesini sağlar.',
        download : 'Chrome Sürümünü İndir',
        google : {
            title : 'Google Sitelerinin Yönetimi',
            details : 'Bu kategori altında, sık kullandığınız google sitelerini ekleyebilirsiniz. Sizin için sık kullanılan sekiz adet  google sitesi belirledik, sizde sık kullandığınız google sitelerini ekleyebilirsiniz. '
        },
        social : {
            title : 'Sosyal Platform Sitelerinin Yönetimi',
            details : 'Bu kategori altında, sosyal platform sitelerini ekleyebilirsiniz. Sizin için dört adet popüler sosyal platform sitesi belirledik, sizde sık kullandığınız sosyal platform sitelerini ekleyebilirsiniz. '
        },
        drawer : {
            title : 'Favori Sitelerin Yönetimi',
            details : 'Bu kategori altında,  sık kullandığınız favori siteleri ekleyebilirsiniz. Sizin için popüler dört  site belirledik.  '
        },
        filing : 'Telif Hakkı goextension.com. Tüm hakları saklıdır.',
        description : "Açıklama"
    },

    // 西班牙
    ES : {
        language : 'español',
        quotation : '?Deseas encontrar y acceder más rápido a las Páginas de Internet que más visitas?',
        introduction : 'Mis Atajos pueden ayudarte a resolver fácilmente estos problemas y a organizar todo tipo de páginas. Haz de él tu administrador de sitios de internet, no te arrepentirás.',
        download : 'Descargar la versión Chrome',
        google : {
            title : 'Administrador de sitios favoritos de google',
            details : 'En esta área podrás agregar los sitios favoritos buscados en google, te proveemos 8 sitios más buscados en google, sin embargo podrás agregar otros.'
        },
        social : {
            title : 'Administrador de sitios de redes sociales',
            details : 'En esta área podrás agregar los sitios de redes sociales, te proveemos 4 sitios más usados, sin embargo podrás agregar los tuyos.'
        },
        drawer : {
            title : 'Administrador de sitios favoritos personales',
            details : 'En esta área podrás agregar en todo momento los sitios que más usas, sin embargo te proveemos 4 sitios más buscados.'
        },
        filing : 'Copyright goextension.com. Todos los derechos reservados.',
        description : "Açıklama"
    },

    // 葡萄牙
    PT : {
        language : 'português',
        quotation : 'Encontre rápido sites mais acessados?',
        introduction : 'O My shortcuts é sua melhor escolha que vão servir para organizar seus sites, como seu organizador de endereços.',
        download : 'Baixe para o Chrome',
        google : {
            title : 'Organizador de sites mais acessados do Google',
            details : 'Pode adicionar os endereços do Google ou os mais acessados, aqui proporcionamos-lhe oito endereços padrões.'
        },
        social : {
            title : 'Organizador de sites das redes sociais',
            details : 'Pode adicionar os endereços das redes sociais ou das mais acessadas, aqui proporcionamos-lhe quatro endereços padrões.'
        },
        drawer : {
            title : 'Organizador de sites mais acessados pessoais',
            details : 'Pode adicionar os endereços com os  seus hábitos pessoais, aqui proporcionamos-lhe quatro endereços padrões.'
        },
        filing : ' Copyright goextension.com.Todos os direitos reservados.',
        description : "Descrição de produtos"
    },

    // 美国
    US : {
        language : 'English',
        quotation : 'Want fast visit beloved sites?',
        introduction : 'My Shortcuts can let you create shortcuts and quickly access your most-visited sites. Try It Now!',
        download : 'Download for Chrome',
        google : {
            title : 'Utilize Google Tools',
            details : 'There are 8 default shortcuts about the services provided by Google in My Shortcuts. You could also add additional shortcuts for other Google services like Analytics and Earth.'
        },
        social : {
            title : 'Expand Social Circle',
            details : "You can create shortcuts for your favorite sites. The 4 default shortcuts for popular sites, such as Amazon and YouTube, are available in My Shortcuts"
        },
        drawer : {
            title : 'Manage Favorite Sites',
            details : 'All of your favorite sites could be added as a shortcut according to your browsing preference. The 4 default shortcuts for the most visited sites worldwide, such as Amazon and YouTube, are available in My Shortcuts.'
        },
        filing : 'Copyright © 2015 goextension.com. All Rights Reserved.',
        description : "Description"
    }
};

/*
* 获取语言包，没有找到返回US语言包
* */
module.exports = function (nationality) {
    if(!nationality) {
        throw Error('Nationality is empty');
    }

    var languageKey = getLanguageKey(nationality);
    var langPack = language[languageKey];
    if(!langPack) {
        langPack = language['US'];
    }

    console.log(languageKey);
    return langPack;
};
