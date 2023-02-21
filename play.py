def fibonacci(n):
    a = 1
    b = 1
    c = 0
    # print(a)
    # print(b)
    for i in range(2, n):
        c = a + b
        # print(c)
        a = b
        b = c
    return c


print(fibonacci(10))
