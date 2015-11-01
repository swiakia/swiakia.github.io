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
            var arImg = ['//farm6.staticflickr.com/5621/21175185210_69f8a9b7ee_n.jpg','//farm1.staticflickr.com/614/21337032206_3c351f897d_n.jpg'];
        } else {
            var arImg = ['//farm6.staticflickr.com/5621/21175185210_859a2fcf17_o.jpg','//farm1.staticflickr.com/614/21337032206_c9f72a64f2_o.jpg'];

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
            a.href = 'http://кликай-тут.рф/wiakia/1920.html';
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
    var rImg = ['//farm6.staticflickr.com/5758/21179202679_085289c925_n.jpg','//farm6.staticflickr.com/5833/20742193013_758528e7ed_n.jpg','//farm6.staticflickr.com/5704/21363288115_ea390b9f3e_n.jpg','//farm6.staticflickr.com/5734/21202638169_75735a5551_n.jpg','//farm6.staticflickr.com/5619/21378732652_b31f3de0d3_n.jpg','//farm6.staticflickr.com/5825/21682161613_e70a9d955a_n.jpg','//farm6.staticflickr.com/5786/20797875293_94c8e06061_n.jpg','//farm1.staticflickr.com/708/21382661743_62210222dd_n.jpg','//farm6.staticflickr.com/5762/21806999660_ce4a5649fe_n.jpg','//farm6.staticflickr.com/5619/21800207521_88a04dbc18_n.jpg','//farm1.staticflickr.com/735/21652264261_16dc2eb31f_n.jpg'];
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
    var de = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBoZWlnaHQ9IjYwMCIgdmlld0JveD0iMCAwIDUgMyI+DQo8cGF0aCBkPSJtMCwwaDV2M2gtNXoiLz4NCjxwYXRoIGZpbGw9IiNkMDAiIGQ9Im0wLDFoNXYyaC01eiIvPg0KPHBhdGggZmlsbD0iI2ZmY2UwMCIgZD0ibTAsMmg1djFoLTV6Ii8+DQo8L3N2Zz4NCg==';var cn = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjAwIDgwMCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPg0KPHBhdGggZmlsbD0iI2RlMjkxMCIgZD0ibTAsMGgxMjAwdjgwMGgtMTIwMHoiLz4NCjxwYXRoIGZpbGw9IiNmZmRlMDAiIGQ9Im0tMTYuNTc5Niw5OS42MDA3bDIuMzY4Ni04LjEwMzItNi45NTMtNC43ODgzIDguNDM4Ni0uMjUxNCAyLjQwNTMtOC4wOTI0IDIuODQ2Nyw3Ljk0NzkgOC40Mzk2LS4yMTMxLTYuNjc5Miw1LjE2MzQgMi44MTA2LDcuOTYwNy02Ljk3NDctNC43NTY3LTYuNzAyNSw1LjEzMzF6IiB0cmFuc2Zvcm09Im1hdHJpeCg5LjkzMzUyIC4yNzc0NyAtLjI3NzQ3IDkuOTMzNTIgMzI0LjI5MjUgLTY5NS4yNDE1KSIvPg0KPHBhdGggZmlsbD0iI2ZmZGUwMCIgaWQ9InN0YXIiIGQ9Im0zNjUuODU1MiwzMzIuNjg5NWwyOC4zMDY4LDExLjM3NTcgMTkuNjcyMi0yMy4zMTcxLTIuMDcxNiwzMC40MzY3IDI4LjI1NDksMTEuNTA0LTI5LjU4NzIsNy40MzUyLTIuMjA5NywzMC40MjY5LTE2LjIxNDItMjUuODQxNS0yOS42MjA2LDcuMzAwOSAxOS41NjYyLTIzLjQwNjEtMTYuMDk2OC0yNS45MTQ4eiIvPg0KPGcgZmlsbD0iI2ZmZGUwMCI+DQo8cGF0aCBkPSJtNTE5LjA3NzksMTc5LjMxMjlsLTMwLjA1MzQtNS4yNDE4LTE0LjM5NDUsMjYuODk3Ni00LjMwMTctMzAuMjAyMy0zMC4wMjkzLTUuMzc4MSAyNy4zOTQ4LTEzLjQyNDItNC4xNjQ3LTMwLjIyMTUgMjEuMjMyNiwyMS45MDU3IDI3LjQ1NTQtMTMuMjk5OC0xNC4yNzIzLDI2Ljk2MjcgMjEuMTMzMSwyMi4wMDE3eiIvPg0KPHBhdGggZD0ibTQ1NS4yNTkyLDMxNS45Nzk1bDkuMzczNC0yOS4wMzE0LTI0LjYzMjUtMTcuOTk3OCAzMC41MDctLjA1NjYgOS41MDUtMjguOTg4NiA5LjQ4MSwyOC45OTY0IDMwLjUwNywuMDgxOC0yNC42NDc0LDE3Ljk3NzQgOS4zNDkzLDI5LjAzOTItMjQuNzE0LTE3Ljg4NTgtMjQuNzI4OCwxNy44NjUzeiIvPg0KPC9nPg0KPHVzZSB4bGluazpocmVmPSIjc3RhciIgdHJhbnNmb3JtPSJtYXRyaXgoLjk5ODYzIC4wNTIzNCAtLjA1MjM0IC45OTg2MyAxOS40MDAwNSAtMzAwLjUzNjgxKSIvPg0KPC9zdmc+DQo=';var us = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjM1IDY1MCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPg0KPGRlZnM+DQo8ZyBpZD0idW5pb24iPg0KPHVzZSB5PSItLjIxNiIgeGxpbms6aHJlZj0iI3g0Ii8+DQo8dXNlIHhsaW5rOmhyZWY9IiN4NCIvPg0KPHVzZSB5PSIuMjE2IiB4bGluazpocmVmPSIjczYiLz4NCjwvZz4NCjxnIGlkPSJ4NCI+DQo8dXNlIHhsaW5rOmhyZWY9IiNzNiIvPg0KPHVzZSB5PSIuMDU0IiB4bGluazpocmVmPSIjczUiLz4NCjx1c2UgeT0iLjEwOCIgeGxpbms6aHJlZj0iI3M2Ii8+DQo8dXNlIHk9Ii4xNjIiIHhsaW5rOmhyZWY9IiNzNSIvPg0KPC9nPg0KPGcgaWQ9InM1Ij4NCjx1c2UgeD0iLS4yNTIiIHhsaW5rOmhyZWY9IiNzdGFyIi8+DQo8dXNlIHg9Ii0uMTI2IiB4bGluazpocmVmPSIjc3RhciIvPg0KPHVzZSB4bGluazpocmVmPSIjc3RhciIvPg0KPHVzZSB4PSIuMTI2IiB4bGluazpocmVmPSIjc3RhciIvPg0KPHVzZSB4PSIuMjUyIiB4bGluazpocmVmPSIjc3RhciIvPg0KPC9nPg0KPGcgaWQ9InM2Ij4NCjx1c2UgeD0iLS4wNjMiIHhsaW5rOmhyZWY9IiNzNSIvPg0KPHVzZSB4PSIuMzE1IiB4bGluazpocmVmPSIjc3RhciIvPg0KPC9nPg0KPGcgaWQ9InN0YXIiPg0KPHVzZSB4bGluazpocmVmPSIjcHQiIHRyYW5zZm9ybT0ibWF0cml4KC0uODA5MDIgLS41ODc3OSAuNTg3NzkgLS44MDkwMiAwIDApIi8+DQo8dXNlIHhsaW5rOmhyZWY9IiNwdCIgdHJhbnNmb3JtPSJtYXRyaXgoLjMwOTAyIC0uOTUxMDYgLjk1MTA2IC4zMDkwMiAwIDApIi8+DQo8dXNlIHhsaW5rOmhyZWY9IiNwdCIvPg0KPHVzZSB4bGluazpocmVmPSIjcHQiIHRyYW5zZm9ybT0icm90YXRlKDcyKSIvPg0KPHVzZSB4bGluazpocmVmPSIjcHQiIHRyYW5zZm9ybT0icm90YXRlKDE0NCkiLz4NCjwvZz4NCjxwYXRoIGZpbGw9IiNmZmYiIGlkPSJwdCIgZD0iTS0uMTYyNSwwIDAtLjUgLjE2MjUsMHoiIHRyYW5zZm9ybT0ic2NhbGUoLjA2MTYpIi8+DQo8cGF0aCBmaWxsPSIjYmYwYTMwIiBpZD0ic3RyaXBlIiBkPSJtMCwwaDEyMzV2NTBoLTEyMzV6Ii8+DQo8L2RlZnM+DQo8cGF0aCBmaWxsPSIjZmZmIiBkPSJtMCwwaDEyMzV2NjUwaC0xMjM1eiIvPg0KPHVzZSB4bGluazpocmVmPSIjc3RyaXBlIi8+DQo8dXNlIHk9IjEwMCIgeGxpbms6aHJlZj0iI3N0cmlwZSIvPg0KPHVzZSB5PSIyMDAiIHhsaW5rOmhyZWY9IiNzdHJpcGUiLz4NCjx1c2UgeT0iMzAwIiB4bGluazpocmVmPSIjc3RyaXBlIi8+DQo8dXNlIHk9IjQwMCIgeGxpbms6aHJlZj0iI3N0cmlwZSIvPg0KPHVzZSB5PSI1MDAiIHhsaW5rOmhyZWY9IiNzdHJpcGUiLz4NCjx1c2UgeT0iNjAwIiB4bGluazpocmVmPSIjc3RyaXBlIi8+DQo8cGF0aCBmaWxsPSIjMDAyODY4IiBkPSJtMCwwaDQ5NHYzNTBoLTQ5NHoiLz4NCjx1c2UgeGxpbms6aHJlZj0iI3VuaW9uIiB0cmFuc2Zvcm09Im1hdHJpeCg2NTAgMCAwIDY1MCAyNDcgMTc1KSIvPg0KPC9zdmc+DQo=';
    var cImg = ['<img class="ic" alt="Германия" src="'+de+'" /><span class="instok">Германия</span>','<img class="ic" alt="Германия" src="'+de+'" /><span class="instok">Германия</span>','<img class="ic" alt="Германия" src="'+de+'" /><span class="instok">Германия</span>','<img class="ic" alt="Китай" src="'+cn+'" /><span class="instok">Китай</span>','<img class="ic" alt="Китай" src="'+cn+'" /><span class="instok">Китай</span>','<img class="ic" alt="США" src="'+us+'" /><span class="instok">США</span>','<img class="ic" alt="Китай" src="'+cn+'" /><span class="instok">Китай</span>',];

    for (var q = 0; q < cImg.length; q++) {
        var cQ = document.getElementById('c' + q);
        if (cQ != null)
            cQ.innerHTML = cImg[q];
    }
}

