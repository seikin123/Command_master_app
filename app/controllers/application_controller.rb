class ApplicationController < ActionController::Base
  before_action :configure_permitted_parameters, if: :devise_controller? 
  # protect_from_forgery with: :null_session
  
  private

    def set_pc_type
      request.os == 'Mac OSX' ? 'Mac' : ''
    end

    def configure_permitted_parameters
      devise_parameter_sanitizer.permit(:sign_up,keys:[:name, :email])
    end
end
