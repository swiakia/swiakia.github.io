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
            var arImg = ['//farm6.staticflickr.com/5619/21450435366_3b86c13536_n.jpg','//farm6.staticflickr.com/5695/21289754019_b96aa5f7cf_n.jpg','//farm6.staticflickr.com/5699/20853964294_5bb853019a_n.jpg','//farm6.staticflickr.com/5659/21485263871_b4c63a83b4_n.jpg','//farm1.staticflickr.com/721/20855577013_9a818b85d2_n.jpg','//farm6.staticflickr.com/5662/21289759689_3df591ed19_n.jpg','//farm1.staticflickr.com/565/21289761449_48856c98a3_n.jpg'];
        } else {
            var arImg = ['//farm6.staticflickr.com/5619/21450435366_6fb1575f1d_o.jpg','//farm6.staticflickr.com/5695/21289754019_e53ac16a17_o.jpg','//farm6.staticflickr.com/5699/20853964294_8560da74f8_o.jpg','//farm6.staticflickr.com/5659/21485263871_a905155b6b_o.jpg','//farm1.staticflickr.com/721/20855577013_f1071a94e3_o.jpg','//farm6.staticflickr.com/5662/21289759689_779d70e09f_o.jpg','//farm1.staticflickr.com/565/21289761449_13e54f063b_o.jpg'];

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
            a.href = 'http://babyb1og.ru/g/3f2779c2d4404da6e1704e8640d77b/?i=5&ulp=http%3A%2F%2Fwww.lamoda.ru%2Fp%2FES006EWBWI28%2F';
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
    var rImg = ['//farm1.staticflickr.com/777/21619383468_2c68d7503f_n.jpg','//farm6.staticflickr.com/5792/21303552090_82f1591711_n.jpg','//farm1.staticflickr.com/684/21327749563_150a99bd51_n.jpg','//farm1.staticflickr.com/596/21869810522_79744f8a93_n.jpg','//farm6.staticflickr.com/5694/21583185575_125f77024f_n.jpg','//farm1.staticflickr.com/652/21950970619_eee88364a7_n.jpg','//farm1.staticflickr.com/591/21788033035_9f81f215b0_n.jpg','//farm6.staticflickr.com/5703/21595920611_661e459def_n.jpg','//farm1.staticflickr.com/705/21729115178_6799abf995_n.jpg','//farm6.staticflickr.com/5635/21462718538_6440ab19f6_n.jpg','//farm1.staticflickr.com/772/21959211771_cb84c3671f_n.jpg','//farm1.staticflickr.com/679/21629432502_0f2c711925_n.jpg','//farm1.staticflickr.com/613/21549967551_ab527d28e4_n.jpg','//farm1.staticflickr.com/647/20789502514_11b0b7fcc3_n.jpg','//farm6.staticflickr.com/5720/21718311491_ef21fe2798_n.jpg','//farm1.staticflickr.com/736/21520403754_8ef4dc0682_n.jpg','//farm6.staticflickr.com/5752/21950172058_9cb637c25a_n.jpg','//farm1.staticflickr.com/688/21472436689_4b20df1e91_n.jpg','//farm6.staticflickr.com/5621/21609630485_480ac643f2_n.jpg','//farm6.staticflickr.com/5659/21470328115_1b9a4d99a6_n.jpg'];
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
    var ro = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NTAgMzAwIj4NCjxwYXRoIGZpbGw9IiMwMDJiN2YiIGQ9Im0wLDBoMTUwdjMwMGgtMTUweiIvPg0KPHBhdGggZmlsbD0iI2ZjZDExNiIgZD0ibTE1MCwwaDE1MHYzMDBoLTE1MHoiLz4NCjxwYXRoIGZpbGw9IiNjZTExMjYiIGQ9Im0zMDAsMGgxNTB2MzAwaC0xNTB6Ii8+DQo8L3N2Zz4NCg==';var cn = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjAwIDgwMCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPg0KPHBhdGggZmlsbD0iI2RlMjkxMCIgZD0ibTAsMGgxMjAwdjgwMGgtMTIwMHoiLz4NCjxwYXRoIGZpbGw9IiNmZmRlMDAiIGQ9Im0tMTYuNTc5Niw5OS42MDA3bDIuMzY4Ni04LjEwMzItNi45NTMtNC43ODgzIDguNDM4Ni0uMjUxNCAyLjQwNTMtOC4wOTI0IDIuODQ2Nyw3Ljk0NzkgOC40Mzk2LS4yMTMxLTYuNjc5Miw1LjE2MzQgMi44MTA2LDcuOTYwNy02Ljk3NDctNC43NTY3LTYuNzAyNSw1LjEzMzF6IiB0cmFuc2Zvcm09Im1hdHJpeCg5LjkzMzUyIC4yNzc0NyAtLjI3NzQ3IDkuOTMzNTIgMzI0LjI5MjUgLTY5NS4yNDE1KSIvPg0KPHBhdGggZmlsbD0iI2ZmZGUwMCIgaWQ9InN0YXIiIGQ9Im0zNjUuODU1MiwzMzIuNjg5NWwyOC4zMDY4LDExLjM3NTcgMTkuNjcyMi0yMy4zMTcxLTIuMDcxNiwzMC40MzY3IDI4LjI1NDksMTEuNTA0LTI5LjU4NzIsNy40MzUyLTIuMjA5NywzMC40MjY5LTE2LjIxNDItMjUuODQxNS0yOS42MjA2LDcuMzAwOSAxOS41NjYyLTIzLjQwNjEtMTYuMDk2OC0yNS45MTQ4eiIvPg0KPGcgZmlsbD0iI2ZmZGUwMCI+DQo8cGF0aCBkPSJtNTE5LjA3NzksMTc5LjMxMjlsLTMwLjA1MzQtNS4yNDE4LTE0LjM5NDUsMjYuODk3Ni00LjMwMTctMzAuMjAyMy0zMC4wMjkzLTUuMzc4MSAyNy4zOTQ4LTEzLjQyNDItNC4xNjQ3LTMwLjIyMTUgMjEuMjMyNiwyMS45MDU3IDI3LjQ1NTQtMTMuMjk5OC0xNC4yNzIzLDI2Ljk2MjcgMjEuMTMzMSwyMi4wMDE3eiIvPg0KPHBhdGggZD0ibTQ1NS4yNTkyLDMxNS45Nzk1bDkuMzczNC0yOS4wMzE0LTI0LjYzMjUtMTcuOTk3OCAzMC41MDctLjA1NjYgOS41MDUtMjguOTg4NiA5LjQ4MSwyOC45OTY0IDMwLjUwNywuMDgxOC0yNC42NDc0LDE3Ljk3NzQgOS4zNDkzLDI5LjAzOTItMjQuNzE0LTE3Ljg4NTgtMjQuNzI4OCwxNy44NjUzeiIvPg0KPC9nPg0KPHVzZSB4bGluazpocmVmPSIjc3RhciIgdHJhbnNmb3JtPSJtYXRyaXgoLjk5ODYzIC4wNTIzNCAtLjA1MjM0IC45OTg2MyAxOS40MDAwNSAtMzAwLjUzNjgxKSIvPg0KPC9zdmc+DQo=';var si = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBoZWlnaHQ9IjYwMCIgdmlld0JveD0iMCAwIDEyIDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4NCjxwYXRoIGZpbGw9IiNlZDFjMjQiIGQ9Im0wLDBoMTJ2NmgtMTJ6Ii8+DQo8cGF0aCBmaWxsPSIjMDA1ZGE0IiBkPSJtMCwwaDEydjRoLTEyeiIvPg0KPHBhdGggZmlsbD0iI2ZmZiIgZD0ibTAsMGgxMnYyaC0xMnoiLz4NCjxnIHRyYW5zZm9ybT0ibWF0cml4KC4xMjkzNyAwIDAgLjEyOTM3IDIuMjIzOCAxKSI+DQo8c3ZnIHdpZHRoPSIxMiIgdmlld0JveD0iLTEyMCAtMTkwLjIyMzEyNSAyNDAgMzA5LjE4ODI3NCIgaGVpZ2h0PSIxNS40NTkiPg0KPHBhdGggZmlsbD0iIzAwNWRhNCIgZD0ibTExMC4yNi0xOS40NzhsOS43NC0xNDMuNzVhMjgwLjIyLDI4MC4yMiAwIDAsMCAtMjQwLDBsOS43NCwxNDMuNzVhMTU1LjYxLDE1NS42MSAwIDAsMCAxMTAuMjYsMTM4LjQ1IDE1NS42MSwxNTUuNjEgMCAwLDAgMTEwLjI2LTEzOC40NSIvPg0KPHBhdGggZmlsbD0iI2ZmZiIgZD0ibS05MCwwYTEzOC4yOSwxMzguMjkgMCAwLDAgOTAsMTAwLjc3IDEzOC4yOSwxMzguMjkgMCAwLDAgOTAtMTAwLjc3bC00NS02MC0xOCwyNC0yNy01NC0yNyw1NC0xOC0yNC00NSw2MCIvPg0KPGcgZmlsbD0iIzAwNWRhNCIgaWQ9IndhdmUiIHRyYW5zZm9ybT0ibWF0cml4KDUgMCAwIDUgMCAyNS45ODEpIj4NCjxwYXRoIGQ9Im0tMTcuMTk2LTIuMTk2MmE2LDYgMCAwLDAgOC4xOTYyLDIuMTk2MiA2LDYgMCAwLDEgNiwwIDYsNiAwIDAsMCA2LDAgNiw2IDAgMCwxIDYsMCA2LDYgMCAwLDAgOC4xOTYyLTIuMTk2MnYxLjczMmE2LDYgMCAwLDEgLTguMTk2MiwyLjE5NjIgNiw2IDAgMCwwIC02LDAgNiw2IDAgMCwxIC02LDAgNiw2IDAgMCwwIC02LDAgNiw2IDAgMCwxIC04LjE5NjItMi4xOTYyeiIvPg0KPC9nPg0KPHVzZSB4bGluazpocmVmPSIjd2F2ZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAxNy4zMjEpIi8+DQo8ZyBpZD0icyIgdHJhbnNmb3JtPSJtYXRyaXgoMi4yNSAwIDAgMi4yNSAwIC0xMjApIj4NCjxwYXRoIGZpbGw9IiNmZDAiIHN0cm9rZS13aWR0aD0iLjIiIGQ9Im0wLTVsMSwzLjI2NzkgMy4zMzAxLS43Njc5LTIuMzMwMSwyLjUgMi4zMzAxLDIuNS0zLjMzMDEtLjc2NzktMSwzLjI2NzktMS0zLjI2NzktMy4zMzAxLC43Njc5IDIuMzMwMS0yLjUtMi4zMzAxLTIuNSAzLjMzMDEsLjc2Nzl6Ii8+DQo8L2c+DQo8dXNlIHhsaW5rOmhyZWY9IiNzIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMzMuNzUgLTQ1KSIvPg0KPHVzZSB4bGluazpocmVmPSIjcyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzMuNzUgLTQ1KSIvPg0KPHBhdGggZmlsbD0iI2VkMWMyNCIgZD0ibS0xMTEuNTgtMTY3LjA1bDkuOTYsMTQ2Ljk5YTE0Ni45NSwxNDYuOTUgMCAwLDAgMTAxLjYyLDEyOS45NSAxNDYuOTUsMTQ2Ljk1IDAgMCwwIDEwMS42Mi0xMjkuOTVsOS45Ni0xNDYuOTlhMjgwLjIyLDI4MC4yMiAwIDAsMCA4LjQyLDMuODJsLTkuNzQsMTQzLjc1YTE1NS42MSwxNTUuNjEgMCAwLDEgLTExMC4yNiwxMzguNDUgMTU1LjYxLDE1NS42MSAwIDAsMSAtMTEwLjI2LTEzOC40NWwtOS43NC0xNDMuNzVhMjgwLjIyLDI4MC4yMiAwIDAsMCA4LjQyLTMuODIiLz4NCjwvc3ZnPg0KPC9nPg0KPC9zdmc+DQo=';var it = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBoZWlnaHQ9IjEwMDAiIHZpZXdCb3g9IjAgMCAzIDIiPg0KPHBhdGggZmlsbD0iIzAwOTI0NiIgZD0ibTAsMGgxdjJoLTF6Ii8+DQo8cGF0aCBmaWxsPSIjZmZmIiBkPSJtMSwwaDF2MmgtMXoiLz4NCjxwYXRoIGZpbGw9IiNjZTJiMzciIGQ9Im0yLDBoMXYyaC0xeiIvPg0KPC9zdmc+DQo=';var ru = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NTAgMzAwIj4NCjxwYXRoIGZpbGw9IiNmZmYiIGQ9Im0wLDBoNDUwdjEwMGgtNDUweiIvPg0KPHBhdGggZmlsbD0iIzAwZiIgZD0ibTAsMTAwaDQ1MHYxMDBoLTQ1MHoiLz4NCjxwYXRoIGZpbGw9IiNmMDAiIGQ9Im0wLDIwMGg0NTB2MTAwaC00NTB6Ii8+DQo8L3N2Zz4NCg==';var ma = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOTAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNjAwIiB2aWV3Qm94PSItNjAgLTQwIDEyMCA4MCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPg0KPHBhdGggZmlsbD0iI2MxMjcyZCIgZD0ibS02MC00MGgxMjB2ODBoLTEyMHoiLz4NCjxnIGZpbGw9IiMwYjQ1MjciIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLXdpZHRoPSIuODkiIHRyYW5zZm9ybT0ibWF0cml4KC40MzkyOSAwIDAgLjQ2MTg2IC04NC4zNDI5IC01Ny4wMDg5KSI+DQo8cGF0aCBkPSJtMTgxLjI1LDExMy4xODc1bC0zNC43ODEyLC4wMzEyIDM5LjU5MzgsMjguNzUgNS45Mzc1LTQuMzEyNS0yNC0xNy40Mzc1IDEwLjk2ODgtLjAzMTIgMi4yODEyLTd6Ii8+DQo8cGF0aCBkPSJtMjAyLjc2NTYsMTEzLjE5ODhsLTEwLjc3NzctMzMuMDY5My0xNS4xMDc3LDQ2LjU0MDEgNS45MzYyLDQuMzE0MyA5LjE2NzYtMjguMjEzOCAzLjQxOTMsMTAuNDIyMiA3LjM2MjMsLjAwNjV6Ii8+DQo8cGF0aCBkPSJtMjA5LjQwMzYsMTMzLjY2NWwyOC4xMjAzLTIwLjQ2OTItNDguOTMwOCwuMDEzNC0yLjI2ODcsNi45Nzg5IDI5LjY2NTksLjAwMDQtOC44NTU1LDYuNDcyNSAyLjI2ODksNy4wMDR6Ii8+DQo8cGF0aCBkPSJtMTkxLjk5MDUsMTQ2LjMwMjJsMjguMTU3LDIwLjQxODYtMTUuMTMzMi00Ni41MzE5LTcuMzM4NC0uMDAxMSA5LjE2NjksMjguMjE0MS04Ljg5MjMtNi40MjItNS45NjAxLDQuMzIyMnoiLz4NCjxwYXRoIGQ9Im0xNzQuNTkwOCwxMzMuNjQ2NmwtMTAuNzE4MywzMy4wODg2IDM5LjU3OC0yOC43NzE3LTIuMjY2Ni02Ljk3OTUtMjQuMDAwNSwxNy40MzY5IDMuMzU5OC0xMC40NDE2LTUuOTUyNC00LjMzMjd6Ii8+DQo8L2c+DQo8L3N2Zz4NCg==';
    var cImg = ['<img class="ic" alt="Румыния" src="'+ro+'" /><span class="instok">Румыния</span>','<img class="ic" alt="Китай" src="'+cn+'" /><span class="instok">Китай</span>','<img class="ic" alt="Словения" src="'+si+'" /><span class="instok">Словения</span>','<img class="ic" alt="Италия" src="'+it+'" /><span class="instok">Италия</span>','<img class="ic" alt="Россия" src="'+ru+'" /><span class="instok">Россия</span>','<img class="ic" alt="Марокко" src="'+ma+'" /><span class="instok">Марокко</span>','<img class="ic" alt="Китай" src="'+cn+'" /><span class="instok">Китай</span>','<img class="ic" alt="Россия" src="'+ru+'" /><span class="instok">Россия</span>',];

    for (var q = 0; q < cImg.length; q++) {
        var cQ = document.getElementById('c' + q);
        if (cQ != null)
            cQ.innerHTML = cImg[q];
    }
}

