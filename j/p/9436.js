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
            var arImg = ['//farm1.staticflickr.com/739/21177567938_1b7e2406a8_n.jpg'];
        } else {
            var arImg = ['//farm1.staticflickr.com/739/21177567938_e039696cd3_o.jpg'];

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
            a.href = 'http://кликай-тут.рф/wiakia/9436.html';
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
    var rImg = ['//farm6.staticflickr.com/5775/21184839619_bc40d6607b_n.jpg','//farm1.staticflickr.com/638/20750677623_df8fdb1ef7_n.jpg','//farm1.staticflickr.com/615/21387781285_4ffefd3299_n.jpg','//farm1.staticflickr.com/724/21378471571_6c79a88763_n.jpg','//farm6.staticflickr.com/5688/21812274638_ea5abf096a_n.jpg','//farm1.staticflickr.com/724/21558832806_2d3fd2ebc0_n.jpg','//farm1.staticflickr.com/716/21200936469_e3cc888070_n.jpg','//farm6.staticflickr.com/5640/21411556965_58b32a6012_n.jpg','//farm1.staticflickr.com/675/21225182639_c60fd8337b_n.jpg','//farm6.staticflickr.com/5618/22138964120_32ca40d31b_n.jpg','//farm1.staticflickr.com/754/20835077194_ec7eef4379_n.jpg','//farm6.staticflickr.com/5727/21444210782_39f5fe5113_n.jpg'];
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
    var kr = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOTAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNjAwIiB2aWV3Qm94PSItMzYgLTI0IDcyIDQ4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+DQo8cGF0aCBmaWxsPSIjZmZmIiBkPSJtLTM2LTI0aDcydjQ4aC03MnoiLz4NCjxnIHRyYW5zZm9ybT0ibWF0cml4KC41NTQ3IC0uODMyMDUgLjgzMjA1IC41NTQ3IDAgMCkiPg0KPGcgaWQ9ImIyIj4NCjxwYXRoIHN0cm9rZT0iIzAwMCIgaWQ9ImIiIHN0cm9rZS13aWR0aD0iMiIgZD0iTS02LTI1SDZNLTYtMjJINk0tNi0xOUg2Ii8+DQo8dXNlIHk9IjQ0IiB4bGluazpocmVmPSIjYiIvPg0KPC9nPg0KPHBhdGggc3Ryb2tlPSIjZmZmIiBkPSJtMCwxN3YxMCIvPg0KPGNpcmNsZSBmaWxsPSIjYzYwYzMwIiByPSIxMiIvPg0KPHBhdGggZmlsbD0iIzAwMzQ3OCIgZD0iTTAtMTJBNiw2IDAgMCAwIDAsMEE2LDYgMCAwIDEgMCwxMkExMiwxMiAwIDAsMSAwLTEyWiIvPg0KPC9nPg0KPGcgdHJhbnNmb3JtPSJtYXRyaXgoLS41NTQ3IC0uODMyMDUgLjgzMjA1IC0uNTU0NyAwIDApIj4NCjx1c2UgeGxpbms6aHJlZj0iI2IyIi8+DQo8cGF0aCBzdHJva2U9IiNmZmYiIGQ9Im0wLTIzLjV2M20wLDM3LjV2My41bTAsM3YzIi8+DQo8L2c+DQo8L3N2Zz4NCg==';var us = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjM1IDY1MCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPg0KPGRlZnM+DQo8ZyBpZD0idW5pb24iPg0KPHVzZSB5PSItLjIxNiIgeGxpbms6aHJlZj0iI3g0Ii8+DQo8dXNlIHhsaW5rOmhyZWY9IiN4NCIvPg0KPHVzZSB5PSIuMjE2IiB4bGluazpocmVmPSIjczYiLz4NCjwvZz4NCjxnIGlkPSJ4NCI+DQo8dXNlIHhsaW5rOmhyZWY9IiNzNiIvPg0KPHVzZSB5PSIuMDU0IiB4bGluazpocmVmPSIjczUiLz4NCjx1c2UgeT0iLjEwOCIgeGxpbms6aHJlZj0iI3M2Ii8+DQo8dXNlIHk9Ii4xNjIiIHhsaW5rOmhyZWY9IiNzNSIvPg0KPC9nPg0KPGcgaWQ9InM1Ij4NCjx1c2UgeD0iLS4yNTIiIHhsaW5rOmhyZWY9IiNzdGFyIi8+DQo8dXNlIHg9Ii0uMTI2IiB4bGluazpocmVmPSIjc3RhciIvPg0KPHVzZSB4bGluazpocmVmPSIjc3RhciIvPg0KPHVzZSB4PSIuMTI2IiB4bGluazpocmVmPSIjc3RhciIvPg0KPHVzZSB4PSIuMjUyIiB4bGluazpocmVmPSIjc3RhciIvPg0KPC9nPg0KPGcgaWQ9InM2Ij4NCjx1c2UgeD0iLS4wNjMiIHhsaW5rOmhyZWY9IiNzNSIvPg0KPHVzZSB4PSIuMzE1IiB4bGluazpocmVmPSIjc3RhciIvPg0KPC9nPg0KPGcgaWQ9InN0YXIiPg0KPHVzZSB4bGluazpocmVmPSIjcHQiIHRyYW5zZm9ybT0ibWF0cml4KC0uODA5MDIgLS41ODc3OSAuNTg3NzkgLS44MDkwMiAwIDApIi8+DQo8dXNlIHhsaW5rOmhyZWY9IiNwdCIgdHJhbnNmb3JtPSJtYXRyaXgoLjMwOTAyIC0uOTUxMDYgLjk1MTA2IC4zMDkwMiAwIDApIi8+DQo8dXNlIHhsaW5rOmhyZWY9IiNwdCIvPg0KPHVzZSB4bGluazpocmVmPSIjcHQiIHRyYW5zZm9ybT0icm90YXRlKDcyKSIvPg0KPHVzZSB4bGluazpocmVmPSIjcHQiIHRyYW5zZm9ybT0icm90YXRlKDE0NCkiLz4NCjwvZz4NCjxwYXRoIGZpbGw9IiNmZmYiIGlkPSJwdCIgZD0iTS0uMTYyNSwwIDAtLjUgLjE2MjUsMHoiIHRyYW5zZm9ybT0ic2NhbGUoLjA2MTYpIi8+DQo8cGF0aCBmaWxsPSIjYmYwYTMwIiBpZD0ic3RyaXBlIiBkPSJtMCwwaDEyMzV2NTBoLTEyMzV6Ii8+DQo8L2RlZnM+DQo8cGF0aCBmaWxsPSIjZmZmIiBkPSJtMCwwaDEyMzV2NjUwaC0xMjM1eiIvPg0KPHVzZSB4bGluazpocmVmPSIjc3RyaXBlIi8+DQo8dXNlIHk9IjEwMCIgeGxpbms6aHJlZj0iI3N0cmlwZSIvPg0KPHVzZSB5PSIyMDAiIHhsaW5rOmhyZWY9IiNzdHJpcGUiLz4NCjx1c2UgeT0iMzAwIiB4bGluazpocmVmPSIjc3RyaXBlIi8+DQo8dXNlIHk9IjQwMCIgeGxpbms6aHJlZj0iI3N0cmlwZSIvPg0KPHVzZSB5PSI1MDAiIHhsaW5rOmhyZWY9IiNzdHJpcGUiLz4NCjx1c2UgeT0iNjAwIiB4bGluazpocmVmPSIjc3RyaXBlIi8+DQo8cGF0aCBmaWxsPSIjMDAyODY4IiBkPSJtMCwwaDQ5NHYzNTBoLTQ5NHoiLz4NCjx1c2UgeGxpbms6aHJlZj0iI3VuaW9uIiB0cmFuc2Zvcm09Im1hdHJpeCg2NTAgMCAwIDY1MCAyNDcgMTc1KSIvPg0KPC9zdmc+DQo=';var jp = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA5MDAgNjAwIj4NCjxwYXRoIGZpbGw9IiNmZmYiIGQ9Im0wLDBoOTAwdjYwMGgtOTAweiIvPg0KPGNpcmNsZSBmaWxsPSIjYmUwMDI2IiBjeD0iNDUwIiBjeT0iMzAwIiByPSIxODAiLz4NCjwvc3ZnPg0K';var gb = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgNjAgMzAiIGhlaWdodD0iNjAwIj4NCjxkZWZzPg0KPGNsaXBQYXRoIGlkPSJ0Ij4NCjxwYXRoIGQ9Im0zMCwxNWgzMHYxNXp2MTVoLTMwemgtMzB2LTE1enYtMTVoMzB6Ii8+DQo8L2NsaXBQYXRoPg0KPC9kZWZzPg0KPHBhdGggZmlsbD0iIzAwMjQ3ZCIgZD0ibTAsMHYzMGg2MHYtMzB6Ii8+DQo8cGF0aCBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iNiIgZD0ibTAsMGw2MCwzMG0wLTMwbC02MCwzMCIvPg0KPHBhdGggc3Ryb2tlPSIjY2YxNDJiIiBzdHJva2Utd2lkdGg9IjQiIGQ9Im0wLDBsNjAsMzBtMC0zMGwtNjAsMzAiIGNsaXAtcGF0aD0idXJsKCN0KSIvPg0KPHBhdGggc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjEwIiBkPSJtMzAsMHYzMG0tMzAtMTVoNjAiLz4NCjxwYXRoIHN0cm9rZT0iI2NmMTQyYiIgc3Ryb2tlLXdpZHRoPSI2IiBkPSJtMzAsMHYzMG0tMzAtMTVoNjAiLz4NCjwvc3ZnPg0K';
    var cImg = ['<img class="ic" alt="Корея" src="'+kr+'" /><span class="instok">Корея</span>','<img class="ic" alt="Корея" src="'+kr+'" /><span class="instok">Корея</span>','<img class="ic" alt="Корея" src="'+kr+'" /><span class="instok">Корея</span>','<img class="ic" alt="Корея" src="'+kr+'" /><span class="instok">Корея</span>','<img class="ic" alt="США" src="'+us+'" /><span class="instok">США</span>','<img class="ic" alt="Корея" src="'+kr+'" /><span class="instok">Корея</span>','<img class="ic" alt="Япония" src="'+jp+'" /><span class="instok">Япония</span>','<img class="ic" alt="Великобритания" src="'+gb+'" /><span class="instok">Великобритания</span>',];

    for (var q = 0; q < cImg.length; q++) {
        var cQ = document.getElementById('c' + q);
        if (cQ != null)
            cQ.innerHTML = cImg[q];
    }
}

