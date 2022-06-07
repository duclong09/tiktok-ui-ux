import Following from "../pages/Following"
import Home from "../pages/Home"
import Profile from "../pages/Profile"



//public routes
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/profile', component: Profile }
]

//private routes
const privateRoutes = [

]

export { publicRoutes, privateRoutes }