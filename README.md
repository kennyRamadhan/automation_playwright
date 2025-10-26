# 🧪 Playwright E2E Testing Project

Proyek ini menggunakan **[Microsoft Playwright](https://playwright.dev/)** sebagai framework untuk melakukan **automated end-to-end (E2E) testing** pada aplikasi web.  
Struktur proyek ini menerapkan **Fixtures** dan **Page Object Model (POM)** agar test lebih modular, mudah dibaca, dan scalable.

---

## 📋 Table of Contents
1. [Requirements](#requirements)
2. [Installation & Setup](#installation--setup)
3. [Project Structure](#project-structure)
4. [How to Run Tests](#how-to-run-tests)
5. [Custom Fixtures & Page Objects](#custom-fixtures--page-objects)
6. [Examples](#examples)
7. [Playwright Useful Commands](#playwright-useful-commands)
8. [Reports](#reports)
9. [Tips Tambahan](#tips-tambahan)
10. [License](#license)

---

## 🧩 Requirements

Pastikan environment kamu memenuhi requirement berikut sebelum menjalankan test:

| Requirement | Version (Minimal) | Keterangan |
|--------------|------------------|-------------|
| **Node.js** | `>=16.x` | Untuk menjalankan Playwright |
| **npm** | `>=8.x` | Package manager untuk menginstal dependency |
| **Playwright** | `^1.45.0` | Framework utama untuk automation testing |
| **OS** | Windows / macOS / Linux | Mendukung semua platform utama |

---

## ⚙️ Installation & Setup

Ikuti langkah-langkah berikut untuk setup project:

```bash
# 1️⃣ Clone repository
git clone https://github.com/kennyRamadhan/playwright.git
cd playwright-project

# 2️⃣ Install dependencies
npm install

# 3️⃣ Install Playwright browsers (Chromium, Firefox, WebKit)
npx playwright install


📁 playwright-e2e-project/
├── 📁 fixtures/
│   └── baseFixture.js       # Custom fixture untuk extend test (misalnya LoginPage)
│
├── 📁 page/
│   └── LoginPage.js         # Page Object untuk halaman login/signup
│
├── 📁 tests/
│   ├── example-todo.spec.js # Sample test TodoMVC bawaan Playwright
│   ├── playwright-site.spec.js # Sample test situs Playwright.dev
│   └── register.spec.js     # Test menggunakan LoginPage & custom fixture
│
├── package.json
├── playwright.config.js     # (opsional) konfigurasi Playwright global
└── README.md




### How to Run Tests
Run all tests
npx playwright test

Run specific test file
npx playwright test tests/register.spec.js

Run with UI mode (interactive test runner)
npx playwright test --ui

Run in headed mode (tampilkan browser)
npx playwright test --headed

Run in specific browser
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit



Tips Tambahan

Gunakan Page Object Model (POM) untuk setiap halaman agar kode test lebih mudah dirawat.

Gunakan Fixtures untuk mengelola state, seperti login, konfigurasi, atau test data.

Integrasikan dengan CI/CD pipeline (misalnya GitHub Actions atau Azure DevOps) untuk otomatisasi test berkelanjutan.

