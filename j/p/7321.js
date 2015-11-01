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
            var arImg = ['//farm6.staticflickr.com/5731/21177622949_8b19b90505_n.jpg','//farm6.staticflickr.com/5792/21176432750_95414b2f71_n.jpg','//farm6.staticflickr.com/5724/20743434593_38fcb82d5c_n.jpg','//farm6.staticflickr.com/5806/20743437263_d6877c6f9f_n.jpg','//farm1.staticflickr.com/662/21372843231_0b84d0810e_n.jpg','//farm1.staticflickr.com/755/21353765492_5112f823ab_n.jpg','//farm1.staticflickr.com/770/21353769562_d3ab739e1e_n.jpg'];
        } else {
            var arImg = ['//farm6.staticflickr.com/5731/21177622949_b1d74bddc8_o.jpg','//farm6.staticflickr.com/5792/21176432750_0ab2d7f246_o.jpg','//farm6.staticflickr.com/5724/20743434593_7c18436018_o.jpg','//farm6.staticflickr.com/5806/20743437263_02b37077fe_o.jpg','//farm1.staticflickr.com/662/21372843231_5825a309b9_o.jpg','//farm1.staticflickr.com/755/21353765492_b1b21012ff_o.jpg','//farm1.staticflickr.com/770/21353769562_fab072288e_o.jpg'];

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
            a.href = 'http://кликай-тут.рф/wiakia/7321.html';
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
    var rImg = ['//farm6.staticflickr.com/5712/21755510459_5283b93ebe_n.jpg','//farm1.staticflickr.com/624/21638605885_f57b5f9be8_n.jpg','//farm1.staticflickr.com/572/21959369120_f91f2ba712_n.jpg','//farm6.staticflickr.com/5715/21418754981_8aea231d6b_n.jpg','//farm1.staticflickr.com/605/21592724196_316a3021a5_n.jpg','//farm6.staticflickr.com/5650/21223192088_279413bcbc_n.jpg','//farm1.staticflickr.com/735/21775668200_40135012ff_n.jpg','//farm1.staticflickr.com/676/21466221883_41f2e7f315_n.jpg','//farm1.staticflickr.com/690/21361750800_e9a15bb97e_n.jpg','//farm1.staticflickr.com/762/21371955709_f057e1f66c_n.jpg','//farm6.staticflickr.com/5629/21572896802_2e0296d99f_n.jpg','//farm6.staticflickr.com/5649/21439873206_e3f1de3b10_n.jpg','//farm1.staticflickr.com/669/21548857999_ab6e0d1e70_n.jpg','//farm6.staticflickr.com/5663/21782312956_402374650a_n.jpg','//farm1.staticflickr.com/655/21410973495_5a3c94d373_n.jpg','//farm6.staticflickr.com/5645/21460416829_5bbb387e9c_n.jpg','//farm1.staticflickr.com/728/21518143728_558286717c_n.jpg','//farm6.staticflickr.com/5691/21284326709_5c3d48f45a_n.jpg','//farm1.staticflickr.com/572/21375246895_eb016d20ee_n.jpg'];
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
    var it = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBoZWlnaHQ9IjEwMDAiIHZpZXdCb3g9IjAgMCAzIDIiPg0KPHBhdGggZmlsbD0iIzAwOTI0NiIgZD0ibTAsMGgxdjJoLTF6Ii8+DQo8cGF0aCBmaWxsPSIjZmZmIiBkPSJtMSwwaDF2MmgtMXoiLz4NCjxwYXRoIGZpbGw9IiNjZTJiMzciIGQ9Im0yLDBoMXYyaC0xeiIvPg0KPC9zdmc+DQo=';var cn = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjAwIDgwMCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPg0KPHBhdGggZmlsbD0iI2RlMjkxMCIgZD0ibTAsMGgxMjAwdjgwMGgtMTIwMHoiLz4NCjxwYXRoIGZpbGw9IiNmZmRlMDAiIGQ9Im0tMTYuNTc5Niw5OS42MDA3bDIuMzY4Ni04LjEwMzItNi45NTMtNC43ODgzIDguNDM4Ni0uMjUxNCAyLjQwNTMtOC4wOTI0IDIuODQ2Nyw3Ljk0NzkgOC40Mzk2LS4yMTMxLTYuNjc5Miw1LjE2MzQgMi44MTA2LDcuOTYwNy02Ljk3NDctNC43NTY3LTYuNzAyNSw1LjEzMzF6IiB0cmFuc2Zvcm09Im1hdHJpeCg5LjkzMzUyIC4yNzc0NyAtLjI3NzQ3IDkuOTMzNTIgMzI0LjI5MjUgLTY5NS4yNDE1KSIvPg0KPHBhdGggZmlsbD0iI2ZmZGUwMCIgaWQ9InN0YXIiIGQ9Im0zNjUuODU1MiwzMzIuNjg5NWwyOC4zMDY4LDExLjM3NTcgMTkuNjcyMi0yMy4zMTcxLTIuMDcxNiwzMC40MzY3IDI4LjI1NDksMTEuNTA0LTI5LjU4NzIsNy40MzUyLTIuMjA5NywzMC40MjY5LTE2LjIxNDItMjUuODQxNS0yOS42MjA2LDcuMzAwOSAxOS41NjYyLTIzLjQwNjEtMTYuMDk2OC0yNS45MTQ4eiIvPg0KPGcgZmlsbD0iI2ZmZGUwMCI+DQo8cGF0aCBkPSJtNTE5LjA3NzksMTc5LjMxMjlsLTMwLjA1MzQtNS4yNDE4LTE0LjM5NDUsMjYuODk3Ni00LjMwMTctMzAuMjAyMy0zMC4wMjkzLTUuMzc4MSAyNy4zOTQ4LTEzLjQyNDItNC4xNjQ3LTMwLjIyMTUgMjEuMjMyNiwyMS45MDU3IDI3LjQ1NTQtMTMuMjk5OC0xNC4yNzIzLDI2Ljk2MjcgMjEuMTMzMSwyMi4wMDE3eiIvPg0KPHBhdGggZD0ibTQ1NS4yNTkyLDMxNS45Nzk1bDkuMzczNC0yOS4wMzE0LTI0LjYzMjUtMTcuOTk3OCAzMC41MDctLjA1NjYgOS41MDUtMjguOTg4NiA5LjQ4MSwyOC45OTY0IDMwLjUwNywuMDgxOC0yNC42NDc0LDE3Ljk3NzQgOS4zNDkzLDI5LjAzOTItMjQuNzE0LTE3Ljg4NTgtMjQuNzI4OCwxNy44NjUzeiIvPg0KPC9nPg0KPHVzZSB4bGluazpocmVmPSIjc3RhciIgdHJhbnNmb3JtPSJtYXRyaXgoLjk5ODYzIC4wNTIzNCAtLjA1MjM0IC45OTg2MyAxOS40MDAwNSAtMzAwLjUzNjgxKSIvPg0KPC9zdmc+DQo=';var tr = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBoZWlnaHQ9IjgwMCIgdmlld0JveD0iMCAwIDM2MCAyNDAiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4NCjxwYXRoIGZpbGw9IiNlMzBhMTciIGQ9Im0wLDBoMzYwdjI0MGgtMzYweiIvPg0KPGNpcmNsZSBmaWxsPSIjZmZmIiBjeD0iMTIwIiBjeT0iMTIwIiByPSI2MCIvPg0KPGNpcmNsZSBmaWxsPSIjZTMwYTE3IiBjeD0iMTM1IiBjeT0iMTIwIiByPSI0OCIvPg0KPGcgZmlsbD0iI2ZmZiIgdHJhbnNmb3JtPSJtYXRyaXgoMCAtMzAgMzAgMCAyMDAuNyAxMjApIj4NCjxnIGlkPSJnMiI+DQo8cGF0aCBpZD0iZzEiIGQ9Im0wLDAgMCwxIC41LDB6IiB0cmFuc2Zvcm09Im1hdHJpeCguOTUxMDYgLjMwOTAyIC0uMzA5MDIgLjk1MTA2IDAgLTEpIi8+DQo8dXNlIHhsaW5rOmhyZWY9IiNnMSIgdHJhbnNmb3JtPSJzY2FsZSgtMSAxKSIvPg0KPC9nPg0KPHVzZSB4bGluazpocmVmPSIjZzIiIHRyYW5zZm9ybT0icm90YXRlKDcyKSIvPg0KPHVzZSB4bGluazpocmVmPSIjZzIiIHRyYW5zZm9ybT0ibWF0cml4KC4zMDkwMiAtLjk1MTA2IC45NTEwNiAuMzA5MDIgMCAwKSIvPg0KPHVzZSB4bGluazpocmVmPSIjZzIiIHRyYW5zZm9ybT0icm90YXRlKDE0NCkiLz4NCjx1c2UgeGxpbms6aHJlZj0iI2cyIiB0cmFuc2Zvcm09Im1hdHJpeCgtLjgwOTAyIC0uNTg3NzkgLjU4Nzc5IC0uODA5MDIgMCAwKSIvPg0KPC9nPg0KPC9zdmc+DQo=';
    var cImg = ['<img class="ic" alt="Италия" src="'+it+'" /><span class="instok">Италия</span>','<img class="ic" alt="Китай" src="'+cn+'" /><span class="instok">Китай</span>','<img class="ic" alt="Италия" src="'+it+'" /><span class="instok">Италия</span>','<img class="ic" alt="Китай" src="'+cn+'" /><span class="instok">Китай</span>','<img class="ic" alt="Турция" src="'+tr+'" /><span class="instok">Турция</span>','<img class="ic" alt="Италия" src="'+it+'" /><span class="instok">Италия</span>','<img class="ic" alt="Италия" src="'+it+'" /><span class="instok">Италия</span>','<img class="ic" alt="Италия" src="'+it+'" /><span class="instok">Италия</span>',];

    for (var q = 0; q < cImg.length; q++) {
        var cQ = document.getElementById('c' + q);
        if (cQ != null)
            cQ.innerHTML = cImg[q];
    }
}

