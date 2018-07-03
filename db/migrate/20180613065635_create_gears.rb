class CreateGears < ActiveRecord::Migration[5.2]
  def change
    create_table :gears do |t|
      t.string :name
      t.text :description
      t.string :image_url
      t.decimal :price
      t.integer :inventory
      t.boolean :hot
      t.references :brand, foreign_key: true
      t.references :type, foreign_key: true
      t.timestamps
    end
  end
end
