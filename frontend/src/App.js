import React, { useEffect, useState } from "react";
import "./App.css";
import "./responsive.css";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar, Sidebar, Footer } from "./components";
import LoginSignUp from "./components/User/LoginSignUp";
import store from "./redux/store";
import { loadUser } from "./redux/actions/userAction";
import UserOptions from "./components/layout/Header/UserOptions";
import { useDispatch, useSelector } from "react-redux";
// import Profile from './components/User/Profile';
// import UpdateProfile from './components/User/UpdateProfile';
import UpdatePassword from "./components/User/UpdatePassword";
import ForgotPassword from "./components/User/ForgotPassword";
import ResetPassword from "./components/User/ResetPassword";
import Shipping from "./components/Cart/Shipping";
import ConfirmOrder from "./components/Cart/ConfirmOrder";
import axios from "axios";
// import Cart from './components/Cart/Cart';
import Payment from "./components/Cart/Payment";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import OrderSuccess from "./components/Cart/OrderSuccess";
// import MyOrders from './components/Order/MyOrders';
import OrderDetails from "./components/Order/OrderDetails";

import Dashboard from "./components/Admin/Dashboard.js";
import ProductList from "./components/Admin/ProductList.js";
import NewProduct from "./components/Admin/NewProduct";
import UpdateProduct from "./components/Admin/UpdateProduct";
import OrderList from "./components/Admin/OrderList";
import ProcessOrder from "./components/Admin/ProcessOrder";
import UsersList from "./components/Admin/UsersList";
import UpdateUser from "./components/Admin/UpdateUser";
import ProductReviews from "./components/Admin/ProductReviews";
// import Contact from "./components/layout/Contact/Contact";
// import About from "./components/layout/About/About";
// import NotFound from "./component/layout/Not Found/NotFound";

import {
  Home,
  SingleProduct,
  Profile,
  UpdateProfile,
  Orders,
  UpdateOrders,
  Cart,
  Checkout,
  Error,
  About,
  Products,
  PrivateRoute,
  AuthWrapper,
} from "./pages";
import { getRawProduct } from "./redux/actions/productAction";

import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/productScreen";
import CategoriesScreen from "./screens/CategoriesScreen";
import OrderScreen from "./screens/OrderScreen";
import OrderDetailScreen from "./screens/OrderDetailScreen";
import AddProduct from "./screens/AddProduct";
import Login from "./screens/LoginScreen";
import UsersScreen from "./screens/UsersScreen";
import ProductEditScreen from "./screens/ProductEditScreen";
import NotFound from "./screens/NotFound";

