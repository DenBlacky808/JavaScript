a = [1, 2, 3]
b = a
a = a + [4, 5]
print(a, b, sep='\n')

a = [1, 2, 3]
b = a
a += [4, 5]  # a.extend([4, 5])
print(a, b, sep='\n')

a = (1, 2, 3)
b = a
a += (4, 5)  # a.extend([4, 5])
print(a, b, sep='\n')

# task 2
row = ['_'] * 3
print(row)
board = [row] * 3
print(board)
board[1][1] = 'X'
print(board)
board = [['_'] * 3 for _ in range(3)]
print(board)
board[1][1] = 'X'
print(board)
