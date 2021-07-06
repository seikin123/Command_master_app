require 'rails_helper'

RSpec.describe User, type: :model do
  describe '有効なユーザー' do
    it '全ての項目が入力されていれば有効' do
      user = User.new(
        name: "ホゲホゲ",
        email: "hogehoge@hoge",
        password: "hogehoge",
        password_confirmation: "hogehoge",
      )
      expect(user).to be_valid
    end
  end
  
  
end
