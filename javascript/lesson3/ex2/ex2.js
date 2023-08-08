// Bài 2: Tính tiền điện
// Học viên viết chương trình tiền điện hàng tháng theo yêu cầu sau

// Input: Số điện tiêu thụ hàng tháng

// Output: Hiển thị số tiền phải đóng

// Chi tiết giá điện theo bậc

var priceElectric,
  kwh = 1,
  price1 = 1.678,
  price2 = 1.734,
  price3 = 2.014,
  price4 = 2.536,
  price5 = 2.834,
  price6 = 2.927;
if (kwh > 0) {
  if (kwh > 50) {
    if (kwh > 100) {
      if (kwh > 200) {
        if (kwh > 300) {
          if (kwh > 400) {
            priceElectric = kwh * price6;
          } else {
            priceElectric = kwh * price5;
          }
        } else {
          priceElectric = kwh * price4;
        }
      } else {
        priceElectric = kwh * price3;
      }
    } else {
      priceElectric = kwh * price2;
    }
  } else {
    priceElectric = kwh * price1;
  }
  console.log(
    `Số điện tiêu thụ là ${kwh}kWh tương đương với ${priceElectric}VND`
  );
} else {
  console.log(`Không sử dụng điện !!!`);
}
