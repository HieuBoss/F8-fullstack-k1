// Bài 02
// Cho trước 1 mảng số nguyên, tính trung bình các số nguyên tố trong mảng. Nếu trong mảng không có số nguyên tố thì hiển thị “Không có số nguyên tố”

var number = [2, 1, 5, 3, 13, 6, 7];

function arrPrime(number) {
  var primes = number.filter(function (prime) {
    if (prime <= 1 || prime % 1 !== 0) {
      return false;
    }
    for (let i = 2; i < prime; i++) {
      if (prime % i === 0) {
        return false;
      }
      return true;
    }
  });
  if (primes.length === 0) {
    console.log(`Không có số nguyên tố`);
  }
  var results = primes.reduce(function (total, prime) {
    return total + prime;
  }, 0);
  console.log(`Tổng của các số nguyên là ${results}`);
}
console.log(arrPrime(number));
