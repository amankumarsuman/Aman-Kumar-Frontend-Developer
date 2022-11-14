import axios from "axios";
import { useDispatch } from "react-redux";
import { TABLE_ACTION_TYPE } from "./type";

const requestDataOfCapsuleTable = () => {
  return {
    type: TABLE_ACTION_TYPE.REQUEST_TABLE_DATA,
  };
};

export const successDataOfCapsuleTable = (data) => {
  return {
    type: TABLE_ACTION_TYPE.SUCCESS_TABLE_DATA,
    payload: data,
  };
};

const failureDataOfCapsuleTable = (error) => {
  return {
    type: TABLE_ACTION_TYPE.FAILURE_TABLE_DATA,
    payload: error,
  };
};
export const sendCapsuleDataToStore = (data) => {
  return {
    type: TABLE_ACTION_TYPE.SEND_CAPSULE_DATA_TO_STORE,
    payload: data,
  };
};

const getIndividualRecordRequest = (data) => {
  return {
    type: TABLE_ACTION_TYPE.GET_INDIVIDUAL_RECORD_REQUEST,
    payload: data,
  };
};
const getIndividualRecordSuccess = (data) => {
  return {
    type: TABLE_ACTION_TYPE.GET_INDIVIDUAL_RECORD_SUCCESS,
    payload: data,
  };
};
const getIndividualRecordFailure = (data) => {
  return {
    type: TABLE_ACTION_TYPE.GET_INDIVIDUAL_RECORD_FAILURE,
    payload: data,
  };
};
export const getCapsuleTableData = () => (dispatch) => {
  // dispatch(requestDataOfCapsuleTable());
  // try {
  //   let res = await axios.get("https://api.spacexdata.com/v3/capsules");
  //   if ((await res.data.success) && Array.isArray(res.data)) {
  //     let updatedData = await res.data?.map((data) => {
  //       return {
  //         ...data,
  //         id: data.capsule_id,
  //       };
  //     });
  //     dispatch(
  //       successDataOfCapsuleTable({
  //         data: updatedData,
  //       })
  //     );
  //   } else {
  //     dispatch(failureDataOfCapsuleTable("data not found"));
  //   }
  // } catch (error) {
  //   dispatch(failureDataOfCapsuleTable("No Actual Data Found"));
  // }
};
export const getIndividualRecord = (payload) => {
  return {
    type: TABLE_ACTION_TYPE.GET_INDIVIDUAL_RECORD,
    payload: payload,
  };
};
