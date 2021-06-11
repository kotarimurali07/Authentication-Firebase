import { rootReducer } from "../services/Authentication/reducers/index";
import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import {
  getFirebase,
  reactReduxFirebase,
  getFirestore,
} from "react-redux-firebase";
import { composeWithDevTools } from "redux-devtools-extension";
import firebaseConfig from "../config/firebaseConfig";

export const store = createStore(
  rootReducer,
  composeWithDevTools(
    compose(
      applyMiddleware(thunk.withExtraArgument({ getFirebase })),
      reactReduxFirebase(firebaseConfig)
    )
  )
);
