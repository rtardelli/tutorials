create table `user`
(
  `id` int primary key,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) UNIQUE,
  `created_at` timestamp NOT NULL,
  `address` varchar(255)
);

create table `service`
(
  `id` int primary key,
  `id_user` int,
  `price` double,
  `description` text,
  `created_at` timestamp NOT NULL,
  foreign key (`id_user`) references `user` (`id`)
);

create table `component`
(
  `id` int primary key,
  `name` varchar(255),
  `brand` varchar(255),
  `description` varchar(255),
  `link` varchar(255),
  `img` varchar(255)
);

create table `component_synonyms`
(
  `id` int,
  `name` varchar(255),
  primary key (`id`, `name`),
  foreign key (`id`) references `component` (`id`)
);

create table `staff`
(
  `id` int primary key,
  `name` varchar(255) NOT NULL
);

create table `service_item`
(
  `id_service` int,
  `id_component` int,
  `add_date` timestamp NOT NULL,
  `finish_date` timestamp NULL DEFAULT NULL,
  `price` decimal(7,2),
  `id_staff` int,
  primary key (`id_service`, `id_component`),
  foreign key (`id_service`) references `service` (`id`),
  foreign key (`id_component`) references `component` (`id`),
  foreign key (`id_staff`) references `staff` (`id`)
);

create table `observation`
(
  `id` int primary key,
  `id_service` int,
  `text` text,
  `date` timestamp,
  foreign key (`id_service`) references `service` (`id`)
);