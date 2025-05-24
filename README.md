# JICC

---

## 🧰 Tech Stack

![Ruby](https://img.shields.io/badge/Ruby-CC342D?style=for-the-badge&logo=ruby&logoColor=white)
![Rails](https://img.shields.io/badge/Rails-CC0000?style=for-the-badge&logo=rubyonrails&logoColor=white)
![Amazon S3](https://img.shields.io/badge/Amazon%20S3-569A31?style=for-the-badge&logo=amazon-aws&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

---

## 🚀 Getting Started

### 1. Prerequisites

- Ruby 3.2.2 (use [RVM](https://rvm.io/) or [rbenv](https://github.com/rbenv/rbenv))
- PostgreSQL (local or Heroku)
- Node.js
- [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli) (if using Heroku DB)

### 2. Setup

```bash
# Clone the repo
# cd into the project directory
bin/setup
```

- This installs dependencies, prepares the database, and starts the dev server (with Tailwind watcher, etc.).
- If you want to skip starting the server: `bin/setup --skip-server`

### 3. Environment Variables

- Copy `.env.example` to `.env` and fill in your secrets (e.g., `DATABASE_URL`).
- If using Heroku Postgres, get your `DATABASE_URL` with:
  ```bash
  heroku config:get DATABASE_URL -a your-heroku-app-name
  ```

### 4. Running the Server

```bash
bin/dev
# or
bin/rails server
```

### 5. Running Tests

```bash
bin/rails test
```

### 6. Linting

```bash
bundle exec rubocop
```

### 7. Useful Scripts

- `bin/setup` — Full setup for new devs
- `bin/dev` — Unified dev server (Rails, Tailwind, etc.)
- `bin/rails test` — Run all tests
- `bundle exec rubocop` — Lint Ruby code

---

Happy coding!
