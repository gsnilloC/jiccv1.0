class CreateEvents < ActiveRecord::Migration[8.0]
  def change
    create_table :events do |t|
      t.string :group
      t.string :name
      t.text :description
      t.string :time
      t.date :date

      t.timestamps
    end
  end
end
