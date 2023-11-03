export default function Home() {
    return (
        <main>
            <h1>Hello!</h1>
            <p>The plan is as follows:</p>
            <ol className="ml-8">
                <li>Create home page</li>
                <li>Add styling to menu links</li>
                <li>
                    Create Articles page to show list of all content, so it can
                    be spidered
                </li>
                <li>
                    Add sitemap
                    https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap
                </li>
                <li>Make site mobile-friendly</li>
                <li>Make site a11y-friendly, including with skip link</li>
                <li>
                    Parse static HTML using this
                    https://medium.com/@uigalaxy7/how-to-render-html-in-react-7f3c73f5cafc
                    <ul>
                        <li>
                            Might be better as Markdown
                            https://github.com/markedjs/marked, but how will
                            this work with, for example, adding classes for
                            Highlight.js to work?
                        </li>
                    </ul>
                </li>
                <li>Find a way to do breadcrumbs with static content</li>
                <li className="line-through">
                    Replace `a` tags with `Link` tags
                </li>
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
