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
            var arImg = ['//farm6.staticflickr.com/5822/21353398352_6445844d1c_n.jpg','//farm6.staticflickr.com/5747/21337924136_d924af8a56_n.jpg'];
        } else {
            var arImg = ['//farm6.staticflickr.com/5822/21353398352_e1cb579798_o.jpg','//farm6.staticflickr.com/5747/21337924136_79ef722184_o.jpg'];

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
            a.href = 'http://кликай-тут.рф/wiakia/4719.html';
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
    var rImg = ['//farm1.staticflickr.com/776/21579822791_83de7c917f_n.jpg','//farm6.staticflickr.com/5714/21471775561_51188c2cbe_n.jpg','//farm6.staticflickr.com/5739/20775368244_a00409a155_n.jpg','//farm1.staticflickr.com/737/20750829443_1b3e2a247e_n.jpg','//farm6.staticflickr.com/5640/21695367129_335199a52d_n.jpg','//farm6.staticflickr.com/5761/21870261142_1f750fe682_n.jpg','//farm6.staticflickr.com/5737/21882280505_8c5845b1a9_n.jpg','//farm6.staticflickr.com/5674/22125188322_37b20aa3dd_n.jpg','//farm6.staticflickr.com/5767/21602530910_f120aa2e22_n.jpg','//farm6.staticflickr.com/5719/21764460896_5ef41328fd_n.jpg','//farm6.staticflickr.com/5807/21471789421_330f4e7c97_n.jpg','//farm1.staticflickr.com/566/21233228079_a09e85747e_n.jpg','//farm6.staticflickr.com/5739/21694360118_ee8a857255_n.jpg','//farm6.staticflickr.com/5748/21949917138_bba64876ab_n.jpg','//farm6.staticflickr.com/5734/21261788813_768c092d2f_n.jpg','//farm1.staticflickr.com/716/21260095414_ce602d1e03_n.jpg','//farm6.staticflickr.com/5808/21452179462_338872085e_n.jpg','//farm6.staticflickr.com/5691/21275265348_c977101651_n.jpg','//farm6.staticflickr.com/5732/20752913964_b3b167c9f2_n.jpg','//farm6.staticflickr.com/5833/21417442865_df5d81c6b8_n.jpg'];
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
    var in = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgNDUwIDMwMCIgaGVpZ2h0PSI4MDAiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4NCjxwYXRoIGZpbGw9IiNmZjk5MzIiIGQ9Im0wLDBoNDUwdjEwMGgtNDUweiIvPg0KPHBhdGggZmlsbD0iI2ZmZiIgZD0ibTAsMTAwaDQ1MHYxMDBoLTQ1MHoiLz4NCjxwYXRoIGZpbGw9IiMxMjg4MDciIGQ9Im0wLDIwMGg0NTB2MTAwaC00NTB6Ii8+DQo8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyMjUgMTUwKSI+DQo8Y2lyY2xlIGZpbGw9IiMwMDAwODAiIHI9IjQ2LjUiLz4NCjxjaXJjbGUgZmlsbD0iI2ZmZiIgcj0iNDEiLz4NCjxnIGlkPSI4Ij4NCjxnIGlkPSI0Ij4NCjxnIGlkPSIyIj4NCjxnIGlkPSIxIj4NCjxjaXJjbGUgZmlsbD0iIzAwMDA4MCIgcj0iMi41IiB0cmFuc2Zvcm09Im1hdHJpeCguOTkxNDQgLjEzMDUzIC0uMTMwNTMgLjk5MTQ0IDQwLjY0OTI0IDUuMzUxNTcpIi8+DQo8cGF0aCBmaWxsPSIjMDAwMDgwIiBkPSJtMCw0MWwxLjUtMjRxLTEtMy0xLjUtMTctLjUsMTQtMS41LDE3eiIvPg0KPC9nPg0KPHVzZSB4bGluazpocmVmPSIjMSIgdHJhbnNmb3JtPSJyb3RhdGUoMTUpIi8+DQo8L2c+DQo8dXNlIHhsaW5rOmhyZWY9IiMyIiB0cmFuc2Zvcm09InJvdGF0ZSgzMCkiLz4NCjwvZz4NCjx1c2UgeGxpbms6aHJlZj0iIzQiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPg0KPC9nPg0KPHVzZSB4bGluazpocmVmPSIjOCIgdHJhbnNmb3JtPSJyb3RhdGUoMTIwKSIvPg0KPHVzZSB4bGluazpocmVmPSIjOCIgdHJhbnNmb3JtPSJtYXRyaXgoLS41IC0uODY2MDMgLjg2NjAzIC0uNSAwIDApIi8+DQo8Y2lyY2xlIGZpbGw9IiMwMDAwODAiIHI9IjgiLz4NCjwvZz4NCjwvc3ZnPg0K';var cn = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjAwIDgwMCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPg0KPHBhdGggZmlsbD0iI2RlMjkxMCIgZD0ibTAsMGgxMjAwdjgwMGgtMTIwMHoiLz4NCjxwYXRoIGZpbGw9IiNmZmRlMDAiIGQ9Im0tMTYuNTc5Niw5OS42MDA3bDIuMzY4Ni04LjEwMzItNi45NTMtNC43ODgzIDguNDM4Ni0uMjUxNCAyLjQwNTMtOC4wOTI0IDIuODQ2Nyw3Ljk0NzkgOC40Mzk2LS4yMTMxLTYuNjc5Miw1LjE2MzQgMi44MTA2LDcuOTYwNy02Ljk3NDctNC43NTY3LTYuNzAyNSw1LjEzMzF6IiB0cmFuc2Zvcm09Im1hdHJpeCg5LjkzMzUyIC4yNzc0NyAtLjI3NzQ3IDkuOTMzNTIgMzI0LjI5MjUgLTY5NS4yNDE1KSIvPg0KPHBhdGggZmlsbD0iI2ZmZGUwMCIgaWQ9InN0YXIiIGQ9Im0zNjUuODU1MiwzMzIuNjg5NWwyOC4zMDY4LDExLjM3NTcgMTkuNjcyMi0yMy4zMTcxLTIuMDcxNiwzMC40MzY3IDI4LjI1NDksMTEuNTA0LTI5LjU4NzIsNy40MzUyLTIuMjA5NywzMC40MjY5LTE2LjIxNDItMjUuODQxNS0yOS42MjA2LDcuMzAwOSAxOS41NjYyLTIzLjQwNjEtMTYuMDk2OC0yNS45MTQ4eiIvPg0KPGcgZmlsbD0iI2ZmZGUwMCI+DQo8cGF0aCBkPSJtNTE5LjA3NzksMTc5LjMxMjlsLTMwLjA1MzQtNS4yNDE4LTE0LjM5NDUsMjYuODk3Ni00LjMwMTctMzAuMjAyMy0zMC4wMjkzLTUuMzc4MSAyNy4zOTQ4LTEzLjQyNDItNC4xNjQ3LTMwLjIyMTUgMjEuMjMyNiwyMS45MDU3IDI3LjQ1NTQtMTMuMjk5OC0xNC4yNzIzLDI2Ljk2MjcgMjEuMTMzMSwyMi4wMDE3eiIvPg0KPHBhdGggZD0ibTQ1NS4yNTkyLDMxNS45Nzk1bDkuMzczNC0yOS4wMzE0LTI0LjYzMjUtMTcuOTk3OCAzMC41MDctLjA1NjYgOS41MDUtMjguOTg4NiA5LjQ4MSwyOC45OTY0IDMwLjUwNywuMDgxOC0yNC42NDc0LDE3Ljk3NzQgOS4zNDkzLDI5LjAzOTItMjQuNzE0LTE3Ljg4NTgtMjQuNzI4OCwxNy44NjUzeiIvPg0KPC9nPg0KPHVzZSB4bGluazpocmVmPSIjc3RhciIgdHJhbnNmb3JtPSJtYXRyaXgoLjk5ODYzIC4wNTIzNCAtLjA1MjM0IC45OTg2MyAxOS40MDAwNSAtMzAwLjUzNjgxKSIvPg0KPC9zdmc+DQo=';var kr = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOTAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNjAwIiB2aWV3Qm94PSItMzYgLTI0IDcyIDQ4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+DQo8cGF0aCBmaWxsPSIjZmZmIiBkPSJtLTM2LTI0aDcydjQ4aC03MnoiLz4NCjxnIHRyYW5zZm9ybT0ibWF0cml4KC41NTQ3IC0uODMyMDUgLjgzMjA1IC41NTQ3IDAgMCkiPg0KPGcgaWQ9ImIyIj4NCjxwYXRoIHN0cm9rZT0iIzAwMCIgaWQ9ImIiIHN0cm9rZS13aWR0aD0iMiIgZD0iTS02LTI1SDZNLTYtMjJINk0tNi0xOUg2Ii8+DQo8dXNlIHk9IjQ0IiB4bGluazpocmVmPSIjYiIvPg0KPC9nPg0KPHBhdGggc3Ryb2tlPSIjZmZmIiBkPSJtMCwxN3YxMCIvPg0KPGNpcmNsZSBmaWxsPSIjYzYwYzMwIiByPSIxMiIvPg0KPHBhdGggZmlsbD0iIzAwMzQ3OCIgZD0iTTAtMTJBNiw2IDAgMCAwIDAsMEE2LDYgMCAwIDEgMCwxMkExMiwxMiAwIDAsMSAwLTEyWiIvPg0KPC9nPg0KPGcgdHJhbnNmb3JtPSJtYXRyaXgoLS41NTQ3IC0uODMyMDUgLjgzMjA1IC0uNTU0NyAwIDApIj4NCjx1c2UgeGxpbms6aHJlZj0iI2IyIi8+DQo8cGF0aCBzdHJva2U9IiNmZmYiIGQ9Im0wLTIzLjV2M20wLDM3LjV2My41bTAsM3YzIi8+DQo8L2c+DQo8L3N2Zz4NCg==';var dk = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzNzAgMjgwIj4NCjxwYXRoIGZpbGw9IiNkMDBjMzMiIGQ9Im0wLDBoMzcwdjI4MGgtMzcweiIvPg0KPGcgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjQwIj4NCjxwYXRoIGQ9Im0xNDAsMHYyODAiLz4NCjxwYXRoIGQ9Im0wLDE0MGgzNzAiLz4NCjwvZz4NCjwvc3ZnPg0K';
    var cImg = ['<img class="ic" alt="Индия" src="'+in+'" /><span class="instok">Индия</span>','<img class="ic" alt="Индия" src="'+in+'" /><span class="instok">Индия</span>','<img class="ic" alt="Китай" src="'+cn+'" /><span class="instok">Китай</span>','<img class="ic" alt="Корея" src="'+kr+'" /><span class="instok">Корея</span>','<img class="ic" alt="Дания" src="'+dk+'" /><span class="instok">Дания</span>','<img class="ic" alt="Дания" src="'+dk+'" /><span class="instok">Дания</span>','<img class="ic" alt="Дания" src="'+dk+'" /><span class="instok">Дания</span>','<img class="ic" alt="Дания" src="'+dk+'" /><span class="instok">Дания</span>',];

    for (var q = 0; q < cImg.length; q++) {
        var cQ = document.getElementById('c' + q);
        if (cQ != null)
            cQ.innerHTML = cImg[q];
    }
}

