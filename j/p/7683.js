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
            var arImg = ['//farm6.staticflickr.com/5776/21176763718_08535f4f0e_n.jpg','//farm6.staticflickr.com/5699/21353857102_9a359233f1_n.jpg'];
        } else {
            var arImg = ['//farm6.staticflickr.com/5776/21176763718_08df7273f9_o.jpg','//farm6.staticflickr.com/5699/21353857102_7d3b525bc0_o.jpg'];

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
            a.href = 'http://кликай-тут.рф/wiakia/7683.html';
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
    var rImg = ['//farm6.staticflickr.com/5623/21276283820_0ea409d7a1_n.jpg','//farm1.staticflickr.com/640/21353845452_3db115fbb5_n.jpg','//farm1.staticflickr.com/624/21176809188_d4e743dd68_n.jpg','//farm1.staticflickr.com/594/21277456489_fac66c9444_n.jpg','//farm6.staticflickr.com/5811/21176515510_d61a254d32_n.jpg','//farm6.staticflickr.com/5753/21353987272_53e24dd78c_n.jpg','//farm6.staticflickr.com/5812/21464308925_efe0968842_n.jpg','//farm1.staticflickr.com/658/21374541141_eae398e8c7_n.jpg','//farm1.staticflickr.com/648/21777751212_c2f3dc6974_n.jpg','//farm1.staticflickr.com/577/21166966784_b6d3004d78_n.jpg','//farm1.staticflickr.com/744/21401780609_5d9e6ce1bf_n.jpg','//farm6.staticflickr.com/5763/21791494295_e8033bc0d7_n.jpg'];
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
    var fr = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA5MDAgNjAwIj4NCjxwYXRoIGZpbGw9IiNlZDI5MzkiIGQ9Im0wLDBoOTAwdjYwMGgtOTAweiIvPg0KPHBhdGggZmlsbD0iI2ZmZiIgZD0ibTAsMGg2MDB2NjAwaC02MDB6Ii8+DQo8cGF0aCBmaWxsPSIjMDAyMzk1IiBkPSJtMCwwaDMwMHY2MDBoLTMwMHoiLz4NCjwvc3ZnPg0K';
    var cImg = ['<img class="ic" alt="Франция" src="'+fr+'" /><span class="instok">Франция</span>','<img class="ic" alt="Франция" src="'+fr+'" /><span class="instok">Франция</span>','<img class="ic" alt="Франция" src="'+fr+'" /><span class="instok">Франция</span>','<img class="ic" alt="Франция" src="'+fr+'" /><span class="instok">Франция</span>',];

    for (var q = 0; q < cImg.length; q++) {
        var cQ = document.getElementById('c' + q);
        if (cQ != null)
            cQ.innerHTML = cImg[q];
    }
}

