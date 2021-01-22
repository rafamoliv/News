import { configureStore } from "@reduxjs/toolkit";
import classifiedsReducer from "./classifiedsReducer";

export default configureStore({
  reducer: {
    classifiedsReducer: classifiedsReducer,
  },
});
