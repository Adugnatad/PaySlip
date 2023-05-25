import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import ArticleIcon from "@mui/icons-material/Article";
import MenuAppBar from "../Header/Header";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";

pdfMake.vfs = pdfFonts.pdfMake.vfs;
function createData(name, calories, fat, carbs, protein, price) {
  return {
    name,
    calories,
    fat,
    carbs,
    protein,
    price,
    history: [
      {
        date: "2020-01-05",
        customerId: "11091700",
        amount: 3,
      },
      {
        date: "2020-01-02",
        customerId: "Anonymous",
        amount: 1,
      },
    ],
  };
}

const documentDefinition = {
  content: [
    {
      text: "Payroll Report",
      style: "header",
      alignment: "center",
      margin: [0, 0, 0, 20],
    },
    {
      table: {
        headerRows: 1,
        widths: [
          "auto",
          "auto",
          "auto",
          "auto",
          "auto",
          "auto",
          "auto",
          "auto",
        ],
        body: [
          [
            { text: "Pay Period", style: "tableHeader" },
            { text: "Currency", style: "tableHeader" },
            { text: "Gross Earnings", style: "tableHeader" },
            { text: "Net Pay", style: "tableHeader" },
            { text: "Employee Tax", style: "tableHeader" },
            { text: "Employee Social Security", style: "tableHeader" },
            { text: "Deductions", style: "tableHeader" },
            { text: "Employee Pension", style: "tableHeader" },
          ],
          [
            { text: "2020-01-05", style: "tableCell" },
            { text: "ETB", style: "tableCell" },
            { text: "10000.00", style: "tableCell" },
            { text: "50000.00", style: "tableCell" },
            { text: "5000.00", style: "tableCell" },
            { text: "145541.00", style: "tableCell" },
            { text: "415.00", style: "tableCell" },
            { text: "750.00", style: "tableCell" },
          ],
          [
            { text: "2020-01-05", style: "tableCell" },
            { text: "ETB", style: "tableCell" },
            { text: "10000.00", style: "tableCell" },
            { text: "50000.00", style: "tableCell" },
            { text: "5000.00", style: "tableCell" },
            { text: "145541.00", style: "tableCell" },
            { text: "415.00", style: "tableCell" },
            { text: "750.00", style: "tableCell" },
          ],
        ],
      },
    },
  ],
  styles: {
    header: {
      fontSize: 18,
      bold: true,
    },
    tableHeader: {
      bold: true,
      fontSize: 12,
      color: "black",
      fillColor: "#f2f2f2",
      alignment: "center",
    },
    tableCell: {
      fontSize: 10,
      color: "black",
      alignment: "right",
    },
  },
};

const generatePdf = () => {
  const pdfDoc = pdfMake.createPdf(documentDefinition);
  pdfDoc.open();
};

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell colSpan={9}>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
            className="bg-red-100"
          >
            {open ? (
              <KeyboardArrowUpIcon className="border-0" />
            ) : (
              <KeyboardArrowDownIcon className="border-0" />
            )}
          </IconButton>
          Tax Year: 2021-2022
        </TableCell>
        <TableCell>
          <ArticleIcon onClick={generatePdf} />
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={10}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box>
              <Table aria-label="purchases">
                <TableBody>
                  {row.history.map((historyRow, index) => (
                    <TableRow key={index}>
                      <TableCell style={{ width: "150px" }}>
                        2020-01-05
                      </TableCell>
                      <TableCell>ETB</TableCell>
                      <TableCell>10000</TableCell>
                      <TableCell>50000</TableCell>
                      <TableCell>5000</TableCell>
                      <TableCell>145541</TableCell>
                      <TableCell>415</TableCell>
                      <TableCell>750</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

const rows = [
  createData("Tax Year 2021-2022", "", "", "", "", "", "", "", ""),
  createData("Tax Year 2021-2022", "", "", "", "", "", "", "", ""),
  createData("Tax Year 2021-2022", "", "", "", "", "", "", "", ""),
  createData("Tax Year 2021-2022", "", "", "", "", "", "", "", ""),
  createData("Tax Year 2021-2022", "", "", "", "", "", "", "", ""),
  createData("Tax Year 2021-2022", "", "", "", "", "", "", "", ""),
  createData("Tax Year 2021-2022", "", "", "", "", "", "", "", ""),
];

export default function PaySlip() {
  return (
    <div className="flex flex-col items-center w-full ">
      <MenuAppBar />
      <TableContainer component={Paper} className="mx-[30px]">
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>Pay Period</TableCell>
              <TableCell>Currency</TableCell>
              <TableCell>Gross Earnings</TableCell>
              <TableCell>Net Pay</TableCell>
              <TableCell>Employee Tax</TableCell>
              <TableCell>Employee Social Security</TableCell>
              <TableCell>Deductions</TableCell>
              <TableCell>Employee Pension</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <Row key={index} row={row} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
