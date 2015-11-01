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
            var arImg = ['//farm6.staticflickr.com/5835/21339302846_218c91be16_n.jpg','//farm1.staticflickr.com/700/21178648919_5dc41d4ae5_n.jpg','//farm6.staticflickr.com/5650/21178644309_db3f68c481_n.jpg','//farm6.staticflickr.com/5824/20742848294_a594030899_n.jpg'];
        } else {
            var arImg = ['//farm6.staticflickr.com/5835/21339302846_10a6f277f2_o.jpg','//farm1.staticflickr.com/700/21178648919_63db6736a4_o.jpg','//farm6.staticflickr.com/5650/21178644309_f8f9005a71_o.jpg','//farm6.staticflickr.com/5824/20742848294_b3c9bb757c_o.jpg'];

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
            a.href = 'http://кликай-тут.рф/wiakia/10335.html';
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
    var rImg = ['//farm6.staticflickr.com/5758/21016562544_b88352f45a_n.jpg','//farm1.staticflickr.com/643/20792807633_bf3bbd0d2d_n.jpg','//farm6.staticflickr.com/5644/22087081035_ca33fe50aa_n.jpg','//farm1.staticflickr.com/722/21335465105_52704ab51e_n.jpg','//farm1.staticflickr.com/647/21276176188_0502ab8d7d_n.jpg','//farm6.staticflickr.com/5717/20848695694_78b25e98cd_n.jpg','//farm1.staticflickr.com/628/22306458385_131ffbbd18_n.jpg','//farm6.staticflickr.com/5648/21296137683_d66833b4e0_n.jpg','//farm1.staticflickr.com/635/21738482855_cdb130c03c_n.jpg','//farm1.staticflickr.com/595/21197550659_0eb25f12ef_n.jpg','//farm6.staticflickr.com/5688/22119437580_1c251853a8_n.jpg','//farm6.staticflickr.com/5667/20751745404_05bca06b8b_n.jpg','//farm1.staticflickr.com/756/21756550508_88fceba531_n.jpg','//farm1.staticflickr.com/581/21183230129_e4368840c0_n.jpg','//farm1.staticflickr.com/627/21798081392_9153af8ec2_n.jpg','//farm6.staticflickr.com/5691/21791547150_4a0abcb2f1_n.jpg','//farm1.staticflickr.com/666/21383384523_540efdc8b7_n.jpg','//farm1.staticflickr.com/713/21697002169_de139553ed_n.jpg','//farm6.staticflickr.com/5738/22294371971_15fc7676df_n.jpg','//farm1.staticflickr.com/766/22131921062_85902a2452_n.jpg'];
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
    var ru = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NTAgMzAwIj4NCjxwYXRoIGZpbGw9IiNmZmYiIGQ9Im0wLDBoNDUwdjEwMGgtNDUweiIvPg0KPHBhdGggZmlsbD0iIzAwZiIgZD0ibTAsMTAwaDQ1MHYxMDBoLTQ1MHoiLz4NCjxwYXRoIGZpbGw9IiNmMDAiIGQ9Im0wLDIwMGg0NTB2MTAwaC00NTB6Ii8+DQo8L3N2Zz4NCg==';var cn = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjAwIDgwMCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPg0KPHBhdGggZmlsbD0iI2RlMjkxMCIgZD0ibTAsMGgxMjAwdjgwMGgtMTIwMHoiLz4NCjxwYXRoIGZpbGw9IiNmZmRlMDAiIGQ9Im0tMTYuNTc5Niw5OS42MDA3bDIuMzY4Ni04LjEwMzItNi45NTMtNC43ODgzIDguNDM4Ni0uMjUxNCAyLjQwNTMtOC4wOTI0IDIuODQ2Nyw3Ljk0NzkgOC40Mzk2LS4yMTMxLTYuNjc5Miw1LjE2MzQgMi44MTA2LDcuOTYwNy02Ljk3NDctNC43NTY3LTYuNzAyNSw1LjEzMzF6IiB0cmFuc2Zvcm09Im1hdHJpeCg5LjkzMzUyIC4yNzc0NyAtLjI3NzQ3IDkuOTMzNTIgMzI0LjI5MjUgLTY5NS4yNDE1KSIvPg0KPHBhdGggZmlsbD0iI2ZmZGUwMCIgaWQ9InN0YXIiIGQ9Im0zNjUuODU1MiwzMzIuNjg5NWwyOC4zMDY4LDExLjM3NTcgMTkuNjcyMi0yMy4zMTcxLTIuMDcxNiwzMC40MzY3IDI4LjI1NDksMTEuNTA0LTI5LjU4NzIsNy40MzUyLTIuMjA5NywzMC40MjY5LTE2LjIxNDItMjUuODQxNS0yOS42MjA2LDcuMzAwOSAxOS41NjYyLTIzLjQwNjEtMTYuMDk2OC0yNS45MTQ4eiIvPg0KPGcgZmlsbD0iI2ZmZGUwMCI+DQo8cGF0aCBkPSJtNTE5LjA3NzksMTc5LjMxMjlsLTMwLjA1MzQtNS4yNDE4LTE0LjM5NDUsMjYuODk3Ni00LjMwMTctMzAuMjAyMy0zMC4wMjkzLTUuMzc4MSAyNy4zOTQ4LTEzLjQyNDItNC4xNjQ3LTMwLjIyMTUgMjEuMjMyNiwyMS45MDU3IDI3LjQ1NTQtMTMuMjk5OC0xNC4yNzIzLDI2Ljk2MjcgMjEuMTMzMSwyMi4wMDE3eiIvPg0KPHBhdGggZD0ibTQ1NS4yNTkyLDMxNS45Nzk1bDkuMzczNC0yOS4wMzE0LTI0LjYzMjUtMTcuOTk3OCAzMC41MDctLjA1NjYgOS41MDUtMjguOTg4NiA5LjQ4MSwyOC45OTY0IDMwLjUwNywuMDgxOC0yNC42NDc0LDE3Ljk3NzQgOS4zNDkzLDI5LjAzOTItMjQuNzE0LTE3Ljg4NTgtMjQuNzI4OCwxNy44NjUzeiIvPg0KPC9nPg0KPHVzZSB4bGluazpocmVmPSIjc3RhciIgdHJhbnNmb3JtPSJtYXRyaXgoLjk5ODYzIC4wNTIzNCAtLjA1MjM0IC45OTg2MyAxOS40MDAwNSAtMzAwLjUzNjgxKSIvPg0KPC9zdmc+DQo=';var tr = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBoZWlnaHQ9IjgwMCIgdmlld0JveD0iMCAwIDM2MCAyNDAiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4NCjxwYXRoIGZpbGw9IiNlMzBhMTciIGQ9Im0wLDBoMzYwdjI0MGgtMzYweiIvPg0KPGNpcmNsZSBmaWxsPSIjZmZmIiBjeD0iMTIwIiBjeT0iMTIwIiByPSI2MCIvPg0KPGNpcmNsZSBmaWxsPSIjZTMwYTE3IiBjeD0iMTM1IiBjeT0iMTIwIiByPSI0OCIvPg0KPGcgZmlsbD0iI2ZmZiIgdHJhbnNmb3JtPSJtYXRyaXgoMCAtMzAgMzAgMCAyMDAuNyAxMjApIj4NCjxnIGlkPSJnMiI+DQo8cGF0aCBpZD0iZzEiIGQ9Im0wLDAgMCwxIC41LDB6IiB0cmFuc2Zvcm09Im1hdHJpeCguOTUxMDYgLjMwOTAyIC0uMzA5MDIgLjk1MTA2IDAgLTEpIi8+DQo8dXNlIHhsaW5rOmhyZWY9IiNnMSIgdHJhbnNmb3JtPSJzY2FsZSgtMSAxKSIvPg0KPC9nPg0KPHVzZSB4bGluazpocmVmPSIjZzIiIHRyYW5zZm9ybT0icm90YXRlKDcyKSIvPg0KPHVzZSB4bGluazpocmVmPSIjZzIiIHRyYW5zZm9ybT0ibWF0cml4KC4zMDkwMiAtLjk1MTA2IC45NTEwNiAuMzA5MDIgMCAwKSIvPg0KPHVzZSB4bGluazpocmVmPSIjZzIiIHRyYW5zZm9ybT0icm90YXRlKDE0NCkiLz4NCjx1c2UgeGxpbms6aHJlZj0iI2cyIiB0cmFuc2Zvcm09Im1hdHJpeCgtLjgwOTAyIC0uNTg3NzkgLjU4Nzc5IC0uODA5MDIgMCAwKSIvPg0KPC9nPg0KPC9zdmc+DQo=';
    var cImg = ['<img class="ic" alt="Россия" src="'+ru+'" /><span class="instok">Россия</span>','<img class="ic" alt="Китай" src="'+cn+'" /><span class="instok">Китай</span>','<img class="ic" alt="Турция" src="'+tr+'" /><span class="instok">Турция</span>','<img class="ic" alt="Турция" src="'+tr+'" /><span class="instok">Турция</span>','<img class="ic" alt="Китай" src="'+cn+'" /><span class="instok">Китай</span>','<img class="ic" alt="Россия" src="'+ru+'" /><span class="instok">Россия</span>','<img class="ic" alt="Китай" src="'+cn+'" /><span class="instok">Китай</span>','<img class="ic" alt="Россия" src="'+ru+'" /><span class="instok">Россия</span>',];

    for (var q = 0; q < cImg.length; q++) {
        var cQ = document.getElementById('c' + q);
        if (cQ != null)
            cQ.innerHTML = cImg[q];
    }
}

