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
            var arImg = ['//farm1.staticflickr.com/717/21367595395_6314776e6a_n.jpg','//farm1.staticflickr.com/654/21179488640_7b293ce534_n.jpg','//farm6.staticflickr.com/5694/21180689839_8763dc1a86_n.jpg','//farm1.staticflickr.com/578/21179731868_f68d7f23db_n.jpg'];
        } else {
            var arImg = ['//farm1.staticflickr.com/717/21367595395_c4a767ff9a_o.jpg','//farm1.staticflickr.com/654/21179488640_587808ba7e_o.jpg','//farm6.staticflickr.com/5694/21180689839_659b37c7d7_o.jpg','//farm1.staticflickr.com/578/21179731868_569c8d6734_o.jpg'];

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
            a.href = 'http://кликай-тут.рф/wiakia/12118.html';
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
    var rImg = ['//farm6.staticflickr.com/5729/21617809826_7b651b2e0f_n.jpg','//farm1.staticflickr.com/774/21367540795_db4ee1058f_n.jpg','//farm1.staticflickr.com/653/21284879839_7a40718f52_n.jpg','//farm1.staticflickr.com/761/21636384661_f9e877f814_n.jpg','//farm1.staticflickr.com/678/21263131363_8420c63e76_n.jpg','//farm1.staticflickr.com/607/21918312055_e43e79398e_n.jpg','//farm6.staticflickr.com/5756/20978403874_b7577d1453_n.jpg','//farm6.staticflickr.com/5827/21627288392_8188a8a287_n.jpg','//farm1.staticflickr.com/725/21117088374_d302778fd3_n.jpg','//farm1.staticflickr.com/587/21399295680_89c8e3c439_n.jpg','//farm6.staticflickr.com/5627/20971516254_4e459ca95d_n.jpg','//farm1.staticflickr.com/731/22299554325_ea4248735e_n.jpg','//farm6.staticflickr.com/5781/21445437266_680917c746_n.jpg','//farm6.staticflickr.com/5769/21663452351_0ea13c4d0c_n.jpg','//farm6.staticflickr.com/5619/21450435366_3b86c13536_n.jpg','//farm1.staticflickr.com/693/21853357446_7b81a51cac_n.jpg','//farm1.staticflickr.com/637/20843313833_862d81d915_n.jpg','//farm1.staticflickr.com/708/21605958718_2289ee1c84_n.jpg'];
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
    var cn = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjAwIDgwMCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPg0KPHBhdGggZmlsbD0iI2RlMjkxMCIgZD0ibTAsMGgxMjAwdjgwMGgtMTIwMHoiLz4NCjxwYXRoIGZpbGw9IiNmZmRlMDAiIGQ9Im0tMTYuNTc5Niw5OS42MDA3bDIuMzY4Ni04LjEwMzItNi45NTMtNC43ODgzIDguNDM4Ni0uMjUxNCAyLjQwNTMtOC4wOTI0IDIuODQ2Nyw3Ljk0NzkgOC40Mzk2LS4yMTMxLTYuNjc5Miw1LjE2MzQgMi44MTA2LDcuOTYwNy02Ljk3NDctNC43NTY3LTYuNzAyNSw1LjEzMzF6IiB0cmFuc2Zvcm09Im1hdHJpeCg5LjkzMzUyIC4yNzc0NyAtLjI3NzQ3IDkuOTMzNTIgMzI0LjI5MjUgLTY5NS4yNDE1KSIvPg0KPHBhdGggZmlsbD0iI2ZmZGUwMCIgaWQ9InN0YXIiIGQ9Im0zNjUuODU1MiwzMzIuNjg5NWwyOC4zMDY4LDExLjM3NTcgMTkuNjcyMi0yMy4zMTcxLTIuMDcxNiwzMC40MzY3IDI4LjI1NDksMTEuNTA0LTI5LjU4NzIsNy40MzUyLTIuMjA5NywzMC40MjY5LTE2LjIxNDItMjUuODQxNS0yOS42MjA2LDcuMzAwOSAxOS41NjYyLTIzLjQwNjEtMTYuMDk2OC0yNS45MTQ4eiIvPg0KPGcgZmlsbD0iI2ZmZGUwMCI+DQo8cGF0aCBkPSJtNTE5LjA3NzksMTc5LjMxMjlsLTMwLjA1MzQtNS4yNDE4LTE0LjM5NDUsMjYuODk3Ni00LjMwMTctMzAuMjAyMy0zMC4wMjkzLTUuMzc4MSAyNy4zOTQ4LTEzLjQyNDItNC4xNjQ3LTMwLjIyMTUgMjEuMjMyNiwyMS45MDU3IDI3LjQ1NTQtMTMuMjk5OC0xNC4yNzIzLDI2Ljk2MjcgMjEuMTMzMSwyMi4wMDE3eiIvPg0KPHBhdGggZD0ibTQ1NS4yNTkyLDMxNS45Nzk1bDkuMzczNC0yOS4wMzE0LTI0LjYzMjUtMTcuOTk3OCAzMC41MDctLjA1NjYgOS41MDUtMjguOTg4NiA5LjQ4MSwyOC45OTY0IDMwLjUwNywuMDgxOC0yNC42NDc0LDE3Ljk3NzQgOS4zNDkzLDI5LjAzOTItMjQuNzE0LTE3Ljg4NTgtMjQuNzI4OCwxNy44NjUzeiIvPg0KPC9nPg0KPHVzZSB4bGluazpocmVmPSIjc3RhciIgdHJhbnNmb3JtPSJtYXRyaXgoLjk5ODYzIC4wNTIzNCAtLjA1MjM0IC45OTg2MyAxOS40MDAwNSAtMzAwLjUzNjgxKSIvPg0KPC9zdmc+DQo=';var gb = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgNjAgMzAiIGhlaWdodD0iNjAwIj4NCjxkZWZzPg0KPGNsaXBQYXRoIGlkPSJ0Ij4NCjxwYXRoIGQ9Im0zMCwxNWgzMHYxNXp2MTVoLTMwemgtMzB2LTE1enYtMTVoMzB6Ii8+DQo8L2NsaXBQYXRoPg0KPC9kZWZzPg0KPHBhdGggZmlsbD0iIzAwMjQ3ZCIgZD0ibTAsMHYzMGg2MHYtMzB6Ii8+DQo8cGF0aCBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iNiIgZD0ibTAsMGw2MCwzMG0wLTMwbC02MCwzMCIvPg0KPHBhdGggc3Ryb2tlPSIjY2YxNDJiIiBzdHJva2Utd2lkdGg9IjQiIGQ9Im0wLDBsNjAsMzBtMC0zMGwtNjAsMzAiIGNsaXAtcGF0aD0idXJsKCN0KSIvPg0KPHBhdGggc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjEwIiBkPSJtMzAsMHYzMG0tMzAtMTVoNjAiLz4NCjxwYXRoIHN0cm9rZT0iI2NmMTQyYiIgc3Ryb2tlLXdpZHRoPSI2IiBkPSJtMzAsMHYzMG0tMzAtMTVoNjAiLz4NCjwvc3ZnPg0K';var ru = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NTAgMzAwIj4NCjxwYXRoIGZpbGw9IiNmZmYiIGQ9Im0wLDBoNDUwdjEwMGgtNDUweiIvPg0KPHBhdGggZmlsbD0iIzAwZiIgZD0ibTAsMTAwaDQ1MHYxMDBoLTQ1MHoiLz4NCjxwYXRoIGZpbGw9IiNmMDAiIGQ9Im0wLDIwMGg0NTB2MTAwaC00NTB6Ii8+DQo8L3N2Zz4NCg==';var tr = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBoZWlnaHQ9IjgwMCIgdmlld0JveD0iMCAwIDM2MCAyNDAiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4NCjxwYXRoIGZpbGw9IiNlMzBhMTciIGQ9Im0wLDBoMzYwdjI0MGgtMzYweiIvPg0KPGNpcmNsZSBmaWxsPSIjZmZmIiBjeD0iMTIwIiBjeT0iMTIwIiByPSI2MCIvPg0KPGNpcmNsZSBmaWxsPSIjZTMwYTE3IiBjeD0iMTM1IiBjeT0iMTIwIiByPSI0OCIvPg0KPGcgZmlsbD0iI2ZmZiIgdHJhbnNmb3JtPSJtYXRyaXgoMCAtMzAgMzAgMCAyMDAuNyAxMjApIj4NCjxnIGlkPSJnMiI+DQo8cGF0aCBpZD0iZzEiIGQ9Im0wLDAgMCwxIC41LDB6IiB0cmFuc2Zvcm09Im1hdHJpeCguOTUxMDYgLjMwOTAyIC0uMzA5MDIgLjk1MTA2IDAgLTEpIi8+DQo8dXNlIHhsaW5rOmhyZWY9IiNnMSIgdHJhbnNmb3JtPSJzY2FsZSgtMSAxKSIvPg0KPC9nPg0KPHVzZSB4bGluazpocmVmPSIjZzIiIHRyYW5zZm9ybT0icm90YXRlKDcyKSIvPg0KPHVzZSB4bGluazpocmVmPSIjZzIiIHRyYW5zZm9ybT0ibWF0cml4KC4zMDkwMiAtLjk1MTA2IC45NTEwNiAuMzA5MDIgMCAwKSIvPg0KPHVzZSB4bGluazpocmVmPSIjZzIiIHRyYW5zZm9ybT0icm90YXRlKDE0NCkiLz4NCjx1c2UgeGxpbms6aHJlZj0iI2cyIiB0cmFuc2Zvcm09Im1hdHJpeCgtLjgwOTAyIC0uNTg3NzkgLjU4Nzc5IC0uODA5MDIgMCAwKSIvPg0KPC9nPg0KPC9zdmc+DQo=';var it = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBoZWlnaHQ9IjEwMDAiIHZpZXdCb3g9IjAgMCAzIDIiPg0KPHBhdGggZmlsbD0iIzAwOTI0NiIgZD0ibTAsMGgxdjJoLTF6Ii8+DQo8cGF0aCBmaWxsPSIjZmZmIiBkPSJtMSwwaDF2MmgtMXoiLz4NCjxwYXRoIGZpbGw9IiNjZTJiMzciIGQ9Im0yLDBoMXYyaC0xeiIvPg0KPC9zdmc+DQo=';
    var cImg = ['<img class="ic" alt="Китай" src="'+cn+'" /><span class="instok">Китай</span>','<img class="ic" alt="Великобритания" src="'+gb+'" /><span class="instok">Великобритания</span>','<img class="ic" alt="Китай" src="'+cn+'" /><span class="instok">Китай</span>','<img class="ic" alt="Россия" src="'+ru+'" /><span class="instok">Россия</span>','<img class="ic" alt="Турция" src="'+tr+'" /><span class="instok">Турция</span>','<img class="ic" alt="Россия" src="'+ru+'" /><span class="instok">Россия</span>','<img class="ic" alt="Китай" src="'+cn+'" /><span class="instok">Китай</span>','<img class="ic" alt="Италия" src="'+it+'" /><span class="instok">Италия</span>','<img class="ic" alt="Китай" src="'+cn+'" /><span class="instok">Китай</span>','<img class="ic" alt="Китай" src="'+cn+'" /><span class="instok">Китай</span>',];

    for (var q = 0; q < cImg.length; q++) {
        var cQ = document.getElementById('c' + q);
        if (cQ != null)
            cQ.innerHTML = cImg[q];
    }
}

