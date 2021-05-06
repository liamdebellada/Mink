const c = [
	() => import("../../../src/routes/$layout.svelte"),
	() => import("../../../src/routes/$error.svelte"),
	() => import("../../../src/routes/index.svelte"),
	() => import("../../../src/routes/setup.svelte"),
	() => import("../../../src/routes/home.svelte")
];

const d = decodeURIComponent;

export const routes = [
	// src/routes/index.svelte
	[/^\/$/, [c[0], c[2]], [c[1]]],

	// src/routes/setup.svelte
	[/^\/setup\/?$/, [c[0], c[3]], [c[1]]],

	// src/routes/home.svelte
	[/^\/home\/?$/, [c[0], c[4]], [c[1]]]
];

export const fallback = [c[0](), c[1]()];