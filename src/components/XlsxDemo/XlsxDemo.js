import React from "react";
// import { JsonToExcel } from "react-json-to-excel";
import * as XLSX from "xlsx";

let dataSheet = [
  { name: "Sagar Borude", mobile: "8805189617", city: "Ahemdnagar" },
  { name: "Sachin Shelke", mobile: "8805184178", city: "Rahuri" },
  { name: "Ranjit Harishchandre", mobile: "8805187439", city: "Nashik" },
];

const XlsxDemo = () => {
  let handleExport = () => {
    let wb = XLSX.utils.book_new();
    let ws = XLSX.utils.json_to_sheet(dataSheet);
    XLSX.utils.book_append_sheet(wb, ws, "MySheet1");
    XLSX.writeFile(wb, "MyExcel.xlsx");
  };

  //   let std = dataSheet.map((student, ind) => {
  //     return { name: student.name, index: ind + 1 };
  //   });

  //   console.log(std);

  return (
    <div style={{ padding: "50px" }}>
      <div style={{ width: "50%" }}>
        <table
          style={{
            width: "100%",
            border: "1px solid gray",
            borderCollapse: "collapse",
          }}
        >
          <tr>
            <td>Name </td>
            <td> Mobile</td>
            <td>City</td>
          </tr>
          {dataSheet.map((i, ind) => {
            return (
              <tr key={ind}>
                <td> {i.name}</td>
                <td> {i.mobile}</td>
                <td> {i.city}</td>
              </tr>
            );
          })}
        </table>
      </div>

      <button style={{ margin: "50px" }} onClick={handleExport}>
        Click to Export
      </button>
    </div>
  );
};

export default XlsxDemo;
