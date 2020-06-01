chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  fetch(request.input, request.init).then(
    async response => {
      const text = await response.text();
      sendResponse([
        {
          body: text,
          status: response.status,
          statusText: response.statusText
        },
        null
      ]);
    },
    error => {
      sendResponse([null, error]);
    }
  );
  return true;
});
