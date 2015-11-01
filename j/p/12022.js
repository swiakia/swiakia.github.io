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
            var arImg = ['//farm1.staticflickr.com/645/21179364349_5f92637a0c_n.jpg','//farm1.staticflickr.com/576/21179361329_1e0e23b137_n.jpg','//farm6.staticflickr.com/5768/21178393528_49d740f9da_n.jpg','//farm1.staticflickr.com/654/21178163750_4c8180b4d6_n.jpg'];
        } else {
            var arImg = ['//farm1.staticflickr.com/645/21179364349_6fa64d4866_o.jpg','//farm1.staticflickr.com/576/21179361329_e75d7a1e50_o.jpg','//farm6.staticflickr.com/5768/21178393528_3ddc1e5ecc_o.jpg','//farm1.staticflickr.com/654/21178163750_12ace1a300_o.jpg'];

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
            a.href = 'http://кликай-тут.рф/wiakia/12022.html';
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
    var rImg = ['//farm6.staticflickr.com/5630/21430919899_7e19d9b337_n.jpg','//farm6.staticflickr.com/5773/21589382761_cde2a845ed_n.jpg','//farm1.staticflickr.com/629/20781623313_fe6c56158e_n.jpg','//farm6.staticflickr.com/5658/21258568053_ca7777f96c_n.jpg','//farm6.staticflickr.com/5672/21691913950_b9ff9857f5_n.jpg','//farm6.staticflickr.com/5701/22127148172_6e6a28852e_n.jpg','//farm1.staticflickr.com/718/21521189724_d9be8c941d_n.jpg','//farm1.staticflickr.com/764/21439278088_86df47255c_n.jpg','//farm6.staticflickr.com/5665/21693302409_b209275c22_n.jpg','//farm6.staticflickr.com/5688/21491706923_0468a03f31_n.jpg','//farm6.staticflickr.com/5668/21446237252_94b20544db_n.jpg','//farm6.staticflickr.com/5815/21792079440_5b6e845b14_n.jpg','//farm6.staticflickr.com/5684/21356514294_60be80ffee_n.jpg','//farm1.staticflickr.com/685/21624430388_3d6fb64a2b_n.jpg','//farm1.staticflickr.com/628/21788176105_22b78abcdb_n.jpg','//farm6.staticflickr.com/5813/21617618289_cc15a308f2_n.jpg','//farm6.staticflickr.com/5627/22134938812_a27ff7255f_n.jpg','//farm6.staticflickr.com/5810/21295681874_dc15281c2b_n.jpg','//farm6.staticflickr.com/5677/21886586875_ed18d0b344_n.jpg','//farm6.staticflickr.com/5784/21980501231_9f1a20aa49_n.jpg'];
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
    var cn = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjAwIDgwMCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPg0KPHBhdGggZmlsbD0iI2RlMjkxMCIgZD0ibTAsMGgxMjAwdjgwMGgtMTIwMHoiLz4NCjxwYXRoIGZpbGw9IiNmZmRlMDAiIGQ9Im0tMTYuNTc5Niw5OS42MDA3bDIuMzY4Ni04LjEwMzItNi45NTMtNC43ODgzIDguNDM4Ni0uMjUxNCAyLjQwNTMtOC4wOTI0IDIuODQ2Nyw3Ljk0NzkgOC40Mzk2LS4yMTMxLTYuNjc5Miw1LjE2MzQgMi44MTA2LDcuOTYwNy02Ljk3NDctNC43NTY3LTYuNzAyNSw1LjEzMzF6IiB0cmFuc2Zvcm09Im1hdHJpeCg5LjkzMzUyIC4yNzc0NyAtLjI3NzQ3IDkuOTMzNTIgMzI0LjI5MjUgLTY5NS4yNDE1KSIvPg0KPHBhdGggZmlsbD0iI2ZmZGUwMCIgaWQ9InN0YXIiIGQ9Im0zNjUuODU1MiwzMzIuNjg5NWwyOC4zMDY4LDExLjM3NTcgMTkuNjcyMi0yMy4zMTcxLTIuMDcxNiwzMC40MzY3IDI4LjI1NDksMTEuNTA0LTI5LjU4NzIsNy40MzUyLTIuMjA5NywzMC40MjY5LTE2LjIxNDItMjUuODQxNS0yOS42MjA2LDcuMzAwOSAxOS41NjYyLTIzLjQwNjEtMTYuMDk2OC0yNS45MTQ4eiIvPg0KPGcgZmlsbD0iI2ZmZGUwMCI+DQo8cGF0aCBkPSJtNTE5LjA3NzksMTc5LjMxMjlsLTMwLjA1MzQtNS4yNDE4LTE0LjM5NDUsMjYuODk3Ni00LjMwMTctMzAuMjAyMy0zMC4wMjkzLTUuMzc4MSAyNy4zOTQ4LTEzLjQyNDItNC4xNjQ3LTMwLjIyMTUgMjEuMjMyNiwyMS45MDU3IDI3LjQ1NTQtMTMuMjk5OC0xNC4yNzIzLDI2Ljk2MjcgMjEuMTMzMSwyMi4wMDE3eiIvPg0KPHBhdGggZD0ibTQ1NS4yNTkyLDMxNS45Nzk1bDkuMzczNC0yOS4wMzE0LTI0LjYzMjUtMTcuOTk3OCAzMC41MDctLjA1NjYgOS41MDUtMjguOTg4NiA5LjQ4MSwyOC45OTY0IDMwLjUwNywuMDgxOC0yNC42NDc0LDE3Ljk3NzQgOS4zNDkzLDI5LjAzOTItMjQuNzE0LTE3Ljg4NTgtMjQuNzI4OCwxNy44NjUzeiIvPg0KPC9nPg0KPHVzZSB4bGluazpocmVmPSIjc3RhciIgdHJhbnNmb3JtPSJtYXRyaXgoLjk5ODYzIC4wNTIzNCAtLjA1MjM0IC45OTg2MyAxOS40MDAwNSAtMzAwLjUzNjgxKSIvPg0KPC9zdmc+DQo=';var tn = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pg0KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4NCjxzdmcgdmVyc2lvbj0iMS4xIiBiYXNlUHJvZmlsZT0iZnVsbCIgeG1sbnM6ZXY9Imh0dHA6Ly93d3cudzMub3JnLzIwMDEveG1sLWV2ZW50cyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQgbWVldCIgem9vbUFuZFBhbj0ibWFnbmlmeSINCiAgIGlkPSJGbGFnIG9mIFR1bmlzaWEiDQogICB2aWV3Qm94PSItNjAgLTQwIDEyMCA4MCINCiAgIHdpZHRoPSIxMjAwIg0KICAgaGVpZ2h0PSI4MDAiPg0KICAgDQoNCiAgIDxnIGZpbGw9IiNlNzAwMTMiPg0KICAgICAgPHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgeD0iLTUwJSIgeT0iLTUwJSIvPg0KICAgICAgPGNpcmNsZSByPSIyMCIgZmlsbD0id2hpdGUiLz4NCiAgICAgIDxjaXJjbGUgcj0iMTUiLz4NCiAgICAgIDxjaXJjbGUgY3g9IjQiIHI9IjEyIiBmaWxsPSJ3aGl0ZSIvPiAgIA0KICAgICAgPGcgaWQ9InN0YXIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQpIHJvdGF0ZSgtOTApIHNjYWxlKDkpIj4NCiAgICAgICAgIDxnIGlkPSJjb25lIj4NCiAgICAgICAgICAgIDxwb2x5bGluZSBpZD0idHJpYW5nbGUiIHBvaW50cz0iMCwwIDAsMSAuNSwxIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLC0xKSByb3RhdGUoMTgpIi8+DQogICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9IiN0cmlhbmdsZSIgdHJhbnNmb3JtPSJzY2FsZSgtMSwxKSIvPg0KICAgICAgICAgPC9nPg0KICAgICAgICAgPHVzZSB4bGluazpocmVmPSIjY29uZSIgdHJhbnNmb3JtPSJyb3RhdGUoNzIpIi8+DQogICAgICAgICA8dXNlIHhsaW5rOmhyZWY9IiNjb25lIiB0cmFuc2Zvcm09InJvdGF0ZSgtNzIpIi8+DQogICAgICAgICA8dXNlIHhsaW5rOmhyZWY9IiNjb25lIiB0cmFuc2Zvcm09InJvdGF0ZSgxNDQpIi8+DQogICAgICAgICA8dXNlIHhsaW5rOmhyZWY9IiNjb25lIiB0cmFuc2Zvcm09InJvdGF0ZSgtMTQ0KSIvPg0KICAgICAgPC9nPg0KICAgPC9nPg0KPC9zdmc+DQo=';var it = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBoZWlnaHQ9IjEwMDAiIHZpZXdCb3g9IjAgMCAzIDIiPg0KPHBhdGggZmlsbD0iIzAwOTI0NiIgZD0ibTAsMGgxdjJoLTF6Ii8+DQo8cGF0aCBmaWxsPSIjZmZmIiBkPSJtMSwwaDF2MmgtMXoiLz4NCjxwYXRoIGZpbGw9IiNjZTJiMzciIGQ9Im0yLDBoMXYyaC0xeiIvPg0KPC9zdmc+DQo=';var ro = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NTAgMzAwIj4NCjxwYXRoIGZpbGw9IiMwMDJiN2YiIGQ9Im0wLDBoMTUwdjMwMGgtMTUweiIvPg0KPHBhdGggZmlsbD0iI2ZjZDExNiIgZD0ibTE1MCwwaDE1MHYzMDBoLTE1MHoiLz4NCjxwYXRoIGZpbGw9IiNjZTExMjYiIGQ9Im0zMDAsMGgxNTB2MzAwaC0xNTB6Ii8+DQo8L3N2Zz4NCg==';
    var cImg = ['<img class="ic" alt="Китай" src="'+cn+'" /><span class="instok">Китай</span>','<img class="ic" alt="Китай" src="'+cn+'" /><span class="instok">Китай</span>','<img class="ic" alt="Китай" src="'+cn+'" /><span class="instok">Китай</span>','<img class="ic" alt="Тунис" src="'+tn+'" /><span class="instok">Тунис</span>','<img class="ic" alt="Китай" src="'+cn+'" /><span class="instok">Китай</span>','<img class="ic" alt="Италия" src="'+it+'" /><span class="instok">Италия</span>','<img class="ic" alt="Китай" src="'+cn+'" /><span class="instok">Китай</span>','<img class="ic" alt="Румыния" src="'+ro+'" /><span class="instok">Румыния</span>',];

    for (var q = 0; q < cImg.length; q++) {
        var cQ = document.getElementById('c' + q);
        if (cQ != null)
            cQ.innerHTML = cImg[q];
    }
}

