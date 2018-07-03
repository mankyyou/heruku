class CreateOrders < ActiveRecord::Migration[5.2]
  def change
    create_table :orders do |t|
      t.string :name
      t.text :address
      t.integer :phone
      t.string :email
      t.string :pay_type
      t.integer :total
      t.boolean :status
      t.timestamps
    end
  end
end
