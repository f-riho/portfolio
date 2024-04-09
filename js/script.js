// font
(function (d) {
    var config = {
        kitId: 'nuy0gdd',
        scriptTimeout: 3000,
        async: true
    },
        h = d.documentElement, t = setTimeout(function () { h.className = h.className.replace(/\bwf-loading\b/g, "") + " wf-inactive"; }, config.scriptTimeout), tk = d.createElement("script"), f = false, s = d.getElementsByTagName("script")[0], a; h.className += " wf-loading"; tk.src = 'https://use.typekit.net/' + config.kitId + '.js'; tk.async = true; tk.onload = tk.onreadystatechange = function () { a = this.readyState; if (f || a && a != "complete" && a != "loaded") return; f = true; clearTimeout(t); try { Typekit.load(config) } catch (e) { } }; s.parentNode.insertBefore(tk, s)
})(document);

$(function () {
    $('body').fadeIn(1000); //1秒かけてフェードイン！
});

//  marker
document.addEventListener('DOMContentLoaded', function () {

    var markerText = document.querySelectorAll('.js-marker'); // 監視対象を選択
    var markerTextArr = Array.prototype.slice.call(markerText); // 監視対象をArrayに変換（IE対策）

    /* IntersectionObserverに渡すコールバック関数 */
    var cb = function (entries, observer) {
        entries.forEach((entry) => {

            if (entry.isIntersecting) {
                /* 監視対象が画面内に入ったときのアクション */
                entry.target.classList.add('inview'); // 画面内に入った要素にinviewクラスを付与
                observer.unobserve(entry.target); // 1度発火した後監視を止める
            }

        });
    }

    /* IntersectionObserverに渡すコールバック関数 */
    var options = {
        rootMargin: "-50px 0px"
    }

    /* IntersectionObserver初期化 */
    var io = new IntersectionObserver(cb, options);
    io.POLL_INTERVAL = 100; // Polyfillの設定

    markerTextArr.forEach(el => {
        io.observe(el);
    });

});

// fadein
$(function ($) {
    var fadeIn = $('.fade-in');
    $(window).on('scroll', function () {
        $(fadeIn).each(function () {
            var offset = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > offset - windowHeight + 150) {
                $(this).addClass("scroll-in");
            }
        });
    });
});


// $(function () {

particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 100,//この数値を変更すると紙吹雪の数が増減できる
            "density": {
                "enable": false,
                "value_area": 400
            }
        },
        "color": {
            "value": ["#EA5532", "#F6AD3C", "#FFF33F", "#00A95F", "#00ADA9", "#00AFEC", "#4D4398", "#E85298"]//紙吹雪の色の数を増やすことが出来る
        },
        "shape": {
            "type": "polygon",//形状はpolygonを指定
            "stroke": {
                "width": 0,
            },
            "polygon": {
                "nb_sides": 5//多角形の角の数
            }
        },
        "opacity": {
            "value": 1,
            "random": false,
            "anim": {
                "enable": true,
                "speed": 20,
                "opacity_min": 0,
                "sync": false
            }
        },
        "size": {
            "value": 5.305992965476349,
            "random": true,//サイズをランダムに
            "anim": {
                "enable": true,
                "speed": 1.345709068776642,
                "size_min": 0.8,
                "sync": false
            }
        },
        "line_linked": {
            "enable": false,
        },
        "move": {
            "enable": true,
            "speed": 5,//この数値を小さくするとゆっくりな動きになる
            "direction": "bottom",//下に向かって落ちる
            "random": false,//動きはランダムにならないように
            "straight": false,//動きをとどめない
            "out_mode": "out",//画面の外に出るように描写
            "bounce": false,//跳ね返りなし
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": false,
            },
            "onclick": {
                "enable": false,
            },
            "resize": true
        },
    },
    "retina_detect": true
});