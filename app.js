// app.js

// ウェブページが読み込まれたときの処理
document.addEventListener('DOMContentLoaded', function () {
    // ホームページを表示
    showPage('home');

    // SignInボタンがクリックされたときの処理
    document.querySelector('.app-button.green').addEventListener('click', function () {
        // サインイン画面を表示
        showPage('signin');
    });

    // SignUpボタンがクリックされたときの処理
    document.querySelector('.app-button.blue').addEventListener('click', function () {
        // サインアップ画面を表示
        showPage('signup');
    });
});

// 指定したページを表示する関数
function showPage(pageName) {
    // すべてのページを非表示にする
    document.querySelectorAll('.app-page').forEach(function (page) {
        page.style.display = 'none';
    });

    // 指定したページを表示
    document.querySelector(`[data-page="${pageName}"]`).style.display = 'block';
    
}