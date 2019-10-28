INSERT INTO company (cid, name) VALUES
('GA1001', 'Coder Paradise'),
('GA1002', 'The Big Greek'),
('GA1003', 'My Mexican Joint'),
('GA1004', 'Local Wander'),
('GA1005', 'Motorcycle Dreams');


INSERT INTO employee (eid, co_cid, firstname, lastname) VALUES
('1001', 'GA1001','Chris','Hill'),
('1002', 'GA1001','Mulk','Abdul'),
('1003', 'GA1001','Sirisha','Reddy'),
('A101', 'GA1002','Micheal','Jordan'),
('A102', 'GA1002','Hussein','Omar'),
('A103', 'GA1002','Puja','Kotecha'),
('A104', 'GA1002','Peter','Parker'),
('B201', 'GA1003','Kimmy','Schmidt'),
('B202', 'GA1003','Jimmy','Kimmell'),
('AABB', 'GA1004','Dwight','Schrute'),
('AABC', 'GA1004','Amy','Poller'),
('6489', 'GA1005','Beyonce','Knowles'),
('6490', 'GA1005','Jarad','Weiss'),
('6491', 'GA1005','Crap','Bag');

INSERT INTO time_punch (eeid, starttime, endtime, hours) VALUES
(1, '2019-10-21 08:00:00', '2019-10-21 17:00:00', '09:00:00'),
(1, '2019-10-22 08:05:00', '2019-10-22 17:00:00', '08:55:00'),
(1, '2019-10-23 08:02:00', '2019-10-23 17:00:00', '08:58:00'),
(1, '2019-10-24 08:00:00', '2019-10-24 17:00:00', '09:00:00'),
(1, '2019-10-25 07:58:00', '2019-10-25 17:00:00', '09:02:00'),
(1, '2019-10-28 09:00:00', '2019-10-28 17:00:00', '08:00:00'); 