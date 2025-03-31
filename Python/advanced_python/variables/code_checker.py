import subprocess

# Function to run a formatter/linter in check mode and ask to apply changes if needed
def ask_and_run(command, label):
    """
    Runs a tool in '--check --diff' mode and optionally applies changes.

    Parameters:
        command (list): The command to run (as a list of strings).
        label (str): A label to identify the tool in messages.
    """
    print(f"\n🔍 {label}")
    show_result = subprocess.run(command + ["--check", "--diff"])

    # If the tool suggests changes, ask the user whether to apply them
    if show_result.returncode != 0:
        confirm = input(f"\n¿Apply changes suggested by {label}? (y/n): ").strip().lower()
        if confirm == "y":
            subprocess.run(command)
            print(f"✅ Changes applied by {label}.")
        else:
            print(f"❌ Changes from {label} were not applied.")
    else:
        print(f"✅ {label} suggests no changes.")


# Function to run tools that only report results (like pylint, mypy, flake8)
def run_simple_check(command, label):
    """
    Runs a command and prints the result output.

    Parameters:
        command (str): The shell command to run.
        label (str): A label to identify the tool in messages.
    """
    print(f"\n🔎 Running {label}...")
    result = subprocess.run(
        command,
        shell=True,
        stdout=subprocess.PIPE,
        stderr=subprocess.PIPE,
        text=True
    )

    output = result.stdout.strip()

    if result.returncode == 0:
        print(f"✅ {label}: no issues found.")
    else:
        print(f"⚠️  {label}: issues detected.\n")
        print(output)


# Main program entry
if __name__ == "__main__":
     # You can change the target to "." to scan the entire project
    target = "anotations.py"

    # Step 1: Run Black for formatting
    ask_and_run(["black", target], "Black (formatting)")

    # Step 2: Run Isort for import sorting
    ask_and_run(["isort", target], "Isort (import order)")

    # Step 3: Run Pylint for code style and logic
    run_simple_check(f"pylint {target}", "Pylint")

    # Step 4: Run Mypy for type checking
    run_simple_check(f"mypy {target}", "Mypy")

    # Step 5: Run Flake8 for PEP8 compliance
    run_simple_check(f"flake8 {target}", "Flake8")
