import { waitForElement, screen } from "@testing-library/dom";

const defaultTimeout = {
  timeout: 10000
};

export function isPost(action) {
  return action.getAttribute("ajaxify").indexOf("/delete") !== -1;
}

export async function doDeletePostModalFlow() {
  await waitForElement(() => screen.getByText("Delete Post?"), defaultTimeout);

  const deleteButton = await waitForElement(
    () =>
      document.querySelector('form[action*="delete"] button[type="submit"]'),
    defaultTimeout
  );

  deleteButton.click();
  return true;
}
