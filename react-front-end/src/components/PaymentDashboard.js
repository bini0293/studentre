import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PaymentDashboard = () => {
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentError, setPaymentError] = useState(null);

  // This function will be triggered when the user clicks on the "Pay" button
  const handlePayment = () => {
    setIsProcessing(true);

    window.paypal
      .Buttons({
        createOrder: (data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: "50.00", // Example: Adjust the payment amount based on your requirements
                },
                description: "Course Registration Fee",
              },
            ],
          });
        },
        onApprove: (data, actions) => {
          return actions.order
            .capture()
            .then((details) => {
              alert("Payment Successful: " + details.payer.name.given_name);
              navigate("/payment-success");
            });
        },
        onCancel: (data) => {
          alert("Payment was canceled.");
          navigate("/payment-cancel");
        },
        onError: (err) => {
          setPaymentError("There was an error processing your payment. Please try again.");
          setIsProcessing(false);
        },
      })
      .render("#paypal-button-container");
  };

  useEffect(() => {
    // Dynamically load the PayPal SDK script
    const script = document.createElement("script");
    script.src = "https://www.paypal.com/sdk/js?client-id=your-client-id-here";
    script.async = true;
    script.onload = handlePayment;
    document.body.appendChild(script);

    return () => document.body.removeChild(script); // Clean up the script on unmount
  }, []);

  return (
    <div className="container mt-5" style={{ padding: "20px", backgroundColor: "#f8f9fa" }}>
      <h2 className="text-center mb-4" style={{ color: "#343a40" }}>Payment Dashboard</h2>
      <p className="text-center text-muted mb-4">
        Complete your payment to finalize the course registration.
      </p>

      {paymentError && (
        <div className="alert alert-danger text-center" role="alert">
          {paymentError}
        </div>
      )}

      <div className="card shadow p-4 rounded" style={{ backgroundColor: "#ffffff" }}>
        <div className="card-body">
          <h5 className="card-title" style={{ fontWeight: "bold", color: "#495057" }}>
            Pay Now to Complete Registration
          </h5>
          <p className="card-text">
            Your registration fee of $50.00 is due to finalize your course enrollment. 
            Please click the button below to proceed with the payment.
          </p>

          {/* PayPal Button Container */}
          <div id="paypal-button-container" className="mb-3"></div>

          {isProcessing && (
            <div className="text-center mt-4">
              <div className="spinner-border text-primary" role="status">
                <span className="sr-only">Processing...</span>
              </div>
              <p className="mt-3">Processing your payment, please wait...</p>
            </div>
          )}
        </div>
      </div>

      <div className="text-center mt-4">
        <button
          className="btn btn-warning"
          style={{ padding: "10px 20px", borderRadius: "5px" }}
          onClick={() => navigate("/")}
        >
          Cancel Registration
        </button>
      </div>
    </div>
  );
};

export default PaymentDashboard;
