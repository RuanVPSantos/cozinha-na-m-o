import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import './MarkdownViewer.css';
import PropTypes from 'prop-types';

interface MarkdownViewerProps {
    content: string;
}

const MarkdownViewer: React.FC<MarkdownViewerProps> = ({ content }) => {
    return (
        <div className="markdown-viewer">
            <ReactMarkdown>{content}</ReactMarkdown>
        </div>
    );
};

MarkdownViewer.propTypes = {
    content: PropTypes.string.isRequired,
};

export default MarkdownViewer;
