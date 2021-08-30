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
  
  describe '無効なユーザー' do
    it '名前がなければ無効' do
      user = User.new(name: nil)
      user.valid?
      expect(user.errors[:name]).to include("を入力してください")
    end
    
  context '名前が3文字以下の場合' do
    it '無効であること' do
      user = build(:user, name: 'a' * 3)
      expect(user).to be_valid
    end
  end
  
    it 'メールアドレスがなければ無効' do
      user = User.new(email: nil)
      user.valid?
      expect(user.errors[:email]).to include("を入力してください")
    end
    
  context 'emailが重複している場合' do
    it '無効であること' do
      user1 = create(:user)
      user2 = build(:user, email: user1.email)
      expect(user2).to be_invalid
      expect(user2.errors[:email]).to include('はすでに存在します')
    end
  end
    
    it 'パスワードが入力されていなければ無効' do
      user = User.new(password: nil)
      user.valid?
      expect(user.errors[:password]).to include("を入力してください")
    end
  end
  
  context 'パスワードが6文字以下の場合' do
    it '無効であること' do
      user = build(:user, password: 'a' * 5)
      expect(user).to be_invalid
      expect(user.errors[:password]).to include('は6文字以上で入力してください')
    end
  end
end
