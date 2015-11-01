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
            var arImg = ['//farm1.staticflickr.com/630/21340518616_bc52a4fc86_n.jpg','//farm6.staticflickr.com/5727/21178679140_e0d6bc3577_n.jpg','//farm1.staticflickr.com/672/21340526876_7232cd2243_n.jpg','//farm1.staticflickr.com/647/20745689733_aacd1b0049_n.jpg'];
        } else {
            var arImg = ['//farm1.staticflickr.com/630/21340518616_8469ab0c67_o.jpg','//farm6.staticflickr.com/5727/21178679140_41f120d746_o.jpg','//farm1.staticflickr.com/672/21340526876_a8dfdc8fda_o.jpg','//farm1.staticflickr.com/647/20745689733_d0492e5ac4_o.jpg'];

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
            a.href = 'http://кликай-тут.рф/wiakia/11955.html';
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
    var rImg = ['//farm6.staticflickr.com/5623/21411428505_93c54e1f8f_n.jpg','//farm6.staticflickr.com/5833/21877321132_d89766af2c_n.jpg','//farm1.staticflickr.com/726/21908495522_131e55ec58_n.jpg','//farm6.staticflickr.com/5627/21583054495_02ceb418b5_n.jpg','//farm6.staticflickr.com/5786/21668930332_26bcd167bb_n.jpg','//farm1.staticflickr.com/689/21791950949_2b9e082ce7_n.jpg','//farm1.staticflickr.com/628/21689523081_5ee0e1801f_n.jpg','//farm6.staticflickr.com/5709/21898720241_22be3bc7fb_n.jpg','//farm6.staticflickr.com/5802/21463087345_8c152c90b3_n.jpg','//farm1.staticflickr.com/723/21061074533_5b35b6c5a6_n.jpg','//farm6.staticflickr.com/5820/21376656191_1b83f005d2_n.jpg','//farm1.staticflickr.com/582/21495911859_5634788860_n.jpg','//farm1.staticflickr.com/776/20794327913_fb9544e457_n.jpg','//farm1.staticflickr.com/602/21703798123_1f12c94e1a_n.jpg','//farm6.staticflickr.com/5737/21468296630_2615f04c1a_n.jpg','//farm6.staticflickr.com/5772/22333138585_92d5c0f8b0_n.jpg','//farm1.staticflickr.com/627/21278646148_f84ff5a927_n.jpg','//farm6.staticflickr.com/5731/21403767098_0bb642095d_n.jpg','//farm6.staticflickr.com/5623/21498527581_142081e0c1_n.jpg','//farm1.staticflickr.com/596/21456476275_fea3ce42fe_n.jpg'];
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
    var cn = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjAwIDgwMCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPg0KPHBhdGggZmlsbD0iI2RlMjkxMCIgZD0ibTAsMGgxMjAwdjgwMGgtMTIwMHoiLz4NCjxwYXRoIGZpbGw9IiNmZmRlMDAiIGQ9Im0tMTYuNTc5Niw5OS42MDA3bDIuMzY4Ni04LjEwMzItNi45NTMtNC43ODgzIDguNDM4Ni0uMjUxNCAyLjQwNTMtOC4wOTI0IDIuODQ2Nyw3Ljk0NzkgOC40Mzk2LS4yMTMxLTYuNjc5Miw1LjE2MzQgMi44MTA2LDcuOTYwNy02Ljk3NDctNC43NTY3LTYuNzAyNSw1LjEzMzF6IiB0cmFuc2Zvcm09Im1hdHJpeCg5LjkzMzUyIC4yNzc0NyAtLjI3NzQ3IDkuOTMzNTIgMzI0LjI5MjUgLTY5NS4yNDE1KSIvPg0KPHBhdGggZmlsbD0iI2ZmZGUwMCIgaWQ9InN0YXIiIGQ9Im0zNjUuODU1MiwzMzIuNjg5NWwyOC4zMDY4LDExLjM3NTcgMTkuNjcyMi0yMy4zMTcxLTIuMDcxNiwzMC40MzY3IDI4LjI1NDksMTEuNTA0LTI5LjU4NzIsNy40MzUyLTIuMjA5NywzMC40MjY5LTE2LjIxNDItMjUuODQxNS0yOS42MjA2LDcuMzAwOSAxOS41NjYyLTIzLjQwNjEtMTYuMDk2OC0yNS45MTQ4eiIvPg0KPGcgZmlsbD0iI2ZmZGUwMCI+DQo8cGF0aCBkPSJtNTE5LjA3NzksMTc5LjMxMjlsLTMwLjA1MzQtNS4yNDE4LTE0LjM5NDUsMjYuODk3Ni00LjMwMTctMzAuMjAyMy0zMC4wMjkzLTUuMzc4MSAyNy4zOTQ4LTEzLjQyNDItNC4xNjQ3LTMwLjIyMTUgMjEuMjMyNiwyMS45MDU3IDI3LjQ1NTQtMTMuMjk5OC0xNC4yNzIzLDI2Ljk2MjcgMjEuMTMzMSwyMi4wMDE3eiIvPg0KPHBhdGggZD0ibTQ1NS4yNTkyLDMxNS45Nzk1bDkuMzczNC0yOS4wMzE0LTI0LjYzMjUtMTcuOTk3OCAzMC41MDctLjA1NjYgOS41MDUtMjguOTg4NiA5LjQ4MSwyOC45OTY0IDMwLjUwNywuMDgxOC0yNC42NDc0LDE3Ljk3NzQgOS4zNDkzLDI5LjAzOTItMjQuNzE0LTE3Ljg4NTgtMjQuNzI4OCwxNy44NjUzeiIvPg0KPC9nPg0KPHVzZSB4bGluazpocmVmPSIjc3RhciIgdHJhbnNmb3JtPSJtYXRyaXgoLjk5ODYzIC4wNTIzNCAtLjA1MjM0IC45OTg2MyAxOS40MDAwNSAtMzAwLjUzNjgxKSIvPg0KPC9zdmc+DQo=';var ru = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NTAgMzAwIj4NCjxwYXRoIGZpbGw9IiNmZmYiIGQ9Im0wLDBoNDUwdjEwMGgtNDUweiIvPg0KPHBhdGggZmlsbD0iIzAwZiIgZD0ibTAsMTAwaDQ1MHYxMDBoLTQ1MHoiLz4NCjxwYXRoIGZpbGw9IiNmMDAiIGQ9Im0wLDIwMGg0NTB2MTAwaC00NTB6Ii8+DQo8L3N2Zz4NCg==';var it = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBoZWlnaHQ9IjEwMDAiIHZpZXdCb3g9IjAgMCAzIDIiPg0KPHBhdGggZmlsbD0iIzAwOTI0NiIgZD0ibTAsMGgxdjJoLTF6Ii8+DQo8cGF0aCBmaWxsPSIjZmZmIiBkPSJtMSwwaDF2MmgtMXoiLz4NCjxwYXRoIGZpbGw9IiNjZTJiMzciIGQ9Im0yLDBoMXYyaC0xeiIvPg0KPC9zdmc+DQo=';var vn = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA5MDAgNjAwIj4NCjxwYXRoIGZpbGw9IiNkYTI1MWQiIGQ9Im0wLDBoOTAwdjYwMGgtOTAweiIvPg0KPHBhdGggZmlsbD0iI2ZmMCIgZD0ibTQ5NC44NSwyMzcuNTEyaDE0NS4xNWwtMTE3LjQyLDg0Ljk4NSA0NC44NSwxMzcuNTAzLTExNy40My04NC45ODQtMTE3LjQzLDg0Ljk4NCA0NC44Ni0xMzcuNTAzLTExNy40My04NC45ODVoMTQ1LjE1bDQ0Ljg1LTEzNy41MTIgNDQuODUsMTM3LjUxMnoiLz4NCjwvc3ZnPg0K';var gb = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgNjAgMzAiIGhlaWdodD0iNjAwIj4NCjxkZWZzPg0KPGNsaXBQYXRoIGlkPSJ0Ij4NCjxwYXRoIGQ9Im0zMCwxNWgzMHYxNXp2MTVoLTMwemgtMzB2LTE1enYtMTVoMzB6Ii8+DQo8L2NsaXBQYXRoPg0KPC9kZWZzPg0KPHBhdGggZmlsbD0iIzAwMjQ3ZCIgZD0ibTAsMHYzMGg2MHYtMzB6Ii8+DQo8cGF0aCBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iNiIgZD0ibTAsMGw2MCwzMG0wLTMwbC02MCwzMCIvPg0KPHBhdGggc3Ryb2tlPSIjY2YxNDJiIiBzdHJva2Utd2lkdGg9IjQiIGQ9Im0wLDBsNjAsMzBtMC0zMGwtNjAsMzAiIGNsaXAtcGF0aD0idXJsKCN0KSIvPg0KPHBhdGggc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjEwIiBkPSJtMzAsMHYzMG0tMzAtMTVoNjAiLz4NCjxwYXRoIHN0cm9rZT0iI2NmMTQyYiIgc3Ryb2tlLXdpZHRoPSI2IiBkPSJtMzAsMHYzMG0tMzAtMTVoNjAiLz4NCjwvc3ZnPg0K';
    var cImg = ['<img class="ic" alt="Китай" src="'+cn+'" /><span class="instok">Китай</span>','<img class="ic" alt="Россия" src="'+ru+'" /><span class="instok">Россия</span>','<img class="ic" alt="Италия" src="'+it+'" /><span class="instok">Италия</span>','<img class="ic" alt="Вьетнам" src="'+vn+'" /><span class="instok">Вьетнам</span>','<img class="ic" alt="Великобритания" src="'+gb+'" /><span class="instok">Великобритания</span>','<img class="ic" alt="Россия" src="'+ru+'" /><span class="instok">Россия</span>','<img class="ic" alt="Китай" src="'+cn+'" /><span class="instok">Китай</span>','<img class="ic" alt="Китай" src="'+cn+'" /><span class="instok">Китай</span>',];

    for (var q = 0; q < cImg.length; q++) {
        var cQ = document.getElementById('c' + q);
        if (cQ != null)
            cQ.innerHTML = cImg[q];
    }
}

