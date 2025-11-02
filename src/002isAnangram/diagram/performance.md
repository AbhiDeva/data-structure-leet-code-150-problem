```mermaid
classDiagram
    class O_n2 {
        +indexOf() and splice()
        +Time: O(n²)
        +Space: O(n)
    }
    class O_nlogn {
        +Sort strings
        +Compare results
        +Time: O(n log n)
        +Space: O(n)
    }
    class O_n_HashMap {
        +Use frequency map
        +Increment/Decrement counts
        +Time: O(n)
        +Space: O(1)
    }
    class O_n_Array26 {
        +Use fixed 26-length array
        +Optimized for a-z
        +Time: O(n)
        +Space: O(1)
    }

    O_n2 --> O_nlogn
    O_nlogn --> O_n_HashMap
    O_n_HashMap --> O_n_Array26
    ```