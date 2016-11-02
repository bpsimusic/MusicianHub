class CreateArtists < ActiveRecord::Migration
  def change
    create_table :artists do |t|
      t.string :name
      t.string :username, null: false
      t.string :password_digest, null: false
      t.string :session_token, null: false
      t.string :bio
      t.string :image_url
      t.timestamps null: false
    end
  end
end
