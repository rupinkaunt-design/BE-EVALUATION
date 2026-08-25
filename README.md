# BE-EVALUATION

# ⚡ ChargeWise

**ChargeWise** is a frontend-based intelligent EV charging and
trip-planning web application designed to reduce range anxiety for
electric vehicle drivers. It combines vehicle profiles, route
simulation, battery estimation, charging-stop recommendations,
charging-station information, EV-vs-fuel savings calculations, charging
history, and a dashboard into a single interface.

> **Project type:** Frontend Web Application\
> **Current storage:** Browser `localStorage`\
> **Backend:** None\
> **External APIs:** None in the current version

------------------------------------------------------------------------

## 📌 Overview

Planning a long-distance trip in an electric vehicle can be difficult
because drivers have to consider battery range, route distance, charging
compatibility, charging stops, and energy cost.

ChargeWise addresses this problem by allowing users to select an EV,
choose a route, enter their starting battery level, and simulate the
trip before travelling. The application estimates arrival battery
percentage, energy consumption, cost, and whether a charging stop is
required.

The project currently uses predefined vehicle specifications, cities,
routes, and charging-station data, making it a fully client-side
application that can run directly in a browser.

------------------------------------------------------------------------

## 🎯 Objectives

-   Reduce EV range anxiety by providing a simple trip-planning
    interface.
-   Estimate battery consumption for predefined routes.
-   Recommend charging stops when the simulated battery level falls
    below the safety reserve.
-   Store vehicle, trip, user, and charging-history information locally.
-   Provide an EV-versus-petrol/diesel cost comparison.
-   Present charging-station information in an easy-to-understand
    dashboard.
-   Create a modern, responsive, EV-focused user experience.

------------------------------------------------------------------------

## ✨ Features

### 1. 🔐 Sign In / Sign Up / Guest Mode

-   Sign-in and account-creation interface.
-   Basic client-side form validation.
-   Guest mode for accessing the application without creating an
    account.
-   User information is stored in browser `localStorage`.
-   Sign-out and sign-in-again flow.

**Note:** Authentication is currently a frontend simulation. It is not
connected to a backend authentication service.

------------------------------------------------------------------------

### 2. 🚗 Vehicle Garage

Users can maintain a personal EV garage.

Each vehicle profile can contain:

-   Vehicle nickname
-   EV model
-   Battery capacity
-   Estimated range
-   Efficiency
-   Connector type
-   Preferred charging network

The current vehicle catalogue includes models such as:

-   Tata Nexon EV Max
-   Tata Tiago EV
-   MG ZS EV
-   Hyundai Ioniq 5
-   Mahindra XUV400 EV
-   BYD Atto 3
-   BMW i5 eDrive40

Vehicle specifications and connector information are defined in the
JavaScript data model.

------------------------------------------------------------------------

### 3. 🗺️ EV Route Planner

The route planner allows the user to select:

-   Vehicle
-   Starting battery percentage
-   Origin
-   Destination

The application then calculates a trip simulation and displays:

-   Route distance
-   Estimated energy consumption
-   Estimated cost
-   Arrival battery percentage
-   Whether a charging stop is required
-   Recommended charging stop when applicable

The current version contains predefined routes such as:

-   Delhi → Jaipur
-   Delhi → Agra
-   Delhi → Chandigarh
-   Jaipur → Agra
-   Mumbai → Pune
-   Mumbai → Nashik
-   Mumbai → Goa
-   Pune → Goa
-   Bengaluru → Mysuru
-   Bengaluru → Chennai
-   Bengaluru → Goa
-   Chennai → Puducherry
-   Hyderabad → Vijayawada
-   Hyderabad → Bengaluru
-   Vijayawada → Chennai

------------------------------------------------------------------------

### 4. 🔋 Battery Simulation

ChargeWise uses the selected vehicle's efficiency and the route distance
to estimate energy consumption.

A simplified calculation used by the application is:

``` text
Estimated Energy (kWh) = Distance (km) / Vehicle Efficiency (km/kWh)
```

The application also uses a **15% safety reserve** when deciding whether
a charging stop is required.

The home simulator provides a quick preview of:

-   Arrival battery
-   Distance
-   Estimated energy
-   Estimated charging cost
-   Route status

------------------------------------------------------------------------

### 5. ⚡ Charging Station Grid

The application displays charging-station cards containing information
such as:

-   Station name
-   Charging network
-   Connector type
-   Charging power
-   Availability status