function preBrandImg() {
    var bImg = ['<img class="ib" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKQAAAARCAYAAABTsgeHAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAARVSURBVGhD7ZY9TiNBEIX3tFyGM3ACcsekhGREZE4cOSFx4tUH81lviuoZs9LuWmKe1PJ0/dfrmh7/Om/YcEPYBnLDTWEbyA03hdlAPj4+nh8eHtp1PB4nq0+wV/f+/j5Jv+L19fXD5v7+/mOR4+3tbdL2yNjdqrX8NMgPfPLbwbOsXCFnfQec7+l0mnZ/F7OBdGhy3d3dfazD4TBZfWK32110T09Pk3QObYjjMK35AHJpV+th1Vp+GhgouIHfl5eXSToHPGFTh08Or8Xz8/M/5Xzxk+0AdW+UjTk0FdyC6rKZ/X5/8eO5gwM5evsrsF+6NdGtEXoN4Ws381IMbpk1/4pRPM9lKZ8cs3JokXfnNeLomlxr6PoexRsOpLdbNxR8htFh49uKLKG8e4O5HfXvQLGj3AlyJvE8Zx3EkVD19WamBmNUf28HehjZAHpNfebgMKhBPc9rh1trSp7kVR01dtBfOz+5PLNEXhDaWj+xU26uGoN+Ug/Y06v8q1viG7QDiZEOHXmSQjPaIktYSOePDB02HdRnU648HPTWyI2sveAZGTps3PufN18MbNCz9+b2QPChTwbTvZCLGkOi3RMLGb7pX2FN+OFDXPbymy8HtqOvjHn0l7eaX06oTQ7V57BmrrQBnlcdSOsmN5yv8Q2+DCRKjFiSmiBwLci9Bw0siGIrbICCOqgnBja5JDbrkKz6xxt74uBDL1kf0F/YO/GAA5lEEzN9agxuRGvhufbpoeQhJIyXvbDHx0+ffXXcioyjPzmVJ+SFeNoau8tVY3hedSBrniqrfIPZQHrINXhCQrGjWA+oBraRjniGAx02HWxwpBfkMzeL56zBNz71eZOr49fF3rxrA7lWp/ouR8fvKB575Oi7fQdzgeQ75cCbSjlrLVeNYd3XDCR26tyTQ8wG0uTeQh26oCkTDm79lAPzdP8vgQ1moSNwA0B4Dmc9KF4KyDKvxFk79rm8ibBLe0AM+8xbWiCjL2IQyz5qjnqbgy4esO4/uSGFfy1YyjPfKHaXq8bueEKPb0I/OXCZG1wGMv8fcbgEz8WhesXWRMDC/cznpwIy8EUnMV0MQZHWUuuwFppATxwP19j4A/Qs9/ZIDKC9LwYvIvbcGgC7tAfkw0bYNzHIQ4yMaQ3UTJ36MwwdrIk4xLPm5Muc9tXBvMLhw085/hmbvTbGTo6s2djYILOe5Al91gzW+AaXgZT80UJvQIcuIXHYCAq22FzI8q2okKjRsnEPX4J4RiaoU536JIkarK/Ty0kSjR5bkYfoyhjWgNzfrLEia8p4yZd6h6YDubJOYD8pN5b27nmBgOfKQgf8+unjOSRPxkqs8Q0uA8nbS4OjlfoRRnpkNMZaGsSEsbrljQiItxSbN5ihgCx8O0A+eg9B2HPN18UxRqfLGr7Tf1cTGNWQQN/ZdHJqgz/q7Hqmhsqv/SqrPuxHverb9Tb7D7lhw//GNpAbbgrbQG64IZzPvwE/hs/xEOOjjgAAAABJRU5ErkJggg=="/><span class="instok">ЗАО Ессенце оф Натуре</span>','<img class="ib" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKQAAAARCAYAAABTsgeHAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAARVSURBVGhD7ZY9TiNBEIX3tFyGM3ACcsekhGREZE4cOSFx4tUH81lviuoZs9LuWmKe1PJ0/dfrmh7/Om/YcEPYBnLDTWEbyA03hdlAPj4+nh8eHtp1PB4nq0+wV/f+/j5Jv+L19fXD5v7+/mOR4+3tbdL2yNjdqrX8NMgPfPLbwbOsXCFnfQec7+l0mnZ/F7OBdGhy3d3dfazD4TBZfWK32110T09Pk3QObYjjMK35AHJpV+th1Vp+GhgouIHfl5eXSToHPGFTh08Or8Xz8/M/5Xzxk+0AdW+UjTk0FdyC6rKZ/X5/8eO5gwM5evsrsF+6NdGtEXoN4Ws381IMbpk1/4pRPM9lKZ8cs3JokXfnNeLomlxr6PoexRsOpLdbNxR8htFh49uKLKG8e4O5HfXvQLGj3AlyJvE8Zx3EkVD19WamBmNUf28HehjZAHpNfebgMKhBPc9rh1trSp7kVR01dtBfOz+5PLNEXhDaWj+xU26uGoN+Ug/Y06v8q1viG7QDiZEOHXmSQjPaIktYSOePDB02HdRnU648HPTWyI2sveAZGTps3PufN18MbNCz9+b2QPChTwbTvZCLGkOi3RMLGb7pX2FN+OFDXPbymy8HtqOvjHn0l7eaX06oTQ7V57BmrrQBnlcdSOsmN5yv8Q2+DCRKjFiSmiBwLci9Bw0siGIrbICCOqgnBja5JDbrkKz6xxt74uBDL1kf0F/YO/GAA5lEEzN9agxuRGvhufbpoeQhJIyXvbDHx0+ffXXcioyjPzmVJ+SFeNoau8tVY3hedSBrniqrfIPZQHrINXhCQrGjWA+oBraRjniGAx02HWxwpBfkMzeL56zBNz71eZOr49fF3rxrA7lWp/ouR8fvKB575Oi7fQdzgeQ75cCbSjlrLVeNYd3XDCR26tyTQ8wG0uTeQh26oCkTDm79lAPzdP8vgQ1moSNwA0B4Dmc9KF4KyDKvxFk79rm8ibBLe0AM+8xbWiCjL2IQyz5qjnqbgy4esO4/uSGFfy1YyjPfKHaXq8bueEKPb0I/OXCZG1wGMv8fcbgEz8WhesXWRMDC/cznpwIy8EUnMV0MQZHWUuuwFppATxwP19j4A/Qs9/ZIDKC9LwYvIvbcGgC7tAfkw0bYNzHIQ4yMaQ3UTJ36MwwdrIk4xLPm5Muc9tXBvMLhw085/hmbvTbGTo6s2djYILOe5Al91gzW+AaXgZT80UJvQIcuIXHYCAq22FzI8q2okKjRsnEPX4J4RiaoU536JIkarK/Ty0kSjR5bkYfoyhjWgNzfrLEia8p4yZd6h6YDubJOYD8pN5b27nmBgOfKQgf8+unjOSRPxkqs8Q0uA8nbS4OjlfoRRnpkNMZaGsSEsbrljQiItxSbN5ihgCx8O0A+eg9B2HPN18UxRqfLGr7Tf1cTGNWQQN/ZdHJqgz/q7Hqmhsqv/SqrPuxHverb9Tb7D7lhw//GNpAbbgrbQG64IZzPvwE/hs/xEOOjjgAAAABJRU5ErkJggg=="/><span class="instok">ЗАО Ессенце оф Натуре</span>','<img class="ib" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKQAAAARCAYAAABTsgeHAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAARVSURBVGhD7ZY9TiNBEIX3tFyGM3ACcsekhGREZE4cOSFx4tUH81lviuoZs9LuWmKe1PJ0/dfrmh7/Om/YcEPYBnLDTWEbyA03hdlAPj4+nh8eHtp1PB4nq0+wV/f+/j5Jv+L19fXD5v7+/mOR4+3tbdL2yNjdqrX8NMgPfPLbwbOsXCFnfQec7+l0mnZ/F7OBdGhy3d3dfazD4TBZfWK32110T09Pk3QObYjjMK35AHJpV+th1Vp+GhgouIHfl5eXSToHPGFTh08Or8Xz8/M/5Xzxk+0AdW+UjTk0FdyC6rKZ/X5/8eO5gwM5evsrsF+6NdGtEXoN4Ws381IMbpk1/4pRPM9lKZ8cs3JokXfnNeLomlxr6PoexRsOpLdbNxR8htFh49uKLKG8e4O5HfXvQLGj3AlyJvE8Zx3EkVD19WamBmNUf28HehjZAHpNfebgMKhBPc9rh1trSp7kVR01dtBfOz+5PLNEXhDaWj+xU26uGoN+Ug/Y06v8q1viG7QDiZEOHXmSQjPaIktYSOePDB02HdRnU648HPTWyI2sveAZGTps3PufN18MbNCz9+b2QPChTwbTvZCLGkOi3RMLGb7pX2FN+OFDXPbymy8HtqOvjHn0l7eaX06oTQ7V57BmrrQBnlcdSOsmN5yv8Q2+DCRKjFiSmiBwLci9Bw0siGIrbICCOqgnBja5JDbrkKz6xxt74uBDL1kf0F/YO/GAA5lEEzN9agxuRGvhufbpoeQhJIyXvbDHx0+ffXXcioyjPzmVJ+SFeNoau8tVY3hedSBrniqrfIPZQHrINXhCQrGjWA+oBraRjniGAx02HWxwpBfkMzeL56zBNz71eZOr49fF3rxrA7lWp/ouR8fvKB575Oi7fQdzgeQ75cCbSjlrLVeNYd3XDCR26tyTQ8wG0uTeQh26oCkTDm79lAPzdP8vgQ1moSNwA0B4Dmc9KF4KyDKvxFk79rm8ibBLe0AM+8xbWiCjL2IQyz5qjnqbgy4esO4/uSGFfy1YyjPfKHaXq8bueEKPb0I/OXCZG1wGMv8fcbgEz8WhesXWRMDC/cznpwIy8EUnMV0MQZHWUuuwFppATxwP19j4A/Qs9/ZIDKC9LwYvIvbcGgC7tAfkw0bYNzHIQ4yMaQ3UTJ36MwwdrIk4xLPm5Muc9tXBvMLhw085/hmbvTbGTo6s2djYILOe5Al91gzW+AaXgZT80UJvQIcuIXHYCAq22FzI8q2okKjRsnEPX4J4RiaoU536JIkarK/Ty0kSjR5bkYfoyhjWgNzfrLEia8p4yZd6h6YDubJOYD8pN5b27nmBgOfKQgf8+unjOSRPxkqs8Q0uA8nbS4OjlfoRRnpkNMZaGsSEsbrljQiItxSbN5ihgCx8O0A+eg9B2HPN18UxRqfLGr7Tf1cTGNWQQN/ZdHJqgz/q7Hqmhsqv/SqrPuxHverb9Tb7D7lhw//GNpAbbgrbQG64IZzPvwE/hs/xEOOjjgAAAABJRU5ErkJggg=="/><span class="instok">ЗАО Ессенце оф Натуре</span>','<img class="ib" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKQAAAARCAYAAABTsgeHAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAARVSURBVGhD7ZY9TiNBEIX3tFyGM3ACcsekhGREZE4cOSFx4tUH81lviuoZs9LuWmKe1PJ0/dfrmh7/Om/YcEPYBnLDTWEbyA03hdlAPj4+nh8eHtp1PB4nq0+wV/f+/j5Jv+L19fXD5v7+/mOR4+3tbdL2yNjdqrX8NMgPfPLbwbOsXCFnfQec7+l0mnZ/F7OBdGhy3d3dfazD4TBZfWK32110T09Pk3QObYjjMK35AHJpV+th1Vp+GhgouIHfl5eXSToHPGFTh08Or8Xz8/M/5Xzxk+0AdW+UjTk0FdyC6rKZ/X5/8eO5gwM5evsrsF+6NdGtEXoN4Ws381IMbpk1/4pRPM9lKZ8cs3JokXfnNeLomlxr6PoexRsOpLdbNxR8htFh49uKLKG8e4O5HfXvQLGj3AlyJvE8Zx3EkVD19WamBmNUf28HehjZAHpNfebgMKhBPc9rh1trSp7kVR01dtBfOz+5PLNEXhDaWj+xU26uGoN+Ug/Y06v8q1viG7QDiZEOHXmSQjPaIktYSOePDB02HdRnU648HPTWyI2sveAZGTps3PufN18MbNCz9+b2QPChTwbTvZCLGkOi3RMLGb7pX2FN+OFDXPbymy8HtqOvjHn0l7eaX06oTQ7V57BmrrQBnlcdSOsmN5yv8Q2+DCRKjFiSmiBwLci9Bw0siGIrbICCOqgnBja5JDbrkKz6xxt74uBDL1kf0F/YO/GAA5lEEzN9agxuRGvhufbpoeQhJIyXvbDHx0+ffXXcioyjPzmVJ+SFeNoau8tVY3hedSBrniqrfIPZQHrINXhCQrGjWA+oBraRjniGAx02HWxwpBfkMzeL56zBNz71eZOr49fF3rxrA7lWp/ouR8fvKB575Oi7fQdzgeQ75cCbSjlrLVeNYd3XDCR26tyTQ8wG0uTeQh26oCkTDm79lAPzdP8vgQ1moSNwA0B4Dmc9KF4KyDKvxFk79rm8ibBLe0AM+8xbWiCjL2IQyz5qjnqbgy4esO4/uSGFfy1YyjPfKHaXq8bueEKPb0I/OXCZG1wGMv8fcbgEz8WhesXWRMDC/cznpwIy8EUnMV0MQZHWUuuwFppATxwP19j4A/Qs9/ZIDKC9LwYvIvbcGgC7tAfkw0bYNzHIQ4yMaQ3UTJ36MwwdrIk4xLPm5Muc9tXBvMLhw085/hmbvTbGTo6s2djYILOe5Al91gzW+AaXgZT80UJvQIcuIXHYCAq22FzI8q2okKjRsnEPX4J4RiaoU536JIkarK/Ty0kSjR5bkYfoyhjWgNzfrLEia8p4yZd6h6YDubJOYD8pN5b27nmBgOfKQgf8+unjOSRPxkqs8Q0uA8nbS4OjlfoRRnpkNMZaGsSEsbrljQiItxSbN5ihgCx8O0A+eg9B2HPN18UxRqfLGr7Tf1cTGNWQQN/ZdHJqgz/q7Hqmhsqv/SqrPuxHverb9Tb7D7lhw//GNpAbbgrbQG64IZzPvwE/hs/xEOOjjgAAAABJRU5ErkJggg=="/><span class="instok">ЗАО Ессенце оф Натуре</span>'];
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