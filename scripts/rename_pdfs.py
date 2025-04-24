import os
import unicodedata

# Caminho base onde estão os PDFs
BASE_DIR = "public/PDFs"

# Função para remover acentos e substituir espaços por hífen
def sanitize_filename(filename):
    # Remove acentos
    normalized = unicodedata.normalize('NFKD', filename).encode('ASCII', 'ignore').decode('ASCII')
    # Substitui espaços por hífen
    return normalized.replace(" ", "-")

# Percorre todas as pastas dentro de BASE_DIR
for root, dirs, files in os.walk(BASE_DIR):
    for filename in files:
        if filename.endswith(".pdf"):
            old_path = os.path.join(root, filename)
            new_filename = sanitize_filename(filename)
            new_path = os.path.join(root, new_filename)

            # Evita renomear se o nome já estiver correto
            if old_path != new_path:
                os.rename(old_path, new_path)
                print(f"✅ Renomeado:\n{old_path} →\n{new_path}\n")
