import {
  Box,
  Paper,
  TableCell,
  tableCellClasses,
  TableContainer,
  TableRow,
  TextField,
} from "@mui/material";
import { styled } from "@mui/material/styles";
const MainContainerDiv = styled(Box)({
  display: "flex",
  flexDirection: "row",
  width: "100%",
  margin: "0px auto",
  alignItems: "center",
  justifyContent: "space-between",
  height: "87vh",
});
const LeftSearchDiv = styled(Box)({
  width: "20%",
  minWidth: "250px",
  display: "flex",
  flexDirection: "column",
  height: "92vh",
  marginTop: "5.5em",
});
const TextFieldMainDiv = styled(Box)({
  backgroundColor: "#E1E4E8",
  height: "95vh",
  padding: "10px",
});
const RightTableDiv = styled(Box)({
  backgroundColor: "#FFFFFF",
  width: "100%",
  height: "88vh",
  marginTop: "8em",
});

const TableContainerDiv = styled(TableContainer)({
  height: "65vh",
  borderRadius: "4px 4px 0px 0px",
});

const StyledActionTableCell = styled(TableCell)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around",
});

const StyledPaginationDiv = styled(Box)({
  display: "flex",
  width: "98%",
  margin: "0 auto",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
});

const StyledTableRow = styled(TableRow)({
  "&:nth-of-type(even)": {
    backgroundColor: "#F4F7FC",
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
});

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    background: "#CFD9FE",
    color: theme.palette.common.black,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 16,
  },
}));
const StyledTextField = styled(TextField)({
  // backgroundColor: "#fff",
  "& label.Mui-focused": {
    color: "green",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "green",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "grey",
    },
    "&:hover fieldset": {
      borderColor: "blue",
    },
    "&.Mui-focused fieldset": {
      borderColor: "green",
    },
  },
});
const PaperDiv = styled(Paper)({
  width: "98%",
  margin: "0 auto",
  marginTop: "2em",
  height: "82vh",
  // border: "1px solid red",
});
const LoadingContainer = styled(Box)({
  display: "flex",
  height: "50vh",
  margin: "0 auto",
  alignItems: "center",
  justifyContent: "center",
  // border: "10px solid red",
  overflow: "hidden",
});

export {
  MainContainerDiv,
  LeftSearchDiv,
  TextFieldMainDiv,
  RightTableDiv,
  TableContainerDiv,
  StyledActionTableCell,
  StyledPaginationDiv,
  StyledTableRow,
  StyledTableCell,
  StyledTextField,
  PaperDiv,
  LoadingContainer,
};
