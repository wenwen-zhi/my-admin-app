import math
def prime_factors(n,ps):
    factors = []
    i = 0
    N=n
    while i<len(ps) and ps[i]*ps[i]<=N:
        if n%ps[i]==0:
            n//=ps[i]
            factors.append(ps[i])
        else:
            i+=1
    return factors 

def get_primes(n):
    ps=[]
    for i in range(2,int(math.sqrt(n))+1):
        j=2
        for j in range(2,i):
            if i%j==0:
                break
        else:
            ps.append(i)
    return ps

#     while i * i <= n:
#         if n % i:
#             i += 1
#         else:
#             n //= i
#             factors.append(i)
#     if n > 1:
#         factors.append(n)
#     return factors


n = input()
arr = list(map(int, input().split()))
cnt = 0
ps=get_primes(max(arr))
for x in arr:
    if x >= 8 and len(prime_factors(x)) >= 3:
        cnt += 1
print(cnt)
