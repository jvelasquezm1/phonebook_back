# Phonebook Backend
***
Phonebook is a web tool made to provide a set of entries that contain a first name, last name, and a phone number.

This tool will allow you to:

  - Add new entries
  - Edit your entries
***
### Architecture
This application uses:

* [Node.js] 
* [Express]
* [MongoDB]

Deployed at: http://ec2-18-216-219-102.us-east-2.compute.amazonaws.com:8080/

***
### Installation

Requires [Node.js](https://nodejs.org/) v4+ to run.

Clone the repository, install the dependencies and start the server.

```sh
$ git clone https://github.com/jvelasquezm1/phonebook_back
$ cd phonebook_back
$ npm install
$ npm start
```

Then, configure your environment variables creating a file name .env on the root directory:
 - MONGO_URL: The url of the mongo instance that will store your data or you can use it locally 'mongodb://localhost:27017/phonebook'

The app will run in port 3000.

***
### Open End-points

The REST service provide the following end-points:
  - [GET] /readEntries: Search in mongoDB collection all the entries
  - [GET] /getEntryById/:entryId: Search in mongoDB collection the entry according to the ID
  - [POST] /addEntries: Creates a new entry
    > {"firstName": "name", "lastname": "lastname", "phone": "phone"}
  - [PUT] /editEntries: Search in mongoDB the entry id and update the fields
    > {"id": "id", "firstName": "name", "lastname": "lastname", "phone": "phone"}

### Docker

If you want to deploy phonebook back in a Docker Container run:

```sh
docker build -t phonebook_back .
docker run -p 3000:3000 phonebook_back
```

If you want to deploy the full architecture of the phonebook locate the root folder of the project phonebook_back and run:

```sh
cd phonebook_back
docker-compose up
```

This will create 2 containers:
- phonebook_back (exposed on port 3000 from localhost)
- phonebook_front (exposed on port 8080 from localhost)
