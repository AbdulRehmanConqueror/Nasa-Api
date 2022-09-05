const DEFAULT_PAGE = 1;
const DEFAULT_LIMIT = 10;
export function pagination(query) {
  const page = Math.abs(query.page) || DEFAULT_PAGE;
  const limit = Math.abs(query.limit) || DEFAULT_LIMIT;
  const skip = (page - 1) * limit;

  return {
    skip,
    limit,
  };
}
