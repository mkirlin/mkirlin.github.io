class WordFinder
  attr_reader :word_bank

  def initialize(filename)
    @filename = filename
    @word_bank = []
    @counts = {}
  end

  def parse_file
    File.open(@filename) { |f| f.read }
  end

  def file_words
    @sorted_file = parse_file.split(/[^a-zA-Z]/).sort
  end

  def meaningful_words
    @sorted_file.map do |word|
      if word.length >= 4
        @word_bank << word
      end
    end
    @word_bank
  end

  def hash_words
    @word_bank.each{|name| @counts[name] += 1}
  end
end

words = WordFinder.new("source.txt")

words.parse_file
words.file_words
words.meaningful_words
words.hash_words

