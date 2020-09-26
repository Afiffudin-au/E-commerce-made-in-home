const functions = require('firebase-functions')
const express = require('express')
const cors = require('cors')
const stripe = require('stripe')('sk_test_51HUql0HC4PtuoUpoLeJ2ZSNAHkZU3n47nIyBp8phKuYw1CfHPhl1DWm1kUcxxydDNjDAztB6A9Zzn9NIH6NJkx6P00p03sFA6T')
//API

//App COnfig 
const app = express();

// - MiddlewaresWe 
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "usd",
  });

  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen command
exports.api = functions.https.onRequest(app);

//example endpoint