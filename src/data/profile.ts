export const MOCK_PROFILE = {
  nome: "Alexandre",
  sobrenome: "Sousa",
  email: "alexandre@exemplo.com",
  senhaMascarada: "••••••••",
  iniciais: "AS",
} as const;

export const PROFILE_MENU_ITEMS = [
  { id: "nome", label: "Nome", valueKey: "nome" as const },
  { id: "sobrenome", label: "Sobrenome", valueKey: "sobrenome" as const },
  { id: "email", label: "E-mail", valueKey: "email" as const },
  { id: "senha", label: "Senha", valueKey: "senhaMascarada" as const },
  { id: "resetar-senha", label: "Resetar senha", action: true },
  { id: "seguranca", label: "Segurança", action: true },
] as const;
