import { ROUTING, WhoHasAccessListType } from "../configs/routing";
import { FunctionComponent, ReactElement, createElement } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

type ChildrenFuncArgsType = {
  whoHasAccess: WhoHasAccessListType;
  hasFooter: boolean;
  hasHeader: boolean;
  needLogin: boolean;
};
interface RouterProviderPropsType {
  children: ({
    whoHasAccess,
    hasFooter,
    hasHeader,
  }: ChildrenFuncArgsType) => ReactElement;
}
export const RouterProvider: FunctionComponent<RouterProviderPropsType> = ({
  children,
}) => {
  return (
    <BrowserRouter>
      <Routes>
        {ROUTING.map((routeObject) => {
          return (
            <Route
              key={routeObject.path}
              path="/"
              element={children({
                whoHasAccess: routeObject.whoHasAccess,
                hasFooter: routeObject.hasFooter,
                hasHeader: routeObject.hasHeader,
                needLogin: routeObject.needLoign,
              })}
            >
              <Route
                path={routeObject.path}
                element={createElement(routeObject.component)}
              />
            </Route>
          );
        })}
      </Routes>
    </BrowserRouter>
  );
};
