import {Equal, Expect } from "../../helper";

type Route = "/" | "/about" | "/admin" | "/admin/users";

//!mapped type은 union 타입이 전제가 되어야 한다.
type RoutesObject = {[K in Route]: K}

type tests = [
    Expect<
        Equal<
            RoutesObject,
            {
                "/": "/";
                "/about": "/about";
                "/admin": "/admin";
                "/admin/users": "/admin/users";
            }
        >
    >,
];
