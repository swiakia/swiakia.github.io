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
            var arImg = ['//farm1.staticflickr.com/670/21178634429_2e38121de2_n.jpg','//farm1.staticflickr.com/581/21178631109_a79eaa2e45_n.jpg','//farm1.staticflickr.com/694/20744431073_cd75a5b76e_n.jpg','//farm6.staticflickr.com/5744/21354745262_bb2b8cd20a_n.jpg','//farm6.staticflickr.com/5756/20742829014_f9f7ae5213_n.jpg','//farm1.staticflickr.com/715/20744422763_26a8f8bcee_n.jpg','//farm1.staticflickr.com/655/21373825601_d1dec52ba5_n.jpg'];
        } else {
            var arImg = ['//farm1.staticflickr.com/670/21178634429_0f52744395_o.jpg','//farm1.staticflickr.com/581/21178631109_828818afd7_o.jpg','//farm1.staticflickr.com/694/20744431073_36104bdf43_o.jpg','//farm6.staticflickr.com/5744/21354745262_7ed88f9938_o.jpg','//farm6.staticflickr.com/5756/20742829014_fc5ebef14c_o.jpg','//farm1.staticflickr.com/715/20744422763_119414a880_o.jpg','//farm1.staticflickr.com/655/21373825601_d8757648c8_o.jpg'];

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
            a.href = 'http://кликай-тут.рф/wiakia/10044.html';
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
    var rImg = ['//farm1.staticflickr.com/652/21950970619_eee88364a7_n.jpg','//farm6.staticflickr.com/5667/22119591601_d5f92a8de7_n.jpg','//farm1.staticflickr.com/664/21633292136_18cac6f72e_n.jpg','//farm6.staticflickr.com/5747/20841350084_2cb6a3d603_n.jpg','//farm6.staticflickr.com/5814/21228586199_f3e3033f96_n.jpg','//farm1.staticflickr.com/683/21132089434_00a1f2460d_n.jpg','//farm1.staticflickr.com/595/21197550659_0eb25f12ef_n.jpg','//farm1.staticflickr.com/716/21623502661_738303ae22_n.jpg','//farm1.staticflickr.com/668/21646668482_3b26a76b38_n.jpg','//farm1.staticflickr.com/720/22133003412_6d88c2eb8a_n.jpg','//farm1.staticflickr.com/703/21472315661_ae64bd7082_n.jpg','//farm6.staticflickr.com/5807/21524731279_1cf9966df2_n.jpg','//farm1.staticflickr.com/681/21645298225_2d231455c7_n.jpg','//farm1.staticflickr.com/651/21964175066_96dbf637be_n.jpg','//farm6.staticflickr.com/5626/21185070524_2cf8f56fda_n.jpg','//farm6.staticflickr.com/5663/22131962180_a81a33c703_n.jpg','//farm6.staticflickr.com/5805/21522500702_0e3a905330_n.jpg','//farm6.staticflickr.com/5717/21970658138_1999dcae50_n.jpg','//farm6.staticflickr.com/5681/21626659592_449fb93e09_n.jpg','//farm6.staticflickr.com/5773/21410531865_798feec039_n.jpg'];
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
    var in = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgNDUwIDMwMCIgaGVpZ2h0PSI4MDAiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4NCjxwYXRoIGZpbGw9IiNmZjk5MzIiIGQ9Im0wLDBoNDUwdjEwMGgtNDUweiIvPg0KPHBhdGggZmlsbD0iI2ZmZiIgZD0ibTAsMTAwaDQ1MHYxMDBoLTQ1MHoiLz4NCjxwYXRoIGZpbGw9IiMxMjg4MDciIGQ9Im0wLDIwMGg0NTB2MTAwaC00NTB6Ii8+DQo8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyMjUgMTUwKSI+DQo8Y2lyY2xlIGZpbGw9IiMwMDAwODAiIHI9IjQ2LjUiLz4NCjxjaXJjbGUgZmlsbD0iI2ZmZiIgcj0iNDEiLz4NCjxnIGlkPSI4Ij4NCjxnIGlkPSI0Ij4NCjxnIGlkPSIyIj4NCjxnIGlkPSIxIj4NCjxjaXJjbGUgZmlsbD0iIzAwMDA4MCIgcj0iMi41IiB0cmFuc2Zvcm09Im1hdHJpeCguOTkxNDQgLjEzMDUzIC0uMTMwNTMgLjk5MTQ0IDQwLjY0OTI0IDUuMzUxNTcpIi8+DQo8cGF0aCBmaWxsPSIjMDAwMDgwIiBkPSJtMCw0MWwxLjUtMjRxLTEtMy0xLjUtMTctLjUsMTQtMS41LDE3eiIvPg0KPC9nPg0KPHVzZSB4bGluazpocmVmPSIjMSIgdHJhbnNmb3JtPSJyb3RhdGUoMTUpIi8+DQo8L2c+DQo8dXNlIHhsaW5rOmhyZWY9IiMyIiB0cmFuc2Zvcm09InJvdGF0ZSgzMCkiLz4NCjwvZz4NCjx1c2UgeGxpbms6aHJlZj0iIzQiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPg0KPC9nPg0KPHVzZSB4bGluazpocmVmPSIjOCIgdHJhbnNmb3JtPSJyb3RhdGUoMTIwKSIvPg0KPHVzZSB4bGluazpocmVmPSIjOCIgdHJhbnNmb3JtPSJtYXRyaXgoLS41IC0uODY2MDMgLjg2NjAzIC0uNSAwIDApIi8+DQo8Y2lyY2xlIGZpbGw9IiMwMDAwODAiIHI9IjgiLz4NCjwvZz4NCjwvc3ZnPg0K';var cn = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjAwIDgwMCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPg0KPHBhdGggZmlsbD0iI2RlMjkxMCIgZD0ibTAsMGgxMjAwdjgwMGgtMTIwMHoiLz4NCjxwYXRoIGZpbGw9IiNmZmRlMDAiIGQ9Im0tMTYuNTc5Niw5OS42MDA3bDIuMzY4Ni04LjEwMzItNi45NTMtNC43ODgzIDguNDM4Ni0uMjUxNCAyLjQwNTMtOC4wOTI0IDIuODQ2Nyw3Ljk0NzkgOC40Mzk2LS4yMTMxLTYuNjc5Miw1LjE2MzQgMi44MTA2LDcuOTYwNy02Ljk3NDctNC43NTY3LTYuNzAyNSw1LjEzMzF6IiB0cmFuc2Zvcm09Im1hdHJpeCg5LjkzMzUyIC4yNzc0NyAtLjI3NzQ3IDkuOTMzNTIgMzI0LjI5MjUgLTY5NS4yNDE1KSIvPg0KPHBhdGggZmlsbD0iI2ZmZGUwMCIgaWQ9InN0YXIiIGQ9Im0zNjUuODU1MiwzMzIuNjg5NWwyOC4zMDY4LDExLjM3NTcgMTkuNjcyMi0yMy4zMTcxLTIuMDcxNiwzMC40MzY3IDI4LjI1NDksMTEuNTA0LTI5LjU4NzIsNy40MzUyLTIuMjA5NywzMC40MjY5LTE2LjIxNDItMjUuODQxNS0yOS42MjA2LDcuMzAwOSAxOS41NjYyLTIzLjQwNjEtMTYuMDk2OC0yNS45MTQ4eiIvPg0KPGcgZmlsbD0iI2ZmZGUwMCI+DQo8cGF0aCBkPSJtNTE5LjA3NzksMTc5LjMxMjlsLTMwLjA1MzQtNS4yNDE4LTE0LjM5NDUsMjYuODk3Ni00LjMwMTctMzAuMjAyMy0zMC4wMjkzLTUuMzc4MSAyNy4zOTQ4LTEzLjQyNDItNC4xNjQ3LTMwLjIyMTUgMjEuMjMyNiwyMS45MDU3IDI3LjQ1NTQtMTMuMjk5OC0xNC4yNzIzLDI2Ljk2MjcgMjEuMTMzMSwyMi4wMDE3eiIvPg0KPHBhdGggZD0ibTQ1NS4yNTkyLDMxNS45Nzk1bDkuMzczNC0yOS4wMzE0LTI0LjYzMjUtMTcuOTk3OCAzMC41MDctLjA1NjYgOS41MDUtMjguOTg4NiA5LjQ4MSwyOC45OTY0IDMwLjUwNywuMDgxOC0yNC42NDc0LDE3Ljk3NzQgOS4zNDkzLDI5LjAzOTItMjQuNzE0LTE3Ljg4NTgtMjQuNzI4OCwxNy44NjUzeiIvPg0KPC9nPg0KPHVzZSB4bGluazpocmVmPSIjc3RhciIgdHJhbnNmb3JtPSJtYXRyaXgoLjk5ODYzIC4wNTIzNCAtLjA1MjM0IC45OTg2MyAxOS40MDAwNSAtMzAwLjUzNjgxKSIvPg0KPC9zdmc+DQo=';var ro = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NTAgMzAwIj4NCjxwYXRoIGZpbGw9IiMwMDJiN2YiIGQ9Im0wLDBoMTUwdjMwMGgtMTUweiIvPg0KPHBhdGggZmlsbD0iI2ZjZDExNiIgZD0ibTE1MCwwaDE1MHYzMDBoLTE1MHoiLz4NCjxwYXRoIGZpbGw9IiNjZTExMjYiIGQ9Im0zMDAsMGgxNTB2MzAwaC0xNTB6Ii8+DQo8L3N2Zz4NCg==';var it = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBoZWlnaHQ9IjEwMDAiIHZpZXdCb3g9IjAgMCAzIDIiPg0KPHBhdGggZmlsbD0iIzAwOTI0NiIgZD0ibTAsMGgxdjJoLTF6Ii8+DQo8cGF0aCBmaWxsPSIjZmZmIiBkPSJtMSwwaDF2MmgtMXoiLz4NCjxwYXRoIGZpbGw9IiNjZTJiMzciIGQ9Im0yLDBoMXYyaC0xeiIvPg0KPC9zdmc+DQo=';var ru = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NTAgMzAwIj4NCjxwYXRoIGZpbGw9IiNmZmYiIGQ9Im0wLDBoNDUwdjEwMGgtNDUweiIvPg0KPHBhdGggZmlsbD0iIzAwZiIgZD0ibTAsMTAwaDQ1MHYxMDBoLTQ1MHoiLz4NCjxwYXRoIGZpbGw9IiNmMDAiIGQ9Im0wLDIwMGg0NTB2MTAwaC00NTB6Ii8+DQo8L3N2Zz4NCg==';
    var cImg = ['<img class="ic" alt="Индия" src="'+in+'" /><span class="instok">Индия</span>','<img class="ic" alt="Китай" src="'+cn+'" /><span class="instok">Китай</span>','<img class="ic" alt="Индия" src="'+in+'" /><span class="instok">Индия</span>','<img class="ic" alt="Румыния" src="'+ro+'" /><span class="instok">Румыния</span>','<img class="ic" alt="Италия" src="'+it+'" /><span class="instok">Италия</span>','<img class="ic" alt="Россия" src="'+ru+'" /><span class="instok">Россия</span>','<img class="ic" alt="Китай" src="'+cn+'" /><span class="instok">Китай</span>',];

    for (var q = 0; q < cImg.length; q++) {
        var cQ = document.getElementById('c' + q);
        if (cQ != null)
            cQ.innerHTML = cImg[q];
    }
}

