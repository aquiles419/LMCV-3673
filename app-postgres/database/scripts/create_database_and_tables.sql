DROP TABLE IF EXISTS public.users;
CREATE TABLE public.users (
  id varchar(30) NOT NULL,
  name varchar(30) NOT NULL,
  email varchar(30) NOT NULL,
  created_at timestamp NOT NULL DEFAULT NOW(),
  updated_at timestamp NOT NULL DEFAULT NOW(),
  PRIMARY KEY (id)
);