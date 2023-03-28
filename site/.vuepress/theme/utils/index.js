// 没用上

function toFormattedDate(date) {
  return new Date(date).toLocaleDateString("zh-CN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function isExternalLink(link) {
  return /^(https?:|mailto:|tel:)/.test(link);
}