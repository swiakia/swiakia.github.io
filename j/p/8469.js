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
            var arImg = ['//farm1.staticflickr.com/623/21178198019_779c8cbf65_n.jpg','//farm1.staticflickr.com/711/21365116515_fd505744cc_n.jpg','//farm6.staticflickr.com/5713/21373403021_77bb989101_n.jpg','//farm6.staticflickr.com/5760/21178188869_3e353490c1_n.jpg','//farm6.staticflickr.com/5811/20742391994_22b84cfc48_n.jpg','//farm1.staticflickr.com/718/21354307062_6b198360d5_n.jpg','//farm6.staticflickr.com/5807/20743985163_e3527b5f89_n.jpg'];
        } else {
            var arImg = ['//farm1.staticflickr.com/623/21178198019_e0e1f9198d_o.jpg','//farm1.staticflickr.com/711/21365116515_ee1c33054b_o.jpg','//farm6.staticflickr.com/5713/21373403021_77e5442644_o.jpg','//farm6.staticflickr.com/5760/21178188869_21ff93f7a4_o.jpg','//farm6.staticflickr.com/5811/20742391994_3995cd37be_o.jpg','//farm1.staticflickr.com/718/21354307062_ae5514be81_o.jpg','//farm6.staticflickr.com/5807/20743985163_d624099c11_o.jpg'];

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
            a.href = 'http://кликай-тут.рф/wiakia/8469.html';
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
    var rImg = ['//farm6.staticflickr.com/5658/21515059073_275778d4fb_n.jpg','//farm6.staticflickr.com/5669/22113218925_a8d37879f5_n.jpg','//farm1.staticflickr.com/762/21486319423_2106c7a3c1_n.jpg','//farm1.staticflickr.com/699/21359480692_4fc12bc145_n.jpg','//farm6.staticflickr.com/5781/21386609066_6e8fc7d27b_n.jpg','//farm1.staticflickr.com/750/20790813623_73109db3b0_n.jpg','//farm6.staticflickr.com/5761/21747606131_af684455c2_n.jpg','//farm6.staticflickr.com/5706/21357788122_6ed170f8de_n.jpg','//farm1.staticflickr.com/614/21373869656_2043747201_n.jpg','//farm1.staticflickr.com/680/21377855450_70d4e838e5_n.jpg','//farm1.staticflickr.com/630/21799425591_308c768488_n.jpg','//farm6.staticflickr.com/5677/22146334321_51ea124873_n.jpg','//farm6.staticflickr.com/5631/21551438359_70eaa149d5_n.jpg','//farm1.staticflickr.com/605/21177509898_6b602e1de0_n.jpg','//farm1.staticflickr.com/749/21412162298_6c23392417_n.jpg','//farm1.staticflickr.com/741/21592431355_e1cef1459c_n.jpg','//farm1.staticflickr.com/755/21808199448_fb67e0b4f2_n.jpg','//farm1.staticflickr.com/575/22295459571_c92f35eac4_n.jpg','//farm1.staticflickr.com/755/21602522771_a63e6ee7b0_n.jpg','//farm1.staticflickr.com/684/21991742665_54ab95e1e4_n.jpg'];
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
    var ru = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NTAgMzAwIj4NCjxwYXRoIGZpbGw9IiNmZmYiIGQ9Im0wLDBoNDUwdjEwMGgtNDUweiIvPg0KPHBhdGggZmlsbD0iIzAwZiIgZD0ibTAsMTAwaDQ1MHYxMDBoLTQ1MHoiLz4NCjxwYXRoIGZpbGw9IiNmMDAiIGQ9Im0wLDIwMGg0NTB2MTAwaC00NTB6Ii8+DQo8L3N2Zz4NCg==';var it = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBoZWlnaHQ9IjEwMDAiIHZpZXdCb3g9IjAgMCAzIDIiPg0KPHBhdGggZmlsbD0iIzAwOTI0NiIgZD0ibTAsMGgxdjJoLTF6Ii8+DQo8cGF0aCBmaWxsPSIjZmZmIiBkPSJtMSwwaDF2MmgtMXoiLz4NCjxwYXRoIGZpbGw9IiNjZTJiMzciIGQ9Im0yLDBoMXYyaC0xeiIvPg0KPC9zdmc+DQo=';var cn = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjAwIDgwMCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPg0KPHBhdGggZmlsbD0iI2RlMjkxMCIgZD0ibTAsMGgxMjAwdjgwMGgtMTIwMHoiLz4NCjxwYXRoIGZpbGw9IiNmZmRlMDAiIGQ9Im0tMTYuNTc5Niw5OS42MDA3bDIuMzY4Ni04LjEwMzItNi45NTMtNC43ODgzIDguNDM4Ni0uMjUxNCAyLjQwNTMtOC4wOTI0IDIuODQ2Nyw3Ljk0NzkgOC40Mzk2LS4yMTMxLTYuNjc5Miw1LjE2MzQgMi44MTA2LDcuOTYwNy02Ljk3NDctNC43NTY3LTYuNzAyNSw1LjEzMzF6IiB0cmFuc2Zvcm09Im1hdHJpeCg5LjkzMzUyIC4yNzc0NyAtLjI3NzQ3IDkuOTMzNTIgMzI0LjI5MjUgLTY5NS4yNDE1KSIvPg0KPHBhdGggZmlsbD0iI2ZmZGUwMCIgaWQ9InN0YXIiIGQ9Im0zNjUuODU1MiwzMzIuNjg5NWwyOC4zMDY4LDExLjM3NTcgMTkuNjcyMi0yMy4zMTcxLTIuMDcxNiwzMC40MzY3IDI4LjI1NDksMTEuNTA0LTI5LjU4NzIsNy40MzUyLTIuMjA5NywzMC40MjY5LTE2LjIxNDItMjUuODQxNS0yOS42MjA2LDcuMzAwOSAxOS41NjYyLTIzLjQwNjEtMTYuMDk2OC0yNS45MTQ4eiIvPg0KPGcgZmlsbD0iI2ZmZGUwMCI+DQo8cGF0aCBkPSJtNTE5LjA3NzksMTc5LjMxMjlsLTMwLjA1MzQtNS4yNDE4LTE0LjM5NDUsMjYuODk3Ni00LjMwMTctMzAuMjAyMy0zMC4wMjkzLTUuMzc4MSAyNy4zOTQ4LTEzLjQyNDItNC4xNjQ3LTMwLjIyMTUgMjEuMjMyNiwyMS45MDU3IDI3LjQ1NTQtMTMuMjk5OC0xNC4yNzIzLDI2Ljk2MjcgMjEuMTMzMSwyMi4wMDE3eiIvPg0KPHBhdGggZD0ibTQ1NS4yNTkyLDMxNS45Nzk1bDkuMzczNC0yOS4wMzE0LTI0LjYzMjUtMTcuOTk3OCAzMC41MDctLjA1NjYgOS41MDUtMjguOTg4NiA5LjQ4MSwyOC45OTY0IDMwLjUwNywuMDgxOC0yNC42NDc0LDE3Ljk3NzQgOS4zNDkzLDI5LjAzOTItMjQuNzE0LTE3Ljg4NTgtMjQuNzI4OCwxNy44NjUzeiIvPg0KPC9nPg0KPHVzZSB4bGluazpocmVmPSIjc3RhciIgdHJhbnNmb3JtPSJtYXRyaXgoLjk5ODYzIC4wNTIzNCAtLjA1MjM0IC45OTg2MyAxOS40MDAwNSAtMzAwLjUzNjgxKSIvPg0KPC9zdmc+DQo=';
    var cImg = ['<img class="ic" alt="Россия" src="'+ru+'" /><span class="instok">Россия</span>','<img class="ic" alt="Италия" src="'+it+'" /><span class="instok">Италия</span>','<img class="ic" alt="Китай" src="'+cn+'" /><span class="instok">Китай</span>','<img class="ic" alt="Италия" src="'+it+'" /><span class="instok">Италия</span>','<img class="ic" alt="Италия" src="'+it+'" /><span class="instok">Италия</span>','<img class="ic" alt="Италия" src="'+it+'" /><span class="instok">Италия</span>','<img class="ic" alt="Италия" src="'+it+'" /><span class="instok">Италия</span>','<img class="ic" alt="Италия" src="'+it+'" /><span class="instok">Италия</span>',];

    for (var q = 0; q < cImg.length; q++) {
        var cQ = document.getElementById('c' + q);
        if (cQ != null)
            cQ.innerHTML = cImg[q];
    }
}

