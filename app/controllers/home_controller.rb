class HomeController < ApplicationController
  use_inertia_instance_props
  def index
    render inertia: true
  end
end
