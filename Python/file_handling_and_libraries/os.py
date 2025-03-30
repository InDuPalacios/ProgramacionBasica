import os

# ----- Get current working directory
"""
cwd = os.getcwd()
print("Current working directory:", cwd)
"""

# ----- Rename a file
os.rename('story.txt', 'cuento.txt')
print('File renamed')

# ----- List all .txt files in current directory
txt_files = [f for f in os.listdir('.') if f.endswith('.txt')]
print("TXT files:", txt_files)
