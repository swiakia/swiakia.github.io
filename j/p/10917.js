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
            var arImg = ['//farm6.staticflickr.com/5669/21177932178_d05e88f8a5_n.jpg','//farm6.staticflickr.com/5685/21178896189_995cafce4c_n.jpg','//farm6.staticflickr.com/5831/20743108464_cc307b0f3b_n.jpg','//farm1.staticflickr.com/657/21355023892_82078e8fa5_n.jpg','//farm6.staticflickr.com/5816/21365823835_c3981b2767_n.jpg','//farm1.staticflickr.com/764/21355030072_bc10f42122_n.jpg','//farm1.staticflickr.com/641/21365831985_b56804872e_n.jpg'];
        } else {
            var arImg = ['//farm6.staticflickr.com/5669/21177932178_dbf126fb70_o.jpg','//farm6.staticflickr.com/5685/21178896189_0289fb45ae_o.jpg','//farm6.staticflickr.com/5831/20743108464_3b52c90bc0_o.jpg','//farm1.staticflickr.com/657/21355023892_6d057bc3d7_o.jpg','//farm6.staticflickr.com/5816/21365823835_78e7d443b3_o.jpg','//farm1.staticflickr.com/764/21355030072_2e7ba112cb_o.jpg','//farm1.staticflickr.com/641/21365831985_050262a256_o.jpg'];

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
            a.href = 'http://кликай-тут.рф/wiakia/10917.html';
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
    var rImg = ['//farm6.staticflickr.com/5695/21383013858_c2aa6b151e_n.jpg','//farm1.staticflickr.com/765/21258207364_87dcb88c7b_n.jpg','//farm6.staticflickr.com/5720/22116536409_b82f7865d0_n.jpg','//farm6.staticflickr.com/5794/21895819505_b8e1fcfb9b_n.jpg','//farm6.staticflickr.com/5748/21104718233_1a261b1dfe_n.jpg','//farm6.staticflickr.com/5831/21335827698_c65b43d2f8_n.jpg','//farm1.staticflickr.com/674/21384831286_bf0f5da516_n.jpg','//farm6.staticflickr.com/5618/22155602521_9f9b445f68_n.jpg','//farm6.staticflickr.com/5806/22117205130_ef9396615a_n.jpg','//farm1.staticflickr.com/726/21419562171_f498e7d337_n.jpg','//farm6.staticflickr.com/5704/21474780901_a06192c7e2_n.jpg','//farm1.staticflickr.com/743/21754046905_73d170c16a_n.jpg','//farm1.staticflickr.com/775/21603478055_ac0484f260_n.jpg','//farm6.staticflickr.com/5620/21698731223_8f37e5bc0c_n.jpg','//farm6.staticflickr.com/5783/20843399944_ae397ab5b0_n.jpg','//farm6.staticflickr.com/5738/21680177904_385156141d_n.jpg','//farm1.staticflickr.com/617/20942484503_518ea52298_n.jpg','//farm1.staticflickr.com/573/21470472759_d92d5d506d_n.jpg','//farm1.staticflickr.com/651/22327401721_63213a6e92_n.jpg','//farm1.staticflickr.com/622/21394512175_6d6d9723e4_n.jpg'];
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
    var cn = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjAwIDgwMCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPg0KPHBhdGggZmlsbD0iI2RlMjkxMCIgZD0ibTAsMGgxMjAwdjgwMGgtMTIwMHoiLz4NCjxwYXRoIGZpbGw9IiNmZmRlMDAiIGQ9Im0tMTYuNTc5Niw5OS42MDA3bDIuMzY4Ni04LjEwMzItNi45NTMtNC43ODgzIDguNDM4Ni0uMjUxNCAyLjQwNTMtOC4wOTI0IDIuODQ2Nyw3Ljk0NzkgOC40Mzk2LS4yMTMxLTYuNjc5Miw1LjE2MzQgMi44MTA2LDcuOTYwNy02Ljk3NDctNC43NTY3LTYuNzAyNSw1LjEzMzF6IiB0cmFuc2Zvcm09Im1hdHJpeCg5LjkzMzUyIC4yNzc0NyAtLjI3NzQ3IDkuOTMzNTIgMzI0LjI5MjUgLTY5NS4yNDE1KSIvPg0KPHBhdGggZmlsbD0iI2ZmZGUwMCIgaWQ9InN0YXIiIGQ9Im0zNjUuODU1MiwzMzIuNjg5NWwyOC4zMDY4LDExLjM3NTcgMTkuNjcyMi0yMy4zMTcxLTIuMDcxNiwzMC40MzY3IDI4LjI1NDksMTEuNTA0LTI5LjU4NzIsNy40MzUyLTIuMjA5NywzMC40MjY5LTE2LjIxNDItMjUuODQxNS0yOS42MjA2LDcuMzAwOSAxOS41NjYyLTIzLjQwNjEtMTYuMDk2OC0yNS45MTQ4eiIvPg0KPGcgZmlsbD0iI2ZmZGUwMCI+DQo8cGF0aCBkPSJtNTE5LjA3NzksMTc5LjMxMjlsLTMwLjA1MzQtNS4yNDE4LTE0LjM5NDUsMjYuODk3Ni00LjMwMTctMzAuMjAyMy0zMC4wMjkzLTUuMzc4MSAyNy4zOTQ4LTEzLjQyNDItNC4xNjQ3LTMwLjIyMTUgMjEuMjMyNiwyMS45MDU3IDI3LjQ1NTQtMTMuMjk5OC0xNC4yNzIzLDI2Ljk2MjcgMjEuMTMzMSwyMi4wMDE3eiIvPg0KPHBhdGggZD0ibTQ1NS4yNTkyLDMxNS45Nzk1bDkuMzczNC0yOS4wMzE0LTI0LjYzMjUtMTcuOTk3OCAzMC41MDctLjA1NjYgOS41MDUtMjguOTg4NiA5LjQ4MSwyOC45OTY0IDMwLjUwNywuMDgxOC0yNC42NDc0LDE3Ljk3NzQgOS4zNDkzLDI5LjAzOTItMjQuNzE0LTE3Ljg4NTgtMjQuNzI4OCwxNy44NjUzeiIvPg0KPC9nPg0KPHVzZSB4bGluazpocmVmPSIjc3RhciIgdHJhbnNmb3JtPSJtYXRyaXgoLjk5ODYzIC4wNTIzNCAtLjA1MjM0IC45OTg2MyAxOS40MDAwNSAtMzAwLjUzNjgxKSIvPg0KPC9zdmc+DQo=';var in = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgNDUwIDMwMCIgaGVpZ2h0PSI4MDAiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4NCjxwYXRoIGZpbGw9IiNmZjk5MzIiIGQ9Im0wLDBoNDUwdjEwMGgtNDUweiIvPg0KPHBhdGggZmlsbD0iI2ZmZiIgZD0ibTAsMTAwaDQ1MHYxMDBoLTQ1MHoiLz4NCjxwYXRoIGZpbGw9IiMxMjg4MDciIGQ9Im0wLDIwMGg0NTB2MTAwaC00NTB6Ii8+DQo8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyMjUgMTUwKSI+DQo8Y2lyY2xlIGZpbGw9IiMwMDAwODAiIHI9IjQ2LjUiLz4NCjxjaXJjbGUgZmlsbD0iI2ZmZiIgcj0iNDEiLz4NCjxnIGlkPSI4Ij4NCjxnIGlkPSI0Ij4NCjxnIGlkPSIyIj4NCjxnIGlkPSIxIj4NCjxjaXJjbGUgZmlsbD0iIzAwMDA4MCIgcj0iMi41IiB0cmFuc2Zvcm09Im1hdHJpeCguOTkxNDQgLjEzMDUzIC0uMTMwNTMgLjk5MTQ0IDQwLjY0OTI0IDUuMzUxNTcpIi8+DQo8cGF0aCBmaWxsPSIjMDAwMDgwIiBkPSJtMCw0MWwxLjUtMjRxLTEtMy0xLjUtMTctLjUsMTQtMS41LDE3eiIvPg0KPC9nPg0KPHVzZSB4bGluazpocmVmPSIjMSIgdHJhbnNmb3JtPSJyb3RhdGUoMTUpIi8+DQo8L2c+DQo8dXNlIHhsaW5rOmhyZWY9IiMyIiB0cmFuc2Zvcm09InJvdGF0ZSgzMCkiLz4NCjwvZz4NCjx1c2UgeGxpbms6aHJlZj0iIzQiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPg0KPC9nPg0KPHVzZSB4bGluazpocmVmPSIjOCIgdHJhbnNmb3JtPSJyb3RhdGUoMTIwKSIvPg0KPHVzZSB4bGluazpocmVmPSIjOCIgdHJhbnNmb3JtPSJtYXRyaXgoLS41IC0uODY2MDMgLjg2NjAzIC0uNSAwIDApIi8+DQo8Y2lyY2xlIGZpbGw9IiMwMDAwODAiIHI9IjgiLz4NCjwvZz4NCjwvc3ZnPg0K';
    var cImg = ['<img class="ic" alt="Китай" src="'+cn+'" /><span class="instok">Китай</span>','<img class="ic" alt="Китай" src="'+cn+'" /><span class="instok">Китай</span>','<img class="ic" alt="Китай" src="'+cn+'" /><span class="instok">Китай</span>','<img class="ic" alt="Китай" src="'+cn+'" /><span class="instok">Китай</span>','<img class="ic" alt="Китай" src="'+cn+'" /><span class="instok">Китай</span>','<img class="ic" alt="Китай" src="'+cn+'" /><span class="instok">Китай</span>','<img class="ic" alt="Китай" src="'+cn+'" /><span class="instok">Китай</span>','<img class="ic" alt="Индия" src="'+in+'" /><span class="instok">Индия</span>',];

    for (var q = 0; q < cImg.length; q++) {
        var cQ = document.getElementById('c' + q);
        if (cQ != null)
            cQ.innerHTML = cImg[q];
    }
}

