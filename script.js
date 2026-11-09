
document.addEventListener("DOMContentLoaded", function () {

    const slider = document.querySelector("#main-slider");

    // スライダーが存在しない場合は終了
    if (!slider) {
        return;
    }

    // Splideが読み込まれていない場合は終了
    if (typeof Splide === "undefined") {
        console.error("Splideの読み込みに失敗しました。");
        return;
    }

    // Splideの初期化
    const splide = new Splide("#main-slider", {

        // スライド設定
        type: "loop",
        perPage: 1,
        perMove: 1,

        // 自動再生
        autoplay: true,
        interval: 5000,
        pauseOnHover: true,
        pauseOnFocus: true,

        // アニメーション
        speed: 1000,
        easing: "ease",

        // 操作設定
        arrows: true,
        pagination: true,
        drag: true,

        // 画像読み込み
        lazyLoad: "nearby",

        // その他
        rewind: false,
        keyboard: "global",
        resetProgress: false,

        // アクセシビリティ
        reducedMotion: {
            speed: 0,
            rewindSpeed: 0,
            autoplay: "pause"
        }

    });

    // マウント
    splide.mount();

});
