const initialState = {
  classifieds: [],
};

export const ActionTypes = {
  SET_CLASSIFIEDS: "SET_CLASSIFIEDS",
};

export const ActionCreators = {
  setClassifieds: (payload) => ({ type: ActionTypes.SET_CLASSIFIEDS, payload }),
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_CLASSIFIEDS:
      return { ...state, classifieds: [...action.payload] };

    default:
      return state;
  }
};
