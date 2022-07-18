Steps to run the tests:

1. Install Node - version 8.13.2
    Running 'npm version' from terminal/cmd prompt should give 8.13.2
2. Install cypress - version 10.3.0
    Running 'npx cypress version' on command prompt or an equivalent command on other platforms should give 
         Cypress package version: 10.3.0
        Cypress binary version: 10.3.0
        Electron version: 18.3.0
        Bundled Node version: 16.13.2
3. Install git to checkout this package
    Running 'git version' should give output '2.37.1.windows.1'
4. (Optional) Install Github CLI 
5. Checkout the package with this command from your terminal/cmd prompt
    - If you have github CLI installed - 'gh repo clone https://github.com/ko-git/demoCypress'
    - The package would be checked out to a 'demoCypress' directory from your current working directory. 
    - <Important> 'cd' into the 'demoCypress' directory. Following commands should be executed within the 'demoCypress' dir 
6. Run 'npm install cypress' - Yes! This is still needed even if you have already completed the cypress install step 
- this installs all the node-modules files needed for cypress to run
7. Run the tests with the command 'npx cypress run' or run 'npx cypress open' to open Cypress dashboard and run tests 
 from the dashboard. There'll be only one tests.cy.js spec file which holds the tests
   1. To run it with 'npx cypress run' - no dependencies are needed and the tests run in Headless mode in Electron Browser
   2. To run it with 'npx cypress open' i.e from the cypress dashboard and a browser of your choice (Chrome or Edge) - 
      Please install the latest stable version of the browser. 
      
   Tests have been verified to run successfully on Chrome, Edge & Electron
