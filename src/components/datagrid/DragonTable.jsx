import {
  FormControlLabel,
  Grid,
  ListItemIcon,
  MenuItem,
  Switch,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { CustomButton } from "../customComponents/CustomButton";
import { LoadingTable } from "../customComponents/LoadingContainer";
import {
  LeftSearchDiv,
  LoadingContainer,
  MainContainerDiv,
  PaperDiv,
  RightTableDiv,
  StyledPaginationDiv,
  StyledTableCell,
  StyledTableRow,
  StyledTextField,
  TableContainerDiv,
  TextFieldMainDiv,
} from "../customComponents/tableComponent";

import CachedIcon from "@mui/icons-material/Cached";

import styles from "./tableStyle.module.css";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Usekey } from "../customComponents/KeyBoard";
import { dragonTableColumn } from "./dragonTableColumn";
import { getIndividualRecord } from "../redux/actions";
import DragonPopupDialogue from "../popupDialogue/DragonPopupDiagolue";

function DragonTable() {
  const [isLoading, setIsLoading] = useState(false);
  const [dense, setDense] = useState(false);
  const [data, setData] = useState([]);

  const dispatch = useDispatch();
  const { tableData } = useSelector((state) => state?.capsuleTable);

  const [page, setPage] = React.useState(0);

  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const init = {
    id: "",
    type: "",
    name: "",
  };
  const [searchValues, setSearchValues] = React.useState(init);
  //FETCHING DATA FROM API
  const getDragonTableData = () => {
    axios
      .get("https://api.spacexdata.com/v3/dragons")
      .then((res) => setData(res?.data));
  };
  useEffect(() => {
    getDragonTableData();
    return () => {};
  }, []);

  const handleSearchDragonRecord = () => {
    if (searchValues?.name) {
      const filterData = data.filter((el) =>
        el.name.toLowerCase().includes(searchValues?.name?.toLowerCase())
      );
      setData(filterData);
    } else if (searchValues?.type) {
      const filterData = data.filter((el) =>
        el.type.toLowerCase().includes(searchValues?.type?.toLowerCase())
      );
      setData(filterData);
    } else if (searchValues?.id) {
      const filterData = data.filter((el) =>
        el.id.toLowerCase().includes(searchValues?.id?.toLowerCase())
      );
      setData(filterData);
    }
  };

  //for keyboard interaction
  Usekey("Enter", handleSearchDragonRecord);
  Usekey("NumpadEnter", handleSearchDragonRecord);

  const handleSearchKeys = (e) => {
    const { name, value } = e.target;
    if (name === "id") {
      setSearchValues({ id: value });
    } else if (name === "type") {
      setSearchValues({ type: value });
    } else if (name === "name") {
      setSearchValues({ name: value });
    }
  };

  //reset
  const handleReset = () => {
    setSearchValues({
      id: "",
      type: "",
      name: "",
    });
    handleRefresh();
  };
  //refres
  const handleRefresh = () => {
    getDragonTableData();
    handleReset();
  };

  //function to get individual record
  const handleIndividualRecord = (row) => {
    // alert(row);
    dispatch(getIndividualRecord(row));
    setOpen(true);
  };
  return (
    <>
      <MainContainerDiv>
        <LeftSearchDiv>
          <TextFieldMainDiv>
            <Grid sx={{ marginTop: "1em" }} container spacing={3}>
              <Grid item sm={12}></Grid>

              <Grid item sm={12}>
                <StyledTextField
                  value={searchValues?.name || ""}
                  onChange={handleSearchKeys}
                  name="name"
                  label="Search By Name"
                  fullWidth
                />
              </Grid>
              <Grid item sm={12}>
                <StyledTextField
                  value={searchValues?.type || ""}
                  onChange={handleSearchKeys}
                  name="type"
                  label="Search By Type"
                  fullWidth
                />
              </Grid>
              <Grid item sm={12}>
                <StyledTextField
                  value={searchValues?.id || ""}
                  onChange={handleSearchKeys}
                  name="id"
                  label="Search By ID"
                  fullWidth
                />
              </Grid>
              <Grid
                container
                direction="column"
                spacing={10}
                justifyContent="space-around"
                alignItems="stretch"
                sx={{ width: "70%", margin: "auto", minHeight: "100px" }}
              >
                <CustomButton
                  onClick={handleSearchDragonRecord}
                  variant="contained"
                >
                  Search
                </CustomButton>
                <CustomButton onClick={handleReset} variant="contained">
                  Reset
                </CustomButton>
              </Grid>
            </Grid>
          </TextFieldMainDiv>
        </LeftSearchDiv>
        <>
          <RightTableDiv>
            {isLoading ? (
              <LoadingTable />
            ) : (
              <PaperDiv>
                <TableContainerDiv>
                  <Table
                    stickyHeader
                    aria-label="sticky table"
                    size={dense ? "small" : "medium"}
                  >
                    <TableHead>
                      <TableRow>
                        {dragonTableColumn.map((item, i) => (
                          <StyledTableCell key={i}>
                            {item.label}
                          </StyledTableCell>
                        ))}
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {isLoading && data?.length === 0 ? (
                        <StyledTableRow>
                          <TableCell>
                            <LoadingContainer
                              className={styles.loadingContainer}
                            >
                              Loading....
                            </LoadingContainer>
                          </TableCell>
                        </StyledTableRow>
                      ) : data?.length >= 1 ? (
                        data
                          ?.slice(
                            page * rowsPerPage,
                            page * rowsPerPage + rowsPerPage
                          )
                          .map((row, i) => {
                            return (
                              <StyledTableRow
                                hover
                                role="checkbox"
                                tabIndex={-1}
                                key={i}
                                onClick={() => handleIndividualRecord(row)}
                              >
                                <TableCell>{row.id}</TableCell>
                                <TableCell>{row.name}</TableCell>

                                <TableCell>{row.type}</TableCell>
                                <TableCell>
                                  {row.active ? "YES" : "NO"}
                                </TableCell>
                                <TableCell>{row.crew_capacity}</TableCell>
                                <TableCell>{row.first_flight}</TableCell>
                              </StyledTableRow>
                            );
                          })
                      ) : (
                        <StyledTableRow
                          hover
                          tabIndex={-1}
                          style={{ border: "1px solid red" }}
                        >
                          <TableCell></TableCell>
                          <TableCell></TableCell>
                          <TableCell></TableCell>
                          <TableCell>
                            {searchValues?.name !== ""
                              ? "No data found for this name"
                              : searchValues?.id !== ""
                              ? "No data found for this id"
                              : searchValues?.type !== ""
                              ? "No data found for this type"
                              : "No data found"}
                          </TableCell>
                          <TableCell></TableCell>

                          <TableCell>
                            <MenuItem>
                              <ListItemIcon onClick={handleRefresh}>
                                <CachedIcon />
                              </ListItemIcon>
                              Reset
                            </MenuItem>
                          </TableCell>
                        </StyledTableRow>
                      )}
                    </TableBody>
                  </Table>
                </TableContainerDiv>

                <StyledPaginationDiv>
                  <FormControlLabel
                    control={
                      <Switch checked={dense} onChange={handleChangeDense} />
                    }
                    label="Denser"
                  />
                  <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={data?.length}
                    rowsPerPage={rowsPerPage}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                    page={page}
                  />
                </StyledPaginationDiv>
              </PaperDiv>
            )}
          </RightTableDiv>
        </>
      </MainContainerDiv>
      {open ? (
        <DragonPopupDialogue open={open} handleClose={handleClose} />
      ) : null}
    </>
  );
}

export default DragonTable;
