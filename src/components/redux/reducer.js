import produce from "immer";
import { TABLE_ACTION_TYPE } from "./type";

const initialState = {
  capsuleTable: {
    tableData: [],
    capsuleTableIndividualRecord: {},
    isLoading: false,
    isError: false,
    pageNumber: 0,
    pageSize: 10,
    totalCount: 0,
    currentPage: 1,
    errorMsg: "",
    search: {},
  },
};

export const tableReducer = (state = initialState, action) =>
  produce(state, (draftState) => {
    const { type, payload } = action;
    switch (type) {
      case TABLE_ACTION_TYPE.REQUEST_TABLE_DATA: {
        draftState.capsuleTable.isLoading = true;
        break;
      }
      case TABLE_ACTION_TYPE.SUCCESS_TABLE_DATA: {
        let { data } = payload;
        draftState.capsuleTable.isLoading = false;

        draftState.capsuleTable.tableData = data;
        draftState.capsuleTable.isError = false;
        break;
      }
      case TABLE_ACTION_TYPE.SEND_CAPSULE_DATA_TO_STORE: {
        let { data } = payload;
        draftState.capsuleTable.isLoading = false;

        draftState.capsuleTable.tableData = data;
        draftState.capsuleTable.isError = false;
        break;
      }
      case TABLE_ACTION_TYPE.FAILURE_TABLE_DATA: {
        draftState.capsuleTable.isLoading = false;

        draftState.capsuleTable.isError = true;
        break;
      }
      case TABLE_ACTION_TYPE.GET_INDIVIDUAL_RECORD: {
        draftState.capsuleTable.capsuleTableIndividualRecord = payload;
        break;
      }
      default: {
        break;
      }
    }
  });
