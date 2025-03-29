# Read it line by line
with open('story.txt', 'r') as file:
    for lineas in file:
        print(lineas.strip())

#  ------------------------ 
with open('story.txt', 'r') as file:
    lines = file.readlines()
    num_lines = len(lines)

    print(f"The file has {num_lines} lines.")
    for line in lines:
        print(line.strip())
# ----------------------

# Add text at the end without overwriting
with open('story.txt', 'a') as file:
    file.write("\n\nBy:ChatGPT")

# Overwrite existing content
with open('story.txt', 'w') as file:
    file.write("\n\nBy:ChatGPT")