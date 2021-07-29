Category.seed(:id,
 { id: 1, name: 'Vscode', category_image: File.open("db/fixtures/category_images/c_vscode.png") },
 { id: 2, name: 'Cloud9', category_image: File.open("db/fixtures/category_images/c_cloud9.png")  },
 { id: 3, name: 'Excel',  category_image: File.open("db/fixtures/category_images/c_excel.jpeg")},
)