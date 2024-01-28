type TopicCardProps = {
    topic: string;
    topicImage?: string;
};

export default function TopicCard({ topic, topicImage }: TopicCardProps) {
    return (
        <div>
            {topic}
        </div>
    )
}