# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160702141600) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "artists", force: :cascade do |t|
    t.string   "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string   "city"
    t.string   "state"
    t.string   "country"
    t.text     "details"
    t.string   "sounds"
  end

  create_table "collaborations", force: :cascade do |t|
    t.string   "song"
    t.integer  "artist_id"
    t.integer  "collaborator_id"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

  add_index "collaborations", ["artist_id", "collaborator_id"], name: "index_collaborations_on_artist_id_and_collaborator_id", unique: true, using: :btree
  add_index "collaborations", ["artist_id"], name: "index_collaborations_on_artist_id", using: :btree
  add_index "collaborations", ["collaborator_id"], name: "index_collaborations_on_collaborator_id", using: :btree

  add_foreign_key "collaborations", "artists"
  add_foreign_key "collaborations", "artists", column: "collaborator_id"
end
