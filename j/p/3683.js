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
            var arImg = ['//farm1.staticflickr.com/691/20868415263_cf19aa95d4_n.jpg','//farm1.staticflickr.com/641/21489520635_e2eb25bbbb_n.jpg','//farm1.staticflickr.com/698/21463274446_506c0ca652_n.jpg','//farm6.staticflickr.com/5799/21301698258_9116163864_n.jpg','//farm6.staticflickr.com/5630/21301459020_a2b7179431_n.jpg','//farm1.staticflickr.com/597/21463270906_9d8dd40f35_n.jpg','//farm6.staticflickr.com/5639/20866785264_7e445c099c_n.jpg'];
        } else {
            var arImg = ['//farm1.staticflickr.com/691/20868415263_4e846a41a7_o.jpg','//farm1.staticflickr.com/641/21489520635_7a2554661d_o.jpg','//farm1.staticflickr.com/698/21463274446_8f17c3d997_o.jpg','//farm6.staticflickr.com/5799/21301698258_e7c22a3e0b_o.jpg','//farm6.staticflickr.com/5630/21301459020_e910be9c7b_o.jpg','//farm1.staticflickr.com/597/21463270906_02edf1bf5c_o.jpg','//farm6.staticflickr.com/5639/20866785264_85d7964b98_o.jpg'];

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
            a.href = 'http://babyb1og.ru/g/3f2779c2d4404da6e1704e8640d77b/?i=5&ulp=http%3A%2F%2Fwww.lamoda.ru%2Fp%2FMO151AWJW148%2F';
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
    var rImg = ['//farm1.staticflickr.com/721/21615157212_ea531a0ced_n.jpg','//farm1.staticflickr.com/703/21722781522_7bfa0e451f_n.jpg','//farm6.staticflickr.com/5791/22133254610_1ef7587a6e_n.jpg','//farm1.staticflickr.com/597/21525557456_d491e3e859_n.jpg','//farm6.staticflickr.com/5800/21746831732_3ca3514aff_n.jpg','//farm1.staticflickr.com/665/21382857242_df658d161e_n.jpg','//farm1.staticflickr.com/768/21372211731_6e249758eb_n.jpg','//farm1.staticflickr.com/757/21795795752_ef2f3e0cec_n.jpg','//farm6.staticflickr.com/5643/21911298466_b080af676f_n.jpg','//farm1.staticflickr.com/714/21022136914_e62098ba64_n.jpg','//farm1.staticflickr.com/735/21400336309_0315cd96aa_n.jpg','//farm6.staticflickr.com/5656/21950155371_7fa3672677_n.jpg','//farm1.staticflickr.com/701/21698641732_1da782edd8_n.jpg','//farm1.staticflickr.com/730/21752932880_13673b94d9_n.jpg','//farm6.staticflickr.com/5681/20771263174_b5dd5727e7_n.jpg','//farm1.staticflickr.com/575/20746744583_285cd10a7f_n.jpg','//farm6.staticflickr.com/5660/21746659941_5456c01566_n.jpg','//farm6.staticflickr.com/5807/21297561584_ab0c867079_n.jpg','//farm6.staticflickr.com/5702/21398982411_6bb506c831_n.jpg','//farm6.staticflickr.com/5741/22088362886_b6769412e1_n.jpg'];
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
    var ro = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NTAgMzAwIj4NCjxwYXRoIGZpbGw9IiMwMDJiN2YiIGQ9Im0wLDBoMTUwdjMwMGgtMTUweiIvPg0KPHBhdGggZmlsbD0iI2ZjZDExNiIgZD0ibTE1MCwwaDE1MHYzMDBoLTE1MHoiLz4NCjxwYXRoIGZpbGw9IiNjZTExMjYiIGQ9Im0zMDAsMGgxNTB2MzAwaC0xNTB6Ii8+DQo8L3N2Zz4NCg==';var cn = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjAwIDgwMCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPg0KPHBhdGggZmlsbD0iI2RlMjkxMCIgZD0ibTAsMGgxMjAwdjgwMGgtMTIwMHoiLz4NCjxwYXRoIGZpbGw9IiNmZmRlMDAiIGQ9Im0tMTYuNTc5Niw5OS42MDA3bDIuMzY4Ni04LjEwMzItNi45NTMtNC43ODgzIDguNDM4Ni0uMjUxNCAyLjQwNTMtOC4wOTI0IDIuODQ2Nyw3Ljk0NzkgOC40Mzk2LS4yMTMxLTYuNjc5Miw1LjE2MzQgMi44MTA2LDcuOTYwNy02Ljk3NDctNC43NTY3LTYuNzAyNSw1LjEzMzF6IiB0cmFuc2Zvcm09Im1hdHJpeCg5LjkzMzUyIC4yNzc0NyAtLjI3NzQ3IDkuOTMzNTIgMzI0LjI5MjUgLTY5NS4yNDE1KSIvPg0KPHBhdGggZmlsbD0iI2ZmZGUwMCIgaWQ9InN0YXIiIGQ9Im0zNjUuODU1MiwzMzIuNjg5NWwyOC4zMDY4LDExLjM3NTcgMTkuNjcyMi0yMy4zMTcxLTIuMDcxNiwzMC40MzY3IDI4LjI1NDksMTEuNTA0LTI5LjU4NzIsNy40MzUyLTIuMjA5NywzMC40MjY5LTE2LjIxNDItMjUuODQxNS0yOS42MjA2LDcuMzAwOSAxOS41NjYyLTIzLjQwNjEtMTYuMDk2OC0yNS45MTQ4eiIvPg0KPGcgZmlsbD0iI2ZmZGUwMCI+DQo8cGF0aCBkPSJtNTE5LjA3NzksMTc5LjMxMjlsLTMwLjA1MzQtNS4yNDE4LTE0LjM5NDUsMjYuODk3Ni00LjMwMTctMzAuMjAyMy0zMC4wMjkzLTUuMzc4MSAyNy4zOTQ4LTEzLjQyNDItNC4xNjQ3LTMwLjIyMTUgMjEuMjMyNiwyMS45MDU3IDI3LjQ1NTQtMTMuMjk5OC0xNC4yNzIzLDI2Ljk2MjcgMjEuMTMzMSwyMi4wMDE3eiIvPg0KPHBhdGggZD0ibTQ1NS4yNTkyLDMxNS45Nzk1bDkuMzczNC0yOS4wMzE0LTI0LjYzMjUtMTcuOTk3OCAzMC41MDctLjA1NjYgOS41MDUtMjguOTg4NiA5LjQ4MSwyOC45OTY0IDMwLjUwNywuMDgxOC0yNC42NDc0LDE3Ljk3NzQgOS4zNDkzLDI5LjAzOTItMjQuNzE0LTE3Ljg4NTgtMjQuNzI4OCwxNy44NjUzeiIvPg0KPC9nPg0KPHVzZSB4bGluazpocmVmPSIjc3RhciIgdHJhbnNmb3JtPSJtYXRyaXgoLjk5ODYzIC4wNTIzNCAtLjA1MjM0IC45OTg2MyAxOS40MDAwNSAtMzAwLjUzNjgxKSIvPg0KPC9zdmc+DQo=';var it = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBoZWlnaHQ9IjEwMDAiIHZpZXdCb3g9IjAgMCAzIDIiPg0KPHBhdGggZmlsbD0iIzAwOTI0NiIgZD0ibTAsMGgxdjJoLTF6Ii8+DQo8cGF0aCBmaWxsPSIjZmZmIiBkPSJtMSwwaDF2MmgtMXoiLz4NCjxwYXRoIGZpbGw9IiNjZTJiMzciIGQ9Im0yLDBoMXYyaC0xeiIvPg0KPC9zdmc+DQo=';var ru = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NTAgMzAwIj4NCjxwYXRoIGZpbGw9IiNmZmYiIGQ9Im0wLDBoNDUwdjEwMGgtNDUweiIvPg0KPHBhdGggZmlsbD0iIzAwZiIgZD0ibTAsMTAwaDQ1MHYxMDBoLTQ1MHoiLz4NCjxwYXRoIGZpbGw9IiNmMDAiIGQ9Im0wLDIwMGg0NTB2MTAwaC00NTB6Ii8+DQo8L3N2Zz4NCg==';var vn = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA5MDAgNjAwIj4NCjxwYXRoIGZpbGw9IiNkYTI1MWQiIGQ9Im0wLDBoOTAwdjYwMGgtOTAweiIvPg0KPHBhdGggZmlsbD0iI2ZmMCIgZD0ibTQ5NC44NSwyMzcuNTEyaDE0NS4xNWwtMTE3LjQyLDg0Ljk4NSA0NC44NSwxMzcuNTAzLTExNy40My04NC45ODQtMTE3LjQzLDg0Ljk4NCA0NC44Ni0xMzcuNTAzLTExNy40My04NC45ODVoMTQ1LjE1bDQ0Ljg1LTEzNy41MTIgNDQuODUsMTM3LjUxMnoiLz4NCjwvc3ZnPg0K';
    var cImg = ['<img class="ic" alt="Румыния" src="'+ro+'" /><span class="instok">Румыния</span>','<img class="ic" alt="Китай" src="'+cn+'" /><span class="instok">Китай</span>','<img class="ic" alt="Италия" src="'+it+'" /><span class="instok">Италия</span>','<img class="ic" alt="Россия" src="'+ru+'" /><span class="instok">Россия</span>','<img class="ic" alt="Китай" src="'+cn+'" /><span class="instok">Китай</span>','<img class="ic" alt="Китай" src="'+cn+'" /><span class="instok">Китай</span>','<img class="ic" alt="Вьетнам" src="'+vn+'" /><span class="instok">Вьетнам</span>','<img class="ic" alt="Китай" src="'+cn+'" /><span class="instok">Китай</span>',];

    for (var q = 0; q < cImg.length; q++) {
        var cQ = document.getElementById('c' + q);
        if (cQ != null)
            cQ.innerHTML = cImg[q];
    }
}

