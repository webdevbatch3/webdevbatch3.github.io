function transformUppercase(_val){
    return _val.toUpperCase();
}

var elNamaPengguna = document.getElementById('namaPengguna');
elNamaPengguna.addEventListener("keyup", function(){
    elNamaPengguna.value = transformUppercase(elNamaPengguna.value);
});
