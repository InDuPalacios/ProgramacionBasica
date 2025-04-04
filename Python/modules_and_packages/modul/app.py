import reports

# Generate reports using the entire module
sales_report = reports.generate_sales_report('October', 10000)
expense_report = reports.generate_expenses_report('October', 5000)

print(sales_report)
print(expense_report)