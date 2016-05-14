class CreateUsers < ActiveRecord::Migration[5.0]
  def change
    create_table :users do |t|
      t.string :name
      t.string :profile_image_url
      t.string :handle
      t.string :bio
      t.integer :instagram_id

      t.timestamps
    end
  end
end
