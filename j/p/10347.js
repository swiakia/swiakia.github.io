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
            var arImg = ['//farm6.staticflickr.com/5811/21177694988_24b5d02209_n.jpg','//farm6.staticflickr.com/5732/21365582855_dfb0a1bb26_n.jpg','//farm1.staticflickr.com/695/21354788582_fcccefba7e_n.jpg','//farm1.staticflickr.com/764/21178669739_abd2e6379d_n.jpg','//farm1.staticflickr.com/699/21177478720_e473e4ee6a_n.jpg','//farm6.staticflickr.com/5827/21373888251_7999681346_n.jpg'];
        } else {
            var arImg = ['//farm6.staticflickr.com/5811/21177694988_9318f25853_o.jpg','//farm6.staticflickr.com/5732/21365582855_15289b5526_o.jpg','//farm1.staticflickr.com/695/21354788582_175e38cf77_o.jpg','//farm1.staticflickr.com/764/21178669739_7db82da832_o.jpg','//farm1.staticflickr.com/699/21177478720_e969af3d5c_o.jpg','//farm6.staticflickr.com/5827/21373888251_479e527f24_o.jpg'];

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
            a.href = 'http://кликай-тут.рф/wiakia/10347.html';
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
    var rImg = ['//farm6.staticflickr.com/5728/21709007376_5590ae351e_n.jpg','//farm6.staticflickr.com/5662/21487543188_99dce5f6f1_n.jpg','//farm1.staticflickr.com/763/22331337685_0f6443fa8d_n.jpg','//farm6.staticflickr.com/5664/21209507660_877aa13123_n.jpg','//farm6.staticflickr.com/5694/20791304974_09a9cdd841_n.jpg','//farm6.staticflickr.com/5673/21798039352_ba018b2a3d_n.jpg','//farm6.staticflickr.com/5751/22136159298_23df67a17a_n.jpg','//farm1.staticflickr.com/600/20947594623_c8c80df88b_n.jpg','//farm6.staticflickr.com/5770/22256541096_0f21300be4_n.jpg','//farm1.staticflickr.com/665/21226961170_d58dd6b7b7_n.jpg','//farm1.staticflickr.com/749/21709195046_0c3bcea2cf_n.jpg','//farm6.staticflickr.com/5767/21439517516_cfb2039544_n.jpg','//farm6.staticflickr.com/5633/21190303493_6240417066_n.jpg'];
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
    var cn = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjAwIDgwMCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPg0KPHBhdGggZmlsbD0iI2RlMjkxMCIgZD0ibTAsMGgxMjAwdjgwMGgtMTIwMHoiLz4NCjxwYXRoIGZpbGw9IiNmZmRlMDAiIGQ9Im0tMTYuNTc5Niw5OS42MDA3bDIuMzY4Ni04LjEwMzItNi45NTMtNC43ODgzIDguNDM4Ni0uMjUxNCAyLjQwNTMtOC4wOTI0IDIuODQ2Nyw3Ljk0NzkgOC40Mzk2LS4yMTMxLTYuNjc5Miw1LjE2MzQgMi44MTA2LDcuOTYwNy02Ljk3NDctNC43NTY3LTYuNzAyNSw1LjEzMzF6IiB0cmFuc2Zvcm09Im1hdHJpeCg5LjkzMzUyIC4yNzc0NyAtLjI3NzQ3IDkuOTMzNTIgMzI0LjI5MjUgLTY5NS4yNDE1KSIvPg0KPHBhdGggZmlsbD0iI2ZmZGUwMCIgaWQ9InN0YXIiIGQ9Im0zNjUuODU1MiwzMzIuNjg5NWwyOC4zMDY4LDExLjM3NTcgMTkuNjcyMi0yMy4zMTcxLTIuMDcxNiwzMC40MzY3IDI4LjI1NDksMTEuNTA0LTI5LjU4NzIsNy40MzUyLTIuMjA5NywzMC40MjY5LTE2LjIxNDItMjUuODQxNS0yOS42MjA2LDcuMzAwOSAxOS41NjYyLTIzLjQwNjEtMTYuMDk2OC0yNS45MTQ4eiIvPg0KPGcgZmlsbD0iI2ZmZGUwMCI+DQo8cGF0aCBkPSJtNTE5LjA3NzksMTc5LjMxMjlsLTMwLjA1MzQtNS4yNDE4LTE0LjM5NDUsMjYuODk3Ni00LjMwMTctMzAuMjAyMy0zMC4wMjkzLTUuMzc4MSAyNy4zOTQ4LTEzLjQyNDItNC4xNjQ3LTMwLjIyMTUgMjEuMjMyNiwyMS45MDU3IDI3LjQ1NTQtMTMuMjk5OC0xNC4yNzIzLDI2Ljk2MjcgMjEuMTMzMSwyMi4wMDE3eiIvPg0KPHBhdGggZD0ibTQ1NS4yNTkyLDMxNS45Nzk1bDkuMzczNC0yOS4wMzE0LTI0LjYzMjUtMTcuOTk3OCAzMC41MDctLjA1NjYgOS41MDUtMjguOTg4NiA5LjQ4MSwyOC45OTY0IDMwLjUwNywuMDgxOC0yNC42NDc0LDE3Ljk3NzQgOS4zNDkzLDI5LjAzOTItMjQuNzE0LTE3Ljg4NTgtMjQuNzI4OCwxNy44NjUzeiIvPg0KPC9nPg0KPHVzZSB4bGluazpocmVmPSIjc3RhciIgdHJhbnNmb3JtPSJtYXRyaXgoLjk5ODYzIC4wNTIzNCAtLjA1MjM0IC45OTg2MyAxOS40MDAwNSAtMzAwLjUzNjgxKSIvPg0KPC9zdmc+DQo=';
    var cImg = ['<img class="ic" alt="Китай" src="'+cn+'" /><span class="instok">Китай</span>','<img class="ic" alt="Китай" src="'+cn+'" /><span class="instok">Китай</span>','<img class="ic" alt="Китай" src="'+cn+'" /><span class="instok">Китай</span>','<img class="ic" alt="Китай" src="'+cn+'" /><span class="instok">Китай</span>','<img class="ic" alt="Китай" src="'+cn+'" /><span class="instok">Китай</span>',];

    for (var q = 0; q < cImg.length; q++) {
        var cQ = document.getElementById('c' + q);
        if (cQ != null)
            cQ.innerHTML = cImg[q];
    }
}

