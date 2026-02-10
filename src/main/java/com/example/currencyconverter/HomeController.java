package com.example.currencyconverter;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomeController {

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/")
    public String homePage() {
        return "Welcome to the Currency Converter! Navigate to /convert for currency conversions or /bitcoin for Bitcoin conversions.";
    }
}
