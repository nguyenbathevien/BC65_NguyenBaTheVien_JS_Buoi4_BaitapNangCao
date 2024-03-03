// Bài 1
// Lấy giá trị ngày, tháng, năm;
// giữ nguyên giá trị tháng năm;
// nếu tìm ngày trước thì tăng ngày lên 1 đơn vị và ngược lại
document.getElementById("handleAfter").onclick = function () {
  var ngay = +document.getElementById("ngay").value;
  var thang = +document.getElementById("thang").value;
  var nam = +document.getElementById("nam").value;
  ngay += 1;
  document.getElementById("result1").innerHTML = `${ngay}/${thang}/${nam}`;
};
document.getElementById("handleBefore").onclick = function () {
  var ngay = +document.getElementById("ngay").value;
  var thang = +document.getElementById("thang").value;
  var nam = +document.getElementById("nam").value;
  ngay -= 1;
  document.getElementById("result1").innerHTML = `${ngay}/${thang}/${nam}`;
};
// Bài 2
//lay giá trị tháng,năm
// Xét nếu tháng là 1 3 5 7 8 10 12 thì có 31 ngày
// nếu là 4 6 8 10 thì có 30 ngày
// nếu là 2 thì có 2 trường hợp là năm nhuận và năm không nhuận 
// nếu năm không nhuận thì có 28 ngày ngược lại thì có 29 ngày
document.getElementById("handleDate").onclick = function () {
  var thang = +document.getElementById("thang1").value;
  var nam = +document.getElementById("nam1").value;
  switch (thang) {
    case 1:
      document.getElementById("result2").innerHTML = `Tháng này có 31 ngày`;
      break;
    case 3:
      document.getElementById("result2").innerHTML = `Tháng này có 31 ngày`;
      break;
    case 5:
      document.getElementById("result2").innerHTML = `Tháng này có 31 ngày`;
      break;
    case 7:
      document.getElementById("result2").innerHTML = `Tháng này có 31 ngày`;
      break;
    case 8:
      document.getElementById("result2").innerHTML = `Tháng này có 31 ngày`;
      break;
    case 10:
      document.getElementById("result2").innerHTML = `Tháng này có 31 ngày`;
      break;
    case 12:
      document.getElementById("result2").innerHTML = `Tháng này có 31 ngày`;
      break;

    case 4:
      document.getElementById("result2").innerHTML = `Tháng này có 30 ngày`;
      break;
    case 6:
      document.getElementById("result2").innerHTML = `Tháng này có 30 ngày`;
      break;
    case 9:
      document.getElementById("result2").innerHTML = `Tháng này có 30 ngày`;
      break;
    case 11:
      document.getElementById("result2").innerHTML = `Tháng này có 30 ngày`;
      break;

    case 2:
      if (nam % 400 == 0 || (nam % 4 == 0 && nam % 100 != 0)) {
        document.getElementById("result2").innerHTML = `Tháng này có 29 ngày`;
      } else {
        document.getElementById("result2").innerHTML = `Tháng này có 28 ngày`;
      }
      break;
    default:
      document.getElementById("result2").innerHTML = alert(
        "Tháng không tồn tại"
      );
  }
};

// Bài 3
// lấy giá trị của number
// nếu độ dài không bằng 3 thì yêu cầu nhập lại
// lấy giá trị hàng trăm, chục, và đơn vị
// sau đó in cách đọc
document.getElementById("handleDoc").onclick = function () {
  var number = +document.getElementById("number").value;
  if (number < 100 || number > 999) {
    alert("Yêu cầu nhập số nguyên có 3 chữ số");
    return;
  }
  var tram = Math.floor(number / 100);
  var chuc = Math.floor((number / 10) % 10);
  var donvi = number % 10;
  var doctram;
  var docchuc;
  var docdonvi;
  switch (tram) {
    case 1:
      doctram = "một trăm";
      break;
    case 2:
      doctram = "hai trăm";
      break;
    case 3:
      doctram = "ba trăm";
      break;
    case 4:
      doctram = "bốn trăm";
      break;
    case 5:
      doctram = "năm trăm";
      break;
    case 6:
      doctram = "sáu trăm";
      break;
    case 7:
      doctram = "bảy trăm";
      break;
    case 8:
      doctram = "tám trăm";
      break;
    default:
      doctram = "chín trăm";
      break;
  }
  switch (chuc) {
    case 0:
      docchuc = "lẻ";
      break;
    case 1:
      docchuc = "mười";
      break;
    case 2:
      docchuc = "hai mươi";
      break;
    case 3:
      docchuc = "ba mươi";
      break;
    case 4:
      docchuc = "bốn mươi";
      break;
    case 5:
      docchuc = "năm mươi";
      break;
    case 6:
      docchuc = "sáu mươi";
      break;
    case 7:
      docchuc = "bảy mươi";
      break;
    case 8:
      docchuc = "tám mươi";
      break;
    default:
      docchuc = "chín mươi";
      break;
  }
  switch (donvi) {
    case 0:
      if (chuc == 0) {
        docdonvi = "";
        docchuc = "";
        break;
      }
      if (chuc == 1) {
        docdonvi = "";
      }
      break;
    case 1:
      docdonvi = "một ";
      break;
    case 2:
      docdonvi = "hai ";
      break;
    case 3:
      docdonvi = "ba ";
      break;
    case 4:
      docdonvi = "bốn ";
      break;
    case 5:
      docdonvi = "năm ";
      break;
    case 6:
      docdonvi = "sáu ";
      break;
    case 7:
      docdonvi = "bảy ";
      break;
    case 8:
      docdonvi = "tám ";
      break;
    default:
      docdonvi = "chín ";
      break;
  }
  document.getElementById("result3").innerHTML =
    doctram + " " + docchuc + " " + docdonvi;
};
// Bài 4
