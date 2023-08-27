# Micro-frontend Example

This repository contains a simple micro frontend example implemented using the `vite-plugin-federation` package. Micro frontends are an architectural approach that allows you to build a web application by composing smaller, loosely coupled frontend modules. The `vite-plugin-federation` enables you to create such modules that can be independently developed, deployed, and maintained.


## Getting Started

These instructions will help you run the project on your local machine. 

### Prerequisites

You need the following software installed to run the project:

- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/) package manager

### Installation

Step-by-step instructions:


1. Clone this repository to your local machine.
   ```sh
   git clone https://github.com/sedatkimki/micro-frontend-example.git
   ```
2. This project contains 4 react vite app so you have navigate each of them individually
   ```sh
   cd product
   cd search
   cd checkout
   cd host
   ```
3. Then, Install dependencies for each project.
   ```sh
   npm install
   # or
   yarn install
   ```
4. Build and serve projects
   ```sh
   yarn build && yarn serve
   ```
5. Open your browser and go to host app http://localhost:5001 to see the project.
