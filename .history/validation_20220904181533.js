function dangki(){
    var DangKi=document.getElementById("divdangki");
    var DangNhap=document.getElementById("divdangnhap");
    var a_DangKi=document.getElementById("a-dangki");
    var a_DangNhap=document.getElementById("a-dangnhap");
    DangKi.style.display="block";
    DangNhap.style.display="none";
    a_DangKi.style.backgroundColor="#282a37" ;
    a_DangNhap.style.backgroundColor="#808080" ;
}
function dangnhap(){
    var DangKi=document.getElementById("divdangki");
    var DangNhap=document.getElementById("divdangnhap");
    var a_DangKi=document.getElementById("a-dangki");
    var a_DangNhap=document.getElementById("a-dangnhap");
     
    DangKi.style.display="none";
    DangNhap.style.display="block";
    a_DangKi.style.backgroundColor="#808080" ;
    a_DangNhap.style.backgroundColor="#282a37" ;
}