Artist Data Table

column_name | data_type | details
 --- | --- | --- |
  name | t.string |  null: false
  email | t.string | null: false
  password_digest | t.string | null: false
  session_token |  t.string |  null: false
  bio |  t.text | null: false
  image_url |  t.string |


Songs Data Table

column_name | data_type | details
 --- | --- | --- |
  title |  t.string  | null: false
  artist_id | t.string | null: false, indexed: true, foreign_key (references artists)
  song_url |  t.string  | null: false
