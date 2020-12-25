require 'base64'

names = ["Adeline", "Maxime (Herve)", "Sandra", "Benjam", "Pauline", "O'Neil", "Matthieu", "Cote", "Franz", "Maxou (Le Squere)", "Mika", "Germain", "Marion"]

shuffled_names = names.shuffle

repartition = {}

names.each do |name|
  while shuffled_names.first == name
    shuffled_names.shuffle!
  end

  repartition[name] = "https://grmnlrt.github.io/secret-santa/?secret=#{Base64.encode64(shuffled_names.shift)[0..-2]}"
end
