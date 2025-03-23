function solution(A) {
    var n = A.length;
    var ans = Number.MAX_SAFE_INTEGER

    for (var i = 0; i < n - 1; i++) { // O(3 * N)
        if (A[i] * A[i + 1] >= 0) {
            ans = Math.min(ans, A[i] * A[i + 1])
        }

        // for (var h = i + 1; h < n; h++) {
        //     if (A[i] * A[h] >= 0) {
        //         ans = Math.min(ans, A[i] * A[h])
        //     }
        // }
    }

    return ans
}

// O(2(n))

console.log(solution([2, 2, 12, 6, 1, 4, 2])) 
// O(2 * n) => O(6) => O(n)
// O(n^2) => O(9)