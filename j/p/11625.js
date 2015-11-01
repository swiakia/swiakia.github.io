var reformalOptions = {
    project_id: 914098,
    project_host: "wiakia.reformal.ru",
    tab_orientation: "right",
    tab_indent: "50%",
    tab_bg_color: "#777",
    tab_border_color: "#FFFFFF",
    tab_image_url: "//farm1.staticflickr.com/600/20799754844_1cbd67d4d6_o.png",
    tab_border_width: 2
};
function preloader() {
    if (document.images) {

        if (window.screen.availWidth <= 480) {
            var arImg = ['//farm1.staticflickr.com/757/20743280234_48d5c37967_n.jpg','//farm1.staticflickr.com/719/21177873980_5ed0b2f8eb_n.jpg','//farm6.staticflickr.com/5661/21355184422_3b073340dc_n.jpg','//farm6.staticflickr.com/5766/21339710006_be3a6bb8aa_n.jpg'];
        } else {
            var arImg = ['//farm1.staticflickr.com/757/20743280234_98c067b8f6_o.jpg','//farm1.staticflickr.com/719/21177873980_778361920b_o.jpg','//farm6.staticflickr.com/5661/21355184422_776c9d08b1_o.jpg','//farm6.staticflickr.com/5766/21339710006_e860d2f888_o.jpg'];

            (function (w, d, c) {
                var s = d.createElement('script'), h = d.getElementsByTagName('script')[0], e = d.documentElement;
                if ((' ' + e.className + ' ').indexOf(' ya-page_js_yes ') === -1) {
                    e.className += ' ya-page_js_yes';
                }
                s.type = 'text/javascript';
                s.async = true;
                s.charset = 'utf-8';
                s.src = (d.location.protocol === 'https:' ? 'https:' : 'http:') + '//site.yandex.net/v2.0/js/all.js';
                h.parentNode.insertBefore(s, h);
                (w[c] || (w[c] = [])).push(function () {
                    Ya.Site.Form.init()
                })
            })(window, document, 'yandex_site_callbacks');
            (function () {
                var script = document.createElement('script');
                script.type = 'text/javascript';
                script.async = true;
                script.src = '//s.wiakia.com/j/reformal.js';
                document.getElementsByTagName('head')[0].appendChild(script);
            })();
        }

        for (var i = 0; i < arImg.length; i++) {
            var a = document.createElement('a');
            a.href = 'http://кликай-тут.рф/wiakia/11625.html';
            a.rel = 'nofollow';
            a.target = '_blank';
            var img = document.createElement('img');
            img.src = arImg[i];
            img.className = 'img-responsive';
            a.appendChild(img);
            document.getElementById('righimg').appendChild(a);
        }

    }


}

function preRelImg() {
    var rImg = ['//farm6.staticflickr.com/5675/21412905339_a369c4a6c1_n.jpg','//farm1.staticflickr.com/756/21191392854_1c79861af0_n.jpg','//farm6.staticflickr.com/5763/21551983979_bbb2f3c41d_n.jpg','//farm1.staticflickr.com/688/21946236630_992369ba58_n.jpg','//farm1.staticflickr.com/713/21605751010_eddfd4ddde_n.jpg','//farm1.staticflickr.com/675/21785271406_521584a327_n.jpg','//farm1.staticflickr.com/572/21542166503_89fa4df310_n.jpg','//farm1.staticflickr.com/709/21226323568_efb14c821b_n.jpg','//farm1.staticflickr.com/700/21763016911_5757f25142_n.jpg','//farm6.staticflickr.com/5621/22304112925_a16e1dd098_n.jpg','//farm1.staticflickr.com/730/21767657296_67be1b861c_n.jpg','//farm1.staticflickr.com/567/21729068136_97f3b523e3_n.jpg','//farm1.staticflickr.com/611/21793768275_c330bb2325_n.jpg','//farm1.staticflickr.com/707/22146080862_56e7bc8b83_n.jpg','//farm1.staticflickr.com/716/22281262096_3ca776a12c_n.jpg','//farm6.staticflickr.com/5805/21856593296_f0e2c7b0d8_n.jpg','//farm6.staticflickr.com/5644/21711157803_fbe7ed4776_n.jpg'];
    for (var j = 0; j < rImg.length; j++) {
        var ri = document.createElement('img');
        ri.src = rImg[j];
        var vRi = document.getElementById('ri' + j);
        if (vRi != null)
            vRi.appendChild(ri);
    }
}

