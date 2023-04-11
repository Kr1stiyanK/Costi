-- Table creation
create table users (
                       id integer not null auto_increment,
                       email varchar(255) not null,
                       password varchar(255) not null,
                       username varchar(255) not null,
                       primary key (id)
)