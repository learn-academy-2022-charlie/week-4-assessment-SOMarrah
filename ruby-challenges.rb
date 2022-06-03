# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.

num1 = 7
# Expected output: '7 is odd'
num2 = 42
# Expected output: '42 is even'
num3 = 221
# Expected output: '221 is odd'
# a method is defined with def in Ruby.
# def odds_only 
# the method takes in a number as a parameter
# the output should be a string saying if the given number is even or odd.
# use a conditional to make a decision 
    # a modulo can be used to determine if a number is even or odd.
    #if incorrect data is entered -> if number type != number -> please enter a number
    # if number % 2 == 0
    #else number is odd
def int_only(number)
    if number.is_a?(Integer) == false
        "#{number} is not an accepted data type. Please enter a number."
    elsif number % 2 == 0
        "#{number} is even"
    else
        "#{number} is odd"
    end
end

p int_only(num1) # output --> "7 is odd"
p int_only(num2) # output --> "42 is even"
p int_only(num3) # output --> "221 is odd"
p int_only('6') # output --> "6 is not an accepted data type. Please enter a number."




def int_only2(number)
    if number.is_a?(Integer)
    number % 2 == 0 ? "#{number} is even" : "#{number} is odd"
    else
        "Please enter a valid number."
    end
end

p int_only2(num1) # output --> "7 is odd"
p int_only2(num2) # output --> "42 is even"
p int_only2(num3) # output --> "221 is odd"
p int_only2('6') # output --> "Please enter a valid number."
# further refactor could use something like number ~= /0 through 9/ to check strings containing integers




# for a refactor I could use a ternary operator, and maybe check the string to see if an integer is included and check if that integer is even or odd? 

# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
album3 = 'Abbey Road'
# Expected output: 'bby Rd'
array_test = ['string', 'testing', 'vowels']
#create a method no_vowels.
#the method takes in a string as an input 
    #use the .delete method to remove aeiou
# the expected output is a string with all the vowels removed "aeiou"

def no_vowels(string)
    string.delete 'aeiou'
end

p no_vowels(album1) #output--> "Rbbr Sl"
p no_vowels(album2) #output--> "Sgt Pppr"
p no_vowels(album3) #output--> "Abby Rd"
p no_vowels(array_test) # output --> 'nil'

#I don't know why I was expecting this one to be harder?
def no_vowels2(array)
    array.map do |value|
        value.delete "aeiou"
    end
end
# p no_vowels2(album3) #undefined method for map
p no_vowels2(array_test) # output --> ["strng", "tstng", "vwls"]

#there is a .to_s method that converts values in an array into a string. this could be accomplished by using a boolean to check the type of data being passed into the method then executing the code once it is transformed into the required data



# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forward or backward. Use the test variables provided.

palindrome_tester1 = 'Racecar'
# Expected output: 'Racecar is a palindrome'
palindrome_tester2 = 'LEARN'
# Expected output: 'LEARN is not a palindrome'
palindrome_tester3 = 'Rotator'
# Expected output: 'Rotator is a palindrome'

#create a method called taco_cat (tacocat is a palindrome)
# the method takes in a string as an input
#the expected output is a string containing the word and if the word is or is not a palindrome
    #use some sort of iteration over the string?
        #decision if the letter at the start vs last 2nd vs 2nd to last are ==
    #or
    #break the string into an array with each letter at each index
        #compare current index to index.reverse?
            #breaking the string into an array means we could check for punctuation and spaces, remove them and still check if the string is a palindrome
#research of methods in Ruby: .split - converts string to array; each_char-iterates over each character in a string;
#.chars-converts each character in a string to an array;  

def taco_cat(string)
    #at first I was getting enumerators as the results because each_char needs to pass |c|-which represents characters through each char to return them in a block? -a block is a loop?
    if string.downcase.each_char {|c|} == string.downcase.reverse.each_char {|c|} 
        "#{string} is a tacocat...i mean palindrome!"
    else
        "Sorry, #{string} is not a palindrome..."
    end
end
#the problem with the method above would be punctuation and spaces. maybe I can combine it with the .gsub method with a regex. gsub substitutes charcters with something else. maybe I can substitute a deletion? which would be great because then the return would be the original string

p taco_cat(palindrome_tester1) # output --> "Racecar is a tacocat...i mean palindrome!"
p taco_cat(palindrome_tester2) # output --> "Sorry, LEARN is not a palindrome..."
p taco_cat(palindrome_tester3) # output --> "Rotator is a tacocat...i mean palindrome!"

def taco_cat2(string)
                #super cool that [] in regex means exclude, so everything that is not a-z0-9 is being removed! there is a website regex checker that really helped
    if string.downcase.gsub(/[^a-z0-9]/, '').each_char {|c|} == string.downcase.reverse.gsub(/[^a-z0-9]/, '').each_char {|c|} 
        "#{string} is a tacocat...i mean palindrome!"
    else
        "Sorry, #{string} is not a palindrome..."
    end
end

p taco_cat2(palindrome_tester1) # output --> "Racecar is a tacocat...i mean palindrome!"
p taco_cat2(palindrome_tester2) # output --> "Sorry, LEARN is not a palindrome..."
p taco_cat2(palindrome_tester3) # output --> "Rotator is a tacocat...i mean palindrome!"
p taco_cat2("taco Cat") #"taco Cat is a tacocat...i mean palindrome!"
p taco_cat2("race car race car") #"race car race car is a tacocat...i mean palindrome!"
p taco_cat2('r4c3c4r')# "r4c3c4r is a tacocat...i mean palindrome!"
p taco_cat2("red rum, sir, is murder") #"red rum, sir, is murder is a tacocat...i mean palindrome!"
p taco_cat2("Was it a cat I saw?")#"Was it a cat I saw? is a tacocat...i mean palindrome!"
p taco_cat2("Sit on a potato pan, Otis.")#"Sit on a potato pan, Otis. is a tacocat...i mean palindrome!"
p taco_cat2("sator arepo tenet opera rotas")#"sator arepo tenet opera rotas is a tacocat...i mean palindrome!"

