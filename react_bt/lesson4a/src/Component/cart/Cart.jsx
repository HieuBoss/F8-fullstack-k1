import React from "react";

export default function Cart() {
  return (
    <div className="container mt-4 shadow">
      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr className="bg-gray-50">
              <th>Tên sản phẩm</th>
              <th>Số lượng</th>
              <th>Còn lại</th>
              <th>Tổng tiền</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className="d-flex align-items-center">
                  <p className="font-weight-bold">Khăn Doritos</p>
                </div>
              </td>
              <td>1</td>
              <td>1027</td>
              <td>182666</td>
            </tr>
            <tr>
              <td>
                <div className="d-flex align-items-center">
                  <p className="font-weight-bold">Vở Pocky</p>
                </div>
              </td>
              <td>1</td>
              <td>403</td>
              <td>121510</td>
            </tr>
          </tbody>
        </table>
      </div>
      <button className="btn btn-success">Thanh toán</button>
    </div>
  );
}
