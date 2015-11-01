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
            var arImg = ['//farm1.staticflickr.com/594/20866890904_7352a9f123_n.jpg','//farm6.staticflickr.com/5808/21302705729_67ac88178f_n.jpg','//farm6.staticflickr.com/5656/21489623035_0df6ba434a_n.jpg','//farm6.staticflickr.com/5776/20866894804_cca14765b0_n.jpg','//farm6.staticflickr.com/5810/20866895804_a0016d0b3d_n.jpg','//farm6.staticflickr.com/5798/21463384436_ccb1a8c600_n.jpg','//farm6.staticflickr.com/5672/21302712469_3c4c3835f2_n.jpg'];
        } else {
            var arImg = ['//farm1.staticflickr.com/594/20866890904_51ec78a3dc_o.jpg','//farm6.staticflickr.com/5808/21302705729_6286ab45a3_o.jpg','//farm6.staticflickr.com/5656/21489623035_c187937e91_o.jpg','//farm6.staticflickr.com/5776/20866894804_7f00d7dbbb_o.jpg','//farm6.staticflickr.com/5810/20866895804_421ac11024_o.jpg','//farm6.staticflickr.com/5798/21463384436_3caf6bd265_o.jpg','//farm6.staticflickr.com/5672/21302712469_a748cc426b_o.jpg'];

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
            a.href = 'http://babyb1og.ru/g/3f2779c2d4404da6e1704e8640d77b/?i=5&ulp=http%3A%2F%2Fwww.lamoda.ru%2Fp%2FAL028AMCWH40%2F';
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
    var rImg = ['//farm6.staticflickr.com/5828/21343240813_dc76ef8e6c_n.jpg','//farm6.staticflickr.com/5783/22140035530_97e216038c_n.jpg','//farm1.staticflickr.com/611/21578006431_41c7b374e8_n.jpg','//farm1.staticflickr.com/679/21203263649_f923a99012_n.jpg','//farm1.staticflickr.com/612/22333777981_8234efbccc_n.jpg','//farm1.staticflickr.com/773/21115567433_6fa681bba3_n.jpg','//farm1.staticflickr.com/708/22323366315_0511a29386_n.jpg','//farm1.staticflickr.com/741/21222888868_ecede2f812_n.jpg','//farm6.staticflickr.com/5623/22316932295_42556f780b_n.jpg','//farm1.staticflickr.com/765/21540134228_00c5a71c76_n.jpg','//farm6.staticflickr.com/5771/21370639020_f1209ce063_n.jpg','//farm6.staticflickr.com/5689/21728327202_fb5e9613b3_n.jpg','//farm6.staticflickr.com/5824/22135474528_dd80a0bb69_n.jpg','//farm1.staticflickr.com/778/22135499808_700622e42e_n.jpg','//farm6.staticflickr.com/5824/21548636000_ae93937a5b_n.jpg','//farm6.staticflickr.com/5726/22074682712_19df52c84c_n.jpg','//farm1.staticflickr.com/738/22136025309_f427821389_n.jpg','//farm6.staticflickr.com/5620/21706744396_8b9fb4ed99_n.jpg','//farm1.staticflickr.com/646/21946762771_027dea5af0_n.jpg'];
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
    var cn = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjAwIDgwMCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPg0KPHBhdGggZmlsbD0iI2RlMjkxMCIgZD0ibTAsMGgxMjAwdjgwMGgtMTIwMHoiLz4NCjxwYXRoIGZpbGw9IiNmZmRlMDAiIGQ9Im0tMTYuNTc5Niw5OS42MDA3bDIuMzY4Ni04LjEwMzItNi45NTMtNC43ODgzIDguNDM4Ni0uMjUxNCAyLjQwNTMtOC4wOTI0IDIuODQ2Nyw3Ljk0NzkgOC40Mzk2LS4yMTMxLTYuNjc5Miw1LjE2MzQgMi44MTA2LDcuOTYwNy02Ljk3NDctNC43NTY3LTYuNzAyNSw1LjEzMzF6IiB0cmFuc2Zvcm09Im1hdHJpeCg5LjkzMzUyIC4yNzc0NyAtLjI3NzQ3IDkuOTMzNTIgMzI0LjI5MjUgLTY5NS4yNDE1KSIvPg0KPHBhdGggZmlsbD0iI2ZmZGUwMCIgaWQ9InN0YXIiIGQ9Im0zNjUuODU1MiwzMzIuNjg5NWwyOC4zMDY4LDExLjM3NTcgMTkuNjcyMi0yMy4zMTcxLTIuMDcxNiwzMC40MzY3IDI4LjI1NDksMTEuNTA0LTI5LjU4NzIsNy40MzUyLTIuMjA5NywzMC40MjY5LTE2LjIxNDItMjUuODQxNS0yOS42MjA2LDcuMzAwOSAxOS41NjYyLTIzLjQwNjEtMTYuMDk2OC0yNS45MTQ4eiIvPg0KPGcgZmlsbD0iI2ZmZGUwMCI+DQo8cGF0aCBkPSJtNTE5LjA3NzksMTc5LjMxMjlsLTMwLjA1MzQtNS4yNDE4LTE0LjM5NDUsMjYuODk3Ni00LjMwMTctMzAuMjAyMy0zMC4wMjkzLTUuMzc4MSAyNy4zOTQ4LTEzLjQyNDItNC4xNjQ3LTMwLjIyMTUgMjEuMjMyNiwyMS45MDU3IDI3LjQ1NTQtMTMuMjk5OC0xNC4yNzIzLDI2Ljk2MjcgMjEuMTMzMSwyMi4wMDE3eiIvPg0KPHBhdGggZD0ibTQ1NS4yNTkyLDMxNS45Nzk1bDkuMzczNC0yOS4wMzE0LTI0LjYzMjUtMTcuOTk3OCAzMC41MDctLjA1NjYgOS41MDUtMjguOTg4NiA5LjQ4MSwyOC45OTY0IDMwLjUwNywuMDgxOC0yNC42NDc0LDE3Ljk3NzQgOS4zNDkzLDI5LjAzOTItMjQuNzE0LTE3Ljg4NTgtMjQuNzI4OCwxNy44NjUzeiIvPg0KPC9nPg0KPHVzZSB4bGluazpocmVmPSIjc3RhciIgdHJhbnNmb3JtPSJtYXRyaXgoLjk5ODYzIC4wNTIzNCAtLjA1MjM0IC45OTg2MyAxOS40MDAwNSAtMzAwLjUzNjgxKSIvPg0KPC9zdmc+DQo=';var id = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2MDAgNDAwIj4NCjxwYXRoIGZpbGw9IiNjZTExMjYiIGQ9Im0wLDBoNjAwdjIwMGgtNjAweiIvPg0KPHBhdGggZmlsbD0iI2ZmZiIgZD0ibTAsMjAwaDYwMHYyMDBoLTYwMHoiLz4NCjwvc3ZnPg0K';var de = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBoZWlnaHQ9IjYwMCIgdmlld0JveD0iMCAwIDUgMyI+DQo8cGF0aCBkPSJtMCwwaDV2M2gtNXoiLz4NCjxwYXRoIGZpbGw9IiNkMDAiIGQ9Im0wLDFoNXYyaC01eiIvPg0KPHBhdGggZmlsbD0iI2ZmY2UwMCIgZD0ibTAsMmg1djFoLTV6Ii8+DQo8L3N2Zz4NCg==';var it = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBoZWlnaHQ9IjEwMDAiIHZpZXdCb3g9IjAgMCAzIDIiPg0KPHBhdGggZmlsbD0iIzAwOTI0NiIgZD0ibTAsMGgxdjJoLTF6Ii8+DQo8cGF0aCBmaWxsPSIjZmZmIiBkPSJtMSwwaDF2MmgtMXoiLz4NCjxwYXRoIGZpbGw9IiNjZTJiMzciIGQ9Im0yLDBoMXYyaC0xeiIvPg0KPC9zdmc+DQo=';
    var cImg = ['<img class="ic" alt="Китай" src="'+cn+'" /><span class="instok">Китай</span>','<img class="ic" alt="Китай" src="'+cn+'" /><span class="instok">Китай</span>','<img class="ic" alt="Китай" src="'+cn+'" /><span class="instok">Китай</span>','<img class="ic" alt="Китай" src="'+cn+'" /><span class="instok">Китай</span>','<img class="ic" alt="Индонезия" src="'+id+'" /><span class="instok">Индонезия</span>','<img class="ic" alt="Германия" src="'+de+'" /><span class="instok">Германия</span>','<img class="ic" alt="Италия" src="'+it+'" /><span class="instok">Италия</span>',];

    for (var q = 0; q < cImg.length; q++) {
        var cQ = document.getElementById('c' + q);
        if (cQ != null)
            cQ.innerHTML = cImg[q];
    }
}

