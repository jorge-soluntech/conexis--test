function subscribe(
  eventName: string,
  listener: EventListenerOrEventListenerObject
): void {
  document.addEventListener(eventName, listener);
}

function unsubscribe(
  eventName: string,
  listener: EventListenerOrEventListenerObject
): void {
  document.removeEventListener(eventName, listener);
}

function publish<T>(eventName: string, data: T): void {
  const event = new CustomEvent<T>(eventName, { detail: data });
  document.dispatchEvent(event);
}

export { publish, subscribe, unsubscribe };
