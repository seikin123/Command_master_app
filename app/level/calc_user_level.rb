class CalcUserLevel
  # レベルアップの処理
  def self.calc_user_level(user, experience_point)
    level_setting = LevelSetting.find_by(level: user.level + 1)
    if level_setting.present? && level_setting.thresold <= user.experience_point #次のレベルの閾値を超えていればレベルアップさせる
      experience_point = experience_point - level_setting.thresold
      user.update(level: user.level += 1, experience_point: experience_point)
    end
  end
end