function preBrandImg() {
    var bImg = ['<img class="ib" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIgAAAARCAYAAAAG0+TZAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAANdSURBVGhD7ZY7ruowFEXfaJkMY2AE9NS0lHRUdDRUNDQ0uVqIhTZHDpj7EXpStmQlts9nn4/j/BsmTHiCqUEmPMXUIBOe4qFBVqvVsFgsmuN0Ot2kPoPtdnvlwfNd7Ha7q+58Pr+O5XL58Xh+gvP5PFwul9tsuMbD+As8NAhJnM1m90TmOB6PN6nPYLPZXLnxfAc0vTHZJM7/xyYh/loP5oy/QLNBepuhleAeXU4AYwwtG7VBevwcDod7M6S8TdM6dfDqaZyfyvT4acX4bo165ca4vN0gJBs5ZS2YnW1B1uv1dR1gzzX0eGdQqAT7aSMLaIN4DSrD9TEGG6FeS3yeaZ7Efr+/c0OHd9aE8WErOab/HhkKUf3UfBN36ptLc+A6c8A7Q+Cj2lBWsIYMOVIOLhXNBuGZIxOsMY1zEkikerxbGEmRAOYSRUY7Jsfgqw2euY8eCYeT8zFgK32MgRjkQzHw5dxG6vHfIyMnZJFhL/fJK/vETR6URxYuyDKHp9yqDXWwgZ/0KbSDDPlpyYCuf5BqmJEwqDyVyGAP2CDOAQGyZvH0nZ86kuIcDux7mgA6lUtCm68aRC4ZJ75ZIzag/5Sp/l/JEAv7rAl9jxUbHfb8KW3FlDrIsi9v4AFIu3WuXnIH37pi0jBQzz2Gc9BqEJOpL/XG8Cr5LciLYldkM7firpx7/L+S0SbDeBnqtPJU0eKqHdDiAFIG1Lm+q963/0ES6lEIdHMAnuynnoEog13m+QUxab6znwFgL4Os8BPvNSVc95SxzzwbqZ7EHv+vZDIPvOfgC9E66azB17ygiw10ROr45asxV7t1jr3KHfxKg9RCQBI5rwOdp57J1JdF4slaLeKr5I+Bfe1SdPRd444HNgPrrOHfXCjT479HhncGPmkK92kEoF/ih4d5YQ7Ih3N1tCl4b9nI67nqIIdMcge/0iBA4pLjadfrPPVMZvrSvyNt9CS/Bey37GayAHO5t2R6/PfIeHj0wZMCCvi67sCG8ODkOvJjPhweNFF1rFFyBw8NQjGyYC2wn9dAgj0c5KdaVD1OT8uXNvIfASjvzxro4Su0CzdPXgXr7OfpFD3+eznqBz5jufRrV3UBe3BUF5kxuTEfLR3myR08NMiECRVTg0x4iqlBJjzBMHwBAMU6/IIOsV0AAAAASUVORK5CYII="/><span class="instok">Френч Коннекшн</span>','<img class="ib" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIgAAAARCAYAAAAG0+TZAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAANdSURBVGhD7ZY7ruowFEXfaJkMY2AE9NS0lHRUdDRUNDQ0uVqIhTZHDpj7EXpStmQlts9nn4/j/BsmTHiCqUEmPMXUIBOe4qFBVqvVsFgsmuN0Ot2kPoPtdnvlwfNd7Ha7q+58Pr+O5XL58Xh+gvP5PFwul9tsuMbD+As8NAhJnM1m90TmOB6PN6nPYLPZXLnxfAc0vTHZJM7/xyYh/loP5oy/QLNBepuhleAeXU4AYwwtG7VBevwcDod7M6S8TdM6dfDqaZyfyvT4acX4bo165ca4vN0gJBs5ZS2YnW1B1uv1dR1gzzX0eGdQqAT7aSMLaIN4DSrD9TEGG6FeS3yeaZ7Efr+/c0OHd9aE8WErOab/HhkKUf3UfBN36ptLc+A6c8A7Q+Cj2lBWsIYMOVIOLhXNBuGZIxOsMY1zEkikerxbGEmRAOYSRUY7Jsfgqw2euY8eCYeT8zFgK32MgRjkQzHw5dxG6vHfIyMnZJFhL/fJK/vETR6URxYuyDKHp9yqDXWwgZ/0KbSDDPlpyYCuf5BqmJEwqDyVyGAP2CDOAQGyZvH0nZ86kuIcDux7mgA6lUtCm68aRC4ZJ75ZIzag/5Sp/l/JEAv7rAl9jxUbHfb8KW3FlDrIsi9v4AFIu3WuXnIH37pi0jBQzz2Gc9BqEJOpL/XG8Cr5LciLYldkM7firpx7/L+S0SbDeBnqtPJU0eKqHdDiAFIG1Lm+q963/0ES6lEIdHMAnuynnoEog13m+QUxab6znwFgL4Os8BPvNSVc95SxzzwbqZ7EHv+vZDIPvOfgC9E66azB17ygiw10ROr45asxV7t1jr3KHfxKg9RCQBI5rwOdp57J1JdF4slaLeKr5I+Bfe1SdPRd444HNgPrrOHfXCjT479HhncGPmkK92kEoF/ih4d5YQ7Ih3N1tCl4b9nI67nqIIdMcge/0iBA4pLjadfrPPVMZvrSvyNt9CS/Bey37GayAHO5t2R6/PfIeHj0wZMCCvi67sCG8ODkOvJjPhweNFF1rFFyBw8NQjGyYC2wn9dAgj0c5KdaVD1OT8uXNvIfASjvzxro4Su0CzdPXgXr7OfpFD3+eznqBz5jufRrV3UBe3BUF5kxuTEfLR3myR08NMiECRVTg0x4iqlBJjzBMHwBAMU6/IIOsV0AAAAASUVORK5CYII="/><span class="instok">Френч Коннекшн</span>','<img class="ib" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIgAAAARCAYAAAAG0+TZAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAANdSURBVGhD7ZY7ruowFEXfaJkMY2AE9NS0lHRUdDRUNDQ0uVqIhTZHDpj7EXpStmQlts9nn4/j/BsmTHiCqUEmPMXUIBOe4qFBVqvVsFgsmuN0Ot2kPoPtdnvlwfNd7Ha7q+58Pr+O5XL58Xh+gvP5PFwul9tsuMbD+As8NAhJnM1m90TmOB6PN6nPYLPZXLnxfAc0vTHZJM7/xyYh/loP5oy/QLNBepuhleAeXU4AYwwtG7VBevwcDod7M6S8TdM6dfDqaZyfyvT4acX4bo165ca4vN0gJBs5ZS2YnW1B1uv1dR1gzzX0eGdQqAT7aSMLaIN4DSrD9TEGG6FeS3yeaZ7Efr+/c0OHd9aE8WErOab/HhkKUf3UfBN36ptLc+A6c8A7Q+Cj2lBWsIYMOVIOLhXNBuGZIxOsMY1zEkikerxbGEmRAOYSRUY7Jsfgqw2euY8eCYeT8zFgK32MgRjkQzHw5dxG6vHfIyMnZJFhL/fJK/vETR6URxYuyDKHp9yqDXWwgZ/0KbSDDPlpyYCuf5BqmJEwqDyVyGAP2CDOAQGyZvH0nZ86kuIcDux7mgA6lUtCm68aRC4ZJ75ZIzag/5Sp/l/JEAv7rAl9jxUbHfb8KW3FlDrIsi9v4AFIu3WuXnIH37pi0jBQzz2Gc9BqEJOpL/XG8Cr5LciLYldkM7firpx7/L+S0SbDeBnqtPJU0eKqHdDiAFIG1Lm+q963/0ES6lEIdHMAnuynnoEog13m+QUxab6znwFgL4Os8BPvNSVc95SxzzwbqZ7EHv+vZDIPvOfgC9E66azB17ygiw10ROr45asxV7t1jr3KHfxKg9RCQBI5rwOdp57J1JdF4slaLeKr5I+Bfe1SdPRd444HNgPrrOHfXCjT479HhncGPmkK92kEoF/ih4d5YQ7Ih3N1tCl4b9nI67nqIIdMcge/0iBA4pLjadfrPPVMZvrSvyNt9CS/Bey37GayAHO5t2R6/PfIeHj0wZMCCvi67sCG8ODkOvJjPhweNFF1rFFyBw8NQjGyYC2wn9dAgj0c5KdaVD1OT8uXNvIfASjvzxro4Su0CzdPXgXr7OfpFD3+eznqBz5jufRrV3UBe3BUF5kxuTEfLR3myR08NMiECRVTg0x4iqlBJjzBMHwBAMU6/IIOsV0AAAAASUVORK5CYII="/><span class="instok">Френч Коннекшн</span>','<img class="ib" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIgAAAARCAYAAAAG0+TZAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAANdSURBVGhD7ZY7ruowFEXfaJkMY2AE9NS0lHRUdDRUNDQ0uVqIhTZHDpj7EXpStmQlts9nn4/j/BsmTHiCqUEmPMXUIBOe4qFBVqvVsFgsmuN0Ot2kPoPtdnvlwfNd7Ha7q+58Pr+O5XL58Xh+gvP5PFwul9tsuMbD+As8NAhJnM1m90TmOB6PN6nPYLPZXLnxfAc0vTHZJM7/xyYh/loP5oy/QLNBepuhleAeXU4AYwwtG7VBevwcDod7M6S8TdM6dfDqaZyfyvT4acX4bo165ca4vN0gJBs5ZS2YnW1B1uv1dR1gzzX0eGdQqAT7aSMLaIN4DSrD9TEGG6FeS3yeaZ7Efr+/c0OHd9aE8WErOab/HhkKUf3UfBN36ptLc+A6c8A7Q+Cj2lBWsIYMOVIOLhXNBuGZIxOsMY1zEkikerxbGEmRAOYSRUY7Jsfgqw2euY8eCYeT8zFgK32MgRjkQzHw5dxG6vHfIyMnZJFhL/fJK/vETR6URxYuyDKHp9yqDXWwgZ/0KbSDDPlpyYCuf5BqmJEwqDyVyGAP2CDOAQGyZvH0nZ86kuIcDux7mgA6lUtCm68aRC4ZJ75ZIzag/5Sp/l/JEAv7rAl9jxUbHfb8KW3FlDrIsi9v4AFIu3WuXnIH37pi0jBQzz2Gc9BqEJOpL/XG8Cr5LciLYldkM7firpx7/L+S0SbDeBnqtPJU0eKqHdDiAFIG1Lm+q963/0ES6lEIdHMAnuynnoEog13m+QUxab6znwFgL4Os8BPvNSVc95SxzzwbqZ7EHv+vZDIPvOfgC9E66azB17ygiw10ROr45asxV7t1jr3KHfxKg9RCQBI5rwOdp57J1JdF4slaLeKr5I+Bfe1SdPRd444HNgPrrOHfXCjT479HhncGPmkK92kEoF/ih4d5YQ7Ih3N1tCl4b9nI67nqIIdMcge/0iBA4pLjadfrPPVMZvrSvyNt9CS/Bey37GayAHO5t2R6/PfIeHj0wZMCCvi67sCG8ODkOvJjPhweNFF1rFFyBw8NQjGyYC2wn9dAgj0c5KdaVD1OT8uXNvIfASjvzxro4Su0CzdPXgXr7OfpFD3+eznqBz5jufRrV3UBe3BUF5kxuTEfLR3myR08NMiECRVTg0x4iqlBJjzBMHwBAMU6/IIOsV0AAAAASUVORK5CYII="/><span class="instok">Френч Коннекшн</span>','<img class="ib" src="//farm1.staticflickr.com/693/21364307885_3f9cb25678_o.jpg"/><span class="instok">Ривер Айленд</span>','<img class="ib" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAAARCAYAAABQKcvqAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAI+SURBVFhH7ZYxksIwDEX3tFyGM3ACempaSjoqOhoqGhqa7Lxs3o4inBB2QyZF/owmkS1/yd+K4ataMCkWwSfGIvjEaAm+2+2qzWZT3W63ZuQZ2+22trFALnKSeywcj8eak+fc0BKcIlerVXW9XpuRZ6zX69rGArnISe6xcDgcak6ec8Pbgo+NV4L/pZY+wV/xMX+/3xuvDOa7Yhjvy/HvDs8+a/GHdhfxWXCuGa4teJh7hw+UBOc98u33+2bmB1xpcZ56FNU9sYZx3rF8DeaaS1fvRwTPm+1DSXDrYEPw6A/lJC7Gn8/n3xy8wxvnT6dTvQfGqSfPWyMxjMHBO2NqxWHg87shBzHERsxO8MvlUvuxO+i0nKcP5I41wIUPt4DLnBHkQrRYU64RKLBaeUjkYn3XH4/ZCZ7FEjlPHzKH+5ID0xd2ZJzvE9wcasVBmUfDz1qOLniXYMJ7zhx2ExsGfN7RFzlPRJ6zo+EC7gufvNGA3enfSMbxFTj7IAsu6GzmrCGuAUXB+VxYFM3PMW9On8TxlFlTgp8iBbHGeDcL4HOMGAVhbQmx7ni/+lmXDpUY+VzvfWs+xsEQwW0kD5lx/LgGFAUvmQJCggkFdNxiuwT3Po7cuSgFiTFsqAtRZE1xhR1nHE8PhPWOYdTjEwwRXIEjD+a8aAlOAQSU7PF41DH6EXQ/BbiBGN8F12SuiMzbBw6Sg6Kbu+LJBZ9dGMEa5vyS8z55j7zsr1S7NcuT0RJ8weexCD4xFsEnRVV9A/p0prCF3qT4AAAAAElFTkSuQmCC"/><span class="instok">Лиу Джо Джинс</span>','<img class="ib" src="//farm6.staticflickr.com/5806/21178948688_5c4c222601_o.jpg"/><span class="instok">Тутто Бене</span>','<img class="ib" src="//farm1.staticflickr.com/695/21352494772_c8494aa7bd_o.jpg"/><span class="instok">Инсити</span>'];
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