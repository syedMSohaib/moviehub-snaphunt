# Snaphunt Technical assesment - MovieHub 

- node.js server with rest API, using express
- usig mysql database with knexjs for schema and migration 
- react frontend, with redux
- both in typescript
- the database is populated using tmdbmovies.org

## Prerequisite
- run command
```
  git clone https://github.com/syedMSohaib/moviehub-snaphunt.git
```

- Install dependencies
```
  npm install --verbose
```

- Update DB config in server/knexfile.js && server/src/knexfile.ts

- Run migration
```
  npm run migrate
```

- Run seeder
```
  npm run seed
```

## Dev start up
- Start server
```
PORT=8002 npm run server:dev
```
- Start client
```
npm run client:dev
```

### the code is using proxy so if you want to change node server port do change it in package.json proxy:http://localhost.com:8002


### view the demo video at this url https://streamable.com/daguwa


![screencapture-localhost-3000-movies-202-2022-08-30-16_40_08-min](https://user-images.githubusercontent.com/33151569/187427967-6a0fba71-355f-4e4e-8059-d87d5c46b502.png)

![screencapture-localhost-3000-movies-2022-08-30-16_39_53-min](https://user-images.githubusercontent.com/33151569/187427983-166e9328-01ff-4a82-844c-66874bd104b9.png)

![screencapture-localhost-3000-2022-08-30-16_39_30-min](https://user-images.githubusercontent.com/33151569/187428008-15a92f3f-85e2-4e1f-9b05-188c024fc5fd.png)
