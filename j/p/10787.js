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
            var arImg = ['//farm6.staticflickr.com/5817/21177899978_16a70cf27a_n.jpg','//farm1.staticflickr.com/721/21178857929_8b323d0094_n.jpg','//farm6.staticflickr.com/5782/20743063954_5838d4d6dc_n.jpg','//farm6.staticflickr.com/5691/20743060694_b2c772fe29_n.jpg'];
        } else {
            var arImg = ['//farm6.staticflickr.com/5817/21177899978_1aa8d05ef2_o.jpg','//farm1.staticflickr.com/721/21178857929_9a7e0b5ec5_o.jpg','//farm6.staticflickr.com/5782/20743063954_3d4672b30f_o.jpg','//farm6.staticflickr.com/5691/20743060694_7a17c22fac_o.jpg'];

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
            a.href = 'http://кликай-тут.рф/wiakia/10787.html';
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
    var rImg = ['//farm1.staticflickr.com/750/21900165660_6fb9aef8d9_n.jpg','//farm1.staticflickr.com/677/21853272326_5cfbfe1b82_n.jpg','//farm1.staticflickr.com/729/21186525723_eb98ef0c97_n.jpg','//farm1.staticflickr.com/575/21454393872_38f8498051_n.jpg','//farm1.staticflickr.com/653/21551243280_b924c94245_n.jpg','//farm1.staticflickr.com/603/21318663354_af8da33657_n.jpg','//farm1.staticflickr.com/582/21176471718_d6c7cb86dd_n.jpg','//farm6.staticflickr.com/5642/21582807232_4fe132795e_n.jpg','//farm6.staticflickr.com/5749/21612012695_3bb65c6f06_n.jpg','//farm1.staticflickr.com/714/21475443291_1a56747661_n.jpg','//farm1.staticflickr.com/658/21440238679_d22b28fc6f_n.jpg','//farm6.staticflickr.com/5797/21516283060_541b85be8e_n.jpg','//farm1.staticflickr.com/674/21652908981_3fd183dfda_n.jpg','//farm6.staticflickr.com/5797/21347420446_0de52e73ff_n.jpg','//farm1.staticflickr.com/571/21400818575_cd1a61ea3c_n.jpg','//farm6.staticflickr.com/5639/20832756304_d392bc3bf8_n.jpg','//farm1.staticflickr.com/731/22084248296_85d267ebb3_n.jpg','//farm6.staticflickr.com/5804/21971686810_76217758a2_n.jpg','//farm6.staticflickr.com/5662/21426192821_cba87e0fd7_n.jpg'];
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
    var uz = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjUwIiB2aWV3Qm94PSIwIDAgMjUwIDEyNSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPg0KPGRlZnM+DQo8ZyBmaWxsPSIjZmZmIiBpZD0ic3RhciI+DQo8ZyBpZD0iY29uZSI+DQo8cGF0aCBpZD0idHJpYW5nbGUiIGQ9Im0wLDAgMCwxIC41LDB6IiB0cmFuc2Zvcm09Im1hdHJpeCguOTUxMDYgLjMwOTAyIC0uMzA5MDIgLjk1MTA2IDAgLTEpIi8+DQo8dXNlIHdpZHRoPSI1MDAiIGhlaWdodD0iMjUwIiB4bGluazpocmVmPSIjdHJpYW5nbGUiIHRyYW5zZm9ybT0ic2NhbGUoLTEgMSkiLz4NCjwvZz4NCjx1c2Ugd2lkdGg9IjUwMCIgaGVpZ2h0PSIyNTAiIHhsaW5rOmhyZWY9IiNjb25lIiB0cmFuc2Zvcm09InJvdGF0ZSg3MikiLz4NCjx1c2Ugd2lkdGg9IjUwMCIgaGVpZ2h0PSIyNTAiIHhsaW5rOmhyZWY9IiNjb25lIiB0cmFuc2Zvcm09Im1hdHJpeCguMzA5MDIgLS45NTEwNiAuOTUxMDYgLjMwOTAyIDAgMCkiLz4NCjx1c2Ugd2lkdGg9IjUwMCIgaGVpZ2h0PSIyNTAiIHhsaW5rOmhyZWY9IiNjb25lIiB0cmFuc2Zvcm09InJvdGF0ZSgxNDQpIi8+DQo8dXNlIHdpZHRoPSI1MDAiIGhlaWdodD0iMjUwIiB4bGluazpocmVmPSIjY29uZSIgdHJhbnNmb3JtPSJtYXRyaXgoLS44MDkwMiAtLjU4Nzc5IC41ODc3OSAtLjgwOTAyIDAgMCkiLz4NCjwvZz4NCjwvZGVmcz4NCjxwYXRoIGZpbGw9IiMwMDk5YjUiIGQ9Im0wLDBoMjUwdjQwaC0yNTB6Ii8+DQo8cGF0aCBmaWxsPSIjY2UxMTI2IiBkPSJtMCw0MGgyNTB2NDVoLTI1MHoiLz4NCjxwYXRoIGZpbGw9IiNmZmYiIGQ9Im0wLDQyLjVoMjUwdjQwaC0yNTB6Ii8+DQo8cGF0aCBmaWxsPSIjMWViNTNhIiBkPSJtMCw4NWgyNTB2NDBoLTI1MHoiLz4NCjxjaXJjbGUgZmlsbD0iI2ZmZiIgY3g9IjcwIiBjeT0iNDAiIHI9IjMwIiB0cmFuc2Zvcm09InNjYWxlKC41KSIvPg0KPGNpcmNsZSBmaWxsPSIjMDA5OWI1IiBjeD0iODMuNSIgY3k9IjQwIiByPSIyNSIgdHJhbnNmb3JtPSJtYXRyaXgoLjYgMCAwIC42IC0xMC4xIC00KSIvPg0KPHVzZSB3aWR0aD0iNTAwIiBoZWlnaHQ9IjI1MCIgaWQ9InVzZTQyIiB4bGluazpocmVmPSIjc3RhciIgdHJhbnNmb3JtPSJtYXRyaXgoMy4xNTQzOSAwIDAgMy4zMTY3MiA0NCAzMi4zMTY3MikiLz4NCjx1c2Ugd2lkdGg9IjI1MCIgaGVpZ2h0PSIxMjUiIHhsaW5rOmhyZWY9IiN1c2U0MiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTIgLTApIi8+DQo8dXNlIHdpZHRoPSIyNTAiIGhlaWdodD0iMTI1IiB4bGluazpocmVmPSIjdXNlNDIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI0IC0wKSIvPg0KPHVzZSB3aWR0aD0iMjUwIiBoZWlnaHQ9IjEyNSIgeGxpbms6aHJlZj0iI3VzZTQyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzNiAtMCkiLz4NCjx1c2Ugd2lkdGg9IjI1MCIgaGVpZ2h0PSIxMjUiIHhsaW5rOmhyZWY9IiN1c2U0MiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDggLTApIi8+DQo8dXNlIHdpZHRoPSIyNTAiIGhlaWdodD0iMTI1IiB4bGluazpocmVmPSIjdXNlNDIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEyIC0xMikiLz4NCjx1c2Ugd2lkdGg9IjI1MCIgaGVpZ2h0PSIxMjUiIHhsaW5rOmhyZWY9IiN1c2U0MiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjQgLTEyKSIvPg0KPHVzZSB3aWR0aD0iMjUwIiBoZWlnaHQ9IjEyNSIgeGxpbms6aHJlZj0iI3VzZTQyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzNiAtMTIpIi8+DQo8dXNlIHdpZHRoPSIyNTAiIGhlaWdodD0iMTI1IiB4bGluazpocmVmPSIjdXNlNDIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ4IC0xMikiLz4NCjx1c2Ugd2lkdGg9IjI1MCIgaGVpZ2h0PSIxMjUiIHhsaW5rOmhyZWY9IiN1c2U0MiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjQgLTI0KSIvPg0KPHVzZSB3aWR0aD0iMjUwIiBoZWlnaHQ9IjEyNSIgeGxpbms6aHJlZj0iI3VzZTQyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzNiAtMjQpIi8+DQo8dXNlIHdpZHRoPSIyNTAiIGhlaWdodD0iMTI1IiB4bGluazpocmVmPSIjdXNlNDIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ4IC0yNCkiLz4NCjwvc3ZnPg0K';var ro = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NTAgMzAwIj4NCjxwYXRoIGZpbGw9IiMwMDJiN2YiIGQ9Im0wLDBoMTUwdjMwMGgtMTUweiIvPg0KPHBhdGggZmlsbD0iI2ZjZDExNiIgZD0ibTE1MCwwaDE1MHYzMDBoLTE1MHoiLz4NCjxwYXRoIGZpbGw9IiNjZTExMjYiIGQ9Im0zMDAsMGgxNTB2MzAwaC0xNTB6Ii8+DQo8L3N2Zz4NCg==';var cn = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjAwIDgwMCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPg0KPHBhdGggZmlsbD0iI2RlMjkxMCIgZD0ibTAsMGgxMjAwdjgwMGgtMTIwMHoiLz4NCjxwYXRoIGZpbGw9IiNmZmRlMDAiIGQ9Im0tMTYuNTc5Niw5OS42MDA3bDIuMzY4Ni04LjEwMzItNi45NTMtNC43ODgzIDguNDM4Ni0uMjUxNCAyLjQwNTMtOC4wOTI0IDIuODQ2Nyw3Ljk0NzkgOC40Mzk2LS4yMTMxLTYuNjc5Miw1LjE2MzQgMi44MTA2LDcuOTYwNy02Ljk3NDctNC43NTY3LTYuNzAyNSw1LjEzMzF6IiB0cmFuc2Zvcm09Im1hdHJpeCg5LjkzMzUyIC4yNzc0NyAtLjI3NzQ3IDkuOTMzNTIgMzI0LjI5MjUgLTY5NS4yNDE1KSIvPg0KPHBhdGggZmlsbD0iI2ZmZGUwMCIgaWQ9InN0YXIiIGQ9Im0zNjUuODU1MiwzMzIuNjg5NWwyOC4zMDY4LDExLjM3NTcgMTkuNjcyMi0yMy4zMTcxLTIuMDcxNiwzMC40MzY3IDI4LjI1NDksMTEuNTA0LTI5LjU4NzIsNy40MzUyLTIuMjA5NywzMC40MjY5LTE2LjIxNDItMjUuODQxNS0yOS42MjA2LDcuMzAwOSAxOS41NjYyLTIzLjQwNjEtMTYuMDk2OC0yNS45MTQ4eiIvPg0KPGcgZmlsbD0iI2ZmZGUwMCI+DQo8cGF0aCBkPSJtNTE5LjA3NzksMTc5LjMxMjlsLTMwLjA1MzQtNS4yNDE4LTE0LjM5NDUsMjYuODk3Ni00LjMwMTctMzAuMjAyMy0zMC4wMjkzLTUuMzc4MSAyNy4zOTQ4LTEzLjQyNDItNC4xNjQ3LTMwLjIyMTUgMjEuMjMyNiwyMS45MDU3IDI3LjQ1NTQtMTMuMjk5OC0xNC4yNzIzLDI2Ljk2MjcgMjEuMTMzMSwyMi4wMDE3eiIvPg0KPHBhdGggZD0ibTQ1NS4yNTkyLDMxNS45Nzk1bDkuMzczNC0yOS4wMzE0LTI0LjYzMjUtMTcuOTk3OCAzMC41MDctLjA1NjYgOS41MDUtMjguOTg4NiA5LjQ4MSwyOC45OTY0IDMwLjUwNywuMDgxOC0yNC42NDc0LDE3Ljk3NzQgOS4zNDkzLDI5LjAzOTItMjQuNzE0LTE3Ljg4NTgtMjQuNzI4OCwxNy44NjUzeiIvPg0KPC9nPg0KPHVzZSB4bGluazpocmVmPSIjc3RhciIgdHJhbnNmb3JtPSJtYXRyaXgoLjk5ODYzIC4wNTIzNCAtLjA1MjM0IC45OTg2MyAxOS40MDAwNSAtMzAwLjUzNjgxKSIvPg0KPC9zdmc+DQo=';var fr = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA5MDAgNjAwIj4NCjxwYXRoIGZpbGw9IiNlZDI5MzkiIGQ9Im0wLDBoOTAwdjYwMGgtOTAweiIvPg0KPHBhdGggZmlsbD0iI2ZmZiIgZD0ibTAsMGg2MDB2NjAwaC02MDB6Ii8+DQo8cGF0aCBmaWxsPSIjMDAyMzk1IiBkPSJtMCwwaDMwMHY2MDBoLTMwMHoiLz4NCjwvc3ZnPg0K';var in = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgNDUwIDMwMCIgaGVpZ2h0PSI4MDAiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4NCjxwYXRoIGZpbGw9IiNmZjk5MzIiIGQ9Im0wLDBoNDUwdjEwMGgtNDUweiIvPg0KPHBhdGggZmlsbD0iI2ZmZiIgZD0ibTAsMTAwaDQ1MHYxMDBoLTQ1MHoiLz4NCjxwYXRoIGZpbGw9IiMxMjg4MDciIGQ9Im0wLDIwMGg0NTB2MTAwaC00NTB6Ii8+DQo8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyMjUgMTUwKSI+DQo8Y2lyY2xlIGZpbGw9IiMwMDAwODAiIHI9IjQ2LjUiLz4NCjxjaXJjbGUgZmlsbD0iI2ZmZiIgcj0iNDEiLz4NCjxnIGlkPSI4Ij4NCjxnIGlkPSI0Ij4NCjxnIGlkPSIyIj4NCjxnIGlkPSIxIj4NCjxjaXJjbGUgZmlsbD0iIzAwMDA4MCIgcj0iMi41IiB0cmFuc2Zvcm09Im1hdHJpeCguOTkxNDQgLjEzMDUzIC0uMTMwNTMgLjk5MTQ0IDQwLjY0OTI0IDUuMzUxNTcpIi8+DQo8cGF0aCBmaWxsPSIjMDAwMDgwIiBkPSJtMCw0MWwxLjUtMjRxLTEtMy0xLjUtMTctLjUsMTQtMS41LDE3eiIvPg0KPC9nPg0KPHVzZSB4bGluazpocmVmPSIjMSIgdHJhbnNmb3JtPSJyb3RhdGUoMTUpIi8+DQo8L2c+DQo8dXNlIHhsaW5rOmhyZWY9IiMyIiB0cmFuc2Zvcm09InJvdGF0ZSgzMCkiLz4NCjwvZz4NCjx1c2UgeGxpbms6aHJlZj0iIzQiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPg0KPC9nPg0KPHVzZSB4bGluazpocmVmPSIjOCIgdHJhbnNmb3JtPSJyb3RhdGUoMTIwKSIvPg0KPHVzZSB4bGluazpocmVmPSIjOCIgdHJhbnNmb3JtPSJtYXRyaXgoLS41IC0uODY2MDMgLjg2NjAzIC0uNSAwIDApIi8+DQo8Y2lyY2xlIGZpbGw9IiMwMDAwODAiIHI9IjgiLz4NCjwvZz4NCjwvc3ZnPg0K';var bd = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAwIDYwMCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPg0KPHBhdGggZmlsbD0iIzAwNmE0ZSIgZD0ibTAsMGgxMDAwdjYwMGgtMTAwMHoiLz4NCjxjaXJjbGUgZmlsbD0iI2Y0MmE0MSIgY3g9IjQ1MCIgY3k9IjMwMCIgcj0iMjAwIi8+DQo8L3N2Zz4NCg==';var hn = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBoZWlnaHQ9IjUwMCIgdmlld0JveD0iMCAwIDcyIDM2IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+DQo8cGF0aCBmaWxsPSIjMDA3M2NmIiBkPSJtMCwwaDcydjM2aC03MnoiLz4NCjxwYXRoIGZpbGw9IiNmZmYiIGQ9Im0wLDEyaDcydjEyaC03MnoiLz4NCjxnIGZpbGw9IiMwMDczY2YiIGlkPSJzdGFyIiB0cmFuc2Zvcm09Im1hdHJpeCgyIDAgMCAyIDM2IDE4KSI+DQo8ZyBpZD0iY29uZSI+DQo8cGF0aCBpZD0idHJpYW5nbGUiIGQ9Im0wLDAgMCwxIC41LDB6IiB0cmFuc2Zvcm09Im1hdHJpeCguOTUxMDYgLjMwOTAyIC0uMzA5MDIgLjk1MTA2IDAgLTEpIi8+DQo8dXNlIHhsaW5rOmhyZWY9IiN0cmlhbmdsZSIgdHJhbnNmb3JtPSJzY2FsZSgtMSAxKSIvPg0KPC9nPg0KPHVzZSB4bGluazpocmVmPSIjY29uZSIgdHJhbnNmb3JtPSJyb3RhdGUoNzIpIi8+DQo8dXNlIHhsaW5rOmhyZWY9IiNjb25lIiB0cmFuc2Zvcm09Im1hdHJpeCguMzA5MDIgLS45NTEwNiAuOTUxMDYgLjMwOTAyIDAgMCkiLz4NCjx1c2UgeGxpbms6aHJlZj0iI2NvbmUiIHRyYW5zZm9ybT0icm90YXRlKDE0NCkiLz4NCjx1c2UgeGxpbms6aHJlZj0iI2NvbmUiIHRyYW5zZm9ybT0ibWF0cml4KC0uODA5MDIgLS41ODc3OSAuNTg3NzkgLS44MDkwMiAwIDApIi8+DQo8L2c+DQo8dXNlIHhsaW5rOmhyZWY9IiNzdGFyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMCAtMy4yKSIvPg0KPHVzZSB4bGluazpocmVmPSIjc3RhciIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTAgMi44KSIvPg0KPHVzZSB4bGluazpocmVmPSIjc3RhciIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEwIC0zLjIpIi8+DQo8dXNlIHhsaW5rOmhyZWY9IiNzdGFyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTAgMi44KSIvPg0KPC9zdmc+DQo=';
    var cImg = ['<img class="ic" alt="Узбекистан" src="'+uz+'" /><span class="instok">Узбекистан</span>','<img class="ic" alt="Румыния" src="'+ro+'" /><span class="instok">Румыния</span>','<img class="ic" alt="Китай" src="'+cn+'" /><span class="instok">Китай</span>','<img class="ic" alt="Франция" src="'+fr+'" /><span class="instok">Франция</span>','<img class="ic" alt="Индия" src="'+in+'" /><span class="instok">Индия</span>','<img class="ic" alt="Бангладеш" src="'+bd+'" /><span class="instok">Бангладеш</span>','<img class="ic" alt="Гондурас" src="'+hn+'" /><span class="instok">Гондурас</span>',];

    for (var q = 0; q < cImg.length; q++) {
        var cQ = document.getElementById('c' + q);
        if (cQ != null)
            cQ.innerHTML = cImg[q];
    }
}

