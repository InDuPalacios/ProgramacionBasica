#!/bin/bash


if [[ "$1" == "--help" ]]; then
  echo ""
  echo "🔧 Code Checker Script"
  echo "Usage: ./run_checker.sh file.py"
  echo ""
  echo "This script activates the virtual environment and runs:"
  echo "- Black, Isort, Pylint, Mypy, and Flake8"
  echo ""
  echo "Make sure this file is executable:"
  echo "chmod +x run_checker.sh"
  echo ""
  exit 0
fi


# Check if a file argument was provided
if [ -z "$1" ]; then
  echo "⚠️  You must provide the Python file to check."
  echo "Usage: ./run_checker.sh file.py"
  exit 1
fi


# Activate the virtual environment
source venv/bin/activate

# Run the code checker
python code_checker.py "$1"

# Deactivate the virtual environment (optional)
deactivate