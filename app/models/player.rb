class Player
  def initialize(args)
    @name = args || "Player"
    @score = 0
  end

  def add_one
    @score += 1
  end

  def add_five
    @score += 5
  end

  def add_ten
    @score += 10
  end

  def minus_ten
    @score -= 10
  end

  def minus_one
    @score -= 1
  end

  def reset
    @score = 0
  end

end