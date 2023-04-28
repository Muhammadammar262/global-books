import LoginPage from "./components/loginPage/LoginPage";
import SignUp from "./components/Signup/SignUp";
import Category from "./components/categoryPage/Category";
import ShippingPage from "./components/shipping/ShippingPage";
import ProductDetailPage from "./components/productDetail/ProductDetailPage";

import EditCustomerFormPage from "./components/Admin/customer/EditCustomerFormPage";

import DeleteCustomerPage from "./components/Admin/customer/DeleteCustomerPage";
import EditCustomerPage from "./components/Admin/customer/EditCustomerPage";

import ViewCustomerPage from "./components/Admin/customer/ViewCustomerPage";

import AddProductPage from "./components/Admin/product/AddProductPage";
import DeleteProductPage from "./components/Admin/product/DeleteProductPage";
import EditFormPage from "./components/Admin/product/EditFormPage";

import EditProductPage from "./components/Admin/product/EditProductPage";
import ViewProductPage from "./components/Admin/product/ViewProductPage";

import AdminPage from "./components/Admin/AdminPage/AdminPage";
import ViewOrderPage from "./components/Admin/orders/ViewOrderPage";
import DeleteOrderPage from "./components/Admin/orders/DeleteOrderPage";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/homePage/HomePage";
import CartPage from "./components/cart/CartPage";
import AboutUsPage from "./components/aboutUs/AboutUsPage";
import ContactUsPage from "./components/contactUs/ContactUsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/category" element={<Category />} />
        <Route path="/productDetail" element={<ProductDetailPage />} />
        <Route path="/shipping" element={<ShippingPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/adminHome" element={<AdminPage />} />
        <Route path="/customerdelete" element={<DeleteCustomerPage />} />
        <Route path="/customeredit" element={<EditCustomerPage />} />
        <Route path="/customerview" element={<ViewCustomerPage />} />
        <Route path="/customereditform" element={<EditCustomerFormPage />} />
        <Route path="/orderdelete" element={<DeleteOrderPage />} />
        <Route path="/orderview" element={<ViewOrderPage />} />
        <Route path="/productadd" element={<AddProductPage />} />
        <Route path="/productdelete" element={<DeleteProductPage />} />
        <Route path="/productview" element={<ViewProductPage />} />
        <Route path="/productedit" element={<EditProductPage />} />
        <Route path="/producteditform" element={<EditFormPage />} />
        <Route path="/aboutUs" element={<AboutUsPage />} />
        <Route path="/contactUs" element={<ContactUsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
