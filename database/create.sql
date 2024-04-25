create schema walletex;

create table walletex.transaction(
    id serial,
    name text not null,
    price float not null,
    data date not null
);