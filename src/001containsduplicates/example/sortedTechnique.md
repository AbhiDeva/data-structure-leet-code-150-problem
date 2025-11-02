```mermaid
graph TB
    subgraph Header["SORTED TECHNIQUE APPROACH"]
        Title["Example Array: [4, 2, 7, 2, 9]"]
        Complexity["Time Complexity: O(n log n)<br/>Space Complexity: O(n)"]
        Title --> Complexity
    end
    
    subgraph Steps["Step-by-Step Execution"]
        S1["Step 1: Create Copy<br/>Original: [4, 2, 7, 2, 9]<br/>Copy: [4, 2, 7, 2, 9]<br/>Status: Array copied ✓"]
        S2["Step 2: Sort Array<br/>Before: [4, 2, 7, 2, 9]<br/>After: [2, 2, 4, 7, 9]<br/>Status: Sorting complete ✓"]
        S3["Step 3: Check Adjacent Elements<br/>i=0<br/>Compare sorted[0] vs sorted[1]<br/>2 vs 2<br/>Result: EQUAL ✓✓✓<br/>RETURN TRUE"]
        
        S1 --> S2 --> S3
    end
    
    subgraph Visual["Visual Representation"]
        V1["Original: [4, 2, 7, 2, 9]<br/>↓ SORT ↓<br/>Sorted: [2, 2, 4, 7, 9]<br/>         ↑  ↑<br/>    Duplicates Adjacent!"]
    end
    
    subgraph Result["Analysis"]
        Summary["Total Comparisons: 1<br/>Duplicate Found: Index 0 and 1 in sorted<br/>Value: 2<br/>Efficiency: Good - Sorting helps<br/>Key Insight: Duplicates become adjacent"]
    end
    
    Header --> Steps
    Steps --> Visual
    Visual --> Result
    ```