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