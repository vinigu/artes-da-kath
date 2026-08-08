import { render, screen } from "@testing-library/react";
import { ContactCTA } from "./contact-cta";

describe("ContactCTA", () => {
  it("renders the WhatsApp call to action with the correct href", () => {
    render(<ContactCTA />);

    const link = screen.getByRole("link", {
      name: /falar com a artes da kath no whatsapp/i,
    });
    expect(link).toHaveAttribute(
      "href",
      "https://wa.me/5511977725980?text=Olá!%20Gostaria%20de%20fazer%20uma%20cotação%20para%20uma%20arte.",
    );
    expect(link).toHaveAttribute("target", "_blank");
  });
});
