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
            var arImg = ['//farm1.staticflickr.com/717/21179627959_67fb4447ca_n.jpg','//farm6.staticflickr.com/5711/20743838554_9a2021b3ee_n.jpg','//farm6.staticflickr.com/5750/20745432483_381c8d9a45_n.jpg','//farm6.staticflickr.com/5810/20745429013_76d1bce9dd_n.jpg','//farm6.staticflickr.com/5685/21179614469_01a6c7c064_n.jpg','//farm1.staticflickr.com/610/20745422103_97e36383e7_n.jpg','//farm6.staticflickr.com/5742/21340261456_e4e2206afc_n.jpg','//farm6.staticflickr.com/5780/21178411120_e847c8fb13_n.jpg'];
        } else {
            var arImg = ['//farm1.staticflickr.com/717/21179627959_b34fed656b_o.jpg','//farm6.staticflickr.com/5711/20743838554_70e56b4ffd_o.jpg','//farm6.staticflickr.com/5750/20745432483_75d9c42868_o.jpg','//farm6.staticflickr.com/5810/20745429013_24c8a09bd9_o.jpg','//farm6.staticflickr.com/5685/21179614469_87d140ecc7_o.jpg','//farm1.staticflickr.com/610/20745422103_aa44bf036a_o.jpg','//farm6.staticflickr.com/5742/21340261456_31dc84f10e_o.jpg','//farm6.staticflickr.com/5780/21178411120_249fbbb144_o.jpg'];

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
            a.href = 'http://кликай-тут.рф/wiakia/11922.html';
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
    var rImg = ['//farm1.staticflickr.com/650/21113273024_158e63d179_n.jpg','//farm1.staticflickr.com/649/21583777952_edbcbccd13_n.jpg','//farm6.staticflickr.com/5720/21187744944_1f85ca50bc_n.jpg','//farm1.staticflickr.com/713/21350838529_f8d94dae56_n.jpg','//farm1.staticflickr.com/779/22171933071_ca8254fdfa_n.jpg','//farm1.staticflickr.com/773/21487601198_4d1d9ec206_n.jpg','//farm1.staticflickr.com/776/22129487330_a77deefc26_n.jpg','//farm6.staticflickr.com/5819/21391846366_16340525a3_n.jpg','//farm6.staticflickr.com/5758/21602755296_471d87e3bd_n.jpg','//farm1.staticflickr.com/590/21381937200_5732ba6607_n.jpg','//farm6.staticflickr.com/5829/21543662850_12ae7813f2_n.jpg','//farm1.staticflickr.com/657/21749622659_bf0c06330e_n.jpg','//farm6.staticflickr.com/5705/21808867645_9a1fa89ca9_n.jpg','//farm6.staticflickr.com/5765/21622701149_2a3fa351ac_n.jpg','//farm6.staticflickr.com/5811/21358435758_ddbedba0ae_n.jpg','//farm1.staticflickr.com/736/20929252013_7c8fe90035_n.jpg','//farm1.staticflickr.com/754/22084004216_5734d03ecd_n.jpg','//farm1.staticflickr.com/630/21718508632_db8b7af1b6_n.jpg','//farm1.staticflickr.com/643/22315315642_c5a66b03a3_n.jpg'];
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
    var cn = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjAwIDgwMCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPg0KPHBhdGggZmlsbD0iI2RlMjkxMCIgZD0ibTAsMGgxMjAwdjgwMGgtMTIwMHoiLz4NCjxwYXRoIGZpbGw9IiNmZmRlMDAiIGQ9Im0tMTYuNTc5Niw5OS42MDA3bDIuMzY4Ni04LjEwMzItNi45NTMtNC43ODgzIDguNDM4Ni0uMjUxNCAyLjQwNTMtOC4wOTI0IDIuODQ2Nyw3Ljk0NzkgOC40Mzk2LS4yMTMxLTYuNjc5Miw1LjE2MzQgMi44MTA2LDcuOTYwNy02Ljk3NDctNC43NTY3LTYuNzAyNSw1LjEzMzF6IiB0cmFuc2Zvcm09Im1hdHJpeCg5LjkzMzUyIC4yNzc0NyAtLjI3NzQ3IDkuOTMzNTIgMzI0LjI5MjUgLTY5NS4yNDE1KSIvPg0KPHBhdGggZmlsbD0iI2ZmZGUwMCIgaWQ9InN0YXIiIGQ9Im0zNjUuODU1MiwzMzIuNjg5NWwyOC4zMDY4LDExLjM3NTcgMTkuNjcyMi0yMy4zMTcxLTIuMDcxNiwzMC40MzY3IDI4LjI1NDksMTEuNTA0LTI5LjU4NzIsNy40MzUyLTIuMjA5NywzMC40MjY5LTE2LjIxNDItMjUuODQxNS0yOS42MjA2LDcuMzAwOSAxOS41NjYyLTIzLjQwNjEtMTYuMDk2OC0yNS45MTQ4eiIvPg0KPGcgZmlsbD0iI2ZmZGUwMCI+DQo8cGF0aCBkPSJtNTE5LjA3NzksMTc5LjMxMjlsLTMwLjA1MzQtNS4yNDE4LTE0LjM5NDUsMjYuODk3Ni00LjMwMTctMzAuMjAyMy0zMC4wMjkzLTUuMzc4MSAyNy4zOTQ4LTEzLjQyNDItNC4xNjQ3LTMwLjIyMTUgMjEuMjMyNiwyMS45MDU3IDI3LjQ1NTQtMTMuMjk5OC0xNC4yNzIzLDI2Ljk2MjcgMjEuMTMzMSwyMi4wMDE3eiIvPg0KPHBhdGggZD0ibTQ1NS4yNTkyLDMxNS45Nzk1bDkuMzczNC0yOS4wMzE0LTI0LjYzMjUtMTcuOTk3OCAzMC41MDctLjA1NjYgOS41MDUtMjguOTg4NiA5LjQ4MSwyOC45OTY0IDMwLjUwNywuMDgxOC0yNC42NDc0LDE3Ljk3NzQgOS4zNDkzLDI5LjAzOTItMjQuNzE0LTE3Ljg4NTgtMjQuNzI4OCwxNy44NjUzeiIvPg0KPC9nPg0KPHVzZSB4bGluazpocmVmPSIjc3RhciIgdHJhbnNmb3JtPSJtYXRyaXgoLjk5ODYzIC4wNTIzNCAtLjA1MjM0IC45OTg2MyAxOS40MDAwNSAtMzAwLjUzNjgxKSIvPg0KPC9zdmc+DQo=';var vn = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA5MDAgNjAwIj4NCjxwYXRoIGZpbGw9IiNkYTI1MWQiIGQ9Im0wLDBoOTAwdjYwMGgtOTAweiIvPg0KPHBhdGggZmlsbD0iI2ZmMCIgZD0ibTQ5NC44NSwyMzcuNTEyaDE0NS4xNWwtMTE3LjQyLDg0Ljk4NSA0NC44NSwxMzcuNTAzLTExNy40My04NC45ODQtMTE3LjQzLDg0Ljk4NCA0NC44Ni0xMzcuNTAzLTExNy40My04NC45ODVoMTQ1LjE1bDQ0Ljg1LTEzNy41MTIgNDQuODUsMTM3LjUxMnoiLz4NCjwvc3ZnPg0K';var it = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBoZWlnaHQ9IjEwMDAiIHZpZXdCb3g9IjAgMCAzIDIiPg0KPHBhdGggZmlsbD0iIzAwOTI0NiIgZD0ibTAsMGgxdjJoLTF6Ii8+DQo8cGF0aCBmaWxsPSIjZmZmIiBkPSJtMSwwaDF2MmgtMXoiLz4NCjxwYXRoIGZpbGw9IiNjZTJiMzciIGQ9Im0yLDBoMXYyaC0xeiIvPg0KPC9zdmc+DQo=';
    var cImg = ['<img class="ic" alt="Китай" src="'+cn+'" /><span class="instok">Китай</span>','<img class="ic" alt="Китай" src="'+cn+'" /><span class="instok">Китай</span>','<img class="ic" alt="Вьетнам" src="'+vn+'" /><span class="instok">Вьетнам</span>','<img class="ic" alt="Китай" src="'+cn+'" /><span class="instok">Китай</span>','<img class="ic" alt="Италия" src="'+it+'" /><span class="instok">Италия</span>','<img class="ic" alt="Италия" src="'+it+'" /><span class="instok">Италия</span>','<img class="ic" alt="Италия" src="'+it+'" /><span class="instok">Италия</span>',];

    for (var q = 0; q < cImg.length; q++) {
        var cQ = document.getElementById('c' + q);
        if (cQ != null)
            cQ.innerHTML = cImg[q];
    }
}

