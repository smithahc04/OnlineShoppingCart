const { test, expect } = require("@playwright/test");


test("Add product to cart", async ({ page }) => {

    await page.goto("/");

    await page.getByRole("button", { name: "Add to Cart" }).first().click();

    await expect(page.locator("#cart")).toContainText("Laptop");

    await expect(page.locator("#total")).toHaveText("50000");
});


test("Increase product quantity", async ({ page }) => {

    await page.goto("/");

    await page.getByRole("button", { name: "Add to Cart" }).first().click();

    await page.getByRole("button", { name: "+" }).click();

    await expect(page.locator("#cart")).toContainText("Quantity:");

    await expect(page.locator("#total")).toHaveText("100000");
});


test("Checkout with empty cart", async ({ page }) => {

    await page.goto("/");

    await page.getByRole("button", { name: "Place Order" }).click();

    await expect(page.locator("#message"))
        .toHaveText("Please add a product to the cart.");
});


test("Reject invalid email", async ({ page }) => {

    await page.goto("/");

    await page.getByRole("button", { name: "Add to Cart" }).first().click();

    await page.locator("#name").fill("Madiha");
    await page.locator("#email").fill("madiha@gmail");
    await page.locator("#phone").fill("9876543210");
    await page.locator("#address").fill("Bangalore");

    await page.getByRole("button", { name: "Place Order" }).click();

    await expect(page.locator("#message"))
        .toHaveText("Please enter a valid email.");
});


test("Reject invalid phone number", async ({ page }) => {

    await page.goto("/");

    await page.getByRole("button", { name: "Add to Cart" }).first().click();

    await page.locator("#name").fill("Madiha");
    await page.locator("#email").fill("madiha@gmail.com");
    await page.locator("#phone").fill("12345");
    await page.locator("#address").fill("Bangalore");

    await page.getByRole("button", { name: "Place Order" }).click();

    await expect(page.locator("#message"))
        .toHaveText("Phone number must contain 10 digits.");
});


test("Remove product from cart", async ({ page }) => {

    await page.goto("/");

    await page.getByRole("button", { name: "Add to Cart" }).first().click();

    await expect(page.locator("#cart")).toContainText("Laptop");

    await page.getByRole("button", { name: "Remove" }).click();

    await expect(page.locator("#cart")).not.toContainText("Laptop");

    await expect(page.locator("#total")).toHaveText("0");
});


test("Place valid order", async ({ page }) => {

    await page.goto("/");

    await page.getByRole("button", { name: "Add to Cart" }).first().click();

    await page.locator("#name").fill("Madiha");
    await page.locator("#email").fill("madiha@gmail.com");
    await page.locator("#phone").fill("9876543210");
    await page.locator("#address").fill("Bangalore");

    await page.getByRole("button", { name: "Place Order" }).click();

    await expect(page.locator("#message"))
        .toHaveText("Order placed successfully!");
});