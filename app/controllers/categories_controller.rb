class CategoriesController < ApplicationController
  def index
    @categories = Category.all
    # @pc_type = set_pc_type
  end

  def show
  end
end