function preBrandImg() {
    var bImg = ['<img class="ib" src="//farm6.staticflickr.com/5738/20741849784_2ee8b7a184_o.jpg"/><span class="instok">Витаччи</span>','<img class="ib" src="//farm6.staticflickr.com/5738/20741849784_2ee8b7a184_o.jpg"/><span class="instok">Витаччи</span>','<img class="ib" src="//farm6.staticflickr.com/5738/20741849784_2ee8b7a184_o.jpg"/><span class="instok">Витаччи</span>','<img class="ib" src="//farm6.staticflickr.com/5738/20741849784_2ee8b7a184_o.jpg"/><span class="instok">Витаччи</span>','<img class="ib" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH4AAAARCAYAAAAbgRgHAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAM3SURBVGhD7Za7csIwEEXztfwM38AX0FPTUtJR0dFQ0dDQOHMSn2TZrC3nMWnsO6MRK+3efUkyL92CWWJp/EyxNH6meGr8brfrNptNOW63W6+1QByPx4/6HA6HfvUd2+32S+3UZ67k/8RT4wlitVp16/X6y7her73WAkGzqZc1EzTadYa1Qx89D4n2+dD8B8rGT21y9Qpge7/fe6kG+2M6Lf9j+8T0G3tAbFNeuNx4c+IGuz5Wz6HGw9OKEbRiHOP4duNJED11DZrPBHusqWMh4GNtv9+/rfObgU0E+5GD5zIi+zidTv3Ouw9jch++iBb/+Xz+iA8dfrM2BBsHD7PxIMNhPNYTfdatmfbK1Cv6zzFqz8GKOrEOINcp1xmUjWeOI36DJCQgCAkWxzogSWZ0TIg1g2CNYsoTi6Jv9uUwaJqmbIOQL5fL2z4ynOx5CJA9fC1+9IwJXxY5+siQ0wMlF7/xY4w5R+ZKxh5bZHOo7NGh5r4syMI6YYu+eeZDPukbb2DAtSFQQAOCDxB4lIEBmpS+4/NFcsrZL81AHx6gPYliZ8NFi994Yq7ss5aLJmwEM/zEZ1yu8Xtq44FxE5dNG9PXr7BOj8ejX/m8rDH3Hz310ZHwtDrggQ9UjTcJfQ3xCjnVU5YzviLqxYZpM4Qq9yruiNgID47NwjZz5sZlmcYQs7EyxvQBPsxrKN4qtx9/4yNM1k9CDqAKyCT0ZZLxVKIT9xnIcUR9wI3DzlwsUovfHLjlwts75cara5wg1zPqVzL62HKIQUsfaAP8XCkL4/j1jUcvQjsDtojqwRdlYBK58Mys+bmw6MzIHi70YpFMWD7tLVKLPzYOTnRyXhm5Edgim6f2xpT1K3sGzzRD+yF9gA42wjrlPI1J/EnjKQx2Bm4w6sGXnZtE9KV/BxyeUmb3WWeOfNxU/Vf7YIwf8Fxr677/ISrkRsif5amN93NhDtobQ9YH6KArYp0cyDFP8NR4NseaDtjPJIA1AuLmAPQiV7bjRFe+WIs8GawP7fPUcQDYr7hBi18Obkr+g5hhDv6RyvXLctbPMjA/a8W+vyv97EOwNpbnU+MXzAdL42eKpfGzRNe9AiqumfSR2/K8AAAAAElFTkSuQmCC"/><span class="instok">Франческо Милано</span>','<img class="ib" src="//farm1.staticflickr.com/578/21176366480_7615853ec3_o.jpg"/><span class="instok">Вивиан Роял</span>','<img class="ib" src="//farm6.staticflickr.com/5715/21302661219_11a76c2b63_o.jpg"/><span class="instok">ЛеФоллие</span>','<img class="ib" src="//farm1.staticflickr.com/781/21180091510_4600899471_o.jpg"/><span class="instok">Манго</span>'];
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