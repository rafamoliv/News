import { ActionCreators } from "../redux/classifiedsReducer";
import api from "./api";

export const GetClassifieds = async (dispatch) => {
  try {
    //api call
    const { data } = await api.get();

    dispatch(ActionCreators.setClassifieds(data));
  } catch {
    console.log("error");
  }
};

export const NewClassified = async (dispatch, classified) => {
  try {
    //api call
    const { data } = await api.post("", classified);

    dispatch(ActionCreators.newClassified(data));
  } catch {
    console.log("error");
  }
};

export const EditClassified = async (dispatch, classified) => {
  try {
    //api call
    await api.put("", classified);

    dispatch(ActionCreators.editClassified(classified));
  } catch {
    console.log("error");
  }
};

export const DeleteClassified = async (dispatch, classified) => {
  try {
    //api call
    await api.delete("", { data: { ...classified } });

    dispatch(ActionCreators.deleteClassified(classified));
  } catch {
    console.log("error");
  }
};
