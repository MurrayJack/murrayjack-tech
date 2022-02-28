import * as React from 'react';
import Layout from '../../components/layout';
import Page from '../../components/Page';
import Seo from '../../components/seo';
import { Code } from '../../components/code';

const IndexPage = () => {
    const baseAmount = React.createRef<HTMLInputElement>();
    const desiredAmount = React.createRef<HTMLInputElement>();
    const button = React.createRef<HTMLButtonElement>();
    const result = React.createRef<HTMLInputElement>();

    React.useEffect(() => {
        button.current!.addEventListener('click', () => {
            const current = Number(baseAmount.current!.value);
            const desired = Number(desiredAmount?.current!.value);

            result.current!.value = String(desired / current);
            result.current!.focus();
            result.current!.select();
        });
    }, []);

    return (
        <Layout>
            <Seo title="Base64 Decode" />

            <Page>
                <h2>Pixel to EM Converter</h2>

                <input type="number" placeholder="base PX amount" style={{ resize: 'none' }} ref={baseAmount}></input>

                <input type="text" placeholder="Required PX amount" style={{ resize: 'none' }} ref={desiredAmount}></input>

                <button ref={button}>Calculate</button>

                <input type="number" readOnly placeholder="EM Value" style={{ resize: 'none' }} ref={result}></input>

                <Code>
                    {`
button.current.addEventListener("click", () => {
    const current = Number(baseAmount?.current.value)
    const desired = Number(desiredAmount?.current.value)

    result.current.value = String(desired / current)
    result.current.focus()
    result.current.select()
});
`}
                </Code>
            </Page>
        </Layout>
    );
};

export default IndexPage;
