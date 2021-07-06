require 'rails_helper'

RSpec.feature "ユーザー機能", type: :feature do
  feature "会員登録" do
    background do
      @user = FactoryBot.create(:user)
    end
  end
  
  scenario 'ユーザー情報を編集することができる' do
    # sign_in @user
    visit user_path(current_user)
    click_on '編集'
    
    fill_in "name",         with: "変更"
    click_on '変更を保存'
  end
end
