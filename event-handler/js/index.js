function transformUppercase(_val){
    return _val.toUpperCase();
}

let elNamaPengguna = document.getElementById("namaPengguna"); //1) select the element
elNamaPengguna.addEventListener("keyup",function(){
    elNamaPengguna.value = transformUppercase(elNamaPengguna.value);
});