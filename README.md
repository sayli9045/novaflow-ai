# NovaFlow AI – Smart Productivity Platform

## About the Project

NovaFlow AI is a frontend project that presents a fictional productivity platform designed to help users plan their work and manage everyday tasks more effectively.

The website introduces the product through a modern landing page featuring its key capabilities, workflow, pricing information, and interactive demonstrations. It is built with React.js and CSS, with an emphasis on usability, visual consistency, and responsive design.

## Key Features

- **Product Introduction:** A hero section that presents NovaFlow AI and provides navigation to important sections of the website.
- **Product Features:** An overview of four productivity concepts: smart AI planning, focus mode, progress insights, and smart scheduling.
- **How It Works:** A visual explanation of the proposed product workflow.
- **Interactive Task Planner:** A small frontend demonstration that displays sample task-planning results using predefined logic.
- **Pricing Plans:** Illustrative subscription options showing how the fictional product could be offered to users.
- **Testimonials:** Sample user feedback included to demonstrate a testimonial section in the interface.
- **Frequently Asked Questions:** An expandable FAQ section that allows visitors to view answers to common questions.
- **Responsive Navigation:** Navigation links and a mobile menu to help visitors move around the website.
- **Footer:** A final section containing product-related navigation and demonstration contact information.

## Technologies Used

| Technology | Purpose |
|---|---|
| React.js | Building the interface using reusable components |
| JavaScript (ES6+) | Implementing application logic and interactions |
| CSS3 | Styling the website and handling responsive layouts |
| Vite | Development server and production build |
| Lucide React | Providing icons for interface elements |

## Project Organization

The project is organized into separate React components to keep individual sections manageable and make the code easier to maintain.

```text
novaflow-ai/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar/
│   │   ├── Hero/
│   │   ├── Features/
│   │   ├── HowItWorks/
│   │   ├── AIDemo/
│   │   ├── Pricing/
│   │   ├── Testimonials/
│   │   ├── FAQ/
│   │   └── Footer/
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

*Note: The component folder names above illustrate the intended organization. Adjust them if your actual folder structure differs.*

## Running the Project Locally

To run NovaFlow AI on your computer, make sure Node.js, npm, and Git are installed.

**1. Download the repository**

```bash
git clone https://github.com/sayli9045/novaflow-ai.git
```

**2. Open the project directory**

```bash
cd novaflow-ai
```

**3. Install the required packages**

```bash
npm install
```

**4. Start the development server**

```bash
npm run dev
```

Vite will display a local development address in the terminal. Open that address in your browser to view the website.

## Available Commands

| Command | Function |
|---|---|
| `npm run dev` | Starts the local development server |
| `npm run lint` | Checks the source code using ESLint |
| `npm run build` | Generates the production-ready files |
| `npm run preview` | Runs a local preview of the production build |

## About the AI Demonstration

The task planner included on this website is a frontend prototype. It uses predefined sample logic to demonstrate the interaction and presentation of a possible AI-assisted planning feature.

It does not currently send requests to an AI service or generate results using a live AI model.

## Project Objective

This project was developed to apply frontend development concepts in a practical website. It demonstrates component-based development, React state management, interactive interface elements, responsive CSS, and the process of preparing a React application for production.

## Author

**Developed as a Front End Development Intern assignment using React.js.**