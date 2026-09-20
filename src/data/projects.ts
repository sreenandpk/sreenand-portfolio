import { ProjectItem } from '@/types/portfolio';

export const projectsData: ProjectItem[] = [
  {
    slug: 'trading-discipline-ai-copilot',
    title: 'Trading Discipline AI Copilot',
    shortDescription:
      'Trading Discipline AI Copilot is a cloud-native AI and trading platform built with FastAPI microservices, RAG workflows, deterministic risk evaluation, paper-trading execution, PostgreSQL, Redis, Qdrant, Docker, Kubernetes, and Azure AKS.',
    fullDescription:
      'Trading Discipline AI Copilot is a multi-repository microservices platform featuring isolated FastAPI services (Authentication Service, Market Service, AI Service, and Infrastructure). Built with Supabase PostgreSQL (utilizing separate schemas for Auth, Market, and AI for logical data separation), Redis & Celery for background processing, Qdrant vector database, Gemini LLM + LangGraph RAG workflows, a deterministic risk engine (Agent 4), a deterministic execution gate (Agent 5), Azure AKS + ACR deployment with NGINX Gateway Fabric, Jenkins CI/CD with Git-SHA image tagging, Prometheus + Grafana + Alertmanager + Slack monitoring, and Razorpay subscription management with backend HMAC verification.',
    problem:
      'Trading platforms require strict risk management and execution discipline to prevent emotional trading, while combining real-time market data analysis, technical signal evaluation, and news contextualization without relying on nondeterministic LLM decisions.',
    solution:
      'Engineered a decoupled 4-repository microservices system where LLMs (Gemini/LangGraph) handle market signal and news RAG analysis via Qdrant, while hard trade execution rules are strictly enforced by deterministic risk evaluation and execution gate engines (Agents 4 & 5) before sending paper fills to the Market Service.',
    architectureDescription:
      'Frontend hosted on Vercel connecting to three FastAPI backend microservices (Auth, Market, AI) deployed on Azure Kubernetes Service (AKS) via Azure Container Registry (ACR), routed using NGINX Gateway Fabric & Kubernetes Gateway API. Relational data lives in Supabase PostgreSQL across schema-isolated boundaries (Auth, Market, AI). Background tasks use Celery and Redis, vector retrieval uses Qdrant, payment verification uses backend Razorpay HMAC validation, CI/CD runs via Jenkins with Git commit SHA tagging, and observability is powered by Prometheus, Grafana, Alertmanager, and Slack notifications.',
    technologies: [
      'Python',
      'FastAPI',
      'PostgreSQL',
      'Supabase',
      'SQLAlchemy',
      'Alembic',
      'Redis',
      'Celery',
      'Qdrant',
      'Docker',
      'Kubernetes',
      'Azure AKS',
      'Azure ACR',
      'Jenkins',
      'Prometheus',
      'Grafana',
      'Alertmanager',
      'RAG',
      'LLM Applications',
      'Razorpay',
      'Pytest',
      'Semgrep',
    ],
    keyDecisions: [
      'Architected multi-repository structure with isolated Supabase PostgreSQL schemas to ensure logical data separation and independent service deployment.',
      'Engineered Agent 4 (Deterministic Risk Engine) and Agent 5 (Deterministic Execution Gate) to enforce hard risk limits, portfolio exposure checks, and trade proposal idempotency without relying on LLM outputs.',
      'Integrated backend Razorpay HMAC signature verification prior to activating PRO user subscriptions.',
      'Configured PrometheusRule and Alertmanager to route firing infrastructure alerts directly to Slack.',
    ],
    challenges: [
      'Designing a seamless trade flow (Proposal -> Risk Evaluation -> Execution Gate -> Execution Intent -> Market Service -> Paper Fill -> Executed) with robust idempotency.',
      'Optimizing load-test reliability using Locust, Pytest-Asyncio, and handling HTTP 429 rate limits via test-user assignment.',
    ],
    githubUrl: 'https://github.com/sreenandpk',
    featured: true,
    publishedAt: '2025-11-15',
  },
  {
    slug: 'carestream-clinical-monitoring-platform',
    title: 'CareStream Clinical Monitoring Platform',
    shortDescription:
      'CareStream is a prototype clinical monitoring platform demonstrating real-time patient telemetry, medical device integration, clinical context management, role-based access control, WebSocket communication, asynchronous processing, and AI-assisted telemetry analysis.',
    fullDescription:
      'CareStream is a prototype clinical monitoring application that connects medical sensors (ESP32 with MAX30102 for heart rate and SpO2 telemetry) with a Django/DRF backend and Next.js frontend. Features ward, room, bed, and patient hierarchy, nurse assignments, real-time presence, WebSockets via Django Channels, history review and replay, AI anomaly detection using Scikit-Learn, Pandas, and NumPy, JWT authentication, role-based access control, OTP verification, and audit logging.',
    problem:
      'Clinical telemetry monitoring requires low-latency real-time data streaming, medical device integration, and automated anomaly detection across complex hospital ward and patient hierarchies.',
    solution:
      'Built a full-stack prototype platform using Django, Django REST Framework, Django Channels, WebSockets, PostgreSQL, Redis, and Celery, paired with a Next.js/React frontend (Tailwind CSS, Zustand) and scikit-learn machine learning for telemetry anomaly detection.',
    architectureDescription:
      'Demonstrates clinical context management with WebSockets for real-time sensor updates, backed by Docker Compose for local execution and designed for AWS cloud deployment (AWS ECS, AWS RDS PostgreSQL, AWS ECR, AWS ElastiCache Redis, AWS Secrets Manager, AWS ALB, AWS VPC, and AWS WAF).',
    technologies: [
      'Next.js',
      'React',
      'Tailwind CSS',
      'Zustand',
      'Django',
      'Django REST Framework',
      'PostgreSQL',
      'Django Channels',
      'Celery',
      'Redis',
      'WebSockets',
      'Scikit-Learn',
      'Pandas',
      'NumPy',
      'Docker',
      'AWS ECS',
      'AWS RDS',
    ],
    keyDecisions: [
      'Selected Django Channels and WebSockets to stream continuous telemetry data from ESP32 sensors to frontend monitoring dashboards.',
      'Implemented scikit-learn anomaly detection algorithms to analyze heart rate and SpO2 telemetry history.',
      'Structured hierarchical data models for ward, room, bed, and patient organization with audit logging and RBAC.',
    ],
    challenges: [
      'Managing asynchronous WebSocket connections and Redis message broadcasting across high-frequency simulated telemetry channels.',
    ],
    githubUrl: 'https://github.com/sreenandpk',
    featured: true,
    publishedAt: '2025-08-20',
  },
  {
    slug: 'modular-ecommerce-backend-engine',
    title: 'Modular E-Commerce Backend Engine',
    shortDescription:
      'Scalable modular E-commerce backend built with Django, Django REST Framework, and PostgreSQL.',
    fullDescription:
      'Engineered a modular E-commerce backend featuring isolated Django apps for users, products, cart, orders, and payments. Provides separate user and admin REST APIs, role-based access control (RBAC), JWT authentication, category management, product CRUD, filtering, DRF pagination, wishlist, reviews, transaction-safe order processing, revenue aggregation, and administrative reporting by Sreenand.',
    problem:
      'Monolithic e-commerce backends often suffer from tightly coupled domain logic, making order processing prone to race conditions and admin reporting slow.',
    solution:
      'Structured a clean, modular Django architecture with atomic database transactions for order placement, automated inventory adjustment, DRF pagination, and JWT authentication.',
    architectureDescription:
      'Django REST Framework with PostgreSQL database, JWT authentication, modular apps architecture, custom permissions, and Redis caching.',
    technologies: [
      'Python',
      'Django',
      'Django REST Framework',
      'PostgreSQL',
      'JWT',
      'Redis',
      'Docker',
      'REST API',
    ],
    keyDecisions: [
      'Enforced database-level atomic transactions during order processing to guarantee inventory consistency.',
      'Implemented role-based permissions separating customer operations from administrative inventory and revenue dashboards.',
    ],
    challenges: [
      'Ensuring transaction-safe order completion under concurrent checkout operations.',
    ],
    githubUrl: 'https://github.com/sreenandpk',
    featured: true,
    publishedAt: '2026-02-10',
  },
];
