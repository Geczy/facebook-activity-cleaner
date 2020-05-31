import { editButton, editButtonRow, actionElements } from "./constants";
import { doRemoveTagModalFlow, isTag } from "./deleteTag";
import { doDeletePostModalFlow, isPost } from "./deletePost";

const timeout = ms => new Promise(resolve => setTimeout(resolve, ms));

// Hide rows which have no available action
const hideCompletedActivities = () => {
  // Hide useless headings
  document
    .querySelectorAll('div[aria-level="4"],div[aria-level="3"]')
    .forEach(heading => heading.remove());
  document
    .querySelectorAll("div.fbTimelineSectionTransparent > div > div")
    .forEach(heading => {
      heading.style["background-color"] = "transparent";
      heading.style["border"] = "none";
      heading.style["padding-bottom"] = "0px";
    });

  document.querySelectorAll(editButtonRow).forEach(row => {
    const button = row.querySelector(editButton);

    // .sx_01e1d8 is the icon for "hidden from timeline"
    if (!button || button.querySelector(".sx_01e1d8")) {
      row.remove();
    }
  });
};

const getIncompleteActivities = () => {
  hideCompletedActivities();

  const validRows = Array.from(document.querySelectorAll(editButtonRow));
  validRows.forEach(row => (row.style.border = "1px solid blue"));

  return validRows;
};

const loadMoreActivities = () => {
  const clickForMore = document.querySelector("a[ajaxify*=scroll]");
  if (clickForMore) clickForMore.click();
  else window.scrollTo(0, document.body.scrollHeight);
};

// Find action buttons currently on the screen
const findActions = () => {
  document.querySelectorAll(editButton).forEach(a => {
    // 1. Open the hidden menu to get actionable element
    a.click();

    // Since menu is open, we don't need to be seeing this row
    a.closest(editButtonRow).remove();
  });
};

const takeAction = async () => {
  // 2. Find the hidden menu for the previous edit buttons
  const foundActions = Array.from(document.querySelectorAll(actionElements));

  // 3. Start taking the actions for the edits found
  for (const action of foundActions) {
    action.click();

    // Remove it from DOM so we don't run it again
    action.remove();

    // Report/remove tag
    if (isTag(action)) {
      await doRemoveTagModalFlow();
    }

    // Delete post
    else if (isPost(action)) {
      await doDeletePostModalFlow();
    }
  }
};

async function main() {
  await timeout(1000);

  if (!getIncompleteActivities().length) {
    loadMoreActivities();
  } else {
    console.log("Starting actions on visible activities");

    // Action click exists in DOM
    findActions();

    // Now that the row is processed, call the hidden action menu
    await takeAction();
  }

  main();
}

if (window.location.href.indexOf("allactivity") !== -1) {
  chrome.extension.sendMessage({}, () => {
    const readyStateCheckInterval = setInterval(() => {
      if (document.readyState === "complete") {
        clearInterval(readyStateCheckInterval);
        main();
      }
    }, 10);
  });
}
