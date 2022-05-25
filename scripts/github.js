
const url = "https://api.github.com/"

/**
 * Fetches a manifest of all public Github repositories belonging to a given user.
 *
 * @param {string} username Identifier of the target Github user.
 * @returns @see Promise of an array containing all public repository metadata for a given user.
 */
export const fetchRepos = username => fetch(`${url}users/${username}/repos`)
										.then(response => response.json())
