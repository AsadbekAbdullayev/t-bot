import { Suspense, lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Loader } from "../component/Loader/loader";
import { Data } from "../utils/index";
import SigninComponent from "../component/Signin";
import ViewComponent from "../component/View";
function Root() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Navigate to="/transactions" />} />
        <Route path="/signin" element={<SigninComponent />} />
        <Route element={<ViewComponent />}>
          {Data.map(({ component: Component, path }, i) => (
            <Route path={path} element={<Component />} key={i} />
          ))}
        </Route>

        <Route
          path={"*"}
          element={
            <div className="flex w-full h-screen justify-center items-center">
              <h1>404 Not found 🙁</h1>
            </div>
          }
        />
      </Routes>
    </Suspense>
  );
}

export default Root;
