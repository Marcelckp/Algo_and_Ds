class NumMatrix(object):
    pfs_m = []

    def __init__(self, matrix):
        self.pfs_m=[[0] * (len(matrix[0])) for _ in range(len(matrix))]
        
		# calculate prefix sum
        for r in range(len(self.pfs_m)):
            pfs = 0
            for c in range(len(self.pfs_m[0])):
                pfs += matrix[r][c]
                self.pfs_m[r][c] += pfs + (self.pfs_m[r - 1][c] if r > 0 else 0)
        
        print(self.pfs_m)    

    def sumRegion(self, row1, col1, row2, col2):
        bottom = self.pfs_m[row2][col2]
        above = self.pfs_m[row1 - 1][col2] if row1 > 0 else 0
        left = self.pfs_m[row2][col1 - 1] if col1 > 0 else 0
        top = self.pfs_m[row1 - 1][col1 - 1] if row1 > 0 and col1 > 0 else 0

        print(bottom, above, left, top)

        return bottom - above - left + top if row1 != row2 else bottom - left + top
        
