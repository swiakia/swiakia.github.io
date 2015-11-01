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
            var arImg = ['//farm6.staticflickr.com/5754/20728514423_d9253674e2_n.jpg','//farm6.staticflickr.com/5747/20728510243_5c4cf2ac37_n.jpg','//farm1.staticflickr.com/636/21161500890_c39eb30cfc_n.jpg','//farm6.staticflickr.com/5671/21349604905_3671e082b2_n.jpg'];
        } else {
            var arImg = ['//farm6.staticflickr.com/5754/20728514423_6249704b25_o.jpg','//farm6.staticflickr.com/5747/20728510243_7970a8744a_o.jpg','//farm1.staticflickr.com/636/21161500890_303193f996_o.jpg','//farm6.staticflickr.com/5671/21349604905_119dd255d8_o.jpg'];

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
            a.href = 'http://кликай-тут.рф/wiakia/120.html';
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
    var rImg = ['//farm1.staticflickr.com/630/21346533558_7b4d651bc4_n.jpg','//farm6.staticflickr.com/5752/21591702026_53c37a2cb4_n.jpg','//farm1.staticflickr.com/644/21553200962_d1f446981c_n.jpg','//farm1.staticflickr.com/629/21707128053_5d90e3cafc_n.jpg','//farm1.staticflickr.com/686/21180841399_bd767ff29f_n.jpg','//farm6.staticflickr.com/5650/21896562896_bcbaa79020_n.jpg','//farm6.staticflickr.com/5726/21990673991_f681f3de56_n.jpg','//farm1.staticflickr.com/607/21477215041_dbe91278e4_n.jpg','//farm6.staticflickr.com/5814/22060662376_979b843f8b_n.jpg','//farm1.staticflickr.com/703/21472315661_ae64bd7082_n.jpg','//farm1.staticflickr.com/690/21927520938_1344c45d5e_n.jpg','//farm1.staticflickr.com/750/20841608433_abc63d2921_n.jpg','//farm1.staticflickr.com/683/21634284756_eca34b1242_n.jpg','//farm1.staticflickr.com/637/20843313833_862d81d915_n.jpg','//farm1.staticflickr.com/778/22340488491_1e961df127_n.jpg','//farm1.staticflickr.com/719/21463454776_4b1504ed76_n.jpg','//farm6.staticflickr.com/5787/21521996236_a3b893418c_n.jpg','//farm6.staticflickr.com/5699/21632821772_b8876509db_n.jpg','//farm6.staticflickr.com/5618/21396450649_854c80ca68_n.jpg','//farm1.staticflickr.com/758/21953028511_dfbbdb7635_n.jpg'];
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
    var cn = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjAwIDgwMCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPg0KPHBhdGggZmlsbD0iI2RlMjkxMCIgZD0ibTAsMGgxMjAwdjgwMGgtMTIwMHoiLz4NCjxwYXRoIGZpbGw9IiNmZmRlMDAiIGQ9Im0tMTYuNTc5Niw5OS42MDA3bDIuMzY4Ni04LjEwMzItNi45NTMtNC43ODgzIDguNDM4Ni0uMjUxNCAyLjQwNTMtOC4wOTI0IDIuODQ2Nyw3Ljk0NzkgOC40Mzk2LS4yMTMxLTYuNjc5Miw1LjE2MzQgMi44MTA2LDcuOTYwNy02Ljk3NDctNC43NTY3LTYuNzAyNSw1LjEzMzF6IiB0cmFuc2Zvcm09Im1hdHJpeCg5LjkzMzUyIC4yNzc0NyAtLjI3NzQ3IDkuOTMzNTIgMzI0LjI5MjUgLTY5NS4yNDE1KSIvPg0KPHBhdGggZmlsbD0iI2ZmZGUwMCIgaWQ9InN0YXIiIGQ9Im0zNjUuODU1MiwzMzIuNjg5NWwyOC4zMDY4LDExLjM3NTcgMTkuNjcyMi0yMy4zMTcxLTIuMDcxNiwzMC40MzY3IDI4LjI1NDksMTEuNTA0LTI5LjU4NzIsNy40MzUyLTIuMjA5NywzMC40MjY5LTE2LjIxNDItMjUuODQxNS0yOS42MjA2LDcuMzAwOSAxOS41NjYyLTIzLjQwNjEtMTYuMDk2OC0yNS45MTQ4eiIvPg0KPGcgZmlsbD0iI2ZmZGUwMCI+DQo8cGF0aCBkPSJtNTE5LjA3NzksMTc5LjMxMjlsLTMwLjA1MzQtNS4yNDE4LTE0LjM5NDUsMjYuODk3Ni00LjMwMTctMzAuMjAyMy0zMC4wMjkzLTUuMzc4MSAyNy4zOTQ4LTEzLjQyNDItNC4xNjQ3LTMwLjIyMTUgMjEuMjMyNiwyMS45MDU3IDI3LjQ1NTQtMTMuMjk5OC0xNC4yNzIzLDI2Ljk2MjcgMjEuMTMzMSwyMi4wMDE3eiIvPg0KPHBhdGggZD0ibTQ1NS4yNTkyLDMxNS45Nzk1bDkuMzczNC0yOS4wMzE0LTI0LjYzMjUtMTcuOTk3OCAzMC41MDctLjA1NjYgOS41MDUtMjguOTg4NiA5LjQ4MSwyOC45OTY0IDMwLjUwNywuMDgxOC0yNC42NDc0LDE3Ljk3NzQgOS4zNDkzLDI5LjAzOTItMjQuNzE0LTE3Ljg4NTgtMjQuNzI4OCwxNy44NjUzeiIvPg0KPC9nPg0KPHVzZSB4bGluazpocmVmPSIjc3RhciIgdHJhbnNmb3JtPSJtYXRyaXgoLjk5ODYzIC4wNTIzNCAtLjA1MjM0IC45OTg2MyAxOS40MDAwNSAtMzAwLjUzNjgxKSIvPg0KPC9zdmc+DQo=';var gb = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgNjAgMzAiIGhlaWdodD0iNjAwIj4NCjxkZWZzPg0KPGNsaXBQYXRoIGlkPSJ0Ij4NCjxwYXRoIGQ9Im0zMCwxNWgzMHYxNXp2MTVoLTMwemgtMzB2LTE1enYtMTVoMzB6Ii8+DQo8L2NsaXBQYXRoPg0KPC9kZWZzPg0KPHBhdGggZmlsbD0iIzAwMjQ3ZCIgZD0ibTAsMHYzMGg2MHYtMzB6Ii8+DQo8cGF0aCBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iNiIgZD0ibTAsMGw2MCwzMG0wLTMwbC02MCwzMCIvPg0KPHBhdGggc3Ryb2tlPSIjY2YxNDJiIiBzdHJva2Utd2lkdGg9IjQiIGQ9Im0wLDBsNjAsMzBtMC0zMGwtNjAsMzAiIGNsaXAtcGF0aD0idXJsKCN0KSIvPg0KPHBhdGggc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjEwIiBkPSJtMzAsMHYzMG0tMzAtMTVoNjAiLz4NCjxwYXRoIHN0cm9rZT0iI2NmMTQyYiIgc3Ryb2tlLXdpZHRoPSI2IiBkPSJtMzAsMHYzMG0tMzAtMTVoNjAiLz4NCjwvc3ZnPg0K';var ru = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NTAgMzAwIj4NCjxwYXRoIGZpbGw9IiNmZmYiIGQ9Im0wLDBoNDUwdjEwMGgtNDUweiIvPg0KPHBhdGggZmlsbD0iIzAwZiIgZD0ibTAsMTAwaDQ1MHYxMDBoLTQ1MHoiLz4NCjxwYXRoIGZpbGw9IiNmMDAiIGQ9Im0wLDIwMGg0NTB2MTAwaC00NTB6Ii8+DQo8L3N2Zz4NCg==';var in = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgNDUwIDMwMCIgaGVpZ2h0PSI4MDAiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4NCjxwYXRoIGZpbGw9IiNmZjk5MzIiIGQ9Im0wLDBoNDUwdjEwMGgtNDUweiIvPg0KPHBhdGggZmlsbD0iI2ZmZiIgZD0ibTAsMTAwaDQ1MHYxMDBoLTQ1MHoiLz4NCjxwYXRoIGZpbGw9IiMxMjg4MDciIGQ9Im0wLDIwMGg0NTB2MTAwaC00NTB6Ii8+DQo8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyMjUgMTUwKSI+DQo8Y2lyY2xlIGZpbGw9IiMwMDAwODAiIHI9IjQ2LjUiLz4NCjxjaXJjbGUgZmlsbD0iI2ZmZiIgcj0iNDEiLz4NCjxnIGlkPSI4Ij4NCjxnIGlkPSI0Ij4NCjxnIGlkPSIyIj4NCjxnIGlkPSIxIj4NCjxjaXJjbGUgZmlsbD0iIzAwMDA4MCIgcj0iMi41IiB0cmFuc2Zvcm09Im1hdHJpeCguOTkxNDQgLjEzMDUzIC0uMTMwNTMgLjk5MTQ0IDQwLjY0OTI0IDUuMzUxNTcpIi8+DQo8cGF0aCBmaWxsPSIjMDAwMDgwIiBkPSJtMCw0MWwxLjUtMjRxLTEtMy0xLjUtMTctLjUsMTQtMS41LDE3eiIvPg0KPC9nPg0KPHVzZSB4bGluazpocmVmPSIjMSIgdHJhbnNmb3JtPSJyb3RhdGUoMTUpIi8+DQo8L2c+DQo8dXNlIHhsaW5rOmhyZWY9IiMyIiB0cmFuc2Zvcm09InJvdGF0ZSgzMCkiLz4NCjwvZz4NCjx1c2UgeGxpbms6aHJlZj0iIzQiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPg0KPC9nPg0KPHVzZSB4bGluazpocmVmPSIjOCIgdHJhbnNmb3JtPSJyb3RhdGUoMTIwKSIvPg0KPHVzZSB4bGluazpocmVmPSIjOCIgdHJhbnNmb3JtPSJtYXRyaXgoLS41IC0uODY2MDMgLjg2NjAzIC0uNSAwIDApIi8+DQo8Y2lyY2xlIGZpbGw9IiMwMDAwODAiIHI9IjgiLz4NCjwvZz4NCjwvc3ZnPg0K';var tr = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBoZWlnaHQ9IjgwMCIgdmlld0JveD0iMCAwIDM2MCAyNDAiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4NCjxwYXRoIGZpbGw9IiNlMzBhMTciIGQ9Im0wLDBoMzYwdjI0MGgtMzYweiIvPg0KPGNpcmNsZSBmaWxsPSIjZmZmIiBjeD0iMTIwIiBjeT0iMTIwIiByPSI2MCIvPg0KPGNpcmNsZSBmaWxsPSIjZTMwYTE3IiBjeD0iMTM1IiBjeT0iMTIwIiByPSI0OCIvPg0KPGcgZmlsbD0iI2ZmZiIgdHJhbnNmb3JtPSJtYXRyaXgoMCAtMzAgMzAgMCAyMDAuNyAxMjApIj4NCjxnIGlkPSJnMiI+DQo8cGF0aCBpZD0iZzEiIGQ9Im0wLDAgMCwxIC41LDB6IiB0cmFuc2Zvcm09Im1hdHJpeCguOTUxMDYgLjMwOTAyIC0uMzA5MDIgLjk1MTA2IDAgLTEpIi8+DQo8dXNlIHhsaW5rOmhyZWY9IiNnMSIgdHJhbnNmb3JtPSJzY2FsZSgtMSAxKSIvPg0KPC9nPg0KPHVzZSB4bGluazpocmVmPSIjZzIiIHRyYW5zZm9ybT0icm90YXRlKDcyKSIvPg0KPHVzZSB4bGluazpocmVmPSIjZzIiIHRyYW5zZm9ybT0ibWF0cml4KC4zMDkwMiAtLjk1MTA2IC45NTEwNiAuMzA5MDIgMCAwKSIvPg0KPHVzZSB4bGluazpocmVmPSIjZzIiIHRyYW5zZm9ybT0icm90YXRlKDE0NCkiLz4NCjx1c2UgeGxpbms6aHJlZj0iI2cyIiB0cmFuc2Zvcm09Im1hdHJpeCgtLjgwOTAyIC0uNTg3NzkgLjU4Nzc5IC0uODA5MDIgMCAwKSIvPg0KPC9nPg0KPC9zdmc+DQo=';
    var cImg = ['<img class="ic" alt="Китай" src="'+cn+'" /><span class="instok">Китай</span>','<img class="ic" alt="Китай" src="'+cn+'" /><span class="instok">Китай</span>','<img class="ic" alt="Великобритания" src="'+gb+'" /><span class="instok">Великобритания</span>','<img class="ic" alt="Россия" src="'+ru+'" /><span class="instok">Россия</span>','<img class="ic" alt="Китай" src="'+cn+'" /><span class="instok">Китай</span>','<img class="ic" alt="Россия" src="'+ru+'" /><span class="instok">Россия</span>','<img class="ic" alt="Индия" src="'+in+'" /><span class="instok">Индия</span>','<img class="ic" alt="Турция" src="'+tr+'" /><span class="instok">Турция</span>',];

    for (var q = 0; q < cImg.length; q++) {
        var cQ = document.getElementById('c' + q);
        if (cQ != null)
            cQ.innerHTML = cImg[q];
    }
}

