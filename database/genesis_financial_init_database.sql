# GENESIS FINANCIAL
# INITIATE DATABASE
# MYSQL
# SOFE 3700U GROUP 12

CREATE SCHEMA IF NOT EXISTS genesis_financial;
USE genesis_financial;

CREATE TABLE IF NOT EXISTS address (
    Id         INT AUTO_INCREMENT
        PRIMARY KEY,
    Street     VARCHAR(64) NOT NULL,
    City       VARCHAR(64) NOT NULL,
    Province   VARCHAR(10) NULL,
    Country    VARCHAR(64) NOT NULL,
    PostalCode CHAR(20)    NULL,
    CONSTRAINT address_Id_uindex
        UNIQUE (Id)
);

CREATE TABLE IF NOT EXISTS branch (
    BranchNo    INT AUTO_INCREMENT
        PRIMARY KEY,
    Phone       VARCHAR(15)  NOT NULL,
    Fax         VARCHAR(15)  NOT NULL,
    ManagerName VARCHAR(100) NULL,
    AddressID   INT          NULL,
    CONSTRAINT branch_address_Id_fk
        FOREIGN KEY (AddressID) REFERENCES address(Id)
            ON UPDATE CASCADE ON delete set NULL
);

CREATE TABLE IF NOT EXISTS customer (
    Username     VARCHAR(30)                         NOT NULL,
    SIN          INT                                 NOT NULL
        PRIMARY KEY,
    FName        VARCHAR(32)                         NOT NULL,
    LName        VARCHAR(32)                         NOT NULL,
    BirthDate    DATE                                NULL,
    Email        VARCHAR(100)                        NOT NULL,
    PasswordHash VARCHAR(100)                        NOT NULL,
    Salt         VARCHAR(50)                         NOT NULL,
    CreationDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP NULL,
    AddressID    INT       DEFAULT 0                 NULL,
    HomeBranch   INT                                 NULL,
    Phone        VARCHAR(15)                         NULL,
    CONSTRAINT customer_ssn_uindex
        UNIQUE (SIN),
    CONSTRAINT customer_username_uindex
        UNIQUE (Username),
    CONSTRAINT customer_address_Id_fk
        FOREIGN KEY (AddressID) REFERENCES address(Id)
            ON UPDATE CASCADE ON delete set NULL,
    CONSTRAINT customer_branch_BranchNum_fk
        FOREIGN KEY (HomeBranch) REFERENCES branch(BranchNo)
            ON UPDATE CASCADE ON delete set NULL
);

CREATE TABLE IF NOT EXISTS account (
    AccountNo   INT AUTO_INCREMENT
        PRIMARY KEY,
    Type        ENUM ('DEBIT', 'CREDIT') NULL,
    Amount      DOUBLE                   NULL,
    CustomerSIN INT                      NULL,
    CONSTRAINT account_AccountNum_uindex
        UNIQUE (AccountNo),
    CONSTRAINT account_customer_SSN_fk
        FOREIGN KEY (CustomerSIN) REFERENCES customer(SIN)
            ON UPDATE CASCADE
);

CREATE TABLE IF NOT EXISTS card (
    CardNo     VARCHAR(16)                 NOT NULL
        PRIMARY KEY,
    CVV        INT                         NOT NULL,
    PIN        INT                         NOT NULL,
    Type       ENUM ('VISA', 'MASTERCARD') NULL,
    ExpiryDate VARCHAR(13)                 NULL,
    AccountNo  INT                         NULL,
    CONSTRAINT card_Number_uindex
        UNIQUE (CardNo),
    CONSTRAINT card_account_AccountNum_fk
        FOREIGN KEY (AccountNo) REFERENCES account(AccountNo)
            ON UPDATE CASCADE ON delete CASCADE
);

CREATE TABLE IF NOT EXISTS loan (
    LoanNo       INT AUTO_INCREMENT
        PRIMARY KEY,
    CustomerSIN  INT                                 NULL,
    Type         ENUM ('MORTGAGE', 'LINE OF CREDIT') NULL,
    Amount       DOUBLE                              NULL,
    InterestRate DOUBLE                              NULL,
    Compounded   DOUBLE                              NULL,
    DueDate      DATE                                NULL,
    CONSTRAINT loans_AccountNum_uindex
        UNIQUE (LoanNo),
    CONSTRAINT loans_customer_SSN_fk
        FOREIGN KEY (CustomerSIN) REFERENCES customer(SIN)
);

CREATE TABLE IF NOT EXISTS transaction (
    TransactionNo   INT AUTO_INCREMENT
        PRIMARY KEY,
    TransactionTime TIMESTAMP DEFAULT CURRENT_TIMESTAMP NULL,
    Amount          DOUBLE                              NOT NULL,
    AddressID       INT                                 NULL,
    Establishment   VARCHAR(100)                        NOT NULL,
    Category        VARCHAR(100)                        NULL,
    CardNo          VARCHAR(16)                         NULL,
    CONSTRAINT transaction_TransactionID_uindex
        UNIQUE (TransactionNo),
    CONSTRAINT transaction_address_Id_fk
        FOREIGN KEY (AddressID) REFERENCES address(Id),
    CONSTRAINT transaction_card_CardNum_fk
        FOREIGN KEY (CardNo) REFERENCES card(CardNo)
);

CREATE index transaction_account_AccountNum_fk
    ON transaction(CardNo);