function preBrandImg() {
    var bImg = ['<img class="ib" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAARCAYAAAC1tw6GAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAFbSURBVEhL7ZQtEoQwDEb3tFyGM3ACPBqLxKFwGBQGg+nO6/ZjQ/jZwSH2m8mUtmn6kmb3FR6mP9AvnQKVZRmKogh936eVr6ZpintVVaWVvdq2jT6Md3QI1HVdyLIsGkG9xnE83ZOapok+jHd0CER1CJbneRypiNUVEHvoCoh48zyn2VY7IBwBwRTUP80REL5KgHXOeCDrw0jiPtkdkCAYLZyVBxqGYb2E56ZvmCsOohflw1pd1+vcagckAJVUz8dFkgdScOvjK4Qvc+Al+djG3wApU4wAGHCaSx5Il6l/kK00UqJW3gdtgGwzW2MN03t7IGVqK6SqeSDbzPI5rZAOLcuSVj7SQTW3B9LfBHOg6RclIiBVAx/Oy8dDrkBqRF1qxSXscRh5IKQqyY89vu1z6AWsn60qWoG4lIt8dST2MIlv/5OlB0mMjIlzFI8z+HgQafNkT9Af6FohvAHik7O6IQxZhQAAAABJRU5ErkJggg=="/><span class="instok">Алдо</span>','<img class="ib" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAARCAYAAAC1tw6GAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAFbSURBVEhL7ZQtEoQwDEb3tFyGM3ACPBqLxKFwGBQGg+nO6/ZjQ/jZwSH2m8mUtmn6kmb3FR6mP9AvnQKVZRmKogh936eVr6ZpintVVaWVvdq2jT6Md3QI1HVdyLIsGkG9xnE83ZOapok+jHd0CER1CJbneRypiNUVEHvoCoh48zyn2VY7IBwBwRTUP80REL5KgHXOeCDrw0jiPtkdkCAYLZyVBxqGYb2E56ZvmCsOohflw1pd1+vcagckAJVUz8dFkgdScOvjK4Qvc+Al+djG3wApU4wAGHCaSx5Il6l/kK00UqJW3gdtgGwzW2MN03t7IGVqK6SqeSDbzPI5rZAOLcuSVj7SQTW3B9LfBHOg6RclIiBVAx/Oy8dDrkBqRF1qxSXscRh5IKQqyY89vu1z6AWsn60qWoG4lIt8dST2MIlv/5OlB0mMjIlzFI8z+HgQafNkT9Af6FohvAHik7O6IQxZhQAAAABJRU5ErkJggg=="/><span class="instok">Алдо</span>','<img class="ib" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAARCAYAAAC1tw6GAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAFbSURBVEhL7ZQtEoQwDEb3tFyGM3ACPBqLxKFwGBQGg+nO6/ZjQ/jZwSH2m8mUtmn6kmb3FR6mP9AvnQKVZRmKogh936eVr6ZpintVVaWVvdq2jT6Md3QI1HVdyLIsGkG9xnE83ZOapok+jHd0CER1CJbneRypiNUVEHvoCoh48zyn2VY7IBwBwRTUP80REL5KgHXOeCDrw0jiPtkdkCAYLZyVBxqGYb2E56ZvmCsOohflw1pd1+vcagckAJVUz8dFkgdScOvjK4Qvc+Al+djG3wApU4wAGHCaSx5Il6l/kK00UqJW3gdtgGwzW2MN03t7IGVqK6SqeSDbzPI5rZAOLcuSVj7SQTW3B9LfBHOg6RclIiBVAx/Oy8dDrkBqRF1qxSXscRh5IKQqyY89vu1z6AWsn60qWoG4lIt8dST2MIlv/5OlB0mMjIlzFI8z+HgQafNkT9Af6FohvAHik7O6IQxZhQAAAABJRU5ErkJggg=="/><span class="instok">Алдо</span>','<img class="ib" src="//farm6.staticflickr.com/5744/21375923751_d9321431c6_o.jpg"/><span class="instok">Рибок Классик</span>','<img class="ib" src="//farm6.staticflickr.com/5768/20682506864_7b775ab878_o.jpg"/><span class="instok">Найк</span>','<img class="ib" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF4AAAARCAYAAABU3BvXAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAK1SURBVFhH7ZY7ciJBEET3tFyGM3ACfGxcTDwsPBwsHBycUTx2HkpqG/VIDtqIyYgKpquqs6qzP9KfYcZbMAv/JszCvwlPwm82m2G1Wv1j2+12zHg/DofDvaflcnm39Xo9HI/HMfr/4El4FrRYLB6L0vARezc4GPbnoWCM/abDMQVN4c/n8+gZhtvt9hD/crmM3k9cr9emXxBLvopeXHCqFT3zT6fToz++W6DHBOMpNXvrqrwVX+VMFh5LIAT5LprvvPJw5IkkL09lL17Bk0Lefr8fPZ9gHjFuBIAbPsb8YvgQIXvmF16x2+3uPmpkDs+bkMNY1hDokPOzhmgKz68maS0uMYu2YcaeOufShCIz9gT04hXE4Se3Ap995xhDGDdEkejXmsmJnzE5rJcNcCw8AHAlhzlqI4ecVfzJb3xO9IRBKiiSeXLRILEqaC9eYR+KlFBoOFvjhHV4BqhNnutQpFwXHNQWaiJSaOBm5e2tHKD71IDaYCuvLjavG8Z3bl4vXmHN1jvuplvbXiofYuOjlkbeVOFfbahcQA59GGMs9ZokvGQuxI1gwQJBMkfgZ77cuSjQiwtvWWtznOv7r0CVizyEYNMB8cyrY+AcoZiinng56Jc+0hJN4X23NUjxK7Qi4883Gp+LshkLegVdVC9ekf9dIT490A/f+Kgv4GxxWRMuzJ7N47fOq8Jbj8NHD3KYw61ijJ9NoRdi9cA0ha/GRAol2Bz8mZPvGqLg08iBX/TiLeQGp+FjweKV8N4aa8pl31OEp47z8KOLfKLWwfJ1AE/CQ0rT1V794cMPIae1lWOchcBT0Yu/ArnUxFLwBDmc6gqfNueR5zf5dZ6aCOP8uuYqPGCePba0eRJ+Rh/eAE464nu664vQwyz8N4HYCI/YPidsRutUf4VZ+B/CJ+i7gv/FMHwAGxDGdZoRxo8AAAAASUVORK5CYII="/><span class="instok">Босс Оранж</span>','<img class="ib" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG4AAAARCAYAAAA8L5nvAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAALQSURBVFhH7ZaxjsIwDEDva/kZvoEvYGdmZWRjYmNhYmFh4fQqHnJ9aZOKu5Mq9UkRsWM7dpz07uu5MEuWxs2UpXEzpde43W733Gw2Pwb62+32smrjeDx2vlP9Wrler6/ZZ5xOpy7P9Xrdje12+2c5D8GeDKnJ0GscBaxWq3cRDnX3+/1lWedwOHR+v3XAES4S+XwKcazN5in/Z/PYL9ZTk6HYuHzY6nlFGZpZKjI3bqyBQzEicb1UiLTEgsvl8m5SzM1m5hsO2H3S0CH/XM9YfdLUOIuJjTufz71byhyd2Lj9fv+24ZdPk1BEjhH35vBYi4fJYG487Wv5ZEo1wePx6JoaoRbjuq+xzTH6WLO1jvkDMkNqMhQbx8ZsxoifEz+V/CJHW2ULQKcfBTCYxzjuh21cF9fRsQ/FctDa4cdBt+STMXa+pBljY08s9scPGdAhc05iflDzh2gPNRlG/8YxZ3Cr4hPncNBzQMLBaws2Lt5o/dARj3kswHUP23zy4edCWvLJGLvWOPGycXny/lEuNRJa/aEmw+Cnko2UcxKlopmjYw1sXLRRx6/2DBNjuA7uk/8u5EJa8snoQ4Mz+aKQT84x7m9dxPILFXOu+auXmgyjf+P4DOGAjlstJheL9qa1vDjW4sEyj4N9gbWcMORCWvLJ+MnKl1K9fr5c7Hw1eX8/h/jwGy9Li/9UGar/nPC00eHoLfJQ0LGOvb7IYOOwwZ7BHJ1xkF2nWTbKAmuNc6+WfEpgjw2HSgxfRvSzDi+ujcAuQtPQM+JlbfFnPkWGauPAG826kAjB0JtIfJUmbExHtKEIY/gbX8BQ4+IhsQ/U8ikRGzzk52tyLY5IvDyRFv+pMvQax0vITRP0eY2kOHxumK9EeEHaE5cDjt99MUZpfSwffBh+VmEsnzHYg/3xLfmhIybrMJQXuqEax/yZT5Gh17iF+bA0bqYsjZslz+c3syGwsc6zIFQAAAAASUVORK5CYII="/><span class="instok">Роберто Кавалли</span>'];
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