function preBrandImg() {
    var bImg = ['<img class="ib" src="//farm6.staticflickr.com/5791/21376976861_30340946f8_o.jpg"/><span class="instok">Романофф</span>','<img class="ib" src="//farm6.staticflickr.com/5710/21559669781_759158e32b_o.jpg"/><span class="instok">Фенди</span>','<img class="ib" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFkAAAARCAYAAAC2AACuAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAKnSURBVFhH7ZY7suJADEVntWyGNbACcmJSQjIiMhIiEhISTx2Gw9zRNP3wo54j36ouLLVanyu5za9hxo9jJnkCzCRPgC7J6/X6vqbC5XIZVqvVRzGv1+uw2WyG5XJ5X/jb7XaP3b/A7na7PaSfRZdkE50K5/N5WCwWH8XkLD4gl6W83W4fFsOddPTEmwLfIpmJeyfBng2ThJ+KVswx8Sqh6KpPyMfulc93YpH/uxhF8ul0usskyOI5C+I1R7ff7592/GbSXgnu85z7vOosgF5CWvEqsNfucDg8tH/0ksIUpz+vEvIy/7oH8IEuryJ15CiIU3WjSJYcCjgej819EuSXhpCQstCGAvBTfSSMRywJR+5Nkf4lCpmmixwUGoYMPEfO5KYs0TZQGweh5kSsPAdGXxc6s4s45BmYmDLABj1gWthXBhSKzmIT+qMgGtIjN0GhFs/5GlO/5kls5PzgOpHWL8npB0iqjTRu5jqKZCZKJ65MtiYPsDExE2VVH9l54duSZ77651EbkT7q1JonsVs5mB8w91Z8bKwxn8WTZDqBgYGcOoNkZ9kDNdkqgwxqosg85+r9nYIc8tJ/qyEgvwkJz+W0ZZ68JcheAcJ6AbavYhuXPWzyewCeJPvKYMwzAZHtnEGSMGzRmWxNHmDjGYBsDIhlD7l1FWirP1/NVyQztexzBlvOWXjGoCZ02KhjXx3nrN8PLTrkVuzkjlXxz3UhSS4OOLXAfZ0pEyT3eyT7sdMPv3WCRH4YtU1fLUCKti7knC6blf4yL1deDT2SgWfzjPjvTrb7EldBMk4Ak4i9rzoNSYIBcjYKcBY/xKl7FWlbfb9CnqEOpzWBnjpqfPSv8spaK+rAJbofvhlfw6ZAMNPcwkzyh3CCIZhvQgszyR+Cq6h/jQ3Db95tvEQB8qf1AAAAAElFTkSuQmCC"/><span class="instok">Jane's Story</span>','<img class="ib" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEoAAAARCAYAAAB6mTpFAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAI5SURBVFhH7ZaxrsIwDEXf1/Zn+Aa+gJ2ZlZGNiY2FiYWFpU+n6kFuFIcgxNYrWW0Sx76+cQp/44ourEJ1YhWqEwuh9vv9uN1uJ7ter/PsON7v99f8brebZ38Hcmw2m8kOh8M8+x5wjnvhe7lc5tXvsBCKwMMwTIZo4nQ6veYh8EtQKHkQCOP9eDzOqznO5/OLo4fqmLVvkQoVBZF8OS/ouNvtNo++AxzI8Xg8xufzOb33dDF+pSiKV+MMPuFcFcr2hSzg3QJiUlqdcRTRq4J4+hvHGK3rQPcQC1/5vLs+ClITlDXzC26LvHnG25OhKpRkSYLqvCOAhQsLx49iynXjUIDXSCEzkI8Y+PLs+caYp+eKygPu+COSHFuoCmWnsFkSzkUhgKcVC4wtTQzmMOK3gODmMBbfR7qTNa5iDZ8IZewYy1zkyVAVikLtFp/AJILTdl1zv/AKMk+xLRiD/QqPySsrRKFqVyh2JDHxI16E8SPvEqlQtmgMLHFAJzm2gFrC2FH4Zl1BvJgLIKx743wJ8hs/wkNyPnKOkHd2ECAViqsmSVs6JilPhzFr7gf+rYjfqNaH0/3sI4adgrHW6kgPBD74YcaL30X94EEOOcaDwAeLSIUCZeGMMaG/844ROZ6m3zHXs4L9QcBHY6zIJfkSihCt3AMveWiMYzfJO2IhFM6KAnhvjQFFcyqIwbVinafvkQA+5VwNCE038RRl3gzEhg/WykO8Modgrcy3EGpFjlWoTqxCdWEc/wFEeg62mQuJKQAAAABJRU5ErkJggg=="/><span class="instok">Макс энд Ко.</span>','<img class="ib" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHkAAAARCAYAAAD5XQN+AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAOjSURBVGhD7dexTmRJDIXhfVpehmfgCciJSQnJiMhIiEhISHr1tfiRKW43rHZGomc4klW3yi6XfeyqVv+z+8Efj58i/wX4KfJfgLci39zc7C4uLvbjiuvr673u/v7+deX74Pn5eXd1dbU7Pz9/E/G+vLy8Wmzj8vJyn9OW3N7evlr9GXgr8sPDw+7s7GxP0orIQ+h3wuPj4z4ujfn09LRfM1Z0+kOgL99Vthr9lPHuuZagxCMMKr4O38IxIuEz/VeguWZMQbziU5Tk7u5urzMeihkq6K/Cr8gzyPXYhXLWFh8TU/+uyG6AgnruQmuRBxx47moK49r95umR3e3KLv3cl8/gHHunn8j0pPIJ9GLOZ88tfzPuCXbzrBXOpp+Ngvh1beZpnNyttuUyczAvXj+H05f4J+ZZ2cyfUHNnEPq4fVdkibU5+J5zyAmSOVqdzqcfyZIwnzbGOYdICNMvPzMWOueANcQpgvVIs2+SPmEP3+ynTGLN2XWryqOYEZwP312I9DWt/TXIZ3oiVzZsiye9s+RdLOYh//aIxR54V2TIUMEr1kx8a20GCIhlE9mwElASzSFSoYabSeRXDNa7Efa0dxYV8TPOCbb5nzLtI7I8OiPy2BZPKBZQLHpj31M/vztrxt95E53drZ/6dR4+FDkijRVmJrFVHJgHCI5NRYB135afmZS99CTfpD0Ijnzr7Es8yGH6n8jfZ2CzVRQoz3yR5sG3WHHpW0zGXoGKGh90iTmJRzar3hhaX/GhyPNWbm2qIwU9MW1rlP96k6ePioxI31P8Peo2+7bHOiDU+a3X+SvmWcfAH7vilX+oyNbWGAObzuJrvoRGLxbkX+xbvibv5bTm4Nt5Kz4UGQo+pys4o1NEQVTAurJE2OnYEiAVtbX891ytQRP+FC3CStJesv4nRhzb4tlCvsWxymzOmQuZKOZyUAg289xsSH7ZrLnOnyf54ZVeM4C46PNd0acP318u8gxMkitKJhtSMEEw2RhrBMFCL0Z6wVXEMM9pjNDQOdb5Npp3ziHkb0tWorJdc4RuZDbGbifMPFvn33xtQvN8JDiAla8pwfeXiwzzqTgEDYDMmRS4WdbqSKgTCxroNVRr9qxnsqHfOifkh830fwzltyXrORVlq+HBnmNn5zdMXlY4Wy6E3cRnfPne4uhgkf8PBFHHea6RU9etgX9n1MTlcqr4LUWGnk0ERRLCTgndYLFr1lPFbytyWJ+qU8KxZ/V0sNv9C+dkW7XKI4Q4AAAAAElFTkSuQmCC"/><span class="instok">Вог Айвеа</span>','<img class="ib" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHkAAAARCAYAAAD5XQN+AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAOjSURBVGhD7dexTmRJDIXhfVpehmfgCciJSQnJiMhIiEhISHr1tfiRKW43rHZGomc4klW3yi6XfeyqVv+z+8Efj58i/wX4KfJfgLci39zc7C4uLvbjiuvr673u/v7+deX74Pn5eXd1dbU7Pz9/E/G+vLy8Wmzj8vJyn9OW3N7evlr9GXgr8sPDw+7s7GxP0orIQ+h3wuPj4z4ujfn09LRfM1Z0+kOgL99Vthr9lPHuuZagxCMMKr4O38IxIuEz/VeguWZMQbziU5Tk7u5urzMeihkq6K/Cr8gzyPXYhXLWFh8TU/+uyG6AgnruQmuRBxx47moK49r95umR3e3KLv3cl8/gHHunn8j0pPIJ9GLOZ88tfzPuCXbzrBXOpp+Ngvh1beZpnNyttuUyczAvXj+H05f4J+ZZ2cyfUHNnEPq4fVdkibU5+J5zyAmSOVqdzqcfyZIwnzbGOYdICNMvPzMWOueANcQpgvVIs2+SPmEP3+ynTGLN2XWryqOYEZwP312I9DWt/TXIZ3oiVzZsiye9s+RdLOYh//aIxR54V2TIUMEr1kx8a20GCIhlE9mwElASzSFSoYabSeRXDNa7Efa0dxYV8TPOCbb5nzLtI7I8OiPy2BZPKBZQLHpj31M/vztrxt95E53drZ/6dR4+FDkijRVmJrFVHJgHCI5NRYB135afmZS99CTfpD0Ijnzr7Es8yGH6n8jfZ2CzVRQoz3yR5sG3WHHpW0zGXoGKGh90iTmJRzar3hhaX/GhyPNWbm2qIwU9MW1rlP96k6ePioxI31P8Peo2+7bHOiDU+a3X+SvmWcfAH7vilX+oyNbWGAObzuJrvoRGLxbkX+xbvibv5bTm4Nt5Kz4UGQo+pys4o1NEQVTAurJE2OnYEiAVtbX891ytQRP+FC3CStJesv4nRhzb4tlCvsWxymzOmQuZKOZyUAg289xsSH7ZrLnOnyf54ZVeM4C46PNd0acP318u8gxMkitKJhtSMEEw2RhrBMFCL0Z6wVXEMM9pjNDQOdb5Npp3ziHkb0tWorJdc4RuZDbGbifMPFvn33xtQvN8JDiAla8pwfeXiwzzqTgEDYDMmRS4WdbqSKgTCxroNVRr9qxnsqHfOifkh830fwzltyXrORVlq+HBnmNn5zdMXlY4Wy6E3cRnfPne4uhgkf8PBFHHea6RU9etgX9n1MTlcqr4LUWGnk0ERRLCTgndYLFr1lPFbytyWJ+qU8KxZ/V0sNv9C+dkW7XKI4Q4AAAAAElFTkSuQmCC"/><span class="instok">Вог Айвеа</span>','<img class="ib" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHkAAAARCAYAAAD5XQN+AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAOjSURBVGhD7dexTmRJDIXhfVpehmfgCciJSQnJiMhIiEhISHr1tfiRKW43rHZGomc4klW3yi6XfeyqVv+z+8Efj58i/wX4KfJfgLci39zc7C4uLvbjiuvr673u/v7+deX74Pn5eXd1dbU7Pz9/E/G+vLy8Wmzj8vJyn9OW3N7evlr9GXgr8sPDw+7s7GxP0orIQ+h3wuPj4z4ujfn09LRfM1Z0+kOgL99Vthr9lPHuuZagxCMMKr4O38IxIuEz/VeguWZMQbziU5Tk7u5urzMeihkq6K/Cr8gzyPXYhXLWFh8TU/+uyG6AgnruQmuRBxx47moK49r95umR3e3KLv3cl8/gHHunn8j0pPIJ9GLOZ88tfzPuCXbzrBXOpp+Ngvh1beZpnNyttuUyczAvXj+H05f4J+ZZ2cyfUHNnEPq4fVdkibU5+J5zyAmSOVqdzqcfyZIwnzbGOYdICNMvPzMWOueANcQpgvVIs2+SPmEP3+ynTGLN2XWryqOYEZwP312I9DWt/TXIZ3oiVzZsiye9s+RdLOYh//aIxR54V2TIUMEr1kx8a20GCIhlE9mwElASzSFSoYabSeRXDNa7Efa0dxYV8TPOCbb5nzLtI7I8OiPy2BZPKBZQLHpj31M/vztrxt95E53drZ/6dR4+FDkijRVmJrFVHJgHCI5NRYB135afmZS99CTfpD0Ijnzr7Es8yGH6n8jfZ2CzVRQoz3yR5sG3WHHpW0zGXoGKGh90iTmJRzar3hhaX/GhyPNWbm2qIwU9MW1rlP96k6ePioxI31P8Peo2+7bHOiDU+a3X+SvmWcfAH7vilX+oyNbWGAObzuJrvoRGLxbkX+xbvibv5bTm4Nt5Kz4UGQo+pys4o1NEQVTAurJE2OnYEiAVtbX891ytQRP+FC3CStJesv4nRhzb4tlCvsWxymzOmQuZKOZyUAg289xsSH7ZrLnOnyf54ZVeM4C46PNd0acP318u8gxMkitKJhtSMEEw2RhrBMFCL0Z6wVXEMM9pjNDQOdb5Npp3ziHkb0tWorJdc4RuZDbGbifMPFvn33xtQvN8JDiAla8pwfeXiwzzqTgEDYDMmRS4WdbqSKgTCxroNVRr9qxnsqHfOifkh830fwzltyXrORVlq+HBnmNn5zdMXlY4Wy6E3cRnfPne4uhgkf8PBFHHea6RU9etgX9n1MTlcqr4LUWGnk0ERRLCTgndYLFr1lPFbytyWJ+qU8KxZ/V0sNv9C+dkW7XKI4Q4AAAAAElFTkSuQmCC"/><span class="instok">Вог Айвеа</span>','<img class="ib" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHkAAAARCAYAAAD5XQN+AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAOjSURBVGhD7dexTmRJDIXhfVpehmfgCciJSQnJiMhIiEhISHr1tfiRKW43rHZGomc4klW3yi6XfeyqVv+z+8Efj58i/wX4KfJfgLci39zc7C4uLvbjiuvr673u/v7+deX74Pn5eXd1dbU7Pz9/E/G+vLy8Wmzj8vJyn9OW3N7evlr9GXgr8sPDw+7s7GxP0orIQ+h3wuPj4z4ujfn09LRfM1Z0+kOgL99Vthr9lPHuuZagxCMMKr4O38IxIuEz/VeguWZMQbziU5Tk7u5urzMeihkq6K/Cr8gzyPXYhXLWFh8TU/+uyG6AgnruQmuRBxx47moK49r95umR3e3KLv3cl8/gHHunn8j0pPIJ9GLOZ88tfzPuCXbzrBXOpp+Ngvh1beZpnNyttuUyczAvXj+H05f4J+ZZ2cyfUHNnEPq4fVdkibU5+J5zyAmSOVqdzqcfyZIwnzbGOYdICNMvPzMWOueANcQpgvVIs2+SPmEP3+ynTGLN2XWryqOYEZwP312I9DWt/TXIZ3oiVzZsiye9s+RdLOYh//aIxR54V2TIUMEr1kx8a20GCIhlE9mwElASzSFSoYabSeRXDNa7Efa0dxYV8TPOCbb5nzLtI7I8OiPy2BZPKBZQLHpj31M/vztrxt95E53drZ/6dR4+FDkijRVmJrFVHJgHCI5NRYB135afmZS99CTfpD0Ijnzr7Es8yGH6n8jfZ2CzVRQoz3yR5sG3WHHpW0zGXoGKGh90iTmJRzar3hhaX/GhyPNWbm2qIwU9MW1rlP96k6ePioxI31P8Peo2+7bHOiDU+a3X+SvmWcfAH7vilX+oyNbWGAObzuJrvoRGLxbkX+xbvibv5bTm4Nt5Kz4UGQo+pys4o1NEQVTAurJE2OnYEiAVtbX891ytQRP+FC3CStJesv4nRhzb4tlCvsWxymzOmQuZKOZyUAg289xsSH7ZrLnOnyf54ZVeM4C46PNd0acP318u8gxMkitKJhtSMEEw2RhrBMFCL0Z6wVXEMM9pjNDQOdb5Npp3ziHkb0tWorJdc4RuZDbGbifMPFvn33xtQvN8JDiAla8pwfeXiwzzqTgEDYDMmRS4WdbqSKgTCxroNVRr9qxnsqHfOifkh830fwzltyXrORVlq+HBnmNn5zdMXlY4Wy6E3cRnfPne4uhgkf8PBFHHea6RU9etgX9n1MTlcqr4LUWGnk0ERRLCTgndYLFr1lPFbytyWJ+qU8KxZ/V0sNv9C+dkW7XKI4Q4AAAAAElFTkSuQmCC"/><span class="instok">Вог Айвеа</span>'];
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