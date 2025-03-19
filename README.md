# FocusFlow Interactive Stress Management System

FocusFlow is an interactive web application designed to support stress management and promote focus for professionals in high-pressure environments. It offers an intuitive, non-intrusive system that provides real-time biometric monitoring, visual feedback, and guided breathing exercises to help users regulate their stress levels during intense work sessions.

The system addresses the growing need for mental well-being tools in demanding industries, such as investment banking, where extended work hours and high workloads lead to cognitive fatigue, reduced productivity, and stress-related health risks.

FocusFlow aims to provide a personalized, responsive, and ambient experience to help users maintain balance throughout their day.



## Project Overview

This project simulates a **Calm Tech** system targeted at professionals, a junior investment banking analyst. It uses **p5.js** for the front-end interface and **Node.js + Express** for the back-end API, enabling real-time data interaction and historical data visualization.


## Objectives
- Develop a **non-intrusive ambient system** to support cognitive well-being.
- Provide **real-time biometric feedback** and **breathing guidance**.
- Demonstrate a **full-stack Calm Tech application** with potential for real sensor integration.







## Project Structure

### Frontend (p5.js)
- **Login & Authentication**  
- **Real-time Dashboard** (stress level, focus status)  
- **Breathing Exercise Animation**  
- **Historical Data Graphs**  
- **Customizable Settings Panel**

### Backend (Node.js + Express)
- **User Login API**  
- **Submit Biometric Data API**  
- **Get History API**  
- **JSON-based Storage** (extensible to databases)

## System Workflow
 The workflow begins with user authentication. Upon accessing the application, users are prompted to enter their credentials through the login interface on the frontend.The credentials are sent via HTTP POST request to the backend server, where they are validated against locally stored user data.  If the authentication is successful, the user gains access to the main dashboard.
 
Once logged in, the dashboard displays real-time biometric information such as heart rate and stress level.  This data can be simulated manually in the current version or collected from biometric devices in future iterations.  The biometric data is submitted to the backend using RESTful API calls and is stored in a JSON file-based database for later analysis and visualization.

Users can initiate guided breathing exercises through the interface.  The frontend provides a visual breathing guide implemented with p5.js, featuring dynamic animations that assist the user in regulating their breathing patterns.  In future versions, ambient feedback such as lighting and haptic signals can be integrated, controlled by an external microcontroller (e.g., Arduino) or DMX lighting systems, to provide multisensory relaxation support.



## Required Components

### Hardware Components
- **Wearable Biometric Device**  
- **Arduino Controller** (stress level, focus status)  
- **Ambient Lighting Devices**  
- **Vibration Motor (Haptic Device)**  
- **DMX Lighting**

###  Software Components

- p5.js  
Frontend framework for user interface visualization and interactive breathing exercise animations.
- HTML5 / CSS3  
Provides the basic structure and styling for the web interface.
- Fetch API  
Handles frontend-to-backend communication for user login, biometric data submission, and history retrieval.
- Node.js  
Backend environment to process API requests and serve the application logic.
- Express.js  
Web framework that manages REST API endpoints for user authentication, biometric data submission, and data retrieval.
- JSON File Storage  
Temporary storage of user login data and biometric history in local JSON files for easy data persistence during prototype development.

## References
https://github.com/XinhhD/BreathDetector

https://github.com/julian202/HeartBeatDetector

https://github.com/arudnitsky/BreathingLight

https://github.com/looping/RCLighting

https://github.com/zackhsuan/ZKPulseView

https://github.com/qiubin2016/BreathingLight




