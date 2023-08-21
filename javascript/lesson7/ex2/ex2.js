// bài 2

function Customer(name, age, address) {
  this.name = name;
  this.age = age;
  this.address = address;
}
function createCustomers(customers) {
  var validArr = customers?.every?.((customer) => {
    customer.name &&
      typeof customer.name === "string" &&
      customer.age &&
      typeof customer.age === "number" &&
      customer.age > 0 &&
      customer.address &&
      typeof customer.address === "string";
  });
  //   console.log(validArr);
  return customers?.length
    ? (customers.sort((a, b) => a.age - b.age),
      customers.map?.((customer) => {
        var customName = customer.name.split(" ");
        customer.shortName = `${customName[0]} ${
          customName[customName.length - 1]
        }`;
        return customer;
      }))
    : "Không có gì!";
}
const customers = [
  { name: "Nguyễn Văn A", age: 11, address: "Ha Noi" },
  { name: "Nguyễn Văn B", age: 2, address: "Hai Phong" },
  { name: "Nguyễn Văn C", age: 12, address: "TP.HCM" },
];

const result = createCustomers(customers); // Tạo hàm createCustomers này. return về mảng mới.
console.log(result);
