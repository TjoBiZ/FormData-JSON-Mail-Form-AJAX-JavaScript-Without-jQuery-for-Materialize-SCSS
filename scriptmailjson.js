/** Polyfills FormData IE 10 >
 * source this
 * <script defer src="https://unpkg.com/weakmap-polyfill/weakmap-polyfill.min.js"></script>
 * <script defer src="https://unpkg.com/formdata-polyfill"></script>
 * **/
(function(e){"use strict";if(e.WeakMap){return}var t=Object.prototype.hasOwnProperty;var r=function(e,t,r){if(Object.defineProperty){Object.defineProperty(e,t,{configurable:true,writable:true,value:r})}else{e[t]=r}};e.WeakMap=function(){function WeakMap(){if(this===void 0){throw new TypeError("Constructor WeakMap requires 'new'")}r(this,"_id",genId("_WeakMap"));if(arguments.length>0){throw new TypeError("WeakMap iterable is not supported")}}r(WeakMap.prototype,"delete",function(e){checkInstance(this,"delete");if(!isObject(e)){return false}var t=e[this._id];if(t&&t[0]===e){delete e[this._id];return true}return false});r(WeakMap.prototype,"get",function(e){checkInstance(this,"get");if(!isObject(e)){return void 0}var t=e[this._id];if(t&&t[0]===e){return t[1]}return void 0});r(WeakMap.prototype,"has",function(e){checkInstance(this,"has");if(!isObject(e)){return false}var t=e[this._id];if(t&&t[0]===e){return true}return false});r(WeakMap.prototype,"set",function(e,t){checkInstance(this,"set");if(!isObject(e)){throw new TypeError("Invalid value used as weak map key")}var n=e[this._id];if(n&&n[0]===e){n[1]=t;return this}r(e,this._id,[e,t]);return this});function checkInstance(e,r){if(!isObject(e)||!t.call(e,"_id")){throw new TypeError(r+" method called on incompatible receiver "+typeof e)}}function genId(e){return e+"_"+rand()+"."+rand()}function rand(){return Math.random().toString().substring(2)}r(WeakMap,"_polyfill",true);return WeakMap}();function isObject(e){return Object(e)===e}})(typeof self!=="undefined"?self:typeof window!=="undefined"?window:typeof global!=="undefined"?global:this);
;(function(){var k;function m(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}var p="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)},q="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this;function r(){r=function(){};q.Symbol||(q.Symbol=u)}function v(a,b){this.s=a;p(this,"description",{configurable:!0,writable:!0,value:b})}
    v.prototype.toString=function(){return this.s};var u=function(){function a(c){if(this instanceof a)throw new TypeError("Symbol is not a constructor");return new v("jscomp_symbol_"+(c||"")+"_"+b++,c)}var b=0;return a}();function w(){r();var a=q.Symbol.iterator;a||(a=q.Symbol.iterator=q.Symbol("Symbol.iterator"));"function"!=typeof Array.prototype[a]&&p(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return x(m(this))}});w=function(){}}
    function x(a){w();a={next:a};a[q.Symbol.iterator]=function(){return this};return a}function y(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:m(a)}}var z;if("function"==typeof Object.setPrototypeOf)z=Object.setPrototypeOf;else{var A;a:{var B={v:!0},C={};try{C.__proto__=B;A=C.v;break a}catch(a){}A=!1}z=A?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var D=z;
    function E(){this.h=!1;this.c=null;this.o=void 0;this.b=1;this.m=this.w=0;this.g=null}function F(a){if(a.h)throw new TypeError("Generator is already running");a.h=!0}E.prototype.i=function(a){this.o=a};E.prototype.j=function(a){this.g={A:a,B:!0};this.b=this.w||this.m};E.prototype["return"]=function(a){this.g={"return":a};this.b=this.m};function G(a,b,c){a.b=c;return{value:b}}function H(a){this.C=a;this.l=[];for(var b in a)this.l.push(b);this.l.reverse()}function I(a){this.a=new E;this.D=a}
    I.prototype.i=function(a){F(this.a);if(this.a.c)return J(this,this.a.c.next,a,this.a.i);this.a.i(a);return K(this)};function L(a,b){F(a.a);var c=a.a.c;if(c)return J(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.a["return"]);a.a["return"](b);return K(a)}I.prototype.j=function(a){F(this.a);if(this.a.c)return J(this,this.a.c["throw"],a,this.a.i);this.a.j(a);return K(this)};
    function J(a,b,c,d){try{var e=b.call(a.a.c,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.a.h=!1,e;var f=e.value}catch(g){return a.a.c=null,a.a.j(g),K(a)}a.a.c=null;d.call(a.a,f);return K(a)}function K(a){for(;a.a.b;)try{var b=a.D(a.a);if(b)return a.a.h=!1,{value:b.value,done:!1}}catch(c){a.a.o=void 0,a.a.j(c)}a.a.h=!1;if(a.a.g){b=a.a.g;a.a.g=null;if(b.B)throw b.A;return{value:b["return"],done:!0}}return{value:void 0,done:!0}}
    function M(a){this.next=function(b){return a.i(b)};this["throw"]=function(b){return a.j(b)};this["return"]=function(b){return L(a,b)};w();this[Symbol.iterator]=function(){return this}}function N(a,b){var c=new M(new I(b));D&&D(c,a.prototype);return c}
    if("undefined"!==typeof Blob&&("undefined"===typeof FormData||!FormData.prototype.keys)){var O=function(a,b){for(var c=0;c<a.length;c++)b(a[c])},P=function(a,b,c){return b instanceof Blob?[String(a),b,void 0!==c?c+"":"string"===typeof b.name?b.name:"blob"]:[String(a),String(b)]},Q=function(a,b){if(a.length<b)throw new TypeError(b+" argument required, but only "+a.length+" present.");},S=function(a){var b=y(a);a=b.next().value;b=b.next().value;a instanceof Blob&&(a=new File([a],b,{type:a.type,lastModified:a.lastModified}));
        return a},T="object"===typeof window?window:"object"===typeof self?self:this,U=T.FormData,V=T.XMLHttpRequest&&T.XMLHttpRequest.prototype.send,W=T.Request&&T.fetch,X=T.navigator&&T.navigator.sendBeacon;r();var Y=T.Symbol&&Symbol.toStringTag;Y&&(Blob.prototype[Y]||(Blob.prototype[Y]="Blob"),"File"in T&&!File.prototype[Y]&&(File.prototype[Y]="File"));try{new File([],"")}catch(a){T.File=function(b,c,d){b=new Blob(b,d);d=d&&void 0!==d.lastModified?new Date(d.lastModified):new Date;Object.defineProperties(b,
        {name:{value:c},lastModifiedDate:{value:d},lastModified:{value:+d},toString:{value:function(){return"[object File]"}}});Y&&Object.defineProperty(b,Y,{value:"File"});return b}}r();w();var Z=function(a){this.f=Object.create(null);if(!a)return this;var b=this;O(a.elements,function(c){if(c.name&&!c.disabled&&"submit"!==c.type&&"button"!==c.type)if("file"===c.type){var d=c.files&&c.files.length?c.files:[new File([],"",{type:"application/octet-stream"})];O(d,function(e){b.append(c.name,e)})}else"select-multiple"===
    c.type||"select-one"===c.type?O(c.options,function(e){!e.disabled&&e.selected&&b.append(c.name,e.value)}):"checkbox"===c.type||"radio"===c.type?c.checked&&b.append(c.name,c.value):(d="textarea"===c.type?c.value.replace(/\r\n/g,"\n").replace(/\n/g,"\r\n"):c.value,b.append(c.name,d))})};k=Z.prototype;k.append=function(a,b,c){Q(arguments,2);var d=y(P.apply(null,arguments));a=d.next().value;b=d.next().value;c=d.next().value;d=this.f;d[a]||(d[a]=[]);d[a].push([b,c])};k["delete"]=function(a){Q(arguments,
        1);delete this.f[String(a)]};k.entries=function b(){var c=this,d,e,f,g,h,t;return N(b,function(l){switch(l.b){case 1:d=c.f,f=new H(d);case 2:var n;a:{for(n=f;0<n.l.length;){var R=n.l.pop();if(R in n.C){n=R;break a}}n=null}if(null==(e=n)){l.b=0;break}g=y(d[e]);h=g.next();case 5:if(h.done){l.b=2;break}t=h.value;return G(l,[e,S(t)],6);case 6:h=g.next(),l.b=5}})};k.forEach=function(b,c){Q(arguments,1);for(var d=y(this),e=d.next();!e.done;e=d.next()){var f=y(e.value);e=f.next().value;f=f.next().value;
        b.call(c,f,e,this)}};k.get=function(b){Q(arguments,1);var c=this.f;b=String(b);return c[b]?S(c[b][0]):null};k.getAll=function(b){Q(arguments,1);return(this.f[String(b)]||[]).map(S)};k.has=function(b){Q(arguments,1);return String(b)in this.f};k.keys=function c(){var d=this,e,f,g,h,t;return N(c,function(l){1==l.b&&(e=y(d),f=e.next());if(3!=l.b){if(f.done){l.b=0;return}g=f.value;h=y(g);t=h.next().value;return G(l,t,3)}f=e.next();l.b=2})};k.set=function(c,d,e){Q(arguments,2);var f=P.apply(null,arguments);
        this.f[f[0]]=[[f[1],f[2]]]};k.values=function d(){var e=this,f,g,h,t,l;return N(d,function(n){1==n.b&&(f=y(e),g=f.next());if(3!=n.b){if(g.done){n.b=0;return}h=g.value;t=y(h);t.next();l=t.next().value;return G(n,l,3)}g=f.next();n.b=2})};Z.prototype._asNative=function(){for(var d=new U,e=y(this),f=e.next();!f.done;f=e.next()){var g=y(f.value);f=g.next().value;g=g.next().value;d.append(f,g)}return d};Z.prototype._blob=function(){for(var d="----formdata-polyfill-"+Math.random(),e=[],f=y(this),g=f.next();!g.done;g=
        f.next()){var h=y(g.value);g=h.next().value;h=h.next().value;e.push("--"+d+"\r\n");h instanceof Blob?e.push('Content-Disposition: form-data; name="'+g+'"; filename="'+h.name+'"\r\n',"Content-Type: "+(h.type||"application/octet-stream")+"\r\n\r\n",h,"\r\n"):e.push('Content-Disposition: form-data; name="'+g+'"\r\n\r\n'+h+"\r\n")}e.push("--"+d+"--");return new Blob(e,{type:"multipart/form-data; boundary="+d})};Z.prototype[Symbol.iterator]=function(){return this.entries()};Z.prototype.toString=function(){return"[object FormData]"};
        Y&&(Z.prototype[Y]="FormData");if(V){var aa=T.XMLHttpRequest.prototype.setRequestHeader;T.XMLHttpRequest.prototype.setRequestHeader=function(d,e){aa.call(this,d,e);"content-type"===d.toLowerCase()&&(this.u=!0)};T.XMLHttpRequest.prototype.send=function(d){d instanceof Z?(d=d._blob(),this.u||this.setRequestHeader("Content-Type",d.type),V.call(this,d)):V.call(this,d)}}if(W){var ba=T.fetch;T.fetch=function(d,e){e&&e.body&&e.body instanceof Z&&(e.body=e.body._blob());return ba.call(this,d,e)}}X&&(T.navigator.sendBeacon=
            function(d,e){e instanceof Z&&(e=e._asNative());return X.call(this,d,e)});T.FormData=Z};
})();
/** End polyfill FormData **/


