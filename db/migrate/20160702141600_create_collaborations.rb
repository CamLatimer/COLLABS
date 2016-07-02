class CreateCollaborations < ActiveRecord::Migration
  def change
    create_table :collaborations do |t|
      t.string :song
      t.references :artist, index: true, foreign_key: true
      t.references :collaborator, index: true

      t.timestamps null: false
    end

    add_foreign_key :collaborations, :artists, column: :collaborator_id
    add_index :collaborations, [:artist_id, :collaborator_id], unique: true
  end
end
