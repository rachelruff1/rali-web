CREATE TABLE users (
    id serial primary key,
    firstName varchar(40),
    lastName varchar(40),
    email varchar(60),
    cell varchar(24),
    position varchar(40)
)

CREATE TABLE network (
    networkId serial primary key,
    creatorId integer foreign key (users - id),
    name varchar(40),
    password varchar(60)
)

CREATE TABLE event (
    eventId serial primary key,
    networkId integer foreign key (network - id),
    creatorId integer foreign key (users - id),
    title varchar(60), 
    date datetime,
    time datetime,
    location varchar(140),
    description varchar(280)
)



