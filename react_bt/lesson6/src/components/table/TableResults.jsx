import React from "react";

function TableResults(props) {
  const historyData = props.data;
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        overflow: "auto hidden",
      }}
    >
      {historyData.map((item, outerIndex) => (
        <table
          key={outerIndex}
          className="text-center mx-auto"
          style={{
            width: "80%",
            border: "2px solid #319795",
            flex: "0 0 100%",
            width: "80%",
            border: "2px solid rgb(49, 151, 149)",
          }}
        >
          <thead>
            <tr>
              <th>Số lần nhập</th>
              <th>Số nhập vào</th>
            </tr>
          </thead>
          <tbody>
            {item.map((round, innerIndex) => (
              <tr key={innerIndex} className="border-bottom">
                <td>{innerIndex + 1}</td>
                <td>{round.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ))}
    </div>
  );
}

export default TableResults;
