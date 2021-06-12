import random

SIZE = 10
MIN_ITEM = 0
MAX_ITEM = 100
array = [random.randint(MIN_ITEM, MAX_ITEM) for _ in range(SIZE)]
print(array)

array.sort()  # только для этой задачи. Далее СОРТИРОВКИ начиная с урока 7
print(array)

find = int(input('Что искать: '))
pos = len(array) // 2
left = 0
right = len(array) - 1

while find != array[pos] and left <= right:
    if find > array[pos]:
        left = pos + 1
        # pos = (left + right) // 2
    elif find < array[pos]:
        right = pos - 1
    pos = (left + right) // 2

print('Элемента нет' if left > right else f'Элемент {find} в ячейке {pos}')
