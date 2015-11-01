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
            var arImg = ['//farm1.staticflickr.com/654/20745696643_6e2593dbb0_n.jpg','//farm6.staticflickr.com/5626/21356012642_653a4ec207_n.jpg','//farm1.staticflickr.com/716/21375107801_0e2b7ba3a4_n.jpg','//farm6.staticflickr.com/5758/21356022552_35abc35570_n.jpg','//farm1.staticflickr.com/626/21178939988_a86e0aa144_n.jpg','//farm6.staticflickr.com/5786/21340558396_0733620dfd_n.jpg'];
        } else {
            var arImg = ['//farm1.staticflickr.com/654/20745696643_e0bdae8dd2_o.jpg','//farm6.staticflickr.com/5626/21356012642_768a4faefc_o.jpg','//farm1.staticflickr.com/716/21375107801_19dea0e698_o.jpg','//farm6.staticflickr.com/5758/21356022552_21f463ed01_o.jpg','//farm1.staticflickr.com/626/21178939988_1cce8267a9_o.jpg','//farm6.staticflickr.com/5786/21340558396_4d3008fd32_o.jpg'];

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
            a.href = 'http://кликай-тут.рф/wiakia/12062.html';
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
    var rImg = ['//farm1.staticflickr.com/595/22314376631_91a008aa8a_n.jpg','//farm1.staticflickr.com/629/21707128053_5d90e3cafc_n.jpg','//farm6.staticflickr.com/5772/21572832572_a03782e68f_n.jpg','//farm1.staticflickr.com/657/21353054214_167a1a2320_n.jpg','//farm1.staticflickr.com/732/21118314363_bb1dd31054_n.jpg','//farm6.staticflickr.com/5630/22342581291_e62b919ac6_n.jpg','//farm1.staticflickr.com/732/22145142719_c490823999_n.jpg','//farm1.staticflickr.com/677/22300162026_c5f6a80aaa_n.jpg','//farm1.staticflickr.com/773/22127172620_3a4d43914d_n.jpg','//farm6.staticflickr.com/5620/21536083421_54014efca7_n.jpg','//farm6.staticflickr.com/5620/21977258198_ffd264b9ac_n.jpg','//farm1.staticflickr.com/567/22117222030_a12a182b97_n.jpg','//farm1.staticflickr.com/703/21472315661_ae64bd7082_n.jpg','//farm1.staticflickr.com/767/21537558320_5071ed7017_n.jpg','//farm6.staticflickr.com/5647/21185940038_82b16a0c4e_n.jpg','//farm1.staticflickr.com/700/22283702792_e9747c9e1a_n.jpg','//farm1.staticflickr.com/775/21647701392_d197669dd3_n.jpg','//farm6.staticflickr.com/5621/22078052332_e317dfe34e_n.jpg','//farm6.staticflickr.com/5662/20844773144_d427e76774_n.jpg','//farm1.staticflickr.com/650/21421603391_f3c8eb24ce_n.jpg'];
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
    var cn = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjAwIDgwMCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPg0KPHBhdGggZmlsbD0iI2RlMjkxMCIgZD0ibTAsMGgxMjAwdjgwMGgtMTIwMHoiLz4NCjxwYXRoIGZpbGw9IiNmZmRlMDAiIGQ9Im0tMTYuNTc5Niw5OS42MDA3bDIuMzY4Ni04LjEwMzItNi45NTMtNC43ODgzIDguNDM4Ni0uMjUxNCAyLjQwNTMtOC4wOTI0IDIuODQ2Nyw3Ljk0NzkgOC40Mzk2LS4yMTMxLTYuNjc5Miw1LjE2MzQgMi44MTA2LDcuOTYwNy02Ljk3NDctNC43NTY3LTYuNzAyNSw1LjEzMzF6IiB0cmFuc2Zvcm09Im1hdHJpeCg5LjkzMzUyIC4yNzc0NyAtLjI3NzQ3IDkuOTMzNTIgMzI0LjI5MjUgLTY5NS4yNDE1KSIvPg0KPHBhdGggZmlsbD0iI2ZmZGUwMCIgaWQ9InN0YXIiIGQ9Im0zNjUuODU1MiwzMzIuNjg5NWwyOC4zMDY4LDExLjM3NTcgMTkuNjcyMi0yMy4zMTcxLTIuMDcxNiwzMC40MzY3IDI4LjI1NDksMTEuNTA0LTI5LjU4NzIsNy40MzUyLTIuMjA5NywzMC40MjY5LTE2LjIxNDItMjUuODQxNS0yOS42MjA2LDcuMzAwOSAxOS41NjYyLTIzLjQwNjEtMTYuMDk2OC0yNS45MTQ4eiIvPg0KPGcgZmlsbD0iI2ZmZGUwMCI+DQo8cGF0aCBkPSJtNTE5LjA3NzksMTc5LjMxMjlsLTMwLjA1MzQtNS4yNDE4LTE0LjM5NDUsMjYuODk3Ni00LjMwMTctMzAuMjAyMy0zMC4wMjkzLTUuMzc4MSAyNy4zOTQ4LTEzLjQyNDItNC4xNjQ3LTMwLjIyMTUgMjEuMjMyNiwyMS45MDU3IDI3LjQ1NTQtMTMuMjk5OC0xNC4yNzIzLDI2Ljk2MjcgMjEuMTMzMSwyMi4wMDE3eiIvPg0KPHBhdGggZD0ibTQ1NS4yNTkyLDMxNS45Nzk1bDkuMzczNC0yOS4wMzE0LTI0LjYzMjUtMTcuOTk3OCAzMC41MDctLjA1NjYgOS41MDUtMjguOTg4NiA5LjQ4MSwyOC45OTY0IDMwLjUwNywuMDgxOC0yNC42NDc0LDE3Ljk3NzQgOS4zNDkzLDI5LjAzOTItMjQuNzE0LTE3Ljg4NTgtMjQuNzI4OCwxNy44NjUzeiIvPg0KPC9nPg0KPHVzZSB4bGluazpocmVmPSIjc3RhciIgdHJhbnNmb3JtPSJtYXRyaXgoLjk5ODYzIC4wNTIzNCAtLjA1MjM0IC45OTg2MyAxOS40MDAwNSAtMzAwLjUzNjgxKSIvPg0KPC9zdmc+DQo=';var ru = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NTAgMzAwIj4NCjxwYXRoIGZpbGw9IiNmZmYiIGQ9Im0wLDBoNDUwdjEwMGgtNDUweiIvPg0KPHBhdGggZmlsbD0iIzAwZiIgZD0ibTAsMTAwaDQ1MHYxMDBoLTQ1MHoiLz4NCjxwYXRoIGZpbGw9IiNmMDAiIGQ9Im0wLDIwMGg0NTB2MTAwaC00NTB6Ii8+DQo8L3N2Zz4NCg==';var in = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgNDUwIDMwMCIgaGVpZ2h0PSI4MDAiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4NCjxwYXRoIGZpbGw9IiNmZjk5MzIiIGQ9Im0wLDBoNDUwdjEwMGgtNDUweiIvPg0KPHBhdGggZmlsbD0iI2ZmZiIgZD0ibTAsMTAwaDQ1MHYxMDBoLTQ1MHoiLz4NCjxwYXRoIGZpbGw9IiMxMjg4MDciIGQ9Im0wLDIwMGg0NTB2MTAwaC00NTB6Ii8+DQo8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyMjUgMTUwKSI+DQo8Y2lyY2xlIGZpbGw9IiMwMDAwODAiIHI9IjQ2LjUiLz4NCjxjaXJjbGUgZmlsbD0iI2ZmZiIgcj0iNDEiLz4NCjxnIGlkPSI4Ij4NCjxnIGlkPSI0Ij4NCjxnIGlkPSIyIj4NCjxnIGlkPSIxIj4NCjxjaXJjbGUgZmlsbD0iIzAwMDA4MCIgcj0iMi41IiB0cmFuc2Zvcm09Im1hdHJpeCguOTkxNDQgLjEzMDUzIC0uMTMwNTMgLjk5MTQ0IDQwLjY0OTI0IDUuMzUxNTcpIi8+DQo8cGF0aCBmaWxsPSIjMDAwMDgwIiBkPSJtMCw0MWwxLjUtMjRxLTEtMy0xLjUtMTctLjUsMTQtMS41LDE3eiIvPg0KPC9nPg0KPHVzZSB4bGluazpocmVmPSIjMSIgdHJhbnNmb3JtPSJyb3RhdGUoMTUpIi8+DQo8L2c+DQo8dXNlIHhsaW5rOmhyZWY9IiMyIiB0cmFuc2Zvcm09InJvdGF0ZSgzMCkiLz4NCjwvZz4NCjx1c2UgeGxpbms6aHJlZj0iIzQiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPg0KPC9nPg0KPHVzZSB4bGluazpocmVmPSIjOCIgdHJhbnNmb3JtPSJyb3RhdGUoMTIwKSIvPg0KPHVzZSB4bGluazpocmVmPSIjOCIgdHJhbnNmb3JtPSJtYXRyaXgoLS41IC0uODY2MDMgLjg2NjAzIC0uNSAwIDApIi8+DQo8Y2lyY2xlIGZpbGw9IiMwMDAwODAiIHI9IjgiLz4NCjwvZz4NCjwvc3ZnPg0K';var ro = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NTAgMzAwIj4NCjxwYXRoIGZpbGw9IiMwMDJiN2YiIGQ9Im0wLDBoMTUwdjMwMGgtMTUweiIvPg0KPHBhdGggZmlsbD0iI2ZjZDExNiIgZD0ibTE1MCwwaDE1MHYzMDBoLTE1MHoiLz4NCjxwYXRoIGZpbGw9IiNjZTExMjYiIGQ9Im0zMDAsMGgxNTB2MzAwaC0xNTB6Ii8+DQo8L3N2Zz4NCg==';var gb = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgNjAgMzAiIGhlaWdodD0iNjAwIj4NCjxkZWZzPg0KPGNsaXBQYXRoIGlkPSJ0Ij4NCjxwYXRoIGQ9Im0zMCwxNWgzMHYxNXp2MTVoLTMwemgtMzB2LTE1enYtMTVoMzB6Ii8+DQo8L2NsaXBQYXRoPg0KPC9kZWZzPg0KPHBhdGggZmlsbD0iIzAwMjQ3ZCIgZD0ibTAsMHYzMGg2MHYtMzB6Ii8+DQo8cGF0aCBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iNiIgZD0ibTAsMGw2MCwzMG0wLTMwbC02MCwzMCIvPg0KPHBhdGggc3Ryb2tlPSIjY2YxNDJiIiBzdHJva2Utd2lkdGg9IjQiIGQ9Im0wLDBsNjAsMzBtMC0zMGwtNjAsMzAiIGNsaXAtcGF0aD0idXJsKCN0KSIvPg0KPHBhdGggc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjEwIiBkPSJtMzAsMHYzMG0tMzAtMTVoNjAiLz4NCjxwYXRoIHN0cm9rZT0iI2NmMTQyYiIgc3Ryb2tlLXdpZHRoPSI2IiBkPSJtMzAsMHYzMG0tMzAtMTVoNjAiLz4NCjwvc3ZnPg0K';
    var cImg = ['<img class="ic" alt="Китай" src="'+cn+'" /><span class="instok">Китай</span>','<img class="ic" alt="Россия" src="'+ru+'" /><span class="instok">Россия</span>','<img class="ic" alt="Индия" src="'+in+'" /><span class="instok">Индия</span>','<img class="ic" alt="Россия" src="'+ru+'" /><span class="instok">Россия</span>','<img class="ic" alt="Румыния" src="'+ro+'" /><span class="instok">Румыния</span>','<img class="ic" alt="Китай" src="'+cn+'" /><span class="instok">Китай</span>','<img class="ic" alt="Великобритания" src="'+gb+'" /><span class="instok">Великобритания</span>','<img class="ic" alt="Китай" src="'+cn+'" /><span class="instok">Китай</span>',];

    for (var q = 0; q < cImg.length; q++) {
        var cQ = document.getElementById('c' + q);
        if (cQ != null)
            cQ.innerHTML = cImg[q];
    }
}