function preBrandImg() {
    var bImg = ['<img class="ib" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADEAAAARCAYAAAB0MEQqAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAGISURBVEhL7ZUxbsMwDEV72lwmZ8gJvHv26tFbpmxePHnJkkXFS/QS2lUrdwiQFvkAIYmkKH6Ksj/SP8CbxKtgQaJt23Q4HL5I13XZYzuOx2Pa7/dXIe4zsSBBwrvd7n64gg7bb+A+CnA6nbL2OSiSmKYpa1K6XC73hOZ5ztoHom+EBSjhfD7n2QPoSvHFT/bNJNYJ9X1/J8cYW069NuLpjx8jAkiMc93DPJ5fs4MiCUbFA+lxQXvox5yeZ02iwIQR5hSCER90EJG0Z2KP70jU7GDzm2iaJnul6xzdOI5Zc6s++4V7hSTijVFldHEfdmPX7KLaTmBd6RJZ10K9kMQwDFlze0/oSrHwr9nFJhIm4G3ox/XiG0V4oDBG9GGOjngxBkIL1uyiSIIr41BF9r4Lqsna77+9GltlCwmgH+1BYuTA2i9YzQ6KJNbCpvUPy3eBzTF+Alkj4jsSFiDGimfV7GBBgiTilSml7zrARnLeUIR7he1RAvGJQaxYCFGzL0j8VbxJvAZS+gTU0dKJ66sAjwAAAABJRU5ErkJggg=="/><span class="instok">Бифри</span>','<img class="ib" src="//farm1.staticflickr.com/681/21161771328_edc2ebf725_o.jpg"/><span class="instok">Дороти Перкинс</span>','<img class="ib" src="//farm1.staticflickr.com/658/20743578244_a8b8fe193d_o.jpg"/><span class="instok">Миссгайдед</span>','<img class="ib" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJoAAAARCAYAAAAliLUMAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAQlSURBVGhD7Zc9UuNAEIX3tL4MZ/AJyB2TEpIROXNCREJCoq2P1Uc9Ny1ZgPBWGb+qKWl6+n/ejOw/wxVXnAFXol1xFlyJdsVZ8IFoj4+Pw3a7HW5ubt7G7e3t8Pz8PK6uh4eHh7c4PL8C7dfO7XA4vNVs/cTY7/fj6nogb3zvdrtR8jlo343P9pR65/JgDb9Le93pHxHt/v5+2Gw27w1mOH95eRm11gGx8MvzKzDXp6enUfJ9QLKufsbaZCNv4rDJXwH25oYfh7K7u7tR8zSsdwoevKW9tm+pf0Q0FHD4+vo6Sv6xE6MpQiwJDkmXEhW9JT4r0ZY2YQ76TFJxOyCbIsTa9QN8ntJHh7wqQfgiIWcfl+IU0aZAjt0tt4hoKEAuHUC62kzWZLlFJRHRR8apkryMvJ7RTzuSVlefc6ddUhAjbWg0IEfm2UBiVFlCn6xzu4mfqF+drJF1ZPrEdopw2JtrwhoZwDyzHuPYK2MBZDkH+rAP1G9d5pA9Yo48ZUdE4yRrbLEklUkCHbFGg53bbJuAPbL0a3A3VRuLZ45Ol2xCe2xojg1iuDn4yLm3kzEr3CR09E2T3RCxRv3qYAvMH5+s8UyfFTWGw1z8dOKXOf4ENgzBO3b4dM08gT6VZb3Zd1H1wYc/A7DVTUfZ4efE3zF5EuspsgkEFBSOzOAkyZynkBDmUNcT2ucPX2Mok1jOyYccjdOBGzxvIuwZbtxa9Xc6An/m3q0D7RmZJ++1Z5mb+XfEc5ijIAdskLM3vHe1eSGlvmiJJnLDddwRBJgk6JqoncGrH2J5RTu6OKL6A9UnwI955PsUsv7ccGxBFwOYM1hSf6fjAXfU9US1zzzrFyiJUEkBjOWz1kYM5MQ0rvqOtEt98U40GqxRQsfKu6sYpG1tAqiNdp7JYe/NWdcrXPe2AjYxbSSv+vUzmEAPnSQbSPla9VcdD7T1dD4SczHII29t8kaeRE4wZz0/g2lPDNaJmXGdO/wTmfpi8s8AjGekTJgYTcGZTWKjATLm2IraaOc8gQWSLMO4rldkU83VvJIoyNVjzEGiEpumZ21Zi3G+U3/VsV4PWhc30cUA+sn9AsjN2zwFcv10B0mf5m4v6a17xVxyVn1wRDQ2SKUcJiFkfurkb5auCbXRziWSm2wR5lGbIrSv+Xb65po5TgGd9MfAPpu2Rv1VB4Ixz/p9duhiAPbQ3CQt8NPKyIMIahze0YNIOTf3rN/nHDHBh99oAAUa44mdAomgVxMH2KUc5qcv5zxF9Vd9JNIfOlN5gNq4U8APteMzc674Tv2g6vCOP/NkfS5+tRfI6ho+6UESSlRdbiZk7o3+EuhAuK7+Tr8l2qVAInjyfiPYdPrgYeMA/Q9cNNFsLiTLz8hvAjcLPWAs+enwU7hoovkJ+O2gB/Xzdl4Mw1+nrVefahUcFgAAAABJRU5ErkJggg=="/><span class="instok">Соня Рикель</span>','<img class="ib" src="//farm1.staticflickr.com/611/21372741291_d3e01f68fa_o.jpg"/><span class="instok">Томми Хилфигер Деним</span>','<img class="ib" src="//farm6.staticflickr.com/5707/20752693223_506e850a5c_o.jpg"/><span class="instok">Том Тэйлор</span>','<img class="ib" src="//farm6.staticflickr.com/5717/21176467128_fb1ab83a5c_o.jpg"/><span class="instok">Рибок</span>'];
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