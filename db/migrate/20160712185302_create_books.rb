class CreateBooks < ActiveRecord::Migration[5.0]
  def change
    create_table :books do |t|
      t.string :file
      t.string :name

      t.timestamps
    end
  end
end
