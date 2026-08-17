# 🚦 Queueless – Smart Queue & Crowd Management Platform

Queueless is a full-stack web application designed to simplify queue management and reduce unnecessary crowding at service locations.

The project was developed as a **DevOps Tools project** to demonstrate the complete CI/CD workflow using **GitHub, Jenkins, and Render**.

---

## 📌 Project Overview

Traditional physical queues can cause long waiting times, overcrowding, and uncertainty about service availability.

Queueless provides users with a simple web interface where they can:

- View available service queues
- See the location of a service
- View the number of people waiting
- Check the estimated waiting time
- Join a queue through the web application

The project also demonstrates how a full-stack application can be automatically tested, built, and deployed using DevOps practices.

---

## 🎯 Objectives

The main objectives of the Queueless project are:

1. To develop a simple Smart Queue Management web application.
2. To display real-time-style queue information through a web interface.
3. To allow users to join a selected queue.
4. To manage the source code using Git and GitHub.
5. To implement Continuous Integration using Jenkins.
6. To implement Continuous Delivery using Jenkins and Render.
7. To automate dependency installation and application testing.
8. To demonstrate an end-to-end DevOps workflow.

---

## 🛠️ Technologies Used

### Frontend
- HTML5
- CSS3
- JavaScript

### Backend
- Node.js
- Express.js

### Version Control
- Git
- GitHub

### CI/CD
- Jenkins

### Deployment
- Render

### Package Management
- npm

---

## 🏗️ Project Architecture

```text
                    ┌─────────────────┐
                    │     Developer   │
                    └────────┬────────┘
                             │
                             │ git push
                             ▼
                    ┌─────────────────┐
                    │     GitHub      │
                    │  Source Code    │
                    └────────┬────────┘
                             │
                             │ Checkout
                             ▼
                    ┌─────────────────┐
                    │     Jenkins     │
                    │    CI/CD        │
                    └────────┬────────┘
                             │
              ┌──────────────┼──────────────┐
              │              │              │
              ▼              ▼              ▼
        Install npm       Test        Build
              │              │              │
              └──────────────┼──────────────┘
                             │
                             ▼
                    ┌─────────────────┐
                    │     Render      │
                    │   Deployment    │
                    └────────┬────────┘
                             │
                             ▼
                    ┌─────────────────┐
                    │   Queueless     │
                    │   Web App       │
                    └─────────────────┘
