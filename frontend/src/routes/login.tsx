import { createFileRoute, Link, useRouter } from "@tanstack/react-router";
import { useState } from "react";
import "../styles/modal/modal-style.css";
import { useUser } from "../Providers/UserProvider";
import { ErrorModal } from "../Components/ErrorModal/ErrorModal";
import { getUserFromJwt } from "../utils/Validations/authUtils";
import { authenticate } from "../api/apiAuth";

export const Route = createFileRoute("/login")({
  component: RouteComponent,
});

function RouteComponent() {
  const { setAuthenticatedUser } = useUser();
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [showModalError, setShowModalError] = useState<boolean>(false);
  const [modalErrorMessage, setModalErrorMessage] = useState("");
  const router = useRouter();
  const handleOnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await authenticate(emailInput, passwordInput);
      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.message);
      }
      const token = result.token;

      localStorage.setItem("userJwt", token);
      const user = getUserFromJwt(token);
      if (user) {
        setAuthenticatedUser(user);
        let toRoute = "";
        if (user.role === "admin") {
          toRoute = "/adminPage/UnassignedOrders";
        } else if (user.role === "worker") {
          toRoute = "/workerPage/UnassignedOrders";
        } else {
          toRoute = "/clientPage/products";
        }
        router.navigate({ to: toRoute });
      } else {
        throw new Error("Malformed jwt");
      }
    } catch (err: unknown) {
      let errorMessage = "An unexpected error occurred";
      if (err instanceof Error) {
        errorMessage = err.message;
      }
      setShowModalError(true);
      setModalErrorMessage(errorMessage);
    }
  };

  return (
    <>
      {showModalError && (
        <ErrorModal
          message={modalErrorMessage}
          onClose={() => {
            setShowModalError(false);
          }}
        />
      )}
      {!showModalError && (
        <div className="modal" id="loginModal" style={{ display: "flex" }}>
          <div className="modal-content">
            <button
              className="close-btn"
              onClick={() => {
                router.navigate({ to: "/" });
              }}
            >
              X
            </button>
            <h2>Login</h2>
            <form onSubmit={handleOnSubmit}>
              <div className="input-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={emailInput}
                  onChange={(e) => {
                    setEmailInput(e.target.value);
                  }}
                  required
                />
              </div>
              <div className="input-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={passwordInput}
                  onChange={(e) => setPasswordInput(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="login-btn">
                Login
              </button>
              <Link to="/register" className="register-link">
                Register
              </Link>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