The current frontend uses predefined/generated station data from
networks including:

-   Tata Power EZ Charge
-   Statiq
-   Zeon Charging
-   Ather Grid
-   ChargeZone

Station filters include:

-   All stations
-   Available stations
-   Fast chargers (≥ 50 kW)

> The current implementation does **not** fetch live station data from
> an external API. The "live telemetry" interface is currently
> represented using application data.

------------------------------------------------------------------------

### 6. 💰 EV Savings Calculator

The home page includes an interactive EV-vs-fuel calculator.

Users can select:

-   Petrol
-   Diesel

and adjust their monthly driving distance.

The calculator estimates:

-   Monthly savings
-   Annual savings
-   EV cost per kilometre
-   Comparison with the selected fuel type
-   Estimated annual CO₂ offset

The current calculation model uses predefined assumptions for
electricity, fuel prices, vehicle efficiency, and fuel emissions.

------------------------------------------------------------------------

### 7. 📊 Dashboard

The dashboard brings together the user's stored information and
calculated trip/charging metrics in a single interface.

It is designed to give users a quick overview of their EV usage and
planning activity.

------------------------------------------------------------------------

### 8. 🧾 Charging History

ChargeWise includes a charging-history section containing charging
records with information such as:

-   Date
-   Charging station
-   Vehicle
-   Energy consumed
-   Cost

Users can retain history data using browser storage.

------------------------------------------------------------------------

### 9. 💾 Local Storage

The project is designed to work without a backend by using browser
`localStorage`.

The application stores data using keys such as:

``` text
chargewise_garage
chargewise_trips
chargewise_user
chargewise_history
```

This allows data such as vehicles and simulated trips to remain
available after refreshing the page in the same browser.

------------------------------------------------------------------------

### 10. 🎨 Modern Responsive UI

The interface uses a futuristic EV/technology visual style with:

-   Dark theme
-   Green electric-voltage accent
-   Responsive navigation
-   Mobile hamburger menu
-   Animated page loader
-   Cursor glow
-   Animated counters
-   Scroll reveal animations
-   Button ripple effects
-   Hover effects
-   Responsive cards and layouts
-   SVG-based visual elements

The styling is built entirely with CSS and does not require a UI
framework.

------------------------------------------------------------------------

## 🛠️ Technologies Used

### Frontend

-   **HTML5** --- page structure and semantic elements
-   **CSS3** --- layout, responsive design, animations, gradients,
    visual effects
-   **JavaScript (ES6+)** --- application logic and interactivity
-   **Browser LocalStorage API** --- client-side persistence
-   **SVG** --- icons and interface graphics
-   **Google Fonts** --- Space Grotesk, Inter, and JetBrains Mono

### Architecture

``` text
ChargeWise
│
├── index.html
│   └── Application structure and UI
│
├── script.js
│   └── Data, calculations, navigation,
│       LocalStorage, simulations and interactions
│
├── style.css
│   └── Layout, responsive design,
│       animations and visual styling
│
└── Browser LocalStorage
    ├── User
    ├── Garage
    ├── Trips
    └── Charging History
```

------------------------------------------------------------------------

## 📂 Project Structure

``` text
ChargeWise/
│
├── index.html
├── script.js
├── style.css
└── README.md
```

If your local filenames are currently `index(3).html`, `script(3).js`,
and `style(2).css`, rename them to the standard names above before
deploying, or update the stylesheet/script references accordingly.

------------------------------------------------------------------------

## 🚀 How to Run

### Option 1 --- Open directly

1.  Download/clone the project.
2.  Keep `index.html`, `script.js`, and `style.css` in the same folder.
3.  Open `index.html` in a modern web browser.
4.  Use **Continue as guest** or create a local account.

### Option 2 --- Run with VS Code Live Server

1.  Open the project folder in VS Code.
2.  Install the **Live Server** extension.
3.  Right-click `index.html`.
4.  Select **Open with Live Server**.
5.  The application will open in your browser.

No Node.js installation, database, or backend server is required for the
current version.

------------------------------------------------------------------------

## 🧮 Core Calculation Logic

### Route energy

``` text
Energy Required = Route Distance / Vehicle Efficiency
```

### Approximate charging cost

The route simulator estimates charging cost from calculated energy
consumption using the project's predefined electricity-cost assumption.

### Safety reserve

``` text
Safety Reserve = 15%
```

If the predicted battery level falls below the reserve, the application
can flag the route as requiring a charging stop.

