BEGIN;
INSERT INTO bookmarks_table (title, url, description, rating)
VALUES
    ('Carmine''s', 'https://www.carminesnyc.com/', 'Big Italian plates', 4),
    ('Two Boots Pizza', 'https://twoboots.com/', 'Good vegan slice', 4.5),
    ('Van Cortlandt Park', 'https://www.nycgovparks.org/parks/VanCortlandtPark', 'Park with swans', 4.5),
    ('Van Leeuwen', 'https://vanleeuwenicecream.com/', 'Good ice cream', 4),
    ('Takumen', 'http://www.takumenlic.com/', 'Tasty ramen', 5),
    ('American Museum of Natural History', 'https://www.amnh.org/', 'Place with dinosaurs', 3),
    ('The Lion King', 'https://www.lionking.com/', 'Musical about lions', 5),
    ('DuckDuck', 'http://duckduckbar.com/home.php', 'Bar with ducks', 4),
    ('Caravan of Dreams', 'https://caravanofdreams.net/', 'Nice vegan restaurant', 5),
    ('Saigon Shack', 'http://www.saigonshack.com/', 'Best bahn mi sandwiches', 5)
    ;
COMMIT;


