const router = require("express");
const stripe = require("../../config/stripe-config")

const router = express.Router();

router.post("/create-checkout-session", async (req, res) => {

    const customer = await stripe.customers.create({
      metadata: {
        userId: req.body.userId,
        cart: JSON.stringify(req.body.cartItems),
      },
    });

    const line_items = req.body.cartItems.map((item) => {
      return {
        price_data: {
          currency: "usd",
          product_data: {
            name: item.name,
            images: [item.image],
            description: item.desc,
            metadata: {
              id: item.id,
            },
          },
          unit_amount: item.price * 100,
        },
        quantity: item.cartQuantity,
      };
    });

  const session = await stripe.checkout.sessions.create({
    line_items,
    mode: "payment",
    success_url: `${process.env.CLIENT_DOMAIN}/success.html`,
    cancel_url: `${process.env.CLIENT_DOMAIN}/cancel.html`,
  });

  res.redirect(303, session.url);
});

router.post(
    "/webhook",
    express.raw({ type: "application/json" }),
    (request, response) => {
      const sig = request.headers["stripe-signature"];

      let event;

      try {
        event = stripe.webhooks.constructEvent(
          request.body,
          sig,
          process.env.WEBHOOK_TEST_SECRET
        );
        console.log("Webhook is Hit!!");
      } catch (err) {
        response.status(400).send(`Webhook Error: ${err.message}`);
        return;
      }
  
      // Handle the event
    switch (event.type) {
        case "payment_intent.succeeded":
          const paymentIntent = event.data.object;
          // Then define and call a function to handle the event payment_intent.succeeded
          break;
        // ... handle other event types
        default:
          console.log(`Unhandled event type ${event.type}`);
      }
  
      // Return a 200 response to acknowledge receipt of the event
      response.send();
    }
  );
  
  module.exports = router;
  