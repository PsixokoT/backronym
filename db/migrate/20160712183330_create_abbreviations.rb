class CreateAbbreviations < ActiveRecord::Migration[5.0]
  def change
    create_table :abbreviations do |t|
      t.string :key
      t.string :text
      t.integer :address
      t.belongs_to :book, index: true

      t.timestamps
    end
  end
end
