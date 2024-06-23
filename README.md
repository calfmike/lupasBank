# lupasBank Functional Documentation

[Lea esta documentación en español](README.es.md)

## Introduction --- !!!! IMPORTANT !!!!
## Just to be fair, this is a project made 100% with IA, made for fun and in a way that my knowledge can be demonstrated in a practical way, applying the skills I acquired after 10 years of working in IT. Inside /src/backend there is the swagger.json to see the postman collection detail on any swagger editor like https://editor.swagger.io/ hope you like it ! It was fun to create it.

## -- Yet to implement the frontEnd for the final User. The first version of the BO is already merged, I have pending to make a video with a demo of the app. But i havve the enviroment setUp in case there is someone curious about it, we can arrange a meet and ill show you with pleasure my little monster (?)
lupasBank is a comprehensive banking application that allows users to manage their accounts, perform transactions, and more. This document outlines the functionalities implemented in the application.

## SCREENSHOTS##
Login Admin on BO:
![image](https://github.com/calfmike/lupasBank/assets/49999749/b61f215e-fdc4-4f1e-8097-e20bd4750dd4)

Admin dashboard on BO:
![image](https://github.com/calfmike/lupasBank/assets/49999749/ca96e84c-30f6-47e0-9ab9-40ce297df3be)

Manage users on BO (yet to complete) colors depending on each onboarding state:
![image](https://github.com/calfmike/lupasBank/assets/49999749/f4284bdd-c0e0-4c7f-8b2c-83b973adb2ec)

Modal for editing user:
![image](https://github.com/calfmike/lupasBank/assets/49999749/9d97c084-faa3-42c7-9a30-8ed285365918)

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
![image](https://github.com/calfmike/lupasBank/assets/49999749/c7c996cf-c0f9-40bd-8a41-9350f4595102)
A demo of the APIs integrated with a BO, and a user front end are coming soon.
