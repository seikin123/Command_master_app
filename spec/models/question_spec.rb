require 'rails_helper'

RSpec.describe Question, type: :model do
  context '全てのフィールドが有効な場合' do
    it '有効であること' do
      question = build(:question)
      expect(question).to be_valid
    end
  end

  context 'answer_keyが存在しない場合' do
    it '無効であること' do
      question = build(:question, answer_key: nil)
      expect(question).to be_invalid
      expect(question.errors[:answer_key]).to
    end
  end
  
  context 'answer_keyが50文字以下の場合' do
    it '有効であること' do
      question = build(:question, answer_key: 'a' * 50)
      expect(question).to be_valid
    end
  end
end