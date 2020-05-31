import { waitForElement, screen } from "@testing-library/dom";

const defaultTimeout = {
  timeout: 10000
};

export async function doRemoveTagModalFlow() {
  try {
    await waitForElement(
      () => screen.getByText("Find Support or Report Comment"),
      defaultTimeout
    );
  } catch (e) {
    await waitForElement(
      () => screen.getByText("Please select a problem to continue"),
      defaultTimeout
    );
  }

  const spamButton = await waitForElement(
    () => screen.getByText("Spam"),
    defaultTimeout
  );

  spamButton.closest("button").click();

  const nextButton = await waitForElement(
    () => document.querySelector("button[aria-disabled='false']"),
    defaultTimeout
  );

  nextButton.click();

  const firstRemoveTagButton = await waitForElement(
    () => screen.getByText("Remove tag"),
    defaultTimeout
  );

  firstRemoveTagButton.closest("a").click();

  const finalRemoveTagButton = await waitForElement(
    () => screen.getByText("Remove tag"),
    defaultTimeout
  );

  finalRemoveTagButton.closest("button").click();

  try {
    const successRemoveTag = await waitForElement(
      () => screen.getByText("Tag removed"),
      defaultTimeout
    );
  } catch (e) {}

  const doneButton = await waitForElement(
    () => screen.getByText("Done"),
    defaultTimeout
  );

  doneButton.click();

  return true;
}