function preBrandImg() {
    var bImg = ['<img class="ib" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADUAAAARCAYAAAB92+RQAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAGzSURBVEhL7ZQxcsJADEVzWi7DGTgBPTUtJR0VHQ0VDQ2NM2/jBz9iQ2I6MvwZjW2t9ktfq/XH8A/xFvUqeChquVw26wH/YrEY9vv96LnH4XBocfP5vFkvfrVaNf/pdBo9X5CfdfEXPvBQlJsrdrvdMJvNmkHcQ43B/GZN6D8ej6Pn5ktuBOFTTPJVYU+Jolsm4Fm7DFxLAQpNziqKk+E7BYHNZtP8KWC73TYf9SQmizqfz1e/iXJEgMXXZIA1OESK+kkQMBdrnJrIExaTRUnOMwUmMuY3KMontl6vx9UbzGUM7zQtJ0FMFqXPbjuKSf6MKAvFeM/TEJfLpQlmj3FYbcIkUV5WDOIk510oqo4lqJdaUfAwSu5NPpF3l6Z6p7JGcBVFAIt2F4K6IX8Qafgwk/b2AvzuEYpKsfryBMyTwkDPfxWVv0zevbR52S2IMUiQnNg8GRtAgYwmZgFZrALywiMQH/EWaw75Hv1Yvo2fCbQk9ah7I0WM8QmFpWWTQE8UyKaIHh856967O+Vc14tK4azVUxKsVXLAPhqC2aCEvD30OOWjxp/2PfxRvCreol4Dw/AJOIzJ8eZJr6EAAAAASUVORK5CYII="/><span class="instok">Джэкс</span>','<img class="ib" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADUAAAARCAYAAAB92+RQAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAGzSURBVEhL7ZQxcsJADEVzWi7DGTgBPTUtJR0VHQ0VDQ2NM2/jBz9iQ2I6MvwZjW2t9ktfq/XH8A/xFvUqeChquVw26wH/YrEY9vv96LnH4XBocfP5vFkvfrVaNf/pdBo9X5CfdfEXPvBQlJsrdrvdMJvNmkHcQ43B/GZN6D8ej6Pn5ktuBOFTTPJVYU+Jolsm4Fm7DFxLAQpNziqKk+E7BYHNZtP8KWC73TYf9SQmizqfz1e/iXJEgMXXZIA1OESK+kkQMBdrnJrIExaTRUnOMwUmMuY3KMontl6vx9UbzGUM7zQtJ0FMFqXPbjuKSf6MKAvFeM/TEJfLpQlmj3FYbcIkUV5WDOIk510oqo4lqJdaUfAwSu5NPpF3l6Z6p7JGcBVFAIt2F4K6IX8Qafgwk/b2AvzuEYpKsfryBMyTwkDPfxWVv0zevbR52S2IMUiQnNg8GRtAgYwmZgFZrALywiMQH/EWaw75Hv1Yvo2fCbQk9ah7I0WM8QmFpWWTQE8UyKaIHh856967O+Vc14tK4azVUxKsVXLAPhqC2aCEvD30OOWjxp/2PfxRvCreol4Dw/AJOIzJ8eZJr6EAAAAASUVORK5CYII="/><span class="instok">Джэкс</span>','<img class="ib" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADUAAAARCAYAAAB92+RQAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAGzSURBVEhL7ZQxcsJADEVzWi7DGTgBPTUtJR0VHQ0VDQ2NM2/jBz9iQ2I6MvwZjW2t9ktfq/XH8A/xFvUqeChquVw26wH/YrEY9vv96LnH4XBocfP5vFkvfrVaNf/pdBo9X5CfdfEXPvBQlJsrdrvdMJvNmkHcQ43B/GZN6D8ej6Pn5ktuBOFTTPJVYU+Jolsm4Fm7DFxLAQpNziqKk+E7BYHNZtP8KWC73TYf9SQmizqfz1e/iXJEgMXXZIA1OESK+kkQMBdrnJrIExaTRUnOMwUmMuY3KMontl6vx9UbzGUM7zQtJ0FMFqXPbjuKSf6MKAvFeM/TEJfLpQlmj3FYbcIkUV5WDOIk510oqo4lqJdaUfAwSu5NPpF3l6Z6p7JGcBVFAIt2F4K6IX8Qafgwk/b2AvzuEYpKsfryBMyTwkDPfxWVv0zevbR52S2IMUiQnNg8GRtAgYwmZgFZrALywiMQH/EWaw75Hv1Yvo2fCbQk9ah7I0WM8QmFpWWTQE8UyKaIHh856967O+Vc14tK4azVUxKsVXLAPhqC2aCEvD30OOWjxp/2PfxRvCreol4Dw/AJOIzJ8eZJr6EAAAAASUVORK5CYII="/><span class="instok">Джэкс</span>','<img class="ib" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAARCAYAAAAv+NkbAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAALLSURBVFhH7ZUxjioxEET3tFyGM3ACcmJSQjIiMhIiEhKS+Xr8ebtFyzOwaCUmmJIsxu2u7mq3bb66GZPE3JiJYm7MRPHQmM1m061Wq/s4nU69tesul8u3fb1e99bPQC1ofRXvcD6Nh8YgfrFY3EcWsd/vv+3L5bK3fgbn8/muA62v4h3OpzHYmGwAt6RlF5xIih8DPhXX67VpH8OzTW7pqBxyknsMY7perfdZDjAUp9kYGkEDDMw3a/xmY3jumGfTttttv/q/odi4fcYFiDGevMPhcF97hrrJgE0wl/F2u12/+sjxkKlL4I+N1yHjpC51s+Z61guM4zr5ssnqrHlqg5qNITi/iLIoBBCAIdxc/I7HY3PdxPDxAczNA1feqycMLrGFedhoYmYdQI42tTJ3Q6wZO5p8vpkL64UPz7m6scshHjW3YmDjl4PtoWWeaDbGm0B3FawtkwBFIZQ1fC024wm+sRFbWOgrwA++hbTioSm1Vg5w08xrnfwK/LNe62EzaV49SK163XgaDfTJesmR2kCzMZD4lqA4flMoG+q6I5MaL69yawN+g7rJQ/FSa+UAeWptxcnaQd40Bt95IDKnqHHdE/MCOKkNDDbGE8WQlInzVLrxNSlz/QUnDZ8siBOG/Xa79ZYf4EcMY/rE+P9gPOdCbQBu1gHeaYxAL37WK8eceZPcxz+7MT4RrcSgFsuctUzKmv4iG5pvNby8WcLCaFD6WigwLzZ8fD7gAmzM1QpshFqdWyuo+tUtx0Mixxjw8PGGMWyW+o0BWE9tYLAxAEKdM4T+2p37xjJPf8Epx46vo554YSPTtxbRipc3Ev2V905jzOOoMQF5sTvwgyfwx/6rxnBik8D32ByQlJPDBvIUse6TVOMl8JfbuikVPh9D8YA+rXjw0q5WUbWDln51j2mBR13ZENGKybxqfmjMjOlgbsxEMTdmkui6f2/01b6mnF9tAAAAAElFTkSuQmCC"/><span class="instok">Марк Джонсон</span>','<img class="ib" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAARCAYAAAAv+NkbAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAALLSURBVFhH7ZUxjioxEET3tFyGM3ACcmJSQjIiMhIiEhKS+Xr8ebtFyzOwaCUmmJIsxu2u7mq3bb66GZPE3JiJYm7MRPHQmM1m061Wq/s4nU69tesul8u3fb1e99bPQC1ofRXvcD6Nh8YgfrFY3EcWsd/vv+3L5bK3fgbn8/muA62v4h3OpzHYmGwAt6RlF5xIih8DPhXX67VpH8OzTW7pqBxyknsMY7perfdZDjAUp9kYGkEDDMw3a/xmY3jumGfTttttv/q/odi4fcYFiDGevMPhcF97hrrJgE0wl/F2u12/+sjxkKlL4I+N1yHjpC51s+Z61guM4zr5ssnqrHlqg5qNITi/iLIoBBCAIdxc/I7HY3PdxPDxAczNA1feqycMLrGFedhoYmYdQI42tTJ3Q6wZO5p8vpkL64UPz7m6scshHjW3YmDjl4PtoWWeaDbGm0B3FawtkwBFIZQ1fC024wm+sRFbWOgrwA++hbTioSm1Vg5w08xrnfwK/LNe62EzaV49SK163XgaDfTJesmR2kCzMZD4lqA4flMoG+q6I5MaL69yawN+g7rJQ/FSa+UAeWptxcnaQd40Bt95IDKnqHHdE/MCOKkNDDbGE8WQlInzVLrxNSlz/QUnDZ8siBOG/Xa79ZYf4EcMY/rE+P9gPOdCbQBu1gHeaYxAL37WK8eceZPcxz+7MT4RrcSgFsuctUzKmv4iG5pvNby8WcLCaFD6WigwLzZ8fD7gAmzM1QpshFqdWyuo+tUtx0Mixxjw8PGGMWyW+o0BWE9tYLAxAEKdM4T+2p37xjJPf8Epx46vo554YSPTtxbRipc3Ev2V905jzOOoMQF5sTvwgyfwx/6rxnBik8D32ByQlJPDBvIUse6TVOMl8JfbuikVPh9D8YA+rXjw0q5WUbWDln51j2mBR13ZENGKybxqfmjMjOlgbsxEMTdmkui6f2/01b6mnF9tAAAAAElFTkSuQmCC"/><span class="instok">Марк Джонсон</span>','<img class="ib" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC8AAAARCAYAAABNV/VxAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAGMSURBVEhL7ZU9joNADIX3tLlMzsAJ6KlpKemo0tFQ0dDQzOpj+VZmgP0tkkh5kqWMZ/z8bM+Qt/TEeIm/F3biu65LRVGk6/W6WFmWaRzHdfexsBHfNE26XC6LaArAXE/TtJ56HGzE2/F5nldPSlVVLQVQWA4m8pOivpscHGc8+IdhWFdb7MQjFMEmpJA8+Ha7LUU6Fa5WhD54PAe3gA9/XdefDcM4LxDt3lmejfgoygAI+75fT3yQ4sd4H161SCwHsQi1KU4Pn/z4Yl4bZeHsRw73we7B0vHYMY0EoG3bZU3XhB0S/I5riicmF0+cgA9fFOdVUlPkAIfiRQwyEcGsFYixjolz8Yr9Sry8cpCbaeZ5DsVzOE8KTKTfJHSKvWgi55HjN+KdphN3/1A8IIADdJtRY9EHKNLEfglIkt/5/4qXgw8Gpo5T8QjzULSYBHg/TYDxeIU+8RfxeQ51xbe2u/MAAsh4nJLloFD2MR+WICaPYx3/P1jDIY4+yUweHZ7LYw7FPwte4u+DlN4Brg9yAo83+d4AAAAASUVORK5CYII="/><span class="instok">Сенна</span>','<img class="ib" src="//farm6.staticflickr.com/5772/21393319775_90b8e72460_o.jpg"/><span class="instok">Модные истории</span>'];
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