function preBrandImg() {
    var bImg = ['<img class="ib" src="//farm1.staticflickr.com/684/21263079329_c0b02fa554_o.jpg"/><span class="instok">Ванс</span>','<img class="ib" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAARCAYAAACvi+4IAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAFvSURBVEhL7ZMxjoMwEEX3tFyGM3ACempaSjoqOhoqGhoar17in3wbo9UqUpQiXxoB4/H4jWf4CR+uL+CrKgJO0xSapgl1Xd+M93me4+p7dQJs2zZUVfUAw/jGhmGIUe9TAggAIEDt+x699xsVdEnrusa3srZtS/L9RwkgAIAsyxI9TwGRH9J13WMPTwpxUbCv0x1gEU98mPJqrHycToCYCzA3qe/728FAklCjoOLwCQxQxXt+dQxwrfN0/QnINxtlgsxjAfMDcmBEMfjGcYye58xj7MlVBPRWUqW3ygH51h596xD5XLoxnpJajT8fEZQAqsL8mpFuJL9BtV6mGdO6F6s2Xt0g8cdxxJW7EkCSEUQwsLSHqjyJAOXTYfphNOC6LQpjD/4cmr3E+AySx5UAIpLpttxInLdGcSpK7ZW8MMWpjVd/MXHe6hOgBCgVYrq1krhlwP1ncAFCjny+aCV5NRII0Nx3Cfgp+gK+phB+AXvNvk70NoSiAAAAAElFTkSuQmCC"/><span class="instok">Геокс</span>','<img class="ib" src="//farm6.staticflickr.com/5656/20830413603_daa8593be0_o.jpg"/><span class="instok">Нью Баланс</span>','<img class="ib" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAAARCAYAAABQKcvqAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAKuSURBVFhH7ZcxkuIwEEXntFyGM3ACcmJSQjIiMhIiEhISbz0Pb+q7SwZTM+vIv0pl1Gr97v5qaXa/ugWzYhF8ZiyCz4yB4LvdrttsNoOx3W678/n89PjG7Xbr1/BPnE6nn33X67W3sZ85exLYGQBfYz0ej94m9vt9v3Y4HJ6WcRir5vsJMs/j8djz8f0rDASHfLVadev1+mcwZ2TBCIQNf0GR+iK8kENxhfyCdfzyEC+XS2/D736/P61tENP4mddUEIs4WSe/q+23aApudwITyaKr4MxZx5ZiA+2M7BQ5Bdz6EhOYz5QO88DkqDcqkfUJRGXfX4nbigHeCg7oukwmBX8lNnCNwW+fDH4zEgiLH+LZsfVmtOBhMRSuPneA5wkfc5E7a0g7XHJygPy2yUS1ETe5qiaTBK9FKDiESd669vp4aHJorzAH1191qjA/vil+Qh/4ef4yH5rAG8LXG5W8gL3wWqcN4joHKicxrMUbCz4SnHWg4A73tbrR4imKL375TFXYSfhZyDvIpRCKl91ljnmArDuv4oJq89YhLIAz45qHoM70Bx8JbuAUPDuWeX1vMwkTNtFMLjGWRwsWJa/czsWreKDWCFo2ebxJ2WTM8dfHeeYxSXDtdoyCJ5FiEsQTBwYWdp++LYzl0YJ8xnEYww7Wlh2OkMaYKng+RXzzuTA2nDkyZlNwrgBBGBaU4kJSbcD9dj0wCWFn4Jf2xCeCy9/693vmkkLBm3+ggXPWXz0zrGEzbkKtvOVw4ZP/L2gKnoMNEGXXjgme19sgrcQspNrFVMFTpIoURtT6WFNc/XNPS3AgT77NAA7X4OBbNRoIzgaKzJFCJ1gz2YQcrslTMWYHcryDfrW7RSsGcwTMp0DAx5p74G3xo0nlTcA9FmMg+IL/j0XwmbEIPiu67h8R2kO/zKW0yAAAAABJRU5ErkJggg=="/><span class="instok">Ди Ки Эн Вай Актив</span>','<img class="ib" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEEAAAARCAYAAACCecGyAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAGzSURBVFhH7ZY9boQwFIRzWi7DGTgBPTUtJR0VHQ0VDQ2Nw+fsRI8XL3ibTaQwkuUd+/2ODexHuBFuEXbcIuw4iNA0Taiq6sdo2/ZhkYdlWaIf8Z6h7/tow5ziOVC95MtFyucgAptFUYSyLA+DNfZyMc/zpU/XddGGWZxc4jmo6zr6kC8XKZ+kCNZg27ZvIVKKY7uu64N94UwExfYiXOGV0xZsH2fIFoFhwbWSOMz4SoyUCDppreNvRdC+5zweNs8wDHEf+FMV9z62n+ybwKyBA8Mm5zdrNEIw35AXYZqmQxMUCbc+zCnufeCC6lVD4szkVF2qA3gfkP1OQMEUOH0VqGReBF6scCtk6iaccUC8HBFsg9irDpCyuXwcgC8YsOaFUjIvQiruVdOeA+L8mggqSLdBonADAPZwJfNc9vYm6HY8a9pzQLy3iUCBJNfQSasJ2Y3jGLmaVDIvAn7ivOXxU0w1yXzGAf5vE8EPAtGoQBNaVxKbzIsAJJT8lOvPicApsemH/x8AsKVA3sJAtgK//bcdWx4h4vHpxYYZXHGg+oQrDuC2jpTNQYT/iluEHbcIIYRPJbmjpdUNCmIAAAAASUVORK5CYII="/><span class="instok">Балдинини</span>','<img class="ib" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEEAAAARCAYAAACCecGyAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAGzSURBVFhH7ZY9boQwFIRzWi7DGTgBPTUtJR0VHQ0VDQ2Nw+fsRI8XL3ibTaQwkuUd+/2ODexHuBFuEXbcIuw4iNA0Taiq6sdo2/ZhkYdlWaIf8Z6h7/tow5ziOVC95MtFyucgAptFUYSyLA+DNfZyMc/zpU/XddGGWZxc4jmo6zr6kC8XKZ+kCNZg27ZvIVKKY7uu64N94UwExfYiXOGV0xZsH2fIFoFhwbWSOMz4SoyUCDppreNvRdC+5zweNs8wDHEf+FMV9z62n+ybwKyBA8Mm5zdrNEIw35AXYZqmQxMUCbc+zCnufeCC6lVD4szkVF2qA3gfkP1OQMEUOH0VqGReBF6scCtk6iaccUC8HBFsg9irDpCyuXwcgC8YsOaFUjIvQiruVdOeA+L8mggqSLdBonADAPZwJfNc9vYm6HY8a9pzQLy3iUCBJNfQSasJ2Y3jGLmaVDIvAn7ivOXxU0w1yXzGAf5vE8EPAtGoQBNaVxKbzIsAJJT8lOvPicApsemH/x8AsKVA3sJAtgK//bcdWx4h4vHpxYYZXHGg+oQrDuC2jpTNQYT/iluEHbcIIYRPJbmjpdUNCmIAAAAASUVORK5CYII="/><span class="instok">Балдинини</span>','<img class="ib" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEEAAAARCAYAAACCecGyAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAGzSURBVFhH7ZY9boQwFIRzWi7DGTgBPTUtJR0VHQ0VDQ2Nw+fsRI8XL3ibTaQwkuUd+/2ODexHuBFuEXbcIuw4iNA0Taiq6sdo2/ZhkYdlWaIf8Z6h7/tow5ziOVC95MtFyucgAptFUYSyLA+DNfZyMc/zpU/XddGGWZxc4jmo6zr6kC8XKZ+kCNZg27ZvIVKKY7uu64N94UwExfYiXOGV0xZsH2fIFoFhwbWSOMz4SoyUCDppreNvRdC+5zweNs8wDHEf+FMV9z62n+ybwKyBA8Mm5zdrNEIw35AXYZqmQxMUCbc+zCnufeCC6lVD4szkVF2qA3gfkP1OQMEUOH0VqGReBF6scCtk6iaccUC8HBFsg9irDpCyuXwcgC8YsOaFUjIvQiruVdOeA+L8mggqSLdBonADAPZwJfNc9vYm6HY8a9pzQLy3iUCBJNfQSasJ2Y3jGLmaVDIvAn7ivOXxU0w1yXzGAf5vE8EPAtGoQBNaVxKbzIsAJJT8lOvPicApsemH/x8AsKVA3sJAtgK//bcdWx4h4vHpxYYZXHGg+oQrDuC2jpTNQYT/iluEHbcIIYRPJbmjpdUNCmIAAAAASUVORK5CYII="/><span class="instok">Балдинини</span>'];
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