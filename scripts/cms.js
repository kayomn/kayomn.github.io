
const url = "https://cms.kayomn.net/"

/**
 * @param {string} postID URL-safe identifier referencing a specific blog post.
 * @returns A @see Promise of an object with a post `data` object or an `error` string.
 */
export const fetchBlogPost = postID => fetch(`${url}items/blog/${postID}`)
										.then(response => response.json())

/**
 * @param {object} options Descriptor to specify things like `limit` (inclusive) or `offset`.
 * @returns A @see Promise of an object with a post object `data` array or an `error` string.
 */
export const fetchBlogPosts = options => fetch(`${url}items/blog?limit=${options.limit}`)
										.then(response => response.json())
