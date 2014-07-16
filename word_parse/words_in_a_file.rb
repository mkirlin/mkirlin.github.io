# Read the text file into a string
# Split the text into an array of words
# Count the number of times each word occurs
# Display the top X words, based on user input.
# Worked on with Stephanie.

def common_words(filename)#, num_of_words = nil)
  # filetext = parse_file(filename)
  # filetext = filetext.split(/[^a-zA-Z]/).map {|x| x}
  # filetext.delete("")
  # filetext.sort!
  counts = {}
  filetext.each {|name| counts[name] += 1}
  counts = counts.sort_by { |key, value| value }.reverse
  # word_count = 0
  # until word_count == num_of_words - 1
  #   counts.each_with_index { |(k, v), i| prints }
  #   word_count += 1
  # end
end



p common_words("source.txt")
