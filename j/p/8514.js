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
            var arImg = ['//farm6.staticflickr.com/5832/21338970536_70fd35219d_n.jpg','//farm1.staticflickr.com/775/21178321009_7a759411f8_n.jpg','//farm6.staticflickr.com/5640/21338977526_6169de26ba_n.jpg','//farm6.staticflickr.com/5669/20742535904_6984f191f9_n.jpg'];
        } else {
            var arImg = ['//farm6.staticflickr.com/5832/21338970536_d60351e7d4_o.jpg','//farm1.staticflickr.com/775/21178321009_d1dcf315cf_o.jpg','//farm6.staticflickr.com/5640/21338977526_fb2c42e63b_o.jpg','//farm6.staticflickr.com/5669/20742535904_a7f5902218_o.jpg'];

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
            a.href = 'http://кликай-тут.рф/wiakia/8514.html';
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
    var rImg = ['//farm6.staticflickr.com/5637/22121919900_e855ecc198_n.jpg','//farm1.staticflickr.com/597/22109145285_0f91847f2e_n.jpg','//farm1.staticflickr.com/677/21620983290_6ba301063d_n.jpg','//farm6.staticflickr.com/5775/21945105571_dc06685a8d_n.jpg','//farm6.staticflickr.com/5821/21412095855_471d925817_n.jpg','//farm1.staticflickr.com/612/20989599893_d5745cbbc5_n.jpg','//farm6.staticflickr.com/5628/21223920010_6f7038277b_n.jpg','//farm6.staticflickr.com/5789/21547825418_4135b5e189_n.jpg','//farm6.staticflickr.com/5813/21517956438_001a1eb265_n.jpg','//farm6.staticflickr.com/5672/21422238929_4de9a7f6f3_n.jpg','//farm6.staticflickr.com/5725/21582734136_bc98f23450_n.jpg','//farm6.staticflickr.com/5720/21802286378_7cd145a0ca_n.jpg','//farm1.staticflickr.com/635/21599376602_605ca9ecf0_n.jpg','//farm6.staticflickr.com/5757/21422940608_4b9a45840e_n.jpg','//farm6.staticflickr.com/5796/22330418581_71855a1341_n.jpg','//farm6.staticflickr.com/5753/21459220792_2fc80c4bfe_n.jpg','//farm1.staticflickr.com/747/22074547352_66bbee7d08_n.jpg','//farm6.staticflickr.com/5750/21176552520_917c3a586f_n.jpg','//farm1.staticflickr.com/595/21686833394_46219b165b_n.jpg','//farm6.staticflickr.com/5778/20755001544_1fba22be73_n.jpg'];
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
    var cn = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjAwIDgwMCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPg0KPHBhdGggZmlsbD0iI2RlMjkxMCIgZD0ibTAsMGgxMjAwdjgwMGgtMTIwMHoiLz4NCjxwYXRoIGZpbGw9IiNmZmRlMDAiIGQ9Im0tMTYuNTc5Niw5OS42MDA3bDIuMzY4Ni04LjEwMzItNi45NTMtNC43ODgzIDguNDM4Ni0uMjUxNCAyLjQwNTMtOC4wOTI0IDIuODQ2Nyw3Ljk0NzkgOC40Mzk2LS4yMTMxLTYuNjc5Miw1LjE2MzQgMi44MTA2LDcuOTYwNy02Ljk3NDctNC43NTY3LTYuNzAyNSw1LjEzMzF6IiB0cmFuc2Zvcm09Im1hdHJpeCg5LjkzMzUyIC4yNzc0NyAtLjI3NzQ3IDkuOTMzNTIgMzI0LjI5MjUgLTY5NS4yNDE1KSIvPg0KPHBhdGggZmlsbD0iI2ZmZGUwMCIgaWQ9InN0YXIiIGQ9Im0zNjUuODU1MiwzMzIuNjg5NWwyOC4zMDY4LDExLjM3NTcgMTkuNjcyMi0yMy4zMTcxLTIuMDcxNiwzMC40MzY3IDI4LjI1NDksMTEuNTA0LTI5LjU4NzIsNy40MzUyLTIuMjA5NywzMC40MjY5LTE2LjIxNDItMjUuODQxNS0yOS42MjA2LDcuMzAwOSAxOS41NjYyLTIzLjQwNjEtMTYuMDk2OC0yNS45MTQ4eiIvPg0KPGcgZmlsbD0iI2ZmZGUwMCI+DQo8cGF0aCBkPSJtNTE5LjA3NzksMTc5LjMxMjlsLTMwLjA1MzQtNS4yNDE4LTE0LjM5NDUsMjYuODk3Ni00LjMwMTctMzAuMjAyMy0zMC4wMjkzLTUuMzc4MSAyNy4zOTQ4LTEzLjQyNDItNC4xNjQ3LTMwLjIyMTUgMjEuMjMyNiwyMS45MDU3IDI3LjQ1NTQtMTMuMjk5OC0xNC4yNzIzLDI2Ljk2MjcgMjEuMTMzMSwyMi4wMDE3eiIvPg0KPHBhdGggZD0ibTQ1NS4yNTkyLDMxNS45Nzk1bDkuMzczNC0yOS4wMzE0LTI0LjYzMjUtMTcuOTk3OCAzMC41MDctLjA1NjYgOS41MDUtMjguOTg4NiA5LjQ4MSwyOC45OTY0IDMwLjUwNywuMDgxOC0yNC42NDc0LDE3Ljk3NzQgOS4zNDkzLDI5LjAzOTItMjQuNzE0LTE3Ljg4NTgtMjQuNzI4OCwxNy44NjUzeiIvPg0KPC9nPg0KPHVzZSB4bGluazpocmVmPSIjc3RhciIgdHJhbnNmb3JtPSJtYXRyaXgoLjk5ODYzIC4wNTIzNCAtLjA1MjM0IC45OTg2MyAxOS40MDAwNSAtMzAwLjUzNjgxKSIvPg0KPC9zdmc+DQo=';var bd = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAwIDYwMCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPg0KPHBhdGggZmlsbD0iIzAwNmE0ZSIgZD0ibTAsMGgxMDAwdjYwMGgtMTAwMHoiLz4NCjxjaXJjbGUgZmlsbD0iI2Y0MmE0MSIgY3g9IjQ1MCIgY3k9IjMwMCIgcj0iMjAwIi8+DQo8L3N2Zz4NCg==';
    var cImg = ['<img class="ic" alt="Китай" src="'+cn+'" /><span class="instok">Китай</span>','<img class="ic" alt="Китай" src="'+cn+'" /><span class="instok">Китай</span>','<img class="ic" alt="Китай" src="'+cn+'" /><span class="instok">Китай</span>','<img class="ic" alt="Китай" src="'+cn+'" /><span class="instok">Китай</span>','<img class="ic" alt="Бангладеш" src="'+bd+'" /><span class="instok">Бангладеш</span>','<img class="ic" alt="Бангладеш" src="'+bd+'" /><span class="instok">Бангладеш</span>','<img class="ic" alt="Китай" src="'+cn+'" /><span class="instok">Китай</span>','<img class="ic" alt="Бангладеш" src="'+bd+'" /><span class="instok">Бангладеш</span>',];

    for (var q = 0; q < cImg.length; q++) {
        var cQ = document.getElementById('c' + q);
        if (cQ != null)
            cQ.innerHTML = cImg[q];
    }
}