let cookieValueFirstVisit = document.cookie.replace(/(?:(?:^|.*;\s*)firstvisited\s*\=\s*([^;]*).*$)|^.*$/, "$1"); //Check first visit in cookie.
    if(!cookieValueFirstVisit) { //If don't have first visit then create this string and then count visit in this string.
        let timenow = new Date();
        let firsttime ='firstvisited=' + timenow.toString();
        document.cookie = firsttime + "; domain=." + document.domain + "; path=/; expires=Thu, 01 Jan 2030 00:00:00 UTC;";
        document.cookie = "countpages=1 ; domain=." + document.domain + "; path=/; expires=Thu, 01 Jan 2030 00:00:00 UTC;";
    } else { //Увеличиваем счетчик на единиц
			  window.cookieValueCountPages = document.cookie.replace(/(?:(?:^|.*;\s*)countpages\s*\=\s*([^;]*).*$)|^.*$/, "$1");
			  document.cookie = "countpages=" + ++window.cookieValueCountPages + "; domain=." + document.domain + "; path=/; expires=Thu, 01 Jan 2030 00:00:00 UTC;";
    }
    // Проверяем какой язык у клиента и установлен ли он в куках.
let langcookie = document.cookie.replace(/(?:(?:^|.*;\s*)lang\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    if (!langcookie) {
        document.cookie = "lang=" + navigator.language.match(/\w+/)[0].toLowerCase() + "; domain=." + document.domain + "; path=/; expires=Thu, 01 Jan 2030 00:00:00 UTC;";
    }

let materializesforms = ["FormJSON", "AnotherFormJSON", "MobileCallBack"]; // ID formS for take data and sent into addEventListener.

materializesforms.forEach(function(pagesforms, materializesforms) {

    let contactForm = document.getElementById(pagesforms); //Get object

    contactForm.addEventListener('submit', function(event) { //отлавливаем событие нажатие на кнопку у формы
        event.preventDefault(); //отменяем все действия выполняемые по умолчанию браузером после этого события

        console.log('Действия пред отправкой JSON после нажатия'); // Тут можно задать действия сразу после нажатия кнопкп ПЕРЕД отправкаой JSON - "подождите сообщение отправляется."
        let dataf = new FormData(contactForm); // Передаем объект в функцию FormData
        //console.log(Array.from(dataf)); // - так можно посмотреть, что передлось
        let mobileAnswer;
        if (this.id == "MobileCallBack") {
         mobileAnswer = document.getElementById("middleform")
        } else {
            mobileAnswer = contactForm
        }
        mobileAnswer.innerHTML = '<div class="waitingmessage center"> <div class="preloader-wrapper big active"> <div class="spinner-layer spinner-blue-only"> <div class="circle-clipper left"> <div class="circle"></div></div><div class="gap-patch"> <div class="circle"></div></div><div class="circle-clipper right"> <div class="circle"></div></div></div></div><div class="textwaiting">Please, waiting anytime, your message sending at this moment.</div></div>';


        let request = new XMLHttpRequest();
        let url = "jsonmailformjsajax.php";
        request.open("POST", url, true);
        request.setRequestHeader("Content-Type", "application/json");
        request.onreadystatechange = function () {
            if (request.readyState === 4 && request.status === 200) { // сценарий скриптов после ответа от сервера.
                let jsonData = JSON.parse(request.response);
                console.log(jsonData);
                console.log(request.response);
                let messageconcatination = '';
                let usersName = '';
                if (jsonData['name'] === null || jsonData['name'] === '') {
                    usersName = '!';
                } else {
                    usersName = ", " + jsonData['name'] + "!";
                }
                if (jsonData['message'] === null || jsonData['message'] === '') {
                } else { messageconcatination = ': <em style="color:#516eee">' + jsonData['message'] + '</em>' }
                mobileAnswer.innerHTML = "<div class='center'><h3>Спасибо за Ваш интерес" + usersName + '</h3><br> Ваше сообщение' + messageconcatination + ' отправлено. <br><br> Мы уже увидели вашу заявку и в ближайшие 24 часа с Вами свяжется наш специалист. <br> Если у Вас есть срочный вопрос, Вы можете связаться с нами по телефонам:<br><a href="tel:+78008881234">8 800 888 12 34</a><br><a href="tel:+660800323660">+66 0800 323660</a><br><a href="tel:+660800399191">+66 0800399191</a></div>';
            }
        };

        let current_datetime = new Date(); // Время и часовой пояс на компьютере клиента

        //Дополняем объект FormData нужными дополнительными данными полученные из необработанных форм и других источников.

        let varcheck; //Временная переменная с полученными значениями из форм.
        let multipleoptions; ( varcheck = contactForm.querySelector(".multipleoptions .select-wrapper input")) ? multipleoptions = varcheck.value : multipleoptions = false; // получаем данные старым способом
        dataf.append('multipleoptions', multipleoptions);
        let name; ( varcheck = contactForm.querySelector('input[name="name"]')) ? name = varcheck.value : name = false;
        let radiochoice; if (contactForm.querySelector('input[type="radio"]')) {let groupnameradio = contactForm.querySelector('input[type="radio"]').name;
        let rates = document.getElementsByName(groupnameradio); // Только в document дереве, в переменной не работает уникализируем в html через атрибут name, который группирует объекты radio!
            for(var i = 0; i < rates.length; i++){
                if(rates[i].checked){
                    dataf.append('radiochoice', rates[i].id);
                }
            }
        } else {
            dataf.append('radiochoice', "false");
        }
        dataf.append('browser', navigator.userAgent);
        dataf.append('language', navigator.language);
        dataf.append('firstvititedsite', cookieValueFirstVisit);
        dataf.append('time', current_datetime.toString());
        if (typeof cookieValueCountPages === "undefined") { window.cookieValueCountPages = 1; }
        dataf.append('countpages', cookieValueCountPages);

        let arrayformdata = {};
        dataf.forEach((value, key) => {arrayformdata[key] = value}); // Преобразуем FormData объект в массив по стандарту ES6
        let jsonformdata = JSON.stringify(arrayformdata); // Полученный массив в JSON Формат

        request.send(jsonformdata); // request.send(dataf); - можно и отправить на сервер зашифрованный FormData объект XHR - 2  версии
    });


});

let opencallmobileback = document.getElementById("controlphonebtnopen");
let callmobileclose = document.getElementById("controlphonebtnclose");
let formcallback = document.getElementById("windowfixedform");
 opencallmobileback.addEventListener('click', function () {
     opencallmobileback.style.display = 'none';
     callmobileclose.style.display = 'block';
     formcallback.style.transform = 'scale(1)  translate(0px, 0px)';
});
callmobileclose.addEventListener('click', function () {
    opencallmobileback.style.display = 'block';
    callmobileclose.style.display = 'none';
    formcallback.style.transform = 'scale(0) translate(100%, 100%)';
});


function changelanguage() {
    let fl =  document.cookie.replace(/(?:(?:^|.*;\s*)lang\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    document.querySelectorAll('.lang').forEach(function(element) {
        element.innerHTML = arrLang[fl][element.dataset.lan];
        //       console.log(arrLang[fl][element.dataset.lan]);
        //       console.log(element.dataset.lan);
    });
}