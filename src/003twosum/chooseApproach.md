# Choose Approach 

```mermaid
flowchart TD
    A([Start: Need to solve Two Sum?]) --> B{Is array already sorted?}
    
    B -->|Yes| C{Need original indices?}
    C -->|No| D[Use SLIDING WINDOW ⭐⭐ <br> O(n) time, O(1) space]
    C -->|Yes| E[Use TWO POINTER ✓ <br> O(n log n) time, O(n) space]

    B -->|No| F{What do you need?}
    F -->|Just boolean (exists?)| G[Use SET ✓ <br> O(n) time, O(n) space]
    F -->|Actual indices| H{Is this production code?}
    H -->|Yes| I[Use HASH MAP ⭐ <br> O(n) time, O(n) space]
    H -->|No| J{Learning or debugging?}
    J -->|Yes| K[Start with BRUTE FORCE <br> then optimize]
    J -->|No| I

    F -->|Batch processing?| L[Use TWO-PASS MAP ✓ <br> O(n) time, O(n) space]
    I --> M([End])
    D --> M
    E --> M
    G --> M
    K --> M
    L --> M
```
