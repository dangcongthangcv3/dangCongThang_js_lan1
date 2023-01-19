// CÂU 1
function cau1(){
    var ketQua1= document.getElementById('txtNgayLam').value * 100000
    document.getElementById('ketQua1').innerHTML =  'Kết quả: ' +  ketQua1
}

// CÂU 2
function cau2(){
    var giaTri1= document.getElementById('txtGiaTri1').value
    var giaTri2= document.getElementById('txtGiaTri2').value
    var giaTri3= document.getElementById('txtGiaTri3').value
    var giaTri4= document.getElementById('txtGiaTri4').value
    var giaTri5= document.getElementById('txtGiaTri5').value
    var ketQua2= (parseInt(giaTri1) + parseInt(giaTri2) + parseInt(giaTri3) + parseInt(giaTri4) + parseInt(giaTri5))/5
    document.getElementById('ketQua2').innerHTML =  'Kết quả: ' +  ketQua2
}

// CÂU 3
function cau3(){
    var USD= document.getElementById('txtUSD').value
    var ketQua3 = document.getElementById('ketQua3')
    var VND =USD*23500
    ketQua3.innerHTML = 'Số tiền: ' + VND + ' VNĐ'
}

// CÂU 4
function cau4(){
    var chieuRong= document.getElementById('txtChieuDai').value
    var chieuDai= document.getElementById('txtChieuRong').value
    var ketQua4 = document.getElementById('ketQua4')
    var dienTich = chieuDai*chieuRong
    var chuVi = (parseInt(chieuDai)+parseInt(chieuRong))/2

    ketQua4.innerHTML = 'Diện tích: ' + dienTich + '<br/> Chu vi: '+ chuVi
}

// CÂU 5
function cau5(){
    var chuSo= document.getElementById('txtChuSo').value
    var hangDonVi = parseInt(chuSo)%10
    var hangChuc = Math.floor(parseInt(chuSo)/10)
    var tong = hangChuc + hangDonVi
    ketQua5.innerHTML = 'Tổng: ' + tong
}
//Hoàn thành JS lần 1