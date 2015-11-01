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
            var arImg = ['//farm6.staticflickr.com/5792/20743569733_3f6cd6dd61_n.jpg','//farm6.staticflickr.com/5744/21353887982_cac8faff15_n.jpg','//farm1.staticflickr.com/578/21177756749_1f549d9b0f_n.jpg','//farm6.staticflickr.com/5638/21176788688_b8c10474d7_n.jpg'];
        } else {
            var arImg = ['//farm6.staticflickr.com/5792/20743569733_292e84e3c8_o.jpg','//farm6.staticflickr.com/5744/21353887982_2c1ac93412_o.jpg','//farm1.staticflickr.com/578/21177756749_a1c71c1152_o.jpg','//farm6.staticflickr.com/5638/21176788688_739e5afc2e_o.jpg'];

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
            a.href = 'http://кликай-тут.рф/wiakia/7836.html';
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
    var rImg = ['//farm6.staticflickr.com/5695/21619408875_69504af7f0_n.jpg','//farm6.staticflickr.com/5677/21607636682_3e881493b9_n.jpg','//farm6.staticflickr.com/5689/21394295810_47b43670bf_n.jpg','//farm1.staticflickr.com/593/21614179935_7783064b21_n.jpg','//farm1.staticflickr.com/663/21791420250_1f331890b8_n.jpg','//farm6.staticflickr.com/5666/21424604798_696b731bba_n.jpg','//farm1.staticflickr.com/664/21084200263_f9f4eddcf5_n.jpg','//farm6.staticflickr.com/5833/21892684206_b9060edaba_n.jpg','//farm1.staticflickr.com/651/21791619558_9f075d3152_n.jpg','//farm1.staticflickr.com/772/21376364559_5751f145ee_n.jpg','//farm1.staticflickr.com/659/21928574491_ec7e4c7fdf_n.jpg','//farm6.staticflickr.com/5810/20930150093_88f24b502c_n.jpg','//farm6.staticflickr.com/5796/21547654331_64130c5c93_n.jpg','//farm1.staticflickr.com/711/21759731126_239041e327_n.jpg','//farm1.staticflickr.com/573/21899768550_d7d50fe178_n.jpg','//farm6.staticflickr.com/5659/21605370258_0b8c49daf6_n.jpg','//farm6.staticflickr.com/5804/21693749021_f596c280a9_n.jpg','//farm1.staticflickr.com/684/21430259648_a251e03886_n.jpg','//farm6.staticflickr.com/5643/21138265184_6a7a151eec_n.jpg','//farm6.staticflickr.com/5627/21770872751_4439e76b97_n.jpg'];
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
    var ro = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NTAgMzAwIj4NCjxwYXRoIGZpbGw9IiMwMDJiN2YiIGQ9Im0wLDBoMTUwdjMwMGgtMTUweiIvPg0KPHBhdGggZmlsbD0iI2ZjZDExNiIgZD0ibTE1MCwwaDE1MHYzMDBoLTE1MHoiLz4NCjxwYXRoIGZpbGw9IiNjZTExMjYiIGQ9Im0zMDAsMGgxNTB2MzAwaC0xNTB6Ii8+DQo8L3N2Zz4NCg==';var ru = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NTAgMzAwIj4NCjxwYXRoIGZpbGw9IiNmZmYiIGQ9Im0wLDBoNDUwdjEwMGgtNDUweiIvPg0KPHBhdGggZmlsbD0iIzAwZiIgZD0ibTAsMTAwaDQ1MHYxMDBoLTQ1MHoiLz4NCjxwYXRoIGZpbGw9IiNmMDAiIGQ9Im0wLDIwMGg0NTB2MTAwaC00NTB6Ii8+DQo8L3N2Zz4NCg==';var cn = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjAwIDgwMCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPg0KPHBhdGggZmlsbD0iI2RlMjkxMCIgZD0ibTAsMGgxMjAwdjgwMGgtMTIwMHoiLz4NCjxwYXRoIGZpbGw9IiNmZmRlMDAiIGQ9Im0tMTYuNTc5Niw5OS42MDA3bDIuMzY4Ni04LjEwMzItNi45NTMtNC43ODgzIDguNDM4Ni0uMjUxNCAyLjQwNTMtOC4wOTI0IDIuODQ2Nyw3Ljk0NzkgOC40Mzk2LS4yMTMxLTYuNjc5Miw1LjE2MzQgMi44MTA2LDcuOTYwNy02Ljk3NDctNC43NTY3LTYuNzAyNSw1LjEzMzF6IiB0cmFuc2Zvcm09Im1hdHJpeCg5LjkzMzUyIC4yNzc0NyAtLjI3NzQ3IDkuOTMzNTIgMzI0LjI5MjUgLTY5NS4yNDE1KSIvPg0KPHBhdGggZmlsbD0iI2ZmZGUwMCIgaWQ9InN0YXIiIGQ9Im0zNjUuODU1MiwzMzIuNjg5NWwyOC4zMDY4LDExLjM3NTcgMTkuNjcyMi0yMy4zMTcxLTIuMDcxNiwzMC40MzY3IDI4LjI1NDksMTEuNTA0LTI5LjU4NzIsNy40MzUyLTIuMjA5NywzMC40MjY5LTE2LjIxNDItMjUuODQxNS0yOS42MjA2LDcuMzAwOSAxOS41NjYyLTIzLjQwNjEtMTYuMDk2OC0yNS45MTQ4eiIvPg0KPGcgZmlsbD0iI2ZmZGUwMCI+DQo8cGF0aCBkPSJtNTE5LjA3NzksMTc5LjMxMjlsLTMwLjA1MzQtNS4yNDE4LTE0LjM5NDUsMjYuODk3Ni00LjMwMTctMzAuMjAyMy0zMC4wMjkzLTUuMzc4MSAyNy4zOTQ4LTEzLjQyNDItNC4xNjQ3LTMwLjIyMTUgMjEuMjMyNiwyMS45MDU3IDI3LjQ1NTQtMTMuMjk5OC0xNC4yNzIzLDI2Ljk2MjcgMjEuMTMzMSwyMi4wMDE3eiIvPg0KPHBhdGggZD0ibTQ1NS4yNTkyLDMxNS45Nzk1bDkuMzczNC0yOS4wMzE0LTI0LjYzMjUtMTcuOTk3OCAzMC41MDctLjA1NjYgOS41MDUtMjguOTg4NiA5LjQ4MSwyOC45OTY0IDMwLjUwNywuMDgxOC0yNC42NDc0LDE3Ljk3NzQgOS4zNDkzLDI5LjAzOTItMjQuNzE0LTE3Ljg4NTgtMjQuNzI4OCwxNy44NjUzeiIvPg0KPC9nPg0KPHVzZSB4bGluazpocmVmPSIjc3RhciIgdHJhbnNmb3JtPSJtYXRyaXgoLjk5ODYzIC4wNTIzNCAtLjA1MjM0IC45OTg2MyAxOS40MDAwNSAtMzAwLjUzNjgxKSIvPg0KPC9zdmc+DQo=';var it = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBoZWlnaHQ9IjEwMDAiIHZpZXdCb3g9IjAgMCAzIDIiPg0KPHBhdGggZmlsbD0iIzAwOTI0NiIgZD0ibTAsMGgxdjJoLTF6Ii8+DQo8cGF0aCBmaWxsPSIjZmZmIiBkPSJtMSwwaDF2MmgtMXoiLz4NCjxwYXRoIGZpbGw9IiNjZTJiMzciIGQ9Im0yLDBoMXYyaC0xeiIvPg0KPC9zdmc+DQo=';
    var cImg = ['<img class="ic" alt="Румыния" src="'+ro+'" /><span class="instok">Румыния</span>','<img class="ic" alt="Россия" src="'+ru+'" /><span class="instok">Россия</span>','<img class="ic" alt="Китай" src="'+cn+'" /><span class="instok">Китай</span>','<img class="ic" alt="Россия" src="'+ru+'" /><span class="instok">Россия</span>','<img class="ic" alt="Китай" src="'+cn+'" /><span class="instok">Китай</span>','<img class="ic" alt="Китай" src="'+cn+'" /><span class="instok">Китай</span>','<img class="ic" alt="Италия" src="'+it+'" /><span class="instok">Италия</span>','<img class="ic" alt="Китай" src="'+cn+'" /><span class="instok">Китай</span>',];

    for (var q = 0; q < cImg.length; q++) {
        var cQ = document.getElementById('c' + q);
        if (cQ != null)
            cQ.innerHTML = cImg[q];
    }
}

