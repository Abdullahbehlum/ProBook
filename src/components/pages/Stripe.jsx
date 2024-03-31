import React, { useState } from "react";
import "../styles/Stripe.css";
import { toast } from "react-toastify";
import { initializeApp } from "firebase/app";
import { addDoc, getFirestore } from "firebase/firestore";
import { firebaseConfig } from "../config/Config";
function Stripe() {
  const [PaymentDetails, setpaymentdetails] = useState({
    Name: "ConsultancyFee",
    Email: "",
    Amount: "",
    Currency: "USD",
  });
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const handlePaymentDetails = async (e) => {
    try {
      e.preventDefault();
      const docRef = await addDoc(
        collection(db, "ownvoice-payment"),
        PaymentDetails
      );
      console.log(docRef);
      toast.success("payment sent successfully");
      setpaymentdetails({
        Name: "",
        Email: "",
        Amount: "",
        Currency: "",
      });
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <>
      <section className="bg-stripe">
        <section className="flex xl:flex-row sm:flex-row md:flex-row justify-center items-center flex-col">
          <div>
            <form
              onSubmit={handlePaymentDetails}
              className="grid xl:grid-cols-2 grid-cols-1 xl:gap-4 grid-flow-row place-items-center place-content-center xl:mt-28"
            >
              <div className="xl:w-[600px] w-auto">
                <label htmlFor="PackageName">Package Name *</label>
                <input
                  type="text"
                  value={"Consultancy Fee"}
                  readOnly
                  className="form-control"
                />
              </div>
              <div className="xl:w-[600px] w-auto xl:mx-2">
                <label htmlFor="Email">Email *</label>
                <input
                  onChange={(e) =>
                    setpaymentdetails({
                      ...PaymentDetails,
                      Email: e.target.value,
                    })
                  }
                  value={PaymentDetails.Email}
                  type="email"
                  className="form-control"
                  required
                />
              </div>
              <div className="xl:w-[600px] w-auto">
                <label htmlFor="Billing Amount">Billing Amount *</label>
                <input
                  type="text"
                  onChange={(e) =>
                    setpaymentdetails({
                      ...PaymentDetails,
                      Amount: e.target.value,
                    })
                  }
                  value={PaymentDetails.Amount}
                  className="form-control"
                />
              </div>
              <div className="xl:w-[600px] w-auto xl:mx-2">
                <label htmlFor="Email">Currency*</label>
                <select className="form-control" value={"$USD"}>
                  <option value="$USD">$USD</option>
                </select>
              </div>
              <div>
                <button className="btn xl:relative xl:left-[22em] xl:mt-12 mt-8">
                  PAY USING STRIPE
                </button>
              </div>
            </form>
          </div>
        </section>
      </section>
      {/* </div> */}
    </>
  );
}

export default Stripe;
