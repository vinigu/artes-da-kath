import { render, screen } from "@testing-library/react";
import { ContactCTA } from "./contact-cta";

describe("ContactCTA", () => {
  it("renders the WhatsApp call to action with the correct href", () => {
    render(<ContactCTA />);

    const link = screen.getByRole("link", {
      name: /vamos conversar com a artes da kath no whatsapp/i,
    });
    expect(link).toHaveAttribute(
      "href",
      "https://wa.me/5511977725980?text=Olá!%20Quero%20criar%20minha%20arte%20personalizada.",
    );
    expect(link).toHaveAttribute("target", "_blank");
  });
});
