#問題
Question.seed(:id,
#Mac
 {id: 1, category_id: 1, synchro_key: 'Meta', answer_key: 'c', problem: 'コピーするコマンド', display_key: '⌘ + C', point: 10, pc_type: 0, problem_image: File.open("db/fixtures/category_images/vscode01.gif") },
 {id: 2, category_id: 1, synchro_key: 'Meta', answer_key: 'a', problem: '全選択をするコマンド', display_key: '⌘ + A', point: 10, pc_type: 0, problem_image: File.open("db/fixtures/category_images/vscode01.gif") },
 {id: 3, category_id: 1, synchro_key: 'Meta', answer_key: 'v', problem: 'ペーストするコマンド', display_key: '⌘ + V', pc_type: 0, problem_image: File.open("db/fixtures/category_images/vscode01.gif") },
 {id: 4, category_id: 1, synchro_key: 'Meta', answer_key: 'z', problem: '一つ前に戻す処理コマンド', display_key: '⌘ + Z', pc_type: 0, problem_image: File.open("db/fixtures/category_images/vscode01.gif") },
 {id: 5, category_id: 1, synchro_key: 'Meta', answer_key: 'Enter', problem: 'カーソル行の下に空行を挿入', display_key: '⌘ + ⏎', pc_type: 0, problem_image: File.open("db/fixtures/category_images/vscode01.gif") },
 {id: 6, category_id: 1, synchro_key: 'Meta', answer_key: 'Backspace', problem: '単語の部分削除のコマンド(カーソル位置より左側）', display_key: '⌘ + ⌫', pc_type: 0, problem_image: File.open("db/fixtures/category_images/vscode01.gif") },
 {id: 7, category_id: 1, synchro_key: 'Alt', answer_key: 'ArrowUp', problem: 'カーソル行／選択行をまるっと上移動(複数行対応)', display_key: '⌥ + ↑', pc_type: 0, problem_image: File.open("db/fixtures/category_images/vscode01.gif") },
 {id: 8, category_id: 1, synchro_key: 'Alt', answer_key: 'ArrowDown', problem: 'カーソル行／選択行をまるっと下移動(複数行対応)', display_key: '⌥ + ↓', pc_type: 0, problem_image: File.open("db/fixtures/category_images/vscode01.gif") },
 {id: 9, category_id: 1, synchro_key: 'Meta', answer_key: 'ArrowLeft', problem: '単語の先頭にジャンプ', display_key: '⌘ + ←', pc_type: 0, problem_image: File.open("db/fixtures/category_images/vscode01.gif") },
 {id: 10, category_id: 1, synchro_key: 'Meta+Shift', answer_key: 'g', problem: 'ソース管理を開く', display_key: '⌘ + ⬆︎ + G', pc_type: 0, problem_image: File.open("db/fixtures/category_images/vscode01.gif") },
 {id: 11, category_id: 1, synchro_key: 'Meta', answer_key: 'x', problem: '選択範囲を切り取り', display_key: '⌘ + X', pc_type: 0, problem_image: File.open("db/fixtures/category_images/vscode01.gif") },
 #slack
 # {id:11, category_id: 2, synchro_key: 'Meta', answer_key: 'n', problem: '新規メッセージ', display_key: '⌘ + N', pc_type: 0 },
 # {id:12, category_id: 2, synchro_key: 'Meta', answer_key: 'k', problem: '別の会話へ移動', display_key: '⌘ + K', pc_type: 0 },
 # {id:13, category_id: 2, synchro_key: 'Meta', answer_key: 'g', problem: '検索', display_key: '⌘ + G', pc_type: 0 },
 # {id:14, category_id: 2, synchro_key: 'Meta', answer_key: 'k', problem: '別の会話へ移動', display_key: '⌘ + K', pc_type: 0 },
 # {id:15, category_id: 2, synchro_key: 'Meta', answer_key: 'k', problem: '別の会話へ移動', display_key: '⌘ + K', pc_type: 0 },
 # {id:16, category_id: 2, synchro_key: 'Meta', answer_key: 'k', problem: '別の会話へ移動', display_key: '⌘ + K', pc_type: 0 },
 
 # #Excel
 # {id:21, category_id: 3, synchro_key: 'Meta', answer_key: 'c', problem: 'コピー', display_key: '⌘ + C ', pc_type: 0 },
 # {id:22, category_id: 3, synchro_key: 'Meta', answer_key: 'v', problem: 'ペースト', display_key: '⌘ + V ', pc_type: 0 },
 
#Windows
 {id: 31, category_id: 1, synchro_key: 'ctrl', answer_key: 'c', problem: 'コピーする際のコマンド', display_key: 'Ctrl + C', pc_type: 1, problem_image: File.open("db/fixtures/category_images/vscode01.gif") },
 {id: 32, category_id: 1, synchro_key: 'ctrl', answer_key: 'a', problem: '全選択をする際のコマンド', display_key: 'Ctrl + A', pc_type: 1, problem_image: File.open("db/fixtures/category_images/vscode01.gif") },
 {id: 33, category_id: 1, synchro_key: 'ctrl', answer_key: 'v', problem: 'ペーストする際のコマンド', display_key: 'Ctrl + V', pc_type: 1, problem_image: File.open("db/fixtures/category_images/vscode01.gif") },
 {id: 34, category_id: 1, synchro_key: 'ctrl', answer_key: 'z', problem: '一つ前に戻す処理際のコマンド', display_key: 'Ctrl + Z', pc_type: 1, problem_image: File.open("db/fixtures/category_images/vscode01.gif") },
 {id: 35, category_id: 1, synchro_key: 'ctrl', answer_key: 'Enter', problem: 'カーソル行の下に空行を挿入', display_key: 'Ctrl + ⏎', pc_type: 1, problem_image: File.open("db/fixtures/category_images/vscode01.gif") },
 {id: 36, category_id: 1, synchro_key: 'ctrl', answer_key: 'Backspace', problem: '単語の部分削除のコマンド(カーソル位置より左側）', display_key: 'Ctrl + ⌫', pc_type: 1, problem_image: File.open("db/fixtures/category_images/vscode01.gif") },
 {id: 37, category_id: 1, synchro_key: 'Alt', answer_key: 'ArrowUp', problem: 'カーソル行／選択行をまるっと上移動(複数行対応)', display_key: 'Alt + ↑', pc_type: 1, problem_image: File.open("db/fixtures/category_images/vscode01.gif") },
 {id: 38, category_id: 1, synchro_key: 'Alt', answer_key: 'ArrowDown', problem: 'カーソル行／選択行をまるっと下移動(複数行対応)', display_key: 'Alt + ↓', pc_type: 1, point: 1, problem_image: File.open("db/fixtures/category_images/vscode01.gif") },
 {id: 39, category_id: 1, synchro_key: 'ctrl', answer_key: 'ArrowLeft', problem: '単語の先頭にジャンプ', display_key: 'Ctrl + ←', pc_type: 1, problem_image: File.open("db/fixtures/category_images/vscode01.gif") },
 {id: 40, category_id: 1, synchro_key: 'ctrl+Shift', answer_key: 'g', problem: 'ソース管理を開く', display_key: 'Ctrl + ︎Shift + G', pc_type: 1 ,point: 10, problem_image: File.open("db/fixtures/category_images/vscode01.gif") },
 
 #cloud9
 # {id:21, category_id: 2, synchro_key: 'Control', answer_key: 'c', problem: 'Cloud9のコマンド', display_key: 'cloud9', pc_type: 0 },
 # {id:22, category_id: 2, synchro_key: 'Control', answer_key: 'c', problem: 'Cloud9のコマンド', display_key: 'cloud9', pc_type: 0 },
 # #Excel
 # {id:23, category_id: 3, synchro_key: '', answer_key: 'c', problem: 'Excelのコマンド', display_key: '⌘ ', pc_type: 0 },
 # {id:24, category_id: 3, synchro_key: 'Meta', answer_key: 'c', problem: 'Excelのコマンド', display_key: '⌘ ', pc_type: 0 },
)
