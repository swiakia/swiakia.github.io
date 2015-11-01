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
            var arImg = ['//farm6.staticflickr.com/5659/20741972933_f0489be416_n.jpg','//farm6.staticflickr.com/5674/21363091715_8f774962d6_n.jpg','//farm6.staticflickr.com/5728/21336828666_e432187360_n.jpg'];
        } else {
            var arImg = ['//farm6.staticflickr.com/5659/20741972933_16318ee5a5_o.jpg','//farm6.staticflickr.com/5674/21363091715_39dcc9c694_o.jpg','//farm6.staticflickr.com/5728/21336828666_299aa6962b_o.jpg'];

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
            a.href = 'http://кликай-тут.рф/wiakia/1503.html';
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
    var rImg = ['//farm1.staticflickr.com/665/21199908560_7916f7e5c1_n.jpg','//farm6.staticflickr.com/5811/21370254925_9df4ba0dd5_n.jpg','//farm6.staticflickr.com/5806/21593890661_0c3be2f285_n.jpg','//farm1.staticflickr.com/665/21183861038_1b650a8300_n.jpg','//farm6.staticflickr.com/5640/21411556965_58b32a6012_n.jpg','//farm6.staticflickr.com/5626/21465283281_2a6c713763_n.jpg','//farm6.staticflickr.com/5643/21950346076_3db7aef529_n.jpg','//farm6.staticflickr.com/5796/21363183625_46bed06409_n.jpg','//farm1.staticflickr.com/754/21379205302_8db04a6099_n.jpg','//farm1.staticflickr.com/745/20833711224_ca1dda89eb_n.jpg','//farm1.staticflickr.com/655/21231245368_4dd28a4cf0_n.jpg','//farm6.staticflickr.com/5694/21025601274_61ef8f22be_n.jpg'];
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
    var pe = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA5MDAgNjAwIj4NCjxwYXRoIGZpbGw9IiNkYTEyMWEiIGQ9Im0wLDBoOTAwdjYwMGgtOTAweiIvPg0KPHBhdGggZmlsbD0iI2ZmZiIgZD0ibTMwMCwwaDMwMHY2MDBoLTMwMHoiLz4NCjwvc3ZnPg0K';var us = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjM1IDY1MCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPg0KPGRlZnM+DQo8ZyBpZD0idW5pb24iPg0KPHVzZSB5PSItLjIxNiIgeGxpbms6aHJlZj0iI3g0Ii8+DQo8dXNlIHhsaW5rOmhyZWY9IiN4NCIvPg0KPHVzZSB5PSIuMjE2IiB4bGluazpocmVmPSIjczYiLz4NCjwvZz4NCjxnIGlkPSJ4NCI+DQo8dXNlIHhsaW5rOmhyZWY9IiNzNiIvPg0KPHVzZSB5PSIuMDU0IiB4bGluazpocmVmPSIjczUiLz4NCjx1c2UgeT0iLjEwOCIgeGxpbms6aHJlZj0iI3M2Ii8+DQo8dXNlIHk9Ii4xNjIiIHhsaW5rOmhyZWY9IiNzNSIvPg0KPC9nPg0KPGcgaWQ9InM1Ij4NCjx1c2UgeD0iLS4yNTIiIHhsaW5rOmhyZWY9IiNzdGFyIi8+DQo8dXNlIHg9Ii0uMTI2IiB4bGluazpocmVmPSIjc3RhciIvPg0KPHVzZSB4bGluazpocmVmPSIjc3RhciIvPg0KPHVzZSB4PSIuMTI2IiB4bGluazpocmVmPSIjc3RhciIvPg0KPHVzZSB4PSIuMjUyIiB4bGluazpocmVmPSIjc3RhciIvPg0KPC9nPg0KPGcgaWQ9InM2Ij4NCjx1c2UgeD0iLS4wNjMiIHhsaW5rOmhyZWY9IiNzNSIvPg0KPHVzZSB4PSIuMzE1IiB4bGluazpocmVmPSIjc3RhciIvPg0KPC9nPg0KPGcgaWQ9InN0YXIiPg0KPHVzZSB4bGluazpocmVmPSIjcHQiIHRyYW5zZm9ybT0ibWF0cml4KC0uODA5MDIgLS41ODc3OSAuNTg3NzkgLS44MDkwMiAwIDApIi8+DQo8dXNlIHhsaW5rOmhyZWY9IiNwdCIgdHJhbnNmb3JtPSJtYXRyaXgoLjMwOTAyIC0uOTUxMDYgLjk1MTA2IC4zMDkwMiAwIDApIi8+DQo8dXNlIHhsaW5rOmhyZWY9IiNwdCIvPg0KPHVzZSB4bGluazpocmVmPSIjcHQiIHRyYW5zZm9ybT0icm90YXRlKDcyKSIvPg0KPHVzZSB4bGluazpocmVmPSIjcHQiIHRyYW5zZm9ybT0icm90YXRlKDE0NCkiLz4NCjwvZz4NCjxwYXRoIGZpbGw9IiNmZmYiIGlkPSJwdCIgZD0iTS0uMTYyNSwwIDAtLjUgLjE2MjUsMHoiIHRyYW5zZm9ybT0ic2NhbGUoLjA2MTYpIi8+DQo8cGF0aCBmaWxsPSIjYmYwYTMwIiBpZD0ic3RyaXBlIiBkPSJtMCwwaDEyMzV2NTBoLTEyMzV6Ii8+DQo8L2RlZnM+DQo8cGF0aCBmaWxsPSIjZmZmIiBkPSJtMCwwaDEyMzV2NjUwaC0xMjM1eiIvPg0KPHVzZSB4bGluazpocmVmPSIjc3RyaXBlIi8+DQo8dXNlIHk9IjEwMCIgeGxpbms6aHJlZj0iI3N0cmlwZSIvPg0KPHVzZSB5PSIyMDAiIHhsaW5rOmhyZWY9IiNzdHJpcGUiLz4NCjx1c2UgeT0iMzAwIiB4bGluazpocmVmPSIjc3RyaXBlIi8+DQo8dXNlIHk9IjQwMCIgeGxpbms6aHJlZj0iI3N0cmlwZSIvPg0KPHVzZSB5PSI1MDAiIHhsaW5rOmhyZWY9IiNzdHJpcGUiLz4NCjx1c2UgeT0iNjAwIiB4bGluazpocmVmPSIjc3RyaXBlIi8+DQo8cGF0aCBmaWxsPSIjMDAyODY4IiBkPSJtMCwwaDQ5NHYzNTBoLTQ5NHoiLz4NCjx1c2UgeGxpbms6aHJlZj0iI3VuaW9uIiB0cmFuc2Zvcm09Im1hdHJpeCg2NTAgMCAwIDY1MCAyNDcgMTc1KSIvPg0KPC9zdmc+DQo=';var kr = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOTAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNjAwIiB2aWV3Qm94PSItMzYgLTI0IDcyIDQ4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+DQo8cGF0aCBmaWxsPSIjZmZmIiBkPSJtLTM2LTI0aDcydjQ4aC03MnoiLz4NCjxnIHRyYW5zZm9ybT0ibWF0cml4KC41NTQ3IC0uODMyMDUgLjgzMjA1IC41NTQ3IDAgMCkiPg0KPGcgaWQ9ImIyIj4NCjxwYXRoIHN0cm9rZT0iIzAwMCIgaWQ9ImIiIHN0cm9rZS13aWR0aD0iMiIgZD0iTS02LTI1SDZNLTYtMjJINk0tNi0xOUg2Ii8+DQo8dXNlIHk9IjQ0IiB4bGluazpocmVmPSIjYiIvPg0KPC9nPg0KPHBhdGggc3Ryb2tlPSIjZmZmIiBkPSJtMCwxN3YxMCIvPg0KPGNpcmNsZSBmaWxsPSIjYzYwYzMwIiByPSIxMiIvPg0KPHBhdGggZmlsbD0iIzAwMzQ3OCIgZD0iTTAtMTJBNiw2IDAgMCAwIDAsMEE2LDYgMCAwIDEgMCwxMkExMiwxMiAwIDAsMSAwLTEyWiIvPg0KPC9nPg0KPGcgdHJhbnNmb3JtPSJtYXRyaXgoLS41NTQ3IC0uODMyMDUgLjgzMjA1IC0uNTU0NyAwIDApIj4NCjx1c2UgeGxpbms6aHJlZj0iI2IyIi8+DQo8cGF0aCBzdHJva2U9IiNmZmYiIGQ9Im0wLTIzLjV2M20wLDM3LjV2My41bTAsM3YzIi8+DQo8L2c+DQo8L3N2Zz4NCg==';
    var cImg = ['<img class="ic" alt="Перу" src="'+pe+'" /><span class="instok">Перу</span>','<img class="ic" alt="США" src="'+us+'" /><span class="instok">США</span>','<img class="ic" alt="Корея" src="'+kr+'" /><span class="instok">Корея</span>','<img class="ic" alt="США" src="'+us+'" /><span class="instok">США</span>',];

    for (var q = 0; q < cImg.length; q++) {
        var cQ = document.getElementById('c' + q);
        if (cQ != null)
            cQ.innerHTML = cImg[q];
    }
}

