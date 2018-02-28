CREATE TABLE users (
    id serial primary key,
    firstName varchar(40),
    lastName varchar(40),
    email varchar(60),
    cell varchar(24),
    position varchar(40),
    authid ingeger,
    picture varchar(150)
)

CREATE TABLE networks (
    networkId serial primary key,
    creatorId integer foreign key (users - id),
    name varchar(40),
    password varchar(60)
)

CREATE TABLE events (
    eventId serial primary key,
    networkId integer foreign key (networks - id),
    creatorId integer foreign key (users - id),
    title varchar(60), 
    date datetime,
    time datetime,
    location varchar(140),
    description varchar(280)
)

CREATE TABLE event_users (
    id serial primary key,
    networkid integer foreign key (networks -networkid),
    eventid integer foreign key (events - eventid)
)

CREATE TABLE  network_events (
    id serial primary key,
    networkid integer foreign key (networks -networkid),
    userid integer foreign key (users - id)
)

CREATE TABLE user_events (
    id serial primary key,
    eventid integer foreign key (events - eventid),
    userid integer foreign key (users - id)
)