function preBrandImg() {
    var bImg = ['<img class="ib" src="//farm6.staticflickr.com/5737/20754117653_f5944abe27_o.jpg"/><span class="instok">Гуардиани Спорт</span>','<img class="ib" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGcAAAARCAYAAADAOrIlAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAALiSURBVFhH7ZYxcupQDEX/atkMa2AF9NS0lHRUdDRUNDQ0/nOIT0ZW9GxCkhkXvjMakJ50pSfJhn/dgtliGc6MsQxnxhgMZ7fbdZvNprvdbr3lAy37/X5/nq3X609BfzwevccQh8PhyaPvdrv9wjkG/Ik/n8+95W/wnZoqEE+d9KLSX8VgOBCsVqvuer32lg9UdhpEg7HziU/UIxiiHJXv5XLpPds4nU5Pf4T4vwB1UA9L9BPQp1gnOrws13fw9nBs7vF47C3d84nRN16QorDlzUHH/krRcpj3J9tNbL4joOZce0SVEx6WLwIbPK8sURUv3hqOW1wlZ0AxnsQ0FKmQc1WIHDYwDxq754KBxrzk8i4IZ/v9/vMMXbsLI0deJPToD69Nhgu7/ZHbWDAWL94aTrVhDkVxy/geCxXRFxlDzNcadlUTOaOfOq9kcqrDSf00Dw4+fSN4d/wYJLEsJzoNhsfBmRsbunfO+lS8+LXhaFNahQFtCoWOgXPEzbKJXFJUNZEzcnsPmkFs3tQWB7bW7yIcDBKf1p2rHogqXrw1HMm4pKB4LsV2xUQ8QeixSWwpvoiNbwFe4uVE8I85QKuxkTv+iUH4Hl81LQ5s+feGuxOv4GM9rwxnLF4MhlNtJDDYApm2pHn7qkL4jq36CyxPC9akn4It1lQ1Vt8MF8m6jKk48MkcvoZ89U0NI+tT8WIwHIaCE8UQSJBEuUCfkOiLDT0nYij64oMvMfhU3BGcITxtEeanPmBj1eHP3HKRH+jjMNThcOjUGDmAdbts9sg752ZnfSpeDIYDdIxCcdXWx2FEX7Y9vwb8EYy+CAVV3CA2KwN+zmycT7M2eBHPgTUo5hdyRt7MAeKyIfrINTWcqXjxZTiAIrkIG9X6IRQ0xdcEn/k1l0Gh+MKfB5jBOf75qRGcIYLcDBRuYHwEPt4tnwFi4lnFAfSzP/hEP77jI7I+FQ/K4SyYB5bhzBjLcGaLrvsPAULwoPz0OgwAAAAASUVORK5CYII="/><span class="instok">УГГ Австралия</span>','<img class="ib" src="//farm1.staticflickr.com/633/21344217060_973298730a_o.jpg"/><span class="instok">Джаст Кутюр</span>','<img class="ib" src="//farm6.staticflickr.com/5663/21449787975_692a3175d6_o.jpg"/><span class="instok">Терра Импосса</span>','<img class="ib" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAARCAYAAABegLWFAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAEhSURBVEhL7ZUxDoMwEATzWj7DG3gBPTUtJR0foKGioaFxNBaLDscJDiESBStZjvH6bmwf4eEurBvuqDZwVVW5oiiibRzHxXWe+r5ffjnXtq3PQy9t4JjMsszlef7ShmFYXL9rnud101LTND4PvRSFSwVJ9YWnzjryWLiYvoYjUVmWfpc6ZbtbxDM8lIl8FkTPtB4lnxy9bbYO5CExgTS2QZUcDxsNPXVd+7GFoQ/jJNWcFlDAzHMq0jRNq08Kx1qnOLFrTYZ7d62xAGgPTjB/heu6zs9zXVaXgEMkxUMd4gOUMXUk7cHxUjHGo1ynwHF6AlSzNYj24JCNwfwuHDv6BGZFkRMo9uUgRhiHMX++Ei8Sp6+vBHOhZwN3Nd1wx+TcE/0BgXkqb6aeAAAAAElFTkSuQmCC"/><span class="instok">Фонти</span>','<img class="ib" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHwAAAARCAYAAAAfdMg6AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAANVSURBVGhD7Zc9khoxEEZ9Wi6zZ+AE5MSkhGREZCREJCQkuB7m2c1nzWgWHJn5qrpGrf7vlsTuj9uMj8I88A/DPPAPw9PA1+v1bblc/kXsn8/nh9Y07Ha7u+137abidDo9Vq/B/JJeqVUcj8fH6g+qL2Py/RdIfz0ePA0c4WKxuH19fT2Re5fL5aHZx3a7vdu9O5gWGAr5vAPzq3VCr9R6vV7vvYMEw8cPcQTr3HsH1qC/Fp/xmgPPIblfT4qgMa0bYXB9jQ1+yEdFlVME1MIUXyCbIzhMQ7WCVh3sYVMHPuR/CGP9AS15xpgSc9LAW004HA53fRqPjDV7wuCbzea3Dt/9fv/Q+DXE9FFjr1aru8z48BBr/anfyycx1Bxj1eeZPM3FuNXOfWXkVHWxBdikbfZHXeFrprz2L2to8RmvOXCSQAmyARj6zPE1CXXlbRR72pEkxLr6MR66VS6Us0ccBsihUw87ntMp+SRqfsSBqo8K86AX2NW8Afr6MicPJl8vijG1k8cftdlrvkC/8B5o+Oxx+hviwehvOGuIpOszaSLVEQNTFxisvgrasYc/1sQUyi0oCxTmJ6bkkzA/fUnsEdd6iZ1+PGAQ4EZrJ/Rfc8o966u9JW/5GgOYC/WC9NfjweCTTlHynjhR9UQWbbCqUxNQH7IwSDloNQRkI6bkk6i5VHAY2c+Dm3o1h1asll3uZR0JZOirJ5891l+PB6O/4TxNBvFUAZ8eTqPIm2Cw1g1HVpvEuhJxATLiJyxeTMkn0WoGMC/9+1Lkoa85aPPKwOHrgUaGP2AM+yKpn/56POj+0cZvB3sENpDNZA85+trCA4Ohgz7Emr18spD5rw18/Y2HT2hnrCn5JMyPA8Fa0q4OGL/scXjx7QHzElAPPHr2zpcC3aEB6Ycvdvm68IX30qBX605/PR50Bw5MDLmgWBsBsa6vgMH0KVUdbo8+/BJLYMt+wkZAFtPLJ2F+Lap1gpqnlC9HldM/DwFkDa0BZH/Q9YDwVa7/mlv66/HgaeAEyGEL9lPGTaQZnEBvpeDGqo9fglpIhT5a8rF8sIF8/sFYPgnzS2rlKHhJxuogLjoCPfTxC4xZcwbsoVdtK4yb8vTX48HTwGf8/5gH/mGYB/5RuN1+AtTx3gJ/CI5dAAAAAElFTkSuQmCC"/><span class="instok">Роберто Боттичелли</span>','<img class="ib" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAAARCAYAAAArDQkmAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAJkSURBVFhH7ZexcsIwEETztfwM38AX0FPTUtJR0dFQ0dDQKPM8XrK5yLLkcRgX3hlNfNJ5706rk8lXWrEorIIsDKsgC0NRkP1+340WHA6HtNvt0uPx6Gfmw/P57Pi32+17YL9er96jDrGuMfuTKAqioluAGJvNJt3v935mHlyv1y4XuPlLHLdbgL+/M2Z/EpMFGdrwKEiNMDXdRB7wns/nfiZ1naF4p9Opn/0BsXPcsa5SnY4hvoiSD11eWm8WRFeGTia2Qxt0PB5/+bkw2FwJzsV7Q7hcLoM+iBJFRxzxKj4dJmAzhDG7hm+sHvyZ83XnEJoEYZNFRpIkgO33LWvyud1ubx9sQUmxxmbqndwpB8zHdQmhoVPHCYRf8emoXHyvq2TX8pXqEQdz7CHzsuF0NAki2z+iItaGKBkPhE9pQ/D1AiJygmhOw/kBmwD07fF4rTZo4Yv16CB7/ur6+OOhWhCUzxUuAVjP2QCOkiDi9oQdOpWcQIGi8feuFZhXDAbrHk/zwpjdyhfrye2JfDxv8BaEoiEVCSfeA6vtPDBQsNghcwrisXVShViYTh7iyTfGa7Gn8MV6eBcbLkFdNNghcoCYZ5H4CzwzxxpBc/fpfwgC1Am8R1zeYQ7bc4ADmzWgDfV4MX7JnsIX6/G95cpjXfsUP+y/riw5aUDgP9F4jj7Y7qP1uQUBLoAGNgdFOaibtOZDaLGn8OXqibnzLJEdf74hkEGEqkMo+bAxLgbAdtGwcz41/3GzQcRVfF0jDuboIl0RMacYf8xu5QPYsR544IArlzcoftRXfB6rIAvDKsiikNI333Vhz8rXwKAAAAAASUVORK5CYII="/><span class="instok">Джон Гальяно</span>','<img class="ib" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKYAAAARCAYAAABXR9e6AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAARZSURBVGhD7Zc5UiNBFETntFyGM+gE+Ni4mPKw8HCwcHBwNPGEXkwqp3oREDMyOiN+qOvvW3XDr8OGDVeIbTE3XCW2xdxwlThbzPv7+8Nut/uL4L+9vZ201mG/3x9tL7Vbi9fX19PT12B+TV+pVby8vJye/iB9GZPfn0D7Wzo3lD88PJw4n1iy+xc4W0ySubm5Odze3p6RvPf395PmMh4fH492312gEVge8vkOzC/rhL5S68fHx7F3kGBJ8UMcwXPzvgNr0N/oPBdPfSgvVfv5HxguZi+T/NENYoCjN4zF6WtuQad8JFJOs6ER1vgCU81n6adqBaM64GGTi3npcOf6A0byjnFpTPUvyZ3eXnJp50BNU75WLeZoWM/Pz0d9FsTC4AmL4zOhDr9PT08njc8i20fGvru7O8qMzxniWX/qL+XTmGq+sfINQp7mYty0k6+MnFIXW4BN23Z/1BV+HZRn/7qG0bnjJdTXf9rlGdDLzCPztO/CmrSnf2nTNWPfL5PhYmKIU8hB4cDt5lfH6np2oPC0o5kQz+nHeOimXCiHRxyaw+VQDzs+o2vyaWR+xIHSR8I86AV2mTdAX1/mxBDg8euFNqZ2nvFHbfaaX6Bfzl48zt3j9jd1bijHP7lD9LLt7C/EnJS7aNTH2UuDHmfyBSknd56JyQV2nt3z2b8xeYZIIDfahmXBBFUXmLxDAdrBwx/PJg+U2/gehDA/sSafhvnpS4JHXOu1keknBwVosHZC/5lT86wve0venjMGMBeH2P6Wzo2U+0ydbediGReQu7nZD5Yte6M8dZ0LZ/znFzIx+SkngGdvsEg90cOxuNTJgtWHshDlwDg5OKCuWJNPI3NJOIS+YK2XOYxijeya13U0kKGvnufusf6Wzo2W20d/20/nAdlzbOC7ePbRPwGyN/Q2fWiXmP0bk0+SDvK2sKjw0lm/WSxm9MZElsPkOYm4wGIb8JK/Jp+G+dl8YV76t9F9OTMHbbL5I//Nw55zXjxk+APGsC+S+u1v6dxouT2T2g/z61yEs3Vm7g79h597AHjxwXN26CYW//lh4zW0IRYADzn62nIGFoMO+hDP8PpThYxCLIqkgeeGdsZak0/D/Ggcz5J2uYj4hUcj8W0zvazUwxk9e+cbA92pRdIPv9hp42XqoaKXdbe/pXNjJDen5FsfvWE25EoeeenVgeTbS3SdKbVwJg5wgaHE4mICk0UuGArOTIZnBwUsWp9S6vA20oe/Jgyw7YSBA4Ns3lI+DfMbUdYJMk8phwJSTv9yUNZgTHMG3R90XWR+les/c2t/S+fGSJ5fyeTTS3jIpPxCAe28SPrvfmZNU77OFpNG9FIK+C3jFuCQRLwRggLVxy9J2vCEPkbyuXywgYgj5vJpmF/TKEfBm3muDuKiI9BDH7/AmJkzgIde2iaM2/L2t3RuTMmpZcSnHmqc6u9oXpxHuvCpiXmN5GeLuWHDtWBbzA1XiW0xN1whDoffLoQNHWSJPdIAAAAASUVORK5CYII="/><span class="instok">Роберто Боттичели Ньюс</span>'];
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