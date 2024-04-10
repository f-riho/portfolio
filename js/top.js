
// loding 

$(function () {
    var webStorage = function () {
        if (sessionStorage.getItem('access')) {
            /*
              2回目以降アクセス時の処理
            */
            $('#container').hide();
        } else {
            /*
              初回アクセス時の処理
            */
            sessionStorage.setItem('access', 'true'); // sessionStorageにデータを保存
            //テキストのカウントアップ+バーの設定
            var bar = new ProgressBar.Line(splash_text, {//id名を指定
                easing: 'easeInOut',//アニメーション効果linear、easeIn、easeOut、easeInOutが指定可能
                duration: 2000,//時間指定(1000＝1秒)
                strokeWidth: 0.2,//進捗ゲージの太さ
                color: '#068B72',//進捗ゲージのカラー
                trailWidth: 0.2,//ゲージベースの線の太さ
                trailColor: '#EEE36E',//ゲージベースの線のカラー
                text: {//テキストの形状を直接指定
                    style: {//天地中央に配置
                        position: 'absolute',
                        left: '50%',
                        top: '50%',
                        padding: '0',
                        margin: '-30px 0 0 0',//バーより上に配置
                        transform: 'translate(-50%,-50%)',
                        'font-size': '1rem',
                        color: '#068B72',
                    },
                    autoStyleContainer: false //自動付与のスタイルを切る
                },
                step: function (state, bar) {
                    bar.setText(Math.round(bar.value() * 100) + ' %'); //テキストの数値
                }
            });
            //アニメーションスタート
            bar.animate(1.0, function () {//バーを描画する割合を指定します 1.0 なら100%まで描画します
                $("#splash").delay(500).fadeOut(800);//アニメーションが終わったら#splashエリアをフェードアウト
            });
            // タイマー機能
            setTimeout(function () {
                // ページが読み込まれて3秒後にここに記述された処理が発動します。
                $('#container').fadeOut();
                //      ふわっと画面遷移
            }, 3000);
        }
    }
    webStorage();
});

$(function () {

});