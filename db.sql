CREATE TABLE bands (
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name VARCHAR(128)
);

INSERT INTO bands (name) VALUES 
('Agalloch'), ('Summoning'), ('Mgla'), ('Uada');