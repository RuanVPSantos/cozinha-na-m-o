import React from 'react';
import { marked } from 'marked';
import './MarkdownViewer.css'; // Assumindo que você tem um arquivo CSS para o componente

interface MarkdownViewerProps {
    content: string;
}

const MarkdownViewer: React.FC<MarkdownViewerProps> = ({ content }) => {
    return (
        <div
            className="markdown-viewer"
            dangerouslySetInnerHTML={{ __html: marked(content) }}
        />
    );
};

export default MarkdownViewer;
