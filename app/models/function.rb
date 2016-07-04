require_relative 'player'

class Game
  attr_accessor :players
  attr_reader :round

  def initialize
    @round = 0
    @players = []
  end

  def add_player(player_name)
    @players << Player.new(player_name)
  end

  def edit_score(num_to_change)
  end

  def round_up
    @round += 1
  end

  def round_down
    @round -= 1
  end

  def log

  end
end