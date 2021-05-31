
import About from '../component/About'
import Shop from '../component/Shop'

const dashboardRoutes = [
    {
      upgrade: true,
      path: "/about",
      name: "about",
    //   icon: "",
      component: About,
      layout: "/user",
    },
    {
        upgrade: true,
        path: "/shop",
        name: "shop",
      //   icon: "",
        component: Shop,
        layout: "/user",
      },
  ];
  
  export default dashboardRoutes;