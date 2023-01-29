import express from "express";
import XLSX from "xlsx";
import path from "path";
import fs from "fs";
const __dirname = path.resolve();


export const createFormEnquiry = async (req, res, next) => {
  try {
    const formData = req.body;

    // check if the excel file already exists
    let workbook;
    if (fs.existsSync(path.join(__dirname, ".", "backend", "formData.xlsx"))) {
      // load the existing workbook
      workbook = XLSX?.readFile(
        path.join(__dirname, ".", "backend", "formData.xlsx")
      );
      // Get the first sheet of the workbook
      let sheet = workbook?.Sheets[workbook.SheetNames[0]];
      // check if sheet is empty
      if (!sheet || !sheet["!ref"]) {
        // if sheet is empty then create new sheet
        sheet = XLSX.utils.aoa_to_sheet([["Key", "Value"]]);
        workbook.SheetNames.push("Sheet1");
        workbook.Sheets["Sheet1"] = sheet;
      }
    } else {
      // create a new workbook
      sheet = XLSX.utils.aoa_to_sheet([["Key", "Value"]]);
      workbook = XLSX.utils.book_new();
      workbook.SheetNames.push("Sheet1");
      workbook.Sheets["Sheet1"] = sheet;
    }

    // Get the first sheet of the workbook
    let sheet = workbook?.Sheets[workbook.SheetNames[0]];

    if (!sheet || !sheet["!ref"]) {
      // if sheet is empty then create new sheet
      let headers = [["Key", "Value"]];
      sheet = XLSX.utils.aoa_to_sheet(headers);
      workbook.SheetNames.push("Sheet1");
      workbook.Sheets["Sheet1"] = sheet;
    }

    if (sheet && sheet["!ref"]) {
      //  // get the last row of the sheet
      let lastRow = sheet["!ref"]?.split(":")[1];
      let nextRow = XLSX.utils?.decode_cell(lastRow);
      // Add the form data to the sheet
      for (let key in formData) {
        sheet[XLSX.utils?.encode_cell({ c: 0, r: nextRow.r })] = key;
        sheet[XLSX.utils?.encode_cell({ c: 1, r: nextRow.r })] = formData[key];
        nextRow.r++;
      }

      // Update the sheet range
      sheet["!ref"] = `A1:B${nextRow.r}`;

      // Save the workbook to the protected directory
      XLSX.writeFile(
        workbook,
        path.join(__dirname, ".", "backend", "formData.xlsx")
      );

      res
        .status(200)
        .send({ message: "Form data received and saved successfully.",
    workbook });
    } else {
      console.log("Sheet not found");
    }
  } catch (error) {
    res.status(404).json({ message: error.message });
  }

};
