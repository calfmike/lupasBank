# lupasBank Functional Documentation

[Lea esta documentación en español](README.es.md)

## Introduction --- !!!!! IMPORTANT !!!!
Just to be clear, this is a project made 100% with IA, applying my functional and technical skills to show the knowledge I acquired after 10 years of working in IT. 

lupasBank is a comprehensive banking application that allows users to manage their accounts, perform transactions, and more. This document outlines the functionalities implemented in the application.

## Table of Contents
- [Users](#users)
  - [Registration](#registration)
  - [Login](#login)
  - [Enrollment](#enrollment)
- [Accounts](#accounts)
  - [Account Creation](#account-creation)
  - [Retrieve Accounts](#retrieve-accounts)
- [Transactions](#transactions)
  - [Transfers](#transfers)
  - [Credit Notes](#credit-notes)
  - [Debit Notes](#debit-notes)
- [Admin](#admin)
  - [Admin Management](#admin-management)
- [Backoffice Integration](#backoffice-integration)
- [Developer Setup](#developer-setup)
- [Contributing](#contributing)
- [Deployment](#deployment)
- [Demo](#demo)

## Users

### Registration
Users can register by providing their first name, last name, email, and password.

### Login
Registered users can log in to the application using their email and password to obtain a JWT token for authentication.

### Enrollment
After logging in, users can enroll by setting a security image, selecting an account type (savings or checking), and providing an alias for the account.

## Accounts

### Account Creation
Users can create accounts. Admins can also create accounts for users.

### Retrieve Accounts
Users can retrieve all their accounts or a specific account by user ID. Admins can retrieve all accounts.

## Transactions

### Transfers
Users can make transfers between accounts using either the CBU or alias. The reason for the transfer is recorded as "internalTransfer".

### Credit Notes
Admins can create credit notes for accounts.

### Debit Notes
Admins can create debit notes for accounts.

## Admin

### Admin Management
Admins can register and log in to the backoffice. Admins can also retrieve a list of all users.

## Backoffice Integration
The backoffice is integrated with the API to manage users, accounts, and transactions without requiring admins to have regular user accounts or enrollment.

## Demo
A demo of the APIs integrated with a BO, and a user front end are coming soon.