import type {Metadata} from "next";

export const metadata: Metadata = {
    title: 'SEO Title',
    description: 'SEO description',
    keywords: ['About Page', 'Bastian', 'Information', '...']
};

export default function AboutPage() {

    return (
        <>
            <h1 className="text-7xl">About</h1>
        </>
    );
}
