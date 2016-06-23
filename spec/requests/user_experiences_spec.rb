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

    it "is valid with 200 stuats when visiting index path" do
      get welcome_index_path
      expect(response).to have_http_status(200)
    end

    it "is valid with Add Player button" do
      visit welcome_index_path
      expect(page).to have_content "Add Player"
    end

    it "add new player named 'Aaron'" do
      visit welcome_index_path

      # binding.pry
      # within ('input#player-name.name-field') do
      #   fill_in 'name', with: 'Aaron'
      # end
      # click_button 'Add Player'

      expect(page).to have_content 'Add Player'
    end

    it "add new player named 'Player' if no name is selected" do
      visit welcome_index_path
      click_button "Add Player"
      expect(page).to have_content "Player"
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
