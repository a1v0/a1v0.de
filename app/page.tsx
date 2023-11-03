export default function Home() {
    return (
        <main>
            <div className="bg-accent-colour">
                <header className="clear-gutters py-16">
                    <h1 className="m-auto">
                        <span className="block">a1v0.de</span>
                        <span className="block lowercase text-softer-black">
                            The wittering of someone you've never met.
                        </span>
                    </h1>
                </header>
            </div>
            <article className="clear-gutters">
                <h2>What to expect</h2>
                <p></p>
            </article>
            <ol className="ml-8 list-decimal">
                <li>Create home page</li>
                <li>
                    Create Articles page to show list of all content, so it can
                    be spidered
                </li>
                <li>
                    Add sitemap
                    https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap
                </li>
                <li>Make site mobile-friendly</li>
                <li>
                    Make site a11y-friendly
                    <ul className="ml-8 list-disc">
                        <li>Semantic HTML</li>
                        <li>Skip link</li>
                        <li>Anything else</li>
                    </ul>
                </li>
                <li>
                    Parse static HTML using this
                    https://medium.com/@uigalaxy7/how-to-render-html-in-react-7f3c73f5cafc
                    <ul className="ml-8 list-disc">
                        <li>
                            Might be better as Markdown
                            https://github.com/markedjs/marked, but how will
                            this work with, for example, adding classes for
                            Highlight.js to work?
                        </li>
                    </ul>
                </li>
                <li>Attempt to use content tags</li>
                <li>Find a way to do breadcrumbs with static content</li>
                <li className="line-through">
                    Replace `a` tags with `Link` tags
                </li>
                <li className="line-through">Add styling to menu links</li>
                <li className="line-through">Create menu component</li>
                <li className="line-through">Create footer bar</li>
                <li className="line-through">
                    Replace Bootstrap with Tailwind
                </li>
                <li className="line-through">Create header bar</li>
                <li className="line-through">
                    Enable server-side rendering (see
                    https://www.freecodecamp.org/news/server-side-rendering-your-react-app-in-three-simple-steps-7a82b95db82e)
                </li>
                <li className="line-through">Create a colour scheme</li>
                <li className="line-through">
                    Find way to import static HTML or markdown content
                </li>
            </ol>
        </main>
    );
}
