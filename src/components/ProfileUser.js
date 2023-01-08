import React from "react";
import Akuu from "../assets/img/akuu.png";
import { Dropdown } from "react-bootstrap";
import Iconn1 from "../assets/img/iconn1.png";
import Iconn2 from "../assets/img/iconn2.png";
import Iconn3 from "../assets/img/iconn3.png";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/userContext";
import { useContext } from "react";
import { useQuery } from "react-query";
import { API } from "../config/api";
function ProfileUser() {
  let { data: users } = useQuery("usersCache", async () => {
    const response = await API.get("/users");

    return response.data.data;
  });
  const [state, dispatch] = useContext(UserContext);
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch({
      type: "LOGOUT",
    });
    navigate("/");
  };
  return (
    <>
      {users?.map((user) => {
        {
          if (parseInt(localStorage.getItem("id")) === user.id) {
            return (
              <Dropdown>
                <Dropdown.Toggle
                  id="dropdown-basic"
                  style={{
                    backgroundColor: "transparent",
                    border: "none",
                  }}
                >
                  <img src={Akuu} />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item
                    onClick={() => navigate(`/profile/${user.id}`)}
                  >
                    <img
                      src={Iconn1}
                      style={{
                        margin: "10px",
                      }}
                    ></img>
                    Profile
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => navigate(`/booknow`)}>
                    <img
                      src={Iconn2}
                      style={{
                        margin: "10px",
                      }}
                    ></img>
                    Pay
                  </Dropdown.Item>
                  <hr></hr>
                  <Dropdown.Item onClick={handleLogout}>
                    <img
                      src={Iconn3}
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
        }
      })}
    </>
  );
}

export default ProfileUser;