function preBrandImg() {
    var bImg = ['<img class="ib" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGUAAAARCAYAAADEz2IYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAKmSURBVFhH7ZaxkuIwEETva/kZvoEvICcmJSQjIiMhIiEh0dXbdXPtZuR1cFXrwF01hSX1jFpuSeZPW7E4rKYsEKspC8SHKZfLpe12u7bdbr9iv9+3x+MxjH6DPjge9N1ut4HR2vl8/uCId71eB9Y36CME1a/mdZ6QmnnOOXp6CMack+0qUm+lS2AdVY3j8dher9fA+oeRKafTqW02m/fCCLWfz+fAal9t9StoEzLGa1U8f2kaE8TLhSYPwNE8rplAg9DTQ4gnTrarHELIduJ+v781eb7aaczIFBaUpMPhMBIKVNQhHr8gFyiwO+j3F571eIZDaNeC5GkOdPum4eTQX3FTjyM5c3JA6krIFHQ68p0JH6aIpKsDgyjqqERoAZq4tyC9sLmm8KxN0uP5tSmg2Y2a84KTMycHpK5EzxT0VbkjU7hStFCCZwzKRasQkxGMy9BcEC+fZ4JTovo/XV9E7qQezyFNCkF64KNV4btUHH69nTnE1AlOoIM65CWU6xvo40PPCUEoRAop8iX6mMIn9QU5H05+hMUR1OaEKBfjezyH+AoZk3oUfmJ/yxTXCUpTBBmUBSUC0Yo8TVoQv8Dr+K4AuShv67ojr8fLa4qg3xebeiokZ04OSF2JOSfF8TYFAyqCCnp/xUtUC9I/pRSX9bKtvNQho7kWE8zB2JJN4cao+rsfena+fyvoE34SAaoF6cNG/9Txz7bn9fqlmZPlJv4PU/y76JF/QHoc39jq731fwcgUTotM8EgnJWIKTEwuvw7MoJ98XTtZr6qvetnPgivN8Hzunh5HctTuhQxnrmqcgCNTMsjzzSl8fFMARRBEgiZ2aKIpaIdoNzmUr7Gsl22h1w/oR29P85QeITlq90KoxhTC1FiiNGXF72I1ZYFYTVkcWvsLSIMd8lIektcAAAAASUVORK5CYII="/><span class="instok">Спрингфилд</span>','<img class="ib" src="//farm6.staticflickr.com/5643/21382269311_917b5d88d0_o.jpg"/><span class="instok">Харизмас</span>','<img class="ib" src="//farm1.staticflickr.com/744/21262849968_4b98c666a9_o.jpg"/><span class="instok">Десигуаль</span>','<img class="ib" src="//farm1.staticflickr.com/721/21373866201_65eea64848_o.jpg"/><span class="instok">ЛуАнн</span>','<img class="ib" src="//farm1.staticflickr.com/681/21161771328_edc2ebf725_o.jpg"/><span class="instok">Дороти Перкинс</span>','<img class="ib" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHsAAAARCAYAAAD9qNNDAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAOFSURBVGhD7ZYrsiJBEEVntWyGNbACPBqLxKFwGBQGg2HiPDjEJScL+tmBG5HR3VmZN39VBX+uX3wMvsP+IHyH/UF4GvZqtbouFot/ZL1e3y2ecTgcrsvl8jqfz38E2/1+f1+9gfXKh2y327vFMzrOzWZzX73hdDo9eMg5kTV0MdCxRoyK8/n88OVdkJM+l8vlrr3hFR8Y1Y9Qxyub2ndjdXVZ92hW4GnYGM9ms0ejFXSsJXa73Y/eNX0R1oT+HWdNjG855NQ2m3k8Hh92rOdgtEfqJgGZJ0OsMIeMp0/X5Hd81puiPXVow3dnB7+gHnS1LupPjhHaYZsEYCdL5E4E6nKwboAMyHtNAP6qp1H6ZtO0zbx48q2YA/nJwbO7EXJ9dBpd55aywdl0MZUvYY/TFn8kkQO076Nhswkzj25TgsnDzmQcalcca/WkpS9wgNlAriE4u2uIYi0YOGz84fEqt2jy4lmbYgxyNK/MVTBk7LRBMr6Yyie0rxtH3wp02L8btn0w78ov2mHzVEzE0wNGQTuYcMeZmwo9dqmjSL4Vfy95T064gO9exTU/4wIbP6rB9Vc2v+HzgGCfNQJ58FXcsNQk0NcY3ogePPvY/aRM/s3OU9wFHUH/yonkKTZ2NkKdYrwctoNFBye6Lj+bzVAAG4lvfDrksLtr8Td8DgTJQyPw0Vc73uUWXV3mKa+3W/UFb69xIKFBDNoR1n/jJF0bkP8D3IHu5GwGiROrXss5bBuZOZqf9sDaiMu730g9BXmN+6zX81S+/O3NfBKsIwDfkX1Xl7bmkHlVTBq2QTzdo12MHl3q67cwlqfGk4K+ohaZwwbGQMdatTdfRNv0yVsLZG5uorT5DZ9c3cEQ+go3MJKHp9blKc74Cnp7K9phczVCqOicp87Thg96RLu8ng2efF696PPEGF9OiqZJ8uIL6rD1ww5gl/bGy7xA/vk0D23lzlvI5k3ly2Fga/2KN4A+iZoHwAcdT2Dd9TYd/VFrh12FRLqd6cBT6inBt9og6HPziI6zxq/Dro2pTcEfqVcxMJ7NNx6nV+S17rU8hc88RlLzq3Aebir5eI5uV4GedTcUeBo2BDSySleUwIcdjGSDRMeHvAI8bASKGtmiNx4nim/z9Jsn4H3Eoy1ciO8VcmiPdEi+tO3kXX7Uk2vy8cw4HazFGOBp2F/83/gO+4PwHfbH4Hr9Cw+ELkbdp07CAAAAAElFTkSuQmCC"/><span class="instok">БСБГ Макс Азрия</span>','<img class="ib" src="//farm6.staticflickr.com/5724/20756101913_cb59572610_o.jpg"/><span class="instok">Бленд</span>','<img class="ib" src="//farm6.staticflickr.com/5749/21177323738_8b4e71ef4d_o.jpg"/><span class="instok">Вис а Вис</span>'];
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