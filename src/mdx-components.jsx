// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including components from
// other libraries.

// This file is required to use MDX in `app` directory.
export function useMDXComponents(components) {
    return {
        // Allows customizing built-in components, e.g. to add styling.
        // h1: ({ children }) => <h1 style={{ fontSize: "100px" }}>{children}</h1>,
        ...components,
        h2: ({ children }) => <h2 className="text-200 mt-4 mb-3">{children}</h2>,
        h4: ({ children }) => <h4 className="text-500 mt-3 mb-0">{children}</h4>
    }
};