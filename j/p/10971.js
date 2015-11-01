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
            var arImg = ['//farm1.staticflickr.com/703/20744580803_50771c255d_n.jpg','//farm6.staticflickr.com/5828/20744578043_eafb4a523e_n.jpg'];
        } else {
            var arImg = ['//farm1.staticflickr.com/703/20744580803_58389d1576_o.jpg','//farm6.staticflickr.com/5828/20744578043_cfb43111fc_o.jpg'];

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
            a.href = 'http://кликай-тут.рф/wiakia/10971.html';
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
    var rImg = ['//farm6.staticflickr.com/5789/21388376956_f4e6efb72a_n.jpg','//farm1.staticflickr.com/718/20791928344_545eeee0de_n.jpg','//farm6.staticflickr.com/5795/20840234164_2a0f772f20_n.jpg','//farm6.staticflickr.com/5638/21226795528_6c70f285e0_n.jpg','//farm6.staticflickr.com/5809/21190443050_0515b7e574_n.jpg','//farm6.staticflickr.com/5746/21471500991_f5c91e4b40_n.jpg','//farm1.staticflickr.com/715/21408210732_9b0363a7bf_n.jpg','//farm6.staticflickr.com/5822/21227734019_ba6628b140_n.jpg','//farm6.staticflickr.com/5643/21170101913_33a3a9c20d_n.jpg','//farm1.staticflickr.com/755/21176689048_9d4686e0b3_n.jpg','//farm6.staticflickr.com/5733/21196485020_3cc72bd686_n.jpg','//farm1.staticflickr.com/613/20796223444_85d2bc7b34_n.jpg'];
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
    var us = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjM1IDY1MCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPg0KPGRlZnM+DQo8ZyBpZD0idW5pb24iPg0KPHVzZSB5PSItLjIxNiIgeGxpbms6aHJlZj0iI3g0Ii8+DQo8dXNlIHhsaW5rOmhyZWY9IiN4NCIvPg0KPHVzZSB5PSIuMjE2IiB4bGluazpocmVmPSIjczYiLz4NCjwvZz4NCjxnIGlkPSJ4NCI+DQo8dXNlIHhsaW5rOmhyZWY9IiNzNiIvPg0KPHVzZSB5PSIuMDU0IiB4bGluazpocmVmPSIjczUiLz4NCjx1c2UgeT0iLjEwOCIgeGxpbms6aHJlZj0iI3M2Ii8+DQo8dXNlIHk9Ii4xNjIiIHhsaW5rOmhyZWY9IiNzNSIvPg0KPC9nPg0KPGcgaWQ9InM1Ij4NCjx1c2UgeD0iLS4yNTIiIHhsaW5rOmhyZWY9IiNzdGFyIi8+DQo8dXNlIHg9Ii0uMTI2IiB4bGluazpocmVmPSIjc3RhciIvPg0KPHVzZSB4bGluazpocmVmPSIjc3RhciIvPg0KPHVzZSB4PSIuMTI2IiB4bGluazpocmVmPSIjc3RhciIvPg0KPHVzZSB4PSIuMjUyIiB4bGluazpocmVmPSIjc3RhciIvPg0KPC9nPg0KPGcgaWQ9InM2Ij4NCjx1c2UgeD0iLS4wNjMiIHhsaW5rOmhyZWY9IiNzNSIvPg0KPHVzZSB4PSIuMzE1IiB4bGluazpocmVmPSIjc3RhciIvPg0KPC9nPg0KPGcgaWQ9InN0YXIiPg0KPHVzZSB4bGluazpocmVmPSIjcHQiIHRyYW5zZm9ybT0ibWF0cml4KC0uODA5MDIgLS41ODc3OSAuNTg3NzkgLS44MDkwMiAwIDApIi8+DQo8dXNlIHhsaW5rOmhyZWY9IiNwdCIgdHJhbnNmb3JtPSJtYXRyaXgoLjMwOTAyIC0uOTUxMDYgLjk1MTA2IC4zMDkwMiAwIDApIi8+DQo8dXNlIHhsaW5rOmhyZWY9IiNwdCIvPg0KPHVzZSB4bGluazpocmVmPSIjcHQiIHRyYW5zZm9ybT0icm90YXRlKDcyKSIvPg0KPHVzZSB4bGluazpocmVmPSIjcHQiIHRyYW5zZm9ybT0icm90YXRlKDE0NCkiLz4NCjwvZz4NCjxwYXRoIGZpbGw9IiNmZmYiIGlkPSJwdCIgZD0iTS0uMTYyNSwwIDAtLjUgLjE2MjUsMHoiIHRyYW5zZm9ybT0ic2NhbGUoLjA2MTYpIi8+DQo8cGF0aCBmaWxsPSIjYmYwYTMwIiBpZD0ic3RyaXBlIiBkPSJtMCwwaDEyMzV2NTBoLTEyMzV6Ii8+DQo8L2RlZnM+DQo8cGF0aCBmaWxsPSIjZmZmIiBkPSJtMCwwaDEyMzV2NjUwaC0xMjM1eiIvPg0KPHVzZSB4bGluazpocmVmPSIjc3RyaXBlIi8+DQo8dXNlIHk9IjEwMCIgeGxpbms6aHJlZj0iI3N0cmlwZSIvPg0KPHVzZSB5PSIyMDAiIHhsaW5rOmhyZWY9IiNzdHJpcGUiLz4NCjx1c2UgeT0iMzAwIiB4bGluazpocmVmPSIjc3RyaXBlIi8+DQo8dXNlIHk9IjQwMCIgeGxpbms6aHJlZj0iI3N0cmlwZSIvPg0KPHVzZSB5PSI1MDAiIHhsaW5rOmhyZWY9IiNzdHJpcGUiLz4NCjx1c2UgeT0iNjAwIiB4bGluazpocmVmPSIjc3RyaXBlIi8+DQo8cGF0aCBmaWxsPSIjMDAyODY4IiBkPSJtMCwwaDQ5NHYzNTBoLTQ5NHoiLz4NCjx1c2UgeGxpbms6aHJlZj0iI3VuaW9uIiB0cmFuc2Zvcm09Im1hdHJpeCg2NTAgMCAwIDY1MCAyNDcgMTc1KSIvPg0KPC9zdmc+DQo=';var fr = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA5MDAgNjAwIj4NCjxwYXRoIGZpbGw9IiNlZDI5MzkiIGQ9Im0wLDBoOTAwdjYwMGgtOTAweiIvPg0KPHBhdGggZmlsbD0iI2ZmZiIgZD0ibTAsMGg2MDB2NjAwaC02MDB6Ii8+DQo8cGF0aCBmaWxsPSIjMDAyMzk1IiBkPSJtMCwwaDMwMHY2MDBoLTMwMHoiLz4NCjwvc3ZnPg0K';var nl = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOTAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNjAwIiB2aWV3Qm94PSIwIDAgOSA2Ij4NCjxwYXRoIGZpbGw9IiMyMTQ2OGIiIGQ9Im0wLDBoOXY2aC05eiIvPg0KPHBhdGggZmlsbD0iI2ZmZiIgZD0ibTAsMGg5djRoLTl6Ii8+DQo8cGF0aCBmaWxsPSIjYWUxYzI4IiBkPSJtMCwwaDl2MmgtOXoiLz4NCjwvc3ZnPg0K';
    var cImg = ['<img class="ic" alt="США" src="'+us+'" /><span class="instok">США</span>','<img class="ic" alt="Франция" src="'+fr+'" /><span class="instok">Франция</span>','<img class="ic" alt="США" src="'+us+'" /><span class="instok">США</span>','<img class="ic" alt="Нидерланды" src="'+nl+'" /><span class="instok">Нидерланды</span>',];

    for (var q = 0; q < cImg.length; q++) {
        var cQ = document.getElementById('c' + q);
        if (cQ != null)
            cQ.innerHTML = cImg[q];
    }
}

