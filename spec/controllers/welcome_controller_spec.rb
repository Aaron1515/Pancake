require 'rails_helper'

RSpec.describe WelcomeController, type: :controller do


  describe "RSpect is valid" do

    it "expect to be true if test is running" do
      expect(true).to be true
    end

    it "expect to have 200 status when loading page" do
      expect(response).to have_http_status(200)
    end

    it "expect to render index" do
      get :index
      expect(response).to render_template("index")
    end

  end


end