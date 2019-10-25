--CREATE DATABASE backendproject
--\c backendproject

--I added a user in PSQL called backend with no password so that we can
--have the same code in github and run on our local system with no problem



CREATE TABLE company (
   id SERIAL PRIMARY KEY,
   cid constCHAR(6) UNIQUE, --defined on new client acquisition
   name TEXT NOT NULL,
   location constCHAR(50)
);

CREATE TABLE time_punch (
    id SERIAL PRIMARY KEY,
    starttime timestamp without time zone,
    endtime timestamp without time zone,
    worktype text,
    hours float,
    week float    
);

CREATE TABLE employee (
    id SERIAL PRIMARY KEY REFERENCES company(id) on DELETE CASCADE,
    eid constCHAR(4) NOT NULL, --this is co specified
    co_cid constCHAR(6),
    t_id INT REFERENCES time_punch(id), 
    firstname TEXT NOT NULL,
    lastname TEXT NOT NULL,
    password constCHAR(20)
);

CREATE TABLE team(
    id SERIAL PRIMARY KEY,
    employee text,
    time_id INT REFERENCES time_punch(id),
    lastworkedon text,
    activity VARCHAR,
    totalhoursperweek VARCHAR

);




