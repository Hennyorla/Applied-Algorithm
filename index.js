// Implementing Dijkstra's Algorithm in JavaScript


// Define the PriorityQueue class
class PriorityQueue {
    constructor() {
        this.values = [];
    }

    enqueue(val, priority) {
        this.values.push({ val, priority });
        this.sort();
    }

    dequeue() {
        return this.values.shift();
    }

    isEmpty() {
        return this.values.length === 0;
    }

    sort() {
        this.values.sort((a, b) => a.priority - b.priority);
    }
}





// Define the function
function dijkstra(graph, start) {
    // Initialize the distances object
    let distances = {};
    // Initialize the queue of vertices to visit
    let queue = new PriorityQueue();

    // Set the distance to the start node as 0
    distances[start] = 0;
    queue.enqueue(start, 0);

    // While there are still vertices in the queue
    while (!queue.isEmpty()) {
        // Dequeue the vertex with the smallest distance
        let currentVertex = queue.dequeue().val;

        // For each neighbor of the current vertex
        for (let neighbor in graph[currentVertex]) {
            // Calculate the distance to the neighbor through the current vertex
            let distanceThroughVertex = distances[currentVertex] + graph[currentVertex][neighbor];

            // If the new distance is smaller than the current distance, update it
            if (!distances[neighbor] || distances[neighbor] > distanceThroughVertex) {
                distances[neighbor] = distanceThroughVertex;
                queue.enqueue(neighbor, distanceThroughVertex);
            }
        }
    }

    // Return the distances object
    return distances;
}


console.log(dijkstra({
}, 'A')); // {}