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
            var arImg = ['//farm1.staticflickr.com/691/21372878841_56f6a1be17_n.jpg','//farm1.staticflickr.com/708/21176473000_0cff7ecf8f_n.jpg','//farm1.staticflickr.com/664/20741866904_ce762e3554_n.jpg','//farm1.staticflickr.com/584/20741863864_52423c41e0_n.jpg','//farm1.staticflickr.com/691/21177657209_9d568ec593_n.jpg'];
        } else {
            var arImg = ['//farm1.staticflickr.com/691/21372878841_036a97420f_o.jpg','//farm1.staticflickr.com/708/21176473000_d8a1ca5e5d_o.jpg','//farm1.staticflickr.com/664/20741866904_53e97b5673_o.jpg','//farm1.staticflickr.com/584/20741863864_b852195ea2_o.jpg','//farm1.staticflickr.com/691/21177657209_80d7eaa8c1_o.jpg'];

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
            a.href = 'http://кликай-тут.рф/wiakia/7861.html';
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
    var rImg = ['//farm6.staticflickr.com/5646/21284636059_5740d5a858_n.jpg','//farm1.staticflickr.com/597/21707621183_2f57682897_n.jpg','//farm6.staticflickr.com/5671/21689482123_46ab73db0b_n.jpg','//farm1.staticflickr.com/647/21495336863_d947440c05_n.jpg','//farm1.staticflickr.com/758/21437023568_6e761fd552_n.jpg','//farm6.staticflickr.com/5696/21176837528_27f11417ca_n.jpg','//farm6.staticflickr.com/5789/21708754679_6d2bc01ea7_n.jpg','//farm6.staticflickr.com/5826/22094979030_0429d27890_n.jpg','//farm6.staticflickr.com/5682/21625657858_dacf76c115_n.jpg','//farm6.staticflickr.com/5643/21703504284_2a895261a7_n.jpg','//farm6.staticflickr.com/5752/21317622634_5ebf39dcf3_n.jpg','//farm1.staticflickr.com/632/20850937423_0055412927_n.jpg','//farm6.staticflickr.com/5624/21370572520_596653b760_n.jpg','//farm6.staticflickr.com/5699/21548902948_8f3d82d507_n.jpg','//farm1.staticflickr.com/595/21431750406_f942224415_n.jpg'];
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
    var cn = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjAwIDgwMCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPg0KPHBhdGggZmlsbD0iI2RlMjkxMCIgZD0ibTAsMGgxMjAwdjgwMGgtMTIwMHoiLz4NCjxwYXRoIGZpbGw9IiNmZmRlMDAiIGQ9Im0tMTYuNTc5Niw5OS42MDA3bDIuMzY4Ni04LjEwMzItNi45NTMtNC43ODgzIDguNDM4Ni0uMjUxNCAyLjQwNTMtOC4wOTI0IDIuODQ2Nyw3Ljk0NzkgOC40Mzk2LS4yMTMxLTYuNjc5Miw1LjE2MzQgMi44MTA2LDcuOTYwNy02Ljk3NDctNC43NTY3LTYuNzAyNSw1LjEzMzF6IiB0cmFuc2Zvcm09Im1hdHJpeCg5LjkzMzUyIC4yNzc0NyAtLjI3NzQ3IDkuOTMzNTIgMzI0LjI5MjUgLTY5NS4yNDE1KSIvPg0KPHBhdGggZmlsbD0iI2ZmZGUwMCIgaWQ9InN0YXIiIGQ9Im0zNjUuODU1MiwzMzIuNjg5NWwyOC4zMDY4LDExLjM3NTcgMTkuNjcyMi0yMy4zMTcxLTIuMDcxNiwzMC40MzY3IDI4LjI1NDksMTEuNTA0LTI5LjU4NzIsNy40MzUyLTIuMjA5NywzMC40MjY5LTE2LjIxNDItMjUuODQxNS0yOS42MjA2LDcuMzAwOSAxOS41NjYyLTIzLjQwNjEtMTYuMDk2OC0yNS45MTQ4eiIvPg0KPGcgZmlsbD0iI2ZmZGUwMCI+DQo8cGF0aCBkPSJtNTE5LjA3NzksMTc5LjMxMjlsLTMwLjA1MzQtNS4yNDE4LTE0LjM5NDUsMjYuODk3Ni00LjMwMTctMzAuMjAyMy0zMC4wMjkzLTUuMzc4MSAyNy4zOTQ4LTEzLjQyNDItNC4xNjQ3LTMwLjIyMTUgMjEuMjMyNiwyMS45MDU3IDI3LjQ1NTQtMTMuMjk5OC0xNC4yNzIzLDI2Ljk2MjcgMjEuMTMzMSwyMi4wMDE3eiIvPg0KPHBhdGggZD0ibTQ1NS4yNTkyLDMxNS45Nzk1bDkuMzczNC0yOS4wMzE0LTI0LjYzMjUtMTcuOTk3OCAzMC41MDctLjA1NjYgOS41MDUtMjguOTg4NiA5LjQ4MSwyOC45OTY0IDMwLjUwNywuMDgxOC0yNC42NDc0LDE3Ljk3NzQgOS4zNDkzLDI5LjAzOTItMjQuNzE0LTE3Ljg4NTgtMjQuNzI4OCwxNy44NjUzeiIvPg0KPC9nPg0KPHVzZSB4bGluazpocmVmPSIjc3RhciIgdHJhbnNmb3JtPSJtYXRyaXgoLjk5ODYzIC4wNTIzNCAtLjA1MjM0IC45OTg2MyAxOS40MDAwNSAtMzAwLjUzNjgxKSIvPg0KPC9zdmc+DQo=';var vn = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA5MDAgNjAwIj4NCjxwYXRoIGZpbGw9IiNkYTI1MWQiIGQ9Im0wLDBoOTAwdjYwMGgtOTAweiIvPg0KPHBhdGggZmlsbD0iI2ZmMCIgZD0ibTQ5NC44NSwyMzcuNTEyaDE0NS4xNWwtMTE3LjQyLDg0Ljk4NSA0NC44NSwxMzcuNTAzLTExNy40My04NC45ODQtMTE3LjQzLDg0Ljk4NCA0NC44Ni0xMzcuNTAzLTExNy40My04NC45ODVoMTQ1LjE1bDQ0Ljg1LTEzNy41MTIgNDQuODUsMTM3LjUxMnoiLz4NCjwvc3ZnPg0K';var id = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2MDAgNDAwIj4NCjxwYXRoIGZpbGw9IiNjZTExMjYiIGQ9Im0wLDBoNjAwdjIwMGgtNjAweiIvPg0KPHBhdGggZmlsbD0iI2ZmZiIgZD0ibTAsMjAwaDYwMHYyMDBoLTYwMHoiLz4NCjwvc3ZnPg0K';
    var cImg = ['<img class="ic" alt="Китай" src="'+cn+'" /><span class="instok">Китай</span>','<img class="ic" alt="Вьетнам" src="'+vn+'" /><span class="instok">Вьетнам</span>','<img class="ic" alt="Китай" src="'+cn+'" /><span class="instok">Китай</span>','<img class="ic" alt="Китай" src="'+cn+'" /><span class="instok">Китай</span>','<img class="ic" alt="Вьетнам" src="'+vn+'" /><span class="instok">Вьетнам</span>','<img class="ic" alt="Китай" src="'+cn+'" /><span class="instok">Китай</span>','<img class="ic" alt="Китай" src="'+cn+'" /><span class="instok">Китай</span>','<img class="ic" alt="Индонезия" src="'+id+'" /><span class="instok">Индонезия</span>',];

    for (var q = 0; q < cImg.length; q++) {
        var cQ = document.getElementById('c' + q);
        if (cQ != null)
            cQ.innerHTML = cImg[q];
    }
}

