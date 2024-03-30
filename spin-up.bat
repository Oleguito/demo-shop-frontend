rem start json-server --watch db.json --routes routes.json -p 8080
call "C:\Program Files\Docker\Docker\Docker Desktop.exe"
cd "C:\Users\1\IdeaProjects\shop"
call docker-compose up -d
start java -jar "C:\Users\1\IdeaProjects\shop\target\shop-0.0.1-SNAPSHOT.jar"
cd "C:\Users\1\Desktop\homework\demo-shop-frontend"
start npm run dev
"C:\Program Files\Google\Chrome\Application\chrome.exe" "http://localhost:3000/"
"C:\Program Files\Google\Chrome\Application\chrome.exe" "http://localhost:8080/"
