# gimenez_gloriana_coding_assignment13

Create the UI Component library from assignment 12 will add a Huskey implementation that runs pre-commit checks to ensure that all code that is submitted passes a Prettier check, Eslint check, and all tests. Students can use the following article as a reference.

1. Clone the repository using this URL: https://github.com/ggimenez01/gimenez_gloriana_coding_assignment13.git
2. Open your terminal
3. Go to the project directory where the folder was download. Example: Type in cd C:/Downloads/gimenez_gloriana_coding_assignment13
4. Type in npm install
5. Type in npm run storybook
6. Please note we need to run the following to install the husky to new machine with the repository and also the git hooks.
7. Type npm install husky --save-dev
8. type npx husky install
9. type npm run prettier -- --write "src/**/*.{js,jsx,ts,tsx,json,css,scss,md}"
10. now try to modify any of the components with error
11. git add .
12. git commit -m "test"
13. it will produce error and wont commit.

