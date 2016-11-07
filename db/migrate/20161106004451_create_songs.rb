class CreateSongs < ActiveRecord::Migration
  def change
    create_table :songs do |t|
      t.string :title, null: false
      t.integer :artist_id, null: false
      t.string :song_url, null: false
    end

    add_index :songs, :artist_id
  end
end
