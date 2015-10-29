﻿var reformalOptions = {
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
            var arImg = ['//farm6.staticflickr.com/5690/21338610672_5387087638_n.jpg','//farm1.staticflickr.com/781/21349356795_ff72ed20fa_n.jpg','//farm6.staticflickr.com/5763/20726653584_ee23c3d9b6_n.jpg','//farm6.staticflickr.com/5729/21349346055_4393513162_n.jpg','//farm6.staticflickr.com/5755/21349341365_a5d5f566fb_n.jpg','//farm6.staticflickr.com/5811/21161229720_f26d2736f8_n.jpg','//farm6.staticflickr.com/5770/21349332125_9aa55cbbe6_n.jpg'];
        } else {
            var arImg = ['//farm6.staticflickr.com/5690/21338610672_9d6df27a17_o.jpg','//farm1.staticflickr.com/781/21349356795_81b8c7271a_o.jpg','//farm6.staticflickr.com/5763/20726653584_960e395464_o.jpg','//farm6.staticflickr.com/5729/21349346055_9557e5e80e_o.jpg','//farm6.staticflickr.com/5755/21349341365_a7a4a88f69_o.jpg','//farm6.staticflickr.com/5811/21161229720_f0d9441973_o.jpg','//farm6.staticflickr.com/5770/21349332125_279d47db8a_o.jpg'];

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
            a.href = 'http://кликай-тут.рф/wiakia/22.html';
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
    var rImg = ['https://farm6.staticflickr.com/5706/22123663620_9c4e7f922d_n.jpg','https://farm6.staticflickr.com/5768/22148371802_0302b33292_n.jpg','https://farm1.staticflickr.com/627/21584355616_fee130a864_n.jpg','https://farm1.staticflickr.com/746/21088065454_657f274a88_n.jpg','https://farm1.staticflickr.com/609/20845315893_8e328ece0b_n.jpg','https://farm1.staticflickr.com/621/21354203406_9a7103c9c0_n.jpg','https://farm1.staticflickr.com/755/20985559483_7580d7c18d_n.jpg','https://farm6.staticflickr.com/5827/20869292263_22e55f0888_n.jpg','https://farm1.staticflickr.com/768/21545092359_87aa4993cf_n.jpg','https://farm1.staticflickr.com/615/21279975080_368b3e3627_n.jpg','https://farm6.staticflickr.com/5823/21735469349_3ff7097f68_n.jpg','https://farm1.staticflickr.com/762/21683939341_d9dde750f6_n.jpg','https://farm1.staticflickr.com/649/22110335359_1bfdf27352_n.jpg','https://farm1.staticflickr.com/683/22118311779_fcc35e75b1_n.jpg','https://farm1.staticflickr.com/647/22284198242_80c5159a0b_n.jpg','https://farm1.staticflickr.com/723/21015356234_3189bdefd2_n.jpg','https://farm1.staticflickr.com/774/21746924802_b2a7de9209_n.jpg','https://farm1.staticflickr.com/657/21543277406_43b43c3209_n.jpg','https://farm6.staticflickr.com/5743/21225893378_5c99eefcf4_n.jpg','https://farm6.staticflickr.com/5753/21613594751_e87f5cb012_n.jpg'];
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
    var cn = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjAwIDgwMCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPg0KPHBhdGggZmlsbD0iI2RlMjkxMCIgZD0ibTAsMGgxMjAwdjgwMGgtMTIwMHoiLz4NCjxwYXRoIGZpbGw9IiNmZmRlMDAiIGQ9Im0tMTYuNTc5Niw5OS42MDA3bDIuMzY4Ni04LjEwMzItNi45NTMtNC43ODgzIDguNDM4Ni0uMjUxNCAyLjQwNTMtOC4wOTI0IDIuODQ2Nyw3Ljk0NzkgOC40Mzk2LS4yMTMxLTYuNjc5Miw1LjE2MzQgMi44MTA2LDcuOTYwNy02Ljk3NDctNC43NTY3LTYuNzAyNSw1LjEzMzF6IiB0cmFuc2Zvcm09Im1hdHJpeCg5LjkzMzUyIC4yNzc0NyAtLjI3NzQ3IDkuOTMzNTIgMzI0LjI5MjUgLTY5NS4yNDE1KSIvPg0KPHBhdGggZmlsbD0iI2ZmZGUwMCIgaWQ9InN0YXIiIGQ9Im0zNjUuODU1MiwzMzIuNjg5NWwyOC4zMDY4LDExLjM3NTcgMTkuNjcyMi0yMy4zMTcxLTIuMDcxNiwzMC40MzY3IDI4LjI1NDksMTEuNTA0LTI5LjU4NzIsNy40MzUyLTIuMjA5NywzMC40MjY5LTE2LjIxNDItMjUuODQxNS0yOS42MjA2LDcuMzAwOSAxOS41NjYyLTIzLjQwNjEtMTYuMDk2OC0yNS45MTQ4eiIvPg0KPGcgZmlsbD0iI2ZmZGUwMCI+DQo8cGF0aCBkPSJtNTE5LjA3NzksMTc5LjMxMjlsLTMwLjA1MzQtNS4yNDE4LTE0LjM5NDUsMjYuODk3Ni00LjMwMTctMzAuMjAyMy0zMC4wMjkzLTUuMzc4MSAyNy4zOTQ4LTEzLjQyNDItNC4xNjQ3LTMwLjIyMTUgMjEuMjMyNiwyMS45MDU3IDI3LjQ1NTQtMTMuMjk5OC0xNC4yNzIzLDI2Ljk2MjcgMjEuMTMzMSwyMi4wMDE3eiIvPg0KPHBhdGggZD0ibTQ1NS4yNTkyLDMxNS45Nzk1bDkuMzczNC0yOS4wMzE0LTI0LjYzMjUtMTcuOTk3OCAzMC41MDctLjA1NjYgOS41MDUtMjguOTg4NiA5LjQ4MSwyOC45OTY0IDMwLjUwNywuMDgxOC0yNC42NDc0LDE3Ljk3NzQgOS4zNDkzLDI5LjAzOTItMjQuNzE0LTE3Ljg4NTgtMjQuNzI4OCwxNy44NjUzeiIvPg0KPC9nPg0KPHVzZSB4bGluazpocmVmPSIjc3RhciIgdHJhbnNmb3JtPSJtYXRyaXgoLjk5ODYzIC4wNTIzNCAtLjA1MjM0IC45OTg2MyAxOS40MDAwNSAtMzAwLjUzNjgxKSIvPg0KPC9zdmc+DQo=';var it = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBoZWlnaHQ9IjEwMDAiIHZpZXdCb3g9IjAgMCAzIDIiPg0KPHBhdGggZmlsbD0iIzAwOTI0NiIgZD0ibTAsMGgxdjJoLTF6Ii8+DQo8cGF0aCBmaWxsPSIjZmZmIiBkPSJtMSwwaDF2MmgtMXoiLz4NCjxwYXRoIGZpbGw9IiNjZTJiMzciIGQ9Im0yLDBoMXYyaC0xeiIvPg0KPC9zdmc+DQo=';
    var cImg = ['<img class="ic" alt="Китай" src="'+cn+'" /><span class="instok">Китай</span>','<img class="ic" alt="Италия" src="'+it+'" /><span class="instok">Италия</span>',];

    for (var q = 0; q < cImg.length; q++) {
        var cQ = document.getElementById('c' + q);
        if (cQ != null)
            cQ.innerHTML = cImg[q];
    }
}

