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
            var arImg = ['//farm6.staticflickr.com/5764/20744380573_07df1081f0_n.jpg','//farm1.staticflickr.com/569/21365494365_2ca29680b3_n.jpg','//farm1.staticflickr.com/695/21373781261_8f74591375_n.jpg','//farm6.staticflickr.com/5650/21373777011_6e0e7e4283_n.jpg'];
        } else {
            var arImg = ['//farm6.staticflickr.com/5764/20744380573_e2c469ddb0_o.jpg','//farm1.staticflickr.com/569/21365494365_665c7a93b3_o.jpg','//farm1.staticflickr.com/695/21373781261_7396c0b98e_o.jpg','//farm6.staticflickr.com/5650/21373777011_8074e3eeab_o.jpg'];

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
            a.href = 'http://кликай-тут.рф/wiakia/10229.html';
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
    var rImg = ['//farm6.staticflickr.com/5737/21192978738_4c14dce15b_n.jpg','//farm6.staticflickr.com/5725/21582734136_bc98f23450_n.jpg','//farm6.staticflickr.com/5679/21749821110_0e4344821a_n.jpg','//farm1.staticflickr.com/739/21190270333_fafcff4387_n.jpg','//farm6.staticflickr.com/5767/21928627492_f64c2b1ceb_n.jpg','//farm6.staticflickr.com/5724/21755320328_1c3d5a4494_n.jpg','//farm1.staticflickr.com/565/21037313983_925c5aafee_n.jpg','//farm1.staticflickr.com/781/21605153996_621045947b_n.jpg','//farm1.staticflickr.com/729/21371445772_bec0dd1621_n.jpg','//farm6.staticflickr.com/5674/21696941258_ebd2a39152_n.jpg','//farm6.staticflickr.com/5644/21491943560_77d96b4a89_n.jpg','//farm1.staticflickr.com/671/22122231528_f7d9d4c211_n.jpg','//farm6.staticflickr.com/5698/22077896242_e86cc4e625_n.jpg','//farm1.staticflickr.com/574/21457586602_1a6e2f18a1_n.jpg','//farm1.staticflickr.com/643/20841713493_6f5824046c_n.jpg','//farm1.staticflickr.com/668/21967268062_9d72213eb5_n.jpg','//farm6.staticflickr.com/5628/21223637849_6492237da3_n.jpg','//farm1.staticflickr.com/690/21721555882_8ba27a74fd_n.jpg','//farm1.staticflickr.com/681/21222339340_940cb1fa33_n.jpg','//farm6.staticflickr.com/5655/22061387416_666143b224_n.jpg'];
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
    var tr = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBoZWlnaHQ9IjgwMCIgdmlld0JveD0iMCAwIDM2MCAyNDAiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4NCjxwYXRoIGZpbGw9IiNlMzBhMTciIGQ9Im0wLDBoMzYwdjI0MGgtMzYweiIvPg0KPGNpcmNsZSBmaWxsPSIjZmZmIiBjeD0iMTIwIiBjeT0iMTIwIiByPSI2MCIvPg0KPGNpcmNsZSBmaWxsPSIjZTMwYTE3IiBjeD0iMTM1IiBjeT0iMTIwIiByPSI0OCIvPg0KPGcgZmlsbD0iI2ZmZiIgdHJhbnNmb3JtPSJtYXRyaXgoMCAtMzAgMzAgMCAyMDAuNyAxMjApIj4NCjxnIGlkPSJnMiI+DQo8cGF0aCBpZD0iZzEiIGQ9Im0wLDAgMCwxIC41LDB6IiB0cmFuc2Zvcm09Im1hdHJpeCguOTUxMDYgLjMwOTAyIC0uMzA5MDIgLjk1MTA2IDAgLTEpIi8+DQo8dXNlIHhsaW5rOmhyZWY9IiNnMSIgdHJhbnNmb3JtPSJzY2FsZSgtMSAxKSIvPg0KPC9nPg0KPHVzZSB4bGluazpocmVmPSIjZzIiIHRyYW5zZm9ybT0icm90YXRlKDcyKSIvPg0KPHVzZSB4bGluazpocmVmPSIjZzIiIHRyYW5zZm9ybT0ibWF0cml4KC4zMDkwMiAtLjk1MTA2IC45NTEwNiAuMzA5MDIgMCAwKSIvPg0KPHVzZSB4bGluazpocmVmPSIjZzIiIHRyYW5zZm9ybT0icm90YXRlKDE0NCkiLz4NCjx1c2UgeGxpbms6aHJlZj0iI2cyIiB0cmFuc2Zvcm09Im1hdHJpeCgtLjgwOTAyIC0uNTg3NzkgLjU4Nzc5IC0uODA5MDIgMCAwKSIvPg0KPC9nPg0KPC9zdmc+DQo=';var cn = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjAwIDgwMCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPg0KPHBhdGggZmlsbD0iI2RlMjkxMCIgZD0ibTAsMGgxMjAwdjgwMGgtMTIwMHoiLz4NCjxwYXRoIGZpbGw9IiNmZmRlMDAiIGQ9Im0tMTYuNTc5Niw5OS42MDA3bDIuMzY4Ni04LjEwMzItNi45NTMtNC43ODgzIDguNDM4Ni0uMjUxNCAyLjQwNTMtOC4wOTI0IDIuODQ2Nyw3Ljk0NzkgOC40Mzk2LS4yMTMxLTYuNjc5Miw1LjE2MzQgMi44MTA2LDcuOTYwNy02Ljk3NDctNC43NTY3LTYuNzAyNSw1LjEzMzF6IiB0cmFuc2Zvcm09Im1hdHJpeCg5LjkzMzUyIC4yNzc0NyAtLjI3NzQ3IDkuOTMzNTIgMzI0LjI5MjUgLTY5NS4yNDE1KSIvPg0KPHBhdGggZmlsbD0iI2ZmZGUwMCIgaWQ9InN0YXIiIGQ9Im0zNjUuODU1MiwzMzIuNjg5NWwyOC4zMDY4LDExLjM3NTcgMTkuNjcyMi0yMy4zMTcxLTIuMDcxNiwzMC40MzY3IDI4LjI1NDksMTEuNTA0LTI5LjU4NzIsNy40MzUyLTIuMjA5NywzMC40MjY5LTE2LjIxNDItMjUuODQxNS0yOS42MjA2LDcuMzAwOSAxOS41NjYyLTIzLjQwNjEtMTYuMDk2OC0yNS45MTQ4eiIvPg0KPGcgZmlsbD0iI2ZmZGUwMCI+DQo8cGF0aCBkPSJtNTE5LjA3NzksMTc5LjMxMjlsLTMwLjA1MzQtNS4yNDE4LTE0LjM5NDUsMjYuODk3Ni00LjMwMTctMzAuMjAyMy0zMC4wMjkzLTUuMzc4MSAyNy4zOTQ4LTEzLjQyNDItNC4xNjQ3LTMwLjIyMTUgMjEuMjMyNiwyMS45MDU3IDI3LjQ1NTQtMTMuMjk5OC0xNC4yNzIzLDI2Ljk2MjcgMjEuMTMzMSwyMi4wMDE3eiIvPg0KPHBhdGggZD0ibTQ1NS4yNTkyLDMxNS45Nzk1bDkuMzczNC0yOS4wMzE0LTI0LjYzMjUtMTcuOTk3OCAzMC41MDctLjA1NjYgOS41MDUtMjguOTg4NiA5LjQ4MSwyOC45OTY0IDMwLjUwNywuMDgxOC0yNC42NDc0LDE3Ljk3NzQgOS4zNDkzLDI5LjAzOTItMjQuNzE0LTE3Ljg4NTgtMjQuNzI4OCwxNy44NjUzeiIvPg0KPC9nPg0KPHVzZSB4bGluazpocmVmPSIjc3RhciIgdHJhbnNmb3JtPSJtYXRyaXgoLjk5ODYzIC4wNTIzNCAtLjA1MjM0IC45OTg2MyAxOS40MDAwNSAtMzAwLjUzNjgxKSIvPg0KPC9zdmc+DQo=';var mg = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA5MDAgNjAwIj4NCjxwYXRoIGZpbGw9IiNmZmYiIGQ9Im0wLDBoOTAwdjYwMGgtOTAweiIvPg0KPHBhdGggZmlsbD0iI2ZjM2QzMiIgZD0ibTMwMCwwaDYwMHY2MDBoLTYwMHoiLz4NCjxwYXRoIGZpbGw9IiMwMDdlM2EiIGQ9Im0zMDAsMzAwaDkwMHYzMDBoLTkwMHoiLz4NCjwvc3ZnPg0K';var bd = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAwIDYwMCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPg0KPHBhdGggZmlsbD0iIzAwNmE0ZSIgZD0ibTAsMGgxMDAwdjYwMGgtMTAwMHoiLz4NCjxjaXJjbGUgZmlsbD0iI2Y0MmE0MSIgY3g9IjQ1MCIgY3k9IjMwMCIgcj0iMjAwIi8+DQo8L3N2Zz4NCg==';var ph = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA5MDAgNDUwIj4NCjxwYXRoIGZpbGw9IiMwMDM4YTgiIGQ9Im0wLDBoOTAwdjQ1MGgtOTAweiIvPg0KPHBhdGggZmlsbD0iI2NlMTEyNiIgZD0ibTAsMjI1aDkwMHYyMjVoLTkwMHoiLz4NCjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0gMzg5Ljk4MywyMjUuMDAwNCAwLDQ1MCA3LjgxNDI2NjNlLTQsMCAzODkuOTgzLDIyNS4wMDA0IHoiLz4NCjxnIGZpbGw9IiNmY2QxMTYiPg0KPHBhdGggZD0ibTE1MS45MTU3LDE4Mi41MzgyIDguMDg0LTMwLjk4OC01LjM4NzctNi43MS02LjY0MzYsMzcuNjk4IDMuOTQ3Miwwem0tMTYuNzg5NywwLTQuNjg1My00MS45OTggOS40NTA0LTEwLjU0IDkuMzI2MywxMC41NC00LjcwNTgsNDEuOTk4LTkuMzg1NSwwem0tNy40MTA0LDAtNy43MTU5LTMwLjk4OCA1LjQ3NS02LjcxIDYuMTk0MywzNy42OTgtMy45NTM1LDB6Ii8+DQo8Y2lyY2xlIGN4PSI4Mi41MzEiIGN5PSIxNDkuODA4IiByPSIzMC45MTYiIHRyYW5zZm9ybT0ibWF0cml4KDEuNDU1NTggMCAwIDEuNDU1NTggMTkuODY5OTkgNi45NDMxMykiLz4NCjxwYXRoIGQ9Im0xMjguMDgzOCwyNjcuNDYxOC04LjA4NCwzMC45ODggNS4zODc3LDYuNzEgNi42NDM2LTM3LjY5OC0zLjk0NzIsMHptMTYuNzg5NywwIDQuNjg1Myw0MS45OTgtOS40NTAzLDEwLjU0LTkuMzI2My0xMC41NCA0LjcwNTgtNDEuOTk4IDkuMzg1NSwwem03LjQxMDQsMCA3LjcxNTksMzAuOTg4LTUuNDc1MSw2LjcxLTYuMTk0My0zNy42OTggMy45NTM1LDB6Ii8+DQo8cGF0aCBkPSJtMTgyLjQ2MTYsMjM2LjkxNiAzMC45ODgsOC4wODQgNi43MS01LjM4NzctMzcuNjk4LTYuNjQzNiAwLDMuOTQ3MnptMC0xNi43ODk3IDQxLjk5OC00LjY4NTMgMTAuNTQsOS40NTA0LTEwLjU0LDkuMzI2My00MS45OTgtNC43MDU4IDAtOS4zODU1em0wLTcuNDEwNCAzMC45ODgtNy43MTU5IDYuNzEsNS40NzUxLTM3LjY5OCw2LjE5NDMgMC0zLjk1MzV6Ii8+DQo8Y2lyY2xlIGN4PSI4Mi41MzEiIGN5PSIxNDkuODA4IiByPSIzMC45MTYiIHRyYW5zZm9ybT0ibWF0cml4KDAgMS40NTU1OCAtMS40NTU1OCAwIDM1OC4wNTY2NSAxMDQuODcwMjEpIi8+DQo8cGF0aCBkPSJtOTcuNTM4LDIxMy4wODQtMzAuOTg4LTguMDg0bC02LjcxLDUuMzg3NyAzNy42OTgsNi42NDM2di0zLjk0NzJ6bTAsMTYuNzg5Ny00MS45OTgsNC42ODUzLTEwLjU0LTkuNDUwNCAxMC41NC05LjMyNjMgNDEuOTk4LDQuNzA1OCAwLDkuMzg1NXptMCw3LjQxMDRsLTMwLjk4OCw3LjcxNTktNi43MS01LjQ3NTEgMzcuNjk4LTYuMTk0M3YzLjk1MzV6Ii8+DQo8cGF0aCBkPSJtMTE4LjQwMDYsMTg2LjU0OTEtMTYuMTk1NS0yNy42MjgxLTguNTU0NC0uOTM1IDIxLjk1ODgsMzEuMzU0MiAyLjc5MTEtMi43OTExem0tMTEuODcyMSwxMS44NzIxLTMzLjAxLTI2LjM4NDEtLjc3MDUtMTQuMTM1MyAxNC4wNDc2LC44NTgyIDI2LjM2OTYsMzMuMDI0Ni02LjYzNjYsNi42MzY2em0tNS4yMzk5LDUuMjM5OS0yNy4zNjc4LTE2LjQ1NTgtLjg3MzItOC42MTYxIDMxLjAzNjYsMjIuMjc2NS0yLjc5NTUsMi43OTU1eiIvPg0KPGNpcmNsZSBjeD0iODIuNTMxIiBjeT0iMTQ5LjgwOCIgcj0iMzAuOTE2IiB0cmFuc2Zvcm09Im1hdHJpeCgxLjAyOTI1IC0xLjAyOTI1IDEuMDI5MjUgMS4wMjkyNSAtOTkuMTM0MzIgMTU1Ljc1NTEpIi8+DQo8cGF0aCBkPSJtMTYxLjU5ODksMjYzLjQ1MDkgMTYuMTk1NSwyNy42MjgxIDguNTU0NCwuOTM1LTIxLjk1ODgtMzEuMzU0Mi0yLjc5MTEsMi43OTExem0xMS44NzIxLTExLjg3MjEgMzMuMDEwMSwyNi4zODQxIC43NzA1LDE0LjEzNTMtMTQuMDQ3Ni0uODU4Mi0yNi4zNjk1LTMzLjAyNDYgNi42MzY2LTYuNjM2NnptNS4yMzk5LTUuMjM5OSAyNy4zNjc4LDE2LjQ1NTggLjg3MzIsOC42MTYxLTMxLjAzNjYtMjIuMjc2NSAyLjc5NTUtMi43OTU1eiIvPg0KPHBhdGggZD0ibTE3OC40NTA2LDIwMy40MDA4IDI3LjYyODEtMTYuMTk1NSAuOTM1LTguNTU0NC0zMS4zNTQyLDIxLjk1ODggMi43OTExLDIuNzkxMXptLTExLjg3MjEtMTEuODcyMSAyNi4zODQxLTMzLjAxMDEgMTQuMTM1My0uNzcwNS0uODU4MiwxNC4wNDc2LTMzLjAyNDYsMjYuMzY5Ni02LjYzNjYtNi42MzY2em0tNS4yMzk5LTUuMjM5OSAxNi40NTU4LTI3LjM2NzggOC42MTYxLS44NzMyLTIyLjI3NjUsMzEuMDM2Ni0yLjc5NTUtMi43OTU1eiIvPg0KPGNpcmNsZSBjeD0iODIuNTMxIiBjeT0iMTQ5LjgwOCIgcj0iMzAuOTE2IiB0cmFuc2Zvcm09Im1hdHJpeCgxLjAyOTI1IDEuMDI5MjUgLTEuMDI5MjUgMS4wMjkyNSAyMDkuMjQ0NjkgLTE0LjEzNDA4KSIvPg0KPHBhdGggZD0ibTEwMS41NDg5LDI0Ni41OTkyLTI3LjYyODEsMTYuMTk1Ni0uOTM1LDguNTU0NCAzMS4zNTQyLTIxLjk1ODgtMi43OTExLTIuNzkxMXptMTEuODcyMSwxMS44NzIxLTI2LjM4NDEsMzMuMDEtMTQuMTM1MywuNzcwNSAuODU4Mi0xNC4wNDc2IDMzLjAyNDYtMjYuMzY5NSA2LjYzNjYsNi42MzY2em01LjIzOTksNS4yMzk5LTE2LjQ1NTgsMjcuMzY3OC04LjYxNjEsLjg3MzIgMjIuMjc2NC0zMS4wMzY2IDIuNzk1NSwyLjc5NTV6Ii8+DQo8cGF0aCBkPSJtMjk1LjUxMTksMjQxLjI3NDIgMTEuOTE3NS0xNi4yNDg5LTExLjk1MDQtMTYuMjI0OCAxOS4xMzY0LDYuMzEzMSAxMS43Mzc4LTE2LjM3OTItLjA3OTIsMjAuMTUwNiAxOS4yMDQ5LDYuMTAxOS0xOS4xOTIyLDYuMTQwNyAuMTE4NywyMC4xNTA0LTExLjc3MDctMTYuMzU1NS0xOS4xMjM3LDYuMzUxN3oiLz4NCjxwYXRoIGQ9Im02MC43NDMzLDczLjE1MjktMjAuMDMwOC0yLjE5NjQtOC4wNzU5LDE4LjQ2MTctNC4xMDA5LTE5LjcyOTItMjAuMDUzNy0xLjk3NTcgMTcuNDkwNi0xMC4wMDY3LTQuMzE4LTE5LjY4MjkgMTQuOTE0MSwxMy41NTA2IDE3LjM5MTQtMTAuMTc4LTguMjc4OSwxOC4zNzE1IDE1LjA2MjYsMTMuMzg1OHoiLz4NCjxwYXRoIGQ9Im02MC43NDMzLDM3Ni44NDcxLTIwLjAzMDgsMi4xOTY0LTguMDc1OS0xOC40NjE3LTQuMTAwOSwxOS43MjkyLTIwLjA1MzcsMS45NzU3IDE3LjQ5MDYsMTAuMDA2Ny00LjMxOCwxOS42ODI5IDE0LjkxNDEtMTMuNTUwNiAxNy4zOTE0LDEwLjE3OC04LjI3ODktMTguMzcxNSAxNS4wNjI2LTEzLjM4NTh6Ii8+DQo8L2c+DQo8L3N2Zz4NCg==';var id = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2MDAgNDAwIj4NCjxwYXRoIGZpbGw9IiNjZTExMjYiIGQ9Im0wLDBoNjAwdjIwMGgtNjAweiIvPg0KPHBhdGggZmlsbD0iI2ZmZiIgZD0ibTAsMjAwaDYwMHYyMDBoLTYwMHoiLz4NCjwvc3ZnPg0K';
    var cImg = ['<img class="ic" alt="Турция" src="'+tr+'" /><span class="instok">Турция</span>','<img class="ic" alt="Китай" src="'+cn+'" /><span class="instok">Китай</span>','<img class="ic" alt="Мадагаскар" src="'+mg+'" /><span class="instok">Мадагаскар</span>','<img class="ic" alt="Бангладеш" src="'+bd+'" /><span class="instok">Бангладеш</span>','<img class="ic" alt="Филиппины" src="'+ph+'" /><span class="instok">Филиппины</span>','<img class="ic" alt="Китай" src="'+cn+'" /><span class="instok">Китай</span>','<img class="ic" alt="Китай" src="'+cn+'" /><span class="instok">Китай</span>','<img class="ic" alt="Индонезия" src="'+id+'" /><span class="instok">Индонезия</span>',];

    for (var q = 0; q < cImg.length; q++) {
        var cQ = document.getElementById('c' + q);
        if (cQ != null)
            cQ.innerHTML = cImg[q];
    }
}

