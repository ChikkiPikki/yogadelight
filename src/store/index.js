import { configureStore } from "@reduxjs/toolkit";

import { persistReducer, persistStore } from "redux-persist";
import thunk from 'redux-thunk'
import { CookieStorage } from "redux-persist-cookie-storage";
import Cookies from 'js-cookie'

import formReducer, { changeThanksAnimation, changeFormDisplay, changeModalSeen } from "./slices/formSlice";
import { adminApi } from "./services/admin";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

const persistConfig = {
  key: 'root',
  storage: new CookieStorage(Cookies)
}

const persistedFormReducer = persistReducer(persistConfig, formReducer);

const store = configureStore({
  reducer: {
    form: persistedFormReducer,
    [adminApi.reducerPath]: adminApi.reducer
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
      .concat(adminApi.middleware)
  }
});

setupListeners(store.dispatch)

export { changeThanksAnimation, changeFormDisplay, changeModalSeen };
export default store;
export {
  useGetLeadsQuery,
  useNewLeadMutation
} from "./services/admin"
export const persistor = persistStore(store);
