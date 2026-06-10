# Vehicle Maintenance & Logging System - Technical Design

## 1. System Architecture Diagram Representation
Client Request ──> Local Endpoint (:5000) ──> Controller Layer ──> Reusable Middleware ──> Central Log API (:4.224.186.213)

## 2. Framework & Constraints Compliance
- **Core Server Framework:** Node.js, Express.js.
- **Middleware Protocol:** Decentralized interceptor logic utilizing secure Axios pipelines.
- **Payload Rules Enforcement:** Direct formatting filters applied via JavaScript object normalization ensuring strict lowercase values across variables.

## 3. Local Endpoint Matrix

### Fetch All Maintenance Schedules
- **Endpoint:** `http://localhost:5000/api/jobs`
- **Method:** `GET`
- **Response Format:** Array of JSON tasks.

### Create New Scheduled Event
- **Endpoint:** `http://localhost:5000/api/jobs`
- **Method:** `POST`
- **Payload Contract:**
  ```json
  {
    "vehicle": "string",
    "issue": "string"
  }