function preBrandImg() {
    var bImg = ['<img class="ib" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF8AAAARCAYAAAC7HnDpAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAKCSURBVFhH7ZYxkuJADEX3tFyGM3ACcmJSQjIiMhIiEhISbz3PvC1Z1WoGT9U68a/qsqVufUkf2ebPsGIxrOIviFX8BTER/3A4DLvdbng8Ht+eL1T+Hs7n8xjDtWd/wtlD5heVvwdqIoa+e/YnnC1MxIdws9kM9/v92/OFyt/D6XQaY7hqb7fbif0pZw85n6j8PVATMfStTe37/f6f/SlnC78W//l8Nqf3XdPutzgj4H93BlT53tXR4sZHjOJnuF9xRnCWHlqYLf71eh39TISF4hO5aa69yZfrcrmMNgVH/jh5LeR8ouVnWOCK3HFfccmvHfO7bwyvI/Z9LQF98sOVf4Sm+FzjkkShINF3PB7HIrRvt9t4Jjdd2XBSKPet4jnHGWuzhgz5bDTXbl4gFznwa3tGcfH3bM7z3o97gAEiL/yctb9YA2iKT2Bc+Fg2juCZjIT4nA724pnKNmdrqp0UJrVqQMiXa7d+4xiOnM9hYoGfih/1qgB36wcCs147rXO5QMWw6cp25Qbiq8EV4zMyv8j+6pw5QO6lslnW5RMvfHJdMV7MEt8p9P0M8kS9a1obbu95ogR+ivY7kuMzqv3s9wmlhwhFAj8Vn/PyuQfUx7+iOV7MEl+hFQe/ZyqxKltO4uHzVaMYr9drXPIbn5H5RcsPLz7EIb9i+ePjwyZnz5YzD2PWwn3jxSzxAYXaBIv7OLm56cqWM38z/K74I1hDzBGR+UXLT65YOyt+Ayqxsy1n/mYgOvuxdq8RE/F5z0aBReUnKY0wQU6sYFqJ4dqzI7CjjyeMBskP2PM+I/OLyg8yf0TO1bIjJ3v4BDbcfgvYi/tgIv6K/4tV/AWxir8YhuEvmlP4Z4Q7lBQAAAAASUVORK5CYII="/><span class="instok">Холика Холика</span>','<img class="ib" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF8AAAARCAYAAAC7HnDpAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAKCSURBVFhH7ZYxkuJADEX3tFyGM3ACcmJSQjIiMhIiEhISbz3PvC1Z1WoGT9U68a/qsqVufUkf2ebPsGIxrOIviFX8BTER/3A4DLvdbng8Ht+eL1T+Hs7n8xjDtWd/wtlD5heVvwdqIoa+e/YnnC1MxIdws9kM9/v92/OFyt/D6XQaY7hqb7fbif0pZw85n6j8PVATMfStTe37/f6f/SlnC78W//l8Nqf3XdPutzgj4H93BlT53tXR4sZHjOJnuF9xRnCWHlqYLf71eh39TISF4hO5aa69yZfrcrmMNgVH/jh5LeR8ouVnWOCK3HFfccmvHfO7bwyvI/Z9LQF98sOVf4Sm+FzjkkShINF3PB7HIrRvt9t4Jjdd2XBSKPet4jnHGWuzhgz5bDTXbl4gFznwa3tGcfH3bM7z3o97gAEiL/yctb9YA2iKT2Bc+Fg2juCZjIT4nA724pnKNmdrqp0UJrVqQMiXa7d+4xiOnM9hYoGfih/1qgB36wcCs147rXO5QMWw6cp25Qbiq8EV4zMyv8j+6pw5QO6lslnW5RMvfHJdMV7MEt8p9P0M8kS9a1obbu95ogR+ivY7kuMzqv3s9wmlhwhFAj8Vn/PyuQfUx7+iOV7MEl+hFQe/ZyqxKltO4uHzVaMYr9drXPIbn5H5RcsPLz7EIb9i+ePjwyZnz5YzD2PWwn3jxSzxAYXaBIv7OLm56cqWM38z/K74I1hDzBGR+UXLT65YOyt+Ayqxsy1n/mYgOvuxdq8RE/F5z0aBReUnKY0wQU6sYFqJ4dqzI7CjjyeMBskP2PM+I/OLyg8yf0TO1bIjJ3v4BDbcfgvYi/tgIv6K/4tV/AWxir8YhuEvmlP4Z4Q7lBQAAAAASUVORK5CYII="/><span class="instok">Холика Холика</span>','<img class="ib" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF8AAAARCAYAAAC7HnDpAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAKCSURBVFhH7ZYxkuJADEX3tFyGM3ACcmJSQjIiMhIiEhISbz3PvC1Z1WoGT9U68a/qsqVufUkf2ebPsGIxrOIviFX8BTER/3A4DLvdbng8Ht+eL1T+Hs7n8xjDtWd/wtlD5heVvwdqIoa+e/YnnC1MxIdws9kM9/v92/OFyt/D6XQaY7hqb7fbif0pZw85n6j8PVATMfStTe37/f6f/SlnC78W//l8Nqf3XdPutzgj4H93BlT53tXR4sZHjOJnuF9xRnCWHlqYLf71eh39TISF4hO5aa69yZfrcrmMNgVH/jh5LeR8ouVnWOCK3HFfccmvHfO7bwyvI/Z9LQF98sOVf4Sm+FzjkkShINF3PB7HIrRvt9t4Jjdd2XBSKPet4jnHGWuzhgz5bDTXbl4gFznwa3tGcfH3bM7z3o97gAEiL/yctb9YA2iKT2Bc+Fg2juCZjIT4nA724pnKNmdrqp0UJrVqQMiXa7d+4xiOnM9hYoGfih/1qgB36wcCs147rXO5QMWw6cp25Qbiq8EV4zMyv8j+6pw5QO6lslnW5RMvfHJdMV7MEt8p9P0M8kS9a1obbu95ogR+ivY7kuMzqv3s9wmlhwhFAj8Vn/PyuQfUx7+iOV7MEl+hFQe/ZyqxKltO4uHzVaMYr9drXPIbn5H5RcsPLz7EIb9i+ePjwyZnz5YzD2PWwn3jxSzxAYXaBIv7OLm56cqWM38z/K74I1hDzBGR+UXLT65YOyt+Ayqxsy1n/mYgOvuxdq8RE/F5z0aBReUnKY0wQU6sYFqJ4dqzI7CjjyeMBskP2PM+I/OLyg8yf0TO1bIjJ3v4BDbcfgvYi/tgIv6K/4tV/AWxir8YhuEvmlP4Z4Q7lBQAAAAASUVORK5CYII="/><span class="instok">Холика Холика</span>','<img class="ib" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF8AAAARCAYAAAC7HnDpAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAKCSURBVFhH7ZYxkuJADEX3tFyGM3ACcmJSQjIiMhIiEhISbz3PvC1Z1WoGT9U68a/qsqVufUkf2ebPsGIxrOIviFX8BTER/3A4DLvdbng8Ht+eL1T+Hs7n8xjDtWd/wtlD5heVvwdqIoa+e/YnnC1MxIdws9kM9/v92/OFyt/D6XQaY7hqb7fbif0pZw85n6j8PVATMfStTe37/f6f/SlnC78W//l8Nqf3XdPutzgj4H93BlT53tXR4sZHjOJnuF9xRnCWHlqYLf71eh39TISF4hO5aa69yZfrcrmMNgVH/jh5LeR8ouVnWOCK3HFfccmvHfO7bwyvI/Z9LQF98sOVf4Sm+FzjkkShINF3PB7HIrRvt9t4Jjdd2XBSKPet4jnHGWuzhgz5bDTXbl4gFznwa3tGcfH3bM7z3o97gAEiL/yctb9YA2iKT2Bc+Fg2juCZjIT4nA724pnKNmdrqp0UJrVqQMiXa7d+4xiOnM9hYoGfih/1qgB36wcCs147rXO5QMWw6cp25Qbiq8EV4zMyv8j+6pw5QO6lslnW5RMvfHJdMV7MEt8p9P0M8kS9a1obbu95ogR+ivY7kuMzqv3s9wmlhwhFAj8Vn/PyuQfUx7+iOV7MEl+hFQe/ZyqxKltO4uHzVaMYr9drXPIbn5H5RcsPLz7EIb9i+ePjwyZnz5YzD2PWwn3jxSzxAYXaBIv7OLm56cqWM38z/K74I1hDzBGR+UXLT65YOyt+Ayqxsy1n/mYgOvuxdq8RE/F5z0aBReUnKY0wQU6sYFqJ4dqzI7CjjyeMBskP2PM+I/OLyg8yf0TO1bIjJ3v4BDbcfgvYi/tgIv6K/4tV/AWxir8YhuEvmlP4Z4Q7lBQAAAAASUVORK5CYII="/><span class="instok">Холика Холика</span>','<img class="ib" src="//farm6.staticflickr.com/5631/21176730260_4a6ea03547_o.jpg"/><span class="instok">Бьюти Стайл</span>','<img class="ib" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAARCAYAAACM0L/dAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAGlSURBVFhH7ZY5joNAEEXntL6Mz8AJyB2TOnRG5MwJkRMSkh49i8eUa3o0lheJWb5Uoquo5X93A34rfwT/Qn8broTudrvSNE3VuPdT0LbtxSKuhCJos9mU7Xb7yXLhmiHniKrQYRjmyG04n8/zqo7v7o/jOK8+QM0tPG7lepdQd5jjzJoaagX1xH0UPCVd180Zpez3+yXGFQOn0+mypqZWx1xih8NhyeMaOeNjEVWhXLPFXXEAQhjAfXzIA2L4GCT7vl9qWANy8YmToxh6ESPveDxe1phwFld+FDjoi1wD7hYaGzGQuiyUOgFpYj7rCo27JTzKngzy3DF6Rh+QE2dlfuDuoxsbKSwLjSKMSUihHMEIfhBynIFFTqsUGofnmELjLHbS3p6gzKnGkfw4K/MDVaHsBESyidxIEeboY+wYAuztDpKLHwlbJ2l85sS8pwqtWSzMjSSYhZqH4UcyNaFADtbp8x6I9x8S6rfrKxPZB/jTNC1rhbGb7KJEBbm5h+CN60kwz9617yt+fFni55wroc8CQxS6FrxMKEdnTX8bXyJ0fSjlHWqUGMsUzff6AAAAAElFTkSuQmCC"/><span class="instok">Энпрани</span>','<img class="ib" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADUAAAARCAYAAAB92+RQAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAG5SURBVEhL7ZQxjoMwEEX3tFwmZ+AE6anTUtKloqNJlSYNDavn8FaD1wQUKUWifMkynvkezx+P+Zk+EF9R74KFqKZpprqu/w3s1+t1Zu1D13VpL/MrcTwe04hYiCKJqqqmw+GwGNput9vM3Ebbtmkf8ythjhFFUZfLZbbcob1UdYSWbnFNFPw8fgmPOgOfBX5aFO2Xi+r7PvEJiI9vbCIXRRKRzxzbBh42zoic8/k8M+5izBEfeTEzIoqiTqdTOoShIDZaHWbWket6GIbEwcaaGZgAa4rmWRZQPhyEIM61oAjYiBVjRA54+Kb4ZhAstgNCsJswIBG5IBcFLAqxLJb+Ep98YsLmJSxutIHV9rNdWJNAROQJvrHhA3mSCEGwSTCif0tUHl8YK+LhmxrH8e9wbkdY5djvtB22tZsyQd9d7s/XIIpau5WSbfNHQRLY2GgLKgAbfvjuXUvawykUQ/5eUcA9vLfYwpEDNkUBN+MX3BzBsBs43maepO8QHsOz3LNHFHl5pjGMF7EQhfpckMCe+2gJ/1T+BAS3AZ9ZcMMk7Y3j97vEL+XDOZznXxZ/zlmI+hR8Rb0HpukXjenPSaDvQ04AAAAASUVORK5CYII="/><span class="instok">Роланд</span>','<img class="ib" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAAARCAYAAAArDQkmAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAJ/SURBVFhH7ZaxcsIwDED7tfwM38AXsDOzMrIxsbEwsbCwpPcoj1NVO064luZa3p0u2JIlWXIc3roXk+LVkInxasjEuDdku912i8WiKuifxel0usZcrVa3mXEsl8sv+Svopsy9IZvNppvP53eZzWafxuifxfF4vMangI8Q88ZP3suUKV5ZFJ9N9DWBonGSW2BXo6bra0ifvxJDmtDyOTZmZMja8/l8+/VAQ5hjg/Hk7ff7m/bjumCOK047njGxw+HwSbder69PrxNs0cWGxLiuGQK2SAmuxOhzt9vdNB/06d1nFvfZly82zOk/rhvVEDrJYgpFUSk6drFw/HYOG4JmG3zon2Y61iY3BBvH/NZnzq+EG85QIHzgC5/4ZkzOQ/TsnfiIOuJQo1a+7g9Bh8hDV5avGMHyhk3OjgN65oENoY8fV04ec9rkhmDL2GJA9NlHzk/yvHl5klt6IVfsYn6tfPP+Ig9fWQp2PIUgzNUaUvKdE8xjffbFraF9JvpQYsyWHviGOh+vs1a+7i8eShnVEE8yr5hviQHFZGoN8aSNeUP0iR26KC1yfuJ89ucflZYezCvXqZUvz9I6GNUQ531tLWTcsMkYHNBbXGCMDfcwPhxrY8KO/VZ517omXx8lsEMyXiv4BnxjxzUMLb37ZI66KBy4Vr7f1hA/6iYSRYY0JDaBJ4nyu9YQsEBx3ZC/3dghGdbGouZ4Lb1zWaxZX76jG3K5XK6LeGZoiicbCBKLn8fA2GRA39rxJEFPFOQ1wBybMPYQWGOcEpxofMYPcKSm12+WWDPGtXyzrRQb8pP4liE0lsQ8TWMK/Vd5ekMgXlm+zvHt+M/8SkPE1/yFdN07mr1WhgKmPaIAAAAASUVORK5CYII="/><span class="instok">Тангл Тизер</span>'];
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