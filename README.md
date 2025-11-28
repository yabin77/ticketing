# Ticketing (Microservices Playground)

A ticket marketplace built with **Node.js, Next.js, Docker, Kubernetes and NATS**.  
Users can sign up, create tickets, and purchase them through separate microservices.

This is a **personal learning project** for exploring microservices architecture (event-driven design, service isolation, local Kubernetes, etc.).

---

## Tech Stack

### Backend & Services

- **Node.js + TypeScript**
- **Express** for HTTP APIs
- **MongoDB** – database per service
- **NATS Streaming** – event bus / message broker

**Microservices：**

- `auth` – user signup / signin / signout / current user
- `tickets` – create / update / list / show tickets
- `orders` – create / cancel orders for tickets
- `payments` – handle payments for orders (integrates with Stripe test keys)
- `expiration` – background service for order expiration

### Frontend

- **Next.js** client app (`client` service)
- Server-side rendered pages
- Exposed via Kubernetes Ingress at:

  ```text
  https://ticketing.dev