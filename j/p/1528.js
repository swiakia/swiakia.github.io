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
            var arImg = ['//farm6.staticflickr.com/5777/20742122833_daedc2fd7e_n.jpg','//farm1.staticflickr.com/649/20742125173_25c2786226_n.jpg'];
        } else {
            var arImg = ['//farm6.staticflickr.com/5777/20742122833_b9260f10dd_o.jpg','//farm1.staticflickr.com/649/20742125173_1a42265c83_o.jpg'];

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
            a.href = 'http://кликай-тут.рф/wiakia/1528.html';
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
    var rImg = ['//farm1.staticflickr.com/779/21199630350_87649268df_n.jpg','//farm6.staticflickr.com/5800/21199732960_82537b2c9d_n.jpg','//farm1.staticflickr.com/780/21200363068_63cc352e76_n.jpg','//farm6.staticflickr.com/5807/21336834546_a5d7d0ed88_n.jpg','//farm6.staticflickr.com/5624/21788467730_3607918f83_n.jpg','//farm1.staticflickr.com/665/21788698798_9296b0e66d_n.jpg','//farm6.staticflickr.com/5620/21201269979_34315995ab_n.jpg','//farm6.staticflickr.com/5664/21396663601_e498db586d_n.jpg','//farm1.staticflickr.com/713/21178612290_9679b7698c_n.jpg','//farm1.staticflickr.com/588/21604209969_47b9fb2b34_n.jpg','//farm6.staticflickr.com/5822/20832043483_757269f644_n.jpg','//farm1.staticflickr.com/664/21194860719_4b68099658_n.jpg'];
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
    var kr = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOTAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNjAwIiB2aWV3Qm94PSItMzYgLTI0IDcyIDQ4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+DQo8cGF0aCBmaWxsPSIjZmZmIiBkPSJtLTM2LTI0aDcydjQ4aC03MnoiLz4NCjxnIHRyYW5zZm9ybT0ibWF0cml4KC41NTQ3IC0uODMyMDUgLjgzMjA1IC41NTQ3IDAgMCkiPg0KPGcgaWQ9ImIyIj4NCjxwYXRoIHN0cm9rZT0iIzAwMCIgaWQ9ImIiIHN0cm9rZS13aWR0aD0iMiIgZD0iTS02LTI1SDZNLTYtMjJINk0tNi0xOUg2Ii8+DQo8dXNlIHk9IjQ0IiB4bGluazpocmVmPSIjYiIvPg0KPC9nPg0KPHBhdGggc3Ryb2tlPSIjZmZmIiBkPSJtMCwxN3YxMCIvPg0KPGNpcmNsZSBmaWxsPSIjYzYwYzMwIiByPSIxMiIvPg0KPHBhdGggZmlsbD0iIzAwMzQ3OCIgZD0iTTAtMTJBNiw2IDAgMCAwIDAsMEE2LDYgMCAwIDEgMCwxMkExMiwxMiAwIDAsMSAwLTEyWiIvPg0KPC9nPg0KPGcgdHJhbnNmb3JtPSJtYXRyaXgoLS41NTQ3IC0uODMyMDUgLjgzMjA1IC0uNTU0NyAwIDApIj4NCjx1c2UgeGxpbms6aHJlZj0iI2IyIi8+DQo8cGF0aCBzdHJva2U9IiNmZmYiIGQ9Im0wLTIzLjV2M20wLDM3LjV2My41bTAsM3YzIi8+DQo8L2c+DQo8L3N2Zz4NCg==';
    var cImg = ['<img class="ic" alt="Корея" src="'+kr+'" /><span class="instok">Корея</span>','<img class="ic" alt="Корея" src="'+kr+'" /><span class="instok">Корея</span>','<img class="ic" alt="Корея" src="'+kr+'" /><span class="instok">Корея</span>','<img class="ic" alt="Корея" src="'+kr+'" /><span class="instok">Корея</span>',];

    for (var q = 0; q < cImg.length; q++) {
        var cQ = document.getElementById('c' + q);
        if (cQ != null)
            cQ.innerHTML = cImg[q];
    }
}

