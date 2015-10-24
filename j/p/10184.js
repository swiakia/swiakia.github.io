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
            var arImg = ['//farm6.staticflickr.com/5736/21374087531_da8b344866_n.jpg','//farm1.staticflickr.com/724/21365791715_e6b979b761_n.jpg','//farm1.staticflickr.com/766/21178870129_d42b7e240e_n.jpg','//farm1.staticflickr.com/567/20744671953_0131d9cc1b_n.jpg'];
        } else {
            var arImg = ['//farm6.staticflickr.com/5736/21374087531_5495a0ef2c_o.jpg','//farm1.staticflickr.com/724/21365791715_441df66af6_o.jpg','//farm1.staticflickr.com/766/21178870129_4f3d0dfae1_o.jpg','//farm1.staticflickr.com/567/20744671953_2daf4a965f_o.jpg'];

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
            a.href = 'http://кликай-тут.рф/wiakia/10184.html';
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
    var rImg = [''];
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
    var ph = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA5MDAgNDUwIj4NCjxwYXRoIGZpbGw9IiMwMDM4YTgiIGQ9Im0wLDBoOTAwdjQ1MGgtOTAweiIvPg0KPHBhdGggZmlsbD0iI2NlMTEyNiIgZD0ibTAsMjI1aDkwMHYyMjVoLTkwMHoiLz4NCjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0gMzg5Ljk4MywyMjUuMDAwNCAwLDQ1MCA3LjgxNDI2NjNlLTQsMCAzODkuOTgzLDIyNS4wMDA0IHoiLz4NCjxnIGZpbGw9IiNmY2QxMTYiPg0KPHBhdGggZD0ibTE1MS45MTU3LDE4Mi41MzgyIDguMDg0LTMwLjk4OC01LjM4NzctNi43MS02LjY0MzYsMzcuNjk4IDMuOTQ3Miwwem0tMTYuNzg5NywwLTQuNjg1My00MS45OTggOS40NTA0LTEwLjU0IDkuMzI2MywxMC41NC00LjcwNTgsNDEuOTk4LTkuMzg1NSwwem0tNy40MTA0LDAtNy43MTU5LTMwLjk4OCA1LjQ3NS02LjcxIDYuMTk0MywzNy42OTgtMy45NTM1LDB6Ii8+DQo8Y2lyY2xlIGN4PSI4Mi41MzEiIGN5PSIxNDkuODA4IiByPSIzMC45MTYiIHRyYW5zZm9ybT0ibWF0cml4KDEuNDU1NTggMCAwIDEuNDU1NTggMTkuODY5OTkgNi45NDMxMykiLz4NCjxwYXRoIGQ9Im0xMjguMDgzOCwyNjcuNDYxOC04LjA4NCwzMC45ODggNS4zODc3LDYuNzEgNi42NDM2LTM3LjY5OC0zLjk0NzIsMHptMTYuNzg5NywwIDQuNjg1Myw0MS45OTgtOS40NTAzLDEwLjU0LTkuMzI2My0xMC41NCA0LjcwNTgtNDEuOTk4IDkuMzg1NSwwem03LjQxMDQsMCA3LjcxNTksMzAuOTg4LTUuNDc1MSw2LjcxLTYuMTk0My0zNy42OTggMy45NTM1LDB6Ii8+DQo8cGF0aCBkPSJtMTgyLjQ2MTYsMjM2LjkxNiAzMC45ODgsOC4wODQgNi43MS01LjM4NzctMzcuNjk4LTYuNjQzNiAwLDMuOTQ3MnptMC0xNi43ODk3IDQxLjk5OC00LjY4NTMgMTAuNTQsOS40NTA0LTEwLjU0LDkuMzI2My00MS45OTgtNC43MDU4IDAtOS4zODU1em0wLTcuNDEwNCAzMC45ODgtNy43MTU5IDYuNzEsNS40NzUxLTM3LjY5OCw2LjE5NDMgMC0zLjk1MzV6Ii8+DQo8Y2lyY2xlIGN4PSI4Mi41MzEiIGN5PSIxNDkuODA4IiByPSIzMC45MTYiIHRyYW5zZm9ybT0ibWF0cml4KDAgMS40NTU1OCAtMS40NTU1OCAwIDM1OC4wNTY2NSAxMDQuODcwMjEpIi8+DQo8cGF0aCBkPSJtOTcuNTM4LDIxMy4wODQtMzAuOTg4LTguMDg0bC02LjcxLDUuMzg3NyAzNy42OTgsNi42NDM2di0zLjk0NzJ6bTAsMTYuNzg5Ny00MS45OTgsNC42ODUzLTEwLjU0LTkuNDUwNCAxMC41NC05LjMyNjMgNDEuOTk4LDQuNzA1OCAwLDkuMzg1NXptMCw3LjQxMDRsLTMwLjk4OCw3LjcxNTktNi43MS01LjQ3NTEgMzcuNjk4LTYuMTk0M3YzLjk1MzV6Ii8+DQo8cGF0aCBkPSJtMTE4LjQwMDYsMTg2LjU0OTEtMTYuMTk1NS0yNy42MjgxLTguNTU0NC0uOTM1IDIxLjk1ODgsMzEuMzU0MiAyLjc5MTEtMi43OTExem0tMTEuODcyMSwxMS44NzIxLTMzLjAxLTI2LjM4NDEtLjc3MDUtMTQuMTM1MyAxNC4wNDc2LC44NTgyIDI2LjM2OTYsMzMuMDI0Ni02LjYzNjYsNi42MzY2em0tNS4yMzk5LDUuMjM5OS0yNy4zNjc4LTE2LjQ1NTgtLjg3MzItOC42MTYxIDMxLjAzNjYsMjIuMjc2NS0yLjc5NTUsMi43OTU1eiIvPg0KPGNpcmNsZSBjeD0iODIuNTMxIiBjeT0iMTQ5LjgwOCIgcj0iMzAuOTE2IiB0cmFuc2Zvcm09Im1hdHJpeCgxLjAyOTI1IC0xLjAyOTI1IDEuMDI5MjUgMS4wMjkyNSAtOTkuMTM0MzIgMTU1Ljc1NTEpIi8+DQo8cGF0aCBkPSJtMTYxLjU5ODksMjYzLjQ1MDkgMTYuMTk1NSwyNy42MjgxIDguNTU0NCwuOTM1LTIxLjk1ODgtMzEuMzU0Mi0yLjc5MTEsMi43OTExem0xMS44NzIxLTExLjg3MjEgMzMuMDEwMSwyNi4zODQxIC43NzA1LDE0LjEzNTMtMTQuMDQ3Ni0uODU4Mi0yNi4zNjk1LTMzLjAyNDYgNi42MzY2LTYuNjM2NnptNS4yMzk5LTUuMjM5OSAyNy4zNjc4LDE2LjQ1NTggLjg3MzIsOC42MTYxLTMxLjAzNjYtMjIuMjc2NSAyLjc5NTUtMi43OTU1eiIvPg0KPHBhdGggZD0ibTE3OC40NTA2LDIwMy40MDA4IDI3LjYyODEtMTYuMTk1NSAuOTM1LTguNTU0NC0zMS4zNTQyLDIxLjk1ODggMi43OTExLDIuNzkxMXptLTExLjg3MjEtMTEuODcyMSAyNi4zODQxLTMzLjAxMDEgMTQuMTM1My0uNzcwNS0uODU4MiwxNC4wNDc2LTMzLjAyNDYsMjYuMzY5Ni02LjYzNjYtNi42MzY2em0tNS4yMzk5LTUuMjM5OSAxNi40NTU4LTI3LjM2NzggOC42MTYxLS44NzMyLTIyLjI3NjUsMzEuMDM2Ni0yLjc5NTUtMi43OTU1eiIvPg0KPGNpcmNsZSBjeD0iODIuNTMxIiBjeT0iMTQ5LjgwOCIgcj0iMzAuOTE2IiB0cmFuc2Zvcm09Im1hdHJpeCgxLjAyOTI1IDEuMDI5MjUgLTEuMDI5MjUgMS4wMjkyNSAyMDkuMjQ0NjkgLTE0LjEzNDA4KSIvPg0KPHBhdGggZD0ibTEwMS41NDg5LDI0Ni41OTkyLTI3LjYyODEsMTYuMTk1Ni0uOTM1LDguNTU0NCAzMS4zNTQyLTIxLjk1ODgtMi43OTExLTIuNzkxMXptMTEuODcyMSwxMS44NzIxLTI2LjM4NDEsMzMuMDEtMTQuMTM1MywuNzcwNSAuODU4Mi0xNC4wNDc2IDMzLjAyNDYtMjYuMzY5NSA2LjYzNjYsNi42MzY2em01LjIzOTksNS4yMzk5LTE2LjQ1NTgsMjcuMzY3OC04LjYxNjEsLjg3MzIgMjIuMjc2NC0zMS4wMzY2IDIuNzk1NSwyLjc5NTV6Ii8+DQo8cGF0aCBkPSJtMjk1LjUxMTksMjQxLjI3NDIgMTEuOTE3NS0xNi4yNDg5LTExLjk1MDQtMTYuMjI0OCAxOS4xMzY0LDYuMzEzMSAxMS43Mzc4LTE2LjM3OTItLjA3OTIsMjAuMTUwNiAxOS4yMDQ5LDYuMTAxOS0xOS4xOTIyLDYuMTQwNyAuMTE4NywyMC4xNTA0LTExLjc3MDctMTYuMzU1NS0xOS4xMjM3LDYuMzUxN3oiLz4NCjxwYXRoIGQ9Im02MC43NDMzLDczLjE1MjktMjAuMDMwOC0yLjE5NjQtOC4wNzU5LDE4LjQ2MTctNC4xMDA5LTE5LjcyOTItMjAuMDUzNy0xLjk3NTcgMTcuNDkwNi0xMC4wMDY3LTQuMzE4LTE5LjY4MjkgMTQuOTE0MSwxMy41NTA2IDE3LjM5MTQtMTAuMTc4LTguMjc4OSwxOC4zNzE1IDE1LjA2MjYsMTMuMzg1OHoiLz4NCjxwYXRoIGQ9Im02MC43NDMzLDM3Ni44NDcxLTIwLjAzMDgsMi4xOTY0LTguMDc1OS0xOC40NjE3LTQuMTAwOSwxOS43MjkyLTIwLjA1MzcsMS45NzU3IDE3LjQ5MDYsMTAuMDA2Ny00LjMxOCwxOS42ODI5IDE0LjkxNDEtMTMuNTUwNiAxNy4zOTE0LDEwLjE3OC04LjI3ODktMTguMzcxNSAxNS4wNjI2LTEzLjM4NTh6Ii8+DQo8L2c+DQo8L3N2Zz4NCg==';
    var cImg = ['<img class="ic" alt="Филиппины" src="'+ph+'" /><span class="instok">Филиппины</span>',];

    for (var q = 0; q < cImg.length; q++) {
        var cQ = document.getElementById('c' + q);
        if (cQ != null)
            cQ.innerHTML = cImg[q];
    }
}

function preBrandImg() {
    var bImg = [''];
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