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
            var arImg = ['//farm1.staticflickr.com/605/21177509898_6b602e1de0_n.jpg','//farm1.staticflickr.com/591/21365388245_50c279f46a_n.jpg','//farm1.staticflickr.com/718/21178466469_9676679450_n.jpg'];
        } else {
            var arImg = ['//farm1.staticflickr.com/605/21177509898_b1c105d6a1_o.jpg','//farm1.staticflickr.com/591/21365388245_c34f20c72e_o.jpg','//farm1.staticflickr.com/718/21178466469_81886094cd_o.jpg'];

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
            a.href = 'http://кликай-тут.рф/wiakia/9420.html';
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
    var rImg = ['//farm6.staticflickr.com/5627/21605507470_7156afc07e_n.jpg','//farm6.staticflickr.com/5659/21555847396_1a7af2d276_n.jpg','//farm6.staticflickr.com/5805/21804870489_aabf229d75_n.jpg','//farm6.staticflickr.com/5667/21377260748_64250ffb28_n.jpg','//farm1.staticflickr.com/588/20795967973_c8587d5342_n.jpg','//farm1.staticflickr.com/741/21592431355_e1cef1459c_n.jpg','//farm6.staticflickr.com/5706/21357788122_6ed170f8de_n.jpg','//farm6.staticflickr.com/5761/21747606131_af684455c2_n.jpg','//farm6.staticflickr.com/5727/21601947261_a02b0a0b47_n.jpg','//farm6.staticflickr.com/5833/20938486684_d81b60fbff_n.jpg','//farm1.staticflickr.com/733/21580748802_eb5f980df8_n.jpg','//farm6.staticflickr.com/5714/21230413989_f119845209_n.jpg','//farm1.staticflickr.com/758/21226918830_a8c7a0d58e_n.jpg','//farm1.staticflickr.com/650/21726661762_76caa6fdd2_n.jpg','//farm1.staticflickr.com/750/20790813623_73109db3b0_n.jpg','//farm6.staticflickr.com/5631/21551438359_70eaa149d5_n.jpg','//farm1.staticflickr.com/596/21734592629_26b0a08c33_n.jpg','//farm6.staticflickr.com/5735/21969688106_a5591f0673_n.jpg','//farm6.staticflickr.com/5757/21404639728_279a2a8294_n.jpg','//farm6.staticflickr.com/5764/21373454983_8baf6f8108_n.jpg'];
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
    var it = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBoZWlnaHQ9IjEwMDAiIHZpZXdCb3g9IjAgMCAzIDIiPg0KPHBhdGggZmlsbD0iIzAwOTI0NiIgZD0ibTAsMGgxdjJoLTF6Ii8+DQo8cGF0aCBmaWxsPSIjZmZmIiBkPSJtMSwwaDF2MmgtMXoiLz4NCjxwYXRoIGZpbGw9IiNjZTJiMzciIGQ9Im0yLDBoMXYyaC0xeiIvPg0KPC9zdmc+DQo=';var ph = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA5MDAgNDUwIj4NCjxwYXRoIGZpbGw9IiMwMDM4YTgiIGQ9Im0wLDBoOTAwdjQ1MGgtOTAweiIvPg0KPHBhdGggZmlsbD0iI2NlMTEyNiIgZD0ibTAsMjI1aDkwMHYyMjVoLTkwMHoiLz4NCjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0gMzg5Ljk4MywyMjUuMDAwNCAwLDQ1MCA3LjgxNDI2NjNlLTQsMCAzODkuOTgzLDIyNS4wMDA0IHoiLz4NCjxnIGZpbGw9IiNmY2QxMTYiPg0KPHBhdGggZD0ibTE1MS45MTU3LDE4Mi41MzgyIDguMDg0LTMwLjk4OC01LjM4NzctNi43MS02LjY0MzYsMzcuNjk4IDMuOTQ3Miwwem0tMTYuNzg5NywwLTQuNjg1My00MS45OTggOS40NTA0LTEwLjU0IDkuMzI2MywxMC41NC00LjcwNTgsNDEuOTk4LTkuMzg1NSwwem0tNy40MTA0LDAtNy43MTU5LTMwLjk4OCA1LjQ3NS02LjcxIDYuMTk0MywzNy42OTgtMy45NTM1LDB6Ii8+DQo8Y2lyY2xlIGN4PSI4Mi41MzEiIGN5PSIxNDkuODA4IiByPSIzMC45MTYiIHRyYW5zZm9ybT0ibWF0cml4KDEuNDU1NTggMCAwIDEuNDU1NTggMTkuODY5OTkgNi45NDMxMykiLz4NCjxwYXRoIGQ9Im0xMjguMDgzOCwyNjcuNDYxOC04LjA4NCwzMC45ODggNS4zODc3LDYuNzEgNi42NDM2LTM3LjY5OC0zLjk0NzIsMHptMTYuNzg5NywwIDQuNjg1Myw0MS45OTgtOS40NTAzLDEwLjU0LTkuMzI2My0xMC41NCA0LjcwNTgtNDEuOTk4IDkuMzg1NSwwem03LjQxMDQsMCA3LjcxNTksMzAuOTg4LTUuNDc1MSw2LjcxLTYuMTk0My0zNy42OTggMy45NTM1LDB6Ii8+DQo8cGF0aCBkPSJtMTgyLjQ2MTYsMjM2LjkxNiAzMC45ODgsOC4wODQgNi43MS01LjM4NzctMzcuNjk4LTYuNjQzNiAwLDMuOTQ3MnptMC0xNi43ODk3IDQxLjk5OC00LjY4NTMgMTAuNTQsOS40NTA0LTEwLjU0LDkuMzI2My00MS45OTgtNC43MDU4IDAtOS4zODU1em0wLTcuNDEwNCAzMC45ODgtNy43MTU5IDYuNzEsNS40NzUxLTM3LjY5OCw2LjE5NDMgMC0zLjk1MzV6Ii8+DQo8Y2lyY2xlIGN4PSI4Mi41MzEiIGN5PSIxNDkuODA4IiByPSIzMC45MTYiIHRyYW5zZm9ybT0ibWF0cml4KDAgMS40NTU1OCAtMS40NTU1OCAwIDM1OC4wNTY2NSAxMDQuODcwMjEpIi8+DQo8cGF0aCBkPSJtOTcuNTM4LDIxMy4wODQtMzAuOTg4LTguMDg0bC02LjcxLDUuMzg3NyAzNy42OTgsNi42NDM2di0zLjk0NzJ6bTAsMTYuNzg5Ny00MS45OTgsNC42ODUzLTEwLjU0LTkuNDUwNCAxMC41NC05LjMyNjMgNDEuOTk4LDQuNzA1OCAwLDkuMzg1NXptMCw3LjQxMDRsLTMwLjk4OCw3LjcxNTktNi43MS01LjQ3NTEgMzcuNjk4LTYuMTk0M3YzLjk1MzV6Ii8+DQo8cGF0aCBkPSJtMTE4LjQwMDYsMTg2LjU0OTEtMTYuMTk1NS0yNy42MjgxLTguNTU0NC0uOTM1IDIxLjk1ODgsMzEuMzU0MiAyLjc5MTEtMi43OTExem0tMTEuODcyMSwxMS44NzIxLTMzLjAxLTI2LjM4NDEtLjc3MDUtMTQuMTM1MyAxNC4wNDc2LC44NTgyIDI2LjM2OTYsMzMuMDI0Ni02LjYzNjYsNi42MzY2em0tNS4yMzk5LDUuMjM5OS0yNy4zNjc4LTE2LjQ1NTgtLjg3MzItOC42MTYxIDMxLjAzNjYsMjIuMjc2NS0yLjc5NTUsMi43OTU1eiIvPg0KPGNpcmNsZSBjeD0iODIuNTMxIiBjeT0iMTQ5LjgwOCIgcj0iMzAuOTE2IiB0cmFuc2Zvcm09Im1hdHJpeCgxLjAyOTI1IC0xLjAyOTI1IDEuMDI5MjUgMS4wMjkyNSAtOTkuMTM0MzIgMTU1Ljc1NTEpIi8+DQo8cGF0aCBkPSJtMTYxLjU5ODksMjYzLjQ1MDkgMTYuMTk1NSwyNy42MjgxIDguNTU0NCwuOTM1LTIxLjk1ODgtMzEuMzU0Mi0yLjc5MTEsMi43OTExem0xMS44NzIxLTExLjg3MjEgMzMuMDEwMSwyNi4zODQxIC43NzA1LDE0LjEzNTMtMTQuMDQ3Ni0uODU4Mi0yNi4zNjk1LTMzLjAyNDYgNi42MzY2LTYuNjM2NnptNS4yMzk5LTUuMjM5OSAyNy4zNjc4LDE2LjQ1NTggLjg3MzIsOC42MTYxLTMxLjAzNjYtMjIuMjc2NSAyLjc5NTUtMi43OTU1eiIvPg0KPHBhdGggZD0ibTE3OC40NTA2LDIwMy40MDA4IDI3LjYyODEtMTYuMTk1NSAuOTM1LTguNTU0NC0zMS4zNTQyLDIxLjk1ODggMi43OTExLDIuNzkxMXptLTExLjg3MjEtMTEuODcyMSAyNi4zODQxLTMzLjAxMDEgMTQuMTM1My0uNzcwNS0uODU4MiwxNC4wNDc2LTMzLjAyNDYsMjYuMzY5Ni02LjYzNjYtNi42MzY2em0tNS4yMzk5LTUuMjM5OSAxNi40NTU4LTI3LjM2NzggOC42MTYxLS44NzMyLTIyLjI3NjUsMzEuMDM2Ni0yLjc5NTUtMi43OTU1eiIvPg0KPGNpcmNsZSBjeD0iODIuNTMxIiBjeT0iMTQ5LjgwOCIgcj0iMzAuOTE2IiB0cmFuc2Zvcm09Im1hdHJpeCgxLjAyOTI1IDEuMDI5MjUgLTEuMDI5MjUgMS4wMjkyNSAyMDkuMjQ0NjkgLTE0LjEzNDA4KSIvPg0KPHBhdGggZD0ibTEwMS41NDg5LDI0Ni41OTkyLTI3LjYyODEsMTYuMTk1Ni0uOTM1LDguNTU0NCAzMS4zNTQyLTIxLjk1ODgtMi43OTExLTIuNzkxMXptMTEuODcyMSwxMS44NzIxLTI2LjM4NDEsMzMuMDEtMTQuMTM1MywuNzcwNSAuODU4Mi0xNC4wNDc2IDMzLjAyNDYtMjYuMzY5NSA2LjYzNjYsNi42MzY2em01LjIzOTksNS4yMzk5LTE2LjQ1NTgsMjcuMzY3OC04LjYxNjEsLjg3MzIgMjIuMjc2NC0zMS4wMzY2IDIuNzk1NSwyLjc5NTV6Ii8+DQo8cGF0aCBkPSJtMjk1LjUxMTksMjQxLjI3NDIgMTEuOTE3NS0xNi4yNDg5LTExLjk1MDQtMTYuMjI0OCAxOS4xMzY0LDYuMzEzMSAxMS43Mzc4LTE2LjM3OTItLjA3OTIsMjAuMTUwNiAxOS4yMDQ5LDYuMTAxOS0xOS4xOTIyLDYuMTQwNyAuMTE4NywyMC4xNTA0LTExLjc3MDctMTYuMzU1NS0xOS4xMjM3LDYuMzUxN3oiLz4NCjxwYXRoIGQ9Im02MC43NDMzLDczLjE1MjktMjAuMDMwOC0yLjE5NjQtOC4wNzU5LDE4LjQ2MTctNC4xMDA5LTE5LjcyOTItMjAuMDUzNy0xLjk3NTcgMTcuNDkwNi0xMC4wMDY3LTQuMzE4LTE5LjY4MjkgMTQuOTE0MSwxMy41NTA2IDE3LjM5MTQtMTAuMTc4LTguMjc4OSwxOC4zNzE1IDE1LjA2MjYsMTMuMzg1OHoiLz4NCjxwYXRoIGQ9Im02MC43NDMzLDM3Ni44NDcxLTIwLjAzMDgsMi4xOTY0LTguMDc1OS0xOC40NjE3LTQuMTAwOSwxOS43MjkyLTIwLjA1MzcsMS45NzU3IDE3LjQ5MDYsMTAuMDA2Ny00LjMxOCwxOS42ODI5IDE0LjkxNDEtMTMuNTUwNiAxNy4zOTE0LDEwLjE3OC04LjI3ODktMTguMzcxNSAxNS4wNjI2LTEzLjM4NTh6Ii8+DQo8L2c+DQo8L3N2Zz4NCg==';var cn = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjAwIDgwMCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPg0KPHBhdGggZmlsbD0iI2RlMjkxMCIgZD0ibTAsMGgxMjAwdjgwMGgtMTIwMHoiLz4NCjxwYXRoIGZpbGw9IiNmZmRlMDAiIGQ9Im0tMTYuNTc5Niw5OS42MDA3bDIuMzY4Ni04LjEwMzItNi45NTMtNC43ODgzIDguNDM4Ni0uMjUxNCAyLjQwNTMtOC4wOTI0IDIuODQ2Nyw3Ljk0NzkgOC40Mzk2LS4yMTMxLTYuNjc5Miw1LjE2MzQgMi44MTA2LDcuOTYwNy02Ljk3NDctNC43NTY3LTYuNzAyNSw1LjEzMzF6IiB0cmFuc2Zvcm09Im1hdHJpeCg5LjkzMzUyIC4yNzc0NyAtLjI3NzQ3IDkuOTMzNTIgMzI0LjI5MjUgLTY5NS4yNDE1KSIvPg0KPHBhdGggZmlsbD0iI2ZmZGUwMCIgaWQ9InN0YXIiIGQ9Im0zNjUuODU1MiwzMzIuNjg5NWwyOC4zMDY4LDExLjM3NTcgMTkuNjcyMi0yMy4zMTcxLTIuMDcxNiwzMC40MzY3IDI4LjI1NDksMTEuNTA0LTI5LjU4NzIsNy40MzUyLTIuMjA5NywzMC40MjY5LTE2LjIxNDItMjUuODQxNS0yOS42MjA2LDcuMzAwOSAxOS41NjYyLTIzLjQwNjEtMTYuMDk2OC0yNS45MTQ4eiIvPg0KPGcgZmlsbD0iI2ZmZGUwMCI+DQo8cGF0aCBkPSJtNTE5LjA3NzksMTc5LjMxMjlsLTMwLjA1MzQtNS4yNDE4LTE0LjM5NDUsMjYuODk3Ni00LjMwMTctMzAuMjAyMy0zMC4wMjkzLTUuMzc4MSAyNy4zOTQ4LTEzLjQyNDItNC4xNjQ3LTMwLjIyMTUgMjEuMjMyNiwyMS45MDU3IDI3LjQ1NTQtMTMuMjk5OC0xNC4yNzIzLDI2Ljk2MjcgMjEuMTMzMSwyMi4wMDE3eiIvPg0KPHBhdGggZD0ibTQ1NS4yNTkyLDMxNS45Nzk1bDkuMzczNC0yOS4wMzE0LTI0LjYzMjUtMTcuOTk3OCAzMC41MDctLjA1NjYgOS41MDUtMjguOTg4NiA5LjQ4MSwyOC45OTY0IDMwLjUwNywuMDgxOC0yNC42NDc0LDE3Ljk3NzQgOS4zNDkzLDI5LjAzOTItMjQuNzE0LTE3Ljg4NTgtMjQuNzI4OCwxNy44NjUzeiIvPg0KPC9nPg0KPHVzZSB4bGluazpocmVmPSIjc3RhciIgdHJhbnNmb3JtPSJtYXRyaXgoLjk5ODYzIC4wNTIzNCAtLjA1MjM0IC45OTg2MyAxOS40MDAwNSAtMzAwLjUzNjgxKSIvPg0KPC9zdmc+DQo=';
    var cImg = ['<img class="ic" alt="Италия" src="'+it+'" /><span class="instok">Италия</span>','<img class="ic" alt="Италия" src="'+it+'" /><span class="instok">Италия</span>','<img class="ic" alt="Италия" src="'+it+'" /><span class="instok">Италия</span>','<img class="ic" alt="Италия" src="'+it+'" /><span class="instok">Италия</span>','<img class="ic" alt="Филиппины" src="'+ph+'" /><span class="instok">Филиппины</span>','<img class="ic" alt="Китай" src="'+cn+'" /><span class="instok">Китай</span>','<img class="ic" alt="Китай" src="'+cn+'" /><span class="instok">Китай</span>','<img class="ic" alt="Китай" src="'+cn+'" /><span class="instok">Китай</span>',];

    for (var q = 0; q < cImg.length; q++) {
        var cQ = document.getElementById('c' + q);
        if (cQ != null)
            cQ.innerHTML = cImg[q];
    }
}

