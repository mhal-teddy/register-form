document.getElementById("register-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    if (password !== confirmPassword) {
        alert("パスワードが一致しません。");
        return;
    }
    alert("登録が成功しました。");
})