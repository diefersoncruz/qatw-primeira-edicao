import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  const dadosUsuario = {
    cpf: "00000014141",
    senha: "147258",
  };

  await page.goto("http://paybank-mf-auth:3000/");
  await page.getByRole("textbox", { name: "Digite seu CPF" }).click();
  await page
    .getByRole("textbox", { name: "Digite seu CPF" })
    .fill(dadosUsuario.cpf);

  await page.getByRole("button", { name: "Continuar" }).click();
  for (const char of dadosUsuario.senha) {
    await page.getByRole("button", { name: char }).click();
  }

  await page.getByRole("button", { name: "Continuar" }).click();
});
