import { ActionCreators } from "../redux/classifiedsReducer";

export const GetClassifieds = async (dispatch) => {
  try {
    //api call
    const classifieds = [
      { id: 1, title: "Diarista", date: "23/12", description: "50 reais por hora", url: "https://source.unsplash.com/random/200x150" },
      { id: 2, title: "Jornal", date: "15/12", description: "News Jornal", url: "https://source.unsplash.com/random/200x150" },
      { id: 3, title: "Futebol", date: "21/12", description: "Flu 1x0 Fla", url: "https://source.unsplash.com/random/200x150" },
    ];

    dispatch(ActionCreators.setClassifieds(classifieds));
  } catch {
    console.log("error");
  }
};
