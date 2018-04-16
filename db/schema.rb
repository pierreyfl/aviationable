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

ActiveRecord::Schema.define(version: 20180416133746) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "companies", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "linkedin_url"
    t.string "twitter_url"
    t.string "youtube_url"
    t.string "facebook_url"
    t.string "instagram_url"
    t.integer "revenue"
    t.string "address"
    t.string "address_2"
    t.string "address_3"
    t.string "city"
    t.string "state"
    t.string "zip"
    t.string "country"
    t.decimal "total_funding"
    t.integer "age"
  end

  create_table "employees", force: :cascade do |t|
    t.string "salutation"
    t.string "first_name"
    t.string "last_name"
    t.bigint "company_id"
    t.index ["company_id"], name: "index_employees_on_company_id"
  end

  add_foreign_key "employees", "companies"
end
