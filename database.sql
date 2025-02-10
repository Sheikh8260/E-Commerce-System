CREATE TABLE store_product (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    category VARCHAR(255),
    price DECIMAL(10, 2) NOT NULL
);

CREATE TABLE store_order (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL,
    products JSON NOT NULL,
    status VARCHAR(50) DEFAULT 'pending'
);