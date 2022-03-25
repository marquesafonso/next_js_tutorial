import Document, { Html, Head, Main, NextScript} from 'next/document'


// The properties defined here like the meta tag will be global to all pages

class CustomDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <meta property="custom" content="bla"></meta>
                </Head>
                <body>
                    <Main/>
                </body>
                <NextScript/>
            </Html>
        )
    }
}

export default CustomDocument;