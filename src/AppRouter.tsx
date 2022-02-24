import {useRoutes} from "react-router";
import HomePageComponent from "./components/HomePage.component";
import BusinessPageComponent from "./components/BusinessPage.component";

const AppRouter = (props: any) => {
    return useRoutes([
        { path: "/", element: <HomePageComponent {...props} /> },
        { path: "/business/:id", element: <BusinessPageComponent {...props} /> },
    ]);
};

export default AppRouter;