// Import express
const express = require("express");
const app = express();

// Add function
const add = (n1, n2) => {
  return n1 + n2;
};
// Subtract function
const subtract = (n1, n2) => {
  return n1 - n2;
};
// Multiply Function
const multiply = (n1, n2) => {
  return n1 * n2;
};
// Divide function
const divide = (n1, n2) => {
  return n1 / n2;
};
// exponent function
const exponent = (n1, n2) => {
  return n1 ** n2;
};
// Root function
const root = (n) => {
  n = Math.sqrt(n);
  return n;
};
// Mod function
const mod = (n1, n2) => {
  return n1 % n2;
};

app.get("/add", (req, res) => {
  try {
    // Parse params into variables
    const n1 = parseFloat(req.query.n1);
    const n2 = parseFloat(req.query.n2);

    // Check that inputs are numbers
    if (isNaN(n1)) {
      throw new Error("n1 incorrectly defined");
    }
    if (isNaN(n2)) {
      throw new Error("n2 incorrectly defined");
    }
    // Perform calculations
    const result = add(n1, n2);
    // Send okay reponse with calculation result
    res.status(200).json({ statuscocde: 200, data: result });
  } catch (error) {
    // Print error in console and send error response
    console.error(error);
    res.status(500).json({ statuscocde: 500, msg: error.toString() });
  }
});
app.get("/subtract", (req, res) => {
  try {
    // Parse params into variables
    const n1 = parseFloat(req.query.n1);
    const n2 = parseFloat(req.query.n2);

    // Check that inputs are numbers
    if (isNaN(n1)) {
      throw new Error("n1 incorrectly defined");
    }
    if (isNaN(n2)) {
      throw new Error("n2 incorrectly defined");
    }
    // Perform calculations
    const result = subtract(n1, n2);
    // Send okay reponse with calculation result
    res.status(200).json({ statuscocde: 200, data: result });
  } catch (error) {
    // Print error in console and send error response
    console.error(error);
    res.status(500).json({ statuscocde: 500, msg: error.toString() });
  }
});
app.get("/multiply", (req, res) => {
  try {
    // Parse params into variables
    const n1 = parseFloat(req.query.n1);
    const n2 = parseFloat(req.query.n2);

    // Check that inputs are numbers
    if (isNaN(n1)) {
      throw new Error("n1 incorrectly defined");
    }
    if (isNaN(n2)) {
      throw new Error("n2 incorrectly defined");
    }
    // Perform calculations
    const result = multiply(n1, n2);
    // Send okay reponse with calculation result
    res.status(200).json({ statuscocde: 200, data: result });
  } catch (error) {
    // Print error in console and send error response
    console.error(error);
    res.status(500).json({ statuscocde: 500, msg: error.toString() });
  }
});
app.get("/divide", (req, res) => {
  try {
    // Parse params into variables
    const n1 = parseFloat(req.query.n1);
    const n2 = parseFloat(req.query.n2);

    // Check that inputs are numbers
    if (isNaN(n1)) {
      throw new Error("n1 incorrectly defined");
    }
    if (isNaN(n2)) {
      throw new Error("n2 incorrectly defined");
    }
    // Check for divide by 0
    if (n2 === 0) {
      throw new Error("Undefined. Cannot divide by 0");
    }
    // Perform calculations
    const result = divide(n1, n2);
    // Send okay reponse with calculation result
    res.status(200).json({ statuscocde: 200, data: result });
  } catch (error) {
    // Print error in console and send error response
    console.error(error);
    res.status(500).json({ statuscocde: 500, msg: error.toString() });
  }
});
app.get("/exponent", (req, res) => {
  try {
    // Parse params into variables
    const n1 = parseFloat(req.query.n1);
    const n2 = parseFloat(req.query.n2);

    // Check that inputs are numbers
    if (isNaN(n1)) {
      throw new Error("n1 incorrectly defined");
    }
    if (isNaN(n2)) {
      throw new Error("n2 incorrectly defined");
    }
    // Perform calculations
    const result = exponent(n1, n2);
    // Send okay reponse with calculation result
    res.status(200).json({ statuscocde: 200, data: result });
  } catch (error) {
    // Print error in console and send error response
    console.error(error);
    res.status(500).json({ statuscocde: 500, msg: error.toString() });
  }
});
app.get("/sqrt", (req, res) => {
  try {
    // Parse params into variables
    const n1 = parseFloat(req.query.n1);
    const n2 = parseFloat(req.query.n2);

    // Check that inputs are numbers
    if (isNaN(n1)) {
      throw new Error("n1 incorrectly defined");
    }
    if (isNaN(n2)) {
      throw new Error("n2 incorrectly defined");
    }
    // Check inputs are greater than 0
    if ((n1 < 0) | (n2 < 0)) {
      throw new Error("Cannot calculate square root of a negative number");
    }
    // Perform calculations
    const result = {
      sqrt_n1: root(n1),
      sqrt_n2: root(n2),
    };
    // Send okay reponse with calculation result
    res.status(200).json({ statuscocde: 200, data: result });
  } catch (error) {
    // Print error in console and send error response
    console.error(error);
    res.status(500).json({ statuscocde: 500, msg: error.toString() });
  }
});
app.get("/mod", (req, res) => {
  try {
    // Parse params into variables
    const n1 = parseFloat(req.query.n1);
    const n2 = parseFloat(req.query.n2);

    // Check that inputs are numbers
    if (isNaN(n1)) {
      throw new Error("n1 incorrectly defined");
    }
    if (isNaN(n2)) {
      throw new Error("n2 incorrectly defined");
    }
    // Check for divide by 0
    if (n2 === 0) {
      throw new Error("Undefined. Cannot divide by 0");
    }
    // Perform calculations
    const result = mod(n1, n2);
    // Send okay reponse with calculation result
    res.status(200).json({ statuscocde: 200, data: result });
  } catch (error) {
    // Print error in console and send error response
    console.error(error);
    res.status(500).json({ statuscocde: 500, msg: error.toString() });
  }
});
const port = 8080;
app.listen(port, () => {
  console.log("hello i'm listening to port " + port);
});
