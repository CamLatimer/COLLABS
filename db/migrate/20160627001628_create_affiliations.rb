class CreateAffiliations < ActiveRecord::Migration
  def change
    create_table :affiliations do |t|
      t.string :name
      t.references :artist, index: true, foreign_key: true
      t.references :affiliate, index: true

      t.timestamps null: false
    end

    add_foreign_key :affiliations, :artists, column: :affiliate_id
    add_index :affiliations, [:artist_id, :affiliate_id], unique: true
  end
end