function preBrandImg() {
    var bImg = ['<img class="ib" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAAARCAYAAAAi5qlcAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAK7SURBVFhH7ZY9ciIxEIX3tFyGM3ACcmJSQjIiMhIiEhKScX3j+VyPLqlY410IPK+qi5H673W3JPvPMOOtmAfwZswDeDPuBrDZbIbVatUUdO/C5XL5MYfr9Tr6L5fLUYi32+0m7etwOp2mr0/cDQBSi8Xii2TKer2erF6P8/k88oLfs6AGYyCut9vtZPF/cbvdvnInmgOg4L8BdpysHtBxenvA/5He394AHnEA+mez2fNw9WD+Hh7pgfXJ4Z8MgEI8Qfzil43En720ORwOk3YYr7469cfjcdIO43f6ko/vJO9zog263iAsHrvkwX76yKvWlz6g5q5PI3vwQbBp1SuaA9A5xQbzhmFDUgrY7/djwDxdJiMx5FkjFIvwTUxi4W9Okf45DG2MKQd+te8BX2wQ85M7gb96dLl2UHkY0Js7n2j5soceX/3QJc9vD4DiMxANSDigJEQTq50F2WAE5ICFOeFRQZzWEFvADhsbVH1seB4mG+ew5MqbLoxnj7RJUH/NB556gmiuSRG+vaYWkVOuQCdJ4/Crrvq3yDOgGqMWl3DgIm+W/5mYO+tPPr0m1r7JKdHzffqPsCfPK2hCT2veAApkn1Oj3qsJknDqhbdC8ub0VPaKEx4Y7YX1ut8afu7BN7kK4+QNqFy+NQCuHQmrAMiSwAbR1CSVJH16kiBxzAFseM8fH/0l7xo9cCDqK7AzB/zhJA/2PAi5x9ARvtmzuQyTNTmJQzzWmRufygV/Y+MnmgNoCY5CO/YUGin4Zi/9HZgNrv6IcCiK+SwqG4qw728PDBybjMs6eTsA8yn5NyEPhMLaAYEel8zvEO4GQBAUPUmwhjAFeIIS7KHjhCQ5gI59izdvgj3i64s+46j3/W5xrJCTfpW3AzBv5q+wfvMnKldh3elzN4DfjhzAqzAPIEDjeSbmAfwaDMMHnLI58i4CrwsAAAAASUVORK5CYII="/><span class="instok">Эскада Спорт</span>','<img class="ib" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAAARCAYAAAAi5qlcAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAK7SURBVFhH7ZY9ciIxEIX3tFyGM3ACcmJSQjIiMhIiEhKScX3j+VyPLqlY410IPK+qi5H673W3JPvPMOOtmAfwZswDeDPuBrDZbIbVatUUdO/C5XL5MYfr9Tr6L5fLUYi32+0m7etwOp2mr0/cDQBSi8Xii2TKer2erF6P8/k88oLfs6AGYyCut9vtZPF/cbvdvnInmgOg4L8BdpysHtBxenvA/5He394AHnEA+mez2fNw9WD+Hh7pgfXJ4Z8MgEI8Qfzil43En720ORwOk3YYr7469cfjcdIO43f6ko/vJO9zog263iAsHrvkwX76yKvWlz6g5q5PI3vwQbBp1SuaA9A5xQbzhmFDUgrY7/djwDxdJiMx5FkjFIvwTUxi4W9Okf45DG2MKQd+te8BX2wQ85M7gb96dLl2UHkY0Js7n2j5soceX/3QJc9vD4DiMxANSDigJEQTq50F2WAE5ICFOeFRQZzWEFvADhsbVH1seB4mG+ew5MqbLoxnj7RJUH/NB556gmiuSRG+vaYWkVOuQCdJ4/Crrvq3yDOgGqMWl3DgIm+W/5mYO+tPPr0m1r7JKdHzffqPsCfPK2hCT2veAApkn1Oj3qsJknDqhbdC8ub0VPaKEx4Y7YX1ut8afu7BN7kK4+QNqFy+NQCuHQmrAMiSwAbR1CSVJH16kiBxzAFseM8fH/0l7xo9cCDqK7AzB/zhJA/2PAi5x9ARvtmzuQyTNTmJQzzWmRufygV/Y+MnmgNoCY5CO/YUGin4Zi/9HZgNrv6IcCiK+SwqG4qw728PDBybjMs6eTsA8yn5NyEPhMLaAYEel8zvEO4GQBAUPUmwhjAFeIIS7KHjhCQ5gI59izdvgj3i64s+46j3/W5xrJCTfpW3AzBv5q+wfvMnKldh3elzN4DfjhzAqzAPIEDjeSbmAfwaDMMHnLI58i4CrwsAAAAASUVORK5CYII="/><span class="instok">Эскада Спорт</span>','<img class="ib" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAAARCAYAAAAi5qlcAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAK7SURBVFhH7ZY9ciIxEIX3tFyGM3ACcmJSQjIiMhIiEhKScX3j+VyPLqlY410IPK+qi5H673W3JPvPMOOtmAfwZswDeDPuBrDZbIbVatUUdO/C5XL5MYfr9Tr6L5fLUYi32+0m7etwOp2mr0/cDQBSi8Xii2TKer2erF6P8/k88oLfs6AGYyCut9vtZPF/cbvdvnInmgOg4L8BdpysHtBxenvA/5He394AHnEA+mez2fNw9WD+Hh7pgfXJ4Z8MgEI8Qfzil43En720ORwOk3YYr7469cfjcdIO43f6ko/vJO9zog263iAsHrvkwX76yKvWlz6g5q5PI3vwQbBp1SuaA9A5xQbzhmFDUgrY7/djwDxdJiMx5FkjFIvwTUxi4W9Okf45DG2MKQd+te8BX2wQ85M7gb96dLl2UHkY0Js7n2j5soceX/3QJc9vD4DiMxANSDigJEQTq50F2WAE5ICFOeFRQZzWEFvADhsbVH1seB4mG+ew5MqbLoxnj7RJUH/NB556gmiuSRG+vaYWkVOuQCdJ4/Crrvq3yDOgGqMWl3DgIm+W/5mYO+tPPr0m1r7JKdHzffqPsCfPK2hCT2veAApkn1Oj3qsJknDqhbdC8ub0VPaKEx4Y7YX1ut8afu7BN7kK4+QNqFy+NQCuHQmrAMiSwAbR1CSVJH16kiBxzAFseM8fH/0l7xo9cCDqK7AzB/zhJA/2PAi5x9ARvtmzuQyTNTmJQzzWmRufygV/Y+MnmgNoCY5CO/YUGin4Zi/9HZgNrv6IcCiK+SwqG4qw728PDBybjMs6eTsA8yn5NyEPhMLaAYEel8zvEO4GQBAUPUmwhjAFeIIS7KHjhCQ5gI59izdvgj3i64s+46j3/W5xrJCTfpW3AzBv5q+wfvMnKldh3elzN4DfjhzAqzAPIEDjeSbmAfwaDMMHnLI58i4CrwsAAAAASUVORK5CYII="/><span class="instok">Эскада Спорт</span>','<img class="ib" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAAARCAYAAAAi5qlcAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAK7SURBVFhH7ZY9ciIxEIX3tFyGM3ACcmJSQjIiMhIiEhKScX3j+VyPLqlY410IPK+qi5H673W3JPvPMOOtmAfwZswDeDPuBrDZbIbVatUUdO/C5XL5MYfr9Tr6L5fLUYi32+0m7etwOp2mr0/cDQBSi8Xii2TKer2erF6P8/k88oLfs6AGYyCut9vtZPF/cbvdvnInmgOg4L8BdpysHtBxenvA/5He394AHnEA+mez2fNw9WD+Hh7pgfXJ4Z8MgEI8Qfzil43En720ORwOk3YYr7469cfjcdIO43f6ko/vJO9zog263iAsHrvkwX76yKvWlz6g5q5PI3vwQbBp1SuaA9A5xQbzhmFDUgrY7/djwDxdJiMx5FkjFIvwTUxi4W9Okf45DG2MKQd+te8BX2wQ85M7gb96dLl2UHkY0Js7n2j5soceX/3QJc9vD4DiMxANSDigJEQTq50F2WAE5ICFOeFRQZzWEFvADhsbVH1seB4mG+ew5MqbLoxnj7RJUH/NB556gmiuSRG+vaYWkVOuQCdJ4/Crrvq3yDOgGqMWl3DgIm+W/5mYO+tPPr0m1r7JKdHzffqPsCfPK2hCT2veAApkn1Oj3qsJknDqhbdC8ub0VPaKEx4Y7YX1ut8afu7BN7kK4+QNqFy+NQCuHQmrAMiSwAbR1CSVJH16kiBxzAFseM8fH/0l7xo9cCDqK7AzB/zhJA/2PAi5x9ARvtmzuQyTNTmJQzzWmRufygV/Y+MnmgNoCY5CO/YUGin4Zi/9HZgNrv6IcCiK+SwqG4qw728PDBybjMs6eTsA8yn5NyEPhMLaAYEel8zvEO4GQBAUPUmwhjAFeIIS7KHjhCQ5gI59izdvgj3i64s+46j3/W5xrJCTfpW3AzBv5q+wfvMnKldh3elzN4DfjhzAqzAPIEDjeSbmAfwaDMMHnLI58i4CrwsAAAAASUVORK5CYII="/><span class="instok">Эскада Спорт</span>','<img class="ib" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJMAAAARCAYAAADZnZ7GAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAPkSURBVGhD7ZY9buMwEIX3tL5MzuATuE+dNqW7VO7cpHLjJo0Xn9ef8TymbEpRsECgBxAiqZk3v6T057RgwUxYmmnBbFiaacFsuDbT+/v7ab1en58Vb29v53e73e683mw25yGYv76+XlbzAD9eXl6uY27+IWCHWA+Hw2Xn51HzCT4/Py+zPvxEDcbi2kz7/f60Wq3OhauwoMfj8WYtmFOAuUBi9AVenqzntDEEbGBrbDG/g5pPmiLXPTBX/xM3nzmLlqfSJnvkaG8gFKjnxLf49G2oyHX/mR3eezgSU5sJvh6dHhliZbSAfsvvuWswhEf6N83EiSCRfNaEex8fH5ed+2AzEORqYH6y4GEw95PZgrLomTgCyCC4vZDDV+WxiX0bgv30G6QvPOFJXnVJ2na7vdoQxucnhcMmn5wpr59yKZNNxZoBvJWrXMbJEz/Tb/fA2BroI7EIb0fz11PDm2bCOQUF81yDusccxwncdyaBZvA9zpJUbGSgFSQunWawlycSfXngtekZBK4ddAXBu4eMdlJGXvzX93xvsU088rwn6fBX+SE/WYvUsekY+Pj19XXWQwdd/Go1OWs4p9QA3+UXcoDeGt40E0AJQRrLIEhgIg0B1w6DSNgIrYS3gJwnBh8YzOUhEPY8OdhknQFWO+oQl7C4JAgoYww2j7dA5QT6ZCFTv/IBZB75WdcWmz0aLLmEOo6WzKMa5DqbN/GshnfN5GnlaaIz+aASMTdYngScYK1Oyj4CJ1KQGIviaaxF4sl6TJEAvqXPldfEYjfngsSiIzcj9SsfQGasn62D5UECvvM5tgbWnRhzLnpqeNdMdF8qVQVQ95lDTnC+s4vzCnWv6ie8wuttaNHdr0Ua00z6AUzc0M0E1COG1M9ceXNV/SG+Hj8rsIefHvKqw97UGviLY4z5rreGd80ETIAEFZWIuclJw8Am8DT7vjoiLJA6FMEEsccc1CLxZP2oSPqCDPJ5XZukygtsOOSSv9pkjUzqt/gqjz4I1/gHPGDmlFu7pSPn1Bqgz17Kgl79ZjPhPMKM+okDkCQR80yOCUQ3m0M9xxCyeXJkY2vDItXCgpYd/4EcvLdBQeUFnlqGN5hQXlsZe74f00zpI4UE1Q4j/WadnOlHbw2y7t60oFe/2UyA4DMBifqOeTXOnv89rHHU4JEd4k6QCJKJXvKDFkf1g3XLDjLpT2LIt1byBDzwEScxo2/sU/2Ek1H/Hc0HthKVc0oNyDcNk00pevQHm2nBv88JCeNGJMn1P+63gMagkbzNaJopWJrpCbiNPK31Nvgt4MAQ43cPzNJMT9C6zn8jiDE/k+NxOv0Fiauaqa4HS5AAAAAASUVORK5CYII="/><span class="instok">Вика Смоляницкая</span>','<img class="ib" src="//farm1.staticflickr.com/681/21161771328_edc2ebf725_o.jpg"/><span class="instok">Дороти Перкинс</span>','<img class="ib" src="//farm6.staticflickr.com/5750/21262933759_dd58c6a8c6_o.jpg"/><span class="instok">Том Фар</span>','<img class="ib" src="//farm6.staticflickr.com/5806/21178948688_5c4c222601_o.jpg"/><span class="instok">Тутто Бене</span>'];
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