function preBrandImg() {
    var bImg = ['<img class="ib" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC8AAAARCAYAAABNV/VxAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAGRSURBVEhL7ZQ7rsIwEEXfatkMa8gK6KlpKelS0dFQ0dDQGJ2QI24s8yASEkLiStbY870ef/7KF+NH/lOYkF+v16XrunI6nUbNDavVatBjn4PD4TDOStntdkMO5LswIU/yxWJRjsfjqLnrkK/icrkM/hmz3W7Lcrkc5LvwL3k6/Yw4vufzeVzdgG7uhh+B3NnMxEPyz4hjp5P4IPFzE+q1gew819KYROrIxdxcSK5vokleydhsNqP1jr7vh2RsIDfqlSDGguqQ6SMxN8xbSLvNYU0NOeUpNMlbmME8H14NiluYeECBXIOaPA1gbXPqzQDnnFTdINAkTxIIWDBJCDuTm5xDHhgLSWReCwiz1odRxzfJ7/f7UXPX5fWxC357NdlXyZtHmSdMLITl0op/+GAFwehI5P+vn4ktLln8jDFXq3j6MRLq+Hb9euv4p+QBx4decrkhBnqlYI2P+VrkgTXrjyEfvblrvwl5OlETF+jThi9EPOra7kPWTvewIxP4ZVyCWGp44vg5BxPy34Yf+c+glCs2tmPd/4yGiAAAAABJRU5ErkJggg=="/><span class="instok">Катива</span>','<img class="ib" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEkAAAARCAYAAACRroFGAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAIESURBVFhH7ZYxkupADET/abkMZ+AE5MSkhGREZCREJCQk/vVYP7Ytj8HBVu0G7irV2NKM1GrPDPzrFnzEItIMLCLNwKRI2+2222w23fl87j3fuN1uz9hut+s9QxifMtcxtuJY5pZLtf1+38/4gvlOp1Pv+YJ+eFUcj8dnjBpTaIpEkdVq9TQSVFyv18kYIL5er19mLt8lxPr0pyVp3lvzKofM93g8eu+3H14VxrDL5dJ7h2iKBEGLMdYv8EmkxLu578gnFCVxv99H/LLh3IlTdViH3zxTu2kkksWxw+EwKgj+gkjA5qpI+t0ZU3XoCz8nxxr0XzESSWEYU7DET4vEWC13rxzgpLnbmSt4xsddlTH9VaTsTcHIXTESyYUqKpm8DH9DJOY5+lx3OOuIUVPeNJ1+4b1rjjx6FQOR2J5MxCQrMZ7FT4uU5FuAg+ThKKf61TNfngLnZx3nEuPZd6xe4AOR8sKuBTC/7m+KBPJj5l+Umg8RnZd+dw2WfWL46gU+EMmJ+fMJPONuTRtnLkSqJeaIRP53eeSVqPcOaImuL/2uZUzQt7XyAn+JxJ8qFtZzDup5tfGW1WbmiNSyzCPxCtfbbEuk3HX6zdf6Jcu7TLxEQgiS1F0kiGVx31tWgc+jmrDmlIn6LmgyY+arqP5cU0H/xJLv4LgtaGMRaQYWkT6i6/4DkYmC5SV5iccAAAAASUVORK5CYII="/><span class="instok">АЛТЕРНА</span>','<img class="ib" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAI0AAAARCAYAAADg+i+dAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAOXSURBVGhD7Zg9UuRADIX3tFyGM3ACcmJSQjIiMhIiEhKS2fpm+QbNW6nHU0XoV6WyR61++nXb8OewY8eV2Idmx9XYh2bH1TgbmoeHh8Pd3d1/8vj4+G3xDx8fH62dwnri/v7+uPb6+vqt+YF8+K9I/fPz88lHJ6ybw9PT03GP+Pz8PNl9fX19a38wcRN3xmwuncADJr6My3izZqm3FilTfMiEqd7UCN3t7e1RsMl4wdnQYHRzc3PapKBjTby/vx91nS3CesXLy8vJvvII+XIt9SRQ/aR/1t/e3k56iiAoIvp8AAR7kw9Bh9TGqE9bxCKv+GpDrXnWLPXWIjnVZXzIhK7eDJJ8XFnzdw5XOzQ1AZ5KNzv1ndMVbFjyiIlv5cem2KQKBoM1m0NBJx4x8SUXIA9khY6PfNzrQHc1B6mfasGJdm18HZc9qgNivOhrzzYPTQ1iSqADxXG/hczJnfhWfqYmC3Ph5Kn3EyY+T8nfGBrAPvTW2NhqzUHqp1o4NPUEvRRfctUeJXjg8iFvh4arIhnFEzpFX22RHIhavCm4qSCTHkxNEZ4u+OKacSXkYzi4R2iE+7vXU80bqYMlHxzkgair+bMPHesVqbcW7K0+0VW/AJvqIyEX+7vfl7D5m6YGNiWAZHPk8DiGh73dELK/YpWMDeA6gViMs/v4ragNRbjXdx0Y4Lo5K93QpLC35s4+9ORakXprIUdK5VQ3Ieu6qnOHi68nYPFt0FYnfpRqi5BM7p34Vn62DM01xUg+c2avAy8uNQXIxyBxj/AqSS74scuap35Vo4znUnzJ5e9uDz3MmDcNTS0AmBJIeKqYhIIO8V3JVbuK7ntCGBPXCVvjBB2f8ed+81hhS3xAH/WkANbJGq1ySdtL8XVc7sned/p2aHgPk6zCJvQmplP01U7xg1OH+WrwL5L6KtM3OvbjS7/+76MCP6xxnbAqdKLj8xssYzAvbFO04/5SfMAHAz72EnN9rYqp5vVEFKv46EVXF9ZqHPRgemjaoUmBqDZYp5MQAI65r/tEd7LAye/Kg3SnDDBJrhO64kyY+MyD2DymuzgVfW2JT9j4Kvio31KrmmPLuljFh91Ul/rhr2DjCSbOhoZFSavkOw10dgrTLNf0AaptAh2FplkZbIVPzMQvsFnxiBUf+rrm7070tTU+wT5OHXL3pE6kLyXR2SiC+64u9No4qn3F2dDs2LEF+9DsuBr70Oy4EofDX6CZ0jQxIFiTAAAAAElFTkSuQmCC"/><span class="instok">Бьюти Републик</span>','<img class="ib" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJ8AAAARCAYAAADDoX5IAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAPzSURBVGhD7ZY7UiNBEET3tFyGM3ACfGxcTDwsPBwsHBwcbTytHpvK7Z6RIFg5kxEdmvp2VXV2w6/dhg0Xwka+DRfDRr4NF8MR+e7u7nY3Nzf79fLyctDudm9vb5/629vbg/YyYP+fruG7exDLrJhb4qt5O89PwDOGA0uAF/RwfX29X8Q8Pj4erH/RvY56PyIfia6urvYriyC5eja8JGz6J/HdPYhlVj3sc/Ny0Pg/PDwcND+H19fXfc1wYIanp6cjHuBrrx3XvbYMpuRLR4Y40gtuDcUvYcm+Fo/9/f19/z1qApxSA8AvcUqMwLfjR6A+55Wvwqx2ehvVAenI8R3yjeplL+cp0LHXjHz42xckFOjlzVKdo96H5INsOOaBY+sE3kxiWHzf398frH9grpF9LZ7BWRM2XmN+WWIth/7G4kNNkEKZ3zwkYwRD1Vf/5+fng/VftO/Hx8enniU8OP359bWEDCO980yyph0gk9fZSYqcgT6e8Rr5/OuX+wjOwJyC7yUZDMnnjYPhFsWBdgL8kfHjMNpOocTSNHbze3POiacO49NnLQffsxzEoEfuwzOHN544huwhIM9gvLn5Tb1Aj8y8sza+Iaz98+sLmj6CHFkPsnHsQQ/0ih6ZWGuTmOiQZ31x/unfIDdLrMlgSD5fE4qXiOo6Qd4cbPg6mPbndSGPLwE4J14ipA6ckkMf+/F1xA+5D2+2x4jgDe30yS/51+bHbJoQ1poHfir5ep8Ee/YlGs0h4UXIWhK955oMhuSjEL5x9hd0Al8z9Szj15oBX4nXTyzlAO3fBzraZxSjjoV/2hv6AV4c86ceQDgOVT0ra+taAXnQ2R8gbql+4Uvrsi4wm7ewlvyXRkDm3nNNBlPy+cxmQZkgN/T/pYwfFeSNw/8r8SB1azlA+oM+0NHQM0by+OcLdM5G2301WKlnT2QuEOjaWgbd36z+lIGvqn++O26UJ8HLjZ3c+ZcLyBX6FPhlry2DKfncjGXzmWBUPDbjgfloGF0O4Nx4yGX8OTUg6w/6QDsHyBj9vfGSMXM2ek8vScfpx2Gy7Nfa6BuZvvtySSJn0vWnDIyT6B03mkPDS4QPc4AjeSbWCOxNtAym5AM4t5wJ9FevTFGAOHO4srlz4rXrK9ZytP+55Gvi5JphZHff1Pti6G/tEp3DRM44yJM6/2x3/SkD47BpT7/RHEbIV9xFHkkt3Ee0DI7IR7MSDfC9JANuALeQQ+L2Yu9nGSIw/I4Fa/HosSchz6mh/Ud7IOet7RhrYB/Qc2p0vBjpnY37Y89a+O7ZqcuZZEzLYhSXeWdxDXyYxexMwSh3+x6Rb8OG/4mNfBsuho18Gy6E3e43wYlt0185omoAAAAASUVORK5CYII="/><span class="instok">Макадамия Натурал Ойл</span>'];
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