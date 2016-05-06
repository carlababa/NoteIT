class AppController < ApplicationController
  before_user :authenticate_user!
  
  def index
    @app_props = {user: current_user}
  end


end
