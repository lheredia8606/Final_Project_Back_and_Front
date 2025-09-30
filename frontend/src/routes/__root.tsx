import {
  Link,
  Outlet,
  createRootRoute,
  useRouter,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { useUser } from "../Providers/UserProvider";
import "../styles/root/root-style.css";
import { useEffect } from "react";
import { getUserFromJwt } from "../utils/Validations/authUtils";
import { useQueryClient } from "@tanstack/react-query";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  const { authenticatedUser, setAuthenticatedUser } = useUser();
  const queryClient = useQueryClient();
  const router = useRouter();
  const goToMyPage = () => {
    if (!authenticatedUser) {
      router.navigate({ to: "/" });
    } else if (authenticatedUser.role === "admin") {
      router.navigate({ to: "/adminPage/UnassignedOrders" });
    } else if (authenticatedUser.role === "client") {
      router.navigate({ to: "/clientPage/products" });
    } else if (authenticatedUser.role === "worker") {
      router.navigate({ to: "/workerPage/UnassignedOrders" });
    }
  };
  useEffect(() => {
    const token = localStorage.getItem("userJwt");
    if (token) {
      const user = getUserFromJwt(token);
      if (user) {
        setAuthenticatedUser(user);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <header className="header">
        <nav className="navbar">
          <div className="logo">MyLogo</div>
          <ul className="nav-links">
            <li>
              <Link
                to="/"
                activeProps={{
                  className: "font-bold",
                }}
                activeOptions={{ exact: true }}
              >
                Home
              </Link>
            </li>
            {authenticatedUser && (
              <li>
                <a style={{ cursor: "pointer" }} onClick={goToMyPage}>
                  My Page
                </a>
              </li>
            )}
            <li>
              <a href="#">Services</a>
            </li>
            {authenticatedUser ? (
              <li>
                <a
                  href="#"
                  onClick={() => {
                    queryClient.clear();
                    localStorage.removeItem("userJwt");
                    setAuthenticatedUser(null);
                  }}
                >
                  Log out
                </a>
              </li>
            ) : (
              <li>
                <Link to="/login">Log in</Link>
              </li>
            )}
          </ul>
        </nav>
      </header>
      <main className="main-container">
        <Outlet />
      </main>
      <footer className="footer">
        <p>&copy; 2025 MyWebsite. All rights reserved.</p>
      </footer>
      <TanStackRouterDevtools position="bottom-right" />
    </>
  );
}
