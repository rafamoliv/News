const initialState = {
  classifieds: [],
};

export const ActionTypes = {
  SET_CLASSIFIEDS: "SET_CLASSIFIEDS",
  NEW_CLASSIFIED: "NEW_CLASSIFIED",
  EDIT_CLASSIFIED: "EDIT_CLASSIFIED",
  DELETE_CLASSIFIED: "DELETE_CLASSIFIED",
};

export const ActionCreators = {
  setClassifieds: (payload) => ({ type: ActionTypes.SET_CLASSIFIEDS, payload }),
  newClassified: (payload) => ({ type: ActionTypes.NEW_CLASSIFIED, payload }),
  editClassified: (payload) => ({ type: ActionTypes.EDIT_CLASSIFIED, payload }),
  deleteClassified: (payload) => ({ type: ActionTypes.DELETE_CLASSIFIED, payload }),
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_CLASSIFIEDS:
      return { ...state, classifieds: [...action.payload] };

    case ActionTypes.NEW_CLASSIFIED:
      return { ...state, classifieds: [action.payload, ...state.classifieds] };

    case ActionTypes.EDIT_CLASSIFIED:
      var classifieds = state.classifieds.map((classified) => {
        if (classified.id === action.payload.id) {
          classified = action.payload;
        }
        return classified;
      });
      return { ...state, classifieds: [...classifieds] };

    case ActionTypes.DELETE_CLASSIFIED:
      var classifieds = state.classifieds.filter((classified) => classified.id !== action.payload.id);
      return { ...state, classifieds: [...classifieds] };

    default:
      return state;
  }
};
