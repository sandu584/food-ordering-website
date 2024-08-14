// below all the code is setup for the STORE

import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
  compose,
} from "redux";
import thunk from "redux-thunk";
import { restaurantReducer } from "./reducer/restaurantReducer";
import { menuReducer } from "./reducer/menuReducer";
import { authReducer, forgotPasswordReducer, userReducer } from "./reducer/userReducer";
import { cartReducer } from "./reducer/cartReducer";
import { myOrderReducer, newOrderReducer, orderDetailsReducer } from "./reducer/orderReducer";

const reducer = combineReducers({
  restaurants: restaurantReducer,
  menus: menuReducer,
  auth: authReducer,
  user: userReducer,
  forgotPassword: forgotPasswordReducer,
  cart: cartReducer,
  newOrder: newOrderReducer,
  myOrders: myOrderReducer,
  orderDetails: orderDetailsReducer
});

// composeEnhancers helps for multiple state enhancers && adding redux dev tool to the project
const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// all the middleware will be handled by thunk
const middleware = [thunk];

const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(...middleware))
);

export default store;
