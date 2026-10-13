Simulation of 'tail -f' command
A log file named 'logger.txt' is saved in a particular location on a server. This log file is continuously appended by some other process(es) which is outside the scope of this assignment. You have to build a client-server interaction that does the following
1. The server would be listening on a particular port number (eg 8080)
2. Your client would be a web page that connects to this server
3. After a successful connection, the client would request for last 10 lines from the 'logger.txt' file from the server
4. The server would send the contents of the same file to the client
5. On receiving the contents of this log file, the client would display it on the browser  
6. The same web page should receive new content from the log file as and when they are appended to the log file within the server without refreshing the browser window  


#Welcome to tail-f-Simulation
Instruction to run project :-
1)npm install / yarn install    to install all dependencies for a project.
2)run with nodemon / node index.js  


#dependencies of project
 1)"express": "^4.17.1",
 2)"fs": "^0.0.1-security",
 3)"read-last-lines": "^1.7.1",
 4)"socket.io": "^2.2.0"
