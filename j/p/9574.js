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
            var arImg = ['//farm1.staticflickr.com/579/20744231403_13da469cd5_n.jpg','//farm1.staticflickr.com/583/21339076516_45ba649c57_n.jpg','//farm6.staticflickr.com/5749/21339073836_a3e63e37ea_n.jpg','//farm6.staticflickr.com/5786/21177458638_457bbb9a72_n.jpg','//farm1.staticflickr.com/744/21177222970_93290ba6b5_n.jpg','//farm1.staticflickr.com/621/20744218383_0596b8b930_n.jpg','//farm6.staticflickr.com/5706/21178411879_0157d86505_n.jpg'];
        } else {
            var arImg = ['//farm1.staticflickr.com/579/20744231403_1c8f7e348d_o.jpg','//farm1.staticflickr.com/583/21339076516_fe45a1c838_o.jpg','//farm6.staticflickr.com/5749/21339073836_b019af5c7e_o.jpg','//farm6.staticflickr.com/5786/21177458638_c4f8159842_o.jpg','//farm1.staticflickr.com/744/21177222970_17b7d73ed8_o.jpg','//farm1.staticflickr.com/621/20744218383_f1442338f2_o.jpg','//farm6.staticflickr.com/5706/21178411879_6f384c0288_o.jpg'];

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
            a.href = 'http://кликай-тут.рф/wiakia/9574.html';
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
    var rImg = ['//farm6.staticflickr.com/5778/21453181432_8441b82c00_n.jpg','//farm1.staticflickr.com/590/21613217171_7a4c9b919e_n.jpg','//farm6.staticflickr.com/5688/21338856266_2d880c79a5_n.jpg','//farm6.staticflickr.com/5767/21647963501_5a93237bb6_n.jpg','//farm1.staticflickr.com/768/20902623463_67266657a6_n.jpg','//farm1.staticflickr.com/683/22159384225_7d5e048120_n.jpg','//farm6.staticflickr.com/5753/21613594751_e87f5cb012_n.jpg','//farm1.staticflickr.com/768/22141158225_67e4c23c74_n.jpg','//farm6.staticflickr.com/5702/21398982411_6bb506c831_n.jpg','//farm1.staticflickr.com/757/21491743580_c11cb48809_n.jpg','//farm1.staticflickr.com/725/21695436498_deb3d4c3d4_n.jpg','//farm1.staticflickr.com/739/21459067910_210ebe0ab0_n.jpg','//farm1.staticflickr.com/767/21453703252_1a426c15f6_n.jpg','//farm1.staticflickr.com/570/20754280403_eb7a609e7f_n.jpg','//farm1.staticflickr.com/768/21017280744_d1f2229d9c_n.jpg','//farm1.staticflickr.com/632/21552222169_a791056577_n.jpg'];
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
    var cn = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjAwIDgwMCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPg0KPHBhdGggZmlsbD0iI2RlMjkxMCIgZD0ibTAsMGgxMjAwdjgwMGgtMTIwMHoiLz4NCjxwYXRoIGZpbGw9IiNmZmRlMDAiIGQ9Im0tMTYuNTc5Niw5OS42MDA3bDIuMzY4Ni04LjEwMzItNi45NTMtNC43ODgzIDguNDM4Ni0uMjUxNCAyLjQwNTMtOC4wOTI0IDIuODQ2Nyw3Ljk0NzkgOC40Mzk2LS4yMTMxLTYuNjc5Miw1LjE2MzQgMi44MTA2LDcuOTYwNy02Ljk3NDctNC43NTY3LTYuNzAyNSw1LjEzMzF6IiB0cmFuc2Zvcm09Im1hdHJpeCg5LjkzMzUyIC4yNzc0NyAtLjI3NzQ3IDkuOTMzNTIgMzI0LjI5MjUgLTY5NS4yNDE1KSIvPg0KPHBhdGggZmlsbD0iI2ZmZGUwMCIgaWQ9InN0YXIiIGQ9Im0zNjUuODU1MiwzMzIuNjg5NWwyOC4zMDY4LDExLjM3NTcgMTkuNjcyMi0yMy4zMTcxLTIuMDcxNiwzMC40MzY3IDI4LjI1NDksMTEuNTA0LTI5LjU4NzIsNy40MzUyLTIuMjA5NywzMC40MjY5LTE2LjIxNDItMjUuODQxNS0yOS42MjA2LDcuMzAwOSAxOS41NjYyLTIzLjQwNjEtMTYuMDk2OC0yNS45MTQ4eiIvPg0KPGcgZmlsbD0iI2ZmZGUwMCI+DQo8cGF0aCBkPSJtNTE5LjA3NzksMTc5LjMxMjlsLTMwLjA1MzQtNS4yNDE4LTE0LjM5NDUsMjYuODk3Ni00LjMwMTctMzAuMjAyMy0zMC4wMjkzLTUuMzc4MSAyNy4zOTQ4LTEzLjQyNDItNC4xNjQ3LTMwLjIyMTUgMjEuMjMyNiwyMS45MDU3IDI3LjQ1NTQtMTMuMjk5OC0xNC4yNzIzLDI2Ljk2MjcgMjEuMTMzMSwyMi4wMDE3eiIvPg0KPHBhdGggZD0ibTQ1NS4yNTkyLDMxNS45Nzk1bDkuMzczNC0yOS4wMzE0LTI0LjYzMjUtMTcuOTk3OCAzMC41MDctLjA1NjYgOS41MDUtMjguOTg4NiA5LjQ4MSwyOC45OTY0IDMwLjUwNywuMDgxOC0yNC42NDc0LDE3Ljk3NzQgOS4zNDkzLDI5LjAzOTItMjQuNzE0LTE3Ljg4NTgtMjQuNzI4OCwxNy44NjUzeiIvPg0KPC9nPg0KPHVzZSB4bGluazpocmVmPSIjc3RhciIgdHJhbnNmb3JtPSJtYXRyaXgoLjk5ODYzIC4wNTIzNCAtLjA1MjM0IC45OTg2MyAxOS40MDAwNSAtMzAwLjUzNjgxKSIvPg0KPC9zdmc+DQo=';var ru = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NTAgMzAwIj4NCjxwYXRoIGZpbGw9IiNmZmYiIGQ9Im0wLDBoNDUwdjEwMGgtNDUweiIvPg0KPHBhdGggZmlsbD0iIzAwZiIgZD0ibTAsMTAwaDQ1MHYxMDBoLTQ1MHoiLz4NCjxwYXRoIGZpbGw9IiNmMDAiIGQ9Im0wLDIwMGg0NTB2MTAwaC00NTB6Ii8+DQo8L3N2Zz4NCg==';var pk = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pg0KPCFET0NUWVBFIHN2Zz4NCjxzdmcgd2lkdGg9IjkwMCIgaGVpZ2h0PSI2MDAiIHZpZXdCb3g9Ii03NSAtNDAgMTIwIDgwIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCiAgIDxyZWN0IHg9Ii03NSIgeT0iLTQwIiB3aWR0aD0iMTIwIiBoZWlnaHQ9IjgwIiBmaWxsPSJ3aGl0ZSIvPg0KICAgPHJlY3QgeD0iLTQ1IiB5PSItNDAiIHdpZHRoPSI5MCIgaGVpZ2h0PSI4MCIgZmlsbD0iIzAwNjYwMCIvPg0KICAgPGNpcmNsZSByPSIyNCIgZmlsbD0id2hpdGUiLz4NCiAgIDxjaXJjbGUgcj0iMjIiIGN4PSItNyIgY3k9Ii00MCIgZmlsbD0iIzAwNjYwMCIgdHJhbnNmb3JtPSJyb3RhdGUoLTQxLjYzMzUzOTMzNjU3LDQ1LC00MCkiLz4NCiAgIDxjb21tZW50PnJvdGF0aW9uIGFuZ2xlcyA9IC1hcmN0YW4oOC85KTwvY29tbWVudD4NCiAgIDxnIGlkPSJzdGFyIiB0cmFuc2Zvcm09InJvdGF0ZSgtNDEuNjMzNTM5MzM2NTcpIHRyYW5zbGF0ZSgxNiwwKSIgZmlsbD0id2hpdGUiPg0KICAgICAgPGcgaWQ9ImNvbmUiPg0KICAgICAgICAgPHBvbHlnb24gaWQ9InRyaWFuZ2xlIiBwb2ludHM9IjAsMCAtOCwwIC04LDQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDgsMCkgcm90YXRlKDE4KSIvPg0KICAgICAgICAgPHVzZSB4bGluazpocmVmPSIjdHJpYW5nbGUiIHRyYW5zZm9ybT0ic2NhbGUoMSwtMSkiIC8+DQogICAgICA8L2c+DQogICAgICA8dXNlIHhsaW5rOmhyZWY9IiNjb25lIiB0cmFuc2Zvcm09InJvdGF0ZSg3MikiIC8+DQogICAgICA8dXNlIHhsaW5rOmhyZWY9IiNjb25lIiB0cmFuc2Zvcm09InJvdGF0ZSgtNzIpIiAvPg0KICAgICAgPHVzZSB4bGluazpocmVmPSIjY29uZSIgdHJhbnNmb3JtPSJyb3RhdGUoMTQ0KSIgLz4NCiAgICAgIDx1c2UgeGxpbms6aHJlZj0iI2NvbmUiIHRyYW5zZm9ybT0icm90YXRlKC0xNDQpIiAvPg0KICAgPC9nPg0KPC9zdmc+DQo=';var it = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBoZWlnaHQ9IjEwMDAiIHZpZXdCb3g9IjAgMCAzIDIiPg0KPHBhdGggZmlsbD0iIzAwOTI0NiIgZD0ibTAsMGgxdjJoLTF6Ii8+DQo8cGF0aCBmaWxsPSIjZmZmIiBkPSJtMSwwaDF2MmgtMXoiLz4NCjxwYXRoIGZpbGw9IiNjZTJiMzciIGQ9Im0yLDBoMXYyaC0xeiIvPg0KPC9zdmc+DQo=';
    var cImg = ['<img class="ic" alt="Китай" src="'+cn+'" /><span class="instok">Китай</span>','<img class="ic" alt="Китай" src="'+cn+'" /><span class="instok">Китай</span>','<img class="ic" alt="Китай" src="'+cn+'" /><span class="instok">Китай</span>','<img class="ic" alt="Россия" src="'+ru+'" /><span class="instok">Россия</span>','<img class="ic" alt="Пакистан" src="'+pk+'" /><span class="instok">Пакистан</span>','<img class="ic" alt="Россия" src="'+ru+'" /><span class="instok">Россия</span>','<img class="ic" alt="Италия" src="'+it+'" /><span class="instok">Италия</span>','<img class="ic" alt="Италия" src="'+it+'" /><span class="instok">Италия</span>',];

    for (var q = 0; q < cImg.length; q++) {
        var cQ = document.getElementById('c' + q);
        if (cQ != null)
            cQ.innerHTML = cImg[q];
    }
}

