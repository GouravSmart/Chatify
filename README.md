Real-time Chat ApplicationA simple and responsive real-time chat application built with Node.js, Express, and Socket.IO. This application allows users to join a chat, send messages, use emojis, attach files, and receive real-time updates with sound notifications.FeaturesReal-time Messaging: Instant message delivery to all connected users.User Join/Leave Notifications: System messages announce when users join or leave the chat.Responsive Design: Optimized for mobile and desktop screens.Scrollable Chat Area: Only the messages area scrolls, keeping the header and input fixed.Message Alignment: Your messages display on the right, others' messages on the left, and system messages are centered.Sound Notifications: Plays a "ting" sound on sending and receiving messages.Emoji Picker: A customizable emoji picker accessible via a button or Win + . (Windows/Meta key + Period) shortcut.File Attachment (Placeholder): A button to simulate file attachments (current implementation logs file names, actual upload logic would need to be added).Technologies UsedBackend: Node.js, Express.js, Socket.IOFrontend: HTML5, CSS3, JavaScriptReal-time Communication: Socket.IO (client-side and server-side)PrerequisitesBefore you begin, ensure you have the following installed on your system:Node.js (LTS version recommended)npm (Node Package Manager, comes with Node.js) or YarnLocal SetupFollow these steps to get the project up and running on your local machine:Create Project Directory:mkdir my-chat-app
cd my-chat-app
Initialize Node.js Project:npm init -y
Install Dependencies:npm install express socket.io
Create public Directory:mkdir public
Place Files:Place server.js in the root of your project directory (my-chat-app/).Place index.html, script.js, style.css, and ting.mp3 inside the public directory (my-chat-app/public/).Your project structure should look like this:my-chat-app/
├── node_modules/
├── public/
│   ├── index.html
│   ├── script.js
│   ├── style.css
│   └── ting.mp3
├── server.js
└── package.json
Start the Server:node server.js
You should see Server listening on http://localhost:3000 in your console.Access the Application:Open your web browser and navigate to http://localhost:3000.Deployment to VercelVercel is a cloud platform for static sites and serverless functions, making it an excellent choice for deploying Node.js applications.Install Vercel CLI:If you don't have the Vercel CLI installed, open your terminal or command prompt and run:npm install -g vercel
Login to Vercel:Run the login command and follow the prompts in your browser:vercel login
Deploy Your Project:Navigate to your project's root directory (my-chat-app/) in your terminal and run the vercel command:vercel
Vercel will detect your server.js and serve static files from the public directory automatically. It will set up your server.js as a serverless function.Follow the prompts:Set up and deploy “my-chat-app”? [Y/n] -> Press YWhich scope do you want to deploy to? -> Select your personal account or a team.Link to existing project? [y/N] -> If this is your first deployment, press N.What’s your project’s name? -> You can accept the default (my-chat-app) or provide a new one.In which directory is your code located? -> Accept the default (.)Want to override the build command? [y/N] -> Press N (Vercel automatically detects Node.js builds).Want to override the output directory? [y/N] -> Press N (Vercel handles static assets from public).Vercel will build and deploy your project, providing you with a live URL.Production Deployment:Once you're satisfied with your deployment, you can deploy to production using:vercel --prod
Your chat application will now be live and accessible via the Vercel-provided URL!Note on ting.mp3:Ensure your ting.mp3 file is correctly placed in the public directory. Vercel will serve this static file, making it accessible to your script.js.