function preBrandImg() {
    var bImg = ['<img class="ib" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF8AAAARCAYAAAC7HnDpAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAKCSURBVFhH7ZYxkuJADEX3tFyGM3ACcmJSQjIiMhIiEhISbz3PvC1Z1WoGT9U68a/qsqVufUkf2ebPsGIxrOIviFX8BTER/3A4DLvdbng8Ht+eL1T+Hs7n8xjDtWd/wtlD5heVvwdqIoa+e/YnnC1MxIdws9kM9/v92/OFyt/D6XQaY7hqb7fbif0pZw85n6j8PVATMfStTe37/f6f/SlnC78W//l8Nqf3XdPutzgj4H93BlT53tXR4sZHjOJnuF9xRnCWHlqYLf71eh39TISF4hO5aa69yZfrcrmMNgVH/jh5LeR8ouVnWOCK3HFfccmvHfO7bwyvI/Z9LQF98sOVf4Sm+FzjkkShINF3PB7HIrRvt9t4Jjdd2XBSKPet4jnHGWuzhgz5bDTXbl4gFznwa3tGcfH3bM7z3o97gAEiL/yctb9YA2iKT2Bc+Fg2juCZjIT4nA724pnKNmdrqp0UJrVqQMiXa7d+4xiOnM9hYoGfih/1qgB36wcCs147rXO5QMWw6cp25Qbiq8EV4zMyv8j+6pw5QO6lslnW5RMvfHJdMV7MEt8p9P0M8kS9a1obbu95ogR+ivY7kuMzqv3s9wmlhwhFAj8Vn/PyuQfUx7+iOV7MEl+hFQe/ZyqxKltO4uHzVaMYr9drXPIbn5H5RcsPLz7EIb9i+ePjwyZnz5YzD2PWwn3jxSzxAYXaBIv7OLm56cqWM38z/K74I1hDzBGR+UXLT65YOyt+Ayqxsy1n/mYgOvuxdq8RE/F5z0aBReUnKY0wQU6sYFqJ4dqzI7CjjyeMBskP2PM+I/OLyg8yf0TO1bIjJ3v4BDbcfgvYi/tgIv6K/4tV/AWxir8YhuEvmlP4Z4Q7lBQAAAAASUVORK5CYII="/><span class="instok">Холика Холика</span>','<img class="ib" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF8AAAARCAYAAAC7HnDpAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAKCSURBVFhH7ZYxkuJADEX3tFyGM3ACcmJSQjIiMhIiEhISbz3PvC1Z1WoGT9U68a/qsqVufUkf2ebPsGIxrOIviFX8BTER/3A4DLvdbng8Ht+eL1T+Hs7n8xjDtWd/wtlD5heVvwdqIoa+e/YnnC1MxIdws9kM9/v92/OFyt/D6XQaY7hqb7fbif0pZw85n6j8PVATMfStTe37/f6f/SlnC78W//l8Nqf3XdPutzgj4H93BlT53tXR4sZHjOJnuF9xRnCWHlqYLf71eh39TISF4hO5aa69yZfrcrmMNgVH/jh5LeR8ouVnWOCK3HFfccmvHfO7bwyvI/Z9LQF98sOVf4Sm+FzjkkShINF3PB7HIrRvt9t4Jjdd2XBSKPet4jnHGWuzhgz5bDTXbl4gFznwa3tGcfH3bM7z3o97gAEiL/yctb9YA2iKT2Bc+Fg2juCZjIT4nA724pnKNmdrqp0UJrVqQMiXa7d+4xiOnM9hYoGfih/1qgB36wcCs147rXO5QMWw6cp25Qbiq8EV4zMyv8j+6pw5QO6lslnW5RMvfHJdMV7MEt8p9P0M8kS9a1obbu95ogR+ivY7kuMzqv3s9wmlhwhFAj8Vn/PyuQfUx7+iOV7MEl+hFQe/ZyqxKltO4uHzVaMYr9drXPIbn5H5RcsPLz7EIb9i+ePjwyZnz5YzD2PWwn3jxSzxAYXaBIv7OLm56cqWM38z/K74I1hDzBGR+UXLT65YOyt+Ayqxsy1n/mYgOvuxdq8RE/F5z0aBReUnKY0wQU6sYFqJ4dqzI7CjjyeMBskP2PM+I/OLyg8yf0TO1bIjJ3v4BDbcfgvYi/tgIv6K/4tV/AWxir8YhuEvmlP4Z4Q7lBQAAAAASUVORK5CYII="/><span class="instok">Холика Холика</span>','<img class="ib" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF8AAAARCAYAAAC7HnDpAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAKCSURBVFhH7ZYxkuJADEX3tFyGM3ACcmJSQjIiMhIiEhISbz3PvC1Z1WoGT9U68a/qsqVufUkf2ebPsGIxrOIviFX8BTER/3A4DLvdbng8Ht+eL1T+Hs7n8xjDtWd/wtlD5heVvwdqIoa+e/YnnC1MxIdws9kM9/v92/OFyt/D6XQaY7hqb7fbif0pZw85n6j8PVATMfStTe37/f6f/SlnC78W//l8Nqf3XdPutzgj4H93BlT53tXR4sZHjOJnuF9xRnCWHlqYLf71eh39TISF4hO5aa69yZfrcrmMNgVH/jh5LeR8ouVnWOCK3HFfccmvHfO7bwyvI/Z9LQF98sOVf4Sm+FzjkkShINF3PB7HIrRvt9t4Jjdd2XBSKPet4jnHGWuzhgz5bDTXbl4gFznwa3tGcfH3bM7z3o97gAEiL/yctb9YA2iKT2Bc+Fg2juCZjIT4nA724pnKNmdrqp0UJrVqQMiXa7d+4xiOnM9hYoGfih/1qgB36wcCs147rXO5QMWw6cp25Qbiq8EV4zMyv8j+6pw5QO6lslnW5RMvfHJdMV7MEt8p9P0M8kS9a1obbu95ogR+ivY7kuMzqv3s9wmlhwhFAj8Vn/PyuQfUx7+iOV7MEl+hFQe/ZyqxKltO4uHzVaMYr9drXPIbn5H5RcsPLz7EIb9i+ePjwyZnz5YzD2PWwn3jxSzxAYXaBIv7OLm56cqWM38z/K74I1hDzBGR+UXLT65YOyt+Ayqxsy1n/mYgOvuxdq8RE/F5z0aBReUnKY0wQU6sYFqJ4dqzI7CjjyeMBskP2PM+I/OLyg8yf0TO1bIjJ3v4BDbcfgvYi/tgIv6K/4tV/AWxir8YhuEvmlP4Z4Q7lBQAAAAASUVORK5CYII="/><span class="instok">Холика Холика</span>','<img class="ib" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF8AAAARCAYAAAC7HnDpAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAKCSURBVFhH7ZYxkuJADEX3tFyGM3ACcmJSQjIiMhIiEhISbz3PvC1Z1WoGT9U68a/qsqVufUkf2ebPsGIxrOIviFX8BTER/3A4DLvdbng8Ht+eL1T+Hs7n8xjDtWd/wtlD5heVvwdqIoa+e/YnnC1MxIdws9kM9/v92/OFyt/D6XQaY7hqb7fbif0pZw85n6j8PVATMfStTe37/f6f/SlnC78W//l8Nqf3XdPutzgj4H93BlT53tXR4sZHjOJnuF9xRnCWHlqYLf71eh39TISF4hO5aa69yZfrcrmMNgVH/jh5LeR8ouVnWOCK3HFfccmvHfO7bwyvI/Z9LQF98sOVf4Sm+FzjkkShINF3PB7HIrRvt9t4Jjdd2XBSKPet4jnHGWuzhgz5bDTXbl4gFznwa3tGcfH3bM7z3o97gAEiL/yctb9YA2iKT2Bc+Fg2juCZjIT4nA724pnKNmdrqp0UJrVqQMiXa7d+4xiOnM9hYoGfih/1qgB36wcCs147rXO5QMWw6cp25Qbiq8EV4zMyv8j+6pw5QO6lslnW5RMvfHJdMV7MEt8p9P0M8kS9a1obbu95ogR+ivY7kuMzqv3s9wmlhwhFAj8Vn/PyuQfUx7+iOV7MEl+hFQe/ZyqxKltO4uHzVaMYr9drXPIbn5H5RcsPLz7EIb9i+ePjwyZnz5YzD2PWwn3jxSzxAYXaBIv7OLm56cqWM38z/K74I1hDzBGR+UXLT65YOyt+Ayqxsy1n/mYgOvuxdq8RE/F5z0aBReUnKY0wQU6sYFqJ4dqzI7CjjyeMBskP2PM+I/OLyg8yf0TO1bIjJ3v4BDbcfgvYi/tgIv6K/4tV/AWxir8YhuEvmlP4Z4Q7lBQAAAAASUVORK5CYII="/><span class="instok">Холика Холика</span>'];
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