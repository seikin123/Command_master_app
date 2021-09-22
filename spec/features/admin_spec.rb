require 'rails_helper'

RSpec.feature "管理者機能" , type: :feature do
  before do
    @admin = FactoryBot.create(:admin)
  end

  scenario '管理者ユーザーがログインできる' do
    visit new_admin_session_path
    fill_in  'admin_name',    with: @admin.name
    fill_in  'admin_password', with: @admin.password
    click_on 'Log in'
  end
end