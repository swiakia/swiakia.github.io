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
            var arImg = ['//farm1.staticflickr.com/579/21355792302_740e219dac_n.jpg','//farm1.staticflickr.com/702/20743884024_e4335d852a_n.jpg','//farm6.staticflickr.com/5756/20745486093_5968ee4c50_n.jpg','//farm6.staticflickr.com/5749/21178487210_cc8ecf6e69_n.jpg'];
        } else {
            var arImg = ['//farm1.staticflickr.com/579/21355792302_0be567dbba_o.jpg','//farm1.staticflickr.com/702/20743884024_f452c73891_o.jpg','//farm6.staticflickr.com/5756/20745486093_61ba4ffc97_o.jpg','//farm6.staticflickr.com/5749/21178487210_5aaa79522b_o.jpg'];

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
            a.href = 'http://кликай-тут.рф/wiakia/12045.html';
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
    var rImg = ['//farm6.staticflickr.com/5646/22098934732_7b008005ff_n.jpg','//farm6.staticflickr.com/5745/21184493748_e4a6ae9164_n.jpg','//farm1.staticflickr.com/619/21617173482_a738ae21c2_n.jpg','//farm6.staticflickr.com/5834/21599680006_d7ba23df8c_n.jpg','//farm6.staticflickr.com/5680/21593203236_e28a5120c8_n.jpg','//farm1.staticflickr.com/566/21373573125_b540756843_n.jpg','//farm6.staticflickr.com/5670/21438441269_74e133bb6b_n.jpg','//farm6.staticflickr.com/5787/22319579211_ef702a0909_n.jpg','//farm1.staticflickr.com/712/22108732956_1133a65e99_n.jpg','//farm1.staticflickr.com/700/21543336558_22e3144d86_n.jpg','//farm1.staticflickr.com/595/21541295228_2226db8934_n.jpg','//farm1.staticflickr.com/676/22097823388_53a08ec4b9_n.jpg','//farm1.staticflickr.com/774/22141964188_cfa5d3422a_n.jpg','//farm6.staticflickr.com/5752/22094845695_6a1cebb4a2_n.jpg','//farm1.staticflickr.com/731/21701413974_b78933cb72_n.jpg','//farm1.staticflickr.com/707/21431316748_7542a86531_n.jpg','//farm6.staticflickr.com/5635/21789901255_4da6afb184_n.jpg','//farm6.staticflickr.com/5734/22140726660_efc11df33f_n.jpg','//farm1.staticflickr.com/754/21687234083_bc7407e749_n.jpg','//farm6.staticflickr.com/5694/21692800324_13b085f7d8_n.jpg'];
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
    var it = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBoZWlnaHQ9IjEwMDAiIHZpZXdCb3g9IjAgMCAzIDIiPg0KPHBhdGggZmlsbD0iIzAwOTI0NiIgZD0ibTAsMGgxdjJoLTF6Ii8+DQo8cGF0aCBmaWxsPSIjZmZmIiBkPSJtMSwwaDF2MmgtMXoiLz4NCjxwYXRoIGZpbGw9IiNjZTJiMzciIGQ9Im0yLDBoMXYyaC0xeiIvPg0KPC9zdmc+DQo=';var bd = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAwIDYwMCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPg0KPHBhdGggZmlsbD0iIzAwNmE0ZSIgZD0ibTAsMGgxMDAwdjYwMGgtMTAwMHoiLz4NCjxjaXJjbGUgZmlsbD0iI2Y0MmE0MSIgY3g9IjQ1MCIgY3k9IjMwMCIgcj0iMjAwIi8+DQo8L3N2Zz4NCg==';var tr = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBoZWlnaHQ9IjgwMCIgdmlld0JveD0iMCAwIDM2MCAyNDAiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4NCjxwYXRoIGZpbGw9IiNlMzBhMTciIGQ9Im0wLDBoMzYwdjI0MGgtMzYweiIvPg0KPGNpcmNsZSBmaWxsPSIjZmZmIiBjeD0iMTIwIiBjeT0iMTIwIiByPSI2MCIvPg0KPGNpcmNsZSBmaWxsPSIjZTMwYTE3IiBjeD0iMTM1IiBjeT0iMTIwIiByPSI0OCIvPg0KPGcgZmlsbD0iI2ZmZiIgdHJhbnNmb3JtPSJtYXRyaXgoMCAtMzAgMzAgMCAyMDAuNyAxMjApIj4NCjxnIGlkPSJnMiI+DQo8cGF0aCBpZD0iZzEiIGQ9Im0wLDAgMCwxIC41LDB6IiB0cmFuc2Zvcm09Im1hdHJpeCguOTUxMDYgLjMwOTAyIC0uMzA5MDIgLjk1MTA2IDAgLTEpIi8+DQo8dXNlIHhsaW5rOmhyZWY9IiNnMSIgdHJhbnNmb3JtPSJzY2FsZSgtMSAxKSIvPg0KPC9nPg0KPHVzZSB4bGluazpocmVmPSIjZzIiIHRyYW5zZm9ybT0icm90YXRlKDcyKSIvPg0KPHVzZSB4bGluazpocmVmPSIjZzIiIHRyYW5zZm9ybT0ibWF0cml4KC4zMDkwMiAtLjk1MTA2IC45NTEwNiAuMzA5MDIgMCAwKSIvPg0KPHVzZSB4bGluazpocmVmPSIjZzIiIHRyYW5zZm9ybT0icm90YXRlKDE0NCkiLz4NCjx1c2UgeGxpbms6aHJlZj0iI2cyIiB0cmFuc2Zvcm09Im1hdHJpeCgtLjgwOTAyIC0uNTg3NzkgLjU4Nzc5IC0uODA5MDIgMCAwKSIvPg0KPC9nPg0KPC9zdmc+DQo=';var hu = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjAwIDYwMCI+DQo8cGF0aCBmaWxsPSIjY2UxMTI2IiBkPSJtMCwwaDEyMDB2NjAwaC0xMjAweiIvPg0KPHBhdGggZmlsbD0iI2ZmZiIgZD0ibTAsMjAwaDEyMDB2NDAwaC0xMjAweiIvPg0KPHBhdGggZmlsbD0iIzAwODc1MSIgZD0ibTAsNDAwaDEyMDB2MjAwaC0xMjAweiIvPg0KPC9zdmc+DQo=';var gb = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgNjAgMzAiIGhlaWdodD0iNjAwIj4NCjxkZWZzPg0KPGNsaXBQYXRoIGlkPSJ0Ij4NCjxwYXRoIGQ9Im0zMCwxNWgzMHYxNXp2MTVoLTMwemgtMzB2LTE1enYtMTVoMzB6Ii8+DQo8L2NsaXBQYXRoPg0KPC9kZWZzPg0KPHBhdGggZmlsbD0iIzAwMjQ3ZCIgZD0ibTAsMHYzMGg2MHYtMzB6Ii8+DQo8cGF0aCBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iNiIgZD0ibTAsMGw2MCwzMG0wLTMwbC02MCwzMCIvPg0KPHBhdGggc3Ryb2tlPSIjY2YxNDJiIiBzdHJva2Utd2lkdGg9IjQiIGQ9Im0wLDBsNjAsMzBtMC0zMGwtNjAsMzAiIGNsaXAtcGF0aD0idXJsKCN0KSIvPg0KPHBhdGggc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjEwIiBkPSJtMzAsMHYzMG0tMzAtMTVoNjAiLz4NCjxwYXRoIHN0cm9rZT0iI2NmMTQyYiIgc3Ryb2tlLXdpZHRoPSI2IiBkPSJtMzAsMHYzMG0tMzAtMTVoNjAiLz4NCjwvc3ZnPg0K';var cn = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjAwIDgwMCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPg0KPHBhdGggZmlsbD0iI2RlMjkxMCIgZD0ibTAsMGgxMjAwdjgwMGgtMTIwMHoiLz4NCjxwYXRoIGZpbGw9IiNmZmRlMDAiIGQ9Im0tMTYuNTc5Niw5OS42MDA3bDIuMzY4Ni04LjEwMzItNi45NTMtNC43ODgzIDguNDM4Ni0uMjUxNCAyLjQwNTMtOC4wOTI0IDIuODQ2Nyw3Ljk0NzkgOC40Mzk2LS4yMTMxLTYuNjc5Miw1LjE2MzQgMi44MTA2LDcuOTYwNy02Ljk3NDctNC43NTY3LTYuNzAyNSw1LjEzMzF6IiB0cmFuc2Zvcm09Im1hdHJpeCg5LjkzMzUyIC4yNzc0NyAtLjI3NzQ3IDkuOTMzNTIgMzI0LjI5MjUgLTY5NS4yNDE1KSIvPg0KPHBhdGggZmlsbD0iI2ZmZGUwMCIgaWQ9InN0YXIiIGQ9Im0zNjUuODU1MiwzMzIuNjg5NWwyOC4zMDY4LDExLjM3NTcgMTkuNjcyMi0yMy4zMTcxLTIuMDcxNiwzMC40MzY3IDI4LjI1NDksMTEuNTA0LTI5LjU4NzIsNy40MzUyLTIuMjA5NywzMC40MjY5LTE2LjIxNDItMjUuODQxNS0yOS42MjA2LDcuMzAwOSAxOS41NjYyLTIzLjQwNjEtMTYuMDk2OC0yNS45MTQ4eiIvPg0KPGcgZmlsbD0iI2ZmZGUwMCI+DQo8cGF0aCBkPSJtNTE5LjA3NzksMTc5LjMxMjlsLTMwLjA1MzQtNS4yNDE4LTE0LjM5NDUsMjYuODk3Ni00LjMwMTctMzAuMjAyMy0zMC4wMjkzLTUuMzc4MSAyNy4zOTQ4LTEzLjQyNDItNC4xNjQ3LTMwLjIyMTUgMjEuMjMyNiwyMS45MDU3IDI3LjQ1NTQtMTMuMjk5OC0xNC4yNzIzLDI2Ljk2MjcgMjEuMTMzMSwyMi4wMDE3eiIvPg0KPHBhdGggZD0ibTQ1NS4yNTkyLDMxNS45Nzk1bDkuMzczNC0yOS4wMzE0LTI0LjYzMjUtMTcuOTk3OCAzMC41MDctLjA1NjYgOS41MDUtMjguOTg4NiA5LjQ4MSwyOC45OTY0IDMwLjUwNywuMDgxOC0yNC42NDc0LDE3Ljk3NzQgOS4zNDkzLDI5LjAzOTItMjQuNzE0LTE3Ljg4NTgtMjQuNzI4OCwxNy44NjUzeiIvPg0KPC9nPg0KPHVzZSB4bGluazpocmVmPSIjc3RhciIgdHJhbnNmb3JtPSJtYXRyaXgoLjk5ODYzIC4wNTIzNCAtLjA1MjM0IC45OTg2MyAxOS40MDAwNSAtMzAwLjUzNjgxKSIvPg0KPC9zdmc+DQo=';
    var cImg = ['<img class="ic" alt="Италия" src="'+it+'" /><span class="instok">Италия</span>','<img class="ic" alt="Бангладеш" src="'+bd+'" /><span class="instok">Бангладеш</span>','<img class="ic" alt="Турция" src="'+tr+'" /><span class="instok">Турция</span>','<img class="ic" alt="Венгрия" src="'+hu+'" /><span class="instok">Венгрия</span>','<img class="ic" alt="Великобритания" src="'+gb+'" /><span class="instok">Великобритания</span>','<img class="ic" alt="Китай" src="'+cn+'" /><span class="instok">Китай</span>','<img class="ic" alt="Турция" src="'+tr+'" /><span class="instok">Турция</span>','<img class="ic" alt="Турция" src="'+tr+'" /><span class="instok">Турция</span>',];

    for (var q = 0; q < cImg.length; q++) {
        var cQ = document.getElementById('c' + q);
        if (cQ != null)
            cQ.innerHTML = cImg[q];
    }
}

