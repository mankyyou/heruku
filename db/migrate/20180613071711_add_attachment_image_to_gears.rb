class AddAttachmentImageToGears < ActiveRecord::Migration[5.2]
  def self.up
    change_table :gears do |t|
      t.attachment :image
    end
  end

  def self.down
    remove_attachment :gears, :image
  end
end
