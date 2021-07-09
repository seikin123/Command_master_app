class InquiryController < ApplicationController
  
  def index
     # 入力画面を表示
    @inquiry = Inquiry.new
    render :action => 'index'
  end

  def confirm
    
  end

  def thanks
  end
end
