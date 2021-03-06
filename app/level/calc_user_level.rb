class CalcUserLevel
  # レベルアップの処理
  def self.calc_user_level(user, experience_point)
    level_setting = LevelSetting.find_by(level: user.level + 1)
    if level_setting.present? && level_setting.thresold <= user.experience_point #次のレベルの閾値を超えていればレベルアップさせる
      experience_point = experience_point - level_setting.thresold
      user.update(level: user.level += 1, experience_point: experience_point)
      # level_setting = LevelSetting.find_by(level: user.level + 1)
      # 次のレベルまでの値を返すために、参照するlevel_settingを１つ上にして変数に入れ直す
    end
    # if user.level != 10
      # until_percentage = experience_point.quo(level_setting.thresold).to_f.round(2)*100
      # until_level = level_setting.thresold - total_exp
    # end
    # return {until_percentage: until_percentage, until_level: until_level}
  end
end