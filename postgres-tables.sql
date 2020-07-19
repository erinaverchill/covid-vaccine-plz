drop table citywide_table;
create table citywide_table (
	"county" varchar,
	"city" varchar,
	"totalcountconfirmed" int,
	"totalcountdeaths" int
);

select * from citywide_table;

drop table statewide_table;
create table statewide_table (
	"county" varchar,
	"totalcountconfirmed" int,
	"totalcountdeaths" int,
	"newcountconfirmed" int,
	"newcountdeaths" int,
	"date" date
);

select * from statewide_table;
