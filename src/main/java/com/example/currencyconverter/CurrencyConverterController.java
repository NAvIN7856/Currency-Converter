package com.example.currencyconverter;

import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
// import com.google.gson.JsonPrimitive;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.io.BufferedReader;
import java.io.FileWriter;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Paths;  
// cors

@RestController
public class CurrencyConverterController {

    private static final String API_URL = "https://api.exchangerate-api.com/v4/latest/USD"; // Replace with your API URL
    private static final String API_KEY = "c77eb7d1195d073fd870dcdb";
    private static final String DATA_FILE = "currencyconverter/src/main/resources/static/data.json";

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/fetchData")
    public String fetchData() {     
        try {
            URL url = new URL(API_URL + "?access_key=" + API_KEY);
            HttpURLConnection conn = (HttpURLConnection) url.openConnection();
            conn.setRequestMethod("GET");

            try (BufferedReader reader = new BufferedReader(new InputStreamReader(conn.getInputStream(), StandardCharsets.UTF_8))) {
                StringBuilder responseBuilder = new StringBuilder();
                String line;
                while ((line = reader.readLine()) != null) {
                    responseBuilder.append(line);
                }

                // Save the JSON response to a file
                try (FileWriter file = new FileWriter(DATA_FILE)) {
                    file.write(responseBuilder.toString());
                }

                return "Data fetched and saved successfully.";
            }
        } catch (Exception e) {
            e.printStackTrace();
            return "Failed to fetch data.";
        }
    }


    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/convert")
    public double convert(@RequestParam double amount,
                          @RequestParam String fromCurrency,
                          @RequestParam String toCurrency) {
        try {
            // Read the JSON data from the file
            String jsonString = new String(Files.readAllBytes(Paths.get(DATA_FILE)), StandardCharsets.UTF_8);
            JsonObject jsonResponse = JsonParser.parseString(jsonString).getAsJsonObject();
            JsonObject rates = jsonResponse.getAsJsonObject("rates");

            double fromRate = rates.getAsJsonPrimitive(fromCurrency).getAsDouble();
            double toRate = rates.getAsJsonPrimitive(toCurrency).getAsDouble();

            return (amount / fromRate) * toRate;
        } catch (Exception e) {
            e.printStackTrace();
            return 0;
        }
    }
}