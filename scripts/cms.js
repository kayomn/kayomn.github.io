
const url = "https://cms.kayomn.net/"

/**
 * @param {string} postID URL-safe identifier referencing a specific blog post.
 * @returns A @see Promise of an object with a post `data` object or an `error` string.
 */
export const fetchBlogPost = postID => fetch(`${url}items/blog/${postID}`)
                                        .then(response => response.json())
                                        .catch(reason => {error: reason})

/**
 * @param {number} limit Maximum number of blog posts to fetch (inclusive).
 * @returns A @see Promise of an object with a post object `data` array or an `error` string.
 */
export const fetchBlogPosts = limit => fetch(`${url}items/blog?limit=${limit}`)
                                        .then(response => response.json())
                                        .catch(reason => reason)
