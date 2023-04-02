import * as turbo from '@hotwired/turbo'
turbo.start()

function beforeRender(event) {
  document.removeEventListener('turbo:before-render', beforeRender)
  event.preventDefault();
  if (!document.startViewTransition) {
    event.detail.resume()
    console.debug("Your browser doesn't support the View Transition API")
    // View Transition API not supported, fallback
    return;
  }
  document.startViewTransition(() => {
    event.detail.resume();
  });
}


document.addEventListener('turbo:load', () => {
  document.addEventListener('turbo:before-render', beforeRender)
})