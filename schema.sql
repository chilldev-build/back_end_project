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
    starttime timestamp,
    endtime timestamp,
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

CREATE TABLE calendar(
    id SERIAL PRIMARY KEY,
    co_cid VARCHAR(6) REFERENCES company(cid) on DELETE CASCADE,
    period_begin date,
    period_end date
);

INSERT INTO calendar (co_cid, period_begin, period_end) VALUES
('GA1001', '1/4/2019', '1/17/2019'),
('GA1001', '1/18/2019', '1/31/2019'),
('GA1001', '2/1/2019', '2/14/2019'),
('GA1001', '2/15/2019', '2/28/2019'),
('GA1001', '3/1/2019', '3/14/2019'),
('GA1001', '3/15/2019', '3/28/2019'),
('GA1001', '3/29/2019', '4/11/2019'),
('GA1001', '4/12/2019', '4/25/2019'),
('GA1001', '4/26/2019', '5/9/2019'),
('GA1001', '5/10/2019', '5/23/2019'),
('GA1001', '5/24/2019', '6/6/2019'),
('GA1001', '6/7/2019', '6/20/2019'),
('GA1001', '6/21/2019', '7/4/2019'),
('GA1001', '7/5/2019', '7/18/2019'),
('GA1001', '7/19/2019', '8/1/2019'),
('GA1001', '8/2/2019', '8/15/2019'),
('GA1001', '8/16/2019', '8/29/2019'),
('GA1001', '8/30/2019', '9/12/2019'),
('GA1001', '9/13/2019', '9/26/2019'),
('GA1001', '9/27/2019', '10/10/2019'),
('GA1001', '10/11/2019', '10/24/2019'),
('GA1001', '10/25/2019', '11/7/2019'),
('GA1001', '11/8/2019', '11/21/2019'),
('GA1001', '11/22/2019', '12/5/2019'),
('GA1001', '12/6/2019', '12/19/2019'),
('GA1001', '12/20/2019', '1/2/2020'),
('GA1001', '1/3/2020', '1/16/2020'),
('GA1001', '1/17/2020', '1/30/2020'),
('GA1001', '1/31/2020', '2/13/2020'),
('GA1001', '2/14/2020', '2/27/2020'),
('GA1001', '2/28/2020', '3/12/2020'),
('GA1001', '3/13/2020', '3/26/2020'),
('GA1001', '3/27/2020', '4/9/2020'),
('GA1001', '4/10/2020', '4/23/2020'),
('GA1001', '4/24/2020', '5/7/2020'),
('GA1001', '5/8/2020', '5/21/2020'),
('GA1001', '5/22/2020', '6/4/2020');

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
(15, '2019-10-21 08:00:00', '2019-10-21 17:00:00', '09:00:00', 9),
(15, '2019-10-22 08:05:00', '2019-10-22 17:00:00', '08:55:00', 18),
(15, '2019-10-23 08:02:00', '2019-10-23 17:00:00', '08:58:00', 24),
(15, '2019-10-24 08:00:00', '2019-10-24 17:00:00', '09:00:00', 32),
(15, '2019-10-25 07:58:00', '2019-10-25 17:00:00', '09:02:00', 34),
(15, '2019-10-28 09:00:00', '2019-10-28 17:00:00', '08:00:00', 40);