function preBrandImg() {
    var bImg = ['<img class="ib" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHkAAAARCAYAAAD5XQN+AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAOjSURBVGhD7dexTmRJDIXhfVpehmfgCciJSQnJiMhIiEhISHr1tfiRKW43rHZGomc4klW3yi6XfeyqVv+z+8Efj58i/wX4KfJfgLci39zc7C4uLvbjiuvr673u/v7+deX74Pn5eXd1dbU7Pz9/E/G+vLy8Wmzj8vJyn9OW3N7evlr9GXgr8sPDw+7s7GxP0orIQ+h3wuPj4z4ujfn09LRfM1Z0+kOgL99Vthr9lPHuuZagxCMMKr4O38IxIuEz/VeguWZMQbziU5Tk7u5urzMeihkq6K/Cr8gzyPXYhXLWFh8TU/+uyG6AgnruQmuRBxx47moK49r95umR3e3KLv3cl8/gHHunn8j0pPIJ9GLOZ88tfzPuCXbzrBXOpp+Ngvh1beZpnNyttuUyczAvXj+H05f4J+ZZ2cyfUHNnEPq4fVdkibU5+J5zyAmSOVqdzqcfyZIwnzbGOYdICNMvPzMWOueANcQpgvVIs2+SPmEP3+ynTGLN2XWryqOYEZwP312I9DWt/TXIZ3oiVzZsiye9s+RdLOYh//aIxR54V2TIUMEr1kx8a20GCIhlE9mwElASzSFSoYabSeRXDNa7Efa0dxYV8TPOCbb5nzLtI7I8OiPy2BZPKBZQLHpj31M/vztrxt95E53drZ/6dR4+FDkijRVmJrFVHJgHCI5NRYB135afmZS99CTfpD0Ijnzr7Es8yGH6n8jfZ2CzVRQoz3yR5sG3WHHpW0zGXoGKGh90iTmJRzar3hhaX/GhyPNWbm2qIwU9MW1rlP96k6ePioxI31P8Peo2+7bHOiDU+a3X+SvmWcfAH7vilX+oyNbWGAObzuJrvoRGLxbkX+xbvibv5bTm4Nt5Kz4UGQo+pys4o1NEQVTAurJE2OnYEiAVtbX891ytQRP+FC3CStJesv4nRhzb4tlCvsWxymzOmQuZKOZyUAg289xsSH7ZrLnOnyf54ZVeM4C46PNd0acP318u8gxMkitKJhtSMEEw2RhrBMFCL0Z6wVXEMM9pjNDQOdb5Npp3ziHkb0tWorJdc4RuZDbGbifMPFvn33xtQvN8JDiAla8pwfeXiwzzqTgEDYDMmRS4WdbqSKgTCxroNVRr9qxnsqHfOifkh830fwzltyXrORVlq+HBnmNn5zdMXlY4Wy6E3cRnfPne4uhgkf8PBFHHea6RU9etgX9n1MTlcqr4LUWGnk0ERRLCTgndYLFr1lPFbytyWJ+qU8KxZ/V0sNv9C+dkW7XKI4Q4AAAAAElFTkSuQmCC"/><span class="instok">Вог Айвеа</span>','<img class="ib" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHkAAAARCAYAAAD5XQN+AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAOjSURBVGhD7dexTmRJDIXhfVpehmfgCciJSQnJiMhIiEhISHr1tfiRKW43rHZGomc4klW3yi6XfeyqVv+z+8Efj58i/wX4KfJfgLci39zc7C4uLvbjiuvr673u/v7+deX74Pn5eXd1dbU7Pz9/E/G+vLy8Wmzj8vJyn9OW3N7evlr9GXgr8sPDw+7s7GxP0orIQ+h3wuPj4z4ujfn09LRfM1Z0+kOgL99Vthr9lPHuuZagxCMMKr4O38IxIuEz/VeguWZMQbziU5Tk7u5urzMeihkq6K/Cr8gzyPXYhXLWFh8TU/+uyG6AgnruQmuRBxx47moK49r95umR3e3KLv3cl8/gHHunn8j0pPIJ9GLOZ88tfzPuCXbzrBXOpp+Ngvh1beZpnNyttuUyczAvXj+H05f4J+ZZ2cyfUHNnEPq4fVdkibU5+J5zyAmSOVqdzqcfyZIwnzbGOYdICNMvPzMWOueANcQpgvVIs2+SPmEP3+ynTGLN2XWryqOYEZwP312I9DWt/TXIZ3oiVzZsiye9s+RdLOYh//aIxR54V2TIUMEr1kx8a20GCIhlE9mwElASzSFSoYabSeRXDNa7Efa0dxYV8TPOCbb5nzLtI7I8OiPy2BZPKBZQLHpj31M/vztrxt95E53drZ/6dR4+FDkijRVmJrFVHJgHCI5NRYB135afmZS99CTfpD0Ijnzr7Es8yGH6n8jfZ2CzVRQoz3yR5sG3WHHpW0zGXoGKGh90iTmJRzar3hhaX/GhyPNWbm2qIwU9MW1rlP96k6ePioxI31P8Peo2+7bHOiDU+a3X+SvmWcfAH7vilX+oyNbWGAObzuJrvoRGLxbkX+xbvibv5bTm4Nt5Kz4UGQo+pys4o1NEQVTAurJE2OnYEiAVtbX891ytQRP+FC3CStJesv4nRhzb4tlCvsWxymzOmQuZKOZyUAg289xsSH7ZrLnOnyf54ZVeM4C46PNd0acP318u8gxMkitKJhtSMEEw2RhrBMFCL0Z6wVXEMM9pjNDQOdb5Npp3ziHkb0tWorJdc4RuZDbGbifMPFvn33xtQvN8JDiAla8pwfeXiwzzqTgEDYDMmRS4WdbqSKgTCxroNVRr9qxnsqHfOifkh830fwzltyXrORVlq+HBnmNn5zdMXlY4Wy6E3cRnfPne4uhgkf8PBFHHea6RU9etgX9n1MTlcqr4LUWGnk0ERRLCTgndYLFr1lPFbytyWJ+qU8KxZ/V0sNv9C+dkW7XKI4Q4AAAAAElFTkSuQmCC"/><span class="instok">Вог Айвеа</span>','<img class="ib" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHkAAAARCAYAAAD5XQN+AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAOjSURBVGhD7dexTmRJDIXhfVpehmfgCciJSQnJiMhIiEhISHr1tfiRKW43rHZGomc4klW3yi6XfeyqVv+z+8Efj58i/wX4KfJfgLci39zc7C4uLvbjiuvr673u/v7+deX74Pn5eXd1dbU7Pz9/E/G+vLy8Wmzj8vJyn9OW3N7evlr9GXgr8sPDw+7s7GxP0orIQ+h3wuPj4z4ujfn09LRfM1Z0+kOgL99Vthr9lPHuuZagxCMMKr4O38IxIuEz/VeguWZMQbziU5Tk7u5urzMeihkq6K/Cr8gzyPXYhXLWFh8TU/+uyG6AgnruQmuRBxx47moK49r95umR3e3KLv3cl8/gHHunn8j0pPIJ9GLOZ88tfzPuCXbzrBXOpp+Ngvh1beZpnNyttuUyczAvXj+H05f4J+ZZ2cyfUHNnEPq4fVdkibU5+J5zyAmSOVqdzqcfyZIwnzbGOYdICNMvPzMWOueANcQpgvVIs2+SPmEP3+ynTGLN2XWryqOYEZwP312I9DWt/TXIZ3oiVzZsiye9s+RdLOYh//aIxR54V2TIUMEr1kx8a20GCIhlE9mwElASzSFSoYabSeRXDNa7Efa0dxYV8TPOCbb5nzLtI7I8OiPy2BZPKBZQLHpj31M/vztrxt95E53drZ/6dR4+FDkijRVmJrFVHJgHCI5NRYB135afmZS99CTfpD0Ijnzr7Es8yGH6n8jfZ2CzVRQoz3yR5sG3WHHpW0zGXoGKGh90iTmJRzar3hhaX/GhyPNWbm2qIwU9MW1rlP96k6ePioxI31P8Peo2+7bHOiDU+a3X+SvmWcfAH7vilX+oyNbWGAObzuJrvoRGLxbkX+xbvibv5bTm4Nt5Kz4UGQo+pys4o1NEQVTAurJE2OnYEiAVtbX891ytQRP+FC3CStJesv4nRhzb4tlCvsWxymzOmQuZKOZyUAg289xsSH7ZrLnOnyf54ZVeM4C46PNd0acP318u8gxMkitKJhtSMEEw2RhrBMFCL0Z6wVXEMM9pjNDQOdb5Npp3ziHkb0tWorJdc4RuZDbGbifMPFvn33xtQvN8JDiAla8pwfeXiwzzqTgEDYDMmRS4WdbqSKgTCxroNVRr9qxnsqHfOifkh830fwzltyXrORVlq+HBnmNn5zdMXlY4Wy6E3cRnfPne4uhgkf8PBFHHea6RU9etgX9n1MTlcqr4LUWGnk0ERRLCTgndYLFr1lPFbytyWJ+qU8KxZ/V0sNv9C+dkW7XKI4Q4AAAAAElFTkSuQmCC"/><span class="instok">Вог Айвеа</span>','<img class="ib" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHkAAAARCAYAAAD5XQN+AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAOjSURBVGhD7dexTmRJDIXhfVpehmfgCciJSQnJiMhIiEhISHr1tfiRKW43rHZGomc4klW3yi6XfeyqVv+z+8Efj58i/wX4KfJfgLci39zc7C4uLvbjiuvr673u/v7+deX74Pn5eXd1dbU7Pz9/E/G+vLy8Wmzj8vJyn9OW3N7evlr9GXgr8sPDw+7s7GxP0orIQ+h3wuPj4z4ujfn09LRfM1Z0+kOgL99Vthr9lPHuuZagxCMMKr4O38IxIuEz/VeguWZMQbziU5Tk7u5urzMeihkq6K/Cr8gzyPXYhXLWFh8TU/+uyG6AgnruQmuRBxx47moK49r95umR3e3KLv3cl8/gHHunn8j0pPIJ9GLOZ88tfzPuCXbzrBXOpp+Ngvh1beZpnNyttuUyczAvXj+H05f4J+ZZ2cyfUHNnEPq4fVdkibU5+J5zyAmSOVqdzqcfyZIwnzbGOYdICNMvPzMWOueANcQpgvVIs2+SPmEP3+ynTGLN2XWryqOYEZwP312I9DWt/TXIZ3oiVzZsiye9s+RdLOYh//aIxR54V2TIUMEr1kx8a20GCIhlE9mwElASzSFSoYabSeRXDNa7Efa0dxYV8TPOCbb5nzLtI7I8OiPy2BZPKBZQLHpj31M/vztrxt95E53drZ/6dR4+FDkijRVmJrFVHJgHCI5NRYB135afmZS99CTfpD0Ijnzr7Es8yGH6n8jfZ2CzVRQoz3yR5sG3WHHpW0zGXoGKGh90iTmJRzar3hhaX/GhyPNWbm2qIwU9MW1rlP96k6ePioxI31P8Peo2+7bHOiDU+a3X+SvmWcfAH7vilX+oyNbWGAObzuJrvoRGLxbkX+xbvibv5bTm4Nt5Kz4UGQo+pys4o1NEQVTAurJE2OnYEiAVtbX891ytQRP+FC3CStJesv4nRhzb4tlCvsWxymzOmQuZKOZyUAg289xsSH7ZrLnOnyf54ZVeM4C46PNd0acP318u8gxMkitKJhtSMEEw2RhrBMFCL0Z6wVXEMM9pjNDQOdb5Npp3ziHkb0tWorJdc4RuZDbGbifMPFvn33xtQvN8JDiAla8pwfeXiwzzqTgEDYDMmRS4WdbqSKgTCxroNVRr9qxnsqHfOifkh830fwzltyXrORVlq+HBnmNn5zdMXlY4Wy6E3cRnfPne4uhgkf8PBFHHea6RU9etgX9n1MTlcqr4LUWGnk0ERRLCTgndYLFr1lPFbytyWJ+qU8KxZ/V0sNv9C+dkW7XKI4Q4AAAAAElFTkSuQmCC"/><span class="instok">Вог Айвеа</span>','<img class="ib" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAARCAYAAACilZ5PAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAFASURBVEhL7ZSxjoMwEETztfwM38AX0FPTUtJR0dFQ0dDQ+PSsDDfnOFKiQ6BIGWmF17s7Hpu1b+FD8RV+Nnbhfd+HqqqeGnFQ13W0q7EL77oulGW5W1EUf3ziQP7VyLYKIhEusa9iXddojmVZ7qNHEEvzX8Xbwv3E53mOY1qJ9lGsbdtojOEh7hjHcY/x9dYbhiHOqYbN4WO+yX8LJ0+5LoiF8fni646wuDgQqbVcPGNxqh4uxyHC5QMtNE1T9FMuNoDPHxGocY5t26JPHtY0zT3yi0OEs7Ag4cRAyiVfPC5QNUAbJJ67B5cJ58TJcRPSE889v6cL57KphpMkDz4XR2uoRny6I8LpwgGnzZy4MC4qUIuI018Vf1qzwvlVLMw3BfMSBRg7IWOPP+MiD5GY97DqPT83lxX+CfgKPxch/ABkg0Lm/QCKDgAAAABJRU5ErkJggg=="/><span class="instok">Таймекс</span>','<img class="ib" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGgAAAARCAYAAAAxMemoAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAKsSURBVFhH7ZYxrvIwEIT/03IZzsAJ6KlpKemo6GioaGho8vTlz/CGkRM7QnpKkZEse9e7s7teO/CvW7ForA1aONYGLRwfDTocDt1ut+vH7XYbtF33eDze+v1+P2h/7dlvwVz7EpLjW865Nf81PhpEMpvNph8kLpzP57d+u90O2q5PHPl+vw+aaYi/1b6E5PiWc27Nf43RBmUj5iZbOrA8zKlDfT6fxVfR2qAx/8Q3NU/lL7TYkCujhGKD9DLkxJo95iwC2ZOQToUdj8dh55cfndu4vz4t2mft++KQLuWaf0L+rTUDXpr4mf3lAXLIczidTsPu/6ah4xw8RvKAYoMgY75cLj0Zax0qQ5C9DoCkkAl0vV7f+/AAycx877GTLMiGHPCrxRyTx/wTbs9cqxkde/jhoxqoXRAne9h4DCB+eNFxVqzRqQ6h2CAODweCKnHpPFnZizT3uUn4vV6vXnZ+AXv0AHv2JQMdiHwypsst/gn5q75azZJVE0DGXvWy9obxKp1HDSrl2dQgjFhDqBl4EOD2paAJtxcUA4iDoVgMZN2+5CjlMOWfcH/W2GsG4gDiZ9/hHGpuxqvxyI89x2iD1FEn8iDA7fOWAHT8G+JmAbcXsBe/J87aR75CdCkzav4J96/VXKoRiIM6+USyzt8T9yOWxwCzG6SnytBtyOTc3mWagk7fZ2Tf9yTg80QVg/gcKnvI+vEeiym55p9w/5aa/XcWH/0dh0fAHl2eAxcAoEuf2Q0CCuSyJ5v2zPLR8CTSHmDvNvphx06z38bkSLnmn0h/+bjMEHgl8tFA1lcCeA4a/psEt/yEpgYRxA1YT8lpL3ATCZh7JXtkLw5w2ykSjtxLjhLnlH8i/VlPyQI6+Kl1DDqHUg74u57XXorz0aAVy8PaoIVjbdCi0XU/908Iyvy0bZYAAAAASUVORK5CYII="/><span class="instok">Мишель Мун</span>','<img class="ib" src="//farm1.staticflickr.com/708/21561830306_41eb7d1260_o.jpg"/><span class="instok">Дисней</span>','<img class="ib" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAARCAYAAAAv+NkbAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAALLSURBVFhH7ZUxjioxEET3tFyGM3ACcmJSQjIiMhIiEhKS+Xr8ebtFyzOwaCUmmJIsxu2u7mq3bb66GZPE3JiJYm7MRPHQmM1m061Wq/s4nU69tesul8u3fb1e99bPQC1ofRXvcD6Nh8YgfrFY3EcWsd/vv+3L5bK3fgbn8/muA62v4h3OpzHYmGwAt6RlF5xIih8DPhXX67VpH8OzTW7pqBxyknsMY7perfdZDjAUp9kYGkEDDMw3a/xmY3jumGfTttttv/q/odi4fcYFiDGevMPhcF97hrrJgE0wl/F2u12/+sjxkKlL4I+N1yHjpC51s+Z61guM4zr5ssnqrHlqg5qNITi/iLIoBBCAIdxc/I7HY3PdxPDxAczNA1feqycMLrGFedhoYmYdQI42tTJ3Q6wZO5p8vpkL64UPz7m6scshHjW3YmDjl4PtoWWeaDbGm0B3FawtkwBFIZQ1fC024wm+sRFbWOgrwA++hbTioSm1Vg5w08xrnfwK/LNe62EzaV49SK163XgaDfTJesmR2kCzMZD4lqA4flMoG+q6I5MaL69yawN+g7rJQ/FSa+UAeWptxcnaQd40Bt95IDKnqHHdE/MCOKkNDDbGE8WQlInzVLrxNSlz/QUnDZ8siBOG/Xa79ZYf4EcMY/rE+P9gPOdCbQBu1gHeaYxAL37WK8eceZPcxz+7MT4RrcSgFsuctUzKmv4iG5pvNby8WcLCaFD6WigwLzZ8fD7gAmzM1QpshFqdWyuo+tUtx0Mixxjw8PGGMWyW+o0BWE9tYLAxAEKdM4T+2p37xjJPf8Epx46vo554YSPTtxbRipc3Ev2V905jzOOoMQF5sTvwgyfwx/6rxnBik8D32ByQlJPDBvIUse6TVOMl8JfbuikVPh9D8YA+rXjw0q5WUbWDln51j2mBR13ZENGKybxqfmjMjOlgbsxEMTdmkui6f2/01b6mnF9tAAAAAElFTkSuQmCC"/><span class="instok">Марк Джонсон</span>'];
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