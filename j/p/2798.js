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
            var arImg = ['//farm1.staticflickr.com/735/20741126304_105d3dc828_n.jpg','//farm6.staticflickr.com/5755/21175733820_0a4602edea_n.jpg','//farm1.staticflickr.com/682/21175965628_bae0b7b10f_n.jpg','//farm6.staticflickr.com/5642/21363849585_1d81c7f0cc_n.jpg','//farm6.staticflickr.com/5823/21175973608_50f5c54793_n.jpg'];
        } else {
            var arImg = ['//farm1.staticflickr.com/735/20741126304_66bfc9cfc7_o.jpg','//farm6.staticflickr.com/5755/21175733820_28b0ef7fe8_o.jpg','//farm1.staticflickr.com/682/21175965628_a9711e1951_o.jpg','//farm6.staticflickr.com/5642/21363849585_c5102befeb_o.jpg','//farm6.staticflickr.com/5823/21175973608_8cb71df41e_o.jpg'];

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
            a.href = 'http://кликай-тут.рф/wiakia/2798.html';
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
    var rImg = ['//farm1.staticflickr.com/720/22123330618_c57db92dc2_n.jpg','//farm6.staticflickr.com/5632/21323025723_cf7cc71fc6_n.jpg','//farm6.staticflickr.com/5682/21465622515_9454584674_n.jpg','//farm1.staticflickr.com/633/21185458054_66e2910337_n.jpg','//farm6.staticflickr.com/5827/21325594354_117de484e2_n.jpg','//farm6.staticflickr.com/5798/21464779045_9a7307ce5c_n.jpg','//farm6.staticflickr.com/5636/21032832183_819b17fe46_n.jpg','//farm1.staticflickr.com/748/21681670133_2da241d9f1_n.jpg','//farm6.staticflickr.com/5708/21416631345_866c5912d1_n.jpg','//farm6.staticflickr.com/5784/21203422748_acb060703e_n.jpg','//farm1.staticflickr.com/643/20792807633_bf3bbd0d2d_n.jpg','//farm1.staticflickr.com/682/20768583734_fe5acf6eeb_n.jpg','//farm6.staticflickr.com/5772/21935805375_6a9097e756_n.jpg','//farm1.staticflickr.com/703/21667884381_f00b4866a9_n.jpg','//farm1.staticflickr.com/649/21637000582_302ddc3b7e_n.jpg','//farm6.staticflickr.com/5821/21449803818_4e3922df86_n.jpg'];
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
    var ru = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NTAgMzAwIj4NCjxwYXRoIGZpbGw9IiNmZmYiIGQ9Im0wLDBoNDUwdjEwMGgtNDUweiIvPg0KPHBhdGggZmlsbD0iIzAwZiIgZD0ibTAsMTAwaDQ1MHYxMDBoLTQ1MHoiLz4NCjxwYXRoIGZpbGw9IiNmMDAiIGQ9Im0wLDIwMGg0NTB2MTAwaC00NTB6Ii8+DQo8L3N2Zz4NCg==';
    var cImg = ['<img class="ic" alt="Россия" src="'+ru+'" /><span class="instok">Россия</span>','<img class="ic" alt="Россия" src="'+ru+'" /><span class="instok">Россия</span>','<img class="ic" alt="Россия" src="'+ru+'" /><span class="instok">Россия</span>','<img class="ic" alt="Россия" src="'+ru+'" /><span class="instok">Россия</span>',];

    for (var q = 0; q < cImg.length; q++) {
        var cQ = document.getElementById('c' + q);
        if (cQ != null)
            cQ.innerHTML = cImg[q];
    }
}

