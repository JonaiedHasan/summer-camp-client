/* eslint-disable no-undef */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import "./CheckoutForm.css";
import { useNavigate } from "react-router-dom";
import useAuth from "../../../../Hooks/useAuth";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";

const CheckoutForm = ({ item, closeModal }) =>  {
  // console.log(item);
  const navigate = useNavigate();
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useAuth();
  // const [axiosSecure] = useAxiosSecure();
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);

  useEffect(() => {
    if (item.price > 0) {
      axios
        .post('https://summer-camp-school-server-gamma.vercel.app/create-payment-intent', {
          price: item.price,
        })
        .then((res) => {
          setClientSecret(res.data.clientSecret);
        });
    }
  }, [item]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }

    const { error } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("error", error);
      setCardError(error.message);
    } else {
      setCardError("");
      // console.log('payment method', paymentMethod)
    }

    setProcessing(true);

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "unknown",
            name: user?.displayName || "anonymous",
          },
        },
      });

    if (confirmError) {
      setCardError(confirmError.message);
    }

    console.log("payment intent", paymentIntent);

    if (paymentIntent.status === "succeeded") {
      // save payment information to the server
      const enrollData = {
        name: user?.displayName,
        email: user?.email,
        image:item?.image,
        price: item?.price,
        transactionId: paymentIntent.id,
        totalOrders: item?.length,
        classId: item?.classId,
        item: item?._id,
        className: item?.name,
        date: new Date(),
        orderStatus: "enrolled",
      };

      fetch('https://summer-camp-school-server-gamma.vercel.app/payment', {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(enrollData),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.result.acknowledged==true) {
            // refetch();
            const text = `Enrollment Successful!, TransactionId: ${paymentIntent.id}`;
            toast.success(text);
            navigate("/dashboard/myEnrolledClasses");
            closeModal();
          }
        });
    }
    setProcessing(false);
  };
  return (
    <>
      <form className="my-2" onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />

        <div className="flex mt-2 justify-around">
          <button
            type="button"
            className="inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
            onClick={closeModal}
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={!stripe || !clientSecret || processing}
            className="inline-flex justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2 cursor-pointer"
          >
            {`Pay ${item?.price}$`}
          </button>
        </div>
      </form>
      {cardError && <p className="text-red-600 ml-8">{cardError}</p>}
    </>
  );
};

export default CheckoutForm;


