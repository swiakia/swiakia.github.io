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
            var arImg = ['//farm1.staticflickr.com/704/21463467376_17b8c65b3a_n.jpg','//farm6.staticflickr.com/5822/21301891128_7584cb60a4_n.jpg','//farm6.staticflickr.com/5706/20868606203_b22ea43978_n.jpg','//farm1.staticflickr.com/637/21489713065_deaa398efb_n.jpg'];
        } else {
            var arImg = ['//farm1.staticflickr.com/704/21463467376_71555a938e_o.jpg','//farm6.staticflickr.com/5822/21301891128_7276f6fd15_o.jpg','//farm6.staticflickr.com/5706/20868606203_db55d40a69_o.jpg','//farm1.staticflickr.com/637/21489713065_0cc7ce90fb_o.jpg'];

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
            a.href = 'http://babyb1og.ru/g/3f2779c2d4404da6e1704e8640d77b/?i=5&ulp=http%3A%2F%2Fwww.lamoda.ru%2Fp%2FLO022EWDQT69%2F';
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
    var rImg = ['//farm1.staticflickr.com/625/21358496593_0563ddc503_n.jpg','//farm1.staticflickr.com/678/21494106720_7c6012c233_n.jpg','//farm6.staticflickr.com/5802/21463087345_8c152c90b3_n.jpg','//farm6.staticflickr.com/5660/21707680240_cf464ecf6a_n.jpg','//farm6.staticflickr.com/5644/21710296746_cf3b4aff02_n.jpg','//farm6.staticflickr.com/5705/21706887244_cc1620ab6a_n.jpg','//farm6.staticflickr.com/5779/22141161178_f933a251ff_n.jpg','//farm6.staticflickr.com/5624/21327767223_802fab4cc7_n.jpg','//farm1.staticflickr.com/757/21628910399_c03c776e47_n.jpg','//farm1.staticflickr.com/754/21695026189_b3a0fc7a78_n.jpg','//farm6.staticflickr.com/5725/22309292921_648ae34b91_n.jpg','//farm1.staticflickr.com/653/21017628453_415cb65e82_n.jpg','//farm1.staticflickr.com/574/21488907343_79617baa2e_n.jpg','//farm1.staticflickr.com/762/21591830751_3827373b82_n.jpg','//farm1.staticflickr.com/733/21203268570_50a15827ea_n.jpg','//farm6.staticflickr.com/5663/21190532904_81876da35a_n.jpg','//farm6.staticflickr.com/5685/21267561298_bb6f27b873_n.jpg','//farm6.staticflickr.com/5778/21183608574_0fcb80161e_n.jpg','//farm6.staticflickr.com/5827/21627288392_8188a8a287_n.jpg','//farm1.staticflickr.com/661/21603290849_5c4851641a_n.jpg'];
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
    var ru = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NTAgMzAwIj4NCjxwYXRoIGZpbGw9IiNmZmYiIGQ9Im0wLDBoNDUwdjEwMGgtNDUweiIvPg0KPHBhdGggZmlsbD0iIzAwZiIgZD0ibTAsMTAwaDQ1MHYxMDBoLTQ1MHoiLz4NCjxwYXRoIGZpbGw9IiNmMDAiIGQ9Im0wLDIwMGg0NTB2MTAwaC00NTB6Ii8+DQo8L3N2Zz4NCg==';var bg = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBoZWlnaHQ9IjYwMCIgdmlld0JveD0iMCAwIDUgMyI+DQo8cGF0aCBmaWxsPSIjZmZmIiBkPSJtMCwwaDV2M2gtNXoiLz4NCjxwYXRoIGZpbGw9IiMwMDk2NmUiIGQ9Im0wLDFoNXYyaC01eiIvPg0KPHBhdGggZmlsbD0iI2Q2MjYxMiIgZD0ibTAsMmg1djFoLTV6Ii8+DQo8L3N2Zz4NCg==';var cn = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjAwIDgwMCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPg0KPHBhdGggZmlsbD0iI2RlMjkxMCIgZD0ibTAsMGgxMjAwdjgwMGgtMTIwMHoiLz4NCjxwYXRoIGZpbGw9IiNmZmRlMDAiIGQ9Im0tMTYuNTc5Niw5OS42MDA3bDIuMzY4Ni04LjEwMzItNi45NTMtNC43ODgzIDguNDM4Ni0uMjUxNCAyLjQwNTMtOC4wOTI0IDIuODQ2Nyw3Ljk0NzkgOC40Mzk2LS4yMTMxLTYuNjc5Miw1LjE2MzQgMi44MTA2LDcuOTYwNy02Ljk3NDctNC43NTY3LTYuNzAyNSw1LjEzMzF6IiB0cmFuc2Zvcm09Im1hdHJpeCg5LjkzMzUyIC4yNzc0NyAtLjI3NzQ3IDkuOTMzNTIgMzI0LjI5MjUgLTY5NS4yNDE1KSIvPg0KPHBhdGggZmlsbD0iI2ZmZGUwMCIgaWQ9InN0YXIiIGQ9Im0zNjUuODU1MiwzMzIuNjg5NWwyOC4zMDY4LDExLjM3NTcgMTkuNjcyMi0yMy4zMTcxLTIuMDcxNiwzMC40MzY3IDI4LjI1NDksMTEuNTA0LTI5LjU4NzIsNy40MzUyLTIuMjA5NywzMC40MjY5LTE2LjIxNDItMjUuODQxNS0yOS42MjA2LDcuMzAwOSAxOS41NjYyLTIzLjQwNjEtMTYuMDk2OC0yNS45MTQ4eiIvPg0KPGcgZmlsbD0iI2ZmZGUwMCI+DQo8cGF0aCBkPSJtNTE5LjA3NzksMTc5LjMxMjlsLTMwLjA1MzQtNS4yNDE4LTE0LjM5NDUsMjYuODk3Ni00LjMwMTctMzAuMjAyMy0zMC4wMjkzLTUuMzc4MSAyNy4zOTQ4LTEzLjQyNDItNC4xNjQ3LTMwLjIyMTUgMjEuMjMyNiwyMS45MDU3IDI3LjQ1NTQtMTMuMjk5OC0xNC4yNzIzLDI2Ljk2MjcgMjEuMTMzMSwyMi4wMDE3eiIvPg0KPHBhdGggZD0ibTQ1NS4yNTkyLDMxNS45Nzk1bDkuMzczNC0yOS4wMzE0LTI0LjYzMjUtMTcuOTk3OCAzMC41MDctLjA1NjYgOS41MDUtMjguOTg4NiA5LjQ4MSwyOC45OTY0IDMwLjUwNywuMDgxOC0yNC42NDc0LDE3Ljk3NzQgOS4zNDkzLDI5LjAzOTItMjQuNzE0LTE3Ljg4NTgtMjQuNzI4OCwxNy44NjUzeiIvPg0KPC9nPg0KPHVzZSB4bGluazpocmVmPSIjc3RhciIgdHJhbnNmb3JtPSJtYXRyaXgoLjk5ODYzIC4wNTIzNCAtLjA1MjM0IC45OTg2MyAxOS40MDAwNSAtMzAwLjUzNjgxKSIvPg0KPC9zdmc+DQo=';
    var cImg = ['<img class="ic" alt="Россия" src="'+ru+'" /><span class="instok">Россия</span>','<img class="ic" alt="Россия" src="'+ru+'" /><span class="instok">Россия</span>','<img class="ic" alt="Болгария" src="'+bg+'" /><span class="instok">Болгария</span>','<img class="ic" alt="Китай" src="'+cn+'" /><span class="instok">Китай</span>','<img class="ic" alt="Китай" src="'+cn+'" /><span class="instok">Китай</span>','<img class="ic" alt="Китай" src="'+cn+'" /><span class="instok">Китай</span>','<img class="ic" alt="Китай" src="'+cn+'" /><span class="instok">Китай</span>','<img class="ic" alt="Китай" src="'+cn+'" /><span class="instok">Китай</span>',];

    for (var q = 0; q < cImg.length; q++) {
        var cQ = document.getElementById('c' + q);
        if (cQ != null)
            cQ.innerHTML = cImg[q];
    }
}

