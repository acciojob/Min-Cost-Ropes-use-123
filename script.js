function mincost(arr)
{
	// Base case: If there's only one rope, no cost
    if (arr.length <= 1) return 0;

    // Min-heap implementation using a priority queue
    const minHeap = [...arr];
    minHeap.sort((a, b) => a - b); // Sort initially to simulate min-heap

    let totalCost = 0;

    while (minHeap.length > 1) {
        // Extract the two smallest elements
        const first = minHeap.shift();
        const second = minHeap.shift();

        // Calculate the cost of connecting them
        const cost = first + second;
        totalCost += cost;

        // Add the combined rope back into the heap
        minHeap.push(cost);
        minHeap.sort((a, b) => a - b); // Re-sort to maintain heap property
    }

    return totalCost;
//write your code here
// return the min cost
  
}

module.exports=mincost;