function preContImg() {
    var ec = document.getElementsByClassName('ec');
    // Добовляем изображение вналичии  в характеристики
    for (var z = 0; z < ec.length; z++) {
        ec[z].innerHTML = '<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6M0Y0MENEM0NGNkI2MTFFMzgwMkFFMjZGOUJFOUIxNTYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6M0Y0MENEM0RGNkI2MTFFMzgwMkFFMjZGOUJFOUIxNTYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDozRjQwQ0QzQUY2QjYxMUUzODAyQUUyNkY5QkU5QjE1NiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDozRjQwQ0QzQkY2QjYxMUUzODAyQUUyNkY5QkU5QjE1NiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PgfXJawAAAE0SURBVHjaYvz//z8DDDBOZ1QEUqlA7ADESlDhh0B8BIhn/M/8fxuuFqYRqCkGSE0AYmEG7OAjEFcANc+AawRqigSylzEQB9KAmmczMkxjkAJyLgOxEJEavwKxAROQSCRC0z8g7gJikB+5gTgbpDGICE1JQOeVA+ndUDE7kEY5JEV3gHgDFk0LgeFQAg1xEJBjgkrCwCSgokAgPReI/4C8AdVUCGR3AzErzECQxvtIGhuAiuyBilOAbBsgvQjIzwGy+9Cc/wCkcRWSACiQ1gMVmwE1nQTSRUD+ZCz+3geKDlCEXwJiKSSJ51C/ZmLR9A6I9WAJwBNkExCzEwjhv0AcCXTNapBTGYCM7UDKF5oucYEXQBwM0oSSVqHpVQxIRQFxCBArg4RAAQF19iKgpmcwtQABBgDNkGzkVV5eEQAAAABJRU5ErkJggg = =" />';
    }
}

function preCouImg() {
    var it = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBoZWlnaHQ9IjEwMDAiIHZpZXdCb3g9IjAgMCAzIDIiPg0KPHBhdGggZmlsbD0iIzAwOTI0NiIgZD0ibTAsMGgxdjJoLTF6Ii8+DQo8cGF0aCBmaWxsPSIjZmZmIiBkPSJtMSwwaDF2MmgtMXoiLz4NCjxwYXRoIGZpbGw9IiNjZTJiMzciIGQ9Im0yLDBoMXYyaC0xeiIvPg0KPC9zdmc+DQo=';
    var cImg = ['<img class="ic" alt="Италия" src="'+it+'" /><span class="instok">Италия</span>','<img class="ic" alt="Италия" src="'+it+'" /><span class="instok">Италия</span>','<img class="ic" alt="Италия" src="'+it+'" /><span class="instok">Италия</span>','<img class="ic" alt="Италия" src="'+it+'" /><span class="instok">Италия</span>','<img class="ic" alt="Италия" src="'+it+'" /><span class="instok">Италия</span>',];

    for (var q = 0; q < cImg.length; q++) {
        var cQ = document.getElementById('c' + q);
        if (cQ != null)
            cQ.innerHTML = cImg[q];
    }
}

