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
            var arImg = ['//farm1.staticflickr.com/686/21178690028_1cfb821988_n.jpg','//farm1.staticflickr.com/624/20743863584_b33ecba882_n.jpg','//farm1.staticflickr.com/667/21178453530_88e326f52e_n.jpg','//farm1.staticflickr.com/625/21178449960_f34f9dea58_n.jpg'];
        } else {
            var arImg = ['//farm1.staticflickr.com/686/21178690028_3a9d7524e3_o.jpg','//farm1.staticflickr.com/624/20743863584_f578851bd5_o.jpg','//farm1.staticflickr.com/667/21178453530_f78ce6f2dc_o.jpg','//farm1.staticflickr.com/625/21178449960_0d5785e499_o.jpg'];

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
            a.href = 'http://кликай-тут.рф/wiakia/12041.html';
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
    var rImg = ['//farm1.staticflickr.com/583/22329894551_44e04300ca_n.jpg','//farm6.staticflickr.com/5662/20869112763_a8b8389df9_n.jpg','//farm6.staticflickr.com/5634/22099029571_51885ba909_n.jpg','//farm6.staticflickr.com/5754/21232676399_aaac38e1ae_n.jpg','//farm1.staticflickr.com/605/21418110275_d70ae9ef71_n.jpg','//farm6.staticflickr.com/5754/22122789370_70bed0be71_n.jpg','//farm1.staticflickr.com/662/20988944044_21fcef81f8_n.jpg','//farm1.staticflickr.com/711/21817513571_3dc6c8cc97_n.jpg','//farm6.staticflickr.com/5781/21490559300_da1ec541d5_n.jpg','//farm6.staticflickr.com/5821/21472944149_cb1058c845_n.jpg','//farm6.staticflickr.com/5736/21762410969_68b4af3197_n.jpg','//farm6.staticflickr.com/5779/21457338012_2aa383bdc0_n.jpg','//farm6.staticflickr.com/5771/22132529509_c2334b4d58_n.jpg','//farm1.staticflickr.com/755/21040899173_97396317a5_n.jpg','//farm6.staticflickr.com/5640/21257295484_8da9e862e3_n.jpg','//farm6.staticflickr.com/5820/21660928525_04dccd6687_n.jpg','//farm1.staticflickr.com/615/21627020312_725d127f3f_n.jpg','//farm6.staticflickr.com/5773/21376754421_8e1b2c7927_n.jpg','//farm1.staticflickr.com/641/21926208906_14111c3217_n.jpg','//farm6.staticflickr.com/5716/21879612045_1441be448e_n.jpg'];
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
    var id = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2MDAgNDAwIj4NCjxwYXRoIGZpbGw9IiNjZTExMjYiIGQ9Im0wLDBoNjAwdjIwMGgtNjAweiIvPg0KPHBhdGggZmlsbD0iI2ZmZiIgZD0ibTAsMjAwaDYwMHYyMDBoLTYwMHoiLz4NCjwvc3ZnPg0K';var cn = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjAwIDgwMCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPg0KPHBhdGggZmlsbD0iI2RlMjkxMCIgZD0ibTAsMGgxMjAwdjgwMGgtMTIwMHoiLz4NCjxwYXRoIGZpbGw9IiNmZmRlMDAiIGQ9Im0tMTYuNTc5Niw5OS42MDA3bDIuMzY4Ni04LjEwMzItNi45NTMtNC43ODgzIDguNDM4Ni0uMjUxNCAyLjQwNTMtOC4wOTI0IDIuODQ2Nyw3Ljk0NzkgOC40Mzk2LS4yMTMxLTYuNjc5Miw1LjE2MzQgMi44MTA2LDcuOTYwNy02Ljk3NDctNC43NTY3LTYuNzAyNSw1LjEzMzF6IiB0cmFuc2Zvcm09Im1hdHJpeCg5LjkzMzUyIC4yNzc0NyAtLjI3NzQ3IDkuOTMzNTIgMzI0LjI5MjUgLTY5NS4yNDE1KSIvPg0KPHBhdGggZmlsbD0iI2ZmZGUwMCIgaWQ9InN0YXIiIGQ9Im0zNjUuODU1MiwzMzIuNjg5NWwyOC4zMDY4LDExLjM3NTcgMTkuNjcyMi0yMy4zMTcxLTIuMDcxNiwzMC40MzY3IDI4LjI1NDksMTEuNTA0LTI5LjU4NzIsNy40MzUyLTIuMjA5NywzMC40MjY5LTE2LjIxNDItMjUuODQxNS0yOS42MjA2LDcuMzAwOSAxOS41NjYyLTIzLjQwNjEtMTYuMDk2OC0yNS45MTQ4eiIvPg0KPGcgZmlsbD0iI2ZmZGUwMCI+DQo8cGF0aCBkPSJtNTE5LjA3NzksMTc5LjMxMjlsLTMwLjA1MzQtNS4yNDE4LTE0LjM5NDUsMjYuODk3Ni00LjMwMTctMzAuMjAyMy0zMC4wMjkzLTUuMzc4MSAyNy4zOTQ4LTEzLjQyNDItNC4xNjQ3LTMwLjIyMTUgMjEuMjMyNiwyMS45MDU3IDI3LjQ1NTQtMTMuMjk5OC0xNC4yNzIzLDI2Ljk2MjcgMjEuMTMzMSwyMi4wMDE3eiIvPg0KPHBhdGggZD0ibTQ1NS4yNTkyLDMxNS45Nzk1bDkuMzczNC0yOS4wMzE0LTI0LjYzMjUtMTcuOTk3OCAzMC41MDctLjA1NjYgOS41MDUtMjguOTg4NiA5LjQ4MSwyOC45OTY0IDMwLjUwNywuMDgxOC0yNC42NDc0LDE3Ljk3NzQgOS4zNDkzLDI5LjAzOTItMjQuNzE0LTE3Ljg4NTgtMjQuNzI4OCwxNy44NjUzeiIvPg0KPC9nPg0KPHVzZSB4bGluazpocmVmPSIjc3RhciIgdHJhbnNmb3JtPSJtYXRyaXgoLjk5ODYzIC4wNTIzNCAtLjA1MjM0IC45OTg2MyAxOS40MDAwNSAtMzAwLjUzNjgxKSIvPg0KPC9zdmc+DQo=';var ru = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NTAgMzAwIj4NCjxwYXRoIGZpbGw9IiNmZmYiIGQ9Im0wLDBoNDUwdjEwMGgtNDUweiIvPg0KPHBhdGggZmlsbD0iIzAwZiIgZD0ibTAsMTAwaDQ1MHYxMDBoLTQ1MHoiLz4NCjxwYXRoIGZpbGw9IiNmMDAiIGQ9Im0wLDIwMGg0NTB2MTAwaC00NTB6Ii8+DQo8L3N2Zz4NCg==';var gb = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgNjAgMzAiIGhlaWdodD0iNjAwIj4NCjxkZWZzPg0KPGNsaXBQYXRoIGlkPSJ0Ij4NCjxwYXRoIGQ9Im0zMCwxNWgzMHYxNXp2MTVoLTMwemgtMzB2LTE1enYtMTVoMzB6Ii8+DQo8L2NsaXBQYXRoPg0KPC9kZWZzPg0KPHBhdGggZmlsbD0iIzAwMjQ3ZCIgZD0ibTAsMHYzMGg2MHYtMzB6Ii8+DQo8cGF0aCBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iNiIgZD0ibTAsMGw2MCwzMG0wLTMwbC02MCwzMCIvPg0KPHBhdGggc3Ryb2tlPSIjY2YxNDJiIiBzdHJva2Utd2lkdGg9IjQiIGQ9Im0wLDBsNjAsMzBtMC0zMGwtNjAsMzAiIGNsaXAtcGF0aD0idXJsKCN0KSIvPg0KPHBhdGggc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjEwIiBkPSJtMzAsMHYzMG0tMzAtMTVoNjAiLz4NCjxwYXRoIHN0cm9rZT0iI2NmMTQyYiIgc3Ryb2tlLXdpZHRoPSI2IiBkPSJtMzAsMHYzMG0tMzAtMTVoNjAiLz4NCjwvc3ZnPg0K';var ro = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NTAgMzAwIj4NCjxwYXRoIGZpbGw9IiMwMDJiN2YiIGQ9Im0wLDBoMTUwdjMwMGgtMTUweiIvPg0KPHBhdGggZmlsbD0iI2ZjZDExNiIgZD0ibTE1MCwwaDE1MHYzMDBoLTE1MHoiLz4NCjxwYXRoIGZpbGw9IiNjZTExMjYiIGQ9Im0zMDAsMGgxNTB2MzAwaC0xNTB6Ii8+DQo8L3N2Zz4NCg==';
    var cImg = ['<img class="ic" alt="Индонезия" src="'+id+'" /><span class="instok">Индонезия</span>','<img class="ic" alt="Китай" src="'+cn+'" /><span class="instok">Китай</span>','<img class="ic" alt="Китай" src="'+cn+'" /><span class="instok">Китай</span>','<img class="ic" alt="Китай" src="'+cn+'" /><span class="instok">Китай</span>','<img class="ic" alt="Россия" src="'+ru+'" /><span class="instok">Россия</span>','<img class="ic" alt="Великобритания" src="'+gb+'" /><span class="instok">Великобритания</span>','<img class="ic" alt="Китай" src="'+cn+'" /><span class="instok">Китай</span>','<img class="ic" alt="Румыния" src="'+ro+'" /><span class="instok">Румыния</span>',];

    for (var q = 0; q < cImg.length; q++) {
        var cQ = document.getElementById('c' + q);
        if (cQ != null)
            cQ.innerHTML = cImg[q];
    }
}

