import React from "react";
import { Table } from "react-bootstrap";
import searchIcon from "../assets/img/search.png";
import { useState } from "react";
import { Modal } from "react-bootstrap";
import Logo from "../assets/img/Icon.png";
import Invoice from "../assets/img/invoice.png";
import { Button } from "react-bootstrap";
import { useQuery } from "react-query";
import { API } from "../config/api";
//handle for change status

const handleAccept = () => {
  alert("Accept");
};

const handleReject = () => {
  alert("Reject");
};

const Incoming = () => {
  let { data: TransactionData } = useQuery("TrDataCache", async () => {
    const response = await API.get(`/transaksi`);
    console.log(response);
    return response.data.data;
  });
  console.log(TransactionData);
  const [show, setShow] = useState(false);
  // const values = [true];
  const [fullscreen, setFullscreen] = useState(true);
  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }
  return (
    <div>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        fullscreen={fullscreen}
        dialogClassName="modal-100w"
        labelled="example-custom-modal-styling-title"
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Approval Payment
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            <div
              style={{
                height: "200px",
                width: "100%",
                marginLeft: "10px",
                marginTop: "10px",
              }}
            >
              <div className="d-flex justify-content-start">
                <img alt="" src={Logo} />
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
                      6 Day 4 Night
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
                      Qatar Airways
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
                      26 August 2020
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
                      Hotel 4 Nights
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
                      6D/4N Fun Tassie Vacation
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
                      Australia
                    </p>
                    <p
                      style={{
                        width: "112px",
                        height: "1500px",
                        fontFamily: "avenir",
                        fontWeight: "500",
                        fontSize: "12px",
                        height: "16px",
                        color: "#FFFFFF",
                        backgroundColor: "#FF9900",
                        paddingTop: "10px",
                        paddingLeft: "20px",
                        paddingBottom: "30px",
                        borderRadius: "5px",
                      }}
                    >
                      Waiting Proses
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="p-2"
                style={{
                  marginRight: "30px",
                }}
              >
                <img alt="" src={Invoice} />
                <p
                  style={{
                    fontFamily: "avenir",
                    fontWeight: "400",
                    fontSize: "14px",
                    height: "19px",
                    color: "#959595",
                    marginLeft: "7px",
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
                  <th>Fullnama</th>
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
                  <td>Bagus Wikananda</td>
                  <td>Gender</td>
                  <td>08123456789</td>
                  <td>QTY</td>
                  <td>: 1</td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>Total</td>
                  <td>: 12.988.000</td>
                  <td></td>
                </tr>
              </tbody>
            </Table>
            <div className="d-flex justify-content-end">
              <Button
                variant="danger"
                onClick={handleReject}
                style={{
                  width: "100px",
                  marginRight: "10px",
                }}
              >
                Cancel
              </Button>
              <Button
                variant="success"
                onClick={handleAccept}
                style={{
                  width: "100px",
                  marginRight: "10px",
                }}
              >
                Approve
              </Button>
            </div>
          </p>
        </Modal.Body>
      </Modal>
      <h1
        style={{
          textAlign: "center",
          marginTop: "20px",
          marginBottom: "20px",
        }}
      >
        Incoming Transction
      </h1>
      <Table
        striped
        style={{
          width: "60%",
          margin: "auto",
          marginBottom: "20px",
        }}
      >
        <thead>
          <tr>
            <th>No</th>
            <th>Users</th>
            <th>Trip</th>
            <th>Bukti Transfer</th>
            <th>Status Payment</th>
            <th>Action</th>
          </tr>
        </thead>

        {/* looping data transaction here */}
        <tbody>
          {TransactionData?.map((itemTr, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{itemTr.user.fullname}</td>
                <td>{itemTr.trip.title}</td>
                <td>{itemTr.trip.image}</td>
                {itemTr.status == "success" ? (
                  <>
                    <td style={{ color: "green" }}>{itemTr.status}</td>
                  </>
                ) : itemTr.status == "failed" ? (
                  <>
                    <td style={{ color: "red" }}>{itemTr.status}</td>
                  </>
                ) : (
                  <>
                    <td style={{ color: "orange" }}>{itemTr.status}</td>
                  </>
                )}

                <td>
                  <img src={searchIcon} onClick={handleShow} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default Incoming;