function preBrandImg() {
    var bImg = ['<img class="ib" src="//farm6.staticflickr.com/5772/21365253365_a20cc9f046_o.jpg"/><span class="instok">Биллабонг</span>','<img class="ib" src="//farm6.staticflickr.com/5772/21365253365_a20cc9f046_o.jpg"/><span class="instok">Биллабонг</span>','<img class="ib" src="//farm6.staticflickr.com/5772/21365253365_a20cc9f046_o.jpg"/><span class="instok">Биллабонг</span>','<img class="ib" src="//farm6.staticflickr.com/5772/21365253365_a20cc9f046_o.jpg"/><span class="instok">Биллабонг</span>','<img class="ib" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE8AAAARCAYAAACcsPEBAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAJKSURBVFhH7ZQ7cgJBDER9Wi7DGTgBOTEpIRkRGQkRCQnJuh7m2Y0QLvMJHGxXqXY+UkvTo9mPYcTTGMV7AaN4L+BKvMViMcxmsxtbLpcXj/+H3W43zOfzYTqdno16t9vtZfd9OBwOZ240ElfisTmZTL4L0Vhj778B4ayX+qwfe7eA+/3+RodWPBzF6XT6FhD1OxyPx8voC/glx6OA716uxGq1uhFqvV6f1+jGDs/W9ZJ4mGCfOS3sHmt0AmM4MMY+eQ6Vc6C/T8GnIQfj3w6rePjBJWoMvD5t6yJWeJ4UnH3W5OJrLtGKx1eDANtsNhevHyKMg3t4/fGlG4wVdU6xcHhw81M4HNW/gg5l31oYw5m1AnmpE+7MAzph2GPtYfEsWmMtb6UjEj5hfIy1AIpnrljsy0F3VE66NP078DLwI858mB1OLPOsX9Ex0J3nafEMEB663lQWBOg2D6ElnweBj+5gzHMGcmI13rwd8t+IKP7ziAWKUDnkB50wbxNPIsWSKAvK2/RAHZ/i+hVZHOM0uqsD8cSkgCDXvSR/LQIf82duUWvvfFrxaHmE0SzGf4lEKV4lZ26cBQA7A6ud64HoUASDi7m/ggqfNX7URh5fSR7SOsidPj5ta8ePvOQ3xtr1Sd5WvGoQ5c1JlOIB4/HHnNd/loXVdQRwz2/tmAouAL80Yj00SF6tXlytXd4/i0eb41Stu3nWu+dEodwwMex3fubpQBwcXEx9jveAHzmJuccLuKzfeLvaE8wz9kq8EY9hFO8FjOI9jWH4BDkOLE/5kV2uAAAAAElFTkSuQmCC"/><span class="instok">Брейв Сол</span>','<img class="ib" src="//farm1.staticflickr.com/781/21177490579_20d5ed56c1_o.jpg"/><span class="instok">Селектед Хом</span>','<img class="ib" src="//farm6.staticflickr.com/5706/21279556626_44241f0975_o.jpg"/><span class="instok">Саломон</span>','<img class="ib" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKgAAAARCAYAAABJjucJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAARwSURBVGhD7ZcxUmMxEET3tFyGM3ACcmJSQjIiMhIiEhISbz3w22q39b8FeKsc/K5S4RlpelqjkWz+7DZsuGBsDbrhorE16IaLxlGDPj097W5ubnbX19ef4/b2dvf29rafPS9eXl72n76Px8fHT52Mh4eHvfcLaHbu3Nrv7u7+C6+Qvwfn8h2gjzj4fouZnsDHmIX6OMc1HDQoB311dfUpwsJov7+/71f9Hh8fH//4fwq1qk+wcf2M19fX/cx5wCGQ79y8ImvucC99EdeAPmJ+U2NAg6sHLvXwN5tUrbNQ36k9HTSoAmggocAREUn6Jo3Qa9aKx0WYOfxuUC8QN1I/Y8SFnpkLN7O3xJpuuGb2ZYPmWvc0agD2MdJJPDFLNZ7ZG99w5k099kS+mKwZ6VuC+uyrJT1HDUoQAgygWbuwkCKGtW7g+fl5P/slFvHwuC4L1bGAorHGOTmWYIOyhr9+BfrCjQ46dcufhXGehsh1+fUqf/Lqc/39/f1+5uuQnRvNN0a6PUxiBfXOevE5z8AY/OJUTMNG7K9heqJ/nsGZ+tpGD7YNqT5yoIPPzHdtDhoUsSxisQEQpBgaCT+k+L3dWQg5iEWIAhSHCPn12czYGcPnEVjHPFzqBGrrePaWOVODkBMfTTl6uZrXC0J+GwDbpsaWz/omXyPjycGAGx+5gGeAj32gW9uzIg4bPjAT0+i9rgEuhmhbPeRNWx8a1JMPwtE/SbwoNosEjL5pbBiMit42yRUCunhCTjVkTAO/8zZB5uniaudhmMMXIjmF3KJ5e69oJ0f+THJfxLA24xvy9yDO197LlTo5VHw2cdd4JqbRe11D16Ft9ZhfO3P7iKRv2KAiG8WNApIogMF8itEvlsQlJ7kQZiwjYxr4nbf4aoW/i9uaQHKMbABPxiXvaB8NX1XzM1JXQ35fOUa+KCA1iNbS9kxMw5jOD/KiA/cm2jaXtW0bjPT8a1AapEmBQfq9dTSDL0PHtb0kLoXwmRhfatZmTCPnfTkzr8UlF3BOzcDG/ukLClfmBPjgo54578VvXY1T88CLmI1jDZZe0JmYhj9xiE3oz7iuQ9tdW/Ulh3rUDBb/SWIxI33ARBwusGHXxClGcRyWMR6EMXw1MsybzZLoDROL7eaMl9/1+PHlTxObtjkB61kjmlebQ8NnI2ibE2Cr0/hG84/gQcLFPlhrnBe8c8/EjKBee4La6Ms4fAyhTR7qay5rqz4Gtco12OKgQWkcF+Vwk8BXAb8iHKJtxeTBMy8/875mxqrDi9DoZuoCaMMtuK34HOTJF6U5ATy5l+blb+6FwRrh+t4Xhz1C8y+BumRePmetiMefWk7FjACPmtbi8DEE865leHGtbepzjXbi6DcoIBgiX4EGTcqch0tj5zo+dxx2/+MARx6UN9SvQ2L83IArOVtD2wJ/ak80J5jlVftojlzkZM+jHIkl/hHgS+4GPPAlTsUsAS72R+xSrtY9Os/ctzZ83Qti2KAbNlwKtgbdcNHYGnTDBWO3+wtTVLyp1I4I9AAAAABJRU5ErkJggg=="/><span class="instok">Санта Моника Поло Клуб</span>'];
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