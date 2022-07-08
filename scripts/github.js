const apiURL = "https://api.github.com"
const blogRepoURL = `${apiURL}/repos/kayomn/kayomn.github.io`

const jsonify = response => response.json()

export const fetchBlogPosts = query => fetch(`${blogRepoURL}/contents/blog`).then(jsonify).then(async blogFolder => {
	const posts = []

	if (blogFolder.length != 0) {
		const asciidoctor = Asciidoctor()
		const defaultLimit = 10
		var limit = query.limit || defaultLimit

		for (const blogFolderEntry of blogFolder.slice().reverse()) {
			if (limit == 0) break

			const blogRepoYearURL = `${blogRepoURL}/contents/blog/${blogFolderEntry.name}`
			const yearFolder = await fetch(blogRepoYearURL).then(jsonify)
			const fileCount = yearFolder.length

			for (const yearFolderEntry of yearFolder.slice(fileCount - Math.min(limit, fileCount), fileCount).reverse()) {
				const name = yearFolderEntry.name
				const file = fetch(`${blogRepoYearURL}/${name}`).then(jsonify)
				const extensionIndex = name.indexOf(".")

				posts.push({
					slug: ((extensionIndex > -1) ? name.substring(0, extensionIndex) : name),
					asciidocument: asciidoctor.load(atob((await file).content)),
				})

				limit -= 1
			}
		}
	}

	return posts
})

export const fetchBlogPost = slug => fetch(`${blogRepoURL}/contents/blog/${slug}.adoc`).then(jsonify).then(async file => {
	return {
		slug,
		asciidocument: Asciidoctor().load(atob(file.content)),
	}
})

/**
 * Fetches a manifest of all public Github repositories belonging to a given user.
 *
 * @param {string} username Identifier of the target Github user.
 * @returns @see Promise of an array containing all public repository metadata for a given user.
 */
export const fetchRepos = username => fetch(`${apiURL}/users/${username}/repos`).then(jsonify)
