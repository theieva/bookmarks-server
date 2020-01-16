Ieva Urbaite

Error Solution Table of Contents:

1 - Authorization Issue
2 - Port 8000 Already Running (local dev)
3 - Seeding Database 


## 1 - Authorization Issue
If initial tests don't work, don't forget to add authorization token:

      .set('Authorization', `Bearer ${process.env.API_TOKEN}`)


## 2 - If port 8000 is already running:

https://medium.com/@valgaze/utility-post-whats-running-on-port-8000-and-how-to-stop-it-2ed771fbb422

## 3 - Seeding Database

psql -U dunder_mifflin -d blogful -f ./seeds/seed.insert_database_name_here.sql

