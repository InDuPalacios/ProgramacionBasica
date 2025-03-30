import statistics
import csv

# ----- Read monthly sales data from a CSV file
monthly_sales = {}
with open('monthly_sales.csv', mode='r') as file:
    reader = csv.DictReader(file)
    for row in reader:
        month = row['month']
        sales = int(row['sales'])
        monthly_sales[month] = sales

# ----- Extract sales values
sales = list(monthly_sales.values())
# print(sales)

# ----- Calculate mean
mean_sales = statistics.mean(sales)
print(f"Mean sales: {mean_sales}")

# ----- Calculate median
median_sales = statistics.median(sales)
print(f"Median sales: {median_sales}")

# ----- Calculate mode
mode_sales = statistics.mode(sales)
print(f"Mode sales: {mode_sales}")

# ----- Calculate standard deviation
stdev_sales = statistics.stdev(sales)
print(f"Standard deviation: {stdev_sales}")

# ----- Calculate variance
variance_sales = statistics.variance(sales)
print(f"Variance: {variance_sales}")

# ----- Calculate range (max - min)
max_sales = max(sales)
min_sales = min(sales)
range_sales = max_sales - min_sales
print(f"Sales range: {range_sales}")
