require 'rails_helper'

RSpec.feature "管理者機能" , type: :feature do
  before do
    @admin = FactoryBot.create(:admin)
  end

  scenario '管理者ユーザーがログアウトできる' do
    visit new_admin_session_path
    fill_in  'admin_email',    with: @admin.email
    fill_in  'admin_password', with: @admin.password
    click_on 'Log in'

    ###（想定外）ログアウトリンクがない
    click_on 'ログアウト'
    expect(current_path).to new_admin_session_path
  end
end