function preBrandImg() {
    var bImg = ['<img class="ib" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAARCAYAAACilZ5PAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAF9SURBVEhL7ZUxjoNADEX3tFyGM3ACempaSjoqOhoqGhqaWb1ZfmQskwUpihQpXxqBPfafb49JftKH4iv83TgIb5omVVWV1zRNuzelZVke/rqud+91zPO8v/0Bjjs8UfxBOMKKosiLIoS+7x/+six37zXA43Ow7/BE8afCbSDV/ifcd1WIDn0FQuEI5bB1XbOfd/YiEeqoirI35QtWcZZHZ9nRbNs2+4ZhyLaNF0LhXdflJ4kcxrvILAE+9sgjB9HYmkdGTDnsb9uW/ZYHweTYgu0+8DYIhUNGIAJUhHwRoQQBbOL5oGXbHOB91r5SCAiF02WNhp7AEugm2LewHMDmCN5nb1i3psJBxHEqXGPAkjhLwPxHhOK403Fxad59M3w8OBWuK2PREeAJ9PHRJXL0s2kPVs44jrsnFiIuFjwWUfypcECwty2B/ph0IAvbXrMVdNYAoEZ5P4jiD8I5UCIB789sAR+iODwCs8vSR/yMxxYtRPEH4Z+Er/D3IqVfQlEbMv5aF4MAAAAASUVORK5CYII="/><span class="instok">Мотиви</span>','<img class="ib" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADEAAAARCAYAAAB0MEQqAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAGISURBVEhL7ZUxbsMwDEV72lwmZ8gJvHv26tFbpmxePHnJkkXFS/QS2lUrdwiQFvkAIYmkKH6Ksj/SP8CbxKtgQaJt23Q4HL5I13XZYzuOx2Pa7/dXIe4zsSBBwrvd7n64gg7bb+A+CnA6nbL2OSiSmKYpa1K6XC73hOZ5ztoHom+EBSjhfD7n2QPoSvHFT/bNJNYJ9X1/J8cYW069NuLpjx8jAkiMc93DPJ5fs4MiCUbFA+lxQXvox5yeZ02iwIQR5hSCER90EJG0Z2KP70jU7GDzm2iaJnul6xzdOI5Zc6s++4V7hSTijVFldHEfdmPX7KLaTmBd6RJZ10K9kMQwDFlze0/oSrHwr9nFJhIm4G3ox/XiG0V4oDBG9GGOjngxBkIL1uyiSIIr41BF9r4Lqsna77+9GltlCwmgH+1BYuTA2i9YzQ6KJNbCpvUPy3eBzTF+Alkj4jsSFiDGimfV7GBBgiTilSml7zrARnLeUIR7he1RAvGJQaxYCFGzL0j8VbxJvAZS+gTU0dKJ66sAjwAAAABJRU5ErkJggg=="/><span class="instok">Бифри</span>','<img class="ib" src="//farm6.staticflickr.com/5809/21178792828_480e8a7443_o.jpg"/><span class="instok">с.Оливер</span>','<img class="ib" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIoAAAARCAYAAAACJjTkAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAOsSURBVGhD7ZcxbipBEET/abmMz8AJyImdOiQjIiMhInHiZK2HePpFu82OLINkaUsaebunp6e6pncW/5sWLBjA0igLhrA0yoIh3DTKdrud1uv1l/H6+nqN+H28v79PHx8fV+s/h/P5fPU8H+xt7fBJpEa73e7qfTzkVPkk4PMoXjeNwiar1Wp6eXm5GfiY+228vb1d8p9Op6tnmjabzRffs8He1KwWNLNQDwb8nwU53TsH9XwEr7ZR8pB42xWne8sR8advf7ffd2CfPLCfYmSvbBTGfr+/+KkTWz26A5nTg7k5DsTUWuVko3Qxc7jHC9zjNdwojMThcLjEKxrP+ETX3d4WAD/rGBnX3Sj6GFy9mQc4J1iLnXvLx/3ufU7zUIj1uudKx8/+/M38c3qQEx9zjI4DDZkciVeH5OT+yQ1Yo7y04Z15bXxBjpzvPm9to/DXwcKanE42McXmIRyPx0sMPmxJA/MB4jKH6+SgQIoCeQ8D2zyA57QV1b1Zh81ansmV8xV5KMnZZ/jm+hE9XMv+5Nf2ViCOeHxoTQ45ADkxmCOPe6iVa+SlbU4bHVtYC/sQrzbonhj+jZILq1AAIhlXSQPFEe5noaD65CC6G67aiureNpuHBohnrw6uZ95a8bmm1jaih3VxEMzVz4Y58ococeqQnERyA5VXtQHrO+3yHwps1uWnavbTA+ob2MXVQkZIdnmqj3hzCosT1ZZL5WscQ7tD1uKbnhrU2ro6MgfIG4DBc758XY5EzQfk4ZrKq9qA9dbd5QQdl6FGcUMLUzQ6XijovRsFgnk43X7VV9eA6qt23ducvqE5OuAnnnXA/PKq+Uf0EPhZJ6eaI28Unr0FKycgD+uovKoNWK9WfjJTOyC32RuFK43kDkVSCEXAn99cfNhAkggAuu8jIuJjzqvYPBafMRBX0MzDM4M15DGHArm3XKiDeOrsUA/FfO5pbeYf0SM5AjmZA07YrCPGG8g9KycgD3NWXtUGrDcnUF+0IY+8ch/QNkodJFZkgcj4MyaFt1udI3clKSmGxORg8TRHzcPfzOO3Wr/NlAIpCPP+/e7fxXoo5tfuDmBOD5vTkfmEvDOHL+ejGgUN8BHnwK7a3DQKk2xaR/3hJfBTCAfexeBjzmLNn+BtJEZiXYx5vIYVO8EcgpiHHPkDDeAjRj73QKy5yINtjdo1/4gezMOB9R3YU81qjuQE5CEqr45npy/ABy81rrhplL+CrlEWPBZLoywYwp9slAXPxjR9AnDIWSbHFXgoAAAAAElFTkSuQmCC"/><span class="instok">Бутик Москино</span>','<img class="ib" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEMAAAARCAYAAACGjBGPAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAHQSURBVFhH7ZW7jsIwEEX3a/kZvoEvSE9NS0mXio6GioaGJqvjzWFvrISHVmIXba40sufhmfG143x0M66YyQjMZAQGZKzX6261WnWn06m33AexrFkul2UETdMUeTcMyGAzi8WiOx6PveU+2DRrIHK32xUbxCDvhqfIGLOPrfkJGY8cxPl8LjKFezmm/DfJ4NTZFCfOiI8x/di0b7fbYmeOiFpnfcYD5tjMtdlses93PDZ6ZI5wGxP4M0f9qRKf/rZte88XbpKhzng4HEoydZAk0QgxABsiap38rJGM/X5/zcvcOvqNJwc2Yphjs1fsYzkkjP7U8bs3ewYPkaEOaAK7mIrJzde6m3Oz3rBsLOsYn3XdXN1rPv6cvHrdA7WIJ4/4E2SYwzhEHRifdb0J1nXdFDKnUuf8FTLcSE0GJ0meFMCIP+uOkYGeN4OY9CPmVTL+pWQQw1/ANZLB24Pu9w0pxHuFWYc/69Zk5BuBzZw+on6K/v6Jowbvh3gJGX7f2m1cMoDN4nf01MiN7RYZwF6UzMGo3xqZDwzIYEEmr3WAbgEwFVPbeLDYgGvxXy6XMhfYiKl/eQBf1mVtXQOYIx/jhH2M+Qdk/HfMZARmMq7ouk+a9EvnIjgf/AAAAABJRU5ErkJggg=="/><span class="instok">Инфлуэнс</span>','<img class="ib" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAARCAYAAABtu6qMAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAIASURBVFhH7ZQ9bsJAEEZzWl+GM/gE9NRuKemo6GioaNzQOHqOHxpP1rJjkBJEPmm0ntnZ+fl21h/dm+OfgGF9W4wI2O12XV3X36RpmsFjPdq27eNvNpteiLvf74fd38OIAIqqqupepIKNvUcQ4yDqzyD3ERQJuFwug6Xrbrfbvdjr9TpYfwbi5WaxSfAjYLJivVOYqn0xAbHQUuHeKgVlSAD7x+NxsH7Z9Ycc9s/nc6+zom+3214H6AjgXJyk7MvzwnY4HEY+MT8oEsCqcCgf5C3jpw120WMBGca2EHSKE8YgNjAHvqC0zx6NQqTxvTzsnqdOcsV4YvE/IDaXG+b20DO7GRQhqfgj6MJ88RsfpsGGnBDg9FCPhPlj1V8dmDti9gmAHBzEYKXAGflpnE6nUYNAIt0jHyv2nIOmuQBsSqzxqQQYLE6BI2WRjmYJFhpHHphPO0Sga6dJvi085tcGWSA3nHXgmYgiATDOQYVD2POIY3cvjmYGReKDL81CsAVii9NhPFagHxLzs4/wk0asHX/gOXWwmIAsHCrdMDfi/hz8y+e4mVSfm7cNWaUcPhfsSLw8sIoARo6EWfL7FRZh0jkQh4YpiokpxeU2yckq0KktgxjEci/6leLYX8SIgKUgMY3AJgSUinsVrCLA8YKApbf/V7GKAMAoTT2N10HXfQKtGYWNGj39oAAAAABJRU5ErkJggg=="/><span class="instok">Бай Свом</span>','<img class="ib" src="//farm6.staticflickr.com/5750/21262933759_dd58c6a8c6_o.jpg"/><span class="instok">Том Фар</span>','<img class="ib" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACsAAAARCAYAAABEvFULAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAFpSURBVEhL7ZQxboQwEEVzWi7DGTgBPTUtJR0VHQ0VDbWjZ/HZj9cQsdFKibRfGoHH45nnseEr/CN9YN+lA2zTNKGqqmjTNG3eEJZl2f11XW/e16Rc1LqrAyxJiqKI5sn6vt/9ZVlu3tc0z3PMQ627OoV1KLr5W1gg9byCVVxOWVjggFrXNfp5Z45nugnGXoCxX5VxHKNPG23b9gmWq6Fciuu6bpt9KAtLIM9hGPZOUIQkmKT4FNZBBEBOB/cY5eHqEeccriwsHxdJ2a3A5cMkxZ/BskYQEg3Al8b4aXCiaS2UhaU47yqsRWkCj5e0Bmmj3iGd1FUMSmuhU1jdLU/8E2wKoi56Z9XJqxh0C1ZJMe36DJZfG6IgY4H4cXJf9Y/1GMS88lBbeWiY6xQWKYmPMQkA5jH8+qIdRJ2T5WCJUS2Z32HpAMvOBYZ4vxoj1tB5TgIxj8+lGPlzMYgcHpfqAPvX9YF9j0L4BluxWGIZ1zldAAAAAElFTkSuQmCC"/><span class="instok">Мудо</span>'];
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