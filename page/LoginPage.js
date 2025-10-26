export class LoginPage {
  constructor(page) {
    this.page = page;
    // ✅ Scope to the "Signup" form to avoid multiple matches
    this.signupForm = page.locator('form').filter({ hasText: 'Signup' });
    this.emailInput = this.signupForm.getByPlaceholder('Email Address');
    this.nameInput = this.signupForm.getByPlaceholder('Name');
    this.signupButton = this.signupForm.getByRole('button', { name: 'Signup' });
  }

  async goto() {
    await this.page.goto('https://automationexercise.com/login');
  }

  async login(name, email) {
    await this.nameInput.fill(name);
    await this.emailInput.fill(email);
    await this.signupButton.click();
  }
}
