type Params = {
    graphId: string;
};

export default function Page({ params: { graphId } }: { params: Params }) {
    return (
        <div>
            graph page: {graphId}
        </div>
    );
}