function preBrandImg() {
    var bImg = ['<img class="ib" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHQAAAARCAYAAAAMo4jOAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAM1SURBVFhH7ZU7juJAFEVntWyGNbACcmJSQjIiMhIiEhISj47HB12eyjZSq2d6kK9Uot7/W+ZXt+CjsAz0w7AM9MPwMtDdbtdtNpv+XC6Xgdt1t9vtyd9utwP3+0CMvxHnHdAHclmv1/2hB4fDYZD+PLwMlGRXq1V/GK44Ho9PPkV9N2zev8Z+v3/W7UKTF/RPWbiK0YFmQ0m+xRe84Ov1OlBtoFNxv9+b/DEQ4x39KZ13Y/IyrTe/VuTgUOdqHsOUHfl9Rd4cqJ8YjAF3t5MjKNTiLJ6tFvrhtesXkFBuO7+n06mXAWiO4BOnrvrn83mQ/tHHN3HUw38C/YzJPX1UmHPWI1iIXArqMQdhztn8rIPf6tt+KU9/YE4OmgMlML80mYS4ExwnHGGD0KM5LbnBsbeB0MbBVrtcIA6Axx1fLJCff2iBHB5DcFn0D/QBjzyysfn6EvrIgTBEaM/j8ej53NHNnOyh9tSuDncXxhzJC5r6sHE57dmcXDQH6stjA0xMHifhEAiCDF2LSH+CO7zcLpLSBkzFQbfKK22M2ixpwCLVPBKtgcrz6A8daOTCvmlPHOjsBTlr44DRY2j1b2FOLpoDJQnuBrRZtXE0V7kni9BfBrfQbG5FjYNujZFy+cIGGyPrEuoga8EB5F8BjcSnMv23fCHLmOZgrhxpwMKq44HWfk4uRgfqVmsITAT4GeM4sLSXVl+0XgZbC99PWMZRnw31laYcVJr42NhwtzuH0/pSJIxr7QmHNTXQVi+g8QsvT4Je4telqfHn5KMDtWCOiWfj0EmH0Mi0B8iy0SAXwU+tcV0M5cDmsWDARqff1AfmZt7Wgk6NCT0GdfglLn7870r/xoPPUqKnjr3gdUNjD/CHjnUxIGj4ADtoYoM5uRgdKMCg0hyhvnxpClKe+sJi0PVYKNAfcAEyTspBpckXfRsOaBw6xuNuM6fgS8iDbeYLai+0s3dAnnnw6xI7oPTB0X5OLl4GivNU4D5FA4bD9tF4thO5n87qL4G+thYlahx00XM75/IE0OYhMib3d0E87FiQGifR6kUFPPxYSwWPAbmPomJO/jLQBf8/loF+GJaBfhS67jejXysdB0q6FwAAAABJRU5ErkJggg=="/><span class="instok">Марчиано Гус</span>','<img class="ib" src="//farm1.staticflickr.com/738/21178387178_68418ff003_o.jpg"/><span class="instok">Литл Мистресс</span>','<img class="ib" src="//farm6.staticflickr.com/5657/21341326016_a619a57021_o.jpg"/><span class="instok">Села</span>','<img class="ib" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG0AAAARCAYAAADXGCLsAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAALFSURBVFhH7ZY9juJAEIX3tFyGM3ACcmJSQjIiMhIiEhISrz7Gn/QotbHZWY3Gkp/UMt1dP6/qlWX+dAtmh0W0GWIRbYZ4EW2323Wbzaa73W79ye/Adrt98uKZOB6Pz3MW3H8K9Gcs5xSbf8WLaCRZrVbd9XrtT34H1uv1kxfrdDr1p19ieg73nwL9GcuJDbzroP0PfEu074rLNN7v9343jBQtJ5dz74Ya+I4jucdqaHHEJ3NOrSOB/TufdzE/Fo1gTI/N4nk4HPrbr+nn7HK59Cddt9/vn2e+Jefz+cV/bBqxYcGPJ4AH/r5tKdoYR1DvKwe45j3x7UuKZn5scqCwybju6YV1VB8AT86TF/UkPhZNG5KRwL1NQSzvhQQB0+OexuCHfW1aQnvFJ4Z+fNd4wkOMcSSOvtSKHXEZJmANlaM5FM2YOYT2Tpvqg92QD2dpI0/2iY9Es5hscIogcl9FtMkQEuStxBLGsyj/gHBWmzOFI1y0IVad5BRVIJ59qTmBPkM2U3y4Y08NQq7J5SPRnDieiWwI0I5CTWpjvNOHxZ41lFe7x+PxfNJsnvCtzZjCERGt1WUsMNaHmhOYV59qM8UnOYpWPR+Jhgjc+9aImszJzuYKSTBl5Mk1hIwvRwvBj9/mmMoRMEjEgGfGaE03v30Dak5gXdZRbab4yJH+idZb3xQNQwLmkjBBDUIyC8QnYSNqQhrFGbkgRwxiYj8EiwEWwcK31Ywxjg4TAgM5GEPh2XPn90cOrZxVgGozxcd9K28K2RSttQgIKIggeddquN8WC03YeAmxbGAL2oAat9WMMY74eG9sls0DCu3iPkXm7J0A1WaKD8hhZ2Ve8SIabwEBWovvSYLmkbR+xBP4Dd1zzpvAyilqQQ6ixh3KM8bRe54tyJGmVY41J/1JjmCMZ8sHZN4WXkRbMA8sos0Qi2izQ9f9BbzEhmmQOkGMAAAAAElFTkSuQmCC"/><span class="instok">Лав Москино</span>','<img class="ib" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHAAAAARCAYAAAAFSCi0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAMTSURBVFhH7ZYxkhpBDEV92r0MZ+AE5MSkhGREZCREJCQk43rLPPsjC3bWNsFU8atU0N3Sl1pSd8+P4Y1Z413AmeNdwJnjroDr9XpYLpd/yGazGTXucTweh9VqNSwWi09B93A4jKs3sF75kN1uN2rco+Pcbrfj6jxwuVyG6/U6jm45QF6BuwKSrI+Pj1/JU5hjLbHf7z/nXdMWYU1o33HWxmAsh5zqvioB/xs0GzGfTqdx5pYD5BVoC5jO6SSTeD6fx9nfhcliWdQMtgse/jrPydOW/0LdGpfo5io4EcgjfMXR2ZKLzq7L4TP8a/yTC5jJtlDdqWAtnVVbAD9z+BNc33B21zXJyuYBdjo2/Kad/Mx5ihF8JBgnRzaj/HBoD2gubapvbHLeqz/tAXvxmai6YGr8oC0gv4rGdXPopdNHwPYRZzYK8+jlnF2u+K7wzsrJf4tvPOgyxgdz6BiH/CSHMbas69/T7x6xQ9ciGT/5kBcBWVz05UodoC9848fxd+IXk9/APG1uTofPoH3lREwK0HcG6JyiP2JhnFctfOgDE+AYWDD5jUHAxboxuceMUXjDwAVH8nb7SF/6yXzClzpT4hdfXqGgdrib64403ZLIwES+qxbBouRJ50sVX67p3zjllks/XQKM2b2lTXJoo379Wva0Vjt5uxyqB+R1LyJ1psQvJhVQY7uGq42xDgXzGQioY6EvE0ThGGfQom5aW2yINQXwW7lqAowrbRHf2i5heVLUqzmrY6ANcJ+1+VMHW3SexS/aAnJcMVAgZj5Ph6cCG+YR9fLaMbDk8zpgPj949C8np5ONyostoOiMTYK+9TslAcZvA+nHG6Tqg8rL2Ng6XveGDiK0QQc7fDP+TvyiLWAVHNaOAQab4ikVBluF+WwI0XF2/tWTn19PxZQEoOt+5ZiSsLRBHPsU2FzJp67IZlcyb39dQDaFQpU8JRXYEDRiAhMdH/IM8LBJgn6myxo6XSOwlvHw7nZcJB4OCyAe6QP8ecLU8wsZwJX5YP2Z70d5mxL/XQHfmB/eBZw53gWcNYbhJ6t9+yehKJDfAAAAAElFTkSuQmCC"/><span class="instok">БСБ Дженерейшен</span>','<img class="ib" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAARCAYAAACSGY9uAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAHKSURBVEhL7ZQxjsJADEX3tFyGM3CC9NS0lHSp0qWhoqGhyepFeZHjzJJRGlar/ZLFjMf2/O9x+Br+GP4F/XYsBJ3P5+F0Oq3scrlMEXV4PB5j3u12mzxrcLYVswcLQVxwOByG4/G4MHyc1eJ+v4851+t18qzB2VbMHhQFQUi8Xq9ZFJ2vQRZUynsniPjn8znt1qD+T1yqBWEi7wG5+CCiIEeYNWdxdEuCWBNnfNM0C+Jt287nxuCLKAriVyMpJ0KUOH1cyh4CQEEYJPu+n4mYkwV1XTfuicOHePdCLtQnnjUcI6q/IcmCLMDLJaugmCNhfVmQdyNe2Dj+OHh5+XAfcUxPxubIAQt7OfD18hooKMbrIxZkQZKNyDEIIQYfxjqOMagSZOHYcbrmZRRGtCi9EB3FtyUo/hn48vGvnVdhEqK4yLcoiGAu0kyM3xGQBGdxVBSEOS7WllwW5J448v1GMPIZc9acO2o0jJxNQdkoFF9AWJDzCAVRT1LuRRYErKeRF5vo6MeamddCEF2ATLY4BhGORJ5jQB6dJJdXiS8IODMmAg7E52kQnmOsMxaCagE5LrRLpcKfwi5BjguCSq/zSewSBN6N4ucwDN+5B4Gsc/neBwAAAABJRU5ErkJggg=="/><span class="instok">Библос</span>','<img class="ib" src="//farm1.staticflickr.com/568/20749792354_fa847bc0ff_o.jpg"/><span class="instok">Мотел рокс</span>','<img class="ib" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG0AAAARCAYAAADXGCLsAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAALFSURBVFhH7ZY9juJAEIX3tFyGM3ACcmJSQjIiMhIiEhISrz7Gn/QotbHZWY3Gkp/UMt1dP6/qlWX+dAtmh0W0GWIRbYZ4EW2323Wbzaa73W79ye/Adrt98uKZOB6Pz3MW3H8K9Gcs5xSbf8WLaCRZrVbd9XrtT34H1uv1kxfrdDr1p19ieg73nwL9GcuJDbzroP0PfEu074rLNN7v9343jBQtJ5dz74Ya+I4jucdqaHHEJ3NOrSOB/TufdzE/Fo1gTI/N4nk4HPrbr+nn7HK59Cddt9/vn2e+Jefz+cV/bBqxYcGPJ4AH/r5tKdoYR1DvKwe45j3x7UuKZn5scqCwybju6YV1VB8AT86TF/UkPhZNG5KRwL1NQSzvhQQB0+OexuCHfW1aQnvFJ4Z+fNd4wkOMcSSOvtSKHXEZJmANlaM5FM2YOYT2Tpvqg92QD2dpI0/2iY9Es5hscIogcl9FtMkQEuStxBLGsyj/gHBWmzOFI1y0IVad5BRVIJ59qTmBPkM2U3y4Y08NQq7J5SPRnDieiWwI0I5CTWpjvNOHxZ41lFe7x+PxfNJsnvCtzZjCERGt1WUsMNaHmhOYV59qM8UnOYpWPR+Jhgjc+9aImszJzuYKSTBl5Mk1hIwvRwvBj9/mmMoRMEjEgGfGaE03v30Dak5gXdZRbab4yJH+idZb3xQNQwLmkjBBDUIyC8QnYSNqQhrFGbkgRwxiYj8EiwEWwcK31Ywxjg4TAgM5GEPh2XPn90cOrZxVgGozxcd9K28K2RSttQgIKIggeddquN8WC03YeAmxbGAL2oAat9WMMY74eG9sls0DCu3iPkXm7J0A1WaKD8hhZ2Ve8SIabwEBWovvSYLmkbR+xBP4Dd1zzpvAyilqQQ6ixh3KM8bRe54tyJGmVY41J/1JjmCMZ8sHZN4WXkRbMA8sos0Qi2izQ9f9BbzEhmmQOkGMAAAAAElFTkSuQmCC"/><span class="instok">Лав Москино</span>'];
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