class AddSoundsToArtists < ActiveRecord::Migration
  def change
    add_column :artists, :sounds, :string
  end
end
