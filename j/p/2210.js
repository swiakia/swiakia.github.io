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
            var arImg = ['//farm1.staticflickr.com/643/21363323475_2980a9084c_n.jpg','//farm6.staticflickr.com/5689/21176416849_193841f2cb_n.jpg'];
        } else {
            var arImg = ['//farm1.staticflickr.com/643/21363323475_4eebda2415_o.jpg','//farm6.staticflickr.com/5689/21176416849_e8f5d00c63_o.jpg'];

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
            a.href = 'http://кликай-тут.рф/wiakia/2210.html';
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
    var rImg = ['//farm1.staticflickr.com/680/21388094236_5a6c139db2_n.jpg','//farm6.staticflickr.com/5639/22111578956_391ba8b0d7_n.jpg','//farm6.staticflickr.com/5685/21264952780_226323ce4d_n.jpg','//farm6.staticflickr.com/5816/21525093829_f1baae15ba_n.jpg','//farm1.staticflickr.com/730/20800338473_8b75a25bef_n.jpg','//farm6.staticflickr.com/5717/21169221913_397ca60c7b_n.jpg','//farm1.staticflickr.com/636/21232276029_64b5448571_n.jpg','//farm1.staticflickr.com/661/21408274382_ae0d4214ce_n.jpg','//farm1.staticflickr.com/650/21232740659_579898be1d_n.jpg','//farm1.staticflickr.com/586/21892056021_024876f36f_n.jpg','//farm1.staticflickr.com/653/22301674015_28d8564270_n.jpg','//farm6.staticflickr.com/5644/21260517073_a94fe8d017_n.jpg','//farm1.staticflickr.com/673/21231345458_b945f6db73_n.jpg','//farm6.staticflickr.com/5828/21410506762_aa70647d0c_n.jpg','//farm6.staticflickr.com/5745/21170777224_2f71e0d071_n.jpg','//farm6.staticflickr.com/5669/20793719063_0ff5c089f8_n.jpg','//farm6.staticflickr.com/5628/21630109982_94156ebd6c_n.jpg','//farm1.staticflickr.com/681/21210105068_0d06e8cc17_n.jpg','//farm6.staticflickr.com/5803/21398181315_3e8648ec78_n.jpg','//farm1.staticflickr.com/733/21602638038_4b2a775c9a_n.jpg'];
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
    var ru = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NTAgMzAwIj4NCjxwYXRoIGZpbGw9IiNmZmYiIGQ9Im0wLDBoNDUwdjEwMGgtNDUweiIvPg0KPHBhdGggZmlsbD0iIzAwZiIgZD0ibTAsMTAwaDQ1MHYxMDBoLTQ1MHoiLz4NCjxwYXRoIGZpbGw9IiNmMDAiIGQ9Im0wLDIwMGg0NTB2MTAwaC00NTB6Ii8+DQo8L3N2Zz4NCg==';var dk = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzNzAgMjgwIj4NCjxwYXRoIGZpbGw9IiNkMDBjMzMiIGQ9Im0wLDBoMzcwdjI4MGgtMzcweiIvPg0KPGcgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjQwIj4NCjxwYXRoIGQ9Im0xNDAsMHYyODAiLz4NCjxwYXRoIGQ9Im0wLDE0MGgzNzAiLz4NCjwvZz4NCjwvc3ZnPg0K';var kr = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOTAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNjAwIiB2aWV3Qm94PSItMzYgLTI0IDcyIDQ4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+DQo8cGF0aCBmaWxsPSIjZmZmIiBkPSJtLTM2LTI0aDcydjQ4aC03MnoiLz4NCjxnIHRyYW5zZm9ybT0ibWF0cml4KC41NTQ3IC0uODMyMDUgLjgzMjA1IC41NTQ3IDAgMCkiPg0KPGcgaWQ9ImIyIj4NCjxwYXRoIHN0cm9rZT0iIzAwMCIgaWQ9ImIiIHN0cm9rZS13aWR0aD0iMiIgZD0iTS02LTI1SDZNLTYtMjJINk0tNi0xOUg2Ii8+DQo8dXNlIHk9IjQ0IiB4bGluazpocmVmPSIjYiIvPg0KPC9nPg0KPHBhdGggc3Ryb2tlPSIjZmZmIiBkPSJtMCwxN3YxMCIvPg0KPGNpcmNsZSBmaWxsPSIjYzYwYzMwIiByPSIxMiIvPg0KPHBhdGggZmlsbD0iIzAwMzQ3OCIgZD0iTTAtMTJBNiw2IDAgMCAwIDAsMEE2LDYgMCAwIDEgMCwxMkExMiwxMiAwIDAsMSAwLTEyWiIvPg0KPC9nPg0KPGcgdHJhbnNmb3JtPSJtYXRyaXgoLS41NTQ3IC0uODMyMDUgLjgzMjA1IC0uNTU0NyAwIDApIj4NCjx1c2UgeGxpbms6aHJlZj0iI2IyIi8+DQo8cGF0aCBzdHJva2U9IiNmZmYiIGQ9Im0wLTIzLjV2M20wLDM3LjV2My41bTAsM3YzIi8+DQo8L2c+DQo8L3N2Zz4NCg==';
    var cImg = ['<img class="ic" alt="Россия" src="'+ru+'" /><span class="instok">Россия</span>','<img class="ic" alt="Дания" src="'+dk+'" /><span class="instok">Дания</span>','<img class="ic" alt="Россия" src="'+ru+'" /><span class="instok">Россия</span>','<img class="ic" alt="Россия" src="'+ru+'" /><span class="instok">Россия</span>','<img class="ic" alt="Корея" src="'+kr+'" /><span class="instok">Корея</span>','<img class="ic" alt="Корея" src="'+kr+'" /><span class="instok">Корея</span>','<img class="ic" alt="Корея" src="'+kr+'" /><span class="instok">Корея</span>','<img class="ic" alt="Корея" src="'+kr+'" /><span class="instok">Корея</span>',];

    for (var q = 0; q < cImg.length; q++) {
        var cQ = document.getElementById('c' + q);
        if (cQ != null)
            cQ.innerHTML = cImg[q];
    }
}

