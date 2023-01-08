import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import "../style/appstyle.css";

import hibiscus2 from "../assets/img/hibiscus 1.png";
import palm2 from "../assets/img/palm 1.png";
import { Link } from "react-router-dom";
import logo from "../assets/img/Icon.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";

import { useMutation } from "react-query";
import { useContext } from "react";

import { API } from "../config/api";
import { Alert } from "react-bootstrap";
import { UserContext } from "../context/userContext";
import ProfileUser from "./ProfileUser";
import ProfileAdmin from "./ProfileAdmin";

// import Register from './register';
const NavigationBar = () => {
  const navigate = useNavigate();
  function handleRedirect() {
    navigate("/");
  }
  function handleRedirectAdmin() {
    navigate("/incoming");
  }

  //Register Modal
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
  };

  const handleShowRegister = (e) => {
    e.preventDefault();
    handleClose2();
    handleShow();
  };
  const handleShowLogin = (e) => {
    e.preventDefault();
    handleClose();
    handleShow2();
  };
  const [Form, setForm] = useState({
    fullname: "",
    email: "",
    password: "",
    gender: "",
    phone: "",
    address: "",
    role: "User",
  });

  const handleChange = (e) => {
    setForm({ ...Form, [e.target.id]: e.target.value });
  };

  const handleSubmit = useMutation(async (e) => {
    try {
      e.preventDefault();
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const body = JSON.stringify(Form);

      const response = await API.post("/register", body, config);

      alert("Register Success");
      handleShowLogin(e);
    } catch (error) {
      const alert = (
        <Alert variant="danger" className="py-1">
          Failed
        </Alert>
      );
      console.log(error);
    }
  });

  //Login Modal
  const [show2, setShow2] = useState(false);
  const handleClose2 = () => {
    setShow2(false);
  };
  const handleShow2 = () => {
    setShow2(true);
  };
  const [formLog, setFormLog] = useState({
    id: 0,
    email: "",
    password: "",
  });

  const handleChangeLog = (e) => {
    setFormLog({ ...formLog, [e.target.id]: e.target.value });
  };

  const [state, dispatch] = useContext(UserContext);

  const handleSubmitLog = useMutation(async (e) => {
    try {
      e.preventDefault();
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const body = JSON.stringify(formLog);

      const response = await API.post("/Login", body, config);

      console.log(response);

      if (response.data.code === 200) {
        dispatch({
          type: "LOGIN_SUCCESS",
          payload: response.data.data,
        });
      }
      window.location.reload();
    } catch (error) {
      alert("Login Failed");
      console.log(error);
    }
  });

  return (
    <Navbar className="test">
      <Container>
        {localStorage.getItem("role") === "Admin" ? (
          <Navbar.Brand>
            <img
              src={logo}
              alt="logo"
              className="img1"
              onClick={handleRedirectAdmin}
            />
          </Navbar.Brand>
        ) : (
          <Navbar.Brand>
            <img
              src={logo}
              alt="logo"
              className="img1"
              onClick={handleRedirect}
            />
          </Navbar.Brand>
        )}

        <Navbar.Collapse
          className="nav justify-content-end"
          style={{
            paddingTop: "18px",
          }}
        >
          {localStorage.getItem("token") ? (
            <>
              {localStorage.getItem("role") === "Admin" ? (
                <ProfileAdmin />
              ) : (
                <ProfileUser />
              )}
            </>
          ) : (
            <>
              {/* Button Login */}
              <Button
                className="Button1"
                variant="outline-light"
                onClick={handleShow2}
              >
                Login
              </Button>
              <Modal show={show2} onHide={handleClose2}>
                <div style={{ display: "flex" }}>
                  <img
                    src={palm2}
                    style={{
                      width: "30%",
                    }}
                  />
                  <img
                    src={hibiscus2}
                    style={{
                      width: "13%",
                      margin: "0px 0px 0px 58%",
                      height: "70px",
                    }}
                  />
                </div>

                <Modal.Body style={{ textAlign: "center", height: "400px" }}>
                  <p
                    style={{
                      fontWeight: "bold",
                      fontSize: "40px",
                      marginTop: "-80px",
                    }}
                  >
                    Login
                  </p>

                  <form
                    onSubmit={handleSubmitLog.mutate}
                    style={{ marginTop: "30px" }}
                  >
                    <label
                      for="exampleInputEmail1"
                      className="form-label"
                      style={{
                        fontWeight: "bold",
                        fontSize: "30px",
                        marginLeft: "-64%",
                        marginTop: "20px",
                        color: "black",
                      }}
                    >
                      Email
                    </label>
                    <input
                      onChange={handleChangeLog}
                      type="email"
                      className="form-control"
                      id="email"
                      aria-describedby="emailHelp"
                      style={{
                        width: "85%",
                        marginLeft: "36px",
                        backgroundColor: "#D2D2D240",
                      }}
                    />

                    <label
                      for="exampleInputEmail1"
                      className="form-label"
                      style={{
                        fontWeight: "bold",
                        fontSize: "30px",
                        marginLeft: "-52%",
                        marginTop: "20px",
                        color: "black",
                      }}
                    >
                      Password
                    </label>
                    <input
                      onChange={handleChangeLog}
                      type="password"
                      className="form-control"
                      id="password"
                      aria-describedby="emailHelp"
                      style={{
                        width: "85%",
                        marginLeft: "36px",
                        backgroundColor: "#D2D2D240",
                      }}
                    />

                    <button
                      type="submit"
                      className="btn btn-primary btn-lg"
                      style={{
                        backgroundColor: "#FFAF00",
                        marginTop: "30px",
                        border: "none",
                        width: "85%",
                        marginLeft: "10px",
                        fontWeight: "bold",
                      }}
                    >
                      Login
                    </button>
                    <div style={{ display: "flex" }}>
                      <p
                        style={{
                          fontSize: "20px",
                          marginLeft: "80px",
                          marginTop: "20px",
                          color: "gray",
                        }}
                      >
                        Don't have an account? Click
                      </p>
                      <Link style={{ color: "transparent" }}>
                        <p
                          onClick={handleShowRegister}
                          style={{
                            marginLeft: "7px",
                            color: "#B1B1B1",
                            fontWeight: "bold",
                            fontSize: "20px",
                            marginTop: "20px",
                          }}
                        >
                          Here
                        </p>
                      </Link>
                    </div>
                  </form>
                </Modal.Body>
              </Modal>

              {/* Button Register */}
              <Button
                className="Button2"
                variant="warning"
                onClick={handleShow}
              >
                Register
              </Button>
              <Modal show={show} onHide={handleClose}>
                <div style={{ display: "flex" }}>
                  <img
                    src={palm2}
                    style={{
                      width: "30%",
                    }}
                  />
                  <img
                    src={hibiscus2}
                    style={{
                      width: "13%",
                      margin: "0px 0px 0px 58%",
                      height: "70px",
                    }}
                  />
                </div>

                <Modal.Body
                  style={{
                    textAlign: "center",
                    overflow: "auto",
                    height: "430px",
                  }}
                >
                  <p
                    style={{
                      fontWeight: "bold",
                      fontSize: "40px",
                      marginTop: "-30px",
                    }}
                  >
                    Register
                  </p>

                  <form
                    onSubmit={handleSubmit.mutate}
                    style={{ marginTop: "60px" }}
                  >
                    <label
                      for="exampleInputEmail1"
                      className="form-label"
                      style={{
                        fontWeight: "bold",
                        fontSize: "30px",
                        marginLeft: "-50%",
                        color: "black",
                      }}
                    >
                      Full Name
                    </label>
                    <input
                      onChange={handleChange}
                      type="text"
                      className="form-control"
                      id="fullname"
                      aria-describedby="emailHelp"
                      style={{
                        width: "85%",
                        marginLeft: "36px",
                        backgroundColor: "#D2D2D240",
                      }}
                    />

                    <label
                      for="exampleInputEmail1"
                      className="form-label"
                      style={{
                        fontWeight: "bold",
                        fontSize: "30px",
                        marginLeft: "-64%",
                        marginTop: "20px",
                        color: "black",
                      }}
                    >
                      Email
                    </label>
                    <input
                      onChange={handleChange}
                      type="email"
                      className="form-control"
                      id="email"
                      aria-describedby="emailHelp"
                      style={{
                        width: "85%",
                        marginLeft: "36px",
                        backgroundColor: "#D2D2D240",
                      }}
                    />

                    <label
                      for="exampleInputEmail1"
                      className="form-label"
                      style={{
                        fontWeight: "bold",
                        fontSize: "30px",
                        marginLeft: "-52%",
                        marginTop: "20px",
                        color: "black",
                      }}
                    >
                      Password
                    </label>
                    <input
                      onChange={handleChange}
                      type="password"
                      className="form-control"
                      aria-describedby="emailHelp"
                      id="password"
                      style={{
                        width: "85%",
                        marginLeft: "36px",
                        backgroundColor: "#D2D2D240",
                      }}
                    />

                    <label
                      for="exampleInputEmail1"
                      className="form-label"
                      style={{
                        fontWeight: "bold",
                        fontSize: "30px",
                        marginLeft: "-64%",
                        marginTop: "20px",
                        color: "black",
                      }}
                    >
                      Gender
                    </label>
                    <input
                      onChange={handleChange}
                      type="text"
                      className="form-control"
                      id="gender"
                      aria-describedby="emailHelp"
                      style={{
                        width: "85%",
                        marginLeft: "36px",
                        backgroundColor: "#D2D2D240",
                      }}
                    />

                    <label
                      for="exampleInputEmail1"
                      className="form-label"
                      style={{
                        fontWeight: "bold",
                        fontSize: "30px",
                        marginLeft: "-61%",
                        marginTop: "20px",
                        color: "black",
                      }}
                    >
                      Phone
                    </label>
                    <input
                      onChange={handleChange}
                      type="text"
                      className="form-control"
                      id="phone"
                      aria-describedby="emailHelp"
                      style={{
                        width: "85%",
                        marginLeft: "36px",
                        backgroundColor: "#D2D2D240",
                      }}
                    />

                    <label
                      for="exampleInputEmail1"
                      className="form-label"
                      style={{
                        fontWeight: "bold",
                        fontSize: "30px",
                        marginLeft: "-57%",
                        marginTop: "20px",
                        color: "black",
                      }}
                    >
                      Address
                    </label>
                    <textarea
                      onChange={handleChange}
                      className="form-control"
                      id="address"
                      rows="7"
                      style={{
                        width: "85%",
                        marginLeft: "38px",
                        backgroundColor: "#D2D2D240",
                      }}
                    ></textarea>

                    <button
                      type="submit"
                      className="btn btn-primary btn-lg"
                      style={{
                        backgroundColor: "#FFAF00",
                        marginTop: "30px",
                        border: "none",
                        width: "85%",
                        marginLeft: "10px",
                        fontWeight: "bold",
                      }}
                    >
                      Register
                    </button>
                    <div style={{ display: "flex" }}>
                      <p
                        style={{
                          fontSize: "20px",
                          marginLeft: "70px",
                          marginTop: "20px",
                          color: "gray",
                        }}
                      >
                        Already have an account? Click
                      </p>
                      <Link style={{ color: "transparent" }}>
                        <p
                          onClick={handleShowLogin}
                          style={{
                            marginLeft: "7px",
                            color: "#B1B1B1",
                            fontWeight: "bold",
                            fontSize: "20px",
                            marginTop: "20px",
                          }}
                        >
                          Here
                        </p>
                      </Link>
                    </div>
                  </form>
                </Modal.Body>
              </Modal>
            </>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
