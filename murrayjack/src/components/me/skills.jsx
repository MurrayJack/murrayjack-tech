import * as React from "react";
import { H4 } from "../h4";

const Skills = () => (
  <>
    <article>
      <H4 caption="Key Skills" type="kskills" />

      <ul className="list">
        <li>React.js.</li>
        <li>HTML, CSS, LESS.</li>
        <li>Javascript, Typescript.</li>
        <li>Figma.</li>
        <li>Jest, React Testing Library, Enzyme.</li>
        <li>GraphQL, Apollo.</li>
        <li>Team Leadership.</li>
        <li>Docker.</li>
      </ul>
    </article>

    <article>
      <H4 caption="Other Skills" type="oskills" />
      <ul className="list">
        <li>Accessibility (WCAG 2.1).</li>
        <li>App Center. TestFlight, App Store Connect.</li>
        <li>Azure.</li>
        <li>C#, .NET Core, MVC, Xamarin.</li>
        <li>D3.js.</li>
        <li>Gatsby.</li>
        <li>GitHub, GitHub Actions.</li>
        <li>Jira, Bit Bucket, Bamboo.</li>
        <li>jQuery.</li>
        <li>Netlify.</li>
        <li>Next.js.</li>
        <li>NPM.</li>
        <li>Qualified Scrum Master.</li>
        <li>Sentry.io error monitoring.</li>
        <li>SQL Server.</li>
        <li>Styled Components.</li>
      </ul>
    </article>
  </>
);

export default Skills;
