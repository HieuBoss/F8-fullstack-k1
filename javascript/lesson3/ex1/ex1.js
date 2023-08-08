/*Bài 1: Tính tiền taxi
Tính tiền cước taxi dựa vào các điều kiện sau
Số km ≤ 1 giá 15000đ
1 < số km ≤ 5 giá 13500đ
Số km > 5 giá 11000đ
Nếu số km > 120 km sẽ được giảm 10% trên tổng số tiền*/

var totalPrice,
  price1 = 15000,
  price2 = 13500,
  price3 = 11000,
  km = 0.5;
if (km > 0) {
  if (km <= 1) {
    totalPrice = price1 * km;
  } else if (120 < km) {
    totalPrice = km * price3 - (km * price3 * 10) / 100;
  } else if (5 < km <= 119) {
    totalPrice = price3 * km;
  } else {
    if (1 < km <= 5) {
      totalPrice = price2 * km;
    }
  }

  console.log(`Bạn đã đi ${km}km hết : ${totalPrice}VND`);
} else {
  console.log(`Không thể tính tiền!!!`);
}
