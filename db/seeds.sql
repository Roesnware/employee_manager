INSERT INTO department (name)
VALUES ("Retail"),
       ("Engineering"),
       ("Finance");

INSERT INTO role (title, salary, department_id)
VALUES ("Stocker", 35750.00, 001),
       ("Project Lead", 98000.00, 002),
       ("Software Developer", 84000.00, 002),
       ("Lead Engineer", 250000.00, 002),
       ("Cashier", 30000.00, 001),
       ("Finance Advisor", 73000.00, 003),
       ("Accountant", 63500.00, 003),
       ("Mortgage Broker", 120000.00, 003);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("John", "Doe", 001, null),
       ("Trae", "Roy", 002, null),
       ("Austin", "Hacker", 003, 004),
       ("Matthew", "Shanosky", 004, 002),
       ("Andrew", "McCutcheon", 005, null),
       ("Naruto", "Uzamaki", 006, null),
       ("Sasuke", "Uchicha", 002, null),
       ("Ken", "Kanaki", 004, 007),
       ("Clark", "Kent", 008, null),
       ("Bruce", "Wayne", 001, null),
       ("Tony", "Stark", 002, null);

