# forms

installation instructions:

1. Run 'git clone https://github.com/odedmo/forms.git'.
2. Go to 'forms' directory.
3. From 'forms' directory go to 'server' directory and run 'npm install'.
4. Run 'npm start' (port 3000).
5. From 'forms' directory go to 'client' directory and run 'npm install'.
6. Run 'npm run serve' (port 8080).
7. Open a new browser tab and go to http://localhost:8080/.
8. In 'client' directory, run 'npm run test:unit' to run unit tests (very basic).

notes: 

Components folder contains 'original_plan' folder, which includes the components I intended to use in the first place, for more reusability.
I encountered some difficulties using them with the state management, so I went for plan B, in order to send a working version.
    
Click on top button saves the forms data to DB.
