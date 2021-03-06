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

ActiveRecord::Schema.define(version: 20190909191403) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "blend_items", force: :cascade do |t|
    t.bigint "blend_id"
    t.bigint "oil_id"
    t.integer "position"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["blend_id"], name: "index_blend_items_on_blend_id"
    t.index ["oil_id"], name: "index_blend_items_on_oil_id"
  end

  create_table "blends", force: :cascade do |t|
    t.string "name"
    t.string "use_case"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "oils", force: :cascade do |t|
    t.string "name"
    t.integer "type"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.text "use_cases", default: [], array: true
  end

  add_foreign_key "blend_items", "blends"
  add_foreign_key "blend_items", "oils"
end