function preBrandImg() {
    var bImg = ['//farm1.staticflickr.com/648/21338846322_e664985c4c_t.jpg','//farm1.staticflickr.com/648/21338846322_e664985c4c_t.jpg','//farm1.staticflickr.com/648/21338846322_e664985c4c_t.jpg','//farm1.staticflickr.com/648/21338846322_e664985c4c_t.jpg','data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH4AAAARCAYAAAAbgRgHAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAM3SURBVGhD7Za7csIwEEXztfwM38AX0FPTUtJR0dFQ0dDQOHMSn2TZrC3nMWnsO6MRK+3efUkyL92CWWJp/EyxNH6meGr8brfrNptNOW63W6+1QByPx4/6HA6HfvUd2+32S+3UZ67k/8RT4wlitVp16/X6y7her73WAkGzqZc1EzTadYa1Qx89D4n2+dD8B8rGT21y9Qpge7/fe6kG+2M6Lf9j+8T0G3tAbFNeuNx4c+IGuz5Wz6HGw9OKEbRiHOP4duNJED11DZrPBHusqWMh4GNtv9+/rfObgU0E+5GD5zIi+zidTv3Ouw9jch++iBb/+Xz+iA8dfrM2BBsHD7PxIMNhPNYTfdatmfbK1Cv6zzFqz8GKOrEOINcp1xmUjWeOI36DJCQgCAkWxzogSWZ0TIg1g2CNYsoTi6Jv9uUwaJqmbIOQL5fL2z4ynOx5CJA9fC1+9IwJXxY5+siQ0wMlF7/xY4w5R+ZKxh5bZHOo7NGh5r4syMI6YYu+eeZDPukbb2DAtSFQQAOCDxB4lIEBmpS+4/NFcsrZL81AHx6gPYliZ8NFi994Yq7ss5aLJmwEM/zEZ1yu8Xtq44FxE5dNG9PXr7BOj8ejX/m8rDH3Hz310ZHwtDrggQ9UjTcJfQ3xCjnVU5YzviLqxYZpM4Qq9yruiNgID47NwjZz5sZlmcYQs7EyxvQBPsxrKN4qtx9/4yNM1k9CDqAKyCT0ZZLxVKIT9xnIcUR9wI3DzlwsUovfHLjlwts75cara5wg1zPqVzL62HKIQUsfaAP8XCkL4/j1jUcvQjsDtojqwRdlYBK58Mys+bmw6MzIHi70YpFMWD7tLVKLPzYOTnRyXhm5Edgim6f2xpT1K3sGzzRD+yF9gA42wjrlPI1J/EnjKQx2Bm4w6sGXnZtE9KV/BxyeUmb3WWeOfNxU/Vf7YIwf8Fxr677/ISrkRsif5amN93NhDtobQ9YH6KArYp0cyDFP8NR4NseaDtjPJIA1AuLmAPQiV7bjRFe+WIs8GawP7fPUcQDYr7hBi18Obkr+g5hhDv6RyvXLctbPMjA/a8W+vyv97EOwNpbnU+MXzAdL42eKpfGzRNe9AiqumfSR2/K8AAAAAElFTkSuQmCC','//farm1.staticflickr.com/648/21338846322_e664985c4c_t.jpg','//farm1.staticflickr.com/648/21338846322_e664985c4c_t.jpg','data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFUAAAARCAYAAACsPOAgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAJtSURBVFhH7Zc7kuJAEET3tFyGM3ACfOxxMfGw8HCwcHBwtPFYvdmkogQTMcJTRlS0Oru6PtktMfNnWDA7FlE/gEXUD+BJ1N1uN2w2m+F4PI7MP8hfr9eR+QzmyGMM7Hw+j+zwiCm/3W5H9vfoan4SlcXVajWs1+vhfr+P7H/+crmMzGcwRx5jYDQsDofDN09/c4EDIl7W3IpaC3rVLNztdhtnPVif8oH3lN/l+QmyhxSP5jv+E5i8qYy+Pl2ziK4fIz4Khx/c19fXg+cZy4MCGYOmf5KnxqgwhjfImnjOWkR305jDg/1+/70nDR50+1tREYORefJu5JtLIBqEY2TdRHDMTX46nR7PGQPeHByeMdIn68BfHxvuYK3Gp1brIR51YKL2BliHB9RGrMyP0RPo9rei4kDhPBOs2yi4CX6vLMQmnAMFMgZrFJ+fhSq8AuT3XZ+pHzNrRQx86UOB5TDR9cZ61i70JZ7o9k+KSrMWgNWNnFpdtxD8cg5szBjuS2T+LgZInw65zjM5HEHN28VzT0I/+k50+ydFBQqhyfsacEMBPHMLqXMwJWre1Myfh5rQ591NJYZvB2YtNWb6g672V5+duh+8FBXIJS/nd8WkFtIVVkV1DyMC5Z88+vgJwgeufmY6WBv+vO7G9JWdEtULUnvxYNjDM3Ew/TOfeCtqFiaPmCbC2OcI8GPdOaiiAvMZB0sfxNZHYz51S4H+xqgxzSPsBYPnIBmtvebX6nr29SQqxeai6Hg4hEJ0wHr68JzN82PTxebX2f/gpvLDZa5XqDF4fjUHXS/WbrxqdT3xJOqCebCI+gEsos6OYfgLSml8JYBC2AsAAAAASUVORK5CYII='];
    for (var b = 0; b < bImg.length; b++) {
        var vB = document.getElementById('b' + b);
        if (vB != null)
            vB.innerHTML = bImg[b];
    }
}

function addLink(event) {
    event.preventDefault();

    var pagelink = '<div style="position: absolute; bottom: 0px; left: -9999px;"><a href="' + document.location.href + '">источник</a></div>',
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