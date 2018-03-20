export interface WriterProps {
    rawText: string;
    onTextChange(event: React.ChangeEvent<HTMLTextAreaElement>): void;
}