function preBrandImg() {
    var bImg = ['<img class="ib" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHwAAAARCAYAAAAfdMg6AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAANJSURBVGhD7ZYxjiIxEEX3tFyGM3ACcuJJCcmIyEiISEhIWL0envSptbthRkgzC1+yuu0uV/2qXzb8ubzxUngL/mJ4C/5iuBF8tVpdFovF5Xg8Xld+Dg6Hw8BtPp8PY7vdXr/0sdlshj08e/hKzsvlchhT2O/317d/8fHxMcTlmZAPnE+n0/DO4F3glzU4nM/ngTtz9k7hRnA2zWazobg/DQq9Xq+HxOA5VlCALXY8e6Bo+H0kZ7n0gAgK1QMC4iPz2O12wzz30RCsZYOpk40M97qvh28J/t3GoDOzc8eQRbYwYycX3CN4D2Pckgs29Xa4VwD5YUeT2ADkl8j13COeKjjJeSqw5ZkF9VuePrqUNa9hiOf+7N4esMFe/4ypZrlHcP2ZMz6tA+vcJsYTzv2GbRbbNX2MwVg+W9eyDW5cRjbZUwVPYhTSuUVFaL8LSQIK6pwGUJQp0TnN2DFqwj3cI3jN2caCP2t+lz/gvWVjHK9h7MZiA/LQH09OegvEwibjiKcJrpgpTgoocl4bQOHyzwpxc3+FyWLjE450ft4kFV8RPLmDqfyAORrnEQGq4D2k4PWn7GmC9wpYC6AdJ1iinki/uYfBnNGKyz6+mQw+6/4eenwTmXOvcDVOnbvPOD0/LRgffzzrv3aQV7rP/Dl7JN5DgltsT6uoBfBU+PuYRBSBxIiTowVjZiGy21sFEo8KDnq55FqdszfjOJ8SwNsOuzzp9daSI/bmnrfsvfFAU3CKCPkckpAUwQkkgVp4fwu1FXliKSY+8JkJJLTHhk7PmPphrQV4Y4Pvmo+czFkf8iYGOfs9BeY95+zFBr8gOfe42UjYkRdgP3NiCuqaa/lv3hyMz3rm6Eg0BW8NN3LiDOhoieXvGrYVJsE3B357wL7GhKvC16QE67knhwU0Z4VBLNeISQw5ijqvggO+G6slejZWwtjknDWEl8gr3kPDvDWSJ7gRHKdsbo367xEyJJhEKtjX+846HcqA9BSwoSmIiV/h6WgBzplDDnmZs+DdffKiaFk4fSTcJ9hLbt6MFS0fIDnLrVVDbYzpvDUSN4K/8XnCEJeTR7G8jepJ/K14C16AyAieVyJNcM8t9BvwFrwDr9P/RehPXC5/ARr7Py6FYRgZAAAAAElFTkSuQmCC"/><span class="instok">Лав энд Лайт XXL</span>','<img class="ib" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHwAAAARCAYAAAAfdMg6AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAANJSURBVGhD7ZYxjiIxEEX3tFyGM3ACcuJJCcmIyEiISEhIWL0envSptbthRkgzC1+yuu0uV/2qXzb8ubzxUngL/mJ4C/5iuBF8tVpdFovF5Xg8Xld+Dg6Hw8BtPp8PY7vdXr/0sdlshj08e/hKzsvlchhT2O/317d/8fHxMcTlmZAPnE+n0/DO4F3glzU4nM/ngTtz9k7hRnA2zWazobg/DQq9Xq+HxOA5VlCALXY8e6Bo+H0kZ7n0gAgK1QMC4iPz2O12wzz30RCsZYOpk40M97qvh28J/t3GoDOzc8eQRbYwYycX3CN4D2Pckgs29Xa4VwD5YUeT2ADkl8j13COeKjjJeSqw5ZkF9VuePrqUNa9hiOf+7N4esMFe/4ypZrlHcP2ZMz6tA+vcJsYTzv2GbRbbNX2MwVg+W9eyDW5cRjbZUwVPYhTSuUVFaL8LSQIK6pwGUJQp0TnN2DFqwj3cI3jN2caCP2t+lz/gvWVjHK9h7MZiA/LQH09OegvEwibjiKcJrpgpTgoocl4bQOHyzwpxc3+FyWLjE450ft4kFV8RPLmDqfyAORrnEQGq4D2k4PWn7GmC9wpYC6AdJ1iinki/uYfBnNGKyz6+mQw+6/4eenwTmXOvcDVOnbvPOD0/LRgffzzrv3aQV7rP/Dl7JN5DgltsT6uoBfBU+PuYRBSBxIiTowVjZiGy21sFEo8KDnq55FqdszfjOJ8SwNsOuzzp9daSI/bmnrfsvfFAU3CKCPkckpAUwQkkgVp4fwu1FXliKSY+8JkJJLTHhk7PmPphrQV4Y4Pvmo+czFkf8iYGOfs9BeY95+zFBr8gOfe42UjYkRdgP3NiCuqaa/lv3hyMz3rm6Eg0BW8NN3LiDOhoieXvGrYVJsE3B357wL7GhKvC16QE67knhwU0Z4VBLNeISQw5ijqvggO+G6slejZWwtjknDWEl8gr3kPDvDWSJ7gRHKdsbo367xEyJJhEKtjX+846HcqA9BSwoSmIiV/h6WgBzplDDnmZs+DdffKiaFk4fSTcJ9hLbt6MFS0fIDnLrVVDbYzpvDUSN4K/8XnCEJeTR7G8jepJ/K14C16AyAieVyJNcM8t9BvwFrwDr9P/RehPXC5/ARr7Py6FYRgZAAAAAElFTkSuQmCC"/><span class="instok">Лав энд Лайт XXL</span>','<img class="ib" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHwAAAARCAYAAAAfdMg6AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAANJSURBVGhD7ZYxjiIxEEX3tFyGM3ACcuJJCcmIyEiISEhIWL0envSptbthRkgzC1+yuu0uV/2qXzb8ubzxUngL/mJ4C/5iuBF8tVpdFovF5Xg8Xld+Dg6Hw8BtPp8PY7vdXr/0sdlshj08e/hKzsvlchhT2O/317d/8fHxMcTlmZAPnE+n0/DO4F3glzU4nM/ngTtz9k7hRnA2zWazobg/DQq9Xq+HxOA5VlCALXY8e6Bo+H0kZ7n0gAgK1QMC4iPz2O12wzz30RCsZYOpk40M97qvh28J/t3GoDOzc8eQRbYwYycX3CN4D2Pckgs29Xa4VwD5YUeT2ADkl8j13COeKjjJeSqw5ZkF9VuePrqUNa9hiOf+7N4esMFe/4ypZrlHcP2ZMz6tA+vcJsYTzv2GbRbbNX2MwVg+W9eyDW5cRjbZUwVPYhTSuUVFaL8LSQIK6pwGUJQp0TnN2DFqwj3cI3jN2caCP2t+lz/gvWVjHK9h7MZiA/LQH09OegvEwibjiKcJrpgpTgoocl4bQOHyzwpxc3+FyWLjE450ft4kFV8RPLmDqfyAORrnEQGq4D2k4PWn7GmC9wpYC6AdJ1iinki/uYfBnNGKyz6+mQw+6/4eenwTmXOvcDVOnbvPOD0/LRgffzzrv3aQV7rP/Dl7JN5DgltsT6uoBfBU+PuYRBSBxIiTowVjZiGy21sFEo8KDnq55FqdszfjOJ8SwNsOuzzp9daSI/bmnrfsvfFAU3CKCPkckpAUwQkkgVp4fwu1FXliKSY+8JkJJLTHhk7PmPphrQV4Y4Pvmo+czFkf8iYGOfs9BeY95+zFBr8gOfe42UjYkRdgP3NiCuqaa/lv3hyMz3rm6Eg0BW8NN3LiDOhoieXvGrYVJsE3B357wL7GhKvC16QE67knhwU0Z4VBLNeISQw5ijqvggO+G6slejZWwtjknDWEl8gr3kPDvDWSJ7gRHKdsbo367xEyJJhEKtjX+846HcqA9BSwoSmIiV/h6WgBzplDDnmZs+DdffKiaFk4fSTcJ9hLbt6MFS0fIDnLrVVDbYzpvDUSN4K/8XnCEJeTR7G8jepJ/K14C16AyAieVyJNcM8t9BvwFrwDr9P/RehPXC5/ARr7Py6FYRgZAAAAAElFTkSuQmCC"/><span class="instok">Лав энд Лайт XXL</span>','<img class="ib" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHwAAAARCAYAAAAfdMg6AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAANJSURBVGhD7ZYxjiIxEEX3tFyGM3ACcuJJCcmIyEiISEhIWL0envSptbthRkgzC1+yuu0uV/2qXzb8ubzxUngL/mJ4C/5iuBF8tVpdFovF5Xg8Xld+Dg6Hw8BtPp8PY7vdXr/0sdlshj08e/hKzsvlchhT2O/317d/8fHxMcTlmZAPnE+n0/DO4F3glzU4nM/ngTtz9k7hRnA2zWazobg/DQq9Xq+HxOA5VlCALXY8e6Bo+H0kZ7n0gAgK1QMC4iPz2O12wzz30RCsZYOpk40M97qvh28J/t3GoDOzc8eQRbYwYycX3CN4D2Pckgs29Xa4VwD5YUeT2ADkl8j13COeKjjJeSqw5ZkF9VuePrqUNa9hiOf+7N4esMFe/4ypZrlHcP2ZMz6tA+vcJsYTzv2GbRbbNX2MwVg+W9eyDW5cRjbZUwVPYhTSuUVFaL8LSQIK6pwGUJQp0TnN2DFqwj3cI3jN2caCP2t+lz/gvWVjHK9h7MZiA/LQH09OegvEwibjiKcJrpgpTgoocl4bQOHyzwpxc3+FyWLjE450ft4kFV8RPLmDqfyAORrnEQGq4D2k4PWn7GmC9wpYC6AdJ1iinki/uYfBnNGKyz6+mQw+6/4eenwTmXOvcDVOnbvPOD0/LRgffzzrv3aQV7rP/Dl7JN5DgltsT6uoBfBU+PuYRBSBxIiTowVjZiGy21sFEo8KDnq55FqdszfjOJ8SwNsOuzzp9daSI/bmnrfsvfFAU3CKCPkckpAUwQkkgVp4fwu1FXliKSY+8JkJJLTHhk7PmPphrQV4Y4Pvmo+czFkf8iYGOfs9BeY95+zFBr8gOfe42UjYkRdgP3NiCuqaa/lv3hyMz3rm6Eg0BW8NN3LiDOhoieXvGrYVJsE3B357wL7GhKvC16QE67knhwU0Z4VBLNeISQw5ijqvggO+G6slejZWwtjknDWEl8gr3kPDvDWSJ7gRHKdsbo367xEyJJhEKtjX+846HcqA9BSwoSmIiV/h6WgBzplDDnmZs+DdffKiaFk4fSTcJ9hLbt6MFS0fIDnLrVVDbYzpvDUSN4K/8XnCEJeTR7G8jepJ/K14C16AyAieVyJNcM8t9BvwFrwDr9P/RehPXC5/ARr7Py6FYRgZAAAAAElFTkSuQmCC"/><span class="instok">Лав энд Лайт XXL</span>'];
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