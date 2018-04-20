class RegistrationsController < Devise::RegistrationsController


    protected

    def after_inactive_sign_up_path_for(resource)
        '/users/sign_in'
    end

    private
  
    def sign_up_params
      params.require(:user).permit(:name, :address, :city, :country, 
        :phone, :organization_name, :email, :password, :password_confirmation)
    end
  
    def account_update_params
      params.require(:user).permit(:name, :address, :city, :country, 
        :phone, :organization_name, :email, :password, :password_confirmation)
    end
  end