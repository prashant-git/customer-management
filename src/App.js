import React from "react";
import UserCrud from "./UserCrud";

// const App1HelloWorld = React.lazy(() => import("app1/HelloWorld"));
// const App2Counter = React.lazy(() => import("app2/App2"));

function App() {
  return (
    // <BrowserRouter>
    //   <div>
        
    //      <Suspense fallback={<div>Loading...</div>}>
    //       <Routes>
    //         {/* <Route path="/hello" element={<App1HelloWorld />} /> */}
    //         <Route path="/app2" element={<App2Counter />} />
    //       </Routes>
    //     </Suspense>
    //   </div>
    // </BrowserRouter>
    <div>
      <UserCrud/>
    </div>
  );
}

export default App;
