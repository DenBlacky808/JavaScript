import random

SIZE_N = 4
SIZE_M = 6
MIN_ITEM = 0
MAX_ITEM = 1_000
matrix = [[random.randint(MIN_ITEM, MAX_ITEM) for _ in range(SIZE_M)] for _ in range(SIZE_N)]
print(*matrix, sep='\n')

sum_col = [0] * len(matrix[0])
print(f'{sum_col = }')

for line in matrix:
    sum_line = 0
    for i, item in enumerate(line):
        sum_line += item
        sum_col[i] += item
        print(f'{item:>7}', end='')
    print(f'{sum_line:>10}')

for item in sum_col:
    print(f'{item:>7}', end='')