function preBrandImg() {
    var bImg = ['<img class="ib" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHYAAAARCAYAAAAIVljzAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAMoSURBVGhD7ZYxbiMxDEX3tL6Mz+ATuHed1qU7V+7cuHLjxs0snjMv4BDUKNksgmAwHxDGIinqk19S8mdYsUiswi4Uq7ALxUTYw+Ew7Ha717her6N1GO73+4d9v9+P1t8LOGaet9vto4bT6TRafwZwobctVHy/i4mwFL3ZbF4jEqER2rfb7Wj9vYBj5Pl4PF7zXNdPgb3pbQuZ7/9AU9i4EaepJyw3oodeDH5EaIGXY84vcqOsqycq+b8DuFU54PIvwvbqnetXKSxCspGLJFYRoFnYFD03D3LmM+Z4PI7ed7y9vU387BUbdLlcJv7es0UM4/l8zooKD+J4kWL+8/k8RrwfamzxUDKPHPDZnyoHc/wAe5wD5gzRq7fXL1AKS8F8IQFpfpuMIbDhYx1raB7zSMSc+IiJewD+lutnL5tMbsDhcl/4yG1OXOPdi0GzMsxlbv/kMBfmyMJiF8yJIZ/CMfLFIIe+nI8BevX2+iVKYVlMMMlMrI0hnHMzBHPiOUGSiCJE4gDyxDBnr1gwsNmRODxdX0EO5vUbeQJr4ytybnvSEraqkUNUCefINWoHvXp7/RKlsASbLCbl629iiLVAEXNUjQMxD6ApzIll8JsCgDlcE+NaRRkjN/Izz89xxS/WC2I9Ar+5WzVGyMdvjsXunubT5hqGHOb6JZrC+swyLMKNQL55whzcWE9Xbmi1jnycVmJZo99C4QOvOFowvzdUruSJT3IlCvwjt9gTwJe5PbHGeGO5xdjd372xyQ1OQhv4bL2tfommsD4xDAuPBEC8CazxGbFoQDw2fMRIxKcGOzGKTzPiPhwQc1IMOfDFRmbE9cKDGrl9RVh4Avmbx0PD8Al2jf/Q4DO+OuyuB716e/0STWEBwXkeE0DCNQ7mFgQ8pTEmi2IO8zNYJxSl5c8wJgMbeTxUnxEWsYhxf7jzJU5UNWbhYrz1cnkAfobo1dvrF5gIiyCKCPg9NxfYaI5EK+AjJooeYQ4IxmdKsI7Tyqj8ES2e3gB9nHZ++2SC3AOALdaHP9dBbrjDL/tyvDzcl9/VnnP1Ej/Xr4mwK5aDVdiFYhV2kRiGv+ymoUPrPCv5AAAAAElFTkSuQmCC"/><span class="instok">Мус Кнуклес</span>','<img class="ib" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAARCAYAAAC8XK78AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAE3SURBVEhL7ZQtcoRAEEZzWi7DGTgBHo1F4lA4DAqDwUzqEV6qdwLsuhWbr2pqQk//vO6ZzVd6s/4BLgHquk5VVaVxHA/Lvfq+3/3Zr9Q0ze6zLMthuQAYhiEVRbEvAl5R13W7P/uVyIXPPM+H5QKA7nEsy3LfI3Euk10BrOv6G/8SAAEUZpmU0eXiTEAS45MDYNPHK30KEDuJMFHTNO0+2Lku7p1v45B5KIq/gKxbAAtSHHkdFFJt2/6x5ROgcMyD+L4FsDMWCUzit+LvPFGcHLKRqLO4B4D4+OLCxvIx2e3ZVHKAOIGnAAZt23ZYfmRyCiN/piQEiv8VggogJDs+8Z2cAuhgkSgScEYRZQHtdicA0mZjQp4CUISDvHvFWQxEvBnAGTNxZ/FMy6uyRtTDFbxDnw6Q0jde0bczBWYq2AAAAABJRU5ErkJggg=="/><span class="instok">Адд</span>','<img class="ib" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAARCAYAAABwxZQXAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAGBSURBVEhL7ZQxjoUwDET3tFyGM3ACempaSjoqOhoqGhqarB4wK8cK4m9o/q7+SFGwM7YzccJX+Ef4iHlXRGKapglVVYVlWU7PgSv/FeDBJy5lg2EYQlmW+7D+J4jEULAoijDP8+k5cOW/Ajz4xMlm03Vd7zbAhtO2bRjH8fQ+w2Mx+NZ1Pa0DXkwK6ooHuVJ1XkG2GK6GTpcZjkR5Mdhw1BnFKZZ1YuHbnLaTWlMXVZ/OCkkxzHaogMTovpMQHzPrXdft6ykx1oZHPIPvbdt+NocNH66tOU3TbsOhvs0nJMWokAY+m9iCE+37Pkp+JwYot4U6yw/DHxDgG59i/Q/p8TXTsJvNEcPGuFY+pxUD5Ke+R5YYnRodAXebf0UMa9h6E+rCVWeYuXoWWWJk28eIrc3miJHN+2GohsSQQ5xfvZk7MYjAVnLWNYMcMfyVfE5s/a1k+wO01y0Sw731QkDKj49TU6tZtxy+7QNN2ZYPyEVO8WxMiu99kZi/jo+Y90QI35szTmQ2dONiAAAAAElFTkSuQmCC"/><span class="instok">Галифакс</span>','<img class="ib" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAARCAYAAAC4qX7BAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAE4SURBVEhL7ZM9joQwDEb3tFyGM3ACempaSjoqOhoqGhqarB6bDzkeD1PMarXFfFKE7PjnxSFf6Z/oA+IVggzDkJqmSXVdn6vrurRtW959LuLIexXbtu25rB5AKFRV1QkgGNnzPOeoWMpd1zV7YumAVgVI3/dnIQoex5G9KY3jeMF47ft+TeAO5NWUChCdPkpSk2masufnKpTDqD0IPvaJUwzC5w/1AOIDJP4bivG1Ns2XZbmaWRCBUZNp62pvQZiCkiJ5EJoQy9VI2BEIoFa3ICgKkHRigUSx/mpk+6uOcgsQJaqZxKlJtEVVzE4kAvENkXKtChBGSCEWE6AgL0YN8EmaEF/g9LJYb4MgXgVBKsrCthCSAFVYeb8CIlGMKwLMjt+LfT1pJiMI5G0Jn/c/BflrfUBKpfQNT1RD8ekpoLUAAAAASUVORK5CYII="/><span class="instok">Одри</span>','<img class="ib" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAARCAYAAAC8XK78AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAE3SURBVEhL7ZQtcoRAEEZzWi7DGTgBHo1F4lA4DAqDwUzqEV6qdwLsuhWbr2pqQk//vO6ZzVd6s/4BLgHquk5VVaVxHA/Lvfq+3/3Zr9Q0ze6zLMthuQAYhiEVRbEvAl5R13W7P/uVyIXPPM+H5QKA7nEsy3LfI3Euk10BrOv6G/8SAAEUZpmU0eXiTEAS45MDYNPHK30KEDuJMFHTNO0+2Lku7p1v45B5KIq/gKxbAAtSHHkdFFJt2/6x5ROgcMyD+L4FsDMWCUzit+LvPFGcHLKRqLO4B4D4+OLCxvIx2e3ZVHKAOIGnAAZt23ZYfmRyCiN/piQEiv8VggogJDs+8Z2cAuhgkSgScEYRZQHtdicA0mZjQp4CUISDvHvFWQxEvBnAGTNxZ/FMy6uyRtTDFbxDnw6Q0jde0bczBWYq2AAAAABJRU5ErkJggg=="/><span class="instok">Адд</span>'];
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