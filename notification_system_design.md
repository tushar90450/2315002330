# Comprehensive Technical Documentation & Architecture Report

---

## Part 1: Vehicle Maintenance Scheduler (Question 1)

### 1. Algorithm Overview
The core problem requires selecting an optimal subset of maintenance tasks within a constrained time frame (`availableHours`) to maximize the cumulative operational impact. This problem maps directly onto the classic **0/1 Knapsack Optimization Algorithm**. 

* **Time Complexity:** $\mathcal{O}(N \times W)$ where $N$ is the number of maintenance tasks and $W$ is the total `availableHours`.
* **Space Complexity:** $\mathcal{O}(N \times W)$ for the dynamic programming calculation matrix table.

### 2. Microservice Endpoint Integration
The backend serves this logic via a structured REST endpoint that reads parameter streams dynamically and passes the computational results through an automated validation middleware logger.

* **Target URL Pattern:** `GET http://localhost:5000/api/schedule/:depotID`
* **Response Signature (Status 200 OK):**
```json
{
  "depotID": 1,
  "availableHours": 10,
  "optimizedResults": {
    "totalImpact": 18,
    "totalDuration": 8,
    "jobsSelected": [
      { "TaskId": "mock-3", "Duration": 3, "Impact": 8 },
      { "TaskId": "mock-1", "Duration": 5, "Impact": 10 }
    ]
  }
}