function preBrandImg() {
    var bImg = ['<img class="ib" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADEAAAARCAYAAAB0MEQqAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAFlSURBVEhL7ZUxjoNADEX3tFyGM3ACempaSjoqOhoqGhqaid4oHzmWiXaTTTZZ5UsjMh6P/b/HM/lK/wAfEa+CXUTf96mqqsPB+hGWZck+TdOcLY8DOchFTmEX0XVdKstyH0VRXMxZP8I8z9mnruuz5XEgB7nIKYTtBGFEXCMObDUirOt6kSwCPt+Jcw0/FkEV1GLyiU5CFdOJ+lMaxzHHkA+/sQnEZa1t2/xlgF85CSUlGP2paosIIDFz7hFr+LFPJNmjOPiKMPNpmrKPOGDHhwFUvLtFMCy8CEgzRyhCfLtIpI0/DMO+B4iDyAtPE0GllUyDuRJHRHwMcfCvYrT35jth4QkInAAxqK5d10lRfYE2wuZPwpIFTxMBEfxEknW7T4SxcU9YFzndmz8XIdLY+GrYxPS6fORn+/9uEdu2ZSe+Htijdz2yU3HI6MXx4O5wWvS9/y8QBw9yeHso4t3wEfEaSOkEeGUESGIAeeoAAAAASUVORK5CYII="/><span class="instok">Трисори</span>','<img class="ib" src="//farm1.staticflickr.com/781/21180091510_4600899471_o.jpg"/><span class="instok">Манго</span>','<img class="ib" src="//farm1.staticflickr.com/651/21397741605_a19e94f18d_o.jpg"/><span class="instok">Писес</span>','<img class="ib" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE8AAAARCAYAAACcsPEBAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAJOSURBVFhH7ZY9bsJAEEZzWi7DGTgBPTUtJR0VHQ0VDQ2No2f8kvFobAOukPxJo2Xnfz7vbvLTLPgYC3kzsJA3Az3ydrtds9lsmtvt1mme2G63rR77t8GZsuz3+87jiePx2OpZX0WPPIJXq1VzvV47zb+O9Rth/+v1uid5psPh0OpZX8UoeXy1KeLwvd/v3a5GPsn4j8XEj1eBfFM1RZ4JPB6PPwJzbxnYh/oZJG+KOOw2wIqfA/kVvTL6cCV4AvitPSLnPJ1OneUJ82on19TwY+QhIp88/I21Xr7qJXkxKAcAhiIZw0aiLcxqQXwhzXz4ns/n1sbe4akT7fZwuVxaOzr2Dqg/+zHEmRRi7E3YszPoR12JZB9PfEmeTSH8doAKJJMc4oGNQIQwn7CWJyLbqYndj6d/7MWP5iPvFVOAceZX0HFyRUUee2pAcvVMlOSRnOImRJ9B0tyMfrkRoJ+wViTP2krMqS5iaGDzRJ11hMQbm3PF22G+SDYoySNQqIvXN39xGmPvoLkRkIfPQ2lnH8VrrT2eAK+ufbBSUwFD5NmjhLg3TnDS0Zkn2gf/YIj41jiIfpIsmehB1YjDi1yLIdhLhCfbGuYkjhhPBlJdKWEdiCaHQhx63z3zswJz2x99RTuYJA84mOREQhH0riA3AvQVuRYfRh1+sZ6wDwW/+OhXMGcWYvlAIvdMXnse6qdHng9uBfTRhi+FfMCjnX8F+M0qqvi4F16T+IchgjhOwRRpwjpZ8mmtesaHOvSDLaNH3oL3sJA3Awt5H6NpfgHUjRyqCpLFIgAAAABJRU5ErkJggg=="/><span class="instok">Камео—Бис</span>','<img class="ib" src="//farm1.staticflickr.com/765/21307391105_79ed77b0f0_o.jpg"/><span class="instok">Пилгрим</span>','<img class="ib" src="//farm1.staticflickr.com/765/21307391105_79ed77b0f0_o.jpg"/><span class="instok">Пилгрим</span>','<img class="ib" src="//farm1.staticflickr.com/765/21307391105_79ed77b0f0_o.jpg"/><span class="instok">Пилгрим</span>','<img class="ib" src="//farm1.staticflickr.com/765/21307391105_79ed77b0f0_o.jpg"/><span class="instok">Пилгрим</span>'];
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