### EV savings

The savings calculator compares the estimated EV running cost with
petrol or diesel running costs based on the predefined assumptions in
the JavaScript implementation.

------------------------------------------------------------------------

## 🔄 Application Flow

``` text
Start
  │
  ▼
Sign In / Sign Up / Guest
  │
  ▼
Home Dashboard
  │
  ├───────────────┐
  ▼               ▼
Add Vehicle     Plan Route
  │               │
  ▼               ▼
Vehicle Data    Select Route
  │               │
  └───────┬───────┘
          ▼
    Battery Simulation
          │
          ▼
 Charging Stop Required?
       /         \
     Yes          No
      │            │
      ▼            ▼
Recommend       Continue
Charging Stop    Route
      │            │
      └──────┬─────┘
             ▼
       Save Trip Data
             │
             ▼
      Dashboard / History
```

------------------------------------------------------------------------

## 📱 Responsive Design

The interface is designed for both desktop and smaller screens.

The navigation changes into a hamburger menu on mobile-sized layouts,
while cards, forms, dashboards, and widgets adapt to available screen
width.

------------------------------------------------------------------------

## ⚠️ Current Limitations

The current version is a frontend prototype and has several limitations:

-   No backend server.
-   No real database.
-   Authentication is simulated on the client side.
-   User passwords are not securely stored or authenticated.
-   Charging-station information is not retrieved from a live API.
-   Routes are limited to the predefined route catalogue.
-   No live GPS/location tracking.
-   No real-time traffic data.
-   No actual map-routing service integration.
-   Battery calculations are based on simplified assumptions rather than
    live vehicle telemetry.
-   Charging prices and fuel assumptions are predefined.

Therefore, the project should currently be treated as a **functional
frontend prototype**, not a production-grade EV navigation platform.

------------------------------------------------------------------------

## 🔮 Future Scope

The project can be extended significantly in future versions.

### Backend & Database

-   Add a backend using Node.js/Express, Django, or another server
    framework.
-   Replace `localStorage` with a database.
-   Implement secure authentication using hashed passwords and
    sessions/JWT.
-   Synchronize user data across devices.

### Real-Time Charging Network Integration

Integrate charging APIs to obtain:

-   Real-time station availability
-   Charger occupancy
-   Charging prices
-   Connector compatibility
-   Station operating status
-   Location coordinates

### Maps & GPS

Integrate a mapping service to provide:

-   Real road routes
-   Turn-by-turn navigation
-   Current location
-   Distance based on actual road networks
-   Traffic-aware route planning
-   Dynamic charging-stop selection

### Advanced Battery Prediction

Improve the range model using:

-   Weather
-   Traffic
-   Elevation
-   Driving speed
-   Vehicle load
-   Battery health
-   Regenerative braking
-   Driving history

### Intelligent Charging Optimization

A future version could automatically choose charging stops based on:

``` text
Distance
+
Battery level
+
Charger availability
+
Charging speed
+
Charging price
+
Expected waiting time
```

### Analytics

Add advanced analytics for:

-   Energy consumption trends
-   Cost per kilometre
-   Charging frequency
-   Monthly spending
-   CO₂ savings
-   Route efficiency
-   Vehicle performance

### Mobile Application

The web application could eventually be converted into a mobile
application with:

-   GPS access
-   Push notifications
-   Trip alerts
-   Low-battery warnings
-   Charging-stop notifications

------------------------------------------------------------------------

## 🎓 Academic / Project Scope

ChargeWise demonstrates practical implementation of:

-   HTML, CSS and JavaScript
-   DOM manipulation
-   Event handling
-   Form validation
-   Client-side state management
-   LocalStorage
-   Array/object-based data modelling
-   Conditional logic
-   Mathematical calculations
-   Responsive web design
-   UI/UX design
-   Browser-based application architecture

It can therefore be used as a foundation for progressively adding
backend services, APIs, databases, authentication, maps, and real-time
EV infrastructure data.

------------------------------------------------------------------------

## 👨‍💻 Project Status

**Current status:** Functional frontend prototype

The current implementation provides the core user interface, vehicle
management, route simulation, battery calculations, charging-station
display, savings calculator, charging history, dashboard functionality,
and local persistence.

------------------------------------------------------------------------

## 📄 License

This project is currently intended for educational and
project-development purposes.

If you plan to publish or commercialize it, add an appropriate
open-source or proprietary license and update this section accordingly.
