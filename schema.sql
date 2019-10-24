
CREATE TABLE company (
   id SERIAL PRIMARY KEY,
   cid VARCHAR(6), 
   name TEXT NOT NULL,
   location VARCHAR(50)
);

CREATE TABLE employee (
    id SERIAL PRIMARY KEY,
    eid VARCHAR NOT NULL, 
    co_cid INTEGER REFERENCES company(id) on DELETE CASCADE, 
    t_id INTEGER REFERENCES time_punch(id), 
    firstname TEXT NOT NULL,
    lastname TEXT NOT NULL,
    password VARCHAR(20)
);


CREATE TABLE time_punch (
    id SERIAL PRIMARY KEY,
    starttime timestamp without time zone,
    endtime timestamp without time zone,
    worktype text,
    hours float,
    week float
     
);