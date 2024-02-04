import {createBrowserRouter} from "react-router-dom"
import Join from "./components/Join/Join"
import Chat from "./components/Chat/Chat"

const router = createBrowserRouter([
  {
    path: "/",
    element:<Join />
  },
  {
    path:"/chat",
    element: <Chat />
  }

]
)

export default router