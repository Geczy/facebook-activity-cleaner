import {
  waitForElement,
  screen,
  waitForElementToBeRemoved
} from "@testing-library/dom";
import { defaultTimeout } from "./constants";

export function isTag(action) {
  return action.getAttribute("ajaxify").indexOf("reportable") !== -1;
}

export async function doRemoveTagModalFlow() {
  const titles = [
    "Find Support or Report Comment",
    "Please select a problem to continue"
  ];

  let title;

  try {
    await waitForElement(() => screen.getByText(titles[0]), defaultTimeout);
    title = titles[0];
  } catch (e) {
    await waitForElement(() => screen.getByText(titles[1]), defaultTimeout);
    title = titles[1];
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
    await waitForElement(() => screen.getByText("Tag removed"), defaultTimeout);
  } catch (e) {}

  const doneButton = await waitForElement(
    () => screen.getByText("Done"),
    defaultTimeout
  );

  doneButton.click();

  await waitForElementToBeRemoved(
    () => screen.getByText(title),
    defaultTimeout
  );
}
