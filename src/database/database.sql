CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    text VARCHAR(255) NOT NULL,
    created_at TIMESTAMP NOT NULL
        DEFAULT (current_timestamp),
    updated_at TIMESTAMP NOT NULL
        DEFAULT (current_timestamp),
    deleted_at TIMESTAMP NULL
);