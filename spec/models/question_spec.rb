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
      expect(question.errors[:answer_key]).to include('を入力してください')
    end
  end
  
    context 'synchro_keyが存在しない場合' do
    it '無効であること' do
      question = build(:question, synchro_key: nil)
      expect(question).to be_valid
    end
  end
  
    context 'pc_typeが存在しない場合' do
    it '無効であること' do
      question = build(:question, pc_type: nil)
      expect(question).to be_invalid
      expect(question.errors[:pc_type]).to include('を入力してください')
    end
  end
  
    context 'display_keyが存在しない場合' do
    it '無効であること' do
      question = build(:question, display_key: nil)
      expect(question).to be_invalid
      expect(question.errors[:display_key]).to include('を入力してください')
    end
  end
  
    context 'problemが存在しない場合' do
    it '無効であること' do
      question = build(:question, problem: nil)
      expect(question).to be_invalid
      expect(question.errors[:problem]).to include('を入力してください')
    end
  end
end