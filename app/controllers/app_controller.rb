class AppController < ApplicationController
  before_action :authenticate_user!

  def index
    @app_props = {user: current_user}
  end


end
