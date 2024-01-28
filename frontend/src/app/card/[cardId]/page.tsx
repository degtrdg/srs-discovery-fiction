"use client";
import Card from "@/components/Card";

type Params = {
     cardId: string;
};

export default function Page({ params: {  cardId } }: { params: Params }) {
    return (
        <div>
            <Card frontContent="Front" backContent="Back" />
        </div>
    );
}