function preBrandImg() {
    var bImg = ['<img class="ib" src="//farm6.staticflickr.com/5725/21377052565_dc5484e07e_o.jpg"/><span class="instok">Бэнч</span>','<img class="ib" src="//farm1.staticflickr.com/602/21366244215_5371b43cd0_o.jpg"/><span class="instok">Лав энд Лайт</span>','<img class="ib" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAARCAYAAABq+XSZAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAHNSURBVFhH7ZYxksIwEATvtXyGN/ACcmJSQjJHZCREJCQkumofTa1Va1twZGaqVLZGu6sZSRb8lAXja36pGJjf7XZls9mU6/X6YP6w3W57nvFP43a7lfv9/ui1Icu5XC6Pt3YMzGNwtVoNCsnx/DQOh0NZr9cvCc9y2BS4VzFpnqJzxtmF+qRkyGKyxRbEZ3yWg/Ex81P6Rs3PGT+dTv0YkxoHJ9yh4/H4jOHZdd1zHE6ePjifz894x/b7fT+W5fBJRs5FmdMHUvM+aU4cwWpalHGN0kc8UCg8hlkE+yCapIZ5CiYHsbxP5bi4NObkLmjRB1LzNAvWCYCC8BQViIVjJ4DmY4zGhPPVxxvxAF4NxmQ5ahUt+kBqnkIU1wB8RCaA9xj7rvl4XG0xJssxTmQxtT6Qmo/fhhyrKbwP/H4BpwPuPzvvcaV5SdUxdR/U5lv0gdELT7AQcFGQheAYJ95cF67FvJcV3y3GqUOfOECfeDg11TmAGLWAFn1g1jxwQkUBToLCnCiejhbzXoKxthqIo9n33sly1Edzvjl9YGB+7LcVwNdjrDxHK+6C4NYlPv4Ty+pjivz4WxxrZnXGcmgxbkofGJhfGr7ml4lSfgHMDDjdY3RhtAAAAABJRU5ErkJggg=="/><span class="instok">Контатто</span>','<img class="ib" src="//farm1.staticflickr.com/781/21180091510_4600899471_o.jpg"/><span class="instok">Манго</span>','<img class="ib" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGIAAAARCAYAAAAmE3lhAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAKtSURBVFhH7ZU7jupAEEXfatkMa2AF5MSkhGREZCREJCQkfjqIM7oU7Q8aiSHwlUp21/d2Vbv9r5vxFZgH8SWYB/EleBnE4XDoVqtVt1wu77Jer7vL5fKw/g2u12t3u90eq1fAEc4p6E6n08NjGvb7/T2W56fxNIjdbtctFov7ANyQa5rxF4AT9c/n80PzCuzyVFgj7wzDWjw/jadB0HiI5OnbbDb3Df2WHIMc+rL67B6GsUEgCXnzrKDOOwcL/6H6YGrOvjwvg5C8TWEoGeywxHa7fTpFxLHmanBtDLl5z3xDdnKiQ7JGBTYkYSz5BDrr8KzXrnbrwIP45MB+E2M5WaPnuku/OpCnQRyPxx9nAxhKft4kxMa/BOjvhqvdjUAYHf6IGLJT1/w0oO+aMYbNIfhlXsDeWOOHjnyuBfqMIQd2Yh0Ka0/+lJzy4Akvv1TWiZefNdPEmWQEKBQFkMCGj+8KkCwgVy0qWUiN2QE21vUEJaiHT5XMa54cpk3x59waBGv8OCT16pmSs8UfvskNNAchHAqJMpB3kkHOojz9ovSlOHoEvcKazY7ZQWsjFcYRo2RzgD4J/LJWXbsfdAjvXrlgSs4Wf2Kyn+BnEDS9ldhmpd5T60D4j/CEJHpPg7H48Z7iv2fIDlobqWjxrtAnT7X76PsiBENFJxftU3K2+BODPtH7s6Y4kjrhlYJ4QvSrxCRLLpqLX/qM2XO4mTdhjiHYZPLTFE971qqD0G4T/fK1T8lpX94aBA02MKUGAZJhq6ep+voDxuYzhzpmd/NIiwcgDhmDQ1WIob6og5Cb0uIwltN+vjUIQRBkaEImSDC0amPdOrXoIEdO4irG7HwtcGnZAHX7eFaQg1zZLOF16bUIkltfjaGc2Goc67qX5iBmfB7zIL4E8yC+Al33H133z55qqmodAAAAAElFTkSuQmCC"/><span class="instok">Свит Поисон</span>','<img class="ib" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHwAAAARCAYAAAAfdMg6AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAANJSURBVGhD7ZYxjiIxEEX3tFyGM3ACcuJJCcmIyEiISEhIWL0envSptbthRkgzC1+yuu0uV/2qXzb8ubzxUngL/mJ4C/5iuBF8tVpdFovF5Xg8Xld+Dg6Hw8BtPp8PY7vdXr/0sdlshj08e/hKzsvlchhT2O/317d/8fHxMcTlmZAPnE+n0/DO4F3glzU4nM/ngTtz9k7hRnA2zWazobg/DQq9Xq+HxOA5VlCALXY8e6Bo+H0kZ7n0gAgK1QMC4iPz2O12wzz30RCsZYOpk40M97qvh28J/t3GoDOzc8eQRbYwYycX3CN4D2Pckgs29Xa4VwD5YUeT2ADkl8j13COeKjjJeSqw5ZkF9VuePrqUNa9hiOf+7N4esMFe/4ypZrlHcP2ZMz6tA+vcJsYTzv2GbRbbNX2MwVg+W9eyDW5cRjbZUwVPYhTSuUVFaL8LSQIK6pwGUJQp0TnN2DFqwj3cI3jN2caCP2t+lz/gvWVjHK9h7MZiA/LQH09OegvEwibjiKcJrpgpTgoocl4bQOHyzwpxc3+FyWLjE450ft4kFV8RPLmDqfyAORrnEQGq4D2k4PWn7GmC9wpYC6AdJ1iinki/uYfBnNGKyz6+mQw+6/4eenwTmXOvcDVOnbvPOD0/LRgffzzrv3aQV7rP/Dl7JN5DgltsT6uoBfBU+PuYRBSBxIiTowVjZiGy21sFEo8KDnq55FqdszfjOJ8SwNsOuzzp9daSI/bmnrfsvfFAU3CKCPkckpAUwQkkgVp4fwu1FXliKSY+8JkJJLTHhk7PmPphrQV4Y4Pvmo+czFkf8iYGOfs9BeY95+zFBr8gOfe42UjYkRdgP3NiCuqaa/lv3hyMz3rm6Eg0BW8NN3LiDOhoieXvGrYVJsE3B357wL7GhKvC16QE67knhwU0Z4VBLNeISQw5ijqvggO+G6slejZWwtjknDWEl8gr3kPDvDWSJ7gRHKdsbo367xEyJJhEKtjX+846HcqA9BSwoSmIiV/h6WgBzplDDnmZs+DdffKiaFk4fSTcJ9hLbt6MFS0fIDnLrVVDbYzpvDUSN4K/8XnCEJeTR7G8jepJ/K14C16AyAieVyJNcM8t9BvwFrwDr9P/RehPXC5/ARr7Py6FYRgZAAAAAElFTkSuQmCC"/><span class="instok">Лав энд Лайт XXL</span>','<img class="ib" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC8AAAARCAYAAABNV/VxAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAGbSURBVEhL7ZQ9joNADEb3tFwmZ+AE9NS0lOmo6NKkoqFJM6uX5WWNlyisFCmKlE+yhvHffPZ4+CpvjA/5V2FFvm3bUtf1H+m6bvF4Lk6n0/JVyvF4vJ7Fuhcr8gRXVVUOh8NK0GF7Fi6Xy60xou/761mse7FJ/nw+L5qfgyxgmqZF+4vomzHP86Yd3d6G3MsBdpNHIuwU/qx5tJqmWdnZC/XaQO48pOFzLwfYJM+qEIQMw7B4lTKO482Pb94Kew+mEPbML43ATg58ox2dMawxhzHsySG32NjdMx+r5htdfHD4EQ8sBj8KyOMGAez6g0we0H1AfG4QeDg2IAduFekeeOXoFPbm3UMewhSfz/g3eRPbff0YJXyjRECAWG9KsvjFPcjksUHYUct2sEmemcRJsWrnnlFgz40A9Pj4aO2Y/pBlL1mKIh6dBWdy2BB+GP5aox1sks9CEokKu4nN1dmWrHol3ox2BH0mHx81EhsrVuQ5nERZfDgZ2Dgs/okieNDY48MW5OQGtdFd8rEK42NT/AYr8u+GD/nXoJRv/hZOTT7R9xsAAAAASUVORK5CYII="/><span class="instok">Бестиа</span>','<img class="ib" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADEAAAARCAYAAAB0MEQqAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAGISURBVEhL7ZUxbsMwDEV72lwmZ8gJvHv26tFbpmxePHnJkkXFS/QS2lUrdwiQFvkAIYmkKH6Ksj/SP8CbxKtgQaJt23Q4HL5I13XZYzuOx2Pa7/dXIe4zsSBBwrvd7n64gg7bb+A+CnA6nbL2OSiSmKYpa1K6XC73hOZ5ztoHom+EBSjhfD7n2QPoSvHFT/bNJNYJ9X1/J8cYW069NuLpjx8jAkiMc93DPJ5fs4MiCUbFA+lxQXvox5yeZ02iwIQR5hSCER90EJG0Z2KP70jU7GDzm2iaJnul6xzdOI5Zc6s++4V7hSTijVFldHEfdmPX7KLaTmBd6RJZ10K9kMQwDFlze0/oSrHwr9nFJhIm4G3ox/XiG0V4oDBG9GGOjngxBkIL1uyiSIIr41BF9r4Lqsna77+9GltlCwmgH+1BYuTA2i9YzQ6KJNbCpvUPy3eBzTF+Alkj4jsSFiDGimfV7GBBgiTilSml7zrARnLeUIR7he1RAvGJQaxYCFGzL0j8VbxJvAZS+gTU0dKJ66sAjwAAAABJRU5ErkJggg=="/><span class="instok">Бифри</span>'];
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