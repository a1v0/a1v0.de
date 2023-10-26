import styles from "./page.module.css";

export default function Home() {
    return (
        <main className={styles.main}>
            <h1>Hello!</h1>
            <p>The plan is as follows:</p>
            <ol style={{ marginLeft: "40px" }}>
                <li>Replace Bootstrap with Tailwind</li>
                <li>Create header bar</li>
                <li>Create footer bar</li>
                <li>
                    Parse static HTML using this
                    https://medium.com/@uigalaxy7/how-to-render-html-in-react-7f3c73f5cafc
                </li>
                <li>Find a way to do breadcrumbs with static content</li>
                <li>Create table of contents component</li>
                <li style={{ textDecoration: "line-through" }}>
                    Enable server-side rendering (see
                    https://www.freecodecamp.org/news/server-side-rendering-your-react-app-in-three-simple-steps-7a82b95db82e)
                </li>
                <li style={{ textDecoration: "line-through" }}>
                    Create a colour scheme
                </li>
                <li style={{ textDecoration: "line-through" }}>
                    Find way to import static HTML or markdown content
                </li>
            </ol>
        </main>
    );
}
