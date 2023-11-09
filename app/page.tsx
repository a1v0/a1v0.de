export default function Home() {
    const mvp = (
        <span className="small-caps text-xs font-extrabold text-[red]">
            MVP:
        </span>
    );

    return (
        <main>
            <div className="bg-accent-colour">
                <header className="clear-gutters py-16">
                    <h1 className="m-auto p-0">
                        <span className="block">a1v0.de</span>
                        <span className="block lowercase text-softer-black">
                            The wittering of someone you've never met.
                        </span>
                    </h1>
                </header>
            </div>
            <div className="bg-background-white">
                <article className="clear-gutters">
                    <h2>What to expect</h2>
                    <p>
                        Like all developers, I spend my life in agony. Hacking
                        away through the jungle of bad documentation with my
                        blunt machete, I curse the lack of information on
                        whichever topic I am currently struggling with.
                    </p>
                    <p>
                        On this site, I aim to post useful bits of knowledge
                        about this and that, in the hope that I might spare
                        another dev all the anguish that I go through.
                    </p>
                    <h2>Semper idem</h2>
                    <p>
                        I don't revise or update my writings once published, if
                        I can avoid it. In other words, there is a chance that
                        my content is out of date when you read it&mdash;bugs
                        get fixed, software gets updated, but my site stays as
                        it always was. There's also a chance that what I write
                        is inaccurate, though I do try to verify what I write as
                        best as possible.
                    </p>
                </article>
            </div>
            <div className="bg-background-grey">
                <article className="clear-gutters py-1">
                    <h2>About me</h2>
                    <p>
                        I'm a humble 1X programmer (you read that right), but
                        I'm keen as hell; I'm always down to learn something
                        new. My current interests include C# and a11y, but I
                        also care deeply about the difference between the -,
                        &ndash; and &mdash; characters.
                    </p>
                </article>
            </div>
            <ol className="ml-8 list-decimal">
                <li>Make site mobile-friendly</li>
                <li>Add linting to repo</li>
                <li>Add disclaimers etc.</li>
                <li>
                    Create Articles page to show list of all content, so it can
                    be spidered
                </li>
                <li>
                    Attempt to use content tags (I think Contentlayer can do
                    this)
                </li>
                <li>Deploy on AWS?</li>
                <li>Find a way to do breadcrumbs with static content</li>
                <li>
                    Make site a11y-friendly
                    <ul className="ml-8 list-disc">
                        <li>Semantic HTML</li>
                        <li>Skip link</li>
                        <li>Anything else</li>
                    </ul>
                </li>
            </ol>
        </main>
    );
}
