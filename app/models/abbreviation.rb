class Abbreviation < ApplicationRecord
  belongs_to :book

  FindResult = Struct.new(:key, :records)

  def self.find_sentence(text)
    result = []
    len = text.length
    count = 0

    while len > 0 do
      f = find_max(text)
      result.push f
      f_len = f.key.length

      len -= f_len
      text = text[f_len, len]

      count += 1
      break if count > 10
    end

    return result
  end

  private

  def self.find_max(text)
    len = text.length
    records = []

    while records.empty? do
      text = text[0, len]
      len -= 1

      records = self.where('key LIKE ?', "%#{text}%").limit(10)

      if text.length < 2 && records.empty?
        break
      end
    end

    return FindResult.new(text, records)

  end
end
