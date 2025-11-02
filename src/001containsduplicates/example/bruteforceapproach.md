```mermaid
graph TB
    subgraph Header["BRUTE FORCE APPROACH"]
        Title["Example Array: [4, 2, 7, 2, 9]"]
        Complexity["Time Complexity: O(n²)<br/>Space Complexity: O(1)"]
        Title --> Complexity
    end
    
    subgraph Steps["Step-by-Step Execution"]
        BF1["Step 1: i=0, j=1<br/>Compare arr[0] vs arr[1]<br/>4 vs 2<br/>Result: Not Equal ❌"]
        BF2["Step 2: i=0, j=2<br/>Compare arr[0] vs arr[2]<br/>4 vs 7<br/>Result: Not Equal ❌"]
        BF3["Step 3: i=0, j=3<br/>Compare arr[0] vs arr[3]<br/>4 vs 2<br/>Result: Not Equal ❌"]
        BF4["Step 4: i=0, j=4<br/>Compare arr[0] vs arr[4]<br/>4 vs 9<br/>Result: Not Equal ❌"]
        BF5["Step 5: i=1, j=2<br/>Compare arr[1] vs arr[2]<br/>2 vs 7<br/>Result: Not Equal ❌"]
        BF6["Step 6: i=1, j=3<br/>Compare arr[1] vs arr[3]<br/>2 vs 2<br/>Result: EQUAL ✓✓✓<br/>RETURN TRUE"]
        
        BF1 --> BF2 --> BF3 --> BF4 --> BF5 --> BF6
    end
    
    subgraph Result["Analysis"]
        Summary["Total Comparisons: 6<br/>Duplicate Found: Index 1 and 3<br/>Value: 2<br/>Efficiency: Poor for large arrays"]
    end
    
    Header --> Steps
    Steps --> Result
    ```