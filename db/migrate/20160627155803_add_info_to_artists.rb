class AddInfoToArtists < ActiveRecord::Migration
  def change
    add_column :artists, :city, :string
    add_column :artists, :state, :string
    add_column :artists, :country, :string
    add_column :artists, :details, :text
  end
end