function preBrandImg() {
    var bImg = ['<img class="ib" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAARCAYAAABegLWFAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAEpSURBVEhL7ZQ9roNADIRzWi7DGTgBPTUtJR0VHQ0VDQ2Nn74VRsbPJGSVIkVGslib2WHw/jzki/Ezl4uTuaZppKqqf9G27c7Iw7IsSQf9d3Ayh0BRFFKW5Smo8S4X8zxnaYTmEFNs23YYpAMelnuFV+bWdU3hcdscYdF13WGa57Ol9+bIdQ411ffLHprjqaETh2HYWSLjOB48xoiSYzhCZI4cXeagwZiabcztPVfX9c6SNKY2TdNekcTTj3tcmbN8ukjtpTlLAL4z0U9oHuGOObSpvW1OJ2r3lMdSw7URgbo143Nw2xwthqyhndF91/d9ynUDU4dzdSg+as4HH/YnSfedXdLoqgEfMYc4L31EdxDgHaL2JF8BrjXvc64sahYnc9+Gn7k8iPwBbQp9zmhXaf0AAAAASUVORK5CYII="/><span class="instok">Би Ин</span>','<img class="ib" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGIAAAARCAYAAAAmE3lhAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAJySURBVFhH7ZcxbipBEET/abkMZ+AE5MSkhGREZCREJCQkaz3YZxXN8r0jW/Ja2pJaZrp7qqe7hkH+182YBGYhJoJZiIngrRDr9bpbrVbd8XjsPb8Pz3S5XHrPA/ixv4xBIQ6HQ7dYLO5G41PBcrm8n+l8PveeB/BjfxmDQnC7aNjG6w38acBfhzuEViHG8v4UqHW9XvtVG16EgMjGdrvdvfHNZtNHH6CgcYF4+GycWK6BvOJ0Ot3X1FD47XbbR19hbh1uK69nrZbPm77svc5GkIPPWrwiCjJmVuBFCIfP3yycgMAcQXF8ksuTxSoXe1jzFPJbNFQrYY39ft97nocjvuI1zhkxRIIXvyCOL/dRFx9m79QgBzHolb8ZHzMr8CIEpJiK+kxRUEhOA3zGKjmF3WeO3Il6c+oBE3ARx+RyTwuvQgj8xIeEwOzdffhysIKaiiWX3P+bFXgSgq80CRJlYYmB5EMmuUJUywFwW62hkZMHrOCM3Dr2cUm8kS28xoT9ZI/EzaMOvzfk+O1JIXyatOQaMyvwJIS3P0klxvzRlvw734h8UuStHGPRyuuABX7iDg8QZ02PfHbYXlaF8Cnyuaxcrpu+ERTCbrdb73nAW0BRIHneikquEFlMfiBHHphY3TMGrbzEzAd1DyDO2m8CxkU1197JYe3/WwqT9TMfuMfzgE8hfNscdsLD1Ga/IwRwj37X3LoWtPKyznz7wS/c52f3194RoNbKvWNmBT6FYNgE6rdBEMuNNdf9gliuQeUAPF1cAp4U97w7wzu08tazAtb4Ra5rfnIB4gxaoYl/lZ9x8PQ0zfg9zEJMBLMQk0DXfQCuP+c1tbNhHwAAAABJRU5ErkJggg=="/><span class="instok">Анна Чапман</span>','<img class="ib" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACsAAAARCAYAAABEvFULAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAFQSURBVEhL7ZQxboQwEEVzWi7DGTgBPTUtJR0VHQ0VDQ2No0f8Vx9DBEFCSaR90mgZ7/f4e7D5CP+It9mn2JitqioURbGLruui4ouyLNe4yjRNa522bePIPTZmKZhlWcjz/BXkRNM0URVe/11lHMddjTscmqW4oBvawFXopPMTs/M87+aLU7NayM2mneWZY8Ex4hk9tURqVjp+Rd/36xyfz5hzaJYzygIEBRnzM0pBQmgBtMxRHZlzs3pTvhm6qRp1Xa865cMwRNU3ZtNgor8ackKkOQswLzWr+q4FDLoeaBhj3qRDs9odkX4J4Mysd9JzAh2/3jGti074BsXpmT3irlk06pib0FHzxujtnHb2KbPKU3MyRg0uFXp58Uv2K2Z1oXwOR48cHcEzY87GLJfozCigcV2aA/myLDHb50drsQm6zReD55SN2b/O2+wzhPAJSUV1yW9y/pkAAAAASUVORK5CYII="/><span class="instok">Пинко</span>','<img class="ib" src="//farm1.staticflickr.com/781/21180091510_4600899471_o.jpg"/><span class="instok">Манго</span>','<img class="ib" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGcAAAARCAYAAADAOrIlAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAALWSURBVFhH7ZY9juJAEIX3tFyGM3ACcmJSQjIiMhIiEhISrz7Wn/RcamM8SCN2hie1THV3/b1X9syf7oO3xUecN8ZHnDfGQJzNZtOtVqvucrn0O++B9Xp9r6uu7Xbb3/heUA9cjQH+qM871X4WA3EIsFgsuvP53O+8B5bL5b0unrnYo+bvBrkf5YW/rA0bH0Sdg5fEeVVEJup6vfbWOBQjgZ8Ctd70Z2r7av0pDnXUHoj77OA84mC2OARjAiSG526360//vfLsnU6nfqe7f37YOxwOd/t4PA78pyaKO6wKY6Q4fDoytjkBdbJnPa071p8cYGeN2HDl3XpexcGud8jJnjVwt/I+WxzvQALNaisQongubAA48SwKxI/7WXiF97nr4j5+EgAg3dwMgLU5KOYi1n6/H9hOb4sDzjMPtnm4Zy32zB62PtWWI+IkB5kDzBLHoElkki3SrmJBCnb+MSdv+ldwho9Pf+cAAPYyjrnNJQmZW0GpC7Q4IGYSV/PcbrfB3pQ4NSdApMr7LHFsjmeiFus9EkIgv/30eKYPC5s1ljfjQ7g+rTpasSXF3JnHPWO1OCCOMUC1gfkAvpm32q0cLcwSB7I5n5pY3ybeMJ7ZiGQwPeTJNYYa3zeCxedLeK/GrYOhEGBKHJ7Y2UOtB+Re9am2A5tvDr/pK9EUB+IoNpeOFGBgkpooPxXA73AtAqLYIxciEoOY+amsyMaFn4YkzZzmozb8FJA+OGePfvItVEA5yBg1jz6c8Unzjj1MieOQY3PmP0isRFOc1qIxQGCLc7WIdbprQiCxFsQi7hi8U2G9DgYEu8d9nhICFKf2mYMFUe4Tg954ZhzrcXnXfyqmxAEK6sK/cjAQh+YI1FpMSALyadaJawG/sXP2mU6WTY3BGip88+qZtfFMKI51j9Xvmf61j7QhtDVYj3wENv3j3+JgIM5PR4rzP+DXicPn4yPOBy+i6/4Ct58MyS9xvToAAAAASUVORK5CYII="/><span class="instok">Лав Репаблик</span>','<img class="ib" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGcAAAARCAYAAADAOrIlAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAALWSURBVFhH7ZY9juJAEIX3tFyGM3ACcmJSQjIiMhIiEhISrz7Wn/RcamM8SCN2hie1THV3/b1X9syf7oO3xUecN8ZHnDfGQJzNZtOtVqvucrn0O++B9Xp9r6uu7Xbb3/heUA9cjQH+qM871X4WA3EIsFgsuvP53O+8B5bL5b0unrnYo+bvBrkf5YW/rA0bH0Sdg5fEeVVEJup6vfbWOBQjgZ8Ctd70Z2r7av0pDnXUHoj77OA84mC2OARjAiSG526360//vfLsnU6nfqe7f37YOxwOd/t4PA78pyaKO6wKY6Q4fDoytjkBdbJnPa071p8cYGeN2HDl3XpexcGud8jJnjVwt/I+WxzvQALNaisQongubAA48SwKxI/7WXiF97nr4j5+EgAg3dwMgLU5KOYi1n6/H9hOb4sDzjMPtnm4Zy32zB62PtWWI+IkB5kDzBLHoElkki3SrmJBCnb+MSdv+ldwho9Pf+cAAPYyjrnNJQmZW0GpC7Q4IGYSV/PcbrfB3pQ4NSdApMr7LHFsjmeiFus9EkIgv/30eKYPC5s1ljfjQ7g+rTpasSXF3JnHPWO1OCCOMUC1gfkAvpm32q0cLcwSB7I5n5pY3ybeMJ7ZiGQwPeTJNYYa3zeCxedLeK/GrYOhEGBKHJ7Y2UOtB+Re9am2A5tvDr/pK9EUB+IoNpeOFGBgkpooPxXA73AtAqLYIxciEoOY+amsyMaFn4YkzZzmozb8FJA+OGePfvItVEA5yBg1jz6c8Unzjj1MieOQY3PmP0isRFOc1qIxQGCLc7WIdbprQiCxFsQi7hi8U2G9DgYEu8d9nhICFKf2mYMFUe4Tg954ZhzrcXnXfyqmxAEK6sK/cjAQh+YI1FpMSALyadaJawG/sXP2mU6WTY3BGip88+qZtfFMKI51j9Xvmf61j7QhtDVYj3wENv3j3+JgIM5PR4rzP+DXicPn4yPOBy+i6/4Ct58MyS9xvToAAAAASUVORK5CYII="/><span class="instok">Лав Репаблик</span>','<img class="ib" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGcAAAARCAYAAADAOrIlAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAALWSURBVFhH7ZY9juJAEIX3tFyGM3ACcmJSQjIiMhIiEhISrz7Wn/RcamM8SCN2hie1THV3/b1X9syf7oO3xUecN8ZHnDfGQJzNZtOtVqvucrn0O++B9Xp9r6uu7Xbb3/heUA9cjQH+qM871X4WA3EIsFgsuvP53O+8B5bL5b0unrnYo+bvBrkf5YW/rA0bH0Sdg5fEeVVEJup6vfbWOBQjgZ8Ctd70Z2r7av0pDnXUHoj77OA84mC2OARjAiSG526360//vfLsnU6nfqe7f37YOxwOd/t4PA78pyaKO6wKY6Q4fDoytjkBdbJnPa071p8cYGeN2HDl3XpexcGud8jJnjVwt/I+WxzvQALNaisQongubAA48SwKxI/7WXiF97nr4j5+EgAg3dwMgLU5KOYi1n6/H9hOb4sDzjMPtnm4Zy32zB62PtWWI+IkB5kDzBLHoElkki3SrmJBCnb+MSdv+ldwho9Pf+cAAPYyjrnNJQmZW0GpC7Q4IGYSV/PcbrfB3pQ4NSdApMr7LHFsjmeiFus9EkIgv/30eKYPC5s1ljfjQ7g+rTpasSXF3JnHPWO1OCCOMUC1gfkAvpm32q0cLcwSB7I5n5pY3ybeMJ7ZiGQwPeTJNYYa3zeCxedLeK/GrYOhEGBKHJ7Y2UOtB+Re9am2A5tvDr/pK9EUB+IoNpeOFGBgkpooPxXA73AtAqLYIxciEoOY+amsyMaFn4YkzZzmozb8FJA+OGePfvItVEA5yBg1jz6c8Unzjj1MieOQY3PmP0isRFOc1qIxQGCLc7WIdbprQiCxFsQi7hi8U2G9DgYEu8d9nhICFKf2mYMFUe4Tg954ZhzrcXnXfyqmxAEK6sK/cjAQh+YI1FpMSALyadaJawG/sXP2mU6WTY3BGip88+qZtfFMKI51j9Xvmf61j7QhtDVYj3wENv3j3+JgIM5PR4rzP+DXicPn4yPOBy+i6/4Ct58MyS9xvToAAAAASUVORK5CYII="/><span class="instok">Лав Репаблик</span>','<img class="ib" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGcAAAARCAYAAADAOrIlAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAALWSURBVFhH7ZY9juJAEIX3tFyGM3ACcmJSQjIiMhIiEhISrz7Wn/RcamM8SCN2hie1THV3/b1X9syf7oO3xUecN8ZHnDfGQJzNZtOtVqvucrn0O++B9Xp9r6uu7Xbb3/heUA9cjQH+qM871X4WA3EIsFgsuvP53O+8B5bL5b0unrnYo+bvBrkf5YW/rA0bH0Sdg5fEeVVEJup6vfbWOBQjgZ8Ctd70Z2r7av0pDnXUHoj77OA84mC2OARjAiSG526360//vfLsnU6nfqe7f37YOxwOd/t4PA78pyaKO6wKY6Q4fDoytjkBdbJnPa071p8cYGeN2HDl3XpexcGud8jJnjVwt/I+WxzvQALNaisQongubAA48SwKxI/7WXiF97nr4j5+EgAg3dwMgLU5KOYi1n6/H9hOb4sDzjMPtnm4Zy32zB62PtWWI+IkB5kDzBLHoElkki3SrmJBCnb+MSdv+ldwho9Pf+cAAPYyjrnNJQmZW0GpC7Q4IGYSV/PcbrfB3pQ4NSdApMr7LHFsjmeiFus9EkIgv/30eKYPC5s1ljfjQ7g+rTpasSXF3JnHPWO1OCCOMUC1gfkAvpm32q0cLcwSB7I5n5pY3ybeMJ7ZiGQwPeTJNYYa3zeCxedLeK/GrYOhEGBKHJ7Y2UOtB+Re9am2A5tvDr/pK9EUB+IoNpeOFGBgkpooPxXA73AtAqLYIxciEoOY+amsyMaFn4YkzZzmozb8FJA+OGePfvItVEA5yBg1jz6c8Unzjj1MieOQY3PmP0isRFOc1qIxQGCLc7WIdbprQiCxFsQi7hi8U2G9DgYEu8d9nhICFKf2mYMFUe4Tg954ZhzrcXnXfyqmxAEK6sK/cjAQh+YI1FpMSALyadaJawG/sXP2mU6WTY3BGip88+qZtfFMKI51j9Xvmf61j7QhtDVYj3wENv3j3+JgIM5PR4rzP+DXicPn4yPOBy+i6/4Ct58MyS9xvToAAAAASUVORK5CYII="/><span class="instok">Лав Репаблик</span>'];
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