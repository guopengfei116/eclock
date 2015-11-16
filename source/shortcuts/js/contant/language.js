var getLanguageKey = require('./country_and_language');

var language = {

    // 中国
    CN : {
        language : '中文',
        introduction : '世界上最快而又最慢，最长而又最短，最平凡而又最珍贵，最易被忽视而又最令人后悔的就是时间。',
        chooseMe : '坐在电脑前就忘了时间？收起任务栏后看不到时间手忙脚乱？想要时钟，想看日期，想有贴心的闹钟提醒功能？那么这个扩展程序便是你的选择了。',
        download : '下载Chrome版',
        meeting : {
            title : '会议提醒',
            details : 'eclock是您的私人时间小秘书，保证您不错过任何重要会议。'
        },
        tellTime : {
            title : '整点报时',
            details : 'eclock为您提供整点报时，温馨提示每一个整点时刻，方便您更好地安排事情。'
        },
        memorandum : {
            title : '日程备忘',
            details : 'eclock是您的贴心私人事务管家，时刻提醒您当日日程安排，不错过任何约会或重要事情。'
        },
        filing : '版权所有 2015 Iclock.co. 保留一切权利. ',
        description : "产品简介"
    },



    // 土耳其
    TR : {
        language : 'Türkçe',
        introduction : '``Hayatta hem en hızlı hem de en yavaş, hem en uzun hem de en kısa, hem en sıradan hem de en değerli,hem en kolay önemsenmeyen hem de en çok önemsenmediğine pişman ettiren şey zamandır. ',
        chooseMe : 'Bilgisayarın başına oturduğunuzda zamanı mı unutuyorsunuz? Görev çubuğunu gizledikten sonra saati göremediğinizde telaşa mı kapılıyorsunuz? Alarm kullanmak mı istiyorsunuz, tarihe bakmak mı istiyorsunuz, kullanışlı alarm hatırlatma işlevine sahip olmak mı istiyorsunuz?  O zaman bu program tam size göre!',
        download : 'Chrome versiyonunu indir',
        meeting : {
            title : 'Toplantı hatırlatma',
            details : 'Eclock adeta kişisel bir sekreteriniz gibi hiç bir önemli toplantınızı kaçırmamanızı sağlar.'
        },
        tellTime : {
            title : 'Saat başı zaman bildirme',
            details : 'Eclock saat başı zaman bildirme özelliği,her saat başında size zamanı hatırlatarak,işlerinizi yaparken zamanızı ayarlamanızı kolaylaştırır.'
        },
        memorandum : {
            title : 'Günlük ajanda',
            details : 'Eclock kişisel işlerinizi dikkatli bir şekilde takip eder, o günkü planlarınızı anında hatırlatır, herhangi bir buluşmanızı veya önemli bir işinizi asla kaçırmazsınız.'
        },
        filing : 'Telif Hakkı © 2015 Iclock.co. Tüm hakları saklıdır.',
        description : "Açıklama"
    },

    // 西班牙
    ES : {
        language : 'español',
        introduction : 'Es el más rápido y el más lento de este Mundo, el más largo y también el más corto, el más extraordinario y el más precioso regalo de este mundo. Las personas al olvidarse de él se arrepienten, el tiempo.',
        chooseMe : '¿Antes de sentarte frente al ordenador, te olvidaste del tiempo? Después de ocultar la barra de tareas, ¿no ves qué hora es? ¿Quiéres un reloj, quiéres ver la fecha, quería tener un buen sistema de alertas? ¡Entonces esta extensión es tu elección!',
        download : 'Descargar la versión Chrome',
        meeting : {
            title : 'Recordatorio de Reunión',
            details : 'Tu secretario personal del tiempo, le garantiza que no perderá ninguna importante reunión'
        },
        tellTime : {
            title : 'Hora completa',
            details : 'Hora completa, recordatorios cada hora para ayudarte a organizar mejor tus eventos del día.'
        },
        memorandum : {
            title : 'Agenda de Notas',
            details : 'EL mayordomo de tus asuntos personales, con recordatorios de tus planes en el Calendario, nunca olvidaras ninguna reunión o evento importante '
        },
        filing : 'Copyright 2015 Iclock.co. Todos los derechos reservados.',
        description : "Descripción del Producto"
    },

    // 葡萄牙
    PT : {
        language : 'português',
        introduction : 'Foi-se o tempo que é mais rápido mas mais lento, maior mas menor, mais comum mas mais precioso, mais negligenciado e mais lamentável no mundo.',
        chooseMe : 'Esqueceu-se das horas enquanto está sentado em frente ao PC? Queria um relógio, um calendário, queria funções de aletras de alarmes? Então esta extensão é a sua escolha!',
        download : 'Baixe para o Chrome',
        meeting : {
            title : 'Lembrete de Reunião',
            details : 'Eclock é o seu organizador pessoal, pode garantir que você nunca vai perder uma reunião.'
        },
        tellTime : {
            title : 'Tocar em hora cheia',
            details : 'Eclock tem o função de tocar em hora cheia, para facilitar a sua vida, alarme emitido pelo produto toda vez que é indicada cada hora cheia. '
        },
        memorandum : {
            title : 'Agenda de lembretes',
            details : 'Eclock serve como organizador para que você nunca se perca nos horários das suas reuniões e os seus compromissos!'
        },
        filing : ' Copyright © 2015 Iclock.co Inc. Todos os direitos reservados.',
        description : "Descrição de produtos"
    },

    // 美国
    US : {
        language : 'Einglish',
        introduction : "The world's fastest and slowest, longest and shortest, the most ordinary and the most precious, the most overlooked and most regrettable thing is the time.",
        chooseMe : "Always forget something you are supposed to do while using PC? Want to know time when taskbar gets hidden? Look for a tool that can display time and remind you of anything?  If your answer is YES, Eclock is exactly what you are looking for!",
        download : "Download for Chrome",
        meeting : {
            title : "Meeting Reminder",
            details : "Eclock helps you manage your time to ensure you'll never miss a meeting."
        },
        tellTime : {
            title : "Countdown Timer",
            details : "Eclock makes your work more productive by using built-in alarm function."
        },
        memorandum : {
            title : "Schedule Assistant",
            details : "Eclock reminds you of your planned activities such as meetings or appointments."
        },
        filing : "Copyright © 2015 Iclock.co. All Rights Reserved.",
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
