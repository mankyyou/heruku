json.extract! gear, :id, :name, :description, :image_url, :price, :inventory, :created_at, :updated_at
json.url gear_url(gear, format: :json)
