package com.springReactApp2.controller;

import com.example.demo.service.PayPalService;
import com.paypal.orders.Order;
import com.paypal.orders.CaptureOrderResponse;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/payment")
public class PaymentController {

    private final PayPalService payPalService;

    public PaymentController(PayPalService payPalService) {
        this.payPalService = payPalService;
    }

    // Create a PayPal order
    @PostMapping("/create-order")
    public Order createPaymentOrder(@RequestParam double amount) {
        try {
            return payPalService.createOrder(amount);
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    // Capture the payment after the user approves it
    @PostMapping("/capture-payment")
    public CaptureOrderResponse capturePayment(@RequestParam String orderId) {
        try {
            return payPalService.capturePayment(orderId);
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }
}