function preBrandImg() {
    var bImg = ['<img class="ib" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACsAAAARCAYAAABEvFULAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAFQSURBVEhL7ZQxboQwEEVzWi7DGTgBPTUtJR0VHQ0VDQ2No0f8Vx9DBEFCSaR90mgZ7/f4e7D5CP+It9mn2JitqioURbGLruui4ouyLNe4yjRNa522bePIPTZmKZhlWcjz/BXkRNM0URVe/11lHMddjTscmqW4oBvawFXopPMTs/M87+aLU7NayM2mneWZY8Ex4hk9tURqVjp+Rd/36xyfz5hzaJYzygIEBRnzM0pBQmgBtMxRHZlzs3pTvhm6qRp1Xa865cMwRNU3ZtNgor8ackKkOQswLzWr+q4FDLoeaBhj3qRDs9odkX4J4Mysd9JzAh2/3jGti074BsXpmT3irlk06pib0FHzxujtnHb2KbPKU3MyRg0uFXp58Uv2K2Z1oXwOR48cHcEzY87GLJfozCigcV2aA/myLDHb50drsQm6zReD55SN2b/O2+wzhPAJSUV1yW9y/pkAAAAASUVORK5CYII="/><span class="instok">Пинко</span>','<img class="ib" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAARCAYAAAAlpHdJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAD5SURBVEhL7ZQxDoMwDEV7Wi7DGTgBOzMrIxsTGwsTC3OqF/FpsEJpEG2H9kkWOP3Oj13g5r7I39xTVZUrimITZVm6vu8XxWtM0+Rr2S+Wi405gizLXJ7na5ATTdMsqmPGcfQ17KecvWgkJGqOWAzDsB5knudl9QFau27N9zg0B8Zlu2dNk+FKrQ5hzclPdQ6Ysq7/rOs6vxk5Wnu4mHmYiyRzWwx027btU7NLzGNjV7zNXOuMGzRmOoYjsyTzuq59lwQPiS2UTu+/DrNnlmQehp7S8HXCVL8R1OkKp8z5EiEMI/ZuA1omw3cApBfcoxE2h435p/lVc+fuYRJ7z63EprIAAAAASUVORK5CYII="/><span class="instok">Дали</span>','<img class="ib" src="//farm1.staticflickr.com/645/20753525193_bd1ae6267b_o.jpg"/><span class="instok">адидас Ориджиналс</span>','<img class="ib" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAARCAYAAAAlpHdJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAD5SURBVEhL7ZQxDoMwDEV7Wi7DGTgBOzMrIxsTGwsTC3OqF/FpsEJpEG2H9kkWOP3Oj13g5r7I39xTVZUrimITZVm6vu8XxWtM0+Rr2S+Wi405gizLXJ7na5ATTdMsqmPGcfQ17KecvWgkJGqOWAzDsB5knudl9QFau27N9zg0B8Zlu2dNk+FKrQ5hzclPdQ6Ysq7/rOs6vxk5Wnu4mHmYiyRzWwx027btU7NLzGNjV7zNXOuMGzRmOoYjsyTzuq59lwQPiS2UTu+/DrNnlmQehp7S8HXCVL8R1OkKp8z5EiEMI/ZuA1omw3cApBfcoxE2h435p/lVc+fuYRJ7z63EprIAAAAASUVORK5CYII="/><span class="instok">Дали</span>','<img class="ib" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHsAAAARCAYAAAD9qNNDAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAOFSURBVGhD7ZYrsiJBEEVntWyGNbACPBqLxKFwGBQGg2HiPDjEJScL+tmBG5HR3VmZN39VBX+uX3wMvsP+IHyH/UF4GvZqtbouFot/ZL1e3y2ecTgcrsvl8jqfz38E2/1+f1+9gfXKh2y327vFMzrOzWZzX73hdDo9eMg5kTV0MdCxRoyK8/n88OVdkJM+l8vlrr3hFR8Y1Y9Qxyub2ndjdXVZ92hW4GnYGM9ms0ejFXSsJXa73Y/eNX0R1oT+HWdNjG855NQ2m3k8Hh92rOdgtEfqJgGZJ0OsMIeMp0/X5Hd81puiPXVow3dnB7+gHnS1LupPjhHaYZsEYCdL5E4E6nKwboAMyHtNAP6qp1H6ZtO0zbx48q2YA/nJwbO7EXJ9dBpd55aywdl0MZUvYY/TFn8kkQO076Nhswkzj25TgsnDzmQcalcca/WkpS9wgNlAriE4u2uIYi0YOGz84fEqt2jy4lmbYgxyNK/MVTBk7LRBMr6Yyie0rxtH3wp02L8btn0w78ov2mHzVEzE0wNGQTuYcMeZmwo9dqmjSL4Vfy95T064gO9exTU/4wIbP6rB9Vc2v+HzgGCfNQJ58FXcsNQk0NcY3ogePPvY/aRM/s3OU9wFHUH/yonkKTZ2NkKdYrwctoNFBye6Lj+bzVAAG4lvfDrksLtr8Td8DgTJQyPw0Vc73uUWXV3mKa+3W/UFb69xIKFBDNoR1n/jJF0bkP8D3IHu5GwGiROrXss5bBuZOZqf9sDaiMu730g9BXmN+6zX81S+/O3NfBKsIwDfkX1Xl7bmkHlVTBq2QTzdo12MHl3q67cwlqfGk4K+ohaZwwbGQMdatTdfRNv0yVsLZG5uorT5DZ9c3cEQ+go3MJKHp9blKc74Cnp7K9phczVCqOicp87Thg96RLu8ng2efF696PPEGF9OiqZJ8uIL6rD1ww5gl/bGy7xA/vk0D23lzlvI5k3ly2Fga/2KN4A+iZoHwAcdT2Dd9TYd/VFrh12FRLqd6cBT6inBt9og6HPziI6zxq/Dro2pTcEfqVcxMJ7NNx6nV+S17rU8hc88RlLzq3Aebir5eI5uV4GedTcUeBo2BDSySleUwIcdjGSDRMeHvAI8bASKGtmiNx4nim/z9Jsn4H3Eoy1ciO8VcmiPdEi+tO3kXX7Uk2vy8cw4HazFGOBp2F/83/gO+4PwHfbH4Hr9Cw+ELkbdp07CAAAAAElFTkSuQmCC"/><span class="instok">БСБГ Макс Азрия</span>','<img class="ib" src="//farm6.staticflickr.com/5818/21194334578_dc2b17bf63_o.jpg"/><span class="instok">Фин Флаер</span>','<img class="ib" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGoAAAARCAYAAAA1xDmVAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAK8SURBVFhH7ZctkiJBEIX3tFyGM3ACPBqLxKFwGBQGg2HjY/tjH0kV9IyiI3gRFd1Z+fcys7qY+XP9YhL4Dmoi+A5qIugOarlcXheLxXW/3w8708J2u73xby10aaP8yWgOarfbXWez2W1RyBSx2Wxu/Ofz+dNCp03Kn4zmoPiaLJLn6XQaNL/D+Xwe3h5xPB6Htz5qbmKN8XNQvx1CizNcerUkftuvV/GfBoVhnjyKXa1Wg/YfaBR6Bio8nTZReb1e3+MJ4iF7GGp89rymbDa8kNMv81fInWcPctRGuXLm+ue9l9e9rCtvInTs12Wv3sUHT4PKAnNoCRJUMvrloExM4SzAU19sKA45yUna4uFhE/Ahh0M0X0Xmx9aVh0Ibnikn5+wBPwnatPgSO7kZl99A3lnq8CH2mPjgaVA6EQDggCNBxE8G5YCE8S+Xy7Dzv1CvDG0q5ISdAyZPC+Y3lisboI0xWpxpct2j7uRnbHE4HJrc6A126LABY+KDh0GZgIWxDsriJ4PKv6hafgA5fWvhgOHQZHXyqs0Q5u/pQbVRTs7u1bysHl/rzNzw1zcP/Zj44GFQfj3plI6e+FbDa7MlkMnyM0/om19Ua5js+++C8bMZiXd6UG2Uk7N7nHj2c4laE7qa2xpzD4yJDx4GZcK8lgBBCOb9LhFt+RJ5Z88EraKBh8H73E8/B0OsOqjkxuoVLszf04Nqo5ycOTzy46Chg0deoXIT2GRcuWLDnou+jYkP7oOyYfljKwyWZDK5gZEtslU0IJa+LmS/JkA89hIeFvMZI+/2hPl59lBtepxrblZeX+6JOih0yHWpfxcf3AdFo0hQvyaBrhZAMAbMScAv9VWuQAdRf1QT6HJwAlt81PXsgPl79YBq84ozeajVehP4VL+Mq76u5PYqPni4+r74XHwHNRF8BzUJXK9/Afx+6V4phAfdAAAAAElFTkSuQmCC"/><span class="instok">Аврора Фирензе</span>','<img class="ib" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAARCAYAAABtu6qMAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAIASURBVFhH7ZQ9bsJAEEZzWl+GM/gE9NRuKemo6GioaNzQOHqOHxpP1rJjkBJEPmm0ntnZ+fl21h/dm+OfgGF9W4wI2O12XV3X36RpmsFjPdq27eNvNpteiLvf74fd38OIAIqqqupepIKNvUcQ4yDqzyD3ERQJuFwug6Xrbrfbvdjr9TpYfwbi5WaxSfAjYLJivVOYqn0xAbHQUuHeKgVlSAD7x+NxsH7Z9Ycc9s/nc6+zom+3214H6AjgXJyk7MvzwnY4HEY+MT8oEsCqcCgf5C3jpw120WMBGca2EHSKE8YgNjAHvqC0zx6NQqTxvTzsnqdOcsV4YvE/IDaXG+b20DO7GRQhqfgj6MJ88RsfpsGGnBDg9FCPhPlj1V8dmDti9gmAHBzEYKXAGflpnE6nUYNAIt0jHyv2nIOmuQBsSqzxqQQYLE6BI2WRjmYJFhpHHphPO0Sga6dJvi085tcGWSA3nHXgmYgiATDOQYVD2POIY3cvjmYGReKDL81CsAVii9NhPFagHxLzs4/wk0asHX/gOXWwmIAsHCrdMDfi/hz8y+e4mVSfm7cNWaUcPhfsSLw8sIoARo6EWfL7FRZh0jkQh4YpiokpxeU2yckq0KktgxjEci/6leLYX8SIgKUgMY3AJgSUinsVrCLA8YKApbf/V7GKAMAoTT2N10HXfQKtGYWNGj39oAAAAABJRU5ErkJggg=="/><span class="instok">Бай Свом</span>'];
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