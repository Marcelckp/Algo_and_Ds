// This was the question I was asked. 
// 1. Optimize Servers
// While investigating a latency issue on the Goodnotes app, you found out that some of our servers are saturated with multiple requests from the same users. To solve the issue, you decide to
// ALL
// implement an algorithm to reject requests from users that send too many of them.
// For simplicity, you can assume that a request to the server is represented as a string containing the request_id, ip_address and the unix_timestamp_in_milliseconds separated by whitespaces. We want to assign an integer limit of limit_per _second requests accepted per second per IP address.
// In other words, the server should accept at most limit_per_second requests per second from each IP address. Any extraneous requests should be rejected.
// Your task is to write a function
// GetRejectedRequests to compute and return the list of requests that should be rejected by our servers. Your function will be called with a list of requests (represented as a list of strings, sorted by timestamp) and the limit limit_per_second (represented as an integer). The returned list should be a list of request ids (integers) in chronological order i.e. the timestamp for the corresponding requests should be in nondecreasing order. If two requests in the returned list have the same timestamp, please keep them in the same relative order as they appear in the input. If no requests are rejected, please return an empty list.
// Example 1
// requests: ["1 172.253.115.138 50000", "2
// 172.253.115.139 50100", "3 172.253.115.138 50210", "4
// 172.253.115.139 50300", "5 172.253.115.138 51000", "6
// 172.253.115.139 60300"]
// limit_per _second: 1


function GetRejectedRequests(requests, limit_per_second) {
    
    // Store a cache of all previous requests from a particular IP address
    let requestCache = new Map();
    let rejectedRequests = [];

    // Loop over each request that has been made
    for (let request of requests) {
        // Split the request into its components
        let [request_id, ip_address, timestamp] = request.split(' ');
        let time = Math.floor(parseInt(timestamp) / 1000);

        let key = ip_address + ' ' + time;

        let count = requestCache.get(key) || 0;

        // console.log(requestCache)

        if (count < limit_per_second) {
            requestCache.set(key, count + 1);
        } else {
            rejectedRequests.push(parseInt(request_id));
        }
    }
    return rejectedRequests;
}

// Example 1
const requests = [
    "1 172.253.115.138 50000",
    "2 172.253.115.139 50100",
    "3 172.253.115.138 50210",
    "4 172.253.115.139 50300",
    "5 172.253.115.138 50000",
    "6 172.253.115.139 60300"
];
const limit_per_second = 2;

console.log(GetRejectedRequests(requests, limit_per_second)); // Output: [3, 4]