function preBrandImg() {
    var bImg = ['<img class="ib" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC8AAAARCAYAAABNV/VxAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAGMSURBVEhL7ZU9joNADIX3tLlMzsAJ6KlpKemo0tFQ0dDQzOpj+VZmgP0tkkh5kqWMZ/z8bM+Qt/TEeIm/F3biu65LRVGk6/W6WFmWaRzHdfexsBHfNE26XC6LaArAXE/TtJ56HGzE2/F5nldPSlVVLQVQWA4m8pOivpscHGc8+IdhWFdb7MQjFMEmpJA8+Ha7LUU6Fa5WhD54PAe3gA9/XdefDcM4LxDt3lmejfgoygAI+75fT3yQ4sd4H161SCwHsQi1KU4Pn/z4Yl4bZeHsRw73we7B0vHYMY0EoG3bZU3XhB0S/I5riicmF0+cgA9fFOdVUlPkAIfiRQwyEcGsFYixjolz8Yr9Sry8cpCbaeZ5DsVzOE8KTKTfJHSKvWgi55HjN+KdphN3/1A8IIADdJtRY9EHKNLEfglIkt/5/4qXgw8Gpo5T8QjzULSYBHg/TYDxeIU+8RfxeQ51xbe2u/MAAsh4nJLloFD2MR+WICaPYx3/P1jDIY4+yUweHZ7LYw7FPwte4u+DlN4Brg9yAo83+d4AAAAASUVORK5CYII="/><span class="instok">Сенна</span>','<img class="ib" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKQAAAARCAYAAABTsgeHAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAARVSURBVGhD7ZY9TiNBEIX3tFyGM3ACcsekhGREZE4cOSFx4tUH81lviuoZs9LuWmKe1PJ0/dfrmh7/Om/YcEPYBnLDTWEbyA03hdlAPj4+nh8eHtp1PB4nq0+wV/f+/j5Jv+L19fXD5v7+/mOR4+3tbdL2yNjdqrX8NMgPfPLbwbOsXCFnfQec7+l0mnZ/F7OBdGhy3d3dfazD4TBZfWK32110T09Pk3QObYjjMK35AHJpV+th1Vp+GhgouIHfl5eXSToHPGFTh08Or8Xz8/M/5Xzxk+0AdW+UjTk0FdyC6rKZ/X5/8eO5gwM5evsrsF+6NdGtEXoN4Ws381IMbpk1/4pRPM9lKZ8cs3JokXfnNeLomlxr6PoexRsOpLdbNxR8htFh49uKLKG8e4O5HfXvQLGj3AlyJvE8Zx3EkVD19WamBmNUf28HehjZAHpNfebgMKhBPc9rh1trSp7kVR01dtBfOz+5PLNEXhDaWj+xU26uGoN+Ug/Y06v8q1viG7QDiZEOHXmSQjPaIktYSOePDB02HdRnU648HPTWyI2sveAZGTps3PufN18MbNCz9+b2QPChTwbTvZCLGkOi3RMLGb7pX2FN+OFDXPbymy8HtqOvjHn0l7eaX06oTQ7V57BmrrQBnlcdSOsmN5yv8Q2+DCRKjFiSmiBwLci9Bw0siGIrbICCOqgnBja5JDbrkKz6xxt74uBDL1kf0F/YO/GAA5lEEzN9agxuRGvhufbpoeQhJIyXvbDHx0+ffXXcioyjPzmVJ+SFeNoau8tVY3hedSBrniqrfIPZQHrINXhCQrGjWA+oBraRjniGAx02HWxwpBfkMzeL56zBNz71eZOr49fF3rxrA7lWp/ouR8fvKB575Oi7fQdzgeQ75cCbSjlrLVeNYd3XDCR26tyTQ8wG0uTeQh26oCkTDm79lAPzdP8vgQ1moSNwA0B4Dmc9KF4KyDKvxFk79rm8ibBLe0AM+8xbWiCjL2IQyz5qjnqbgy4esO4/uSGFfy1YyjPfKHaXq8bueEKPb0I/OXCZG1wGMv8fcbgEz8WhesXWRMDC/cznpwIy8EUnMV0MQZHWUuuwFppATxwP19j4A/Qs9/ZIDKC9LwYvIvbcGgC7tAfkw0bYNzHIQ4yMaQ3UTJ36MwwdrIk4xLPm5Muc9tXBvMLhw085/hmbvTbGTo6s2djYILOe5Al91gzW+AaXgZT80UJvQIcuIXHYCAq22FzI8q2okKjRsnEPX4J4RiaoU536JIkarK/Ty0kSjR5bkYfoyhjWgNzfrLEia8p4yZd6h6YDubJOYD8pN5b27nmBgOfKQgf8+unjOSRPxkqs8Q0uA8nbS4OjlfoRRnpkNMZaGsSEsbrljQiItxSbN5ihgCx8O0A+eg9B2HPN18UxRqfLGr7Tf1cTGNWQQN/ZdHJqgz/q7Hqmhsqv/SqrPuxHverb9Tb7D7lhw//GNpAbbgrbQG64IZzPvwE/hs/xEOOjjgAAAABJRU5ErkJggg=="/><span class="instok">ЗАО Ессенце оф Натуре</span>','<img class="ib" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGIAAAARCAYAAAAmE3lhAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAALTSURBVFhH7ZU9jsJADIX3tFyGM3ACempaSjoqOhoqGhqarL4sX+QYhz+xIkWeNEo843lj+zmTn2bCKDAJMRJMQowEN0Isl8tmPp+343Q6XWc/C3gXi0WzWq2uM7fYbretD2Oz2Vxn/0CMrhmj/jy/DeJjvIKeECQxm83K5D+J4/HYnTMEzseHQVMICu88Ay6AP37/GfezsJFfQU8Ikx9KpvpCLESF8/lcrmch4MU3Igvhus3iuHd+RBV7xCOeHB9gT8U7JAT+FQ/ohLCjTNxPi3cKxmBNkbL/er1u54VXXOYDUQjm9YlXlUK4vtvt2nl5jccCGk+OD+F4eoY8gjOH1uUgN56MOM8e9+33+3YNRF/gfn2JPQvYCXE4HLqkeXrXSsAcQaMohzIHIe/MY1sEDsaGg0KZrMEqhHuY95xYWGyTUCQTqYSQL9r4U1y/JGxhnHATg5zUAkQOfBnkbwz4yYstWPccfDyDWG0MuCIeXk2RVCiYAQN8DEZhFDSrrxAxeItSFRY/+E3KuSH/ygbyiJyb/BZJjlw04BVjEw3x0gRwYMNnvBlvCWERXGNoA4LUx4FtEJUQnl0VVpEUGB/5K//KBuyJucS4HdjGJQfNFMF83sNTOC9oSP30zVfkU0LEggGLABmFiCOCLwEuvyB58Is28Gw5Yix2akzQGCr/ygbscT+Qz9gdfsFyeAaww2kKv4oYF8g2wBdBbaa8/pYQ3ouQAoLDz0/YDlB1Eok82Ox/VgjA/riH5z3/bAP2wCNsEDuefFj3XyZHFMI5c1WYyMu7Nty8W6vL5dJbF28JAUyCdZ92koV33mFCPFl7RQgLn+0h/2yDLATxymO892IC/qzdE4fIdjzDYZOKnhCoxaE8BXb+2QrWCDaTCq4U1uNPXWRezxY5Fnzjerazf7ZB3iOG4pQjw2vGvDMv73kftrXySovoCTHhe5iEGAkmIUaBpvkFkY6rDhuUNc4AAAAASUVORK5CYII="/><span class="instok">фрешМинералс</span>','<img class="ib" src="//farm6.staticflickr.com/5720/21339008352_8b22b95b40_o.jpg"/><span class="instok">Эллис Фаас</span>'];
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