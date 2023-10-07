// Для создания хранилища
import { configureStore } from "@reduxjs/toolkit";

// Добавляем срез (reducer)
import popupReducer from "./popupSlice";
import mobileReducer from "./mobileSlice";
import loadReducer from "./loadSlice";

// В качестве параметра - хранилище с reduces
export default configureStore({
    reducer: {
        popup: popupReducer, // добавляем slice в хранилище
        mobile: mobileReducer, // добавляем slice в хранилище
        load: loadReducer,
    }

})


