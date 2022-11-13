# GENESIS FINANCIAL
# VIEWS
# MYSQL
# SOFE 3700U GROUP 12

USE genesis_financial;

# view1: customers' accounts and their respective cards

DROP VIEW IF EXISTS view1;
CREATE VIEW view1 AS
SELECT C.FName, C.LName, A.Type, D.CardNo, D.Type AS CardType
FROM account A
         INNER JOIN customer C on C.SIN = A.CustomerSIN
         INNER JOIN card D on D.AccountNo = A.AccountNo
ORDER BY C.LName;

# view2: finds countries, amount of transactions, and total expenditure where
# total expenditure in those countries is higher than in Canada

DROP VIEW IF EXISTS view2;
CREATE VIEW view2 AS
WITH country_totals AS (SELECT AD.Country, COUNT(T.Amount) AS Transactions, ROUND(SUM(T.Amount), 2) AS Total
                        FROM transaction T, address AD
                        WHERE T.AddressID = AD.Id
                        GROUP BY AD.Country
                        ORDER BY Total DESC)
SELECT *
FROM country_totals
WHERE Total > ANY (SELECT Total
                   FROM country_totals
                   WHERE Country = 'Canada');

# view3: finds total amount each customer has in their accounts

DROP VIEW IF EXISTS view3;
CREATE VIEW view3 AS
SELECT C.Fname, C.Lname,
    (SELECT ROUND(SUM(Amount), 2)
     FROM account T
     WHERE C.SIN = T.CustomerSIN) AS Total_Amount
FROM customer C
ORDER BY Total_Amount DESC;

# view4: finds all the loans a customer has with the amount and type

DROP VIEW IF EXISTS view4;
CREATE VIEW view4 AS
SELECT Fname, Lname, loan.Type AS Loan_Type, loan.Amount AS Loan_Amount
FROM customer FULL
         JOIN loan
ON SIN = loan.CustomerSIN;

# view5: finds all the cities with a higher amount of addresses than average (including branch addresses),
# then displays the average at the end of the list

DROP VIEW IF EXISTS view5;
CREATE VIEW view5 AS
WITH city_totals AS
    (SELECT C.FName As Addresses, A.City
     FROM customer C, address A
     WHERE C.AddressID = A.Id
     UNION
     SELECT B.ManagerName As Addresses, A.City
     FROM branch B, address A
     WHERE B.AddressID = A.Id),
    city_averages AS
        (SELECT COUNT(Addresses) as Locations, City
         FROM city_totals
         GROUP BY City)
SELECT *
FROM city_averages
WHERE Locations > ANY (SELECT AVG(Locations) FROM city_averages)
UNION
SELECT AVG(Locations), '-AVERAGE-'
FROM city_averages
ORDER BY Locations DESC;


# view6: finds the amount of mortgage and line of credit loan accounts

DROP VIEW IF EXISTS view6;
CREATE VIEW view6 AS
SELECT COUNT(L.Amount) AS Amount, L.Type
FROM loan L
GROUP BY L.Type;

# view7: gives the list of customers who have more than one account

DROP VIEW IF EXISTS view7;
CREATE VIEW view7 AS
SELECT FName, LName
FROM customer
WHERE (SELECT COUNT(*)
       FROM account
       WHERE SIN = account.CustomerSIN) >= 2
ORDER BY FName;

# view8: gives the list of customers who have more than $1 million more than the customer with the least amount of money

DROP VIEW IF EXISTS view8;
CREATE VIEW view8 AS
SELECT DISTINCT FName, LName
FROM customer, account
WHERE account.CustomerSIN = customer.SIN AND Amount >= 1000000 + (SELECT MIN(Amount) FROM account);

# view9: Gives the list of customers who have a credit balance greater than $10000
# with customers who have a debit balance between $700k-$1.1 million

DROP VIEW IF EXISTS view9;
CREATE VIEW view9 AS
SELECT FName, LName, Amount, Type
FROM customer, account
WHERE account.Type = 'CREDIT' AND SIN = account.CustomerSIN AND Amount > 10000
UNION
SELECT FName, LName, Amount, Type
FROM customer, account
WHERE account.Type = 'DEBIT' AND SIN = account.CustomerSIN AND (Amount > 700000 AND Amount < 1100000);

# view10: finds the name and birthdate of all millennial customers (between 1981 and 1996)

DROP VIEW IF EXISTS view10;
CREATE VIEW view10 AS
SELECT C.FName, C.LName, C.BirthDate
FROM customer C
WHERE C.BirthDate BETWEEN '1981-01-01' AND '1996-12-31'
ORDER BY C.BirthDate;