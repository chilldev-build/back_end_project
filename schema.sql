CREATE DATABASE backendproject
\c backendproject


CREATE TABLE company (
   id SERIAL PRIMARY KEY,
   cid VARCHAR(6) PRIMARY KEY, --defined on new client acquisition
   name TEXT NOT NULL,
   location VARCHAR(50),
);



CREATE TABLE employee (
    id SERIAL PRIMARY KEY,
    eid VARCHAR(4) NOT NULL, --this is co specified
    co_cid VARCHAR(6) REFERENCES company(id) on DELETE CASCADE, --
    t_id INT REFERENCES time_punch (id), 
    firstname TEXT NOT NULL,
    lastname TEXT NOT NULL,
    password VARCHAR(20)
);


CREATE TABLE time_punch (
    id SERIAL PRIMARY KEY REFERENCES employee(eid),
    starttime timestamp without time zone,
    endtime timestamp without time zone,
    worktype text,
    hours float,
    week float
     
);