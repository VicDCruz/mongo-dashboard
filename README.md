# mongo-dashboard
Create a Mongo Dashboard with CubeJs

# Notes
- To change port at `dashboard-app`, use the `.env.sample` file & rename it to `.env`.
- For `real-time-dashboard` use pm2

# How to
1. `./run-container.sh`
2. `docker exec -it dashboard bash`
3. Init a new project `cubejs create <project-name> -d mongobi`
4. `cd <project-name>`
5. `npm run dev`

# References
- [DZone](https://dzone.com/articles/real-time-dashboard-with-mongodb)
- [cube.js](https://github.com/cube-js/cube.js)
- [cube.js blog](https://cube.dev/blog/building-mongodb-dashboard-using-node.js)
- [Medium de MongoSQLD](https://medium.com/@jchamale.usac/building-a-docker-image-for-mongo-bi-connector-c9872b1821ba)
- [Real Time - DEV](https://dev.to/keydunov/real-time-dashboard-with-mongodb-5gnd)
- [Development env backend](https://cube.dev/docs/deployment#docker-compose)
- [Development env frontend](https://cube.dev/docs/dashboard-app)
- [React dev env frontend](https://create-react-app.dev/docs/deployment/#static-server)
- [mongosqld as a service](https://docs.mongodb.com/bi-connector/master/launch/#msqld-as-a-system-service)