function App() {
  const dispatch = useDispatch();
  const { isAuthenticated, user } = useSelector((state) => state.user);

  const [stripeApiKey, setStripeApiKey] = useState("");

  async function getStripeApiKey() {
    const { data } = await axios.get("/api/v1/stripeapikey");

    setStripeApiKey(data.stripeApiKey);
  }

  const { loading, error, allProducts } = useSelector(
    (state) => state.allProducts
  );

  const [page, setPage] = useState(1);
  const [price, setPrice] = useState(25000);
  const [category, setCategory] = useState("");
  const [name, setName] = useState("");
  const [sortName, setSortName] = useState("");
  const [sortPrice, setSortPrice] = useState("");

  const [ratings, setRatings] = useState(0);

  useEffect(() => {
    dispatch(
      getRawProduct(name, page, price, category, ratings, sortName, sortPrice)
    );
    store.dispatch(loadUser());

    getStripeApiKey();
  }, []);

  // {
  //   stripeApiKey && (
  //     <Elements stripe={loadStripe(stripeApiKey)}>
  //       <PrivateRoute exact path="/process/payment" component={Payment} />
  //     </Elements>
  //   );
  // }

  // window.addEventListener('contextmenu', (e) => e.preventDefault());

  return (
    <AuthWrapper>
      <Router>
        {isAuthenticated && <UserOptions user={user} />}

        {/* {stripeApiKey && (
          <Elements stripe={loadStripe(stripeApiKey)}>
            <PrivateRoute exact path="/process/payment" component={Payment} />
          </Elements>
        )} */}
        {/* <Navbar /> */}
        <Sidebar />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/about'>
            <About />
          </Route>
          <Route exact path='/cart'>
            <Cart />
          </Route>
          <Route exact path='/products'>
            <Products />
          </Route>
          <Route exact path='/products/:id' children={<SingleProduct />} />

          <PrivateRoute exact path='/checkout'>
            <Checkout />
          </PrivateRoute>
          <PrivateRoute exact path='/account'>
            <Profile />
          </PrivateRoute>

          <PrivateRoute exact path='/me/update'>
            <UpdateProfile />
          </PrivateRoute>

          {/* <PrivateRoute exact path="/account" component={Profile} />

          <PrivateRoute exact path="/me/update" component={UpdateProfile} /> */}

          <PrivateRoute
            exact
            path='/password/update'
            component={UpdatePassword}
          />

          <Route exact path='/password/forgot' component={ForgotPassword} />

          <Route
            exact
            path='/password/reset/:token'
            component={ResetPassword}
          />

          <Route exact path='/login' component={LoginSignUp} />

          <Route path='/new/' component={HomeScreen} exact />
          <Route path='/new/products' component={ProductScreen} />
          <Route path='/new/category' component={CategoriesScreen} />
          <Route path='/new/orders' component={OrderScreen} />
          <Route path='/new/order' component={OrderDetailScreen} />
          <Route path='/new/addproduct' component={AddProduct} />
          <Route path='/new/users' component={UsersScreen} />
          <Route path='/new/product/:id/edit' component={ProductEditScreen} />
          <Route path='/new/login' component={Login} />

          {/* <Route exact path="/cart" component={Cart} /> */}

          <PrivateRoute exact path='/shipping' component={Shipping} />

          <PrivateRoute exact path='/success' component={OrderSuccess} />

          {/* <PrivateRoute exact path="/orders" component={MyOrders} /> */}
          <PrivateRoute exact path='/orders'>
            <Orders />
          </PrivateRoute>

          <PrivateRoute exact path='/order/confirm' component={ConfirmOrder} />

          <PrivateRoute exact path='/order/:id' component={OrderDetails} />

          {/* <PrivateRoute exact path="/order/:id">
            <UpdateOrders />
          </PrivateRoute> */}
          <PrivateRoute
            isAdmin={true}
            exact
            path='/admin/dashboard'
            component={Dashboard}
          />
          <PrivateRoute
            exact
            path='/admin/products'
            isAdmin={true}
            component={ProductList}
          />
          <PrivateRoute
            exact
            path='/admin/product'
            isAdmin={true}
            component={NewProduct}
          />

          <PrivateRoute
            exact
            path='/admin/product/:id'
            isAdmin={true}
            component={UpdateProduct}
          />
          <PrivateRoute
            exact
            path='/admin/orders'
            isAdmin={true}
            component={OrderList}
          />

          <PrivateRoute
            exact
            path='/admin/order/:id'
            isAdmin={true}
            component={ProcessOrder}
          />
          <PrivateRoute
            exact
            path='/admin/users'
            isAdmin={true}
            component={UsersList}
          />

          <PrivateRoute
            exact
            path='/admin/user/:id'
            isAdmin={true}
            component={UpdateUser}
          />

          <PrivateRoute
            exact
            path='/admin/reviews'
            isAdmin={true}
            component={ProductReviews}
          />
          {stripeApiKey && (
            <Elements stripe={loadStripe(stripeApiKey)}>
              <PrivateRoute exact path='/process/payment' component={Payment} />
            </Elements>
          )}
          <Route path='*'>
            <Error />
          </Route>
        </Switch>
        {/* <Footer /> */}
      </Router>
    </AuthWrapper>
  );
}

export default App;