function preBrandImg() {
    var bImg = ['<img class="ib" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAARCAYAAABegLWFAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAEpSURBVEhL7ZQ9roNADIRzWi7DGTgBPTUtJR0VHQ0VDQ2Nn74VRsbPJGSVIkVGslib2WHw/jzki/Ezl4uTuaZppKqqf9G27c7Iw7IsSQf9d3Ayh0BRFFKW5Smo8S4X8zxnaYTmEFNs23YYpAMelnuFV+bWdU3hcdscYdF13WGa57Ol9+bIdQ411ffLHprjqaETh2HYWSLjOB48xoiSYzhCZI4cXeagwZiabcztPVfX9c6SNKY2TdNekcTTj3tcmbN8ukjtpTlLAL4z0U9oHuGOObSpvW1OJ2r3lMdSw7URgbo143Nw2xwthqyhndF91/d9ynUDU4dzdSg+as4HH/YnSfedXdLoqgEfMYc4L31EdxDgHaL2JF8BrjXvc64sahYnc9+Gn7k8iPwBbQp9zmhXaf0AAAAASUVORK5CYII="/><span class="instok">Би Ин</span>','<img class="ib" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIgAAAARCAYAAAAG0+TZAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAANdSURBVGhD7ZY7ruowFEXfaJkMY2AE9NS0lHRUdDRUNDQ0uVqIhTZHDpj7EXpStmQlts9nn4/j/BsmTHiCqUEmPMXUIBOe4qFBVqvVsFgsmuN0Ot2kPoPtdnvlwfNd7Ha7q+58Pr+O5XL58Xh+gvP5PFwul9tsuMbD+As8NAhJnM1m90TmOB6PN6nPYLPZXLnxfAc0vTHZJM7/xyYh/loP5oy/QLNBepuhleAeXU4AYwwtG7VBevwcDod7M6S8TdM6dfDqaZyfyvT4acX4bo165ca4vN0gJBs5ZS2YnW1B1uv1dR1gzzX0eGdQqAT7aSMLaIN4DSrD9TEGG6FeS3yeaZ7Efr+/c0OHd9aE8WErOab/HhkKUf3UfBN36ptLc+A6c8A7Q+Cj2lBWsIYMOVIOLhXNBuGZIxOsMY1zEkikerxbGEmRAOYSRUY7Jsfgqw2euY8eCYeT8zFgK32MgRjkQzHw5dxG6vHfIyMnZJFhL/fJK/vETR6URxYuyDKHp9yqDXWwgZ/0KbSDDPlpyYCuf5BqmJEwqDyVyGAP2CDOAQGyZvH0nZ86kuIcDux7mgA6lUtCm68aRC4ZJ75ZIzag/5Sp/l/JEAv7rAl9jxUbHfb8KW3FlDrIsi9v4AFIu3WuXnIH37pi0jBQzz2Gc9BqEJOpL/XG8Cr5LciLYldkM7firpx7/L+S0SbDeBnqtPJU0eKqHdDiAFIG1Lm+q963/0ES6lEIdHMAnuynnoEog13m+QUxab6znwFgL4Os8BPvNSVc95SxzzwbqZ7EHv+vZDIPvOfgC9E66azB17ygiw10ROr45asxV7t1jr3KHfxKg9RCQBI5rwOdp57J1JdF4slaLeKr5I+Bfe1SdPRd444HNgPrrOHfXCjT479HhncGPmkK92kEoF/ih4d5YQ7Ih3N1tCl4b9nI67nqIIdMcge/0iBA4pLjadfrPPVMZvrSvyNt9CS/Bey37GayAHO5t2R6/PfIeHj0wZMCCvi67sCG8ODkOvJjPhweNFF1rFFyBw8NQjGyYC2wn9dAgj0c5KdaVD1OT8uXNvIfASjvzxro4Su0CzdPXgXr7OfpFD3+eznqBz5jufRrV3UBe3BUF5kxuTEfLR3myR08NMiECRVTg0x4iqlBJjzBMHwBAMU6/IIOsV0AAAAASUVORK5CYII="/><span class="instok">Френч Коннекшн</span>','<img class="ib" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHcAAAARCAYAAADnlDPNAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAMQSURBVGhD7Za9rhpBDEbztLwMz8AT0FPflpKOio6GioaGZqND9uQay7OwmxARtJ9kLZ6xP//NjPjRzfhYzMP9YMzD/WDcDXez2XSr1ao7n8/9yv8B8iVv8p8C/VtiP3a73U3n+244nU79r2/cDZfEF4tFafjOIN/lctmt1+t+ZRzwp24Eniz2Y7vd3mz4vhM41OSZMXm42Dxzw7PNEPdUziHAeblceq0GNtRN/UMYGu5QXcR/lDP7QxyisvEQZoweLoVBhB3C78Ph0O9+B/I0YcON4ilT5xuLfYYTjsgZB0G+2ohoyxf71pDxz5wVquHmOPv9vt/5hdwHYqDb4+Px+Htfjq+vr9sewIe13D/92Y++cXajhktzIMCOpAiIfWyKCVAUPHKyTuGsozuIP+G0yaxFH+Lgo70x41Ai9DePKPiKPFyGgI4NhxF7dOoA2rPOmnkgxATs2Rs4+I0IOTMHOnDoCPGu1+ttHUx6lr0BVTLq2ligpzEPQjzDKSgSDpvc4gTwVgcmYupwW3lZK/7o8ZXCnrXYY2tnLe/LEe3NU+Q8xORnWcE+ErsuckPgRo/JjeWUY4iToeiH5P2Iyr9CrkXeVhzXItjDxh574zOH+9keYBNz1S9j1HB5OtincZ62TJz13JDcyCmccrQ4fbq4sSDvZzzaF9VwEfyjeFPtZ+vmUq8c2Yf9SgfYx1zlyCiHy7NCAVF4cvi6DxxMJM6B9OELSBLd5KZwytHitA5uBXDYsSER+hMDzizUDvgd4/pnxkPka2Fc7YlLDPNA0HPe6Pi7D6xFHWATa0GPcUU53EpI1JOGLqEisp4bkguawilHi5MiIx/rfivo3xLj5Fq4bfYMfr45Rvw3y572Div6myO6Byrbg1xLjGFu4G64JAtJJf4LYxicVG4Y0EdoL/CL/gA9PlVjOcEjTn5TqE2qOCLcr8Q4VS3AV81Yghyoja+5MRSGw7qgbupnLcfADz0CXT4BBxJzuxvujL8Ln2kGykBofr51r8Q83BfDm+qzye98w1+Febj/ADy31VP6WnTdT4741mv8l3TPAAAAAElFTkSuQmCC"/><span class="instok">Ламания Элегант</span>','<img class="ib" src="//farm1.staticflickr.com/612/21335475785_71fe84c2dc_o.jpg"/><span class="instok">Адилишик</span>','<img class="ib" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHsAAAARCAYAAAD9qNNDAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAOFSURBVGhD7ZYrsiJBEEVntWyGNbACPBqLxKFwGBQGg2HiPDjEJScL+tmBG5HR3VmZN39VBX+uX3wMvsP+IHyH/UF4GvZqtbouFot/ZL1e3y2ecTgcrsvl8jqfz38E2/1+f1+9gfXKh2y327vFMzrOzWZzX73hdDo9eMg5kTV0MdCxRoyK8/n88OVdkJM+l8vlrr3hFR8Y1Y9Qxyub2ndjdXVZ92hW4GnYGM9ms0ejFXSsJXa73Y/eNX0R1oT+HWdNjG855NQ2m3k8Hh92rOdgtEfqJgGZJ0OsMIeMp0/X5Hd81puiPXVow3dnB7+gHnS1LupPjhHaYZsEYCdL5E4E6nKwboAMyHtNAP6qp1H6ZtO0zbx48q2YA/nJwbO7EXJ9dBpd55aywdl0MZUvYY/TFn8kkQO076Nhswkzj25TgsnDzmQcalcca/WkpS9wgNlAriE4u2uIYi0YOGz84fEqt2jy4lmbYgxyNK/MVTBk7LRBMr6Yyie0rxtH3wp02L8btn0w78ov2mHzVEzE0wNGQTuYcMeZmwo9dqmjSL4Vfy95T064gO9exTU/4wIbP6rB9Vc2v+HzgGCfNQJ58FXcsNQk0NcY3ogePPvY/aRM/s3OU9wFHUH/yonkKTZ2NkKdYrwctoNFBye6Lj+bzVAAG4lvfDrksLtr8Td8DgTJQyPw0Vc73uUWXV3mKa+3W/UFb69xIKFBDNoR1n/jJF0bkP8D3IHu5GwGiROrXss5bBuZOZqf9sDaiMu730g9BXmN+6zX81S+/O3NfBKsIwDfkX1Xl7bmkHlVTBq2QTzdo12MHl3q67cwlqfGk4K+ohaZwwbGQMdatTdfRNv0yVsLZG5uorT5DZ9c3cEQ+go3MJKHp9blKc74Cnp7K9phczVCqOicp87Thg96RLu8ng2efF696PPEGF9OiqZJ8uIL6rD1ww5gl/bGy7xA/vk0D23lzlvI5k3ly2Fga/2KN4A+iZoHwAcdT2Dd9TYd/VFrh12FRLqd6cBT6inBt9og6HPziI6zxq/Dro2pTcEfqVcxMJ7NNx6nV+S17rU8hc88RlLzq3Aebir5eI5uV4GedTcUeBo2BDSySleUwIcdjGSDRMeHvAI8bASKGtmiNx4nim/z9Jsn4H3Eoy1ciO8VcmiPdEi+tO3kXX7Uk2vy8cw4HazFGOBp2F/83/gO+4PwHfbH4Hr9Cw+ELkbdp07CAAAAAElFTkSuQmCC"/><span class="instok">БСБГ Макс Азрия</span>','<img class="ib" src="//farm1.staticflickr.com/721/21373866201_65eea64848_o.jpg"/><span class="instok">ЛуАнн</span>','<img class="ib" src="//farm1.staticflickr.com/611/21372741291_d3e01f68fa_o.jpg"/><span class="instok">Томми Хилфигер Деним</span>','<img class="ib" src="//farm6.staticflickr.com/5643/21382269311_917b5d88d0_o.jpg"/><span class="instok">Харизмас</span>'];
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