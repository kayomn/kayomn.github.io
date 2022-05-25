
const url = "https://cms.kayomn.net/"

/**
 * Fetches all blog posts constrained available within the query constraints applied.
 *
 * The following query constraints may be supplied as fields on an object:
 *
 *   * `limit`: Maximum number of blog posts to be returned from the offset.
 *
 *     The default `limit` is whatever the server responding to the request decides, and in fact
 *     may decide to return less than `limit` items, but never more. Therefore, it is recommended
 *     that queries be performed small batches, rather than as bulk operations.
 *
 *   * `offset`: Number of elements to skip from the top of the manifest, offsetting the `limit`
 *     property as a consequence.
 *
 *     The default `offset` is `0`.
 *
 *   * `page`: Number of "pages" to skip, as defined by `limit * pageIndex`.
 *
 *     The default `page` is `0`.
 *
 *   * `search`: Textual term to look for in all text fields of blog data, allowing for constrained
 *     queries defined by an end-user.
 *
 *     The default `search` is nothing.
 *
 * @param {object} query Descriptor to specify things like `limit` (inclusive) or `offset`.
 * @returns @see Promise of an object with a post object `data` array or an `error` string.
 */
 export const fetchAllBlogPosts = query => {
	const queryURL = `${url}items/blog`
	const queryParams = []

	if (query.limit) queryParams.push(`limit=${query.limit}`)

	if (query.offset) queryParams.push(`offset=${query.offset}`)

	if (query.page) queryParams.push(`page=${query.page}`)

	if (query.search) queryParams.push(`search=${query.search}`)

	return fetch(queryParams.length ? `${queryURL}?${queryParams.join("&")}` : queryURL)
			.then(response => response.json())
}

/**
 * Fetches a specific blog post by its post ID.
 *
 * @param {string} postID URL-safe identifier referencing a specific blog post.
 * @returns @see Promise of an object with a post `data` object or an `error` string.
 */
export const fetchBlogPost = postID => fetch(`${url}items/blog/${postID}`)
										.then(response => response.json())
