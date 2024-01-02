CREATE DATABASE AngularDemo;

USE AngularDemo;

CREATE TABLE
    Employees (
        Id INT PRIMARY KEY IDENTITY(1, 1),
        Name NVARCHAR(50),
        DoB DATE,
        Salary MONEY,
        Gender VARCHAR(10),
        Status BIT
    );

INSERT INTO
    Employees (
        name,
        dob,
        salary,
        gender,
        status
    )
VALUES (
        N'hải',
        '1989-12-03',
        15000000,
        'male',
        1
    ), (
        N'hoàng',
        '1990-06-15',
        12000000,
        'male',
        1
    ), (
        N'long',
        '1992-01-14',
        17000000,
        'male',
        0
    ), (
        N'trung',
        '1993-11-04',
        12000000,
        'male',
        1
    ), (
        N'hương',
        '1995-10-05',
        11000000,
        'female',
        0
    ), (
        N'thủy',
        '1988-09-06',
        10000000,
        'female',
        1
    );

SELECT * FROM Employees;