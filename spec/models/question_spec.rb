require 'rails_helper'

RSpec.describe Question, type: :model do
  context '全てのフィールドが有効な場合' do
    it '有効であること' do
      question = build(:question)
      expect(question).to be_valid
    end
  end
  
end