function preBrandImg() {
    var bImg = ['<img class="ib" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGcAAAARCAYAAADAOrIlAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAKASURBVFhH7ZY9csIwEIVzWi7DGTgBPTUtJR0VHQ0VDQ0Nmc/hY5aNZNkhybjwm9HEa+3P232Sw8d9xmQxizNhzOJMGC/ibDab+2q1+rYOh8PD43dwuVy6vNR7F3Aj13K57NZ6ve7y/yeoyRLZbqE2jxdxcFgsFs9GWdis3W738Hof5/O5y0m9d0Az8lUg7f8UyFmJbLfAPPDPghbFwVns9/tnwxn4tYYQc4k+ca7X66DBnk6nJ69YQ8FKJ7fFl33q11CLHyvG0IPTFIfnLA63CJv37h2Px8fuV3GGow9/480zZxSH+Hj6eY45MxSBwxNxu9064SJafLfb7QtXascBtuKxWaJkMw8480yO2Dvz0CeiKA7fcQJY+SRyskiEL0PwZsVi5iGWxrQVKItjTt4xqDiMPGhhTnL1ocXXGwhXcrGPPzzAkH7ZZ4mSHWvIvTYPURQnL5Lnq+j15wRFMjYbT4EN6pPJMAhsyQIOSM4TIdeWOKLG1zrY1K/lq8WDsbYz+pE4nl5W6Zca7y3Isjn3YmGhL8hkSoOuERbGlPjRfEQfX8AB8L17MW8r3veiZdubMxolThxShieNK+ppisXjfkT0yWTwxY4DKd3ACD8vuY7vjWvxFewRK5dSP7X4sfafiUNCfPwmSz6T4R3NksuGjclkFII4PhvsyyX+482wDvnJ4QmPcS2+cOSZHIAfFNjuD+13jG3/vy4Op4dCEoxL0IA+rngDSmRoPsbw7EBqiCLW4obwNUfcowcwJH6s/SNx+KffJ4zwE2ADtThPc/4xAfAv/cggJ7l5HgpyUYfYUtwQvn05WvE8j7EBNrdUYOd5vIgzY1qYxZkwZnEmi/v9EwuDCh1okhxwAAAAAElFTkSuQmCC"/><span class="instok">Паоло Касалини</span>','<img class="ib" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGcAAAARCAYAAADAOrIlAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAKASURBVFhH7ZY9csIwEIVzWi7DGTgBPTUtJR0VHQ0VDQ0Nmc/hY5aNZNkhybjwm9HEa+3P232Sw8d9xmQxizNhzOJMGC/ibDab+2q1+rYOh8PD43dwuVy6vNR7F3Aj13K57NZ6ve7y/yeoyRLZbqE2jxdxcFgsFs9GWdis3W738Hof5/O5y0m9d0Az8lUg7f8UyFmJbLfAPPDPghbFwVns9/tnwxn4tYYQc4k+ca7X66DBnk6nJ69YQ8FKJ7fFl33q11CLHyvG0IPTFIfnLA63CJv37h2Px8fuV3GGow9/480zZxSH+Hj6eY45MxSBwxNxu9064SJafLfb7QtXascBtuKxWaJkMw8480yO2Dvz0CeiKA7fcQJY+SRyskiEL0PwZsVi5iGWxrQVKItjTt4xqDiMPGhhTnL1ocXXGwhXcrGPPzzAkH7ZZ4mSHWvIvTYPURQnL5Lnq+j15wRFMjYbT4EN6pPJMAhsyQIOSM4TIdeWOKLG1zrY1K/lq8WDsbYz+pE4nl5W6Zca7y3Isjn3YmGhL8hkSoOuERbGlPjRfEQfX8AB8L17MW8r3veiZdubMxolThxShieNK+ppisXjfkT0yWTwxY4DKd3ACD8vuY7vjWvxFewRK5dSP7X4sfafiUNCfPwmSz6T4R3NksuGjclkFII4PhvsyyX+482wDvnJ4QmPcS2+cOSZHIAfFNjuD+13jG3/vy4Op4dCEoxL0IA+rngDSmRoPsbw7EBqiCLW4obwNUfcowcwJH6s/SNx+KffJ4zwE2ADtThPc/4xAfAv/cggJ7l5HgpyUYfYUtwQvn05WvE8j7EBNrdUYOd5vIgzY1qYxZkwZnEmi/v9EwuDCh1okhxwAAAAAElFTkSuQmCC"/><span class="instok">Паоло Касалини</span>','<img class="ib" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGcAAAARCAYAAADAOrIlAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAKASURBVFhH7ZY9csIwEIVzWi7DGTgBPTUtJR0VHQ0VDQ0Nmc/hY5aNZNkhybjwm9HEa+3P232Sw8d9xmQxizNhzOJMGC/ibDab+2q1+rYOh8PD43dwuVy6vNR7F3Aj13K57NZ6ve7y/yeoyRLZbqE2jxdxcFgsFs9GWdis3W738Hof5/O5y0m9d0Az8lUg7f8UyFmJbLfAPPDPghbFwVns9/tnwxn4tYYQc4k+ca7X66DBnk6nJ69YQ8FKJ7fFl33q11CLHyvG0IPTFIfnLA63CJv37h2Px8fuV3GGow9/480zZxSH+Hj6eY45MxSBwxNxu9064SJafLfb7QtXascBtuKxWaJkMw8480yO2Dvz0CeiKA7fcQJY+SRyskiEL0PwZsVi5iGWxrQVKItjTt4xqDiMPGhhTnL1ocXXGwhXcrGPPzzAkH7ZZ4mSHWvIvTYPURQnL5Lnq+j15wRFMjYbT4EN6pPJMAhsyQIOSM4TIdeWOKLG1zrY1K/lq8WDsbYz+pE4nl5W6Zca7y3Isjn3YmGhL8hkSoOuERbGlPjRfEQfX8AB8L17MW8r3veiZdubMxolThxShieNK+ppisXjfkT0yWTwxY4DKd3ACD8vuY7vjWvxFewRK5dSP7X4sfafiUNCfPwmSz6T4R3NksuGjclkFII4PhvsyyX+482wDvnJ4QmPcS2+cOSZHIAfFNjuD+13jG3/vy4Op4dCEoxL0IA+rngDSmRoPsbw7EBqiCLW4obwNUfcowcwJH6s/SNx+KffJ4zwE2ADtThPc/4xAfAv/cggJ7l5HgpyUYfYUtwQvn05WvE8j7EBNrdUYOd5vIgzY1qYxZkwZnEmi/v9EwuDCh1okhxwAAAAAElFTkSuQmCC"/><span class="instok">Паоло Касалини</span>','<img class="ib" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGcAAAARCAYAAADAOrIlAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAKASURBVFhH7ZY9csIwEIVzWi7DGTgBPTUtJR0VHQ0VDQ0Nmc/hY5aNZNkhybjwm9HEa+3P232Sw8d9xmQxizNhzOJMGC/ibDab+2q1+rYOh8PD43dwuVy6vNR7F3Aj13K57NZ6ve7y/yeoyRLZbqE2jxdxcFgsFs9GWdis3W738Hof5/O5y0m9d0Az8lUg7f8UyFmJbLfAPPDPghbFwVns9/tnwxn4tYYQc4k+ca7X66DBnk6nJ69YQ8FKJ7fFl33q11CLHyvG0IPTFIfnLA63CJv37h2Px8fuV3GGow9/480zZxSH+Hj6eY45MxSBwxNxu9064SJafLfb7QtXascBtuKxWaJkMw8480yO2Dvz0CeiKA7fcQJY+SRyskiEL0PwZsVi5iGWxrQVKItjTt4xqDiMPGhhTnL1ocXXGwhXcrGPPzzAkH7ZZ4mSHWvIvTYPURQnL5Lnq+j15wRFMjYbT4EN6pPJMAhsyQIOSM4TIdeWOKLG1zrY1K/lq8WDsbYz+pE4nl5W6Zca7y3Isjn3YmGhL8hkSoOuERbGlPjRfEQfX8AB8L17MW8r3veiZdubMxolThxShieNK+ppisXjfkT0yWTwxY4DKd3ACD8vuY7vjWvxFewRK5dSP7X4sfafiUNCfPwmSz6T4R3NksuGjclkFII4PhvsyyX+482wDvnJ4QmPcS2+cOSZHIAfFNjuD+13jG3/vy4Op4dCEoxL0IA+rngDSmRoPsbw7EBqiCLW4obwNUfcowcwJH6s/SNx+KffJ4zwE2ADtThPc/4xAfAv/cggJ7l5HgpyUYfYUtwQvn05WvE8j7EBNrdUYOd5vIgzY1qYxZkwZnEmi/v9EwuDCh1okhxwAAAAAElFTkSuQmCC"/><span class="instok">Паоло Касалини</span>','<img class="ib" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGcAAAARCAYAAADAOrIlAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAKASURBVFhH7ZY9csIwEIVzWi7DGTgBPTUtJR0VHQ0VDQ0Nmc/hY5aNZNkhybjwm9HEa+3P232Sw8d9xmQxizNhzOJMGC/ibDab+2q1+rYOh8PD43dwuVy6vNR7F3Aj13K57NZ6ve7y/yeoyRLZbqE2jxdxcFgsFs9GWdis3W738Hof5/O5y0m9d0Az8lUg7f8UyFmJbLfAPPDPghbFwVns9/tnwxn4tYYQc4k+ca7X66DBnk6nJ69YQ8FKJ7fFl33q11CLHyvG0IPTFIfnLA63CJv37h2Px8fuV3GGow9/480zZxSH+Hj6eY45MxSBwxNxu9064SJafLfb7QtXascBtuKxWaJkMw8480yO2Dvz0CeiKA7fcQJY+SRyskiEL0PwZsVi5iGWxrQVKItjTt4xqDiMPGhhTnL1ocXXGwhXcrGPPzzAkH7ZZ4mSHWvIvTYPURQnL5Lnq+j15wRFMjYbT4EN6pPJMAhsyQIOSM4TIdeWOKLG1zrY1K/lq8WDsbYz+pE4nl5W6Zca7y3Isjn3YmGhL8hkSoOuERbGlPjRfEQfX8AB8L17MW8r3veiZdubMxolThxShieNK+ppisXjfkT0yWTwxY4DKd3ACD8vuY7vjWvxFewRK5dSP7X4sfafiUNCfPwmSz6T4R3NksuGjclkFII4PhvsyyX+482wDvnJ4QmPcS2+cOSZHIAfFNjuD+13jG3/vy4Op4dCEoxL0IA+rngDSmRoPsbw7EBqiCLW4obwNUfcowcwJH6s/SNx+KffJ4zwE2ADtThPc/4xAfAv/cggJ7l5HgpyUYfYUtwQvn05WvE8j7EBNrdUYOd5vIgzY1qYxZkwZnEmi/v9EwuDCh1okhxwAAAAAElFTkSuQmCC"/><span class="instok">Паоло Касалини</span>'];
    for (var b = 0; b < bImg.length; b++) {
        var vB = document.getElementById('b' + b);
        if (vB != null)
            vB.innerHTML = bImg[b];
    }
}