function preBrandImg() {
    var bImg = ['<img class="ib" src="//farm6.staticflickr.com/5641/20748154703_d94f1f676d_o.jpg"/><span class="instok">Галолбо</span>','<img class="ib" src="//farm1.staticflickr.com/765/21307391105_79ed77b0f0_o.jpg"/><span class="instok">Пилгрим</span>','<img class="ib" src="//farm6.staticflickr.com/5817/20766481873_933c9b6ffa_o.jpg"/><span class="instok">Хапи Чамс Фэмели</span>','<img class="ib" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAARCAYAAABq+XSZAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAHLSURBVFhH7ZU9bgIxEEZzWi7DGTgBPTXtlnRUdDRUNNvQOHqrfcm31v4EaRsgT7I2Mx6P/Y3H5Kt8MP/iP5WB+MPhUHa7Xbnf771nmf1+341XZCAe4ZvNptxut96zzHa77cYr8pT4Mf+c+GeKOAYd2LZtb03zTKcms+JpZ4SdTqfuyxzfFDUmnueT8dhizuv12ntKOR6Pne98Pnf25XIZrK+flb7ch7MLPkbCPL4s5qx4bb4cls2WNkKIMU3T/KxRAHmwsyCZg8NpUwxy5Hpgzhyc1XMSC+5pMemMOgf8SXx903PitR+PR+/5PaztmWvqYtBl2BRR2M94yPVgDsXXYr0QiyGriieO+JyHOo+3yWG8JQvjnHkZ2Lk+9wT3VTywpzH5d7Kq+GzZxDwKNI6b4Zv5FM9tsW8OqfdgrhZvB+EjNp+ZrN72CGKN79FD5BowjkGM2LLEUyRykD/fa73nmHgwjrn8gZXVxXN41zmwvXXxneZa8Y2am5HvVZ9MibfAGZsMxHPAFFrbgJ1CsOsYwMdhxiouda4EPx3ByH9PMLYndv7IgkXMH89kIP5doOB0CjeO+KkCv6V4Os52n7p1eEvxwDOon8uQUr4BAFxjpsVhxZYAAAAASUVORK5CYII="/><span class="instok">Инловени</span>','<img class="ib" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE8AAAARCAYAAACcsPEBAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAJOSURBVFhH7ZY9bsJAEEZzWi7DGTgBPTUtJR0VHQ0VDQ2No2f8kvFobAOukPxJo2Xnfz7vbvLTLPgYC3kzsJA3Az3ydrtds9lsmtvt1mme2G63rR77t8GZsuz3+87jiePx2OpZX0WPPIJXq1VzvV47zb+O9Rth/+v1uid5psPh0OpZX8UoeXy1KeLwvd/v3a5GPsn4j8XEj1eBfFM1RZ4JPB6PPwJzbxnYh/oZJG+KOOw2wIqfA/kVvTL6cCV4AvitPSLnPJ1OneUJ82on19TwY+QhIp88/I21Xr7qJXkxKAcAhiIZw0aiLcxqQXwhzXz4ns/n1sbe4akT7fZwuVxaOzr2Dqg/+zHEmRRi7E3YszPoR12JZB9PfEmeTSH8doAKJJMc4oGNQIQwn7CWJyLbqYndj6d/7MWP5iPvFVOAceZX0HFyRUUee2pAcvVMlOSRnOImRJ9B0tyMfrkRoJ+wViTP2krMqS5iaGDzRJ11hMQbm3PF22G+SDYoySNQqIvXN39xGmPvoLkRkIfPQ2lnH8VrrT2eAK+ufbBSUwFD5NmjhLg3TnDS0Zkn2gf/YIj41jiIfpIsmehB1YjDi1yLIdhLhCfbGuYkjhhPBlJdKWEdiCaHQhx63z3zswJz2x99RTuYJA84mOREQhH0riA3AvQVuRYfRh1+sZ6wDwW/+OhXMGcWYvlAIvdMXnse6qdHng9uBfTRhi+FfMCjnX8F+M0qqvi4F16T+IchgjhOwRRpwjpZ8mmtesaHOvSDLaNH3oL3sJA3Awt5H6NpfgHUjRyqCpLFIgAAAABJRU5ErkJggg=="/><span class="instok">Камео—Бис</span>','<img class="ib" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE8AAAARCAYAAACcsPEBAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAJOSURBVFhH7ZY9bsJAEEZzWi7DGTgBPTUtJR0VHQ0VDQ2No2f8kvFobAOukPxJo2Xnfz7vbvLTLPgYC3kzsJA3Az3ydrtds9lsmtvt1mme2G63rR77t8GZsuz3+87jiePx2OpZX0WPPIJXq1VzvV47zb+O9Rth/+v1uid5psPh0OpZX8UoeXy1KeLwvd/v3a5GPsn4j8XEj1eBfFM1RZ4JPB6PPwJzbxnYh/oZJG+KOOw2wIqfA/kVvTL6cCV4AvitPSLnPJ1OneUJ82on19TwY+QhIp88/I21Xr7qJXkxKAcAhiIZw0aiLcxqQXwhzXz4ns/n1sbe4akT7fZwuVxaOzr2Dqg/+zHEmRRi7E3YszPoR12JZB9PfEmeTSH8doAKJJMc4oGNQIQwn7CWJyLbqYndj6d/7MWP5iPvFVOAceZX0HFyRUUee2pAcvVMlOSRnOImRJ9B0tyMfrkRoJ+wViTP2krMqS5iaGDzRJ11hMQbm3PF22G+SDYoySNQqIvXN39xGmPvoLkRkIfPQ2lnH8VrrT2eAK+ufbBSUwFD5NmjhLg3TnDS0Zkn2gf/YIj41jiIfpIsmehB1YjDi1yLIdhLhCfbGuYkjhhPBlJdKWEdiCaHQhx63z3zswJz2x99RTuYJA84mOREQhH0riA3AvQVuRYfRh1+sZ6wDwW/+OhXMGcWYvlAIvdMXnse6qdHng9uBfTRhi+FfMCjnX8F+M0qqvi4F16T+IchgjhOwRRpwjpZ8mmtesaHOvSDLaNH3oL3sJA3Awt5H6NpfgHUjRyqCpLFIgAAAABJRU5ErkJggg=="/><span class="instok">Камео—Бис</span>','<img class="ib" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE8AAAARCAYAAACcsPEBAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAJOSURBVFhH7ZY9bsJAEEZzWi7DGTgBPTUtJR0VHQ0VDQ2No2f8kvFobAOukPxJo2Xnfz7vbvLTLPgYC3kzsJA3Az3ydrtds9lsmtvt1mme2G63rR77t8GZsuz3+87jiePx2OpZX0WPPIJXq1VzvV47zb+O9Rth/+v1uid5psPh0OpZX8UoeXy1KeLwvd/v3a5GPsn4j8XEj1eBfFM1RZ4JPB6PPwJzbxnYh/oZJG+KOOw2wIqfA/kVvTL6cCV4AvitPSLnPJ1OneUJ82on19TwY+QhIp88/I21Xr7qJXkxKAcAhiIZw0aiLcxqQXwhzXz4ns/n1sbe4akT7fZwuVxaOzr2Dqg/+zHEmRRi7E3YszPoR12JZB9PfEmeTSH8doAKJJMc4oGNQIQwn7CWJyLbqYndj6d/7MWP5iPvFVOAceZX0HFyRUUee2pAcvVMlOSRnOImRJ9B0tyMfrkRoJ+wViTP2krMqS5iaGDzRJ11hMQbm3PF22G+SDYoySNQqIvXN39xGmPvoLkRkIfPQ2lnH8VrrT2eAK+ufbBSUwFD5NmjhLg3TnDS0Zkn2gf/YIj41jiIfpIsmehB1YjDi1yLIdhLhCfbGuYkjhhPBlJdKWEdiCaHQhx63z3zswJz2x99RTuYJA84mOREQhH0riA3AvQVuRYfRh1+sZ6wDwW/+OhXMGcWYvlAIvdMXnse6qdHng9uBfTRhi+FfMCjnX8F+M0qqvi4F16T+IchgjhOwRRpwjpZ8mmtesaHOvSDLaNH3oL3sJA3Awt5H6NpfgHUjRyqCpLFIgAAAABJRU5ErkJggg=="/><span class="instok">Камео—Бис</span>','<img class="ib" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE8AAAARCAYAAACcsPEBAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAJOSURBVFhH7ZY9bsJAEEZzWi7DGTgBPTUtJR0VHQ0VDQ2No2f8kvFobAOukPxJo2Xnfz7vbvLTLPgYC3kzsJA3Az3ydrtds9lsmtvt1mme2G63rR77t8GZsuz3+87jiePx2OpZX0WPPIJXq1VzvV47zb+O9Rth/+v1uid5psPh0OpZX8UoeXy1KeLwvd/v3a5GPsn4j8XEj1eBfFM1RZ4JPB6PPwJzbxnYh/oZJG+KOOw2wIqfA/kVvTL6cCV4AvitPSLnPJ1OneUJ82on19TwY+QhIp88/I21Xr7qJXkxKAcAhiIZw0aiLcxqQXwhzXz4ns/n1sbe4akT7fZwuVxaOzr2Dqg/+zHEmRRi7E3YszPoR12JZB9PfEmeTSH8doAKJJMc4oGNQIQwn7CWJyLbqYndj6d/7MWP5iPvFVOAceZX0HFyRUUee2pAcvVMlOSRnOImRJ9B0tyMfrkRoJ+wViTP2krMqS5iaGDzRJ11hMQbm3PF22G+SDYoySNQqIvXN39xGmPvoLkRkIfPQ2lnH8VrrT2eAK+ufbBSUwFD5NmjhLg3TnDS0Zkn2gf/YIj41jiIfpIsmehB1YjDi1yLIdhLhCfbGuYkjhhPBlJdKWEdiCaHQhx63z3zswJz2x99RTuYJA84mOREQhH0riA3AvQVuRYfRh1+sZ6wDwW/+OhXMGcWYvlAIvdMXnse6qdHng9uBfTRhi+FfMCjnX8F+M0qqvi4F16T+IchgjhOwRRpwjpZ8mmtesaHOvSDLaNH3oL3sJA3Awt5H6NpfgHUjRyqCpLFIgAAAABJRU5ErkJggg=="/><span class="instok">Камео—Бис</span>'];
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