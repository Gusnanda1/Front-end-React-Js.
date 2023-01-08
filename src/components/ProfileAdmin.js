import React from "react";
import admin from "../assets/img/akuu.png";
import Iconn1 from "../assets/img/journey 1.png";
import Iconn2 from "../assets/img/iconn3.png";
import { Dropdown } from "react-bootstrap";
import { UserContext } from "../context/userContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
function ProfileAdmin() {
  const navigate = useNavigate();
  const [state, dispatch] = useContext(UserContext);
  const handleLogout = () => {
    dispatch({
      type: "LOGOUT",
    });
    navigate("/");
  };
  return (
    <Dropdown>
      <Dropdown.Toggle
        id="dropdown-basic"
        style={{
          backgroundColor: "transparent",
          border: "none",
        }}
      >
        <img src={admin} />
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item onClick={() => navigate(`/addtrip`)}>
          <img
            src={Iconn1}
            style={{
              margin: "10px",
            }}
          ></img>
          Trip
        </Dropdown.Item>
        <hr></hr>
        <Dropdown.Item onClick={handleLogout}>
          <img
            src={Iconn2}
            style={{
              margin: "10px",
            }}
          ></img>
          Logout
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default ProfileAdmin;
