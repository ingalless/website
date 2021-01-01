interface EventInterface {
  type: "VISIT";
  page: string;
}
const logEvent = async (event: EventInterface) => {
  await fetch("/api/log", {
    method: "post",
    body: JSON.stringify(event),
  });
};

export { logEvent };
