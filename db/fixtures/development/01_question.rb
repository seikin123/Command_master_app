#問題
Question.seed(:id,
#Mac
 { category_id: 1, synchro_key: 'Meta', answer_key: 'c', problem: 'コピーするコマンド', display_key: '⌘ + C', point: 10, pc_type: 0, problem_image: File.open("db/fixtures/category_images/copy-1.gif") },
 { category_id: 1, synchro_key: 'Meta', answer_key: 'a', problem: '全選択をするコマンド', display_key: '⌘ + A', point: 10, pc_type: 0, problem_image: File.open("db/fixtures/category_images/vs-2.gif") },
 { category_id: 1, synchro_key: 'Meta', answer_key: 'v', problem: 'ペーストするコマンド', display_key: '⌘ + V', pc_type: 0, problem_image: File.open("db/fixtures/category_images/copy-1.gif") },
 { category_id: 1, synchro_key: 'Meta', answer_key: 'z', problem: '一つ前に戻す処理コマンド', display_key: '⌘ + Z', pc_type: 0, problem_image: File.open("db/fixtures/category_images/vs-4.gif") },
 { category_id: 1, synchro_key: 'Meta', answer_key: 'Enter', problem: 'カーソル行の下に空行を挿入', display_key: '⌘ + ⏎', pc_type: 0, problem_image: File.open("db/fixtures/category_images/vs-5.gif") },
 { category_id: 1, synchro_key: 'Meta', answer_key: 'Backspace', problem: '単語の部分削除のコマンド(カーソル位置より左側）', display_key: '⌘ + ⌫', pc_type: 0, problem_image: File.open("db/fixtures/category_images/vs-6.gif") },
 { category_id: 1, synchro_key: 'Alt', answer_key: 'ArrowUp', problem: 'カーソル行／選択行をまるっと上移動(複数行対応)', display_key: '⌥ + ↑', pc_type: 0, problem_image: File.open("db/fixtures/category_images/vs-7.gif") },
 { category_id: 1, synchro_key: 'Alt', answer_key: 'ArrowDown', problem: 'カーソル行／選択行をまるっと下移動(複数行対応)', display_key: '⌥ + ↓', pc_type: 0, problem_image: File.open("db/fixtures/category_images/vs-8.gif") },
 { category_id: 1, synchro_key: 'Meta', answer_key: 'ArrowLeft', problem: '単語の先頭にジャンプ', display_key: '⌘ + ←', pc_type: 0, problem_image: File.open("db/fixtures/category_images/vs-9.gif") },
 { category_id: 1, synchro_key: 'Meta+Shift', answer_key: 'g', problem: 'ソース管理を開く', display_key: '⌘ + ⬆︎ + G', pc_type: 0, problem_image: File.open("db/fixtures/category_images/vs-10.gif") },
 { category_id: 1, synchro_key: 'Meta', answer_key: 'x', problem: '選択範囲を切り取り', display_key: '⌘ + X', pc_type: 0, problem_image: File.open("db/fixtures/category_images/vs-11.gif") },
 
 #フォルダ/ワークスペース全体
 { category_id: 1, synchro_key: 'Meta+Shift', answer_key: 'f', problem: 'フォルダ/ワークスペース全体を検索', display_key: '⌘ + ⬆︎ + F', pc_type: 0, problem_image: File.open("db/fixtures/category_images/vs-12.gif") },
 { category_id: 1, synchro_key: 'Meta+Shift', answer_key: 'h', problem: 'フォルダ/ワークスペース全体を置換', display_key: '⌘ + ⬆︎ + H', pc_type: 0, problem_image: File.open("db/fixtures/category_images/vs-13.gif") },
 # # 開く系
 { category_id: 1, synchro_key: 'Meta', answer_key: 'p', problem: 'フォルダ／ワークスペース内のファイルを開く', display_key: '⌘ + P', pc_type: 0, problem_image: File.open("db/fixtures/category_images/vs-16.gif") },
 { category_id: 1, synchro_key: 'Meta', answer_key: ',', problem: '設定画面を開く', display_key: '⌘ + ,', pc_type: 0, problem_image: File.open("db/fixtures/category_images/vs-17.gif") },
 # # サイドバー系
 { category_id: 1, synchro_key: 'Meta', answer_key: 'b', problem: 'サイドバーを開く/閉じる', display_key: '⌘ + B', pc_type: 0, problem_image: File.open("db/fixtures/category_images/vs-18.gif") },
 { category_id: 1, synchro_key: 'Meta+Shift', answer_key: 'x', problem: '拡張機能を開く', display_key: '⌘ + ⬆︎ + X', pc_type: 0, problem_image: File.open("db/fixtures/category_images/vs-19.gif") },
 { category_id: 1, synchro_key: 'Meta+Shift', answer_key: 'd', problem: 'デバッグを開く', display_key: '⌘ + ⬆︎ + D', pc_type: 0, problem_image: File.open("db/fixtures/category_images/vs-20.gif") },
 { category_id: 1, synchro_key: 'Meta', answer_key: 's', problem: '上書き保存', display_key: '⌘ + S', pc_type: 0, problem_image: File.open("db/fixtures/category_images/vs-21.gif") },
 { category_id: 1, synchro_key: 'Meta+Shift', answer_key: 's', problem: '名前を付けて保存', display_key: '⌘ + ⬆︎ + S', pc_type: 0, problem_image: File.open("db/fixtures/category_images/vs-22.gif") },
 
 { category_id: 2, synchro_key: 'Meta', answer_key: 's', problem: '名前を付けて保存', display_key: '⌘ + S', pc_type: 0, problem_image: File.open("db/fixtures/category_images/c_cloud9.png") },
 
#Windows
 { category_id: 1, synchro_key: 'Ctrl', answer_key: 'c', problem: 'コピーする際のコマンド', display_key: 'Ctrl + C', pc_type: 1, problem_image: File.open("db/fixtures/category_images/copy-1.gif") },
 { category_id: 1, synchro_key: 'Ctrl', answer_key: 'a', problem: '全選択をする際のコマンド', display_key: 'Ctrl + A', pc_type: 1, problem_image: File.open("db/fixtures/category_images/vs-2.gif") },
 { category_id: 1, synchro_key: 'Ctrl', answer_key: 'v', problem: 'ペーストする際のコマンド', display_key: 'Ctrl + V', pc_type: 1, problem_image: File.open("db/fixtures/category_images/copy-1.gif") },
 { category_id: 1, synchro_key: 'Ctrl', answer_key: 'z', problem: '一つ前に戻す処理際のコマンド', display_key: 'Ctrl + Z', pc_type: 1, problem_image: File.open("db/fixtures/category_images/vs-4.gif") },
 { category_id: 1, synchro_key: 'Ctrl', answer_key: 'Enter', problem: 'カーソル行の下に空行を挿入', display_key: 'Ctrl + ⏎', pc_type: 1, problem_image: File.open("db/fixtures/category_images/vs-5.gif") },
 { category_id: 1, synchro_key: 'Ctrl', answer_key: 'Backspace', problem: '単語の部分削除のコマンド(カーソル位置より左側）', display_key: 'Ctrl + ⌫', pc_type: 1, problem_image: File.open("db/fixtures/category_images/vs-6.gif") },
 { category_id: 1, synchro_key: 'Alt', answer_key: 'ArrowUp', problem: 'カーソル行／選択行をまるっと上移動(複数行対応)', display_key: 'Alt + ↑', pc_type: 1, problem_image: File.open("db/fixtures/category_images/vs-7.gif") },
 { category_id: 1, synchro_key: 'Alt', answer_key: 'ArrowDown', problem: 'カーソル行／選択行をまるっと下移動(複数行対応)', display_key: 'Alt + ↓', pc_type: 1, point: 1, problem_image: File.open("db/fixtures/category_images/vs-8.gif") },
 { category_id: 1, synchro_key: 'ctrl', answer_key: 'ArrowLeft', problem: '単語の先頭にジャンプ', display_key: 'Ctrl + ←', pc_type: 1, problem_image: File.open("db/fixtures/category_images/vs-9.gif") },
 { category_id: 1, synchro_key: 'Ctrl+Shift', answer_key: 'g', problem: 'ソース管理を開く', display_key: 'Ctrl + ︎Shift + G', pc_type: 1 ,point: 10, problem_image: File.open("db/fixtures/category_images/vs-10.gif") },
 { category_id: 1, synchro_key: 'Ctrl', answer_key: 'x', problem: '選択範囲を切り取り', display_key: 'Ctrl + X', pc_type: 1, problem_image: File.open("db/fixtures/category_images/vs-11.gif") },
 
 #フォルダ/ワークスペース全体
 { category_id: 1, synchro_key: 'Ctrl+Shift', answer_key: 'f', problem: 'フォルダ/ワークスペース全体を検索', display_key: 'Ctrl +︎ Shift + F', pc_type: 1, problem_image: File.open("db/fixtures/category_images/vs-12.gif") },
 { category_id: 1, synchro_key: 'Ctrl+Shift', answer_key: 'h', problem: 'フォルダ/ワークスペース全体を置換', display_key: 'Ctrl + Shift + H', pc_type: 1, problem_image: File.open("db/fixtures/category_images/vs-13.gif") },
 # # 開く系
 { category_id: 1, synchro_key: 'Ctrl', answer_key: 'p', problem: 'フォルダ／ワークスペース内のファイルを開く', display_key: 'Ctrl + P', pc_type: 1, problem_image: File.open("db/fixtures/category_images/vs-16.gif") },
 { category_id: 1, synchro_key: 'Ctrl', answer_key: ',', problem: '設定画面を開く', display_key: 'Ctrl + ,', pc_type: 1, problem_image: File.open("db/fixtures/category_images/vs-17.gif") },
 # # サイドバー系
 { category_id: 1, synchro_key: 'Ctrl', answer_key: 'b', problem: 'サイドバーを開く/閉じる', display_key: 'Ctrl + B', pc_type: 1, problem_image: File.open("db/fixtures/category_images/vs-18.gif") },
 { category_id: 1, synchro_key: 'Ctrl+Shift', answer_key: 'x', problem: '拡張機能を開く', display_key: 'Ctrl + ︎Shift + X', pc_type: 1, problem_image: File.open("db/fixtures/category_images/vs-19.gif") },
 { category_id: 1, synchro_key: 'Ctrl+Shift', answer_key: 'd', problem: 'デバッグを開く', display_key: 'Ctrl + ︎Shif︎ + D', pc_type: 1, problem_image: File.open("db/fixtures/category_images/vs-20.gif") },
 { category_id: 1, synchro_key: 'Ctrl', answer_key: 's', problem: '上書き保存', display_key: 'Ctrl + S', pc_type: 1, problem_image: File.open("db/fixtures/category_images/vs-21.gif") },
 { category_id: 1, synchro_key: 'Ctrl+Shift', answer_key: 's', problem: '名前を付けて保存', display_key: 'Ctrl + ︎Shif + S', pc_type: 1, problem_image: File.open("db/fixtures/category_images/vs-22.gif") },
 
)
