# Choose Approach 

```mermaid
START: Need to solve Two Sum?
│
├─ Is array already sorted?
│  ├─ YES → Need original indices?
│  │  ├─ NO → Use SLIDING WINDOW ⭐⭐ (O(n), O(1))
│  │  └─ YES → Use TWO POINTER ✓ (O(n log n), O(n))
│  │
│  └─ NO → What do you need?
│     ├─ Just boolean (exists?) → Use SET ✓ (O(n), O(n))
│     ├─ Actual indices → Is this production code?
│     │  ├─ YES → Use HASH MAP ⭐ (O(n), O(n))
│     │  └─ NO → Learning?
│     │     ├─ YES → Start with BRUTE FORCE, then optimize
│     │     └─ NO → Use HASH MAP ⭐ (safest choice)
│     │
│     └─ Batch processing? → Use TWO-PASS MAP ✓ (O(n), O(n))
│
END: Implement chosen approach
```