function preBrandImg() {
    var bImg = ['<img class="ib" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG0AAAARCAYAAADXGCLsAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAALFSURBVFhH7ZY9juJAEIX3tFyGM3ACcmJSQjIiMhIiEhISrz7Gn/QotbHZWY3Gkp/UMt1dP6/qlWX+dAtmh0W0GWIRbYZ4EW2323Wbzaa73W79ye/Adrt98uKZOB6Pz3MW3H8K9Gcs5xSbf8WLaCRZrVbd9XrtT34H1uv1kxfrdDr1p19ieg73nwL9GcuJDbzroP0PfEu074rLNN7v9343jBQtJ5dz74Ya+I4jucdqaHHEJ3NOrSOB/TufdzE/Fo1gTI/N4nk4HPrbr+nn7HK59Cddt9/vn2e+Jefz+cV/bBqxYcGPJ4AH/r5tKdoYR1DvKwe45j3x7UuKZn5scqCwybju6YV1VB8AT86TF/UkPhZNG5KRwL1NQSzvhQQB0+OexuCHfW1aQnvFJ4Z+fNd4wkOMcSSOvtSKHXEZJmANlaM5FM2YOYT2Tpvqg92QD2dpI0/2iY9Es5hscIogcl9FtMkQEuStxBLGsyj/gHBWmzOFI1y0IVad5BRVIJ59qTmBPkM2U3y4Y08NQq7J5SPRnDieiWwI0I5CTWpjvNOHxZ41lFe7x+PxfNJsnvCtzZjCERGt1WUsMNaHmhOYV59qM8UnOYpWPR+Jhgjc+9aImszJzuYKSTBl5Mk1hIwvRwvBj9/mmMoRMEjEgGfGaE03v30Dak5gXdZRbab4yJH+idZb3xQNQwLmkjBBDUIyC8QnYSNqQhrFGbkgRwxiYj8EiwEWwcK31Ywxjg4TAgM5GEPh2XPn90cOrZxVgGozxcd9K28K2RSttQgIKIggeddquN8WC03YeAmxbGAL2oAat9WMMY74eG9sls0DCu3iPkXm7J0A1WaKD8hhZ2Ve8SIabwEBWovvSYLmkbR+xBP4Dd1zzpvAyilqQQ6ixh3KM8bRe54tyJGmVY41J/1JjmCMZ8sHZN4WXkRbMA8sos0Qi2izQ9f9BbzEhmmQOkGMAAAAAElFTkSuQmCC"/><span class="instok">Лав Москино</span>','<img class="ib" src="//farm1.staticflickr.com/606/21180406079_4a25ee8621_o.jpg"/><span class="instok">Кеддо</span>','<img class="ib" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAARCAYAAACmYE5yAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAFiSURBVEhL7ZQxjoMwEEX3tFyGM3ACempaSjoqOhoqGhoar57FX41HxIEorBQpXxol/h7PPE8IP+HD9AW+Wwlw0zShqqqwLMvuhDAMQ/TKsoxR13Wyj/CI/1ACTFOg5nmO667rQlEU0QOa0Hpd15iDdJl3if7btu2rVNlHQpO1h/kVgOYykgXmIv4XuCJgfX2r7IQ1USAFAbz2JQGTxydnOCuRj28fG4BsL+kSsABVZBzHPwBCUNM0xX1JOexxVnXUVBD2EuzhqRdrom3b6HM5eVZZYMRk7eQUXEZij5C4EDlqdgbY11fYuugUsCR4cmxzDyzAK8B8EryV8Jm0PKuHwMB5EMQeOdZ/BfhoOMif9cpOWGs9t4T1pLPA5PCnpQ7fbS+JQdGj7/vdSZUF1mE8G3hWz4CR6iiXPxVrD/xMCTCARwXwaM6tH+17n7V/+fN8UoN39dHr8YwS4E/QF/hehfAL1OHB71kSlh0AAAAASUVORK5CYII="/><span class="instok">Ишу</span>','<img class="ib" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAAARCAYAAABpTnqxAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAIgSURBVFhH7ZY7cgIxEER9Wi7DGTgBOTEpIRkRGQkRCQnJut56n907SGDH3q6aMhrNt6XR+mNYMGIhYsJCxIQnIk6n07DZbIb1ej3KdrsdbrfbtDsHemyR+/0+aX+w2+3GPWIm1Bs346Ts9/vh8XiMNkLfKuh7depDvB5mRBwOh2G1Wo0EmMB1r1H2kVaS9M+G1F+v13HNX+N4AMgr37RL21on69zvYUYESTDOxDYLSRXYvkpi0QhxRI8I9Alzv/IV6o/H46T5Amv01ln3xRMRJvaaQUpNCrju2jI+/K4jYDyLuFwuM/07IjzNJLn6CkmrjWKP//l8buYQMyIwtmiE3ySwgYTNsycp6BIWzdjw1yJqMz0igER45TMmtxSRhLQD1IbeuvRt9fP0WHITCJyEIJAkWiflOgvJhiWOwv9KRNrqaz5+I8Svj6UEeVMdE/QVTSKEpOCcRXrCFIIesah8NC2aJpI8bX9LBCJqTNet5syDjcI644lvImi6JgUWmXoTaK9Uuywa+FVS3hHRmusakzfM3HkI+UhWQV/fku5jyRwhqQPOXS0aaOtVrEUDdamXCIp07mnKonMsWzElDHtvtHbpC1rkghkRBMlClXRy1usXAngK9XHKoiUy9RJRhcZaXwH2MibIEaYP/VuQ4Hw0n94IQBJOhSJqQtZVl8h9CmrZtvT6pbTQiwn085OPbQvGyP+XmkT8RyxETFiIGDEMnwFutfONoyhcAAAAAElFTkSuQmCC"/><span class="instok">САНДРА</span>','<img class="ib" src="//farm1.staticflickr.com/737/22407776846_3339b6be44_o.jpg"/><span class="instok">Хантер</span>','<img class="ib" src="//farm1.staticflickr.com/628/21367129516_9a7d9a9423_o.jpg"/><span class="instok">Мир Галош</span>','<img class="ib" src="//farm6.staticflickr.com/5649/21371612231_10a20784e4_o.jpg"/><span class="instok">Лакост</span>','<img class="ib" src="//farm1.staticflickr.com/606/21180406079_4a25ee8621_o.jpg"/><span class="instok">Кеддо</span>'];
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