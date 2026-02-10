package com.example.currencyconverter;

import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
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

@RestController
public class BitcoinConverterController {
    private static final String API_URL = "https://api.coinlayer.com/live?access_key=";
    private static final String API_KEY = "9163e2e9dc6edd3760145eeb02f687df"; // CoinGecko API to get Bitcoin price
    private static final String DATA_FILE = "currencyconverter/src/main/resources/static/bitdata.json";

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/fetchBitData")
    public String fetchData() {
        try {
            // Fetch Fiat Bitcoin rates
            URL url = new URL(API_URL + API_KEY);
            HttpURLConnection conn = (HttpURLConnection) url.openConnection();
            conn.setRequestMethod("GET");

            try (BufferedReader reader = new BufferedReader(
                    new InputStreamReader(conn.getInputStream(), StandardCharsets.UTF_8))) {
                StringBuilder responseBuilder = new StringBuilder();
                String line;
                while ((line = reader.readLine()) != null) {
                    responseBuilder.append(line);
                }

                // Save the JSON response to a file
                try (FileWriter file = new FileWriter(DATA_FILE)) {
                    file.write(responseBuilder.toString());
                }

                return "Fiat data fetched and saved successfully.";
            }
        } catch (Exception e) {
            e.printStackTrace();
            return "Failed to fetch fiat data.";
        }
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/bitconvert")
    public double convert(@RequestParam double bitcoinAmount,
                          @RequestParam String fromBitcoin,
                          @RequestParam String toBitcoin) {
        try {
            String jsonString = new String(Files.readAllBytes(Paths.get(DATA_FILE)), StandardCharsets.UTF_8);
            JsonObject jsonResponse = JsonParser.parseString(jsonString).getAsJsonObject();
            JsonObject rates = jsonResponse.getAsJsonObject("rates");

            double fromRate = rates.getAsJsonPrimitive(fromBitcoin).getAsDouble();
            double toRate = rates.getAsJsonPrimitive(toBitcoin).getAsDouble();

            return (bitcoinAmount / fromRate) * toRate;
        } catch (Exception e) {
            e.printStackTrace();
            return 0;
        }
    }
}