function preBrandImg() {
    var bImg = ['<img class="ib" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC8AAAARCAYAAABNV/VxAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAGBSURBVEhL7ZM9boNAEEZzWi7jM3AC99RuKemo3NFQ0bihIXqEh4b1ktgRkmXJnzSCnd9vZme/pjfGh/yrsCF/Pp+nsiyzMgzD4vU8iCVHVVWL5hhsyJ9OpzspimKWvu8Xr+dBLLkYzpH4dW2YFsRzRSH01208elu3222WHNDvDW6XPFcMcRqIqOt6cyP8X6/XxfqzeuiM55xO3vPlcpnz82+MgLQ266RDzJJv23YNiF2TEB1Ju66bmqaZ/WKD/BsLORojR/TzjA/DwId/dNajEe3ozBv53JGHFE4ITeTgFVsUERYhj9gj7xnQKLpIzjqsnzdJM2JD3smmThGujYJvjnzc90fIkxed5Il3BWOtXfIWjrsX4TphdyomFuSIZ/Af8ubxPWnPknd/CeAKcYrCGvDFBzuIb0McRZ4cyDiOs+CLHT+xkjd4T7DHtTK5Io4i7xswv+QdHFjJ0x2Be4Id0AC35GNmN7GL9CzQpe8gnq0f4W3rl8Zsdv7d8CH/GkzTNwf4bTrZxI9aAAAAAElFTkSuQmCC"/><span class="instok">Зарина</span>','<img class="ib" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHAAAAARCAYAAAAFSCi0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAMTSURBVFhH7ZYxkhpBDEV92r0MZ+AE5MSkhGREZCREJCQk43rLPPsjC3bWNsFU8atU0N3Sl1pSd8+P4Y1Z413AmeNdwJnjroDr9XpYLpd/yGazGTXucTweh9VqNSwWi09B93A4jKs3sF75kN1uN2rco+Pcbrfj6jxwuVyG6/U6jm45QF6BuwKSrI+Pj1/JU5hjLbHf7z/nXdMWYU1o33HWxmAsh5zqvioB/xs0GzGfTqdx5pYD5BVoC5jO6SSTeD6fx9nfhcliWdQMtgse/jrPydOW/0LdGpfo5io4EcgjfMXR2ZKLzq7L4TP8a/yTC5jJtlDdqWAtnVVbAD9z+BNc33B21zXJyuYBdjo2/Kad/Mx5ihF8JBgnRzaj/HBoD2gubapvbHLeqz/tAXvxmai6YGr8oC0gv4rGdXPopdNHwPYRZzYK8+jlnF2u+K7wzsrJf4tvPOgyxgdz6BiH/CSHMbas69/T7x6xQ9ciGT/5kBcBWVz05UodoC9848fxd+IXk9/APG1uTofPoH3lREwK0HcG6JyiP2JhnFctfOgDE+AYWDD5jUHAxboxuceMUXjDwAVH8nb7SF/6yXzClzpT4hdfXqGgdrib64403ZLIwES+qxbBouRJ50sVX67p3zjllks/XQKM2b2lTXJoo379Wva0Vjt5uxyqB+R1LyJ1psQvJhVQY7uGq42xDgXzGQioY6EvE0ThGGfQom5aW2yINQXwW7lqAowrbRHf2i5heVLUqzmrY6ANcJ+1+VMHW3SexS/aAnJcMVAgZj5Ph6cCG+YR9fLaMbDk8zpgPj949C8np5ONyostoOiMTYK+9TslAcZvA+nHG6Tqg8rL2Ng6XveGDiK0QQc7fDP+TvyiLWAVHNaOAQab4ikVBluF+WwI0XF2/tWTn19PxZQEoOt+5ZiSsLRBHPsU2FzJp67IZlcyb39dQDaFQpU8JRXYEDRiAhMdH/IM8LBJgn6myxo6XSOwlvHw7nZcJB4OCyAe6QP8ecLU8wsZwJX5YP2Z70d5mxL/XQHfmB/eBZw53gWcNYbhJ6t9+yehKJDfAAAAAElFTkSuQmCC"/><span class="instok">БСБ Дженерейшен</span>','<img class="ib" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD4AAAARCAYAAACFOx+nAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAHYSURBVFhH7ZU7csJAEER9Wi7DGTgBOTEpIRkRGQkRCbFcT9azW4NkFpwZumpK+5lfz8zCR/eieBN/NUwSPxwO3Wq16pbLZS+sj8fjcPs3rNfrXn5D1WmxeRQ3xAmwWCy+CSPskd1uN2g9D4v5G6pOi82jGBGHGAQhe71eh9OvCbAYU7hcLiP9iryfI9Gi8yjO53Pvdwoj4gSD4Ol0Gk5+gJNKjkJpw5dpyUCsnRjuN5tN/0VEi07uicE6c9xut/0ZDQKZl37rU70hjiQgnCJwpFMCEdy98NlABtskKFp0WLuHsPoi72kOa/ygu9/ve332ibvE2WOoSN4Es/IkwxnBQPVnUnn2jE7upwoBnE4aVO3BJPEcabqZoyPxKWfoocMXPda10mnXogPq3jiMtsXOJ2a+CvdpD0bEdcLYVtjhSjyL5LjT8anOgTxr0QF1r53vPQvnDzFczK3agxFxHWrIGOHId5jErTpBOcuRMqDFohB0xMJmEi06+k1kTj4tYF42b+4faUQcQMJkUjDEaSKDq+MvK8AXZ97hly8iWnTqHvi263k2TzslcUNckBCVRFjPgS6hk4QTJMK9P4L4qv7u6UzZAM7ybQv9mRM61X6W+H/Hm/hroes+ASV7CE2+K5u1AAAAAElFTkSuQmCC"/><span class="instok">Годдива</span>','<img class="ib" src="//farm1.staticflickr.com/612/21335475785_71fe84c2dc_o.jpg"/><span class="instok">Адилишик</span>','<img class="ib" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHAAAAARCAYAAAAFSCi0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAMTSURBVFhH7ZYxkhpBDEV92r0MZ+AE5MSkhGREZCREJCQk43rLPPsjC3bWNsFU8atU0N3Sl1pSd8+P4Y1Z413AmeNdwJnjroDr9XpYLpd/yGazGTXucTweh9VqNSwWi09B93A4jKs3sF75kN1uN2rco+Pcbrfj6jxwuVyG6/U6jm45QF6BuwKSrI+Pj1/JU5hjLbHf7z/nXdMWYU1o33HWxmAsh5zqvioB/xs0GzGfTqdx5pYD5BVoC5jO6SSTeD6fx9nfhcliWdQMtgse/jrPydOW/0LdGpfo5io4EcgjfMXR2ZKLzq7L4TP8a/yTC5jJtlDdqWAtnVVbAD9z+BNc33B21zXJyuYBdjo2/Kad/Mx5ihF8JBgnRzaj/HBoD2gubapvbHLeqz/tAXvxmai6YGr8oC0gv4rGdXPopdNHwPYRZzYK8+jlnF2u+K7wzsrJf4tvPOgyxgdz6BiH/CSHMbas69/T7x6xQ9ciGT/5kBcBWVz05UodoC9848fxd+IXk9/APG1uTofPoH3lREwK0HcG6JyiP2JhnFctfOgDE+AYWDD5jUHAxboxuceMUXjDwAVH8nb7SF/6yXzClzpT4hdfXqGgdrib64403ZLIwES+qxbBouRJ50sVX67p3zjllks/XQKM2b2lTXJoo379Wva0Vjt5uxyqB+R1LyJ1psQvJhVQY7uGq42xDgXzGQioY6EvE0ThGGfQom5aW2yINQXwW7lqAowrbRHf2i5heVLUqzmrY6ANcJ+1+VMHW3SexS/aAnJcMVAgZj5Ph6cCG+YR9fLaMbDk8zpgPj949C8np5ONyostoOiMTYK+9TslAcZvA+nHG6Tqg8rL2Ng6XveGDiK0QQc7fDP+TvyiLWAVHNaOAQab4ikVBluF+WwI0XF2/tWTn19PxZQEoOt+5ZiSsLRBHPsU2FzJp67IZlcyb39dQDaFQpU8JRXYEDRiAhMdH/IM8LBJgn6myxo6XSOwlvHw7nZcJB4OCyAe6QP8ecLU8wsZwJX5YP2Z70d5mxL/XQHfmB/eBZw53gWcNYbhJ6t9+yehKJDfAAAAAElFTkSuQmCC"/><span class="instok">БСБ Дженерейшен</span>','<img class="ib" src="//farm6.staticflickr.com/5774/21521886205_a0411dde66_o.jpg"/><span class="instok">ТрендиАнжел</span>','<img class="ib" src="//farm6.staticflickr.com/5826/20745410564_63470ff61d_o.jpg"/><span class="instok">Ичи</span>','<img class="ib" src="//farm1.staticflickr.com/681/21161771328_edc2ebf725_o.jpg"/><span class="instok">Дороти Перкинс</span>'];
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