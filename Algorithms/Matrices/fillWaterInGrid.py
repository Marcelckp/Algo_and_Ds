# Fill a grid of 3x3 with water from a given point (x,y) there there will be rocks in the grid
# The rocks are represented by 1 and the water by 0 and the grid is represented by a 2D array
# When a rock is met, the water should stop flowing in that direction and split to the other directions
# The water should flow in all directions until it meets a rock or the edge of the grid
# At the end we should know how much water is in each cell of the grid
# We will know how much water is in each cell by the number of times water has flowed through that cell 
# For example at point (x,y) we will pour water and it will flow to the other cells and we will increment the count of the cells it flows through
# We will keep track of the cells that the water has flowed through by using a visited array
# While we are still pouring water and the bottom of the grid has not been reached, we will keep pouring water and incrementing the count of the cells that the water has flowed through
