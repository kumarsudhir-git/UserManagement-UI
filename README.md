# Order Management Application

This is an Angular application for managing orders. It provides a user-friendly interface to view and manage orders, along with detailed views for each order.

## Project Structure

The project is organized as follows:

```
order-management-app
├── src
│   ├── app
│   │   ├── components
│   │   │   ├── left-panel
│   │   │   │   ├── left-panel.component.ts
│   │   │   │   ├── left-panel.component.html
│   │   │   │   └── left-panel.component.scss
│   │   │   ├── order-list
│   │   │   │   ├── order-list.component.ts
│   │   │   │   ├── order-list.component.html
│   │   │   │   └── order-list.component.scss
│   │   │   └── order-details
│   │   │       ├── order-details.component.ts
│   │   │       ├── order-details.component.html
│   │   │       └── order-details.component.scss
│   │   ├── app-routing.module.ts
│   │   ├── app.component.ts
│   │   ├── app.component.html
│   │   ├── app.component.scss
│   │   └── app.module.ts
│   └── assets
│       └── (static files)
├── angular.json
├── package.json
├── tsconfig.json
└── README.md
```

## Features

- **Left Panel**: A navigation panel to access different sections of the application.
- **Order List**: A component to display a list of orders.
- **Order Details**: A component to view detailed information about a specific order.

## Getting Started

To run the application locally, follow these steps:

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd order-management-app
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Start the development server:
   ```
   ng serve
   ```

5. Open your browser and navigate to `http://localhost:4200`.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.

## License

This project is licensed under the MIT License. See the LICENSE file for details.