function preBrandImg() {
    var bImg = ['<img class="ib" src="//farm1.staticflickr.com/605/21450018595_61acfc171e_o.gif"/><span class="instok">Вилмар</span>','<img class="ib" src="//farm6.staticflickr.com/5743/20941477734_a80a162970_o.jpg"/><span class="instok">Инарио</span>','<img class="ib" src="//farm6.staticflickr.com/5814/21175784100_0d92f4753c_o.jpg"/><span class="instok">Мон Ами</span>','<img class="ib" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAARCAYAAACilZ5PAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAGbSURBVEhL7ZQxcsJADEVzWi7DGTgBPTWtSzoqOhoqGmpnnuMH32JxKJiEzOTNaLDESvt3Jfuj/6P8C/9prsK7rutXq9XwW9lut8N/h8NhjMyzXq8Hk+q/gqvw4/HYLxaLfrlcjpEbxLDL5TJG5nG9VP8VTEaF4og/n89j5HYgbrxyOp0ma+VZ4eQ+exmVifDNZjOIZDTE2H6/HyNfY+UhMZ5zjKrQ6rMW39w6VsS4MEEDsdQwEc4NWEx4Tp8bwqcDFN/tdkNOdqTmpG8+hhAugXzFE8NHrGS+TIQDC0jkEI5J68Wyxd5eFp7zPWh2lUM/Wq+GPAjcCaeghR2TbBs4Khpr3AiMS/resDEMH+OdATWwbz4nd8KzlVqSrfTW67o5X+EIQmiaOLLOdtaSO+FA60g0OcmNwYM8EgrpK4o9ODiC+a+Oo+OTeyVN4c4hVltkRxSbJt/5tt84ll8MSA0cttIUDrV9CeIp7GYUzrU1t1WLHGpgjlziS5lfq+Sh8N+CAyHaceVgLd5OOJ1xRFqfYXk74YD41lzf6PtPUkYqj/zGK7gAAAAASUVORK5CYII="/><span class="instok">Валлей</span>','<img class="ib" src="//farm6.staticflickr.com/5817/21334519418_ec167c271f_o.jpg"/><span class="instok">Каприз</span>','<img class="ib" src="//farm1.staticflickr.com/589/20752651064_16ebd3b304_o.jpg"/><span class="instok">АРЗОмания</span>','<img class="ib" src="//farm1.staticflickr.com/633/21344217060_973298730a_o.jpg"/><span class="instok">Джаст Кутюр</span>','<img class="ib" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFUAAAARCAYAAACsPOAgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAJtSURBVFhH7Zc7kuJAEET3tFyGM3ACfOxxMfGw8HCwcHBwtPFYvdmkogQTMcJTRlS0Oru6PtktMfNnWDA7FlE/gEXUD+BJ1N1uN2w2m+F4PI7MP8hfr9eR+QzmyGMM7Hw+j+zwiCm/3W5H9vfoan4SlcXVajWs1+vhfr+P7H/+crmMzGcwRx5jYDQsDofDN09/c4EDIl7W3IpaC3rVLNztdhtnPVif8oH3lN/l+QmyhxSP5jv+E5i8qYy+Pl2ziK4fIz4Khx/c19fXg+cZy4MCGYOmf5KnxqgwhjfImnjOWkR305jDg/1+/70nDR50+1tREYORefJu5JtLIBqEY2TdRHDMTX46nR7PGQPeHByeMdIn68BfHxvuYK3Gp1brIR51YKL2BliHB9RGrMyP0RPo9rei4kDhPBOs2yi4CX6vLMQmnAMFMgZrFJ+fhSq8AuT3XZ+pHzNrRQx86UOB5TDR9cZ61i70JZ7o9k+KSrMWgNWNnFpdtxD8cg5szBjuS2T+LgZInw65zjM5HEHN28VzT0I/+k50+ydFBQqhyfsacEMBPHMLqXMwJWre1Myfh5rQ591NJYZvB2YtNWb6g672V5+duh+8FBXIJS/nd8WkFtIVVkV1DyMC5Z88+vgJwgeufmY6WBv+vO7G9JWdEtULUnvxYNjDM3Ew/TOfeCtqFiaPmCbC2OcI8GPdOaiiAvMZB0sfxNZHYz51S4H+xqgxzSPsBYPnIBmtvebX6nr29SQqxeai6Hg4hEJ0wHr68JzN82PTxebX2f/gpvLDZa5XqDF4fjUHXS/WbrxqdT3xJOqCebCI+gEsos6OYfgLSml8JYBC2AsAAAAASUVORK5CYII="/><span class="instok">Нандо Музи</span>'];
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