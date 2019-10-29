CREATE TABLE company (
   cid VARCHAR(6) PRIMARY KEY,
   name TEXT NOT NULL
);
CREATE TABLE employee (
    id SERIAL PRIMARY KEY,
    eid VARCHAR(4) NOT NULL,
    co_cid VARCHAR(6) REFERENCES company(cid) on DELETE CASCADE,
    firstname TEXT NOT NULL,
    lastname TEXT NOT NULL
);
CREATE TABLE time_punch (
    id SERIAL PRIMARY KEY,
    eeid INT NOT NULL REFERENCES employee(id) on DELETE CASCADE,
    starttime timestamp without time zone NOT NULL,
    endtime timestamp without time zone NOT NULL,
    hours time,
    week INT
);

CREATE TABLE team(
    id SERIAL PRIMARY KEY,
    employee text,
    time_id INT REFERENCES time_punch(id),
    lastworkedon text,
    activity VARCHAR,
    totalhoursperweek VARCHAR

);


INSERT INTO company (cid, name) VALUES
('GA1001', 'Coder Paradise'),
('GA1002', 'The Big Greek'),
('GA1003', 'My Mexican Joint'),
('GA1004', 'Local Wander'),
('GA1005', 'Motorcycle Dreams');
INSERT INTO employee (eid, co_cid, firstname, lastname) VALUES
('1001', 'GA1001','Chris','Test1'),
('1002', 'GA1001','Chris','Test2'),
('1003', 'GA1001','Chris','Test3'),
('A101', 'GA1002','Chris','Test1'),
('A102', 'GA1002','Chris','Test2'),
('A103', 'GA1002','Chris','Test3'),
('A104', 'GA1002','Chris','Test4'),
('B201', 'GA1003','Chris','Test1'),
('B202', 'GA1003','Chris','Test2'),
('AABB', 'GA1004','Chris','Test1'),
('AABC', 'GA1004','Chris','Test2'),
('6489', 'GA1005','Chris','Test1'),
('6490', 'GA1005','Chris','Test2'),
('6491', 'GA1005','Chris','Test3');



INSERT INTO time_punch (eeid, starttime, endtime, hours, week) VALUES
(1, '2019-10-21 08:00:00', '2019-10-21 17:00:00', '09:00:00', 9),
(1, '2019-10-22 08:05:00', '2019-10-22 17:00:00', '08:55:00', 18),
(1, '2019-10-23 08:02:00', '2019-10-23 17:00:00', '08:58:00', 24),
(1, '2019-10-24 08:00:00', '2019-10-24 17:00:00', '09:00:00', 32),
(1, '2019-10-25 07:58:00', '2019-10-25 17:00:00', '09:02:00', 34),
(1, '2019-10-28 09:00:00', '2019-10-28 17:00:00', '08:00:00', 40);

