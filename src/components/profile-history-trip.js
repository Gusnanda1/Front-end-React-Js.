import React from "react";
import Name from "../assets/img/name.png";
import Office from "../assets/img/office.png";
import Phone from "../assets/img/phone.png";
import Place from "../assets/img/place.png";
import Aku from "../assets/img/saya.png";
import logo from "../assets/img/IconPayment.png";
import QrLogo from "../assets/img/qr.png";
import Button from "react-bootstrap/Button";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { API } from "../config/api";
import { Table } from "react-bootstrap";
const Profile = () => {
  let { data: transaction } = useQuery("DataTRCache", async () => {
    const response = await API.get(`/transaksi`);
    console.log(response);
    return response.data.data;
  });

  let { id } = useParams();
  id = parseInt(id);

  let { data: user } = useQuery("userCache", async () => {
    const response = await API.get(`/user/${id}`);

    return response.data.data;
  });

  return (
    <>
      <div
        style={{
          width: "785px",
          height: "453px",
          margin: "auto",
          marginTop: "50px",
          marginBottom: "50px",
        }}
      >
        <div className="d-flex bg-light mb-3">
          <div
            className="p-2"
            style={{
              width: "60%",
              height: "auto",
              margin: "30px",
            }}
          >
            <h1
              style={{
                fontFamily: "avenir",
                fontWeight: "900",
                fontSize: "36px",
                height: "24px",
                margin: "10px",
              }}
            >
              Personal Info
            </h1>
            <div
              className="d-flex"
              style={{
                marginTop: "50px",
              }}
            >
              <div className="p-2 w-40" styl>
                <img src={Name} alt=""></img>
              </div>
              <div className="p-2 flex-shrink-1">
                <h3
                  style={{
                    fontFamily: "avenir",
                    fontWeight: "500",
                    fontSize: "14px",
                    height: "20px",
                  }}
                >
                  {user?.fullname}
                </h3>
                <h3
                  style={{
                    fontFamily: "avenir",
                    fontWeight: "500",
                    fontSize: "12px",
                    height: "16px",
                    color: "#8A8C90",
                  }}
                >
                  Fullname
                </h3>
              </div>
            </div>
            <div className="d-flex">
              <div className="p-2 w-40">
                <img src={Office} alt=""></img>
              </div>
              <div className="p-2 flex-shrink-1">
                <h3
                  style={{
                    fontFamily: "avenir",
                    fontWeight: "500",
                    fontSize: "14px",
                    height: "20px",
                  }}
                >
                  {user?.email}
                </h3>
                <h3
                  style={{
                    fontFamily: "avenir",
                    fontWeight: "500",
                    fontSize: "12px",
                    height: "16px",
                    color: "#8A8C90",
                  }}
                >
                  E-Mail
                </h3>
              </div>
            </div>
            <div className="d-flex">
              <div className="p-2 w-40">
                <img src={Phone} alt=""></img>
              </div>
              <div className="p-2 flex-shrink-1">
                <h3
                  style={{
                    fontFamily: "avenir",
                    fontWeight: "500",
                    fontSize: "14px",
                    height: "20px",
                  }}
                >
                  {user?.phone}
                </h3>
                <h3
                  style={{
                    fontFamily: "avenir",
                    fontWeight: "500",
                    fontSize: "12px",
                    height: "16px",
                    color: "#8A8C90",
                  }}
                >
                  Phone
                </h3>
              </div>
            </div>
            <div className="d-flex">
              <div className="p-2 w-40">
                <img src={Place} alt=""></img>
              </div>
              <div className="p-2 flex-shrink-1">
                <h3
                  style={{
                    fontFamily: "avenir",
                    fontWeight: "500",
                    fontSize: "14px",
                    height: "20px",
                  }}
                >
                  {user?.address}
                </h3>
                <h3
                  style={{
                    fontFamily: "avenir",
                    fontWeight: "500",
                    fontSize: "12px",
                    height: "16px",
                    color: "#8A8C90",
                  }}
                >
                  Fullname
                </h3>
              </div>
            </div>
          </div>
          <div
            className="p-2"
            style={{
              width: "40%",
              margin: "20px",
            }}
          >
            <img
              src={Aku}
              alt=""
              style={{
                width: "100%",
              }}
            ></img>
            <Button
              variant="warning"
              style={{
                width: "100%",
                marginTop: "20px",
              }}
            >
              Jangan di ganti, nanti gua bacok
            </Button>
          </div>
        </div>
      </div>
      {/* card booking info */}
      {transaction?.map((item, index) => {
        return (
          <>
            {localStorage.getItem("fullname") === item.user.fullname ? (
              <>
                <div
                  key={index}
                  style={{
                    backgroundColor: "white",
                    width: "1035px",
                    height: "500px",
                    margin: "auto",
                    marginTop: "50px",
                    marginBottom: "50px",
                    borderRadius: "5px",
                    border: "2px solid #000000",
                  }}
                >
                  <div
                    style={{
                      height: "200px",
                      width: "100%",
                      marginLeft: "10px",
                      marginTop: "10px",
                    }}
                  >
                    <div className="d-flex justify-content-start">
                      <img src={logo} />
                    </div>
                    <div
                      className="d-flex justify-content-end"
                      style={{
                        fontFamily: "avenir",
                        fontWeight: "800",
                        fontSize: "36px",
                        height: "33px",
                        color: "#000000",
                        marginTop: "-60px",
                        marginRight: "40px",
                      }}
                    >
                      Booking
                    </div>
                    <div
                      className="d-flex justify-content-end"
                      style={{
                        fontFamily: "avenir",
                        fontWeight: "800",
                        fontSize: "18px",
                        height: "25px",
                        color: "#878787",
                        marginTop: "20px",
                        marginRight: "40px",
                      }}
                    >
                      Saturday, 22 Juy 2020
                    </div>
                  </div>
                  <div
                    className="d-flex"
                    style={{
                      marginTop: "-100px",
                    }}
                  >
                    <div className="p-2 flex-grow-1">
                      <div
                        className="d-flex flex-nowrap"
                        style={{
                          marginLeft: "30px",
                          marginTop: "7px",
                          marginBottom: "7px",
                        }}
                      >
                        <div
                          className="order-3 p-2"
                          style={{
                            marginLeft: "100px",
                            marginTop: "7px",
                            marginBottom: "7px",
                          }}
                        >
                          <p
                            style={{
                              fontFamily: "avenir",
                              fontWeight: "800",
                              fontSize: "18px",
                              height: "25px",
                            }}
                          >
                            Duration
                          </p>
                          <p
                            style={{
                              fontFamily: "avenir",
                              fontWeight: "400",
                              fontSize: "14px",
                              height: "19px",
                              color: "#959595",
                            }}
                          >
                            {item.trip.day} Day {item.trip.night} Night
                          </p>
                          <p
                            style={{
                              fontFamily: "avenir",
                              fontWeight: "800",
                              fontSize: "18px",
                              height: "25px",
                            }}
                          >
                            Transporartion
                          </p>
                          <p
                            style={{
                              fontFamily: "avenir",
                              fontWeight: "400",
                              fontSize: "14px",
                              height: "19px",
                              color: "#959595",
                            }}
                          >
                            {item?.trip.transport}
                          </p>
                        </div>
                        <div
                          className="order-2 p-2"
                          style={{
                            marginLeft: "100px",
                            marginTop: "7px",
                            marginBottom: "7px",
                          }}
                        >
                          <p
                            style={{
                              fontFamily: "avenir",
                              fontWeight: "800",
                              fontSize: "18px",
                              height: "25px",
                            }}
                          >
                            Date Trip
                          </p>
                          <p
                            style={{
                              fontFamily: "avenir",
                              fontWeight: "400",
                              fontSize: "14px",
                              height: "19px",
                              color: "#959595",
                            }}
                          >
                            {item.trip.date}
                          </p>
                          <p
                            style={{
                              fontFamily: "avenir",
                              fontWeight: "800",
                              fontSize: "18px",
                              height: "25px",
                            }}
                          >
                            Accomodation
                          </p>
                          <p
                            style={{
                              fontFamily: "avenir",
                              fontWeight: "400",
                              fontSize: "14px",
                              height: "19px",
                              color: "#959595",
                            }}
                          >
                            {item.trip.accomodation}
                          </p>
                        </div>
                        <div className="order-1 p-2">
                          <p
                            style={{
                              fontFamily: "avenir",
                              fontWeight: "900",
                              fontSize: "24px",
                              height: "33px",
                            }}
                          >
                            {item.trip.title}
                          </p>
                          <p
                            style={{
                              fontFamily: "avenir",
                              fontWeight: "400",
                              fontSize: "14px",
                              height: "19px",
                              color: "#959595",
                            }}
                          >
                            {item.trip.country.name_country}
                          </p>

                          {item.status == "success" ? (
                            <>
                              {" "}
                              <p
                                style={{
                                  width: "112px",
                                  height: "1500px",
                                  fontFamily: "avenir",
                                  fontWeight: "500",
                                  fontSize: "12px",
                                  height: "16px",
                                  color: "#FFFFFF",
                                  backgroundColor: "green",
                                  paddingTop: "10px",
                                  paddingLeft: "20px",
                                  paddingBottom: "30px",
                                  borderRadius: "5px",
                                }}
                              >
                                {item.status}
                              </p>
                            </>
                          ) : item.status == "failed" ? (
                            <>
                              {" "}
                              <p
                                style={{
                                  width: "112px",
                                  height: "1500px",
                                  fontFamily: "avenir",
                                  fontWeight: "500",
                                  fontSize: "12px",
                                  height: "16px",
                                  color: "#FFFFFF",
                                  backgroundColor: "red",
                                  paddingTop: "10px",
                                  paddingLeft: "20px",
                                  paddingBottom: "30px",
                                  borderRadius: "5px",
                                }}
                              >
                                {item.status}
                              </p>
                            </>
                          ) : (
                            <>
                              {" "}
                              <p
                                style={{
                                  width: "112px",
                                  height: "1500px",
                                  fontFamily: "avenir",
                                  fontWeight: "500",
                                  fontSize: "12px",
                                  height: "16px",
                                  color: "#FFFFFF",
                                  backgroundColor: "orange",
                                  paddingTop: "10px",
                                  paddingLeft: "20px",
                                  paddingBottom: "30px",
                                  borderRadius: "5px",
                                }}
                              >
                                {item.status}
                              </p>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                    <div
                      className="p-2"
                      style={{
                        marginRight: "30px",
                      }}
                    >
                      <img
                        src={QrLogo}
                        style={{
                          width: "100px",
                          margin: "15px",
                        }}
                      />
                      <p
                        style={{
                          fontFamily: "avenir",
                          fontWeight: "400",
                          fontSize: "14px",
                          height: "19px",
                          color: "#959595",
                          marginTop: "10px",
                        }}
                      >
                        Upload Payment Proof
                      </p>
                    </div>
                  </div>
                  <Table responsive="sm">
                    <thead>
                      <tr>
                        <th>No</th>
                        <th>Fullname</th>
                        <th>Gender</th>
                        <th>Phone</th>
                        <th></th>
                        <th></th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>{item?.user.fullname}</td>
                        <td>{item?.user.gender}</td>
                        <td>{item?.user.phone}</td>
                        <td>QTY</td>
                        <td>: {item?.counterqty}</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>Total</td>
                        <td
                          style={{
                            color: "#FF0000",
                          }}
                        >
                          : {item?.total.toLocaleString()}
                        </td>
                        <td></td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </>
            ) : null}
          </>
        );
      })}
    </>
  );
};

export default Profile;
