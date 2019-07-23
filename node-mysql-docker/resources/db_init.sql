CREATE TABLE IF NOT EXISTS album (
    id INT AUTO_INCREMENT,
    name VARCHAR(40) NOT NULL,
    description TEXT,
    PRIMARY KEY (id)
) ENGINE=INNODB;

CREATE TABLE IF NOT EXISTS photo (
    id INT AUTO_INCREMENT,
    album_id int,
    name VARCHAR(40) NOT NULL,
    description TEXT,
    PRIMARY KEY (id),
    CONSTRAINT FK_Album FOREIGN KEY (album_id) REFERENCES album(id)
) ENGINE=INNODB;
