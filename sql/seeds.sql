INSERT INTO department (id, name)
VALUES (001, "Retail"),
       (002, "Engineering"),
       (003, "Finance");

INSERT INTO role (id, title, salary, department_id)
VALUES (001, "Stocker", 35750.00, 001),
       (002, "Project Lead", 98000.00, 002),
       (003, "Software Developer", 84000.00, 002),
       (004, "Lead Engineer", 250000.00, 002),
       (005, "Cashier", 30000.00, 001),
       (006, "Finance Advisor", 73000.00, 003),
       (007, "Accountant", 63500.00, 003),
       (008, "Mortgage Broker", 120000.00, 003);

