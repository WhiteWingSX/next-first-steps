import type {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Contact',
    description: 'this is a contact page for your help',
    keywords: ['Contact Page', 'Bastian', 'help', '...']
};

export default function ContactPage() {

    return (
        <>
            <h1 className="text-7xl">Contact</h1>
        </>
    );
}
