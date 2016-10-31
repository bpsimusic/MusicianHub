create_table "artists", force: :cascade do |t|
  t.string "name",        null: false
  t.string "email",        null: false
  t.string "password_digest", null: false
  t.string "session_token",   null: false
end

//How do I store images in the database?


create_table "users", force: :cascade do |t|
  t.string "name",        null: false
  t.string "email",        null: false
  t.string "password_digest", null: false
  t.string "session_token",   null: false
end


create_table "songs", force: :cascade do |t|
  t.string "title",        null: false
  t.string "artist_id",    null: false, indexed: true
end

//How do I store the song itself in the database?
