Steps to run the tests:

1. Install Node - version 8.13.2
	Running 'npm version' from terminal/cmd prompt should give 8.13.2
2. Install cypress - version 10.3.0
	Running 'npx cypress version' on command prompt or an equivalent command on other platforms should give 
	 	Cypress package version: 10.3.0
		Cypress binary version: 10.3.0
		Electron version: 18.3.0
		Bundled Node version: 16.13.2
3. Install git to check out this package
	Running 'git version' should give output '2.37.1.windows.1'
4. Checkout the package with this command from your terminal/cmd prompt

5. From terminal 'cd' into the directory where the package is checked out. You should see a directoy 'cypress' in it.
Run 'npx install cypress' - this installs all the node-modules files needed for cypress to run

6. Run the test with the command 'npx cypress run' or run 'npx cypress open' to open Cypress dashboard and run tests from there
