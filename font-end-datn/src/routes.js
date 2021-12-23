import Index from "views/Index.js";
import Category from "views/Category.js";
import Register from "views/Register.js";
import Login from "views/Login.js";
import Topic from "views/Topic.js";
import Profile from "views/Profile.js";
import Member from "views/Member.js";

var routes = [
  {
    path: "/index",
    name: "Thống kê",
    icon: "ni ni-tv-2 text-primary",
    component: Index,
    layout: "/admin",
  },
  {
    path: "/Topic",
    name: "Truyện",
    icon: "ni ni-planet text-blue",
    component: Topic,
    layout: "/admin",
  },
  {
    path: "/Category",
    name: "Danh mục",
    icon: "ni ni-bullet-list-67 text-red",
    component: Category,
    layout: "/admin",
  },
  // {
  //   path: "/login",
  //   name: "Đăng nhập",
  //   icon: "ni ni-key-25 text-info",
  //   component: Login,
  //   layout: "/auth",
  // },
  // {
  //   path: "/register",
  //   name: "Đăng ký",
  //   icon: "ni ni-circle-08 text-pink",
  //   component: Register,
  //   layout: "/auth",
  // },
  {
    path: "/member",
    name: "Thành viên",
    icon: "ni ni-single-copy-04 text-orange",
    component: Member,
    layout: "/admin",
  },
  {
    path: "/user-profile",
    name: "Tài khoản",
    icon: "ni ni-single-02 text-orange",
    component: Profile,
    layout: "/admin",
  },
];
export default routes;