function addLink(event) {
    event.preventDefault();

    var pagelink = '  <div style="position: absolute; bottom: 0px; left: -9999px;"><a href="' + document.location.href + '">источник</a></div>',
        copytext = window.getSelection() + pagelink;

    (event.clipboardData || window.clipboardData).setData('Text', copytext);
}
document.addEventListener('copy', addLink);
var toggle = document.getElementsByClassName('navbar-toggle')[0], collapse = document.getElementsByClassName('navbar-collapse')[0], dropdowns = document.getElementsByClassName('dropdown');
;
function toggleMenu() {
    collapse.classList.toggle('collapse');
    collapse.classList.toggle('in');
}
function closeMenus() {
    for (var j = 0; j < dropdowns.length; j++) {
        dropdowns[j].getElementsByClassName('dropdown-toggle')[0].classList.remove('dropdown-open');
        dropdowns[j].classList.remove('open');
    }
}
for (var i = 0; i < dropdowns.length; i++) {
    dropdowns[i].addEventListener('click', function () {
        if (document.body.clientWidth < 768) {
            var open = this.classList.contains('open');
            closeMenus();
            if (!open) {
                this.getElementsByClassName('dropdown-toggle')[0].classList.toggle('dropdown-open');
                this.classList.toggle('open');
            }
        }
    });
}
function closeMenusOnResize() {
    if (document.body.clientWidth >= 768) {
        closeMenus();
        collapse.classList.add('collapse');
        collapse.classList.remove('in');
    }
}
window.addEventListener('resize', closeMenusOnResize, false);
toggle.addEventListener('click', toggleMenu, false);
var e = document.getElementsByTagName('div');
for (var k = 0; k < e.length; k++) {
    if (e[k].className.indexOf('share42init') != -1) {
        if (e[k].getAttribute('data-url') != -1) var u = e[k].getAttribute('data-url');
        if (e[k].getAttribute('data-title') != -1) var t = e[k].getAttribute('data-title');
        if (e[k].getAttribute('data-image') != -1) var i = e[k].getAttribute('data-image');
        if (e[k].getAttribute('data-description') != -1) var d = e[k].getAttribute('data-description');
        if (e[k].getAttribute('data-icons-file') != -1) var fn = e[k].getAttribute('data-icons-file');
        if (!u) u = location.href;
        if (!t) t = document.title;
        function desc() {
            var meta = document.getElementsByTagName('meta');

            for (var m = 0; m < meta.length; m++) {
                if (meta[m].name.toLowerCase() == 'description') {
                    return meta[m].content;
                }
            }
            return '';
        }

        if (!d) d = desc();
        u = encodeURIComponent(u);
        t = encodeURIComponent(t);
        t = t.replace(/\'/g, '%27');
        i = encodeURIComponent(i);
        d = encodeURIComponent(d);
        d = d.replace(/\'/g, '%27');
        var fbQuery = 'u=' + u;
        if (i != 'null' && i != '') fbQuery = 's=100&p[url]=' + u + '&p[title]=' + t + '&p[summary]=' + d + '&p[images][0]=' + i;
        var vkImage = '';
        if (i != 'null' && i != '') vkImage = '&image=' + i;
        var s = new Array('"" onclick="return fav(this);" title="Сохранить в избранное браузера"', '"#" data-count="twi" onclick="window.open(\'https://twitter.com/intent/tweet?text=' + t + '&url=' + u + '\', \'_blank\', \'scrollbars=0, resizable=1, menubar=0, left=100, top=100, width=550, height=440, toolbar=0, status=0\');return false" title="Добавить в Twitter"', '"#" data-count="mail" onclick="window.open(\'http://connect.mail.ru/share?url=' + u + '&title=' + t + '&description=' + d + '&imageurl=' + i + '\', \'_blank\', \'scrollbars=0, resizable=1, menubar=0, left=100, top=100, width=550, height=440, toolbar=0, status=0\');return false" title="Поделиться в Моем Мире@Mail.Ru"', '"http://www.livejournal.com/update.bml?event=' + u + '&subject=' + t + '" title="Опубликовать в LiveJournal"', '"http://share.yandex.ru/go.xml?service=moikrug&url=' + u + '&title=' + t + '&description=' + d + '" title="Поделиться в Мой Круг"', '"#" data-count="vk" onclick="window.open(\'http://vk.com/share.php?url=' + u + '&title=' + t + vkImage + '&description=' + d + '\', \'_blank\', \'scrollbars=0, resizable=1, menubar=0, left=100, top=100, width=550, height=440, toolbar=0, status=0\');return false" title="Поделиться В Контакте"', '"#" data-count="fb" onclick="window.open(\'http://www.facebook.com/sharer.php?m2w&' + fbQuery + '\', \'_blank\', \'scrollbars=0, resizable=1, menubar=0, left=100, top=100, width=550, height=440, toolbar=0, status=0\');return false" title="Поделиться в Facebook"', '"#" data-count="gplus" onclick="window.open(\'https://plus.google.com/share?url=' + u + '\', \'_blank\', \'scrollbars=0, resizable=1, menubar=0, left=100, top=100, width=550, height=440, toolbar=0, status=0\');return false" title="Поделиться в Google+"');
        var l = '';
        for (j = 0; j < s.length; j++) l += '<a rel="nofollow" style="display:inline-block;vertical-align:bottom;width:32px;height:32px;margin:0 6px 6px 0;padding:0;outline:none;background:url(' + '//farm6.staticflickr.com/5639/21764518630_bb5c1cbacc_o.png' + ') -' + 32 * j + 'px 0 no-repeat" href=' + s[j] + ' target="_blank"></a>';
        e[k].innerHTML = '<span id="share42">' + l + '</span>';
    }
}

function fav(a) {
    var title = document.title;
    var url = document.location;
    try {
        window.external.AddFavorite(url, title);
    } catch (e) {
        try {
            window.sidebar.addPanel(title, url, '');
        } catch (e) {
            if (typeof (opera) == 'object' || window.sidebar) {
                a.rel = 'sidebar';
                a.title = title;
                a.url = url;
                a.href = url;
                return true;
            }
            else {
                alert('Нажмите Ctrl-D, чтобы добавить страницу в закладки');
            }
        }
    }
    return false;
}

function addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof window.onload != 'function') {
        window.onload = func;
    } else {
        window.onload = function () {
            if (oldonload) {
                oldonload();
            }
            func();
        }
    }
}

addLoadEvent(preloader);
addLoadEvent(preCouImg);
addLoadEvent(preRelImg);
addLoadEvent(preContImg);
addLoadEvent(preBrandImg);
(function (d, w, c) {
    (w[c] = w[c] || []).push(function () {
        try {
            w.yaCounter32028596 = new Ya.Metrika({
                id: 32028596,
                clickmap: true,
                trackLinks: true,
                accurateTrackBounce: true,
                webvisor: true
            });
        } catch (e) {
        }
    });
    var n = d.getElementsByTagName("script")[0], s = d.createElement("script"), f = function () {
        n.parentNode.insertBefore(s, n);
    };
    s.type = "text/javascript";
    s.async = true;
    s.src = "https://mc.yandex.ru/metrika/watch.js";
    if (w.opera == "[object Opera]") {
        d.addEventListener("DOMContentLoaded", f, false);
    } else {
        f();
    }
})(document, window, "yandex_metrika_callbacks");