export default function Home() {
    const mvp = (
        <span className="small-caps text-xs font-extrabold text-[red]">
            MVP:
        </span>
    );

    return (
        <main className="grow bg-background-white">
            <div className="bg-accent-colour">
                <header className="clear-gutters py-16">
                    <h1 className="m-auto p-0">
                        <span className="block">a1v0.de</span>
                        <span className="block lowercase text-softer-black">
                            The wittering of someone you&apos;ve never met.
                        </span>
                    </h1>
                </header>
            </div>
            <div>
                <article className="clear-gutters text-content">
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
                        I don&apos;t revise or update my writings once
                        published, if I can avoid it. In other words, there is a
                        chance that my content is out of date when you read
                        it&mdash;bugs get fixed, software gets updated, but my
                        site stays as it always was. There&apos;s also a chance
                        that what I write is inaccurate, though I do try to
                        verify what I write as best as possible.
                    </p>
                </article>
            </div>
            <div className="bg-background-grey">
                <article className="clear-gutters text-content">
                    <h2>About me</h2>
                    <p>
                        I&apos;m a humble 1X programmer (you read that right),
                        but I&apos;m keen as hell; I&apos;m always down to learn
                        something new. My current interests include C# and a11y,
                        but I also care deeply about the difference between the
                        -, &ndash; and &mdash; characters.
                    </p>
                </article>
            </div>
        </main>
    );
}
