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
  StyledActionTableCell,
  StyledPaginationDiv,
  StyledTableCell,
  StyledTableRow,
  StyledTextField,
  TableContainerDiv,
  TextFieldMainDiv,
} from "../customComponents/tableComponent";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import CachedIcon from "@mui/icons-material/Cached";

import styles from "./tableStyle.module.css";
import { capsuleTableColumn } from "./capsuleTableColumn";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getCapsuleTableData, sendCapsuleDataToStore } from "../redux/actions";

function CapsulesTable() {
  const [isLoading, setIsLoading] = useState(false);
  const [dense, setDense] = useState(false);
  const [data, setData] = useState([]);
  const [search, setSearch] = useState({
    status: "",
    type: "",
    original_launch: "",
  });
  const dispatch = useDispatch();
  const { tableData } = useSelector((state) => state?.capsuleTable);

  const [page, setPage] = React.useState(0);

  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const [searchValues, setSearchValues] = React.useState({
    searchStatus: search?.status || "",
    searchType: search?.type || "",
    searchOriginalLaunch: search?.original_launch || "",
  });
  //   useEffect(() => {
  //     dispatch(getCapsuleTableData());
  //     return () => {};
  //   }, [dispatch]);
  useEffect(() => {
    axios
      .get("https://api.spacexdata.com/v3/capsules")
      .then((res) => setData(res?.data));
    dispatch(sendCapsuleDataToStore(data));
    return () => {};
  }, []);
  return (
    <>
      <MainContainerDiv>
        <LeftSearchDiv>
          <TextFieldMainDiv>
            <Grid container spacing={3}>
              <Grid item sm={12}>
                <StyledTextField
                  name="capsule"
                  label=" Capsule"
                  // value={searchValues?.capsule || ""}
                  // onChange={(e) => handleSearchKeys(e)}
                  fullWidth
                />
              </Grid>

              <Grid item sm={12}>
                <StyledTextField
                  // value={searchValues?.status || ""}
                  // onChange={(e) => handleSearchKeys(e)}
                  name="Search By Status"
                  label="status"
                  fullWidth
                />
              </Grid>
              <Grid item sm={12}>
                <StyledTextField
                  // value={searchValues?.type || ""}
                  // onChange={(e) => handleSearchKeys(e)}
                  name="type"
                  label="Search By Type"
                  fullWidth
                />
              </Grid>
              <Grid item sm={12}>
                <StyledTextField
                  // value={searchValues?.searchClientName || ""}
                  // onChange={(e) => handleSearchKeys(e)}
                  name="original_launch"
                  label="Search By Original Launch"
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
                  // onClick={handleSearchClientNumber}
                  variant="contained"
                >
                  Search
                </CustomButton>
                <CustomButton
                  // onClick={handleReset}
                  variant="contained"
                >
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
                        {capsuleTableColumn.map((item, i) => (
                          <StyledTableCell key={i}>
                            {item.label}
                          </StyledTableCell>
                        ))}
                        <StyledTableCell style={{ textAlign: "center" }}>
                          Actions
                        </StyledTableCell>
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
                          .map((row) => {
                            return (
                              <StyledTableRow
                                hover
                                role="checkbox"
                                tabIndex={-1}
                                key={row.capsule_id}
                              >
                                <TableCell>{row.capsule_serial}</TableCell>
                                <TableCell>{row.capsule_id}</TableCell>

                                <TableCell>{row.status}</TableCell>
                                <TableCell>{row.original_launch}</TableCell>
                                <TableCell>
                                  {row.original_launch_unix}
                                </TableCell>
                                <TableCell>{row.landings}</TableCell>
                                <TableCell>{row.type}</TableCell>
                                <TableCell>{row.reuse_count}</TableCell>

                                <StyledActionTableCell>
                                  <EditIcon
                                    className={styles.icon}
                                    //   onClick={() => handleEditAble(row.number)}
                                  />
                                </StyledActionTableCell>
                                <StyledActionTableCell>
                                  <DeleteIcon
                                    className={styles.icon}
                                    //   onClick={() => handleEditAble(row.number)}
                                  />
                                </StyledActionTableCell>
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
                            {searchValues?.searchStatus !== ""
                              ? "No data found for this status"
                              : searchValues?.searchOriginalLaunch !== ""
                              ? "No data found for this Original Launch"
                              : searchValues?.searchType !== ""
                              ? "No data found for this type"
                              : "No data found"}
                          </TableCell>
                          <TableCell></TableCell>

                          <TableCell>
                            <MenuItem>
                              <ListItemIcon
                              //   onClick={handleReset}
                              >
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
                      <Switch
                        checked={dense}
                        //   onChange={handleChangeDense}
                      />
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
    </>
  );
}

export default CapsulesTable;
