describe("There is a landing page", () => {
  it(" - News section", () => {
    cy.visit("/").findByText(/news/i);
  });
});
