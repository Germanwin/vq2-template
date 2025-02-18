import os

def save_python_files_content(root_dir='.', output_file='output.txt'):
    with open(output_file, 'w', encoding='utf-8') as out:
        # 1. Сначала записываем структуру директорий и файлов
        for current_path, dirs, files in os.walk(root_dir):
            # Исключаем из обхода директории __pycache__
            if "__pycache__" in dirs:
                dirs.remove("__pycache__")

            # Уровень вложенности считается количеством os.sep после вырезания корня
            level = current_path.replace(root_dir, '').count(os.sep)
            indent = ' ' * 4 * level  # Отступ для текущей директории

            # Печатаем название директории
            out.write(f"{indent}{os.path.basename(current_path)}/\n")

            # Для всех файлов в текущей директории добавляем дополнительный отступ
            sub_indent = ' ' * 4 * (level + 1)
            for file_name in files:
                out.write(f"{sub_indent}{file_name}\n")

        out.write("\n\n")

        # 2. Далее записываем содержимое .py-файлов
        for current_path, dirs, files in os.walk(root_dir):
            # Исключаем из обхода директории __pycache__
            if "__pycache__" in dirs:
                dirs.remove("__pycache__")

            for file_name in files:
                if file_name.endswith('.tsx') or file_name.endswith('.ts') or file_name.endswith('.js') or file_name.endswith('.css') or file_name.endswith('.mjs'):
                    full_path = os.path.join(current_path, file_name)

                    # Записываем путь к файлу
                    out.write(f"{full_path}:\n")

                    # Считываем содержимое .py-файла и записываем в файл
                    with open(full_path, 'r', encoding='utf-8') as f:
                        content = f.read()
                        out.write(content)

                    # Разделяем содержимое разных файлов пустой строкой
                    out.write("\n\n")


if __name__ == "__main__":
    save_python_files_content('src')
