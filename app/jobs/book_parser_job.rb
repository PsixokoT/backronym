class BookParserJob < ApplicationJob
  queue_as :default
  include Sidekiq::Status::Worker

  def perform(file_name)
    raw_text = File.open(Rails.root.join('public', 'uploads', file_name), 'r:koi8-r').read
    book = Book.create(name: file_name)
    result = []
    arr = []
    sentences = Unicode::downcase(raw_text.encode('utf-8')).split(/\.|\?|!|;/i)
    sentences.each do |sentence|
      words = sentence.split(/[^[:word:]]+/).reject { |w| w =~ /\d/ || w.empty? }

      if words.length > 1
        first_letters = words.map{ |w| w[0] }.join
        s = words.join(' ')
        result.push s
        arr.push "('#{first_letters}', '#{s}', #{book.id}, #{Time.now.to_i}, #{Time.now.to_i})"
      end
    end

    store vino: 'veritas'

    puts "insert #{arr.length} records into db"
    sql = "INSERT INTO abbreviations (key, text, book_id, created_at, updated_at) VALUES #{arr.join(', ')}"#TODO: remove line from database to file
    ActiveRecord::Base.connection.execute sql
  end
end
