class Joke
  attr_accessor :name, :content

  def initialize(name, content)
    @name = name
    @content = content
  end

  def tell
    @content
  end
end

class GoodJoke < Joke
  attr_accessor :funny

  def initialize(name, content)
    @funny = true
    
    super(name, content)
  end
end

class BadJoke < Joke
  attr_accessor :funny

  def initialize(name, content)
    @funny = false

    super(name, content)
  end
end

bad_joke = BadJoke.new("knock knock", "knock, knock...")
good_joke = GoodJoke.new("question", "what are those!?")

puts good_joke.tell
puts bad_joke.tell