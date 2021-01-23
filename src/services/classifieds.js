import { ActionCreators } from "../redux/classifiedsReducer";

export const GetClassifieds = async (dispatch) => {
  try {
    //api call
    const classifieds = [
      { id: 1, title: "Emprego", date: "23/12", description: "50 reais por hora" },
      { id: 2, title: "Automóveis", date: "15/12", description: "News Jornal" },
      { id: 3, title: "Imóveis", date: "21/12", description: "Flu 1x0 Fla" },
    ];

    dispatch(ActionCreators.setClassifieds(classifieds));
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