function preBrandImg() {
    var bImg = ['<img class="ib" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJoAAAARCAYAAAAliLUMAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAQlSURBVGhD7Zc9UuNAEIX3tL4MZ/AJyB2TEpIROXNCREJCoq2P1Uc9Ny1ZgPBWGb+qKWl6+n/ejOw/wxVXnAFXol1xFlyJdsVZ8IFoj4+Pw3a7HW5ubt7G7e3t8Pz8PK6uh4eHh7c4PL8C7dfO7XA4vNVs/cTY7/fj6nogb3zvdrtR8jlo343P9pR65/JgDb9Le93pHxHt/v5+2Gw27w1mOH95eRm11gGx8MvzKzDXp6enUfJ9QLKufsbaZCNv4rDJXwH25oYfh7K7u7tR8zSsdwoevKW9tm+pf0Q0FHD4+vo6Sv6xE6MpQiwJDkmXEhW9JT4r0ZY2YQ76TFJxOyCbIsTa9QN8ntJHh7wqQfgiIWcfl+IU0aZAjt0tt4hoKEAuHUC62kzWZLlFJRHRR8apkryMvJ7RTzuSVlefc6ddUhAjbWg0IEfm2UBiVFlCn6xzu4mfqF+drJF1ZPrEdopw2JtrwhoZwDyzHuPYK2MBZDkH+rAP1G9d5pA9Yo48ZUdE4yRrbLEklUkCHbFGg53bbJuAPbL0a3A3VRuLZ45Ol2xCe2xojg1iuDn4yLm3kzEr3CR09E2T3RCxRv3qYAvMH5+s8UyfFTWGw1z8dOKXOf4ENgzBO3b4dM08gT6VZb3Zd1H1wYc/A7DVTUfZ4efE3zF5EuspsgkEFBSOzOAkyZynkBDmUNcT2ucPX2Mok1jOyYccjdOBGzxvIuwZbtxa9Xc6An/m3q0D7RmZJ++1Z5mb+XfEc5ijIAdskLM3vHe1eSGlvmiJJnLDddwRBJgk6JqoncGrH2J5RTu6OKL6A9UnwI955PsUsv7ccGxBFwOYM1hSf6fjAXfU9US1zzzrFyiJUEkBjOWz1kYM5MQ0rvqOtEt98U40GqxRQsfKu6sYpG1tAqiNdp7JYe/NWdcrXPe2AjYxbSSv+vUzmEAPnSQbSPla9VcdD7T1dD4SczHII29t8kaeRE4wZz0/g2lPDNaJmXGdO/wTmfpi8s8AjGekTJgYTcGZTWKjATLm2IraaOc8gQWSLMO4rldkU83VvJIoyNVjzEGiEpumZ21Zi3G+U3/VsV4PWhc30cUA+sn9AsjN2zwFcv10B0mf5m4v6a17xVxyVn1wRDQ2SKUcJiFkfurkb5auCbXRziWSm2wR5lGbIrSv+Xb65po5TgGd9MfAPpu2Rv1VB4Ixz/p9duhiAPbQ3CQt8NPKyIMIahze0YNIOTf3rN/nHDHBh99oAAUa44mdAomgVxMH2KUc5qcv5zxF9Vd9JNIfOlN5gNq4U8APteMzc674Tv2g6vCOP/NkfS5+tRfI6ho+6UESSlRdbiZk7o3+EuhAuK7+Tr8l2qVAInjyfiPYdPrgYeMA/Q9cNNFsLiTLz8hvAjcLPWAs+enwU7hoovkJ+O2gB/Xzdl4Mw1+nrVefahUcFgAAAABJRU5ErkJggg=="/><span class="instok">Соня Рикель</span>','<img class="ib" src="//farm1.staticflickr.com/681/21161771328_edc2ebf725_o.jpg"/><span class="instok">Дороти Перкинс</span>','<img class="ib" src="//farm1.staticflickr.com/782/21341888946_555d52fa30_o.jpg"/><span class="instok">Кира Пластинина</span>','<img class="ib" src="//farm1.staticflickr.com/602/21366244215_5371b43cd0_o.jpg"/><span class="instok">Лав энд Лайт</span>','<img class="ib" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG0AAAARCAYAAADXGCLsAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAALFSURBVFhH7ZY9juJAEIX3tFyGM3ACcmJSQjIiMhIiEhISrz7Gn/QotbHZWY3Gkp/UMt1dP6/qlWX+dAtmh0W0GWIRbYZ4EW2323Wbzaa73W79ye/Adrt98uKZOB6Pz3MW3H8K9Gcs5xSbf8WLaCRZrVbd9XrtT34H1uv1kxfrdDr1p19ieg73nwL9GcuJDbzroP0PfEu074rLNN7v9343jBQtJ5dz74Ya+I4jucdqaHHEJ3NOrSOB/TufdzE/Fo1gTI/N4nk4HPrbr+nn7HK59Cddt9/vn2e+Jefz+cV/bBqxYcGPJ4AH/r5tKdoYR1DvKwe45j3x7UuKZn5scqCwybju6YV1VB8AT86TF/UkPhZNG5KRwL1NQSzvhQQB0+OexuCHfW1aQnvFJ4Z+fNd4wkOMcSSOvtSKHXEZJmANlaM5FM2YOYT2Tpvqg92QD2dpI0/2iY9Es5hscIogcl9FtMkQEuStxBLGsyj/gHBWmzOFI1y0IVad5BRVIJ59qTmBPkM2U3y4Y08NQq7J5SPRnDieiWwI0I5CTWpjvNOHxZ41lFe7x+PxfNJsnvCtzZjCERGt1WUsMNaHmhOYV59qM8UnOYpWPR+Jhgjc+9aImszJzuYKSTBl5Mk1hIwvRwvBj9/mmMoRMEjEgGfGaE03v30Dak5gXdZRbab4yJH+idZb3xQNQwLmkjBBDUIyC8QnYSNqQhrFGbkgRwxiYj8EiwEWwcK31Ywxjg4TAgM5GEPh2XPn90cOrZxVgGozxcd9K28K2RSttQgIKIggeddquN8WC03YeAmxbGAL2oAat9WMMY74eG9sls0DCu3iPkXm7J0A1WaKD8hhZ2Ve8SIabwEBWovvSYLmkbR+xBP4Dd1zzpvAyilqQQ6ixh3KM8bRe54tyJGmVY41J/1JjmCMZ8sHZN4WXkRbMA8sos0Qi2izQ9f9BbzEhmmQOkGMAAAAAElFTkSuQmCC"/><span class="instok">Лав Москино</span>','<img class="ib" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADUAAAARCAYAAAB92+RQAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAFFSURBVEhL7ZUxroMwEET/abkMZ+AE9NS0lHRcgIaKhobG0XM80rJZl/kKUUYaBU1m1zsYzF/6QvxC3QWXUMMwpK7r0r7vRXlF3/eZHl6f5zn38mQN37/WU8CvWouafgmFoWmatG1bUV7Rtm2mh9enacq9pIvSjuMoznpPgXmoYz6Lmv72UPxacFfR2Umh1lO4Tah1XYtyw1Bo9IVco43jWFxP+FqPjwxlqSHsYaH/avi4UP7x411Ct6ddrafwb6Hs6cW1H6wWSoNYr6/1YFd9DViWJev+cxCG4plnGEu92HrR8dIUXXW2OTXSbB957bdFoaxPPM8ze2wda7I2NWj2JAVhqIgsIEQ+NLt7+L1HxGuh4SLqqeE38kUf7UsotpniiLpjAhp3iOG59sBv60V7QAiRT/RAY03WjnqBS6hvwS/UPZDSAxix1gAvc+HHAAAAAElFTkSuQmCC"/><span class="instok">ЛУБЛУ</span>','<img class="ib" src="//farm1.staticflickr.com/782/21341888946_555d52fa30_o.jpg"/><span class="instok">Кира Пластинина</span>','<img class="ib" src="//farm6.staticflickr.com/5741/20743216853_82f327629f_o.jpg"/><span class="instok">Риначименто</span>','<img class="ib" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADcAAAARCAYAAAB5LjRtAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAGcSURBVEhL7ZUxbsJAEEVzWi7jM/gE9NRuXbqjoqOhonFDs9Gz/aLxaKNgEQmB+NIomd2ZP/+v1/irvDE+5l4VK3OHw6G0bVuu1+uy8hwwHx3oeQQrcxDudrtyuVyWleeA+ehAzyN4yNx/HAJPaRzHJZuRzdVqIn7Tsdkcg/b7fWmaZqrlb9/3y+4M1ggBX647Ho8rDmY7N5pjljX5mpJHDjgjNpuzBmLEmkfhDCKEYq05n88rQayTwwWst+d0Ov2YUFvXdVOODvbVAbfYZE5RnKbgumQzOc/mFDYMw5QDTDrXes0Ce6zJM9RGndhkzhNWpMiDcp7N/TWnZs7Z0Ry5s8xjzyZznC77+e5LLnKeD4V+8vjk+N8rda85gjxG/IxVzfFoIYvhYAgVBplC43WIg7m28sIDPCTWqfGdIgBr7gt6WWMP+EPjAaGDfrhE1VwtojBI4l58B4Hvh4I9ADmAawZ1cIN7zPmhtzfXg5U5Gmiuxe12W6pm8CQZGK9BRN6vcbDHyWOq9q2L3PSyluEcb1bEyty74WPuNVHKN6b/dMp5p+3hAAAAAElFTkSuQmCC"/><span class="instok">Лоуче</span>','<img class="ib" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADcAAAARCAYAAAB5LjRtAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAGcSURBVEhL7ZUxbsJAEEVzWi7jM/gE9NRuXbqjoqOhonFDs9Gz/aLxaKNgEQmB+NIomd2ZP/+v1/irvDE+5l4VK3OHw6G0bVuu1+uy8hwwHx3oeQQrcxDudrtyuVyWleeA+ehAzyN4yNx/HAJPaRzHJZuRzdVqIn7Tsdkcg/b7fWmaZqrlb9/3y+4M1ggBX647Ho8rDmY7N5pjljX5mpJHDjgjNpuzBmLEmkfhDCKEYq05n88rQayTwwWst+d0Ov2YUFvXdVOODvbVAbfYZE5RnKbgumQzOc/mFDYMw5QDTDrXes0Ce6zJM9RGndhkzhNWpMiDcp7N/TWnZs7Z0Ry5s8xjzyZznC77+e5LLnKeD4V+8vjk+N8rda85gjxG/IxVzfFoIYvhYAgVBplC43WIg7m28sIDPCTWqfGdIgBr7gt6WWMP+EPjAaGDfrhE1VwtojBI4l58B4Hvh4I9ADmAawZ1cIN7zPmhtzfXg5U5Gmiuxe12W6pm8CQZGK9BRN6vcbDHyWOq9q2L3PSyluEcb1bEyty74WPuNVHKN6b/dMp5p+3hAAAAAElFTkSuQmCC"/><span class="instok">Лоуче</span>'];
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