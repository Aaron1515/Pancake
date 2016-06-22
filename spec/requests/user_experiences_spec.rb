# Pseudo Code:
  # Pending tests
  # Get to index page
  # Have to page successfully loaded
  # Fill out form with "Aaron"
  # Click on Add Player
  # Add player will add a new field on the page
  # When click on add 1
  # The score will add 1
  # When click on add 5
  # The score will add 5
  # When click on add 10
  # The score will add 10
  # When click on minus 10
  # The score will be less than 10
  # When click on minus 1
  # The score will be less than 1
  # When click on plus button the round number will go up by one
  # When click on minus button the round number will go down by one
  # When click on the reset button after round number goes up and 3 players are added the reset button will reset all players score to zero and round number will be zero.
require 'rails_helper'

RSpec.describe "UserExperiences", type: :request do
  describe "User can add names to field" do
    it "works! (now write some real specs)" do
      get welcome_index_path
      expect(response).to have_http_status(200)
    end

    xit "add new player named 'Aaron'" do
    end

    xit "add new player named 'Player' if no name is selected" do
    end

    xit "add 1 to player score when +1 is clicked" do
    end

    xit "add 5 to player score when +5 is clicked" do
    end

    xit "add 10 to player score when +10 is clicked" do
    end

    xit "minus 10 to player score when -10 is clicked" do
    end

    xit "minus 1 to player score when -1 is clicked" do
    end

    xit "add 1 to  score when + is clicked" do
    end

    xit "minus 1 to  score when - is clicked" do
    end

    xit "all player's score and round is reset back to zero when reset button is clicked" do
    end

  end
end
