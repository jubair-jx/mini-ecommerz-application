# Mini E-Commerez Application

A fully responsive **Mini E-Commerez Application** featuring product listing, cart functionality, and dynamic skeleton loading states. Built with a modern tech stack for an optimized and scalable user experience.

## Features

### Product List

- Displays a list of products with their name, image, and price.
- Supports pagination with a "Load More Products" button.
- Shows a loading skeleton while data is being fetched.

### Cart Management

- Add products to the cart.
- Update product quantities in the cart.
- Remove products from the cart.
- Calculates and displays the total price of the cart.
- **Cart Persistence**: The cart data is persisted across page refreshes using `redux-persist`.

### Responsive Design

- Fully responsive UI for all devices using Tailwind CSS.
- User-friendly layout for both product listing and cart pages.

---

## Tech Stack

- **Frontend**:
  - React.js (TypeScript)
  - Tailwind CSS
  - Redux Toolkit
  - Framer Motion
  - RTK Query
  - Redux-Persis : For persisting cart data
  - React-Router-Dom
  - Sonner for toast notifications
- **Backend**:
  - API integration using RTK Query
  - API From JSON Placeholder MOCK API

---

## Installation & Usage

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

---

### Getting Started

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/product-showcase-app.git
   cd product-showcase-app
   npm install or yarn
   ```

## For The Checking Tips

`Step:1` For development purpose

```typescript
 npm run dev
 or
 yarn dev
```

### Frontend URL :

https://mini-commerz-by-jubair.netlify.app
