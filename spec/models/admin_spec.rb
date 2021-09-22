require 'rails_helper'

RSpec.describe Admin, type: :model do
  describe '有効な管理者' do
    it '全ての項目が入力されていれば有効' do
      admin = Admin.new(
        name: "testtest",
        email: 'test@test.com',
        password: "testtest",
        password_confirmation: "testtest",
      )
      expect(admin).to be_valid
    end
  end
  
  describe '無効な管理者' do
    it '名前がなければ無効' do
      admin = Admin.new(name: nil)
      admin.valid?
      expect(admin.errors[:name]).to include("を入力してください")
    end
    
  context '名前が3文字以下の場合' do
    it '無効であること' do
      admin = build(:admin, name: 'a' * 3)
      expect(admin).to be_valid
    end
  end
  
    it 'メールアドレスがなければ無効' do
      admin = Admin.new(email: nil)
      admin.valid?
      expect(admin.errors[:email]).to include("を入力してください")
    end
    
  context 'emailが重複している場合' do
    it '無効であること' do
      admin1 = create(:admin)
      admin2 = build(:admin, email: admin1.email)
      expect(admin2).to be_invalid
      expect(admin2.errors[:email]).to include('はすでに存在します')
    end
  end
    
    it 'パスワードが入力されていなければ無効' do
      admin = Admin.new(password: nil)
      admin.valid?
      expect(admin.errors[:password]).to include("を入力してください")
    end
  end
  
  context 'パスワードが6文字以下の場合' do
    it '無効であること' do
      admin = build(:admin, password: 'a' * 6)
      expect(admin).to be_invalid
      expect(admin.errors[:password]).to include('入力してください')
    end
  end
end