import axios from "axios";
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

export const getCapsuleTableData = () => async (dispatch) => {
  dispatch(requestDataOfCapsuleTable());

  try {
    let res = await axios.get("https://api.spacexdata.com/v3/capsules");

    if ((await res.data.success) && Array.isArray(res.data)) {
      let updatedData = await res.data?.map((data) => {
        return {
          ...data,
          id: data.capsule_id,
        };
      });

      dispatch(
        successDataOfCapsuleTable({
          data: updatedData,
        })
      );
    } else {
      dispatch(failureDataOfCapsuleTable("data not found"));
    }
  } catch (error) {
    dispatch(failureDataOfCapsuleTable("No Actual Data Found"));
  }
};
