# Big-Brother-Team-4

Project for HY-469 by Team 4

The project is in the 'fullstack-template-verbose_2' folder

To be able to start the backend and frontend, you need to first install the
dependencies of each subproject
- open a terminal window inside the backend folder and run npm install
- open a terminal window inside the frontend folder and run npm install

Running the project:
- run mongod.exe 
- run redis-server.exe
- open a terminal inside the folder where minio.exe is and run the
  command: Minio.exe server C:\minio
- open a terminal inside the backend folder and run the command: gulp
  serve
- open a terminal inside the frontend folder and run the command: ng
  serve

The initial routes are:
- Tv:         http://localhost:4200/TVHome
- Smartphone: http://localhost:4200/homepageSmartphone
- Smartable:  http://localhost:4200/smartableHome
- Wall:       http://localhost:4200/wallHome