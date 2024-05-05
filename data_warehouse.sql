CREATE TABLE user (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  address TEXT NOT NULL,
  dob DATE,  -- Add date of birth for risk assessment
  ... other user details
);

CREATE TABLE policy (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id INTEGER REFERENCES user(id) NOT NULL,
  product_category TEXT NOT NULL, -- e.g., "Motor", "Fire", "Travel"
  sum_insured FLOAT NOT NULL,
  start_date DATE NOT NULL,
  end_date DATE NOT NULL,
  ... other policy details
);

CREATE TABLE payment_transaction (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  policy_id INTEGER REFERENCES policy(id) NOT NULL,
  payment_type TEXT NOT NULL, -- e.g., "CreditCard", "DebitCard"
  amount FLOAT NOT NULL,
  transaction_date DATETIME NOT NULL,
  success BOOLEAN NOT NULL DEFAULT false
);

CREATE TABLE quote (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id INTEGER REFERENCES user(id) NOT NULL,
  product_category TEXT NOT NULL, -- e.g., "Motor", "Fire", "Travel"
  sum_insured FLOAT NOT NULL,
  premium FLOAT NOT NULL,
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  ... other quote details
);
