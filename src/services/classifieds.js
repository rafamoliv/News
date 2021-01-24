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
    dispatch(
      ActionCreators.newClassified({
        id: 10,
        title: classified.title,
        //date: classified.date,
        description: classified.description,
      })
    );
  } catch {
    console.log("error");
  }
};

export const EditClassified = async (dispatch, classified) => {
  try {
    //api call
    dispatch(ActionCreators.editClassified(classified));
  } catch {
    console.log("error");
  }
};

export const DeleteClassified = async (dispatch, classified) => {
  try {
    //api call
    dispatch(ActionCreators.deleteClassified(classified));
  } catch {
    console.log("error");
  }
};
