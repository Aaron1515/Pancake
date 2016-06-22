require 'rails_helper'

RSpec.describe "UserExperiences", type: :request do
  describe "User can add names to field" do
    it "works! (now write some real specs)" do
      get welcome_index_path
      expect(response).to have_http_status(200)

    end
  end
end
