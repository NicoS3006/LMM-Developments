var PolicyBanner = PolicyBanner || (function(){
    // private
    var _args = {};

    var _bannerHtml =   '<div class="s-policy-banner s-policy-banner--#THEME# js-policy-banner" style="display:none;">' +
        '   <div class="s-policy-banner__inner">' +
        '       <div class="s-policy-banner__text">' +
        '           <div class="s-policy-banner__text__inner">#TEXT#</div>' +
        '       </div>' +
        '       <div class="s-policy-banner__button">' +
        '           <button class="s-banner-button js-policy-banner-button"><span>ok</span></button>' +
        '       </div>' +
        '   </div>' +
        '</div>';

    var _getText = function(language, privacyPolicyUrl, disclaimerUrl) {
        var text = '';
        switch(language) {
            case 'nl': {
                text = 'Deze site gebruikt cookies. ' +
                    'Ik ga akkoord met deze ' + (disclaimerUrl ? '<a href="' + disclaimerUrl + '" #NEWTAB#>disclaimer</a>' : '') +
                    (privacyPolicyUrl && disclaimerUrl ? ' &amp; ' : '') +
                    (privacyPolicyUrl ? '<a href="' + privacyPolicyUrl + '" #NEWTAB#>privacy policy</a>. ' : '.');
                break;
            }
            case 'fr': {
                text = 'Ce site utilise des cookies. ' +
                    'Je suis d\'accord avec cette ' + (disclaimerUrl ? '<a href="' + disclaimerUrl + '" #NEWTAB#>disclaimer</a>' : '') +
                    (privacyPolicyUrl && disclaimerUrl ? ' &amp; ' : '') +
                    (privacyPolicyUrl ? '<a href="' + privacyPolicyUrl + '" #NEWTAB#>privacy policy</a>. ' : '.');
                break;
            }
            case 'en': {
                text = 'This site uses cookies. ' +
                    'I agree with this ' + (disclaimerUrl ? '<a href="' + disclaimerUrl + '" #NEWTAB#>disclaimer</a>' : '') +
                    (privacyPolicyUrl && disclaimerUrl ? ' &amp; ' : '') +
                    (privacyPolicyUrl ? '<a href="' + privacyPolicyUrl + '" #NEWTAB#>privacy policy</a>. ' : '.');
                break;
            }
            default: {
              text = 'This site uses cookies. ' +
                  'I agree with this ' + (disclaimerUrl ? '<a href="' + disclaimerUrl + '" #NEWTAB#>disclaimer</a>' : '') +
                  (privacyPolicyUrl && disclaimerUrl ? ' &amp; ' : '') +
                  (privacyPolicyUrl ? '<a href="' + privacyPolicyUrl + '" #NEWTAB#>privacy policy</a>. ' : '.');
              break;
            }
        }
        return text;
    };


    var _loadExternals = function() {
        document.addEventListener("DOMContentLoaded", function() {

            if(_getCookie("policy-accepted"))
                return;

            var cssId = 'policyBanner';
            if (!document.getElementById(cssId)) {
                var head = document.getElementsByTagName('head')[0];
                var link = document.createElement('link');
                link.id = cssId;
                link.rel = 'stylesheet';
                link.type = 'text/css';
                link.href = 'js/cdn/gdpr/banner.css';
                link.media = 'all';
                head.appendChild(link);
            }

            var text = _getText(_args.language, _args.privacyPolicyUrl, _args.disclaimerUrl);
            _bannerHtml = _bannerHtml.replace('#TEXT#', text);
            _bannerHtml = _bannerHtml.replace('#THEME#', _args.theme ? _args.theme : 'black');
            _bannerHtml = _bannerHtml.replace(/#NEWTAB#/g, _args.openInNewTab ? 'target="_blank"' : '');

            document.querySelector("body").insertAdjacentHTML('beforeend', _bannerHtml);
            _initBanner();
        });
    };

    var _setCookie = function(cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays*24*60*60*1000));
        var expires = "expires="+ d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    };

    var _getCookie = function(cname) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for(var i = 0; i <ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) === ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) === 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    };

    var _initBanner = function() {
        var banner = document.querySelector(".js-policy-banner");
        banner.classList.add("is-visible");
        setTimeout(function() {
            banner.classList.add("animate");
        }, _args.delay ? _args.delay : 2000)

        var button = document.querySelector(".js-policy-banner-button");
        button.addEventListener('click', function(e) {
            e.preventDefault();
            banner.classList.remove("animate");
            _setCookie("policy-accepted", true, 365);
        });
    };

    //public
    return {
        init : function(Args) {
            _args = Args;
            _loadExternals();
        }
    };
}());
