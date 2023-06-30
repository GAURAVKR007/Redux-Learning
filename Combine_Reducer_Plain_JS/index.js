import store from "./redux/index.js";
console.log(store);
import {changeCount} from "./redux/count"

store.dispatch(changeCount(42))