function preBrandImg() {
    var bImg = ['<img class="ib" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAARCAYAAAC8XK78AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAEMSURBVEhL7ZMxkoMwDEVzWi7DGTgBPTUtJR0VHQ0VDbUzL/EnQpEnOzQpNm9GY0eSzZel3NKX+Qk4Cei6LjVNExoxz7ZtR3zf9+x9YmPexnHMWU4AwaqqUl3Xb9a2bc56gSjysb7vs/fJuq5HzNtHARz+CxLHGVYP98jmeQ4LuSxgmqZHLq/ApezxlSAHAb5VoQBWb/TUoo8uy3KIidoE5BAfhiF7XlwSQBV6fqHfvkJQ9RGXWsDAkcelEsgenx9GiS29ziUB+hirNfksTDx+O/mWUABV0C9voH6S69F5O4z6q5aKCgVEpso0fNHEq1r73NzpX8VyEsCgobRkYPcRPq47S5wEfIP/LiClO8wvwtaQbQm8AAAAAElFTkSuQmCC"/><span class="instok">ЕА7</span>','<img class="ib" src="//farm6.staticflickr.com/5706/21279556626_44241f0975_o.jpg"/><span class="instok">Саломон</span>','<img class="ib" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHMAAAARCAYAAADuf5O3AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAALeSURBVFhH7ZY9juJAEEb3tFyGM3ACcmJSQjIiMhIiEhISVs/ah74ttd0DGq1mLT+pBd31X2U3/HouzIZlmDNiGeaMeA3zeDw+N5vN6EI+F7bb7bCk7qe43W5DP3a73Z+Tn8NrmIfD4bler19rtVr9tUc+F6xJ6n6K6/U69IaB/jSa1yyDI+HeAHlK3wUbGjJGT36/3yflgE4Fv56/M7zK1DAzRgtsv9KzKR18jMV4e5g0watXHQJwnlcV55zZeD61YSHb7/eDDHpyCkDOufJWPGz4ZAGN0S9nXI8ph7qfgjzxhU85n8+DfSsvMDfk6mAj2phb9Q/WpT3yOvSPhonM4DS5VaA+HCYybCnCwbH3KevJLRS/ytO/8dChcB8E8uQc+7RDT/ie+ynwgT1+gPy0P51OrzwcqHL0L5fL8N8j7QF5K0f7j13K8YFNPuzw0TBZSS0Q9IEMTJCEKNohSU8OnvFEopc5Gq8WWPPN5kvdT1FrdTgZF1n1Z+6+xVPxHZ610Q/26HBmTyv/bJh5FZlYXkc9OQNkz7kLPXM0Xv7rbuUF2kvdT1F9GlcfLPYsa0enyvkUz8UY1gbWrm++M+Tk49/MpNU0vnNmQcJTh1/lNcaYnD2xGTpwnnL3Ga/1FkI9a+mITdSvbyI3AxiXNxOdXOBbhb5vZy8+tlmbYE98b6W0gW8dJrLH4zEMhO+cWRR7lnubYoyvyvHPqsM2Z+1FPfzl9Ywv0XcLhoQ+Q8V3+gN8suecZqODL28V8/IazitTanx8oGNtxELuA0T91Qa+ZZhgkQahGPY2lyKUsZCln57cpio3nk0aG6bN1RY7fUjdJ77d2LsyL6i5sbwC0z7lLKn7Okyw3rQ3hjSHyeRxyGeF8/qXWHDOU0QB+kg4R4ckqwx6cq9g42curXiCX/LCHtBL3bpvYewxPfIghvUnxrf56Pbis6/954wc8FNjQHOYC/8nyzBnxDLM2fB8/gZyfyPEL7xz5wAAAABJRU5ErkJggg=="/><span class="instok">Труссарди Джинс</span>','<img class="ib" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGUAAAARCAYAAADEz2IYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAKmSURBVFhH7ZaxkuIwEETva/kZvoEvICcmJSQjIiMhIiEh0dXbdXPtZuR1cFXrwF01hSX1jFpuSeZPW7E4rKYsEKspC8SHKZfLpe12u7bdbr9iv9+3x+MxjH6DPjge9N1ut4HR2vl8/uCId71eB9Y36CME1a/mdZ6QmnnOOXp6CMack+0qUm+lS2AdVY3j8dher9fA+oeRKafTqW02m/fCCLWfz+fAal9t9StoEzLGa1U8f2kaE8TLhSYPwNE8rplAg9DTQ4gnTrarHELIduJ+v781eb7aaczIFBaUpMPhMBIKVNQhHr8gFyiwO+j3F571eIZDaNeC5GkOdPum4eTQX3FTjyM5c3JA6krIFHQ68p0JH6aIpKsDgyjqqERoAZq4tyC9sLmm8KxN0uP5tSmg2Y2a84KTMycHpK5EzxT0VbkjU7hStFCCZwzKRasQkxGMy9BcEC+fZ4JTovo/XV9E7qQezyFNCkF64KNV4btUHH69nTnE1AlOoIM65CWU6xvo40PPCUEoRAop8iX6mMIn9QU5H05+hMUR1OaEKBfjezyH+AoZk3oUfmJ/yxTXCUpTBBmUBSUC0Yo8TVoQv8Dr+K4AuShv67ojr8fLa4qg3xebeiokZ04OSF2JOSfF8TYFAyqCCnp/xUtUC9I/pRSX9bKtvNQho7kWE8zB2JJN4cao+rsfena+fyvoE34SAaoF6cNG/9Txz7bn9fqlmZPlJv4PU/y76JF/QHoc39jq731fwcgUTotM8EgnJWIKTEwuvw7MoJ98XTtZr6qvetnPgivN8Hzunh5HctTuhQxnrmqcgCNTMsjzzSl8fFMARRBEgiZ2aKIpaIdoNzmUr7Gsl22h1w/oR29P85QeITlq90KoxhTC1FiiNGXF72I1ZYFYTVkcWvsLSIMd8lIektcAAAAASUVORK5CYII="/><span class="instok">Спрингфилд</span>','<img class="ib" src="//farm6.staticflickr.com/5784/21177616718_89cc1d0da3_o.jpg"/><span class="instok">адидас Перформанс</span>','<img class="ib" src="//farm6.staticflickr.com/5784/21177616718_89cc1d0da3_o.jpg"/><span class="instok">адидас Перформанс</span>','<img class="ib" src="//farm6.staticflickr.com/5784/21177616718_89cc1d0da3_o.jpg"/><span class="instok">адидас Перформанс</span>','<img class="ib" src="//farm6.staticflickr.com/5784/21177616718_89cc1d0da3_o.jpg"/><span class="instok">адидас Перформанс</span>'];
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