package com.springReactApp2.service;

import com.paypal.core.PayPalHttpClient;
import com.paypal.core.PayPalEnvironment;
import com.paypal.orders.*;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class PayPalService {

    @Value("${paypal.client.id}")
    private String clientId;

    @Value("${paypal.client.secret}")
    private String clientSecret;

    @Value("${paypal.mode}")
    private String mode;

    private PayPalHttpClient payPalHttpClient;

    public PayPalService() {
        // Configure PayPal environment based on mode (sandbox or live)
        PayPalEnvironment environment = mode.equals("sandbox")
                ? new PayPalEnvironment.Sandbox(clientId, clientSecret)
                : new PayPalEnvironment.Live(clientId, clientSecret);

        payPalHttpClient = new PayPalHttpClient(environment);
    }

    // Create a PayPal Order
    public Order createOrder(double amount) throws Exception {
        // Create an order request
        OrderRequest orderRequest = new OrderRequest();
        orderRequest.checkoutPaymentIntent("CAPTURE");

        // Set purchase units
        List<PurchaseUnitRequest> purchaseUnits = new ArrayList<>();
        PurchaseUnitRequest purchaseUnit = new PurchaseUnitRequest();
        purchaseUnit.referenceId("registration-payment");
        purchaseUnit.amountWithBreakdown(new AmountWithBreakdown().currencyCode("USD").value(String.valueOf(amount)));
        purchaseUnits.add(purchaseUnit);

        orderRequest.purchaseUnits(purchaseUnits);

        // Create the PayPal Order
        OrdersCreateRequest ordersCreateRequest = new OrdersCreateRequest();
        ordersCreateRequest.requestBody(orderRequest);

        // Send the request to PayPal API
        OrdersCreateResponse response = payPalHttpClient.execute(ordersCreateRequest);
        return response.result();
    }

    // Capture PayPal Payment (to finalize the transaction)
    public CaptureOrderResponse capturePayment(String orderId) throws Exception {
        OrdersCaptureRequest ordersCaptureRequest = new OrdersCaptureRequest(orderId);
        ordersCaptureRequest.requestBody(new OrderActionRequest());
        return payPalHttpClient.execute(ordersCaptureRequest);
    }
}
