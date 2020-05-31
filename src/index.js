import { editButton, editButtonRow, actionElements } from "./constants";
import { doRemoveTagModalFlow } from "./deleteTag";
import { doDeletePostModalFlow } from "./deletePost";

const foundEditButtons = [];
const timeout = ms => new Promise(resolve => setTimeout(resolve, ms));

async function asyncForEach(array, callback) {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array);
  }
}

const takeAction = async () => {
  // 2. Find the hidden menu for the previous edit buttons
  const foundActions = [];
  document.querySelectorAll(actionElements).forEach(a => {
    foundActions.push(a);
  });

  // 3. Start taking the actions for the edits found
  return await asyncForEach(foundActions, async action => {
    action.click();

    // Remove it from DOM so we don't run it again
    action.remove();

    // Report/remove tag
    if (action.getAttribute("ajaxify").indexOf("reportable") !== -1) {
      return await doRemoveTagModalFlow();
    }

    // Report/remove tag
    if (action.getAttribute("ajaxify").indexOf("/delete") !== -1) {
      return await doDeletePostModalFlow();
    }
  });
};

// Hide rows which have no available action
const hideRows = () => {
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

    if (!button || button.querySelector(".sx_01e1d8")) {
      row.remove();
    }
  });
};

// Find action buttons currently on the screen
const findActions = () => {
  document.querySelectorAll(editButton).forEach(a => {
    // 1. Open the menus for each visible edit button
    foundEditButtons.push(a);

    // Open the hidden menu to get actionable element
    a.click();

    // Since menu is open, we don't need to be seeing this row
    a.closest(editButtonRow).remove();
  });
};

const getRows = () => {
  hideRows();

  const validRows = [];
  document.querySelectorAll(editButtonRow).forEach(row => {
    row.style.border = "1px solid blue";
    validRows.push(row);
  });

  return validRows;
};

const loadMore = () => {
  const clickForMore = document.querySelector("a[ajaxify*=scroll]");
  if (clickForMore) clickForMore.click();
  else window.scrollTo(0, document.body.scrollHeight);
};

async function main() {
  await timeout(1000);

  if (!getRows().length) {
    loadMore();
  } else {
    console.log("Starting actions on visible rows");

    // Action click exists in DOM
    findActions();

    // Now that the row is processed, call the hidden action menu
    const ww = await takeAction();
    console.log("finished await", ww);
  }

  main();
}

if (window.location.href.indexOf("allactivity") !== -1) {
  chrome.extension.sendMessage({}, function(response) {
    var readyStateCheckInterval = setInterval(function() {
      if (document.readyState === "complete") {
        clearInterval(readyStateCheckInterval);
        main();
      }
    }, 10);
  });
}
