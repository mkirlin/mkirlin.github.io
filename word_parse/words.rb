


filename = source.txt

def common_words(filename)#, num_of_words = nil)
  filetext = ""
  File.open(filename) { |f| filetext = f.read }
  filetext
end

p common_words(source.txt)
