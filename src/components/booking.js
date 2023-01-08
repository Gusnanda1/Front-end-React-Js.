import React from "react";
import Logo from "../assets/img/IconPayment.png";
import Invoice from "../assets/img/invoice.png";
import { API } from "../config/api";
import { useQuery } from "react-query";
import { DataBook } from "./detail-tour";
import { useMutation } from "react-query";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useParams } from "react-router";

const Booknow = () => {
  console.log(DataBook);
  let { id } = useParams();
  id = parseInt(id);

  let { data: user } = useQuery("userDataCache", async () => {
    const response = await API.get(`/user/${id}`);

    return response.data.data;
  });
  let navigator = useNavigate();
  const handlePay = useMutation(async (DataBook) => {
    try {
      // Get data from product
      const data = {
        counter_qty: DataBook.kouta,
        total: DataBook.total_price,
        trip_id: DataBook.id,
      };

      // Configuration
      const config = {
        method: "POST",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
          "Content-type": "multipart/form-data",
        },
      };

      let form = new FormData();

      form.append("counter_qty", data.counter_qty);
      form.append("total", data.total);
      form.append("trip_id", data.trip_id);
      // Insert transaction data
      const response = await API.post("/transaksi", form, config);

      const token = response.data.data.token;

      window.snap.pay(token, {
        onSuccess: function (result) {
          console.log(result);
          navigator(`/profile/${id}`);
        },
        onPending: function (result) {
          console.log(result);
          navigator("/");
        },
        onError: function (result) {
          console.log(result);
          alert("Error");
          navigator("/");
        },
        onClose: function (result) {
          alert("Mau kemana Bayar dulu");
          navigator("/");
          console.log(result);
        },
      });
    } catch (error) {
      console.log(error);
    }
  });

  useEffect(() => {
    const midtransScriptUrl = "https://app.sandbox.midtrans.com/snap/snap.js";

    const myMidtransClientKey = "SB-Mid-client-ca8lexssTl_xppJZ";

    let scriptTag = document.createElement("script");
    scriptTag.src = midtransScriptUrl;
    scriptTag.setAttribute("data-client-key", myMidtransClientKey);
    document.body.appendChild(scriptTag);
    return () => {
      document.body.removeChild(scriptTag);
    };
  }, []);

  return (
    <div style={{ width: "100%", backgroundColor: "whitesmoke" }}>
      <img
        src={Invoice}
        style={{
          position: "absolute",
          left: "961px",
          top: "325px",
          border: "solid 2px black",
        }}
      />
      <div>
        <h1></h1>
      </div>

      {/* card history */}
      <div
        style={{
          width: "77%",
          backgroundColor: "white",
          margin: " 110px 30px 0px 150px",
          boxShadow: "0px 0px 3px",
          borderRadius: "5px",
          paddingBottom: "20px",
        }}
      >
        <div style={{ display: "flex" }}>
          <img
            src={Logo}
            style={{
              width: "25%",
              height: "70px",
              marginTop: "15px",
              marginLeft: "40px",
            }}
          />
          <div>
            <p
              style={{
                margin: "5px 0px 0px 500px",
                fontWeight: "bold",
                fontSize: "40px",
              }}
            >
              Booking
            </p>
            <div style={{ display: "flex" }}>
              <p
                style={{
                  color: "gray",
                  fontWeight: "bold",
                  marginLeft: "8px",
                  marginLeft: "480px",
                  marginTop: "5px",
                  fontSize: "17px",
                }}
              >
                Saturday,{" "}
              </p>
              <p
                style={{
                  color: "gray",
                  marginLeft: "5px",
                  marginTop: "5px",
                  fontSize: "17px",
                }}
              >
                22 July 2020
              </p>
            </div>
          </div>
        </div>
        <div
          className="a"
          style={{
            display: "flex",
            justifyContent: "end",
          }}
        >
          <p
            style={{
              color: "black",
              margin: "5px 50px 0px 10px",

              fontWeight: "bold",
              fontSize: "27px",
            }}
          >
            {DataBook.title}
          </p>

          <h5 style={{ marginLeft: "60px", marginTop: "9px" }}>Date Trip</h5>
          <h5
            style={{
              marginLeft: "102px",
              marginTop: "9px",
              marginRight: "343px",
            }}
          >
            Duration
          </h5>
        </div>

        <div style={{ display: "flex" }}>
          <p
            style={{
              color: "gray",
              margin: "5px 0px 0px 52px",
              fontSize: "13px",
            }}
          >
            {DataBook.place}
          </p>
          <p
            style={{
              color: "gray",
              margin: "-4px 0px 0px 333px",
              fontSize: "13px",
            }}
          >
            {DataBook.date}
          </p>
          <p
            style={{
              color: "gray",
              margin: "-4px 0px 0px 93px",
              fontSize: "13px",
            }}
          >
            {DataBook.day} Day {DataBook.night} Night
          </p>
        </div>

        <div style={{ display: "flex" }}>
          <div
            style={{
              backgroundColor: "	#ffebcd",
              width: "12%",
              marginLeft: "52px",
              marginTop: "40px",
            }}
          >
            <p
              style={{
                fontSize: "13px",
                color: "#EC7A7A",
                margin: "3px 0px 4px 15px",
              }}
            >
              Waiting Payment
            </p>
          </div>
          <h5 style={{ marginLeft: "257px", marginTop: "29px" }}>
            Accomodation
          </h5>
          <h5 style={{ marginLeft: "50px", marginTop: "29px" }}>
            Transportaion
          </h5>
        </div>
        <div style={{ display: "flex" }}>
          <p
            style={{
              color: "gray",
              margin: "-4px 0px 0px 436px",
              fontSize: "13px",
            }}
          >
            {DataBook.accomodation}
          </p>
          <p
            style={{
              color: "gray",
              margin: "-4px 0px 0px 99px",
              fontSize: "13px",
            }}
          >
            {DataBook.transport}
          </p>
        </div>
        <p
          style={{
            color: "gray",
            margin: "11px 0px 0px 815px",
            fontSize: "13px",
          }}
        >
          Upload payment proof
        </p>

        <div style={{ display: "flex" }}>
          <p
            style={{
              fontWeight: "bold",
              fontSize: "22px",
              marginLeft: "57px",
              marginTop: "10px",
            }}
          >
            No
          </p>
          <p
            style={{
              fontWeight: "bold",
              fontSize: "22px",
              marginLeft: "57px",
              marginTop: "10px",
            }}
          >
            Fullname
          </p>

          <p
            style={{
              fontWeight: "bold",
              fontSize: "22px",
              marginLeft: "97px",
              marginTop: "10px",
            }}
          >
            Gender
          </p>

          <p
            style={{
              fontWeight: "bold",
              fontSize: "22px",
              marginLeft: "57px",
              marginTop: "10px",
            }}
          >
            Phone
          </p>
        </div>

        <div style={{ display: "flex" }}>
          <p
            style={{
              fontSize: "22px",
              marginLeft: "57px",
              marginTop: "10px",
              color: "gray",
            }}
          >
            1
          </p>
          <p
            style={{
              fontSize: "22px",
              marginLeft: "75px",
              marginTop: "10px",
              color: "gray",
            }}
          >
            {user?.fullname}
          </p>

          <p
            style={{
              fontSize: "22px",
              marginLeft: "57px",
              marginTop: "10px",
              color: "gray",
            }}
          >
            {user?.gender}
          </p>

          <p
            style={{
              fontSize: "22px",
              marginLeft: "82px",
              marginTop: "10px",
              color: "gray",
            }}
          >
            {user?.phone}
          </p>

          <p
            style={{
              fontSize: "22px",
              marginLeft: "110px",
              marginTop: "10px",
              color: "Black",
              fontWeight: "bold",
            }}
          >
            Qty
          </p>
          <p
            style={{
              fontSize: "22px",
              marginLeft: "75px",
              marginTop: "10px",
              color: "Black",
              fontWeight: "bold",
            }}
          >
            :
          </p>
          <p
            style={{
              fontSize: "22px",
              marginLeft: "30px",
              marginTop: "10px",
              color: "Black",
              fontWeight: "bold",
            }}
          >
            {DataBook.kouta}
          </p>
        </div>

        <div style={{ display: "flex" }}>
          <p
            style={{
              fontSize: "22px",
              marginLeft: "713px",
              marginTop: "10px",
              color: "Black",
              fontWeight: "bold",
            }}
          >
            Total
          </p>
          <p
            style={{
              fontSize: "22px",
              marginLeft: "60px",
              marginTop: "10px",
              color: "Black",
              fontWeight: "bold",
            }}
          >
            :
          </p>
          <p
            style={{
              fontSize: "22px",
              marginLeft: "30px",
              marginTop: "10px",
              color: "Red",
              fontWeight: "700",
            }}
          >
            IDR.{DataBook.total_price.toLocaleString()}
          </p>
        </div>
      </div>
      <button
        onClick={() => handlePay.mutate(DataBook)}
        type="button"
        className="btn btn-primary btn-lg"
        style={{
          margin: "25px 0px 0px 72%",
          width: "15%",
          backgroundColor: "#FFAF00",
          border: "none",
        }}
      >
        Pay
      </button>
    </div>
  );
};

export default Booknow;
