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

INSERT INTO employee (id, first_name, last_name, role_id)
VALUES (001, "John", "Doe", 001),
       (002, "Trae", "Roy", 002),
       (003, "Austin", "Hacker", 003),
       (004, "Matthew", "Shanosky", 004),
       (005, "Andrew", "McCutcheon", 005),
       (006, "Naruto", "Uzamaki", 006),
       (007, "Sasuke", "Uchicha", 002),
       (008, "Ken", "Kanaki", 004),
       (009, "Clark", "Kent", 008),
       (010, "Bruce", "Wayne", 001),
       (011, "Tony", "Stark", 002);