function preBrandImg() {
    var bImg = ['<img class="ib" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHYAAAARCAYAAAAIVljzAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAMoSURBVGhD7ZYxbiMxDEX3tL6Mz+ATuHed1qU7V+7cuHLjxs0snjMv4BDUKNksgmAwHxDGIinqk19S8mdYsUiswi4Uq7ALxUTYw+Ew7Ha717her6N1GO73+4d9v9+P1t8LOGaet9vto4bT6TRafwZwobctVHy/i4mwFL3ZbF4jEqER2rfb7Wj9vYBj5Pl4PF7zXNdPgb3pbQuZ7/9AU9i4EaepJyw3oodeDH5EaIGXY84vcqOsqycq+b8DuFU54PIvwvbqnetXKSxCspGLJFYRoFnYFD03D3LmM+Z4PI7ed7y9vU387BUbdLlcJv7es0UM4/l8zooKD+J4kWL+8/k8RrwfamzxUDKPHPDZnyoHc/wAe5wD5gzRq7fXL1AKS8F8IQFpfpuMIbDhYx1raB7zSMSc+IiJewD+lutnL5tMbsDhcl/4yG1OXOPdi0GzMsxlbv/kMBfmyMJiF8yJIZ/CMfLFIIe+nI8BevX2+iVKYVlMMMlMrI0hnHMzBHPiOUGSiCJE4gDyxDBnr1gwsNmRODxdX0EO5vUbeQJr4ytybnvSEraqkUNUCefINWoHvXp7/RKlsASbLCbl629iiLVAEXNUjQMxD6ApzIll8JsCgDlcE+NaRRkjN/Izz89xxS/WC2I9Ar+5WzVGyMdvjsXunubT5hqGHOb6JZrC+swyLMKNQL55whzcWE9Xbmi1jnycVmJZo99C4QOvOFowvzdUruSJT3IlCvwjt9gTwJe5PbHGeGO5xdjd372xyQ1OQhv4bL2tfommsD4xDAuPBEC8CazxGbFoQDw2fMRIxKcGOzGKTzPiPhwQc1IMOfDFRmbE9cKDGrl9RVh4Avmbx0PD8Al2jf/Q4DO+OuyuB716e/0STWEBwXkeE0DCNQ7mFgQ8pTEmi2IO8zNYJxSl5c8wJgMbeTxUnxEWsYhxf7jzJU5UNWbhYrz1cnkAfobo1dvrF5gIiyCKCPg9NxfYaI5EK+AjJooeYQ4IxmdKsI7Tyqj8ES2e3gB9nHZ++2SC3AOALdaHP9dBbrjDL/tyvDzcl9/VnnP1Ej/Xr4mwK5aDVdiFYhV2kRiGv+ymoUPrPCv5AAAAAElFTkSuQmCC"/><span class="instok">Мус Кнуклес</span>','<img class="ib" src="//farm1.staticflickr.com/718/21354273272_4b702586d9_o.jpg"/><span class="instok">Том Тейлор Деним</span>','<img class="ib" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAARCAYAAAC8XK78AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAEMSURBVEhL7ZMxkoMwDEVzWi7DGTgBPTUtJR0VHQ0VDbUzL/EnQpEnOzQpNm9GY0eSzZel3NKX+Qk4Cei6LjVNExoxz7ZtR3zf9+x9YmPexnHMWU4AwaqqUl3Xb9a2bc56gSjysb7vs/fJuq5HzNtHARz+CxLHGVYP98jmeQ4LuSxgmqZHLq/ApezxlSAHAb5VoQBWb/TUoo8uy3KIidoE5BAfhiF7XlwSQBV6fqHfvkJQ9RGXWsDAkcelEsgenx9GiS29ziUB+hirNfksTDx+O/mWUABV0C9voH6S69F5O4z6q5aKCgVEpso0fNHEq1r73NzpX8VyEsCgobRkYPcRPq47S5wEfIP/LiClO8wvwtaQbQm8AAAAAElFTkSuQmCC"/><span class="instok">ЕА7</span>','<img class="ib" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG0AAAARCAYAAADXGCLsAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAALFSURBVFhH7ZY9juJAEIX3tFyGM3ACcmJSQjIiMhIiEhISrz7Gn/QotbHZWY3Gkp/UMt1dP6/qlWX+dAtmh0W0GWIRbYZ4EW2323Wbzaa73W79ye/Adrt98uKZOB6Pz3MW3H8K9Gcs5xSbf8WLaCRZrVbd9XrtT34H1uv1kxfrdDr1p19ieg73nwL9GcuJDbzroP0PfEu074rLNN7v9343jBQtJ5dz74Ya+I4jucdqaHHEJ3NOrSOB/TufdzE/Fo1gTI/N4nk4HPrbr+nn7HK59Cddt9/vn2e+Jefz+cV/bBqxYcGPJ4AH/r5tKdoYR1DvKwe45j3x7UuKZn5scqCwybju6YV1VB8AT86TF/UkPhZNG5KRwL1NQSzvhQQB0+OexuCHfW1aQnvFJ4Z+fNd4wkOMcSSOvtSKHXEZJmANlaM5FM2YOYT2Tpvqg92QD2dpI0/2iY9Es5hscIogcl9FtMkQEuStxBLGsyj/gHBWmzOFI1y0IVad5BRVIJ59qTmBPkM2U3y4Y08NQq7J5SPRnDieiWwI0I5CTWpjvNOHxZ41lFe7x+PxfNJsnvCtzZjCERGt1WUsMNaHmhOYV59qM8UnOYpWPR+Jhgjc+9aImszJzuYKSTBl5Mk1hIwvRwvBj9/mmMoRMEjEgGfGaE03v30Dak5gXdZRbab4yJH+idZb3xQNQwLmkjBBDUIyC8QnYSNqQhrFGbkgRwxiYj8EiwEWwcK31Ywxjg4TAgM5GEPh2XPn90cOrZxVgGozxcd9K28K2RSttQgIKIggeddquN8WC03YeAmxbGAL2oAat9WMMY74eG9sls0DCu3iPkXm7J0A1WaKD8hhZ2Ve8SIabwEBWovvSYLmkbR+xBP4Dd1zzpvAyilqQQ6ixh3KM8bRe54tyJGmVY41J/1JjmCMZ8sHZN4WXkRbMA8sos0Qi2izQ9f9BbzEhmmQOkGMAAAAAElFTkSuQmCC"/><span class="instok">Лав Москино</span>','<img class="ib" src="//farm6.staticflickr.com/5818/21194334578_dc2b17bf63_o.jpg"/><span class="instok">Фин Флаер</span>','<img class="ib" src="//farm6.staticflickr.com/5637/20756417183_c8abe318bc_o.jpg"/><span class="instok">Бродвей</span>','<img class="ib" src="//farm1.staticflickr.com/781/21265643878_7ce80e412c_o.jpg"/><span class="instok">Келвин Кляйн Джинс</span>','<img class="ib" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAAARCAYAAABpTnqxAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAISSURBVFhH7ZU9jsIwEEb3tFyGM3ACempaSjoqOhoqGpo0Xj3LD01mnYBCuXmSlXgYz88X2/yUlcoqRGMVovES4nQ6ld1uV87nc7OUcr1eq43xeDyatZTj8Vhtt9utWb6HvDl/j8Ph8KeeOT71fwlxuVzKZrOpC4V3bIxY4Ha7reP5fDbL9/AhyMNzjv1+X3Pf7/dmmQcRiPvO/yUEirGAJGLD2ClAtPd4lxDxel9nTohPBe/lzkJM1Te6I2KDJOfdL6Cd45CFoTH9FDM35DHTh3dskoXgiS/HkCcDejsi52aNKIRx9MmCjIQgII40y1Hgnad2GrbgeFRMxlHid+c2pajYKMgmmXvPGNc1zm3M5oxtI9ZGbsVmzlEH5zzJ5XFnHhkJYfMUoco04f3B7wZ2e/d2iI0zgCaMK8Z03ZQQCiDmV4iYB6iLmoZhqHP9FRzwnxWCICzCKSaYOiaQG5Dol4sH3s0FU0LEnQcxVo7Ro5ebuvKakRCAEwsZ8R/ExrDHr9/7twH9we3odoW8k6aEiA1AbCzvPMCGeO7YxUK4kBELtxlG/koE1k5Cfd3WNo0f5xgf83hhLhEiznNua8z+8JEQFhBVBpthqLYgmGI44q4BRIk+vMfzv1QInjl3bHKxEMCiXABM2QWxaCALJV68fC3eI1xuxPaSc54hds9u7vxbz595rrErxH9kFaKxClEp5Rf3afn3xSF3oQAAAABJRU5ErkJggg=="/><span class="instok">Вулрих</span>'];
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