function preBrandImg() {
    var bImg = ['<img class="ib" src="//farm6.staticflickr.com/5653/21178693218_a515d5503f_o.jpg"/><span class="instok">с.Оливер Деним</span>','<img class="ib" src="//farm6.staticflickr.com/5653/21178693218_a515d5503f_o.jpg"/><span class="instok">с.Оливер Деним</span>','<img class="ib" src="//farm6.staticflickr.com/5653/21178693218_a515d5503f_o.jpg"/><span class="instok">с.Оливер Деним</span>','<img class="ib" src="//farm6.staticflickr.com/5653/21178693218_a515d5503f_o.jpg"/><span class="instok">с.Оливер Деним</span>','<img class="ib" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHwAAAARCAYAAAAfdMg6AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAANJSURBVGhD7ZYxjiIxEEX3tFyGM3ACcuJJCcmIyEiISEhIWL0envSptbthRkgzC1+yuu0uV/2qXzb8ubzxUngL/mJ4C/5iuBF8tVpdFovF5Xg8Xld+Dg6Hw8BtPp8PY7vdXr/0sdlshj08e/hKzsvlchhT2O/317d/8fHxMcTlmZAPnE+n0/DO4F3glzU4nM/ngTtz9k7hRnA2zWazobg/DQq9Xq+HxOA5VlCALXY8e6Bo+H0kZ7n0gAgK1QMC4iPz2O12wzz30RCsZYOpk40M97qvh28J/t3GoDOzc8eQRbYwYycX3CN4D2Pckgs29Xa4VwD5YUeT2ADkl8j13COeKjjJeSqw5ZkF9VuePrqUNa9hiOf+7N4esMFe/4ypZrlHcP2ZMz6tA+vcJsYTzv2GbRbbNX2MwVg+W9eyDW5cRjbZUwVPYhTSuUVFaL8LSQIK6pwGUJQp0TnN2DFqwj3cI3jN2caCP2t+lz/gvWVjHK9h7MZiA/LQH09OegvEwibjiKcJrpgpTgoocl4bQOHyzwpxc3+FyWLjE450ft4kFV8RPLmDqfyAORrnEQGq4D2k4PWn7GmC9wpYC6AdJ1iinki/uYfBnNGKyz6+mQw+6/4eenwTmXOvcDVOnbvPOD0/LRgffzzrv3aQV7rP/Dl7JN5DgltsT6uoBfBU+PuYRBSBxIiTowVjZiGy21sFEo8KDnq55FqdszfjOJ8SwNsOuzzp9daSI/bmnrfsvfFAU3CKCPkckpAUwQkkgVp4fwu1FXliKSY+8JkJJLTHhk7PmPphrQV4Y4Pvmo+czFkf8iYGOfs9BeY95+zFBr8gOfe42UjYkRdgP3NiCuqaa/lv3hyMz3rm6Eg0BW8NN3LiDOhoieXvGrYVJsE3B357wL7GhKvC16QE67knhwU0Z4VBLNeISQw5ijqvggO+G6slejZWwtjknDWEl8gr3kPDvDWSJ7gRHKdsbo367xEyJJhEKtjX+846HcqA9BSwoSmIiV/h6WgBzplDDnmZs+DdffKiaFk4fSTcJ9hLbt6MFS0fIDnLrVVDbYzpvDUSN4K/8XnCEJeTR7G8jepJ/K14C16AyAieVyJNcM8t9BvwFrwDr9P/RehPXC5/ARr7Py6FYRgZAAAAAElFTkSuQmCC"/><span class="instok">Лав энд Лайт XXL</span>','<img class="ib" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD4AAAARCAYAAACFOx+nAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAHYSURBVFhH7ZU7csJAEER9Wi7DGTgBOTEpIRkRGQkRCbFcT9azW4NkFpwZumpK+5lfz8zCR/eieBN/NUwSPxwO3Wq16pbLZS+sj8fjcPs3rNfrXn5D1WmxeRQ3xAmwWCy+CSPskd1uN2g9D4v5G6pOi82jGBGHGAQhe71eh9OvCbAYU7hcLiP9iryfI9Gi8yjO53Pvdwoj4gSD4Ol0Gk5+gJNKjkJpw5dpyUCsnRjuN5tN/0VEi07uicE6c9xut/0ZDQKZl37rU70hjiQgnCJwpFMCEdy98NlABtskKFp0WLuHsPoi72kOa/ygu9/ve332ibvE2WOoSN4Es/IkwxnBQPVnUnn2jE7upwoBnE4aVO3BJPEcabqZoyPxKWfoocMXPda10mnXogPq3jiMtsXOJ2a+CvdpD0bEdcLYVtjhSjyL5LjT8anOgTxr0QF1r53vPQvnDzFczK3agxFxHWrIGOHId5jErTpBOcuRMqDFohB0xMJmEi06+k1kTj4tYF42b+4faUQcQMJkUjDEaSKDq+MvK8AXZ97hly8iWnTqHvi263k2TzslcUNckBCVRFjPgS6hk4QTJMK9P4L4qv7u6UzZAM7ybQv9mRM61X6W+H/Hm/hroes+ASV7CE2+K5u1AAAAAElFTkSuQmCC"/><span class="instok">Годдива</span>','<img class="ib" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGcAAAARCAYAAADAOrIlAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAALWSURBVFhH7ZY9juJAEIX3tFyGM3ACcmJSQjIiMhIiEhISrz7Wn/RcamM8SCN2hie1THV3/b1X9syf7oO3xUecN8ZHnDfGQJzNZtOtVqvucrn0O++B9Xp9r6uu7Xbb3/heUA9cjQH+qM871X4WA3EIsFgsuvP53O+8B5bL5b0unrnYo+bvBrkf5YW/rA0bH0Sdg5fEeVVEJup6vfbWOBQjgZ8Ctd70Z2r7av0pDnXUHoj77OA84mC2OARjAiSG526360//vfLsnU6nfqe7f37YOxwOd/t4PA78pyaKO6wKY6Q4fDoytjkBdbJnPa071p8cYGeN2HDl3XpexcGud8jJnjVwt/I+WxzvQALNaisQongubAA48SwKxI/7WXiF97nr4j5+EgAg3dwMgLU5KOYi1n6/H9hOb4sDzjMPtnm4Zy32zB62PtWWI+IkB5kDzBLHoElkki3SrmJBCnb+MSdv+ldwho9Pf+cAAPYyjrnNJQmZW0GpC7Q4IGYSV/PcbrfB3pQ4NSdApMr7LHFsjmeiFus9EkIgv/30eKYPC5s1ljfjQ7g+rTpasSXF3JnHPWO1OCCOMUC1gfkAvpm32q0cLcwSB7I5n5pY3ybeMJ7ZiGQwPeTJNYYa3zeCxedLeK/GrYOhEGBKHJ7Y2UOtB+Re9am2A5tvDr/pK9EUB+IoNpeOFGBgkpooPxXA73AtAqLYIxciEoOY+amsyMaFn4YkzZzmozb8FJA+OGePfvItVEA5yBg1jz6c8Unzjj1MieOQY3PmP0isRFOc1qIxQGCLc7WIdbprQiCxFsQi7hi8U2G9DgYEu8d9nhICFKf2mYMFUe4Tg954ZhzrcXnXfyqmxAEK6sK/cjAQh+YI1FpMSALyadaJawG/sXP2mU6WTY3BGip88+qZtfFMKI51j9Xvmf61j7QhtDVYj3wENv3j3+JgIM5PR4rzP+DXicPn4yPOBy+i6/4Ct58MyS9xvToAAAAASUVORK5CYII="/><span class="instok">Лав Репаблик</span>','<img class="ib" src="//farm1.staticflickr.com/681/21161771328_edc2ebf725_o.jpg"/><span class="instok">Дороти Перкинс</span>'];
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