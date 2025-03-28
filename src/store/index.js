import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { rootReducer } from "./root-reducer";

const persistConfig = {
    key: "root",
    storage,
    // так же можно создать ключи для сохранения определенных элементов
    // whitelist: ["filters"], то что сохраняем
    // blacklist: ["positions"], то что не хотим сохранить
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
    persistedReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export { store };
export const persister = persistStore(store);
