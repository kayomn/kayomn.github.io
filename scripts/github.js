
const url = "https://api.github.com/"

/**
 * @param {string} username Identifier of the target Github user.
 * @returns A @see promise of an array containing all public repository metadata for a given user.
 */
export const fetchRepos = username => fetch(`${url}/users/${username}/repos`)
										.then(response => response.json())
